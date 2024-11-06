/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.211)
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
 * @interface AchDestinationsCreate400Response
 */
export interface AchDestinationsCreate400Response {
    /**
     * 
     * @type {string}
     * @memberof AchDestinationsCreate400Response
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof AchDestinationsCreate400Response
     */
    id?: string;
}

/**
 * Check if a given object implements the AchDestinationsCreate400Response interface.
 */
export function instanceOfAchDestinationsCreate400Response(value: object): value is AchDestinationsCreate400Response {
    return true;
}

export function AchDestinationsCreate400ResponseFromJSON(json: any): AchDestinationsCreate400Response {
    return AchDestinationsCreate400ResponseFromJSONTyped(json, false);
}

export function AchDestinationsCreate400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchDestinationsCreate400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function AchDestinationsCreate400ResponseToJSON(value?: AchDestinationsCreate400Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'id': value['id'],
    };
}

