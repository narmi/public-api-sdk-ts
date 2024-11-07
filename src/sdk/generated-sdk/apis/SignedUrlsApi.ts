/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.52)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface SignedUrlsMxUrlsRetrieveRequest {
    appId: string;
}

/**
 * 
 */
export class SignedUrlsApi extends runtime.BaseAPI {

    /**
     * Based on integrations/sso/factory.py, there are no SSO use-cases for MX.
     */
    async signedUrlsMxUrlsRetrieveRaw(requestParameters: SignedUrlsMxUrlsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['appId'] == null) {
            throw new runtime.RequiredError(
                'appId',
                'Required parameter "appId" was null or undefined when calling signedUrlsMxUrlsRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/signed_urls/mx/urls/{app_id}`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters['appId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Based on integrations/sso/factory.py, there are no SSO use-cases for MX.
     */
    async signedUrlsMxUrlsRetrieve(requestParameters: SignedUrlsMxUrlsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.signedUrlsMxUrlsRetrieveRaw(requestParameters, initOverrides);
    }

}
