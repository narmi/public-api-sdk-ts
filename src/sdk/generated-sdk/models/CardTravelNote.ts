/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.48)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * For getting and setting integrations.cards.api_messages.CardFraudDetails
 * @export
 * @interface CardTravelNote
 */
export interface CardTravelNote {
    /**
     * 
     * @type {Date}
     * @memberof CardTravelNote
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof CardTravelNote
     */
    endDate: Date;
}

/**
 * Check if a given object implements the CardTravelNote interface.
 */
export function instanceOfCardTravelNote(value: object): value is CardTravelNote {
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('endDate' in value) || value['endDate'] === undefined) return false;
    return true;
}

export function CardTravelNoteFromJSON(json: any): CardTravelNote {
    return CardTravelNoteFromJSONTyped(json, false);
}

export function CardTravelNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardTravelNote {
    if (json == null) {
        return json;
    }
    return {
        
        'startDate': (new Date(json['start_date'])),
        'endDate': (new Date(json['end_date'])),
    };
}

export function CardTravelNoteToJSON(value?: CardTravelNote | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_date': ((value['startDate']).toISOString().substring(0,10)),
        'end_date': ((value['endDate']).toISOString().substring(0,10)),
    };
}

