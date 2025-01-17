/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.111)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PaginatedAchTransactionListMeta } from './PaginatedAchTransactionListMeta';
import {
    PaginatedAchTransactionListMetaFromJSON,
    PaginatedAchTransactionListMetaFromJSONTyped,
    PaginatedAchTransactionListMetaToJSON,
} from './PaginatedAchTransactionListMeta';
import type { PaginatedBillPayeeListLinks } from './PaginatedBillPayeeListLinks';
import {
    PaginatedBillPayeeListLinksFromJSON,
    PaginatedBillPayeeListLinksFromJSONTyped,
    PaginatedBillPayeeListLinksToJSON,
} from './PaginatedBillPayeeListLinks';
import type { Team } from './Team';
import {
    TeamFromJSON,
    TeamFromJSONTyped,
    TeamToJSON,
} from './Team';

/**
 * 
 * @export
 * @interface PaginatedTeamList
 */
export interface PaginatedTeamList {
    /**
     * 
     * @type {Array<Team>}
     * @memberof PaginatedTeamList
     */
    results: Array<Team>;
    /**
     * 
     * @type {PaginatedBillPayeeListLinks}
     * @memberof PaginatedTeamList
     */
    links: PaginatedBillPayeeListLinks;
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedTeamList
     */
    meta: PaginatedAchTransactionListMeta;
}

/**
 * Check if a given object implements the PaginatedTeamList interface.
 */
export function instanceOfPaginatedTeamList(value: object): value is PaginatedTeamList {
    if (!('results' in value) || value['results'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function PaginatedTeamListFromJSON(json: any): PaginatedTeamList {
    return PaginatedTeamListFromJSONTyped(json, false);
}

export function PaginatedTeamListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedTeamList {
    if (json == null) {
        return json;
    }
    return {
        
        'results': ((json['results'] as Array<any>).map(TeamFromJSON)),
        'links': PaginatedBillPayeeListLinksFromJSON(json['links']),
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
    };
}

export function PaginatedTeamListToJSON(value?: PaginatedTeamList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'results': ((value['results'] as Array<any>).map(TeamToJSON)),
        'links': PaginatedBillPayeeListLinksToJSON(value['links']),
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
    };
}

