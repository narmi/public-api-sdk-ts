/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.155)
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
import type { PaginatedAchTransactionListLinks } from './PaginatedAchTransactionListLinks';
import {
    PaginatedAchTransactionListLinksFromJSON,
    PaginatedAchTransactionListLinksFromJSONTyped,
    PaginatedAchTransactionListLinksToJSON,
} from './PaginatedAchTransactionListLinks';
import type { ScheduledTransfer } from './ScheduledTransfer';
import {
    ScheduledTransferFromJSON,
    ScheduledTransferFromJSONTyped,
    ScheduledTransferToJSON,
} from './ScheduledTransfer';

/**
 * 
 * @export
 * @interface PaginatedScheduledTransferList
 */
export interface PaginatedScheduledTransferList {
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedScheduledTransferList
     */
    meta: PaginatedAchTransactionListMeta;
    /**
     * 
     * @type {PaginatedAchTransactionListLinks}
     * @memberof PaginatedScheduledTransferList
     */
    links: PaginatedAchTransactionListLinks;
    /**
     * 
     * @type {Array<ScheduledTransfer>}
     * @memberof PaginatedScheduledTransferList
     */
    scheduledTransfers?: Array<ScheduledTransfer>;
}

/**
 * Check if a given object implements the PaginatedScheduledTransferList interface.
 */
export function instanceOfPaginatedScheduledTransferList(value: object): value is PaginatedScheduledTransferList {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function PaginatedScheduledTransferListFromJSON(json: any): PaginatedScheduledTransferList {
    return PaginatedScheduledTransferListFromJSONTyped(json, false);
}

export function PaginatedScheduledTransferListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedScheduledTransferList {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
        'links': PaginatedAchTransactionListLinksFromJSON(json['links']),
        'scheduledTransfers': json['scheduled_transfers'] == null ? undefined : ((json['scheduled_transfers'] as Array<any>).map(ScheduledTransferFromJSON)),
    };
}

export function PaginatedScheduledTransferListToJSON(value?: PaginatedScheduledTransferList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
        'links': PaginatedAchTransactionListLinksToJSON(value['links']),
        'scheduled_transfers': value['scheduledTransfers'] == null ? undefined : ((value['scheduledTransfers'] as Array<any>).map(ScheduledTransferToJSON)),
    };
}

