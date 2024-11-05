/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.202)
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
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    streetAddress: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    streetAddress2?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city: string;
    /**
     * A region, province, parish, or any kind of subdivision represented by up to 3 characters. Typically an ISO 2-character state code.
     * @type {string}
     * @memberof Address
     */
    regionCode: string;
    /**
     * Typically a five-digit numeric US ZIP Code.
     * @type {string}
     * @memberof Address
     */
    postalCode: string;
    /**
     * An ISO 3166-1 alpha-2 country code.
     * @type {string}
     * @memberof Address
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    type?: string;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
    if (!('streetAddress' in value) || value['streetAddress'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('regionCode' in value) || value['regionCode'] === undefined) return false;
    if (!('postalCode' in value) || value['postalCode'] === undefined) return false;
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if (json == null) {
        return json;
    }
    return {
        
        'streetAddress': json['street_address'],
        'streetAddress2': json['street_address_2'] == null ? undefined : json['street_address_2'],
        'city': json['city'],
        'regionCode': json['region_code'],
        'postalCode': json['postal_code'],
        'countryCode': json['country_code'] == null ? undefined : json['country_code'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'street_address': value['streetAddress'],
        'street_address_2': value['streetAddress2'],
        'city': value['city'],
        'region_code': value['regionCode'],
        'postal_code': value['postalCode'],
        'country_code': value['countryCode'],
        'type': value['type'],
    };
}

