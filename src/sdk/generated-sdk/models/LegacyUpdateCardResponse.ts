/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.46)
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
 * @interface LegacyUpdateCardResponse
 */
export interface LegacyUpdateCardResponse {
    /**
     * 
     * @type {Card}
     * @memberof LegacyUpdateCardResponse
     */
    readonly card?: Card;
}

/**
 * Check if a given object implements the LegacyUpdateCardResponse interface.
 */
export function instanceOfLegacyUpdateCardResponse(value: object): value is LegacyUpdateCardResponse {
    return true;
}

export function LegacyUpdateCardResponseFromJSON(json: any): LegacyUpdateCardResponse {
    return LegacyUpdateCardResponseFromJSONTyped(json, false);
}

export function LegacyUpdateCardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyUpdateCardResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'card': json['card'] == null ? undefined : CardFromJSON(json['card']),
    };
}

export function LegacyUpdateCardResponseToJSON(value?: Omit<LegacyUpdateCardResponse, 'card'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

