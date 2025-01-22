/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.144)
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
 * In addition to the standard FedwireDestination fields you'd expect for a create/updated request,
 * this serializer also requires a recipient (passed in as the uuid of the recipient)
 * that will be associated with the created/updated FedwireDestination instance.
 * @export
 * @interface FedwireDestination
 */
export interface FedwireDestination {
    /**
     * 
     * @type {string}
     * @memberof FedwireDestination
     */
    readonly id?: string;
    /**
     * Account number for the Fedwire destination.
     * @type {string}
     * @memberof FedwireDestination
     */
    accountNumber: string;
    /**
     * Routing number for the Fedwire destination.
     * @type {string}
     * @memberof FedwireDestination
     */
    routingNumber: string;
    /**
     * 
     * @type {WireRecipientAddress}
     * @memberof FedwireDestination
     */
    address: WireRecipientAddress;
    /**
     * 
     * @type {string}
     * @memberof FedwireDestination
     */
    readonly institutionName?: string;
}

/**
 * Check if a given object implements the FedwireDestination interface.
 */
export function instanceOfFedwireDestination(value: object): value is FedwireDestination {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function FedwireDestinationFromJSON(json: any): FedwireDestination {
    return FedwireDestinationFromJSONTyped(json, false);
}

export function FedwireDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FedwireDestination {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'accountNumber': json['account_number'],
        'routingNumber': json['routing_number'],
        'address': WireRecipientAddressFromJSON(json['address']),
        'institutionName': json['institution_name'] == null ? undefined : json['institution_name'],
    };
}

export function FedwireDestinationToJSON(value?: Omit<FedwireDestination, 'id'|'institution_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'routing_number': value['routingNumber'],
        'address': WireRecipientAddressToJSON(value['address']),
    };
}

