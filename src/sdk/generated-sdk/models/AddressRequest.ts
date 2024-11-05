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
 * @interface AddressRequest
 */
export interface AddressRequest {
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    streetAddress: string;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    streetAddress2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    city: string;
    /**
     * A region, province, parish, or any kind of subdivision represented by up to 3 characters. Typically an ISO 2-character state code.
     * @type {string}
     * @memberof AddressRequest
     */
    regionCode: string;
    /**
     * Typically a five-digit numeric US ZIP Code.
     * @type {string}
     * @memberof AddressRequest
     */
    postalCode: string;
    /**
     * An ISO 3166-1 alpha-2 country code.
     * @type {string}
     * @memberof AddressRequest
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    type?: string;
}

/**
 * Check if a given object implements the AddressRequest interface.
 */
export function instanceOfAddressRequest(value: object): value is AddressRequest {
    if (!('streetAddress' in value) || value['streetAddress'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('regionCode' in value) || value['regionCode'] === undefined) return false;
    if (!('postalCode' in value) || value['postalCode'] === undefined) return false;
    return true;
}

export function AddressRequestFromJSON(json: any): AddressRequest {
    return AddressRequestFromJSONTyped(json, false);
}

export function AddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressRequest {
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

export function AddressRequestToJSON(value?: AddressRequest | null): any {
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

