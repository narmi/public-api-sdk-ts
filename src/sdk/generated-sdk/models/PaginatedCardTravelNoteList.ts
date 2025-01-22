/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.154)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CardTravelNote } from './CardTravelNote';
import {
    CardTravelNoteFromJSON,
    CardTravelNoteFromJSONTyped,
    CardTravelNoteToJSON,
} from './CardTravelNote';

/**
 * 
 * @export
 * @interface PaginatedCardTravelNoteList
 */
export interface PaginatedCardTravelNoteList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedCardTravelNoteList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCardTravelNoteList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCardTravelNoteList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<CardTravelNote>}
     * @memberof PaginatedCardTravelNoteList
     */
    results: Array<CardTravelNote>;
}

/**
 * Check if a given object implements the PaginatedCardTravelNoteList interface.
 */
export function instanceOfPaginatedCardTravelNoteList(value: object): value is PaginatedCardTravelNoteList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedCardTravelNoteListFromJSON(json: any): PaginatedCardTravelNoteList {
    return PaginatedCardTravelNoteListFromJSONTyped(json, false);
}

export function PaginatedCardTravelNoteListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedCardTravelNoteList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(CardTravelNoteFromJSON)),
    };
}

export function PaginatedCardTravelNoteListToJSON(value?: PaginatedCardTravelNoteList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(CardTravelNoteToJSON)),
    };
}

