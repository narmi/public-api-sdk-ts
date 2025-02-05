/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.217)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  SupportInfoResponse,
} from '../models/index';
import {
    SupportInfoResponseFromJSON,
    SupportInfoResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class SupportApi extends runtime.BaseAPI {

    /**
     * Supplies information on support contacts, faqs, links, and expected support response time.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List support info
     */
    async supportInfoRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SupportInfoResponse>> {
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
            path: `/v1/support/info/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SupportInfoResponseFromJSON(jsonValue));
    }

    /**
     * Supplies information on support contacts, faqs, links, and expected support response time.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List support info
     */
    async supportInfoRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SupportInfoResponse> {
        const response = await this.supportInfoRetrieveRaw(initOverrides);
        return await response.value();
    }

}
