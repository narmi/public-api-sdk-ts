/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.234)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BillPayDestroy,
  InvalidRequestError,
  PaginatedBillPayeeList,
  Payee,
  PayeeCreateDocRequest,
} from '../models/index';
import {
    BillPayDestroyFromJSON,
    BillPayDestroyToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    PaginatedBillPayeeListFromJSON,
    PaginatedBillPayeeListToJSON,
    PayeeFromJSON,
    PayeeToJSON,
    PayeeCreateDocRequestFromJSON,
    PayeeCreateDocRequestToJSON,
} from '../models/index';

export interface PayeesCreateRequest {
    payeeCreateDocRequest: PayeeCreateDocRequest;
}

export interface PayeesDestroyRequest {
    id: string;
}

export interface PayeesListRequest {
    limit?: number;
    offset?: number;
}

export interface PayeesRetrieveRequest {
    id: string;
}

export interface PayeesUpdateRequest {
    id: string;
    payeeCreateDocRequest: PayeeCreateDocRequest;
}

/**
 * 
 */
export class PayeesApi extends runtime.BaseAPI {

    /**
     * Creates a bill payment payee via third-party integration (typically iPay). Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a bill payment payee
     */
    async payeesCreateRaw(requestParameters: PayeesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payee>> {
        if (requestParameters['payeeCreateDocRequest'] == null) {
            throw new runtime.RequiredError(
                'payeeCreateDocRequest',
                'Required parameter "payeeCreateDocRequest" was null or undefined when calling payeesCreate().'
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
            path: `/v1/payees/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PayeeCreateDocRequestToJSON(requestParameters['payeeCreateDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayeeFromJSON(jsonValue));
    }

    /**
     * Creates a bill payment payee via third-party integration (typically iPay). Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a bill payment payee
     */
    async payeesCreate(requestParameters: PayeesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payee> {
        const response = await this.payeesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specified bill payment payee via third-party integration (typically iPay).Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete a bill payment payee
     */
    async payeesDestroyRaw(requestParameters: PayeesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BillPayDestroy>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling payeesDestroy().'
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
            path: `/v1/payees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BillPayDestroyFromJSON(jsonValue));
    }

    /**
     * Delete a specified bill payment payee via third-party integration (typically iPay).Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete a bill payment payee
     */
    async payeesDestroy(requestParameters: PayeesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BillPayDestroy> {
        const response = await this.payeesDestroyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List bill payment payees for a user. Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List bill payment payees
     */
    async payeesListRaw(requestParameters: PayeesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedBillPayeeList>> {
        const queryParameters: any = {};

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
            path: `/v1/payees/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedBillPayeeListFromJSON(jsonValue));
    }

    /**
     * List bill payment payees for a user. Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List bill payment payees
     */
    async payeesList(requestParameters: PayeesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedBillPayeeList> {
        const response = await this.payeesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified bill payment payee. Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve a bill payment payee
     */
    async payeesRetrieveRaw(requestParameters: PayeesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling payeesRetrieve().'
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
            path: `/v1/payees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayeeFromJSON(jsonValue));
    }

    /**
     * Fetch a specified bill payment payee. Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve a bill payment payee
     */
    async payeesRetrieve(requestParameters: PayeesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payee> {
        const response = await this.payeesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update fields for a specified bill payment payee via third-party integration (typically iPay).Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update a bill payment payee
     */
    async payeesUpdateRaw(requestParameters: PayeesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling payeesUpdate().'
            );
        }

        if (requestParameters['payeeCreateDocRequest'] == null) {
            throw new runtime.RequiredError(
                'payeeCreateDocRequest',
                'Required parameter "payeeCreateDocRequest" was null or undefined when calling payeesUpdate().'
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
            path: `/v1/payees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PayeeCreateDocRequestToJSON(requestParameters['payeeCreateDocRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayeeFromJSON(jsonValue));
    }

    /**
     * Update fields for a specified bill payment payee via third-party integration (typically iPay).Payees can be used to create payments via the payments endpoints.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update a bill payment payee
     */
    async payeesUpdate(requestParameters: PayeesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payee> {
        const response = await this.payeesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
