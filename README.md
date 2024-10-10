# Getting started
1. Request `testuser` login credentials as well as OAuth application credentials from Narmi.
2. Download your target build from the (releases tag)[https://github.com/narmi/public-api-sdk-ts/tags]
   - Alternatively you can clone via `git clone git@github.com:narmi/public-api-sdk-ts.git` and then checkout the release version.
   - ex. `git checkout v2024.10.34`
3. `unzip` and `cd` into the project directory
```bash
$ unzip public-api-sdk-ts-<release_name>.zip
$ cd public-api-sdk-ts
```
4. Install [Node.js](https://nodejs.org/en/download/package-manager/current) v22.4.1. This should include `npm`, but if not also install npm@v10.8.2.
5. Create `.env` file in root directory and set values for OAuth and other configuration.
```ini
# paste the following variables into your .env file
CLIENT_ID=<oauth client id>
CLIENT_SECRET=<oauth client secret>
REDIRECT_URI=<url to redirect to during oauth2 flow>
AUTH_URL=<url to the oauth2 authentication endpoint>
API_URL=<url to the hosted api instance>
PORT=3000
```
6. Install dependencies  
```bash
npm install --include=dev
```
7. Build the test app
```bash
npm run build
```
8. Start the test app
```bash
npm start
```
9. Navigate to the test app login page http://localhost:3000/login and log in using the `testuser` account

You should now be able to see the running test app pull data from the Narmi Public API

# Understanding How it Works

The generated API creates a series of classes representing each *tag* of the documenation at https://online.sandbox.narmi.dev/v1/docs as an API. For instance, https://online.sandbox.narmi.dev/v1/docs#tag/accounts becomes: 

```typescript
import * as publicApiSDK from "../sdk/index";
let apiClass = publicApiSDK.AccountsApi
```

Each API must be provided with a configuration object when instantiated for authentication purposes. A utility has been defined at `public-api-sdk/src/utils.ts` to make this easier:

```typescript
let api = new publicApiSDK.AccountsApi(publicApiSDK.getConfiguration(access_token, header_secret))
```

Each API method is defined to represent an operation id from the documentation, so https://online.sandbox.narmi.dev/v1/docs#tag/accounts/operation/accounts_list becomes `accountsList`:

```typescript
let response = await api.accountsList()
```

Responses will be promises resolving to typed data structures, allowing typescript compatible linters to assist you with interacting with them. In the event of an error response, the SDK will throw an error instead of returning the unadultered response, so it's best to try/catch:
```typescript
  try {
    let response = await api.accountsRetrieve({"uuid": req.params.accountId})
    res.render("account", response)
  } catch(e) {
    utils.handleError(e, res)
  }
```

These examples are taken from `public-api-sdk/src/test-express-app/index.ts`, which powers the introductory application. 

## API Rubric
| Operation ID                            | SDK Verified | Schemathesis Verified | Notes/Considerations |
|-----------------------------------------|--------------|-----------------------|----------------------|
| account_balances_list                   | 🟢           | 🟢                    |                      |
| account_balances_retrieve               | 🌕           | 🟢                    |                      |
| accounts_list                           | 🟢           | 🟢                    |                      |
| accounts_create                         | 🌕           | 🌕                    |                      |
| user_transactions_list                  | 🌕           | 🌕                    |                      |
| accounts_documents_retrieve             | 🌕           | 🟢                    |                      |
| accounts_holds_list                     | 🌕           | 🟢                    |                      |
| accounts_stops_list                     | 🌕           | 🟢                    |                      |
| accounts_stops_create                   | 🌕           | 🌕                    |                      |
| accounts_transactions_download_retrieve | 🌕           | 🟢                    |                      |
| accounts_retrieve                       | 🟢           | 🟢                    |                      |
| accounts_update                         | 🌕           | 🌕                    |                      |
| accounts_destroy                        | 🌕           | 🌕                    |                      |
| account_verify                          | 🌕           | 🌕                    |                      |
| accounts_withdrawals_create             | 🌕           | 🌕                    |                      |
| account_verify_instant                  | 🌕           | 🌕                    |                      |
| automatic_savings_enrollment_list       | 🌕           | 🟢                    |                      |
| automatic_savings_enrollment_create     | 🌕           | 🌕                    |                      |
| automatic_savings_enrollment_destroy    | 🌕           | 🌕                    |                      |
| cards_list                              | 🌕           | 🟢                    |                      |
| cards_retrieve                          | 🌕           | 🌕                    |                      |
| cards_update                            | 🌕           | 🌕                    |                      |
| cards_address_retrieve                  | 🌕           | 🟢                    |                      |
| cards_lock_create                       | 🌕           | 🌕                    |                      |
| cards_replace_card_create               | 🌕           | 🌕                    |                      |
| cards_unlock_create                     | 🌕           | 🌕                    |                      |
| deposits_list                           | 🌕           | 🟢                    |                      |
| deposits_create                         | 🌕           | 🌕                    |                      |
| deposits_retrieve                       | 🌕           | 🟢                    |                      |
| documents_list                          | 🌕           | 🟢                    |                      |
| documents_retrieve                      | 🌕           | 🟢                    |                      |
| enroll_create                           | 🌕           | 🌕                    |                      |
| enroll_verify_create                    | 🌕           | 🌕                    |                      |
| enrollments_create                      | 🌕           | 🌕                    |                      |
| fedwire_templates_list                  | 🌕           | 🟢                    |                      |
| fedwire_templates_create                | 🌕           | 🌕                    |                      |
| fedwire_templates_retrieve              | 🌕           | 🟢                    |                      |
| fedwire_templates_update                | 🌕           | 🌕                    |                      |
| fedwire_templates_destroy               | 🌕           | 🌕                    |                      |
| institution_get                         | 🌕           | 🟢                    |                      |
| institution_name_retrieve               | 🌕           | 🟢                    |                      |
| me_list                                 | 🌕           | 🟢                    |                      |
| mfa_list                                | 🌕           | 🟢                    |                      |
| mfa_destroy                             | 🌕           | 🌕                    |                      |
| payees_list                             | 🌕           | 🟢                    |                      |
| payees_create                           | 🌕           | 🌕                    |                      |
| payees_retrieve                         | 🌕           | 🌕                    |                      |
| payees_update                           | 🌕           | 🌕                    |                      |
| payees_destroy                          | 🌕           | 🌕                    |                      |
| payments_list                           | 🌕           | 🟢                    |                      |
| payments_create                         | 🌕           | 🌕                    |                      |
| payments_destroy                        | 🌕           | 🌕                    |                      |
| ping_retrieve                           | 🌕           | 🌕                    |                      |
| subscriptions_list                      | 🌕           | 🟢                    |                      |
| subscriptions_create                    | 🌕           | 🌕                    |                      |
| subscriptions_retrieve                  | 🌕           | 🟢                    |                      |
| subscriptions_update                    | 🌕           | 🌕                    |                      |
| subscriptions_partial_update            | 🌕           | 🌕                    |                      |
| subscriptions_destroy                   | 🌕           | 🌕                    |                      |
| support_info_retrieve                   | 🌕           | 🟢                    |                      |
| teams_list                              | 🌕           | 🟢                    |                      |
| thread_files_policies_create            | 🌕           | 🌕                    |                      |
| threads_retrieve                        | 🌕           | 🟢                    |                      |
| threads_list                            | 🌕           | 🟢                    |                      |
| threads_create                          | 🌕           | 🌕                    |                      |
| threads_messages_list                   | 🌕           | 🟢                    |                      |
| user_messages_create                    | 🌕           | 🌕                    |                      |
| threads_messages_retrieve               | 🌕           | 🟢                    |                      |
| user_threads_retrieve                   | 🌕           | 🌕                    |                      |
| user_threads_update                     | 🌕           | 🌕                    |                      |
| threads_mark_read_update                | 🌕           | 🌕                    |                      |
| user_transactions_list_2                | 🌕           | 🌕                    |                      |
| transactions_list                       | 🌕           | 🟢                    |                      |
| transactions_retrieve                   | 🌕           | 🟢                    |                      |
| transactions_update                     | 🌕           | 🌕                    |                      |
| transactions_images_list                | 🌕           | 🟢                    |                      |
| transfers_list                          | 🌕           | 🟢                    |                      |
| transfers_create                        | 🌕           | 🌕                    |                      |
| transfers_scheduled_list                | 🌕           | 🟢                    |                      |
| transfers_scheduled_create              | 🌕           | 🌕                    |                      |
| transfers_scheduled_update              | 🌕           | 🌕                    |                      |
| transfers_scheduled_destroy             | 🌕           | 🌕                    |                      |
| users_list                              | 🌕           | 🟢                    |                      |
| users_retrieve                          | 🌕           | 🟢                    |                      |
| users_update                            | 🌕           | 🌕                    |                      |
| users_enrollment_code_create            | 🌕           | 🌕                    |                      |
| users_enrollment_complete_create        | 🌕           | 🌕                    |                      |
| users_estatements_create                | 🌕           | 🌕                    |                      |
| users_estatements_destroy               | 🌕           | 🌕                    |                      |
| wire_recipients_list                    | 🌕           | 🟢                    |                      |
| wire_recipients_create                  | 🌕           | 🌕                    |                      |
| wire_recipients_retrieve                | 🌕           | 🟢                    |                      |
| wire_recipients_update                  | 🌕           | 🌕                    |                      |
| wire_recipients_partial_update          | 🌕           | 🌕                    |                      |
| wire_recipients_destroy                 | 🌕           | 🌕                    |                      |
| wires_fedwire_templates_create          | 🌕           | 🌕                    |                      |
