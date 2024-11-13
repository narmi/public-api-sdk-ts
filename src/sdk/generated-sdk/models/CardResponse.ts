/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.104)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Card } from './Card';
import {
    CardFromJSON,
    CardFromJSONTyped,
    CardToJSON,
} from './Card';

/**
 * 
 * @export
 * @interface CardResponse
 */
export interface CardResponse {
    /**
     * 
     * @type {Card}
     * @memberof CardResponse
     */
    card: Card;
}

/**
 * Check if a given object implements the CardResponse interface.
 */
export function instanceOfCardResponse(value: object): value is CardResponse {
    if (!('card' in value) || value['card'] === undefined) return false;
    return true;
}

export function CardResponseFromJSON(json: any): CardResponse {
    return CardResponseFromJSONTyped(json, false);
}

export function CardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'card': CardFromJSON(json['card']),
    };
}

export function CardResponseToJSON(value?: CardResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'card': CardToJSON(value['card']),
    };
}

