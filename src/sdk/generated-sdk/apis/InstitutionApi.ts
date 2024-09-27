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
  InstitutionNameResponse,
  NotFoundError,
  SwaggerInstitutionGet,
} from '../models/index';
import {
    InstitutionNameResponseFromJSON,
    InstitutionNameResponseToJSON,
    NotFoundErrorFromJSON,
    NotFoundErrorToJSON,
    SwaggerInstitutionGetFromJSON,
    SwaggerInstitutionGetToJSON,
} from '../models/index';

export interface GETCurrentInstitutionRequest {
    format?: GETCurrentInstitutionFormatEnum;
}

export interface RetrieveInstitutionNameRequest {
    routingNumber: string;
    type: string;
    format?: RetrieveInstitutionNameFormatEnum;
}

/**
 * 
 */
export class InstitutionApi extends runtime.BaseAPI {

    /**
     * Return configurable data for the active Institution, such as URLs, asset URLs, and customizable settings.   For brevity, only a subset of returned fields are listed in the example response shown.  Authentication required:  - None  Security required:  - None
     * Get current institution info
     */
    async gETCurrentInstitutionRaw(requestParameters: GETCurrentInstitutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SwaggerInstitutionGet>> {
        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/institution/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SwaggerInstitutionGetFromJSON(jsonValue));
    }

    /**
     * Return configurable data for the active Institution, such as URLs, asset URLs, and customizable settings.   For brevity, only a subset of returned fields are listed in the example response shown.  Authentication required:  - None  Security required:  - None
     * Get current institution info
     */
    async gETCurrentInstitution(requestParameters: GETCurrentInstitutionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SwaggerInstitutionGet> {
        const response = await this.gETCurrentInstitutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * A helper to return the name of the financial institution that corresponds to the given Routing Number, as from the FedWire database.  Useful to display the institution name when funding via external transfer.  Note: - the `type` URL parameter can be omitted; ie `GET /institutions/:routing_number` is a valid request.
     * Get institution name by routing number
     */
    async retrieveInstitutionNameRaw(requestParameters: RetrieveInstitutionNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstitutionNameResponse>> {
        if (requestParameters['routingNumber'] == null) {
            throw new runtime.RequiredError(
                'routingNumber',
                'Required parameter "routingNumber" was null or undefined when calling retrieveInstitutionName().'
            );
        }

        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling retrieveInstitutionName().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/institutions/{routing_number}/{type}/`.replace(`{${"routing_number"}}`, encodeURIComponent(String(requestParameters['routingNumber']))).replace(`{${"type"}}`, encodeURIComponent(String(requestParameters['type']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InstitutionNameResponseFromJSON(jsonValue));
    }

    /**
     * A helper to return the name of the financial institution that corresponds to the given Routing Number, as from the FedWire database.  Useful to display the institution name when funding via external transfer.  Note: - the `type` URL parameter can be omitted; ie `GET /institutions/:routing_number` is a valid request.
     * Get institution name by routing number
     */
    async retrieveInstitutionName(requestParameters: RetrieveInstitutionNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstitutionNameResponse> {
        const response = await this.retrieveInstitutionNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GETCurrentInstitutionFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type GETCurrentInstitutionFormatEnum = typeof GETCurrentInstitutionFormatEnum[keyof typeof GETCurrentInstitutionFormatEnum];
/**
 * @export
 */
export const RetrieveInstitutionNameFormatEnum = {
    Html: 'html',
    Json: 'json'
} as const;
export type RetrieveInstitutionNameFormatEnum = typeof RetrieveInstitutionNameFormatEnum[keyof typeof RetrieveInstitutionNameFormatEnum];