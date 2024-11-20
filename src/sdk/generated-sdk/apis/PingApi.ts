/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.163)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PingResponse,
} from '../models/index';
import {
    PingResponseFromJSON,
    PingResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class PingApi extends runtime.BaseAPI {

    /**
     * Responds with a generic message for use in checking whether the API is available. This response directly calls API code and indicates that the host is reachable and processing requests.
     * Server heartbeat operation
     */
    async pingRetrieveRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PingResponse>> {
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
            path: `/v1/ping/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PingResponseFromJSON(jsonValue));
    }

    /**
     * Responds with a generic message for use in checking whether the API is available. This response directly calls API code and indicates that the host is reachable and processing requests.
     * Server heartbeat operation
     */
    async pingRetrieve(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PingResponse> {
        const response = await this.pingRetrieveRaw(initOverrides);
        return await response.value();
    }

}
