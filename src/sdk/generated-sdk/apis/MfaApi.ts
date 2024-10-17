/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.252)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PaginatedMFAList,
} from '../models/index';
import {
    PaginatedMFAListFromJSON,
    PaginatedMFAListToJSON,
} from '../models/index';

export interface MfaDestroyRequest {
    id: string;
}

export interface MfaListRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class MfaApi extends runtime.BaseAPI {

    /**
     * Delete a user\'s MFA device.
     * Delete MFA Device
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
     * Delete a user\'s MFA device.
     * Delete MFA Device
     */
    async mfaDestroy(requestParameters: MfaDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mfaDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * List the authenticated user\'s MFA devices.
     * List MFA Devices
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
     * List the authenticated user\'s MFA devices.
     * List MFA Devices
     */
    async mfaList(requestParameters: MfaListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedMFAList> {
        const response = await this.mfaListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
