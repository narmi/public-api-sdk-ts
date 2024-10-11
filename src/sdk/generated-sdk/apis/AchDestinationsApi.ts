/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.55)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ACHDestination,
  ACHDestinationRequest,
  AchDestinationsCreate400Response,
  PermissionDeniedError,
} from '../models/index';
import {
    ACHDestinationFromJSON,
    ACHDestinationToJSON,
    ACHDestinationRequestFromJSON,
    ACHDestinationRequestToJSON,
    AchDestinationsCreate400ResponseFromJSON,
    AchDestinationsCreate400ResponseToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
} from '../models/index';

export interface AchDestinationsCreateRequest {
    aCHDestinationRequest: ACHDestinationRequest;
}

/**
 * 
 */
export class AchDestinationsApi extends runtime.BaseAPI {

    /**
     * Create a set of ACH details that can be used as a destination for ACH Payments.
     * Create an ACH destination
     */
    async achDestinationsCreateRaw(requestParameters: AchDestinationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ACHDestination>> {
        if (requestParameters['aCHDestinationRequest'] == null) {
            throw new runtime.RequiredError(
                'aCHDestinationRequest',
                'Required parameter "aCHDestinationRequest" was null or undefined when calling achDestinationsCreate().'
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
            path: `/v1/ach_destinations/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ACHDestinationRequestToJSON(requestParameters['aCHDestinationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ACHDestinationFromJSON(jsonValue));
    }

    /**
     * Create a set of ACH details that can be used as a destination for ACH Payments.
     * Create an ACH destination
     */
    async achDestinationsCreate(requestParameters: AchDestinationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ACHDestination> {
        const response = await this.achDestinationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
