import express from 'express';
import { AccountBalancesApi } from './public-api-sdk/index';
import { Configuration, ResponseError } from './public-api-sdk/runtime';
import { HeaderSignatureMiddleware } from './middleware';
import { TARGET_APP, SCOPES, rootUrl, tokenUrl, authorizeUrl} from './constants';


const app = express();
const port = 3000;

function parseCookies(cookieHeader: string | undefined) {
  const cookies: { [key: string]: string } = {};
  if (cookieHeader) {
      cookieHeader.split(';').forEach(cookie => {
          const [name, ...rest] = cookie.split('=');
          const value = rest.join('=').trim();
          if (name && value) {
              cookies[name.trim()] = decodeURIComponent(value);
          }
      });
  }
  return cookies;
};

function getConfiguration(accessToken: string, headerSecret: string): Configuration {
  return new Configuration({
    basePath: rootUrl,
    accessToken: accessToken,
    middleware: [new HeaderSignatureMiddleware(accessToken, headerSecret)]
  })
}

app.get('/', async (req: express.Request, res: express.Response) => {
  const cookies = parseCookies(req.headers.cookie);
  res.send({"token": cookies.access_token, "secret": cookies.header_secret})
})


app.get('/login/', async (req: express.Request, res: express.Response) => {
  res.redirect(
    302,
    authorizeUrl +
      `?client_id=${TARGET_APP.clientId}&` +
      `redirect_uri=${TARGET_APP.redirectUris}&` +
      `response_type=code&` +
      `scope=${SCOPES}&`
    );
});

app.get('/receive-authorization-code', async (req: express.Request, res: express.Response) => {
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        client_id: TARGET_APP.clientId,
        client_secret: TARGET_APP.unencodedClientSecret,
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_uri: TARGET_APP.redirectUris,
    })
  });

  if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
  }
  
  const responseData = await response.json();
  res.cookie('access_token', responseData.access_token, {
    maxAge: 60 * 60 * 1000, // 1 hour, short-lived
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // secure in production
    sameSite: 'lax'
  });

  res.cookie('refresh_token', responseData.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week, long-lived
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
  });

  res.cookie('header_secret', responseData.secret, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week, long-lived
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
  });

  res.cookie('id_token', responseData.id_token, {
      maxAge: 60 * 60 * 1000, // 1 hour, short-lived
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
  });

  res.redirect('/');
})


app.get('/account_balances', async (req: express.Request, res: express.Response) => {
  const cookies = parseCookies(req.headers.cookie);
  let api = new AccountBalancesApi(getConfiguration(cookies.access_token, cookies.header_secret))
  try {
    let response = await api.accountBalancesList()
    res.send(response);
  } catch(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    if (e instanceof ResponseError) {
      res.status(e.response.status).send(await e.response.json());
    } else if (e instanceof Error) {
      res.status(424).send(e.message)
    } else {
      res.status(500).send("Unknown Error")
    }

  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
