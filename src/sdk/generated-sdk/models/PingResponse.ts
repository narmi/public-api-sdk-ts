/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.246)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PingResponse
 */
export interface PingResponse {
    /**
     * 
     * @type {string}
     * @memberof PingResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the PingResponse interface.
 */
export function instanceOfPingResponse(value: object): value is PingResponse {
    return true;
}

export function PingResponseFromJSON(json: any): PingResponse {
    return PingResponseFromJSONTyped(json, false);
}

export function PingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PingResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function PingResponseToJSON(value?: PingResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

