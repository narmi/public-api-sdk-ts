/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.69)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ACHDetails,
  AchDetailsCreate400Response,
  PermissionDeniedError,
} from '../models/index';
import {
    ACHDetailsFromJSON,
    ACHDetailsToJSON,
    AchDetailsCreate400ResponseFromJSON,
    AchDetailsCreate400ResponseToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
} from '../models/index';

/**
 * 
 */
export class AchDestinationsApi extends runtime.BaseAPI {

    /**
     * Create a set of ACH details that can be used as a destination for ACH Payments.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create an ACH destination
     */
    async achDetailsCreateRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ACHDetails>> {
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
            path: `/v1/ach_details/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ACHDetailsFromJSON(jsonValue));
    }

    /**
     * Create a set of ACH details that can be used as a destination for ACH Payments.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create an ACH destination
     */
    async achDetailsCreate(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ACHDetails> {
        const response = await this.achDetailsCreateRaw(initOverrides);
        return await response.value();
    }

}
