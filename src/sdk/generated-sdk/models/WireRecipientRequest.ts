/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.233)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { WireRecipientAddressRequest } from './WireRecipientAddressRequest';
import {
    WireRecipientAddressRequestFromJSON,
    WireRecipientAddressRequestFromJSONTyped,
    WireRecipientAddressRequestToJSON,
} from './WireRecipientAddressRequest';

/**
 * 
 * @export
 * @interface WireRecipientRequest
 */
export interface WireRecipientRequest {
    /**
     * 
     * @type {string}
     * @memberof WireRecipientRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientRequest
     */
    routingNumber: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipientRequest
     */
    accountNumber: string;
    /**
     * 
     * @type {WireRecipientAddressRequest}
     * @memberof WireRecipientRequest
     */
    address: WireRecipientAddressRequest;
}

/**
 * Check if a given object implements the WireRecipientRequest interface.
 */
export function instanceOfWireRecipientRequest(value: object): value is WireRecipientRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function WireRecipientRequestFromJSON(json: any): WireRecipientRequest {
    return WireRecipientRequestFromJSONTyped(json, false);
}

export function WireRecipientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireRecipientRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'routingNumber': json['routing_number'],
        'accountNumber': json['account_number'],
        'address': WireRecipientAddressRequestFromJSON(json['address']),
    };
}

export function WireRecipientRequestToJSON(value?: WireRecipientRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'routing_number': value['routingNumber'],
        'account_number': value['accountNumber'],
        'address': WireRecipientAddressRequestToJSON(value['address']),
    };
}

