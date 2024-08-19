import { createHmac } from 'crypto';
import { Middleware, RequestContext, FetchParams } from './generated-sdk/index';

export class HeaderSignatureMiddleware implements Middleware {

    constructor(public accessToken: string, public headerSecret: string) {}

    async pre(context: RequestContext): Promise<FetchParams | void> {
        if (context && context.init) {
            const { init } = context;
            const currentTimeISO: string = new Date().toISOString();

            init.headers = {
                ...init.headers,
                'Date': currentTimeISO,
                'Signature': this.getHeaderSignature(currentTimeISO),
            };
        }
    }

    private getHeaderSignature(nowTimestamp: string): string {
        const hmac = createHmac("sha256", this.headerSecret)
        hmac.update(`date: ${nowTimestamp}`)
        const digest = hmac.digest('base64');
        const signature = `keyId="${this.accessToken}",algorithm="hmac-sha256",signature="${digest}",headers="date"`;

        return signature;
    }
}
