/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.146)
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
 * @interface WireRecipientAddress
 */
export interface WireRecipientAddress {
    /**
     * 
     * @type {number}
     * @memberof WireRecipientAddress
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddress
     */
    streetAddress: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddress
     */
    streetAddress2?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddress
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddress
     */
    regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddress
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientAddress
     */
    countryCode?: string;
}

/**
 * Check if a given object implements the WireRecipientAddress interface.
 */
export function instanceOfWireRecipientAddress(value: object): value is WireRecipientAddress {
    if (!('streetAddress' in value) || value['streetAddress'] === undefined) return false;
    return true;
}

export function WireRecipientAddressFromJSON(json: any): WireRecipientAddress {
    return WireRecipientAddressFromJSONTyped(json, false);
}

export function WireRecipientAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireRecipientAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'streetAddress': json['street_address'],
        'streetAddress2': json['street_address_2'] == null ? undefined : json['street_address_2'],
        'city': json['city'] == null ? undefined : json['city'],
        'regionCode': json['region_code'] == null ? undefined : json['region_code'],
        'postalCode': json['postal_code'] == null ? undefined : json['postal_code'],
        'countryCode': json['country_code'] == null ? undefined : json['country_code'],
    };
}

export function WireRecipientAddressToJSON(value?: Omit<WireRecipientAddress, 'id'> | null): any {
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

