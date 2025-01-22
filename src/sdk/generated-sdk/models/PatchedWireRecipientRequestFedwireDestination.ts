/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.131)
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
 * @interface PatchedWireRecipientRequestFedwireDestination
 */
export interface PatchedWireRecipientRequestFedwireDestination {
    /**
     * 
     * @type {string}
     * @memberof PatchedWireRecipientRequestFedwireDestination
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedWireRecipientRequestFedwireDestination
     */
    routingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedWireRecipientRequestFedwireDestination
     */
    accountNumber?: string;
}

/**
 * Check if a given object implements the PatchedWireRecipientRequestFedwireDestination interface.
 */
export function instanceOfPatchedWireRecipientRequestFedwireDestination(value: object): value is PatchedWireRecipientRequestFedwireDestination {
    return true;
}

export function PatchedWireRecipientRequestFedwireDestinationFromJSON(json: any): PatchedWireRecipientRequestFedwireDestination {
    return PatchedWireRecipientRequestFedwireDestinationFromJSONTyped(json, false);
}

export function PatchedWireRecipientRequestFedwireDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedWireRecipientRequestFedwireDestination {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'routingNumber': json['routing_number'] == null ? undefined : json['routing_number'],
        'accountNumber': json['account_number'] == null ? undefined : json['account_number'],
    };
}

export function PatchedWireRecipientRequestFedwireDestinationToJSON(value?: PatchedWireRecipientRequestFedwireDestination | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'routing_number': value['routingNumber'],
        'account_number': value['accountNumber'],
    };
}

