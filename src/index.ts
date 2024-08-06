import express from 'express';
import * as publicApiSDK from './public-api-sdk/index';
import { Configuration, ResponseError } from './public-api-sdk/runtime';
import { HeaderSignatureMiddleware } from './middleware';
import dotenv from 'dotenv';

dotenv.config();

export const tokenUrl = process.env.ROOT_URL + "/v2/oauth/token/"
export const authorizeUrl = process.env.ROOT_URL + "/v2/oauth/authorize"
export const SCOPES = "read write openid fdx:accountdetailed:read fdx:transactions:read"

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
    basePath: process.env.ROOT_URL,
    accessToken: accessToken,
    middleware: [new HeaderSignatureMiddleware(accessToken, headerSecret)]
  })
}

app.get('/', async (req: express.Request, res: express.Response) => {
  const cookies = parseCookies(req.headers.cookie);
  const APIS = Object.keys(publicApiSDK).filter((k) => k.endsWith("Api"))
  res.send({"token": cookies.access_token, "secret": cookies.header_secret, "availableApis": APIS})
})

app.get('/login/', async (req: express.Request, res: express.Response) => {
  res.redirect(
    302,
    authorizeUrl +
      `?client_id=${process.env.CLIENT_ID}&` +
      `redirect_uri=${process.env.REDIRECT_URI}&` +
      `response_type=code&` +
      `scope=${SCOPES}`
    );
});

app.get('/receive-authorization-code', async (req: express.Request, res: express.Response) => {
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_uri: process.env.REDIRECT_URI,
    })
  });

  if (!response.ok) {
    res.send(response)
    throw new Error(`Error: ${response.statusText}`);
  }
  
  const responseData = await response.json();

  res.cookie('access_token', responseData.access_token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    httpOnly: true,
    sameSite: 'lax'
  });

  res.cookie('refresh_token', responseData.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      httpOnly: true,
      sameSite: 'lax'
  });

  res.cookie('header_secret', responseData.secret, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      httpOnly: true,
      sameSite: 'lax'
  });

  res.cookie('id_token', responseData.id_token, {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
      sameSite: 'lax'
  });

  res.redirect('/');
})

app.get('/account_balances', async (req: express.Request, res: express.Response) => {
  const cookies = parseCookies(req.headers.cookie);
  let api = new publicApiSDK["AccountBalancesApi"](getConfiguration(cookies.access_token, cookies.header_secret))
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

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
