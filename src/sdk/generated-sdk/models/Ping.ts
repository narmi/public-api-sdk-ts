/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.80)
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
 * @interface Ping
 */
export interface Ping {
    /**
     * 
     * @type {string}
     * @memberof Ping
     */
    message?: string;
}

/**
 * Check if a given object implements the Ping interface.
 */
export function instanceOfPing(value: object): value is Ping {
    return true;
}

export function PingFromJSON(json: any): Ping {
    return PingFromJSONTyped(json, false);
}

export function PingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ping {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function PingToJSON(value?: Ping | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

