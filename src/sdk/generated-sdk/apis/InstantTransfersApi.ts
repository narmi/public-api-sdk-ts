/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.8)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  FedNowEligibility,
} from '../models/index';
import {
    FedNowEligibilityFromJSON,
    FedNowEligibilityToJSON,
} from '../models/index';

export interface TransfersInstantEligibilityRetrieveRequest {
    routingNumber: string;
}

/**
 * 
 */
export class InstantTransfersApi extends runtime.BaseAPI {

    /**
     * Check if the provided routing number is enrolled and active in the FedNow network    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Check eligibility for instant transfers
     */
    async transfersInstantEligibilityRetrieveRaw(requestParameters: TransfersInstantEligibilityRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FedNowEligibility>> {
        if (requestParameters['routingNumber'] == null) {
            throw new runtime.RequiredError(
                'routingNumber',
                'Required parameter "routingNumber" was null or undefined when calling transfersInstantEligibilityRetrieve().'
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
            path: `/v1/transfers/instant/eligibility/{routing_number}/`.replace(`{${"routing_number"}}`, encodeURIComponent(String(requestParameters['routingNumber']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FedNowEligibilityFromJSON(jsonValue));
    }

    /**
     * Check if the provided routing number is enrolled and active in the FedNow network    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Check eligibility for instant transfers
     */
    async transfersInstantEligibilityRetrieve(requestParameters: TransfersInstantEligibilityRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FedNowEligibility> {
        const response = await this.transfersInstantEligibilityRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
