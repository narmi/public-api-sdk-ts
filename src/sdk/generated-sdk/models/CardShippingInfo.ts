/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.106)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * integrations.cards.api_messages.Shipping
 * @export
 * @interface CardShippingInfo
 */
export interface CardShippingInfo {
    /**
     * 
     * @type {Address}
     * @memberof CardShippingInfo
     */
    address: Address;
    /**
     * 
     * @type {string}
     * @memberof CardShippingInfo
     */
    method: string;
    /**
     * 
     * @type {Date}
     * @memberof CardShippingInfo
     */
    shippedOn?: Date | null;
}

/**
 * Check if a given object implements the CardShippingInfo interface.
 */
export function instanceOfCardShippingInfo(value: object): value is CardShippingInfo {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function CardShippingInfoFromJSON(json: any): CardShippingInfo {
    return CardShippingInfoFromJSONTyped(json, false);
}

export function CardShippingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardShippingInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'address': AddressFromJSON(json['address']),
        'method': json['method'],
        'shippedOn': json['shipped_on'] == null ? undefined : (new Date(json['shipped_on'])),
    };
}

export function CardShippingInfoToJSON(value?: CardShippingInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': AddressToJSON(value['address']),
        'method': value['method'],
        'shipped_on': value['shippedOn'] == null ? undefined : ((value['shippedOn'] as any).toISOString().substring(0,10)),
    };
}

