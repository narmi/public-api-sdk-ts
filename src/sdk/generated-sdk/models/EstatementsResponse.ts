/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.188)
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
 * @interface EstatementsResponse
 */
export interface EstatementsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof EstatementsResponse
     */
    eStatements: boolean;
}

/**
 * Check if a given object implements the EstatementsResponse interface.
 */
export function instanceOfEstatementsResponse(value: object): value is EstatementsResponse {
    if (!('eStatements' in value) || value['eStatements'] === undefined) return false;
    return true;
}

export function EstatementsResponseFromJSON(json: any): EstatementsResponse {
    return EstatementsResponseFromJSONTyped(json, false);
}

export function EstatementsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EstatementsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'eStatements': json['eStatements'],
    };
}

export function EstatementsResponseToJSON(value?: EstatementsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'eStatements': value['eStatements'],
    };
}

