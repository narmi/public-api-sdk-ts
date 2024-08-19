import express from 'express';
import { Configuration, ResponseError } from './generated-sdk/runtime';
import { HeaderSignatureMiddleware } from './middleware';

export function parseCookies(cookieHeader: string | undefined) {
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


export function getConfiguration(accessToken: string, headerSecret: string): Configuration {
    return new Configuration({
      basePath: process.env.API_URL,
      accessToken: accessToken,
      middleware: [new HeaderSignatureMiddleware(accessToken, headerSecret)]
    })
  }
    
export async function handleError(e: any, res: express.Response): Promise<void> {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    if (e instanceof ResponseError) {
        res.status(e.response.status).send(await e.response.json());
    } else if (e instanceof Error) {
        res.status(424).send(e.message)
    } else {
        res.status(500).send("Unknown Error")
    }
}