/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.127)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MoneyMovementDestination } from './MoneyMovementDestination';
import {
    MoneyMovementDestinationFromJSON,
    MoneyMovementDestinationFromJSONTyped,
    MoneyMovementDestinationToJSON,
} from './MoneyMovementDestination';
import type { WireRecipientAddress } from './WireRecipientAddress';
import {
    WireRecipientAddressFromJSON,
    WireRecipientAddressFromJSONTyped,
    WireRecipientAddressToJSON,
} from './WireRecipientAddress';

/**
 * In addition to the standard FedwireDestination fields you'd expect for a create/updated request,
 * this serializer also requires a recipient (passed in as the uuid of the recipient)
 * that will be associated with the created/updated ACHDestination.
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
     * 
     * @type {MoneyMovementDestination}
     * @memberof FedwireDestination
     */
    readonly destination?: MoneyMovementDestination;
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
        'destination': json['destination'] == null ? undefined : MoneyMovementDestinationFromJSON(json['destination']),
        'address': WireRecipientAddressFromJSON(json['address']),
        'institutionName': json['institution_name'] == null ? undefined : json['institution_name'],
    };
}

export function FedwireDestinationToJSON(value?: Omit<FedwireDestination, 'id'|'destination'|'institution_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': WireRecipientAddressToJSON(value['address']),
    };
}

