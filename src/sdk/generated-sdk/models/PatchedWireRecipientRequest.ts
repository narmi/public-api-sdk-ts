/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.316)
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
 * @interface PatchedWireRecipientRequest
 */
export interface PatchedWireRecipientRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedWireRecipientRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedWireRecipientRequest
     */
    routingNumber: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedWireRecipientRequest
     */
    accountNumber: string;
    /**
     * 
     * @type {WireRecipientAddressRequest}
     * @memberof PatchedWireRecipientRequest
     */
    address: WireRecipientAddressRequest;
}

/**
 * Check if a given object implements the PatchedWireRecipientRequest interface.
 */
export function instanceOfPatchedWireRecipientRequest(value: object): value is PatchedWireRecipientRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function PatchedWireRecipientRequestFromJSON(json: any): PatchedWireRecipientRequest {
    return PatchedWireRecipientRequestFromJSONTyped(json, false);
}

export function PatchedWireRecipientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedWireRecipientRequest {
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

export function PatchedWireRecipientRequestToJSON(value?: PatchedWireRecipientRequest | null): any {
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

