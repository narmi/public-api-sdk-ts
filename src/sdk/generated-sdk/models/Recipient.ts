/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.207)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { RecipientTypeEnum } from './RecipientTypeEnum';
import {
    RecipientTypeEnumFromJSON,
    RecipientTypeEnumFromJSONTyped,
    RecipientTypeEnumToJSON,
} from './RecipientTypeEnum';
import type { ACHDetails } from './ACHDetails';
import {
    ACHDetailsFromJSON,
    ACHDetailsFromJSONTyped,
    ACHDetailsToJSON,
} from './ACHDetails';
import type { FedwireDestination } from './FedwireDestination';
import {
    FedwireDestinationFromJSON,
    FedwireDestinationFromJSONTyped,
    FedwireDestinationToJSON,
} from './FedwireDestination';

/**
 * Updates to the ach_destination and fedwire_destination fields are handled by the
 * ACHDetailsSerializer and FedwireDestinationSerializer, respectively.
 * @export
 * @interface Recipient
 */
export interface Recipient {
    /**
     * 
     * @type {string}
     * @memberof Recipient
     */
    readonly id?: string;
    /**
     * Used to formally identify the recipient (e.g. for sending fedwires.)
     * @type {string}
     * @memberof Recipient
     */
    name: string;
    /**
     * Name used internally to more easily identify the recipient.
     * @type {string}
     * @memberof Recipient
     */
    nickname?: string;
    /**
     * 
     * @type {RecipientTypeEnum}
     * @memberof Recipient
     */
    type?: RecipientTypeEnum;
    /**
     * A dictionary containing the destination (account number & routing number), account type (e.g. 'checking'), and account purpose ('personal' or 'business') for the ACH destination. A null value reflects that the recipient does not have an ACH destination.
     * @type {ACHDetails}
     * @memberof Recipient
     */
    readonly achDestination?: ACHDetails;
    /**
     * A dictionary containing the destination (account number & routing number) and address for the Fedwire destination. A null value reflects that the recipient does not have a Fedwire destination.
     * @type {FedwireDestination}
     * @memberof Recipient
     */
    readonly fedwireDestination?: FedwireDestination;
}

/**
 * Check if a given object implements the Recipient interface.
 */
export function instanceOfRecipient(value: object): value is Recipient {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function RecipientFromJSON(json: any): Recipient {
    return RecipientFromJSONTyped(json, false);
}

export function RecipientFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recipient {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'nickname': json['nickname'] == null ? undefined : json['nickname'],
        'type': json['type'] == null ? undefined : RecipientTypeEnumFromJSON(json['type']),
        'achDestination': json['ach_destination'] == null ? undefined : ACHDetailsFromJSON(json['ach_destination']),
        'fedwireDestination': json['fedwire_destination'] == null ? undefined : FedwireDestinationFromJSON(json['fedwire_destination']),
    };
}

export function RecipientToJSON(value?: Omit<Recipient, 'id'|'ach_destination'|'fedwire_destination'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'nickname': value['nickname'],
        'type': RecipientTypeEnumToJSON(value['type']),
    };
}

