/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.59)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Recipient } from './Recipient';
import {
    RecipientFromJSON,
    RecipientFromJSONTyped,
    RecipientToJSON,
} from './Recipient';

/**
 * 
 * @export
 * @interface PaginatedRecipientList
 */
export interface PaginatedRecipientList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedRecipientList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRecipientList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRecipientList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Recipient>}
     * @memberof PaginatedRecipientList
     */
    results: Array<Recipient>;
}

/**
 * Check if a given object implements the PaginatedRecipientList interface.
 */
export function instanceOfPaginatedRecipientList(value: object): value is PaginatedRecipientList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedRecipientListFromJSON(json: any): PaginatedRecipientList {
    return PaginatedRecipientListFromJSONTyped(json, false);
}

export function PaginatedRecipientListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedRecipientList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(RecipientFromJSON)),
    };
}

export function PaginatedRecipientListToJSON(value?: PaginatedRecipientList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(RecipientToJSON)),
    };
}

