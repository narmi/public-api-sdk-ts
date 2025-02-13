/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.257)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  NotFoundError,
  PaginatedWireRecipientList,
  PatchedWireRecipientRequest,
  PermissionDeniedError,
  WireRecipient,
  WireRecipientRequest,
} from '../models/index';
import {
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PaginatedWireRecipientListFromJSON,
    PaginatedWireRecipientListToJSON,
    PatchedWireRecipientRequestFromJSON,
    PatchedWireRecipientRequestToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
    WireRecipientFromJSON,
    WireRecipientToJSON,
    WireRecipientRequestFromJSON,
    WireRecipientRequestToJSON,
} from '../models/index';

export interface WireRecipientsCreateRequest {
    wireRecipientRequest: WireRecipientRequest;
}

export interface WireRecipientsDestroyRequest {
    uuid: string;
}

export interface WireRecipientsListRequest {
    page?: number;
}

export interface WireRecipientsPartialUpdateRequest {
    uuid: string;
    patchedWireRecipientRequest: PatchedWireRecipientRequest;
}

export interface WireRecipientsRetrieveRequest {
    uuid: string;
}

export interface WireRecipientsUpdateRequest {
    uuid: string;
    wireRecipientRequest: WireRecipientRequest;
}

/**
 * 
 */
export class WireRecipientsApi extends runtime.BaseAPI {

    /**
     * Create a new wire recipient for the authenticated user to be referenced in wire transfers.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create wire recipients
     */
    async wireRecipientsCreateRaw(requestParameters: WireRecipientsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WireRecipient>> {
        if (requestParameters['wireRecipientRequest'] == null) {
            throw new runtime.RequiredError(
                'wireRecipientRequest',
                'Required parameter "wireRecipientRequest" was null or undefined when calling wireRecipientsCreate().'
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
            path: `/v1/wire_recipients/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WireRecipientRequestToJSON(requestParameters['wireRecipientRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WireRecipientFromJSON(jsonValue));
    }

    /**
     * Create a new wire recipient for the authenticated user to be referenced in wire transfers.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create wire recipients
     */
    async wireRecipientsCreate(requestParameters: WireRecipientsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WireRecipient> {
        const response = await this.wireRecipientsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an authenticated user\'s wire recipient identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete wire recipients
     */
    async wireRecipientsDestroyRaw(requestParameters: WireRecipientsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling wireRecipientsDestroy().'
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
            path: `/v1/wire_recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an authenticated user\'s wire recipient identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete wire recipients
     */
    async wireRecipientsDestroy(requestParameters: WireRecipientsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.wireRecipientsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a list of the authenticated user\'s previous wire recipients. They are persisted so the user may easily reference them for future wire transfers.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List wire recipients
     */
    async wireRecipientsListRaw(requestParameters: WireRecipientsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedWireRecipientList>> {
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
            path: `/v1/wire_recipients/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedWireRecipientListFromJSON(jsonValue));
    }

    /**
     * Returns a list of the authenticated user\'s previous wire recipients. They are persisted so the user may easily reference them for future wire transfers.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List wire recipients
     */
    async wireRecipientsList(requestParameters: WireRecipientsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedWireRecipientList> {
        const response = await this.wireRecipientsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the details of a wire recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Modify wire recipients
     */
    async wireRecipientsPartialUpdateRaw(requestParameters: WireRecipientsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WireRecipient>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling wireRecipientsPartialUpdate().'
            );
        }

        if (requestParameters['patchedWireRecipientRequest'] == null) {
            throw new runtime.RequiredError(
                'patchedWireRecipientRequest',
                'Required parameter "patchedWireRecipientRequest" was null or undefined when calling wireRecipientsPartialUpdate().'
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
            path: `/v1/wire_recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedWireRecipientRequestToJSON(requestParameters['patchedWireRecipientRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WireRecipientFromJSON(jsonValue));
    }

    /**
     * Update the details of a wire recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Modify wire recipients
     */
    async wireRecipientsPartialUpdate(requestParameters: WireRecipientsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WireRecipient> {
        const response = await this.wireRecipientsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns wire recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve wire recipients
     */
    async wireRecipientsRetrieveRaw(requestParameters: WireRecipientsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WireRecipient>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling wireRecipientsRetrieve().'
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
            path: `/v1/wire_recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WireRecipientFromJSON(jsonValue));
    }

    /**
     * Returns wire recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve wire recipients
     */
    async wireRecipientsRetrieve(requestParameters: WireRecipientsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WireRecipient> {
        const response = await this.wireRecipientsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the details of a wire recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update wire recipients
     */
    async wireRecipientsUpdateRaw(requestParameters: WireRecipientsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WireRecipient>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling wireRecipientsUpdate().'
            );
        }

        if (requestParameters['wireRecipientRequest'] == null) {
            throw new runtime.RequiredError(
                'wireRecipientRequest',
                'Required parameter "wireRecipientRequest" was null or undefined when calling wireRecipientsUpdate().'
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
            path: `/v1/wire_recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WireRecipientRequestToJSON(requestParameters['wireRecipientRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WireRecipientFromJSON(jsonValue));
    }

    /**
     * Update the details of a wire recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update wire recipients
     */
    async wireRecipientsUpdate(requestParameters: WireRecipientsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WireRecipient> {
        const response = await this.wireRecipientsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
