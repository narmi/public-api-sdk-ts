/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.16)
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
 * @interface AchDetailsCreate400Response
 */
export interface AchDetailsCreate400Response {
    /**
     * 
     * @type {string}
     * @memberof AchDetailsCreate400Response
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof AchDetailsCreate400Response
     */
    id?: string;
}

/**
 * Check if a given object implements the AchDetailsCreate400Response interface.
 */
export function instanceOfAchDetailsCreate400Response(value: object): value is AchDetailsCreate400Response {
    return true;
}

export function AchDetailsCreate400ResponseFromJSON(json: any): AchDetailsCreate400Response {
    return AchDetailsCreate400ResponseFromJSONTyped(json, false);
}

export function AchDetailsCreate400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchDetailsCreate400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function AchDetailsCreate400ResponseToJSON(value?: AchDetailsCreate400Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'id': value['id'],
    };
}

