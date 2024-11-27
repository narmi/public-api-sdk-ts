/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.231)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { WireRecipientAddress } from './WireRecipientAddress';
import {
    WireRecipientAddressFromJSON,
    WireRecipientAddressFromJSONTyped,
    WireRecipientAddressToJSON,
} from './WireRecipientAddress';

/**
 * 
 * @export
 * @interface WireRecipient
 */
export interface WireRecipient {
    /**
     * 
     * @type {string}
     * @memberof WireRecipient
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipient
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipient
     */
    routingNumber: string;
    /**
     * 
     * @type {string}
     * @memberof WireRecipient
     */
    accountNumber: string;
    /**
     * 
     * @type {WireRecipientAddress}
     * @memberof WireRecipient
     */
    address: WireRecipientAddress;
    /**
     * 
     * @type {string}
     * @memberof WireRecipient
     */
    readonly destinationInstitutionName?: string;
}

/**
 * Check if a given object implements the WireRecipient interface.
 */
export function instanceOfWireRecipient(value: object): value is WireRecipient {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function WireRecipientFromJSON(json: any): WireRecipient {
    return WireRecipientFromJSONTyped(json, false);
}

export function WireRecipientFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireRecipient {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'routingNumber': json['routing_number'],
        'accountNumber': json['account_number'],
        'address': WireRecipientAddressFromJSON(json['address']),
        'destinationInstitutionName': json['destination_institution_name'] == null ? undefined : json['destination_institution_name'],
    };
}

export function WireRecipientToJSON(value?: Omit<WireRecipient, 'id'|'destination_institution_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'routing_number': value['routingNumber'],
        'account_number': value['accountNumber'],
        'address': WireRecipientAddressToJSON(value['address']),
    };
}

