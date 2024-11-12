/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.245)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { WireRecipient } from './WireRecipient';
import {
    WireRecipientFromJSON,
    WireRecipientFromJSONTyped,
    WireRecipientToJSON,
} from './WireRecipient';

/**
 * 
 * @export
 * @interface PaginatedWireRecipientList
 */
export interface PaginatedWireRecipientList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedWireRecipientList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedWireRecipientList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedWireRecipientList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<WireRecipient>}
     * @memberof PaginatedWireRecipientList
     */
    results: Array<WireRecipient>;
}

/**
 * Check if a given object implements the PaginatedWireRecipientList interface.
 */
export function instanceOfPaginatedWireRecipientList(value: object): value is PaginatedWireRecipientList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedWireRecipientListFromJSON(json: any): PaginatedWireRecipientList {
    return PaginatedWireRecipientListFromJSONTyped(json, false);
}

export function PaginatedWireRecipientListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedWireRecipientList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(WireRecipientFromJSON)),
    };
}

export function PaginatedWireRecipientListToJSON(value?: PaginatedWireRecipientList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(WireRecipientToJSON)),
    };
}

