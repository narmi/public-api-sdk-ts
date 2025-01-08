/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.33)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CardStateEnum } from './CardStateEnum';
import {
    CardStateEnumFromJSON,
    CardStateEnumFromJSONTyped,
    CardStateEnumToJSON,
} from './CardStateEnum';

/**
 * 
 * @export
 * @interface CardRequest
 */
export interface CardRequest {
    /**
     * Indicates whether the card is functional.
     * 
     * * `active` - active
     * * `inactive` - inactive
     * @type {CardStateEnum}
     * @memberof CardRequest
     */
    state: CardStateEnum;
}

/**
 * Check if a given object implements the CardRequest interface.
 */
export function instanceOfCardRequest(value: object): value is CardRequest {
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function CardRequestFromJSON(json: any): CardRequest {
    return CardRequestFromJSONTyped(json, false);
}

export function CardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'state': CardStateEnumFromJSON(json['state']),
    };
}

export function CardRequestToJSON(value?: CardRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CardStateEnumToJSON(value['state']),
    };
}

