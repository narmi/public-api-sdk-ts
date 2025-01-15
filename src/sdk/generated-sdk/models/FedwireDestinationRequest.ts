/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.86)
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
 * In addition to the standard FedwireDestination fields you'd expect for a create/updated request,
 * this serializer also requires a recipient (passed in as the uuid of the recipient)
 * that will be associated with the created/updated FedwireDestination instance.
 * @export
 * @interface FedwireDestinationRequest
 */
export interface FedwireDestinationRequest {
    /**
     * Account number for the Fedwire destination.
     * @type {string}
     * @memberof FedwireDestinationRequest
     */
    accountNumber: string;
    /**
     * Routing number for the Fedwire destination.
     * @type {string}
     * @memberof FedwireDestinationRequest
     */
    routingNumber: string;
    /**
     * UUID of the recipient associated with this Fedwire destination.
     * @type {string}
     * @memberof FedwireDestinationRequest
     */
    recipient: string;
    /**
     * 
     * @type {WireRecipientAddressRequest}
     * @memberof FedwireDestinationRequest
     */
    address: WireRecipientAddressRequest;
}

/**
 * Check if a given object implements the FedwireDestinationRequest interface.
 */
export function instanceOfFedwireDestinationRequest(value: object): value is FedwireDestinationRequest {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function FedwireDestinationRequestFromJSON(json: any): FedwireDestinationRequest {
    return FedwireDestinationRequestFromJSONTyped(json, false);
}

export function FedwireDestinationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FedwireDestinationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'],
        'routingNumber': json['routing_number'],
        'recipient': json['recipient'],
        'address': WireRecipientAddressRequestFromJSON(json['address']),
    };
}

export function FedwireDestinationRequestToJSON(value?: FedwireDestinationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'routing_number': value['routingNumber'],
        'recipient': value['recipient'],
        'address': WireRecipientAddressRequestToJSON(value['address']),
    };
}

