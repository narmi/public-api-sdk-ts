/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.93)
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
 * @interface RetrieveSudoResponse
 */
export interface RetrieveSudoResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RetrieveSudoResponse
     */
    readonly success?: boolean;
}

/**
 * Check if a given object implements the RetrieveSudoResponse interface.
 */
export function instanceOfRetrieveSudoResponse(value: object): value is RetrieveSudoResponse {
    return true;
}

export function RetrieveSudoResponseFromJSON(json: any): RetrieveSudoResponse {
    return RetrieveSudoResponseFromJSONTyped(json, false);
}

export function RetrieveSudoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveSudoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'] == null ? undefined : json['success'],
    };
}

export function RetrieveSudoResponseToJSON(value?: Omit<RetrieveSudoResponse, 'success'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

