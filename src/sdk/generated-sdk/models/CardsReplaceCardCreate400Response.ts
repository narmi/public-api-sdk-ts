/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.240)
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
 * @interface CardsReplaceCardCreate400Response
 */
export interface CardsReplaceCardCreate400Response {
    /**
     * 
     * @type {string}
     * @memberof CardsReplaceCardCreate400Response
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof CardsReplaceCardCreate400Response
     */
    id?: string;
}

/**
 * Check if a given object implements the CardsReplaceCardCreate400Response interface.
 */
export function instanceOfCardsReplaceCardCreate400Response(value: object): value is CardsReplaceCardCreate400Response {
    return true;
}

export function CardsReplaceCardCreate400ResponseFromJSON(json: any): CardsReplaceCardCreate400Response {
    return CardsReplaceCardCreate400ResponseFromJSONTyped(json, false);
}

export function CardsReplaceCardCreate400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardsReplaceCardCreate400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function CardsReplaceCardCreate400ResponseToJSON(value?: CardsReplaceCardCreate400Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'id': value['id'],
    };
}
