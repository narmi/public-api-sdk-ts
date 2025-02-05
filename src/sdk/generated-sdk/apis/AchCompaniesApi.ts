/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.220)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PaginatedACHCompanyList,
  PermissionDeniedError,
} from '../models/index';
import {
    PaginatedACHCompanyListFromJSON,
    PaginatedACHCompanyListToJSON,
    PermissionDeniedErrorFromJSON,
    PermissionDeniedErrorToJSON,
} from '../models/index';

export interface AchCompaniesListRequest {
    page?: number;
}

/**
 * 
 */
export class AchCompaniesApi extends runtime.BaseAPI {

    /**
     * List the ACH companies an authenticated business user has access to for ACH origination purposes.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List ACH companies
     */
    async achCompaniesListRaw(requestParameters: AchCompaniesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedACHCompanyList>> {
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
            path: `/v1/ach_companies/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedACHCompanyListFromJSON(jsonValue));
    }

    /**
     * List the ACH companies an authenticated business user has access to for ACH origination purposes.    <i>How can we improve these docs?             <a href=\"mailto:docs+feedback@narmi.com\">Share your feedback.</a></i>
     * List ACH companies
     */
    async achCompaniesList(requestParameters: AchCompaniesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedACHCompanyList> {
        const response = await this.achCompaniesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
