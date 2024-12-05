/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.263)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TravelDestinationCodesEnum } from './TravelDestinationCodesEnum';
import {
    TravelDestinationCodesEnumFromJSON,
    TravelDestinationCodesEnumFromJSONTyped,
    TravelDestinationCodesEnumToJSON,
} from './TravelDestinationCodesEnum';

/**
 * For getting and setting integrations.cards.api_messages.CardFraudDetails
 * @export
 * @interface CardTravelNoteRequest
 */
export interface CardTravelNoteRequest {
    /**
     * 
     * @type {Array<TravelDestinationCodesEnum>}
     * @memberof CardTravelNoteRequest
     */
    travelDestinationCodes: Array<TravelDestinationCodesEnum>;
    /**
     * 
     * @type {Date}
     * @memberof CardTravelNoteRequest
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof CardTravelNoteRequest
     */
    endDate: Date;
}

/**
 * Check if a given object implements the CardTravelNoteRequest interface.
 */
export function instanceOfCardTravelNoteRequest(value: object): value is CardTravelNoteRequest {
    if (!('travelDestinationCodes' in value) || value['travelDestinationCodes'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('endDate' in value) || value['endDate'] === undefined) return false;
    return true;
}

export function CardTravelNoteRequestFromJSON(json: any): CardTravelNoteRequest {
    return CardTravelNoteRequestFromJSONTyped(json, false);
}

export function CardTravelNoteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardTravelNoteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'travelDestinationCodes': ((json['travel_destination_codes'] as Array<any>).map(TravelDestinationCodesEnumFromJSON)),
        'startDate': (new Date(json['start_date'])),
        'endDate': (new Date(json['end_date'])),
    };
}

export function CardTravelNoteRequestToJSON(value?: CardTravelNoteRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'travel_destination_codes': ((value['travelDestinationCodes'] as Array<any>).map(TravelDestinationCodesEnumToJSON)),
        'start_date': ((value['startDate']).toISOString().substring(0,10)),
        'end_date': ((value['endDate']).toISOString().substring(0,10)),
    };
}

