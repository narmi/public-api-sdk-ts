/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.408)
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

/**
 * Updates to the ach_destination and fedwire_destination fields are handled by the
 * ACHDetailsSerializer and FedwireDestinationSerializer, respectively.
 * @export
 * @interface RecipientRequest
 */
export interface RecipientRequest {
    /**
     * Used to formally identify the recipient (e.g. for sending fedwires.)
     * @type {string}
     * @memberof RecipientRequest
     */
    name: string;
    /**
     * Name used internally to more easily identify the recipient.
     * @type {string}
     * @memberof RecipientRequest
     */
    nickname?: string;
    /**
     * 
     * @type {RecipientTypeEnum}
     * @memberof RecipientRequest
     */
    type?: RecipientTypeEnum;
}

/**
 * Check if a given object implements the RecipientRequest interface.
 */
export function instanceOfRecipientRequest(value: object): value is RecipientRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function RecipientRequestFromJSON(json: any): RecipientRequest {
    return RecipientRequestFromJSONTyped(json, false);
}

export function RecipientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipientRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'nickname': json['nickname'] == null ? undefined : json['nickname'],
        'type': json['type'] == null ? undefined : RecipientTypeEnumFromJSON(json['type']),
    };
}

export function RecipientRequestToJSON(value?: RecipientRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'nickname': value['nickname'],
        'type': RecipientTypeEnumToJSON(value['type']),
    };
}

