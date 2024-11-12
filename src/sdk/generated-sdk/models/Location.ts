/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.90)
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
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    readonly city?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    readonly regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    readonly countryCode?: string;
}

/**
 * Check if a given object implements the Location interface.
 */
export function instanceOfLocation(value: object): value is Location {
    return true;
}

export function LocationFromJSON(json: any): Location {
    return LocationFromJSONTyped(json, false);
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
    if (json == null) {
        return json;
    }
    return {
        
        'city': json['city'] == null ? undefined : json['city'],
        'regionCode': json['region_code'] == null ? undefined : json['region_code'],
        'countryCode': json['country_code'] == null ? undefined : json['country_code'],
    };
}

export function LocationToJSON(value?: Omit<Location, 'city'|'region_code'|'country_code'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

