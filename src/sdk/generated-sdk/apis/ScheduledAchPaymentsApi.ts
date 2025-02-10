/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.67)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GeneralError,
  PaginatedScheduledUnverifiedACHTransferList,
  ScheduledUnverifiedACHTransfer,
  ScheduledUnverifiedACHTransferRequest,
} from '../models/index';
import {
    GeneralErrorFromJSON,
    GeneralErrorToJSON,
    PaginatedScheduledUnverifiedACHTransferListFromJSON,
    PaginatedScheduledUnverifiedACHTransferListToJSON,
    ScheduledUnverifiedACHTransferFromJSON,
    ScheduledUnverifiedACHTransferToJSON,
    ScheduledUnverifiedACHTransferRequestFromJSON,
    ScheduledUnverifiedACHTransferRequestToJSON,
} from '../models/index';

export interface AchPaymentsScheduledCreateRequest {
    scheduledUnverifiedACHTransferRequest: ScheduledUnverifiedACHTransferRequest;
}

export interface AchPaymentsScheduledDestroyRequest {
    uuid: string;
}

export interface AchPaymentsScheduledListRequest {
    page?: number;
}

export interface AchPaymentsScheduledRetrieveRequest {
    uuid: string;
}

/**
 * 
 */
export class ScheduledAchPaymentsApi extends runtime.BaseAPI {

    /**
     * TODO    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a scheduled ACH Payment
     */
    async achPaymentsScheduledCreateRaw(requestParameters: AchPaymentsScheduledCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScheduledUnverifiedACHTransfer>> {
        if (requestParameters['scheduledUnverifiedACHTransferRequest'] == null) {
            throw new runtime.RequiredError(
                'scheduledUnverifiedACHTransferRequest',
                'Required parameter "scheduledUnverifiedACHTransferRequest" was null or undefined when calling achPaymentsScheduledCreate().'
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
            path: `/v1/ach_payments/scheduled/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScheduledUnverifiedACHTransferRequestToJSON(requestParameters['scheduledUnverifiedACHTransferRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledUnverifiedACHTransferFromJSON(jsonValue));
    }

    /**
     * TODO    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a scheduled ACH Payment
     */
    async achPaymentsScheduledCreate(requestParameters: AchPaymentsScheduledCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScheduledUnverifiedACHTransfer> {
        const response = await this.achPaymentsScheduledCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     */
    async achPaymentsScheduledDestroyRaw(requestParameters: AchPaymentsScheduledDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling achPaymentsScheduledDestroy().'
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
            path: `/v1/ach_payments/scheduled/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     */
    async achPaymentsScheduledDestroy(requestParameters: AchPaymentsScheduledDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.achPaymentsScheduledDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     */
    async achPaymentsScheduledListRaw(requestParameters: AchPaymentsScheduledListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedScheduledUnverifiedACHTransferList>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            path: `/v1/ach_payments/scheduled/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedScheduledUnverifiedACHTransferListFromJSON(jsonValue));
    }

    /**
     * <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     */
    async achPaymentsScheduledList(requestParameters: AchPaymentsScheduledListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedScheduledUnverifiedACHTransferList> {
        const response = await this.achPaymentsScheduledListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     */
    async achPaymentsScheduledRetrieveRaw(requestParameters: AchPaymentsScheduledRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScheduledUnverifiedACHTransfer>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling achPaymentsScheduledRetrieve().'
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
            path: `/v1/ach_payments/scheduled/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScheduledUnverifiedACHTransferFromJSON(jsonValue));
    }

    /**
     * <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     */
    async achPaymentsScheduledRetrieve(requestParameters: AchPaymentsScheduledRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScheduledUnverifiedACHTransfer> {
        const response = await this.achPaymentsScheduledRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
