/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.76)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AchPaymentsCreate409Response,
  GeneralError,
  WireTransaction,
  WireTransactionRequest,
} from '../models/index';
import {
    AchPaymentsCreate409ResponseFromJSON,
    AchPaymentsCreate409ResponseToJSON,
    GeneralErrorFromJSON,
    GeneralErrorToJSON,
    WireTransactionFromJSON,
    WireTransactionToJSON,
    WireTransactionRequestFromJSON,
    WireTransactionRequestToJSON,
} from '../models/index';

export interface WiresFedwireTemplatesCreateRequest {
    wireTransactionRequest: WireTransactionRequest;
}

/**
 * 
 */
export class WiresFromFedwireTemplatesApi extends runtime.BaseAPI {

    /**
     * Send a wire using an existing wire template.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Send a wire using a wire template
     */
    async wiresFedwireTemplatesCreateRaw(requestParameters: WiresFedwireTemplatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WireTransaction>> {
        if (requestParameters['wireTransactionRequest'] == null) {
            throw new runtime.RequiredError(
                'wireTransactionRequest',
                'Required parameter "wireTransactionRequest" was null or undefined when calling wiresFedwireTemplatesCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/wires/fedwire_templates/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WireTransactionRequestToJSON(requestParameters['wireTransactionRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WireTransactionFromJSON(jsonValue));
    }

    /**
     * Send a wire using an existing wire template.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Send a wire using a wire template
     */
    async wiresFedwireTemplatesCreate(requestParameters: WiresFedwireTemplatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WireTransaction> {
        const response = await this.wiresFedwireTemplatesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
