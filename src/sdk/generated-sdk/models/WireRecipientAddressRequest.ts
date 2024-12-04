/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.256)
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
 * @interface WireRecipientAddressRequest
 */
export interface WireRecipientAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddressRequest
     */
    streetAddress: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddressRequest
     */
    streetAddress2?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddressRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddressRequest
     */
    regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddressRequest
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddressRequest
     */
    countryCode?: string;
}

/**
 * Check if a given object implements the WireRecipientAddressRequest interface.
 */
export function instanceOfWireRecipientAddressRequest(value: object): value is WireRecipientAddressRequest {
    if (!('streetAddress' in value) || value['streetAddress'] === undefined) return false;
    return true;
}

export function WireRecipientAddressRequestFromJSON(json: any): WireRecipientAddressRequest {
    return WireRecipientAddressRequestFromJSONTyped(json, false);
}

export function WireRecipientAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireRecipientAddressRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'streetAddress': json['street_address'],
        'streetAddress2': json['street_address_2'] == null ? undefined : json['street_address_2'],
        'city': json['city'] == null ? undefined : json['city'],
        'regionCode': json['region_code'] == null ? undefined : json['region_code'],
        'postalCode': json['postal_code'] == null ? undefined : json['postal_code'],
        'countryCode': json['country_code'] == null ? undefined : json['country_code'],
    };
}

export function WireRecipientAddressRequestToJSON(value?: WireRecipientAddressRequest | null): any {
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
    };
}

