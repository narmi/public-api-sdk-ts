import { createHmac } from 'crypto';
import { Middleware, RequestContext, FetchParams } from './public-api-sdk/runtime';

export class HeaderSignatureMiddleware implements Middleware {

    constructor(public accessToken: string, public headerSecret: string) {}

    async pre(context: RequestContext): Promise<FetchParams | void> {
        if (context && context.init) {
            const { init } = context;
            const currentTimeISO: string = new Date().toISOString();

            init.headers = {
                ...init.headers,
                'Date': currentTimeISO,
                'Signature': this.getHeaderSignature(currentTimeISO, init.method, context.url),
            };
        }
    }

    private getHeaderSignature(nowTimestamp: string, method: string | undefined, url: string): string {
        const headers = `date: ${nowTimestamp}`;
        const signatureBaseString = `${method} ${url}\n${headers}`;

        const hmac = createHmac('sha256', this.headerSecret);
        hmac.update(signatureBaseString);
        const signature = hmac.digest('base64');

        const authorization = `keyId="${this.accessToken}",algorithm="hmac-sha256",signature="${signature}"`;

        return authorization;
    }
}
