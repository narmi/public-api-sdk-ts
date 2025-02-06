/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.226)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountsDocumentsRetrieve404Response,
  AchDetailsCreate400Response,
  CreateSudo,
  CreateSudoErrorResponse,
  CreateSudoRequest,
  PaginatedMFAList,
  RetrieveSudoResponse,
} from '../models/index';
import {
    AccountsDocumentsRetrieve404ResponseFromJSON,
    AccountsDocumentsRetrieve404ResponseToJSON,
    AchDetailsCreate400ResponseFromJSON,
    AchDetailsCreate400ResponseToJSON,
    CreateSudoFromJSON,
    CreateSudoToJSON,
    CreateSudoErrorResponseFromJSON,
    CreateSudoErrorResponseToJSON,
    CreateSudoRequestFromJSON,
    CreateSudoRequestToJSON,
    PaginatedMFAListFromJSON,
    PaginatedMFAListToJSON,
    RetrieveSudoResponseFromJSON,
    RetrieveSudoResponseToJSON,
} from '../models/index';

export interface MfaDestroyRequest {
    id: string;
}

export interface MfaListRequest {
    limit?: number;
    offset?: number;
}

export interface SudoCreateRequest {
    createSudoRequest?: CreateSudoRequest;
}

/**
 * 
 */
export class MfaApi extends runtime.BaseAPI {

    /**
     * Delete a user\'s MFA device.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete MFA device
     */
    async mfaDestroyRaw(requestParameters: MfaDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling mfaDestroy().'
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
            path: `/v1/mfa/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a user\'s MFA device.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete MFA device
     */
    async mfaDestroy(requestParameters: MfaDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mfaDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * List the authenticated user\'s MFA devices.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List MFA devices
     */
    async mfaListRaw(requestParameters: MfaListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedMFAList>> {
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
            path: `/v1/mfa/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedMFAListFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s MFA devices.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List MFA devices
     */
    async mfaList(requestParameters: MfaListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMFAList> {
        const response = await this.mfaListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Elevate user permissions using Two-Factor-Authentication.     Send a `device_id` to generate and dispatch a one-time-password to the specified device.     Send `device_id` and `one_time_password` to validate the OTP sent to a user.     The endpoint will return a `403` if there is an issue with the `device_id` or `one_time_password`, or if the user has no registered 2FA devices.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Elevate sudo permissions
     */
    async sudoCreateRaw(requestParameters: SudoCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateSudo>> {
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
            path: `/v1/sudo/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSudoRequestToJSON(requestParameters['createSudoRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateSudoFromJSON(jsonValue));
    }

    /**
     * Elevate user permissions using Two-Factor-Authentication.     Send a `device_id` to generate and dispatch a one-time-password to the specified device.     Send `device_id` and `one_time_password` to validate the OTP sent to a user.     The endpoint will return a `403` if there is an issue with the `device_id` or `one_time_password`, or if the user has no registered 2FA devices.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Elevate sudo permissions
     */
    async sudoCreate(requestParameters: SudoCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateSudo> {
        const response = await this.sudoCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve information on whether the current user has sudo permissions.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve sudo status
     */
    async sudoRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RetrieveSudoResponse>> {
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
            path: `/v1/sudo/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RetrieveSudoResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve information on whether the current user has sudo permissions.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve sudo status
     */
    async sudoRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveSudoResponse> {
        const response = await this.sudoRetrieveRaw(initOverrides);
        return await response.value();
    }

}
