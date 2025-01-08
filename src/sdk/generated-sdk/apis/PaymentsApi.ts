/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.27)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  BillPayDestroy,
  InvalidRequestError,
  PaginatedBillPaymentList,
  Payment,
  PaymentCreateDocRequest,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    BillPayDestroyFromJSON,
    BillPayDestroyToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    PaginatedBillPaymentListFromJSON,
    PaginatedBillPaymentListToJSON,
    PaymentFromJSON,
    PaymentToJSON,
    PaymentCreateDocRequestFromJSON,
    PaymentCreateDocRequestToJSON,
} from '../models/index';

export interface PaymentsCreateRequest {
    paymentCreateDocRequest: PaymentCreateDocRequest;
}

export interface PaymentsDestroyRequest {
    id: string;
}

export interface PaymentsListRequest {
    category?: PaymentsListCategoryEnum;
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class PaymentsApi extends runtime.BaseAPI {

    /**
     * Creates a bill payment for the authenticated user.Payments use a third-party service (typically iPay) and transfers can execute from a user\'s account to a specified payee.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Creates a bill payment
     */
    async paymentsCreateRaw(requestParameters: PaymentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payment>> {
        if (requestParameters['paymentCreateDocRequest'] == null) {
            throw new runtime.RequiredError(
                'paymentCreateDocRequest',
                'Required parameter "paymentCreateDocRequest" was null or undefined when calling paymentsCreate().'
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
            path: `/v1/payments/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentCreateDocRequestToJSON(requestParameters['paymentCreateDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentFromJSON(jsonValue));
    }

    /**
     * Creates a bill payment for the authenticated user.Payments use a third-party service (typically iPay) and transfers can execute from a user\'s account to a specified payee.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Creates a bill payment
     */
    async paymentsCreate(requestParameters: PaymentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payment> {
        const response = await this.paymentsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an authenticated user\'s bill payment via the third-party integration (typically iPay).    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete a bill payment
     */
    async paymentsDestroyRaw(requestParameters: PaymentsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BillPayDestroy>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling paymentsDestroy().'
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
            path: `/v1/payments/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BillPayDestroyFromJSON(jsonValue));
    }

    /**
     * Deletes an authenticated user\'s bill payment via the third-party integration (typically iPay).    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete a bill payment
     */
    async paymentsDestroy(requestParameters: PaymentsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BillPayDestroy> {
        const response = await this.paymentsDestroyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the authenticated user\'s bill payments. Payments use a third-party service (typically iPay) and represent transfers from a user\'s account to a specified payee.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List bill payments
     */
    async paymentsListRaw(requestParameters: PaymentsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedBillPaymentList>> {
        const queryParameters: any = {};

        if (requestParameters['category'] != null) {
            queryParameters['category'] = requestParameters['category'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("OAuth2", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/payments/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedBillPaymentListFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s bill payments. Payments use a third-party service (typically iPay) and represent transfers from a user\'s account to a specified payee.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List bill payments
     */
    async paymentsList(requestParameters: PaymentsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedBillPaymentList> {
        const response = await this.paymentsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const PaymentsListCategoryEnum = {
    History: 'history',
    Scheduled: 'scheduled'
} as const;
export type PaymentsListCategoryEnum = typeof PaymentsListCategoryEnum[keyof typeof PaymentsListCategoryEnum];
