/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.106)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AchDetailsCreate400Response,
  FedwireDestination,
  FedwireDestinationRequest,
  PermissionDeniedError,
} from '../models/index';
import {
    AchDetailsCreate400ResponseFromJSON,
    AchDetailsCreate400ResponseToJSON,
    FedwireDestinationFromJSON,
    FedwireDestinationToJSON,
    FedwireDestinationRequestFromJSON,
    FedwireDestinationRequestToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
} from '../models/index';

export interface FedwireDestinationsCreateRequest {
    fedwireDestinationRequest: FedwireDestinationRequest;
}

export interface FedwireDestinationsUpdateRequest {
    uuid: string;
    fedwireDestinationRequest: FedwireDestinationRequest;
}

/**
 * 
 */
export class FedwireDestinationsApi extends runtime.BaseAPI {

    /**
     * Create a set of Fedwire details that can be used as a destination for fedwires.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a Fedwire destination
     */
    async fedwireDestinationsCreateRaw(requestParameters: FedwireDestinationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FedwireDestination>> {
        if (requestParameters['fedwireDestinationRequest'] == null) {
            throw new runtime.RequiredError(
                'fedwireDestinationRequest',
                'Required parameter "fedwireDestinationRequest" was null or undefined when calling fedwireDestinationsCreate().'
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
            path: `/v1/fedwire_destinations/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FedwireDestinationRequestToJSON(requestParameters['fedwireDestinationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FedwireDestinationFromJSON(jsonValue));
    }

    /**
     * Create a set of Fedwire details that can be used as a destination for fedwires.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Create a Fedwire destination
     */
    async fedwireDestinationsCreate(requestParameters: FedwireDestinationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FedwireDestination> {
        const response = await this.fedwireDestinationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a set of Fedwire details that can be used as a destination for fedwires.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update a Fedwire destination
     */
    async fedwireDestinationsUpdateRaw(requestParameters: FedwireDestinationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FedwireDestination>> {
        if (requestParameters['uuid'] == null) {
            throw new runtime.RequiredError(
                'uuid',
                'Required parameter "uuid" was null or undefined when calling fedwireDestinationsUpdate().'
            );
        }

        if (requestParameters['fedwireDestinationRequest'] == null) {
            throw new runtime.RequiredError(
                'fedwireDestinationRequest',
                'Required parameter "fedwireDestinationRequest" was null or undefined when calling fedwireDestinationsUpdate().'
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
            path: `/v1/fedwire_destinations/{uuid}/`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters['uuid']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FedwireDestinationRequestToJSON(requestParameters['fedwireDestinationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FedwireDestinationFromJSON(jsonValue));
    }

    /**
     * Update a set of Fedwire details that can be used as a destination for fedwires.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * Update a Fedwire destination
     */
    async fedwireDestinationsUpdate(requestParameters: FedwireDestinationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FedwireDestination> {
        const response = await this.fedwireDestinationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
