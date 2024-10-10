/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.225)
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
 * @interface Phone
 */
export interface Phone {
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    number: string;
}

/**
 * Check if a given object implements the Phone interface.
 */
export function instanceOfPhone(value: object): value is Phone {
    if (!('number' in value) || value['number'] === undefined) return false;
    return true;
}

export function PhoneFromJSON(json: any): Phone {
    return PhoneFromJSONTyped(json, false);
}

export function PhoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): Phone {
    if (json == null) {
        return json;
    }
    return {
        
        'number': json['number'],
    };
}

export function PhoneToJSON(value?: Phone | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'number': value['number'],
    };
}
