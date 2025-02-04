/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.20)
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
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface PaginatedSubscriptionList
 */
export interface PaginatedSubscriptionList {
    /**
     * 
     * @type {PaginatedAchTransactionListMeta}
     * @memberof PaginatedSubscriptionList
     */
    meta: PaginatedAchTransactionListMeta;
    /**
     * 
     * @type {PaginatedAchTransactionListLinks}
     * @memberof PaginatedSubscriptionList
     */
    links: PaginatedAchTransactionListLinks;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof PaginatedSubscriptionList
     */
    results?: Array<Subscription>;
}

/**
 * Check if a given object implements the PaginatedSubscriptionList interface.
 */
export function instanceOfPaginatedSubscriptionList(value: object): value is PaginatedSubscriptionList {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function PaginatedSubscriptionListFromJSON(json: any): PaginatedSubscriptionList {
    return PaginatedSubscriptionListFromJSONTyped(json, false);
}

export function PaginatedSubscriptionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSubscriptionList {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': PaginatedAchTransactionListMetaFromJSON(json['meta']),
        'links': PaginatedAchTransactionListLinksFromJSON(json['links']),
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(SubscriptionFromJSON)),
    };
}

export function PaginatedSubscriptionListToJSON(value?: PaginatedSubscriptionList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': PaginatedAchTransactionListMetaToJSON(value['meta']),
        'links': PaginatedAchTransactionListLinksToJSON(value['links']),
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(SubscriptionToJSON)),
    };
}

