/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.250)
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
 * @interface PatchedFedwireDestinationRequest
 */
export interface PatchedFedwireDestinationRequest {
    /**
     * Account number for the Fedwire destination.
     * @type {string}
     * @memberof PatchedFedwireDestinationRequest
     */
    accountNumber?: string;
    /**
     * Routing number for the Fedwire destination.
     * @type {string}
     * @memberof PatchedFedwireDestinationRequest
     */
    routingNumber?: string;
    /**
     * UUID of the recipient associated with this Fedwire destination.
     * @type {string}
     * @memberof PatchedFedwireDestinationRequest
     */
    recipient?: string;
    /**
     * 
     * @type {WireRecipientAddressRequest}
     * @memberof PatchedFedwireDestinationRequest
     */
    address?: WireRecipientAddressRequest;
}

/**
 * Check if a given object implements the PatchedFedwireDestinationRequest interface.
 */
export function instanceOfPatchedFedwireDestinationRequest(value: object): value is PatchedFedwireDestinationRequest {
    return true;
}

export function PatchedFedwireDestinationRequestFromJSON(json: any): PatchedFedwireDestinationRequest {
    return PatchedFedwireDestinationRequestFromJSONTyped(json, false);
}

export function PatchedFedwireDestinationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedFedwireDestinationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'] == null ? undefined : json['account_number'],
        'routingNumber': json['routing_number'] == null ? undefined : json['routing_number'],
        'recipient': json['recipient'] == null ? undefined : json['recipient'],
        'address': json['address'] == null ? undefined : WireRecipientAddressRequestFromJSON(json['address']),
    };
}

export function PatchedFedwireDestinationRequestToJSON(value?: PatchedFedwireDestinationRequest | null): any {
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

