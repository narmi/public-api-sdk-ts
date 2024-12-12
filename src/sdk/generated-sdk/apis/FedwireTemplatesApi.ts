/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.291)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  FedwireTemplate,
  FedwireTemplateRequest,
  GeneralError,
  NotFoundError,
  PaginatedFedwireTemplateList,
} from '../models/index';
import {
    FedwireTemplateFromJSON,
    FedwireTemplateToJSON,
    FedwireTemplateRequestFromJSON,
    FedwireTemplateRequestToJSON,
    GeneralErrorFromJSON,
    GeneralErrorToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    PaginatedFedwireTemplateListFromJSON,
    PaginatedFedwireTemplateListToJSON,
} from '../models/index';

export interface FedwireTemplatesCreateRequest {
    fedwireTemplateRequest: FedwireTemplateRequest;
}

export interface FedwireTemplatesDestroyRequest {
    uuid: string;
}

export interface FedwireTemplatesListRequest {
    page?: number;
}

export interface FedwireTemplatesRetrieveRequest {
    uuid: string;
}

export interface FedwireTemplatesUpdateRequest {
    uuid: string;
    fedwireTemplateRequest: FedwireTemplateRequest;
}

/**
 * 
 */
export class FedwireTemplatesApi extends runtime.BaseAPI {

    /**
     * Create a template that can be used to send wires.
     * Create a Fedwire template
     */
    async fedwireTemplatesCreateRaw(requestParameters: FedwireTemplatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FedwireTemplate>> {
        if (requestParameters['fedwireTemplateRequest'] == null) {
            throw new runtime.RequiredError(
                'fedwireTemplateRequest',
                'Required parameter "fedwireTemplateRequest" was null or undefined when calling fedwireTemplatesCreate().'
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
            path: `/v1/fedwire_templates/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FedwireTemplateRequestToJSON(requestParameters['fedwireTemplateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FedwireTemplateFromJSON(jsonValue));
    }

    /**
     * Create a template that can be used to send wires.
     * Create a Fedwire template
     */
    async fedwireTemplatesCreate(requestParameters: FedwireTemplatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FedwireTemplate> {
        const response = await this.fedwireTemplatesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specified template belonging to the user. The template will continue to exist in the database, but won\'t be retrievable by the user. The name of the deleted template will be available for use in creating a new template.
     * Delete a Fedwire template
     */
    async fedwireTemplatesDestroyRaw(requestParameters: FedwireTemplatesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling fedwireTemplatesDestroy().'
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
            path: `/v1/fedwire_templates/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specified template belonging to the user. The template will continue to exist in the database, but won\'t be retrievable by the user. The name of the deleted template will be available for use in creating a new template.
     * Delete a Fedwire template
     */
    async fedwireTemplatesDestroy(requestParameters: FedwireTemplatesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.fedwireTemplatesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * List a user\'s templates, including templates created by other users in their organization. Templates will only be included in the returned list where the user has access to the template\'s source account.
     * List Fedwire templates
     */
    async fedwireTemplatesListRaw(requestParameters: FedwireTemplatesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedFedwireTemplateList>> {
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
            path: `/v1/fedwire_templates/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedFedwireTemplateListFromJSON(jsonValue));
    }

    /**
     * List a user\'s templates, including templates created by other users in their organization. Templates will only be included in the returned list where the user has access to the template\'s source account.
     * List Fedwire templates
     */
    async fedwireTemplatesList(requestParameters: FedwireTemplatesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedFedwireTemplateList> {
        const response = await this.fedwireTemplatesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch details for a specified template.
     * Retrieve a Fedwire template
     */
    async fedwireTemplatesRetrieveRaw(requestParameters: FedwireTemplatesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FedwireTemplate>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling fedwireTemplatesRetrieve().'
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
            path: `/v1/fedwire_templates/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FedwireTemplateFromJSON(jsonValue));
    }

    /**
     * Fetch details for a specified template.
     * Retrieve a Fedwire template
     */
    async fedwireTemplatesRetrieve(requestParameters: FedwireTemplatesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FedwireTemplate> {
        const response = await this.fedwireTemplatesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the details of a template belonging to authenticated user, identified by `uuid`
     * Update a Fedwire template
     */
    async fedwireTemplatesUpdateRaw(requestParameters: FedwireTemplatesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FedwireTemplate>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling fedwireTemplatesUpdate().'
            );
        }

        if (requestParameters['fedwireTemplateRequest'] == null) {
            throw new runtime.RequiredError(
                'fedwireTemplateRequest',
                'Required parameter "fedwireTemplateRequest" was null or undefined when calling fedwireTemplatesUpdate().'
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
            path: `/v1/fedwire_templates/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FedwireTemplateRequestToJSON(requestParameters['fedwireTemplateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FedwireTemplateFromJSON(jsonValue));
    }

    /**
     * Update the details of a template belonging to authenticated user, identified by `uuid`
     * Update a Fedwire template
     */
    async fedwireTemplatesUpdate(requestParameters: FedwireTemplatesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FedwireTemplate> {
        const response = await this.fedwireTemplatesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
