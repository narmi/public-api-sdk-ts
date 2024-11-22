/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.186)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PaginatedTeamList,
} from '../models/index';
import {
    PaginatedTeamListFromJSON,
    PaginatedTeamListToJSON,
} from '../models/index';

export interface TeamsListRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class TeamsApi extends runtime.BaseAPI {

    /**
     * Lists the message center teams a user can message, used for group inboxes.
     * List teams
     */
    async teamsListRaw(requestParameters: TeamsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedTeamList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
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
            path: `/v1/teams/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedTeamListFromJSON(jsonValue));
    }

    /**
     * Lists the message center teams a user can message, used for group inboxes.
     * List teams
     */
    async teamsList(requestParameters: TeamsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedTeamList> {
        const response = await this.teamsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
