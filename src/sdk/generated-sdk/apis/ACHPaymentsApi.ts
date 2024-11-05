/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.31)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ACHPayment,
  ACHPaymentRequest,
  AchPaymentsCreate409Response,
  GeneralError,
} from '../models/index';
import {
    ACHPaymentFromJSON,
    ACHPaymentToJSON,
    ACHPaymentRequestFromJSON,
    ACHPaymentRequestToJSON,
    AchPaymentsCreate409ResponseFromJSON,
    AchPaymentsCreate409ResponseToJSON,
    GeneralErrorFromJSON,
    GeneralErrorToJSON,
} from '../models/index';

export interface AchPaymentsCreateRequest {
    aCHPaymentRequest: ACHPaymentRequest;
}

/**
 * 
 */
export class ACHPaymentsApi extends runtime.BaseAPI {

    /**
     * Send an ACH Payment using an existing recipient and set of external account details (i.e. account number, routing number, account type, account purpose).
     * Send an ACH Payment
     */
    async achPaymentsCreateRaw(requestParameters: AchPaymentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ACHPayment>> {
        if (requestParameters['aCHPaymentRequest'] == null) {
            throw new runtime.RequiredError(
                'aCHPaymentRequest',
                'Required parameter "aCHPaymentRequest" was null or undefined when calling achPaymentsCreate().'
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
            path: `/v1/ach_payments/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ACHPaymentRequestToJSON(requestParameters['aCHPaymentRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ACHPaymentFromJSON(jsonValue));
    }

    /**
     * Send an ACH Payment using an existing recipient and set of external account details (i.e. account number, routing number, account type, account purpose).
     * Send an ACH Payment
     */
    async achPaymentsCreate(requestParameters: AchPaymentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ACHPayment> {
        const response = await this.achPaymentsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
