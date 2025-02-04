/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.17)
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
 * @interface Check
 */
export interface Check {
    /**
     * Sequential number of the check used for bookkeeping.
     * @type {string}
     * @memberof Check
     */
    readonly number?: string;
}

/**
 * Check if a given object implements the Check interface.
 */
export function instanceOfCheck(value: object): value is Check {
    return true;
}

export function CheckFromJSON(json: any): Check {
    return CheckFromJSONTyped(json, false);
}

export function CheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): Check {
    if (json == null) {
        return json;
    }
    return {
        
        'number': json['number'] == null ? undefined : json['number'],
    };
}

export function CheckToJSON(value?: Omit<Check, 'number'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

