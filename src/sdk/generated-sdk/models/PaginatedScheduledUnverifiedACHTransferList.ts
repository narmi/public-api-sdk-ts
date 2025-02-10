/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.63)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ScheduledUnverifiedACHTransfer } from './ScheduledUnverifiedACHTransfer';
import {
    ScheduledUnverifiedACHTransferFromJSON,
    ScheduledUnverifiedACHTransferFromJSONTyped,
    ScheduledUnverifiedACHTransferToJSON,
} from './ScheduledUnverifiedACHTransfer';

/**
 * 
 * @export
 * @interface PaginatedScheduledUnverifiedACHTransferList
 */
export interface PaginatedScheduledUnverifiedACHTransferList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedScheduledUnverifiedACHTransferList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedScheduledUnverifiedACHTransferList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedScheduledUnverifiedACHTransferList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ScheduledUnverifiedACHTransfer>}
     * @memberof PaginatedScheduledUnverifiedACHTransferList
     */
    results: Array<ScheduledUnverifiedACHTransfer>;
}

/**
 * Check if a given object implements the PaginatedScheduledUnverifiedACHTransferList interface.
 */
export function instanceOfPaginatedScheduledUnverifiedACHTransferList(value: object): value is PaginatedScheduledUnverifiedACHTransferList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedScheduledUnverifiedACHTransferListFromJSON(json: any): PaginatedScheduledUnverifiedACHTransferList {
    return PaginatedScheduledUnverifiedACHTransferListFromJSONTyped(json, false);
}

export function PaginatedScheduledUnverifiedACHTransferListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedScheduledUnverifiedACHTransferList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(ScheduledUnverifiedACHTransferFromJSON)),
    };
}

export function PaginatedScheduledUnverifiedACHTransferListToJSON(value?: PaginatedScheduledUnverifiedACHTransferList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(ScheduledUnverifiedACHTransferToJSON)),
    };
}

