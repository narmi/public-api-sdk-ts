/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.322)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AutomaticSavingsEnrollmentRetrieve422Response,
  NotFoundError,
  ObjectNotFoundError,
  PaginatedSubscriptionList,
  PatchedSubscriptionRequest,
  Subscription,
  SubscriptionRequest,
  SubscriptionResponse,
} from '../models/index';
import {
    AutomaticSavingsEnrollmentRetrieve422ResponseFromJSON,
    AutomaticSavingsEnrollmentRetrieve422ResponseToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    ObjectNotFoundErrorFromJSON,
    ObjectNotFoundErrorToJSON,
    PaginatedSubscriptionListFromJSON,
    PaginatedSubscriptionListToJSON,
    PatchedSubscriptionRequestFromJSON,
    PatchedSubscriptionRequestToJSON,
    SubscriptionFromJSON,
    SubscriptionToJSON,
    SubscriptionRequestFromJSON,
    SubscriptionRequestToJSON,
    SubscriptionResponseFromJSON,
    SubscriptionResponseToJSON,
} from '../models/index';

export interface SubscriptionsCreateRequest {
    subscriptionRequest: SubscriptionRequest;
}

export interface SubscriptionsDestroyRequest {
    uuid: string;
}

export interface SubscriptionsListRequest {
    page?: number;
    perPage?: number;
}

export interface SubscriptionsPartialUpdateRequest {
    uuid: string;
    patchedSubscriptionRequest: PatchedSubscriptionRequest;
}

export interface SubscriptionsRetrieveRequest {
    uuid: string;
}

export interface SubscriptionsUpdateRequest {
    uuid: string;
    subscriptionRequest: SubscriptionRequest;
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
        if (requestParameters['subscriptionRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionRequest',
                'Required parameter "subscriptionRequest" was null or undefined when calling subscriptionsCreate().'
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
            path: `/v1/subscriptions/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionRequestToJSON(requestParameters['subscriptionRequest']),
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

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
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

        if (requestParameters['patchedSubscriptionRequest'] == null) {
            throw new runtime.RequiredError(
                'patchedSubscriptionRequest',
                'Required parameter "patchedSubscriptionRequest" was null or undefined when calling subscriptionsPartialUpdate().'
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
            path: `/v1/subscriptions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedSubscriptionRequestToJSON(requestParameters['patchedSubscriptionRequest']),
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

        if (requestParameters['subscriptionRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionRequest',
                'Required parameter "subscriptionRequest" was null or undefined when calling subscriptionsUpdate().'
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
            path: `/v1/subscriptions/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionRequestToJSON(requestParameters['subscriptionRequest']),
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
