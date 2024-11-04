/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.10)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  EstatementsResponse,
  InvalidRequestError,
  NotFoundError,
  PatchedProfileUpdateRequest,
  PermissionDeniedError,
  UserResponse,
  UsersResponse,
} from '../models/index';
import {
    EstatementsResponseFromJSON,
    EstatementsResponseToJSON,
    InvalidRequestErrorFromJSON,
    InvalidRequestErrorToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PatchedProfileUpdateRequestFromJSON,
    PatchedProfileUpdateRequestToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
    UserResponseFromJSON,
    UserResponseToJSON,
    UsersResponseFromJSON,
    UsersResponseToJSON,
} from '../models/index';

export interface UsersEstatementsCreateRequest {
    userUuid: string;
}

export interface UsersEstatementsDestroyRequest {
    userUuid: string;
}

export interface UsersRetrieveRequest {
    userUuid: string;
}

export interface UsersUpdateRequest {
    userUuid: string;
    patchedProfileUpdateRequest?: PatchedProfileUpdateRequest;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Sets the authenticated user to no longer receive paper statements. Does not affect whether the user can view statements within Digital Banking.
     * Sets user to receive estatements
     */
    async usersEstatementsCreateRaw(requestParameters: UsersEstatementsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EstatementsResponse>> {
        if (requestParameters['userUuid'] == null) {
            throw new runtime.RequiredError(
                'userUuid',
                'Required parameter "userUuid" was null or undefined when calling usersEstatementsCreate().'
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
            path: `/v1/users/{user_uuid}/estatements/`.replace(`{${"user_uuid"}}`, encodeURIComponent(String(requestParameters['userUuid']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EstatementsResponseFromJSON(jsonValue));
    }

    /**
     * Sets the authenticated user to no longer receive paper statements. Does not affect whether the user can view statements within Digital Banking.
     * Sets user to receive estatements
     */
    async usersEstatementsCreate(requestParameters: UsersEstatementsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EstatementsResponse> {
        const response = await this.usersEstatementsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the authenticated user to receive paper statements. Does not affect whether the user can view statements within Digital Banking.
     * Sets user to receive paper statements
     */
    async usersEstatementsDestroyRaw(requestParameters: UsersEstatementsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EstatementsResponse>> {
        if (requestParameters['userUuid'] == null) {
            throw new runtime.RequiredError(
                'userUuid',
                'Required parameter "userUuid" was null or undefined when calling usersEstatementsDestroy().'
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
            path: `/v1/users/{user_uuid}/estatements/`.replace(`{${"user_uuid"}}`, encodeURIComponent(String(requestParameters['userUuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EstatementsResponseFromJSON(jsonValue));
    }

    /**
     * Sets the authenticated user to receive paper statements. Does not affect whether the user can view statements within Digital Banking.
     * Sets user to receive paper statements
     */
    async usersEstatementsDestroy(requestParameters: UsersEstatementsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EstatementsResponse> {
        const response = await this.usersEstatementsDestroyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the authenticated user\'s joint access users and self. This endpoint is now deprecated and only returns information about the currently authenticated user.
     * List joint users
     * @deprecated
     */
    async usersListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersResponse>> {
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
            path: `/v1/users/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersResponseFromJSON(jsonValue));
    }

    /**
     * List the authenticated user\'s joint access users and self. This endpoint is now deprecated and only returns information about the currently authenticated user.
     * List joint users
     * @deprecated
     */
    async usersList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersResponse> {
        const response = await this.usersListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Fetch a user specified by UUID. A user can be retrieved when it is a member of an associated account.
     * Retrieve a user
     */
    async usersRetrieveRaw(requestParameters: UsersRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters['userUuid'] == null) {
            throw new runtime.RequiredError(
                'userUuid',
                'Required parameter "userUuid" was null or undefined when calling usersRetrieve().'
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
            path: `/v1/users/{user_uuid}/`.replace(`{${"user_uuid"}}`, encodeURIComponent(String(requestParameters['userUuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Fetch a user specified by UUID. A user can be retrieved when it is a member of an associated account.
     * Retrieve a user
     */
    async usersRetrieve(requestParameters: UsersRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse> {
        const response = await this.usersRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Set a user\'s preference to receive paper statements.
     * Update a user
     */
    async usersUpdateRaw(requestParameters: UsersUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters['userUuid'] == null) {
            throw new runtime.RequiredError(
                'userUuid',
                'Required parameter "userUuid" was null or undefined when calling usersUpdate().'
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
            path: `/v1/users/{user_uuid}/`.replace(`{${"user_uuid"}}`, encodeURIComponent(String(requestParameters['userUuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedProfileUpdateRequestToJSON(requestParameters['patchedProfileUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Set a user\'s preference to receive paper statements.
     * Update a user
     */
    async usersUpdate(requestParameters: UsersUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse> {
        const response = await this.usersUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
