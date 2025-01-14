/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.69)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AchDetailsCreate400Response,
  NotFoundError,
  PaginatedRecipientList,
  PermissionDeniedError,
  Recipient,
  RecipientRequest,
} from '../models/index';
import {
    AchDetailsCreate400ResponseFromJSON,
    AchDetailsCreate400ResponseToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PaginatedRecipientListFromJSON,
    PaginatedRecipientListToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
    RecipientFromJSON,
    RecipientToJSON,
    RecipientRequestFromJSON,
    RecipientRequestToJSON,
} from '../models/index';

export interface RecipientsCreateRequest {
    recipientRequest: RecipientRequest;
}

export interface RecipientsDestroyRequest {
    uuid: string;
}

export interface RecipientsListRequest {
    page?: number;
}

export interface RecipientsRetrieveRequest {
    uuid: string;
}

export interface RecipientsUpdateRequest {
    uuid: string;
    recipientRequest: RecipientRequest;
}

/**
 * 
 */
export class RecipientsApi extends runtime.BaseAPI {

    /**
     * Create a recipient that can be used as a destination for wires or ACH payments.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a recipient
     */
    async recipientsCreateRaw(requestParameters: RecipientsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Recipient>> {
        if (requestParameters['recipientRequest'] == null) {
            throw new runtime.RequiredError(
                'recipientRequest',
                'Required parameter "recipientRequest" was null or undefined when calling recipientsCreate().'
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
            path: `/v1/recipients/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecipientRequestToJSON(requestParameters['recipientRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipientFromJSON(jsonValue));
    }

    /**
     * Create a recipient that can be used as a destination for wires or ACH payments.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a recipient
     */
    async recipientsCreate(requestParameters: RecipientsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Recipient> {
        const response = await this.recipientsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specified recipient belonging to the user. The recipient will continue to exist in the database, but won\'t be retrievable by the user. The name of the deleted recipient will be available for use in creating a new recipient.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete a recipient
     */
    async recipientsDestroyRaw(requestParameters: RecipientsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling recipientsDestroy().'
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
            path: `/v1/recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specified recipient belonging to the user. The recipient will continue to exist in the database, but won\'t be retrievable by the user. The name of the deleted recipient will be available for use in creating a new recipient.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Delete a recipient
     */
    async recipientsDestroy(requestParameters: RecipientsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.recipientsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * List a user\'s recipients, including recipients created by other users in their organization.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List recipients
     */
    async recipientsListRaw(requestParameters: RecipientsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedRecipientList>> {
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
            path: `/v1/recipients/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedRecipientListFromJSON(jsonValue));
    }

    /**
     * List a user\'s recipients, including recipients created by other users in their organization.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List recipients
     */
    async recipientsList(requestParameters: RecipientsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedRecipientList> {
        const response = await this.recipientsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch details for a specified recipient.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve a recipient
     */
    async recipientsRetrieveRaw(requestParameters: RecipientsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Recipient>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling recipientsRetrieve().'
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
            path: `/v1/recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipientFromJSON(jsonValue));
    }

    /**
     * Fetch details for a specified recipient.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Retrieve a recipient
     */
    async recipientsRetrieve(requestParameters: RecipientsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Recipient> {
        const response = await this.recipientsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the details of a recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update a recipient
     */
    async recipientsUpdateRaw(requestParameters: RecipientsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Recipient>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling recipientsUpdate().'
            );
        }

        if (requestParameters['recipientRequest'] == null) {
            throw new runtime.RequiredError(
                'recipientRequest',
                'Required parameter "recipientRequest" was null or undefined when calling recipientsUpdate().'
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
            path: `/v1/recipients/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RecipientRequestToJSON(requestParameters['recipientRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecipientFromJSON(jsonValue));
    }

    /**
     * Update the details of a recipient belonging to authenticated user, identified by `uuid`    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update a recipient
     */
    async recipientsUpdate(requestParameters: RecipientsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Recipient> {
        const response = await this.recipientsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
