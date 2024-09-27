/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AutomaticSavingsEnrollmentRetrieve422Response,
  ObjectNotFoundError,
  PaginatedSubscriptionList,
  PatchedSubscription,
  Subscription,
  SubscriptionResponse,
} from '../models/index';
import {
    AutomaticSavingsEnrollmentRetrieve422ResponseFromJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseToJSON,
    ObjectNotFoundErrorFromJSON,
    ObjectNotFoundErrorToJSON,
    PaginatedSubscriptionListFromJSON,
    PaginatedSubscriptionListToJSON,
    PatchedSubscriptionFromJSON,
    PatchedSubscriptionToJSON,
    SubscriptionFromJSON,
    SubscriptionToJSON,
    SubscriptionResponseFromJSON,
    SubscriptionResponseToJSON,
} from '../models/index';

export interface SubscriptionsCreateRequest {
    subscription: Omit<Subscription, 'id'|'secret'|'created_at'|'updated_at'>;
    format?: SubscriptionsCreateFormatEnum;
}

export interface SubscriptionsDestroyRequest {
    uuid: string;
    format?: SubscriptionsDestroyFormatEnum;
}

export interface SubscriptionsListRequest {
    format?: SubscriptionsListFormatEnum;
    page?: number;
}

export interface SubscriptionsPartialUpdateRequest {
    uuid: string;
    patchedSubscription: Omit<PatchedSubscription, 'id'|'secret'|'created_at'|'updated_at'>;
    format?: SubscriptionsPartialUpdateFormatEnum;
}

export interface SubscriptionsRetrieveRequest {
    uuid: string;
    format?: SubscriptionsRetrieveFormatEnum;
}

export interface SubscriptionsUpdateRequest {
    uuid: string;
    subscription: Omit<Subscription, 'id'|'secret'|'created_at'|'updated_at'>;
    format?: SubscriptionsUpdateFormatEnum;
}

/**
 * 
 */
export class SubscriptionsApi extends runtime.BaseAPI {

    /**
     * Creates a subscription for the authenticated user to fire a webhook when a target object is modified.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Create a subscription
     */
    async subscriptionsCreateRaw(requestParameters: SubscriptionsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionResponse>> {
        if (requestParameters['subscription'] == null) {
            throw new runtime.RequiredError(
                'subscription',
                'Required parameter "subscription" was null or undefined when calling subscriptionsCreate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

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
            path: `/v1/subscriptions/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionToJSON(requestParameters['subscription']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionResponseFromJSON(jsonValue));
    }

    /**
     * Creates a subscription for the authenticated user to fire a webhook when a target object is modified.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Create a subscription
     */
    async subscriptionsCreate(requestParameters: SubscriptionsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionResponse> {
        const response = await this.subscriptionsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Delete a subscription
     */
    async subscriptionsDestroyRaw(requestParameters: SubscriptionsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling subscriptionsDestroy().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
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
            path: `/v1/subscriptions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Delete a subscription
     */
    async subscriptionsDestroy(requestParameters: SubscriptionsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * List the authenticated user\'s subscriptions.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * List subscriptions
     */
    async subscriptionsListRaw(requestParameters: SubscriptionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedSubscriptionList>> {
        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

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
            path: `/v1/subscriptions/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedSubscriptionListFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s subscriptions.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * List subscriptions
     */
    async subscriptionsList(requestParameters: SubscriptionsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedSubscriptionList> {
        const response = await this.subscriptionsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update specific fields for a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Modify subscription
     */
    async subscriptionsPartialUpdateRaw(requestParameters: SubscriptionsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling subscriptionsPartialUpdate().'
            );
        }

        if (requestParameters['patchedSubscription'] == null) {
            throw new runtime.RequiredError(
                'patchedSubscription',
                'Required parameter "patchedSubscription" was null or undefined when calling subscriptionsPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

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
            path: `/v1/subscriptions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedSubscriptionToJSON(requestParameters['patchedSubscription']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * Update specific fields for a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Modify subscription
     */
    async subscriptionsPartialUpdate(requestParameters: SubscriptionsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.subscriptionsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Retrieve a subscription
     */
    async subscriptionsRetrieveRaw(requestParameters: SubscriptionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionResponse>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling subscriptionsRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
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
            path: `/v1/subscriptions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionResponseFromJSON(jsonValue));
    }

    /**
     * Fetch a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Retrieve a subscription
     */
    async subscriptionsRetrieve(requestParameters: SubscriptionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionResponse> {
        const response = await this.subscriptionsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Update a subscription
     */
    async subscriptionsUpdateRaw(requestParameters: SubscriptionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionResponse>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling subscriptionsUpdate().'
            );
        }

        if (requestParameters['subscription'] == null) {
            throw new runtime.RequiredError(
                'subscription',
                'Required parameter "subscription" was null or undefined when calling subscriptionsUpdate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

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
            path: `/v1/subscriptions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionToJSON(requestParameters['subscription']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionResponseFromJSON(jsonValue));
    }

    /**
     * Update a specified subscription.  Subscriptions are used to create callback events for the webhook service.  When a subscription is created, if an event (such as the creation of a message or a user logging in) occurs, the subscription will make a call to the specified URL with details of the event.  More information including how to validate the webhook callback request can be found in the webhook events section of the documentation.
     * Update a subscription
     */
    async subscriptionsUpdate(requestParameters: SubscriptionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionResponse> {
        const response = await this.subscriptionsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionsCreateFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type SubscriptionsCreateFormatEnum = typeof SubscriptionsCreateFormatEnum[keyof typeof SubscriptionsCreateFormatEnum];
/**
 * @export
 */
export const SubscriptionsDestroyFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type SubscriptionsDestroyFormatEnum = typeof SubscriptionsDestroyFormatEnum[keyof typeof SubscriptionsDestroyFormatEnum];
/**
 * @export
 */
export const SubscriptionsListFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type SubscriptionsListFormatEnum = typeof SubscriptionsListFormatEnum[keyof typeof SubscriptionsListFormatEnum];
/**
 * @export
 */
export const SubscriptionsPartialUpdateFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type SubscriptionsPartialUpdateFormatEnum = typeof SubscriptionsPartialUpdateFormatEnum[keyof typeof SubscriptionsPartialUpdateFormatEnum];
/**
 * @export
 */
export const SubscriptionsRetrieveFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type SubscriptionsRetrieveFormatEnum = typeof SubscriptionsRetrieveFormatEnum[keyof typeof SubscriptionsRetrieveFormatEnum];
/**
 * @export
 */
export const SubscriptionsUpdateFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type SubscriptionsUpdateFormatEnum = typeof SubscriptionsUpdateFormatEnum[keyof typeof SubscriptionsUpdateFormatEnum];