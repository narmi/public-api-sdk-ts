/* global fail, warn */
// Reference guide: https://danger.systems/js/reference.html
import { danger } from "danger";
const fs = require("fs");
const path = require("path");

const BANKING_ROOT = "../";

const {
  parser: parseTitle,
  toConventionalChangelogFormat: toTitleData,
} = require("@conventional-commits/parser");

const modifiedFiles = danger.git.modified_files;
const newFiles = danger.git.created_files;
const changedFiles = [...modifiedFiles, ...newFiles];

const { pr } = danger.github;
const bodyAndTitle = pr.body + pr.title;
const targetBranch = pr.base.ref;
const sourceBranch = pr.head.ref;
const lineChanges = pr.additions + pr.deletions;
const isAutoCreated = pr.user.login === "narmirobot" || pr.user.type === "Bot";
const isHighRisk = pr.title.includes("!");
const isForwardPort = sourceBranch.startsWith("merge/");
const VALID_PR_TITLE_TYPES = [
  "feat", // new feature
  "fix", // bug fix
  "build", // change to the build process
  "chore", // updating dependencies, misc automation tasks
  "ci", // commit introduced by CI process
  "docs", // documentation change
  "refactor", // refactor code without changing behavior
  "test", // add test coverage
  "style", // cosmetic-only changes
  "perf", // code change that improves performance
];

/**
 * @param {String} title PR title
 * @returns {Boolean} `true` if the PR title follows conventional commits spec
 */
const isTitleValid = (title) => {
  let isValid;
  try {
    parseTitle(title);
    isValid = true;
  } catch (err) {
    isValid = false;
  }
  return isValid;
};

/**
 * @param {String} title PR title
 * @returns {Boolean} `true` if the change type is a valid type (e.g. `feat`)
 */
const isTitleTypeValid = (title) => {
  const { type } = toTitleData(parseTitle(title));
  return VALID_PR_TITLE_TYPES.includes(type);
};

// No PR is too small to warrant a sentence or two of summary
if (!pr.body || pr.body.length === 0) {
  fail("Please add a description to your PR.");
}

// title should follow [conventional-commits standard](https://www.conventionalcommits.org/en/v1.0.0/#examples)
if (!isTitleValid(pr.title)) {
  if (!isAutoCreated) {
    fail(
      `Format your PR title as follows: <type>(<scope>)<high risk indicator: "!">: description\n[Examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)`
    );
  }
}

// if the title follows conventional-commits, the <type> should be a vaLid type
if (isTitleValid(pr.title) && !isTitleTypeValid(pr.title)) {
  fail(
    `Conventional Commits <type> must be valid (one of: ${VALID_PR_TITLE_TYPES.join(
      ", "
    )})`
  );
}

// for High-risk PRs, we follow additional procedure
if (isHighRisk && !isAutoCreated) {
  warn(`
This is a HIGH RISK PR
 - [ ] Please approach this in a team with at least 2 other people
 - [ ] Establish clear intended results ahead of testing
 - [ ] Perform manual QA on any affected apps
 - [ ] 2 people must approve this PR
 - [ ] When applicable, ensure 100% test coverage on this diff (see the CodeCov Patch Status Check)`);
}

const bodyandtitle = bodyAndTitle.toLowerCase();
const githubIssuePattern = /#[0-9]+/;
const linearIssuePattern = /((?<=\s)|^)[a-zA-Z]{1,6}-[1-9][0-9]{0,5}((?=[\s,])|$)/;
const narmiGithubPattern =
  /https?:\/\/github.com\/narmi\/[^\\\n]+\/(issues|pull|security\/dependabot)\/[0-9]+/;
// https://sentry.io/organizations/narmi/issues/996270778
// https://sentry.io/narmi/banking-production/issues/608585037
const narmiSentryPattern = /https?:\/\/narmi\.sentry\.io\/issues\/[0-9]+/;
const narmiLinearPattern = /https?:\/\/linear\.app\/narmi\/issue\/[\w]+/;
const noIssueLinks =
  !bodyandtitle.match(githubIssuePattern) &&
  !bodyAndTitle.match(linearIssuePattern) &&
  !bodyandtitle.match(narmiGithubPattern) &&
  !bodyandtitle.match(narmiLinearPattern) &&
  !bodyandtitle.match(narmiSentryPattern);
if (noIssueLinks && lineChanges > 25 && !isAutoCreated) {
  fail("Please reference at least one issue when making a nontrivial change.");
}

const deployChanged = danger.git.modified_files.includes(
  ".github/workflows/deploy-banking.yml",
);

if (deployChanged && !isHighRisk && !isAutoCreated ) {
  fail("Any changes to deploy banking must be marked as high risk");
}

const narmiGithubActionPattern =
/https?:\/\/github\.com\/narmi\/[^\\\n]+\/actions\/runs\/[0-9]+/;

if (deployChanged && !bodyandtitle.match(narmiGithubActionPattern) && !isAutoCreated) {
  fail("You must include a link to a working test deploy of this branch");
}

const ESBDocsChanged = danger.git.modified_files.filter((f) =>
  f.match(/indigo\/static\/swaggerdoc_esbcore\.yml/)
).length;

if (ESBDocsChanged) {
  (async function checkTemplateContents() {
    let diff = await danger.git.diffForFile(
      "indigo/static/swaggerdoc_esbcore.yml"
    );
    if (!diff) {
      warn("ESB doc change detected, but no diff found");
      return;
    }
    let versionMatcher = /version: (.*)/;
    let currentVersionMatch = diff.removed.match(versionMatcher);
    if (!currentVersionMatch) {
      warn("Changes to ESB documentation must include a version bump.");
      return;
    }
    let currentVersion = currentVersionMatch[1];
    let splitCurrentVersion = currentVersion.split(".");
    let nextVersion = diff.added.match(versionMatcher)[1];
    let splitNextVersion = nextVersion.split(".");
    let superNext = parseInt(splitNextVersion[0]);
    let superCurrent = parseInt(splitCurrentVersion[0]);
    let esbWarningMsg = `Current ESB version: ${currentVersion}, your version: ${nextVersion}`;
    if (
      splitNextVersion[0].length !== 4 ||
      (superNext !== superCurrent && superNext !== superCurrent + 1)
    ) {
      warn(
        "ESB super version bump must be incremental, ex. 2022.07.00 => 2023.01.00"
      );
      warn(esbWarningMsg);
    }
    let majorNext = parseInt(splitNextVersion[1]);
    let majorCurrent = parseInt(splitCurrentVersion[1]);
    if (
      splitNextVersion[1].length !== 2 ||
      majorNext > 12 ||
      (majorNext !== 1 &&
        majorNext !== majorCurrent &&
        majorNext !== majorCurrent + 1)
    ) {
      warn(
        "ESB major version bump must be incremental or reset, ex. 2022.07.00 => 2022.08.00 or 2022.07.00 => 2023.01.00"
      );
      warn(esbWarningMsg);
    }

    let minorNext = parseInt(splitNextVersion[2]);
    let minorCurrent = parseInt(splitCurrentVersion[2]);
    if (
      splitNextVersion[2].length !== 2 ||
      minorNext > 99 ||
      (minorNext !== 0 &&
        minorNext !== minorCurrent &&
        minorNext !== minorCurrent + 1)
    ) {
      warn(
        "ESB minor version bump must be incremental or reset, ex. 2022.07.02 => 2022.8.0 or 2022.07.02 => 2022.07.03"
      );
      warn(esbWarningMsg);
    }
  })();
}
const migrationsChanged = danger.git.modified_files.filter((f) =>
  f.match(/migrations\/.*\.py$/)
);
const migrationsCreated = danger.git.created_files.filter((f) =>
  f.match(/migrations\/.*\.py$/)
);
const migrations = migrationsChanged.concat(migrationsCreated);
if (migrations.length && !isHighRisk && !isAutoCreated) {
  fail("Any migration MUST be classified as high-risk");
}
// Remind to rebase before merge if migrations present
if (migrations.length && !isAutoCreated) {
  const message = "This PR includes a migration.";
  const idea = "Please remember to rebase against github main before merging.";
  warn(`${message} - <i>${idea}</i>`);
}
// Detect if there's a data migration
Promise.all(migrations.map((file) => danger.git.diffForFile(file))).then(
  (diffs) => {
    let dataMigrationDetected = false;
    diffs.forEach((diff) => {
      if (diff.added.match(/(RunPython)|(RunSQL)/)) {
        dataMigrationDetected = true;
        if (!diff.added.match(/elidable/) && !isAutoCreated) {
          warn('Data migrations should usually be marked as "elidable"');
        }
      }
    });
    if (dataMigrationDetected && !isAutoCreated) {
      warn(`
  This PR contains a DATA MIGRATION
   - [ ] Needs to happen across 2 releases: the first release creates new columns/tables, the next release removes the old
   - [ ] This migration either does not lock tables for any extended period of time or we have a downtime deploy scheduled
      `);
    }
  }
);
// Detect if there's a feature flag change
danger.git.diffForFile("indigo/settings/institution_features.py").then((diff) => {
  if (!diff?.added) return;

  const featureFlags = diff.added.split(`\n`).map((line) => (
    line.match(/(\w*):.* = Field/)?.[1]
  )).filter((flag) => (flag));

  const prohibitedFeatures = featureFlags.filter((flag) => (
    flag.match(/(_v[0-9])|(_new:)|(new_)/)
  ));
  if (prohibitedFeatures.length) {
    fail(`
  Incoming feature flags must not be named as "new" nor "v2"
  Please give a descriptive name describing what actually changed:
  ${prohibitedFeatures.join(", ")}
    `);
  }
});

// We don't compile the harland clarke java bridge during the build process
const sourceChanged = danger.git.modified_files.includes(
  "integrations/check_order/harland/NarmiHarland.java",
  "integrations/documents/computer_share/NarmiTokenGenerator.java"
);
const compiledChanged = danger.git.modified_files.includes(
  "integrations/check_order/harland/NarmiHarland.class",
  "integrations/documents/computer_share/NarmiTokenGenerator.class"
);
if (sourceChanged && !compiledChanged) {
  const message =
    "Changes were made to java source helpers, but not to compiled counterparts.";
  const idea = "Perhaps you need to run `javac`?";
  fail(`${message} - <i>${idea}</i>`);
}

// Remind to prepend python test files with test_
const pythonTestFilesChanged = danger.git.modified_files.filter((f) =>
  f.match(/.+tests\/.*\.py$/)
);
const pythonTestFilesCreated = danger.git.created_files.filter((f) =>
  f.match(/.+tests\/.*\.py$/)
);
const pythonTestFiles = pythonTestFilesChanged.concat(pythonTestFilesCreated);
const testFileWarnings = pythonTestFiles.reduce((acc, filePath) => {
  const fileName = filePath.split("/").pop();
  if (!fileName.startsWith("test_") && fileName !== "__init__.py") {
    acc.push(filePath);
  }
  return acc;
}, []);
if (testFileWarnings.length > 0) {
  warn(
    `If the following files are test files, please prepend with test_:\n  ${testFileWarnings.join(
      "\n  "
    )}`
  );
}

const apiFilesCreated = danger.git.created_files.filter((f) =>
  f.match(/^(public_api)|(private_api)\/.*/)
);
const apiFilesModified = danger.git.modified_files.filter((f) =>
  f.match(/^(public_api)|(private_api)\/.*/)
);
if (apiFilesCreated.length > 0 || apiFilesModified.length > 0) {
  warn(`
  This PR contains changes to the API. Please ensure that any changes in functionality are reflected in the auto-documentation.
  You can refer to [this notion article](https://www.notion.so/narmi/Documenting-the-API-4a424639c0174633ad476491caf6f358) for general guidelines on documentation.

  If any fields have been added or altered
   - Each field has an appropriate field type
   - When necessary, each field has a description on what it represents or how it works.
   - Each field has an appropriate value set in the examples section of the schema.

  If there are changes to the behavior of the API
   - The endpoints are given a proper tag/summary/description using the proper RESTful verbiages.
   - The documentation's description outlines the general purpose of the endpoint.
   - The documentation includes any error codes that may be encountered when calling the endpoint. \`404\`, \`403\`, and \`401\` may be omitted unless they have special behavior for the endpoint.

  Acceptance Criteria
   - [ ] Any new endpoints are either included or omitted in the documentation using the \`@extend_schema\` decorator.
   - [ ] I have loaded the docs at \`/v1/docs/\`, \`/v1/account_opening/docs/\` or \`/v1/admin/docs/\`, and verified that the changes to the API are properly reflected.`);

}

// Lint rules for modified JS templates
const templateFilesChanged = danger.git.modified_files.filter((f) =>
  f.match(/.+\.(tsx|jsx)$/)
);
const templateFilesCreated = danger.git.created_files.filter((f) =>
  f.match(/.+\.(tsx|jsx)$/)
);
const templateFiles = templateFilesChanged.concat(templateFilesCreated);
(async function checkTemplateContents(files) {
  const contents = await Promise.all(
    files.map((file) =>
      danger.github.utils
        .fileContents(file, pr.head.repo.full_name, pr.head.sha)
        .then((content) => ({ file, content }))
    )
  );

  contents.forEach(({ file, content }) => {
    if (content.length === 0) return;

    const matches = content.match(/type="number"/i);
    // NDS <TextInput> accepts `type="number"`
    const ndsMatches = content.match(/<TextInput/i);
    const ignoreMatches = content.match(/ignore-danger-type-number/i);

    if (!matches || (ndsMatches && ignoreMatches)) return;

    fail(`${file} contains a form input with type="number", which can cause unexpected stepping. Use type="text" \
with inputmode="numeric" or inputmode="decimal" for numeric fields instead.`);
  });
})(templateFiles);

// Add package-lock.json if package.json is modified
const packageJsonChanged = danger.git.modified_files.some(
  (path) => path.indexOf("package.json") !== -1
);
if (packageJsonChanged) {
  const message = "Changes were made to package.json";
  const idea =
    "Please remember to push package-lock.json when package.json is modified.";
  warn(`${message} - <i>${idea}</i>`);
}

// Reminder to check naf.html if base.html is changed
const baseTemplateChanged = danger.git.modified_files.includes(
  "indigo/templates/indigo/base.html"
);
if (baseTemplateChanged) {
  const message = "Changes were made to indigo/templates/indigo/base.html";
  const idea =
    "Please remember to check whether changes are needed for indigo/templates/indigo/naf.html";
  warn(`${message} - <i>${idea}</i>`);
}

// Data migration rules
// Migrations to release branches not allowed
if (migrationsCreated.length > 0 && targetBranch.includes("releases") && !isForwardPort) {
  const message = "Migrations into release branches are not allowed.";
  const idea =
    'If it is necessary and urgent this migration is merged, ensure you are following best practices defined <a href="https://www.notion.so/narmi/How-to-fix-conflicting-migrations-in-a-PR-3e27c7f2ea6f4a7a8a4cd3542e64fd31">here</a>, and have a repo admin merge this PR.';
  fail(`${message} - <i>${idea}</i>`);
}

// Migrations with run python must have a migration test file
// + Warning about .save() in data migrations
Promise.all(
  migrationsCreated.map(
    (file) =>
      new Promise((resolve, reject) => {
        danger.git.diffForFile(file).then((diff) => resolve([file, diff]));
      })
  )
).then((diffs) => {
  diffs.forEach(([filename, diff]) => {
    if (diff.added.match(/RunPython/)) {
      if (diff.added.match(/.save\(\)/)) {
        const message = "Data migration contains .save() without update_fields";
        const idea =
          "Ensure that this is the behavior you expect and additional values like updated_at will also be updated.";
        warn(`${message} - <i>${idea}</i>`);
      }
      const path = filename.split("/");
      const expectedTestFile = `test_${path[path.length - 1]}`;
      const found = danger.git.created_files.some((f) => {
        return f.endsWith(expectedTestFile);
      });
      if (!found) {
        const message =
          "Migrations with a RunPython step require a migration test.";
        const idea = `If you already have a migration test make sure its named ${expectedTestFile}`;
        fail(`${message} - <i>${idea}</i>`);
      }
    }
  });
});
