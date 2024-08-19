import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import * as publicApiSDK from "../sdk/index"

dotenv.config();

export const tokenUrl = process.env.AUTH_URL + "/v2/oauth/token/"
export const authorizeUrl = process.env.AUTH_URL + "/v2/oauth/authorize/"
export const SCOPES = "read write openid fdx:accountdetailed:read fdx:transactions:read"

const app = express();
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true})); 

app.get('/', async (req: express.Request, res: express.Response) => {
  const cookies = publicApiSDK.parseCookies(req.headers.cookie);
  if (!cookies.access_token || !cookies.header_secret) {
    res.redirect("/login/")
  } else {
    res.render("index", {"msg": null})
  }
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

app.get('/receive-authorization-code/', async (req: express.Request, res: express.Response) => {
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
  // For dev, save to session cookie, in production, best to persist within application.
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
  res.render("index", {"msg": "You are logged in!", "accessToken": responseData.access_token, "secret": responseData.secret})
})

app.get('/balances/', async (req: express.Request, res: express.Response) => {
  const cookies = publicApiSDK.parseCookies(req.headers.cookie);
  let api = new publicApiSDK.AccountBalancesApi(publicApiSDK.getConfiguration(cookies.access_token, cookies.header_secret))
  try {
    let response = await api.accountBalancesList()
    res.render("account-balances", response)
  } catch(e) {
    publicApiSDK.handleError(e, res)
  }
});

app.get('/accounts/:accountId/', async (req: express.Request, res: express.Response) => {
  const cookies = publicApiSDK.parseCookies(req.headers.cookie);
  let api = new publicApiSDK.AccountsApi(publicApiSDK.getConfiguration(cookies.access_token, cookies.header_secret))
  try {
    let response = await api.accountsRetrieve({"uuid": req.params.accountId})
    res.render("account", response)
  } catch(e) {
    publicApiSDK.handleError(e, res)
  }
});

app.get('/accounts/', async (req: express.Request, res: express.Response) => {
  const cookies = publicApiSDK.parseCookies(req.headers.cookie);
  let api = new publicApiSDK.AccountsApi(publicApiSDK.getConfiguration(cookies.access_token, cookies.header_secret))
  try {
    let response = await api.accountsList()
    res.render("accounts", response);
  } catch(e) {
    publicApiSDK.handleError(e, res)
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
