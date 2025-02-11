/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.86)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PageNumberPagination } from './PageNumberPagination';
import {
    PageNumberPaginationFromJSON,
    PageNumberPaginationFromJSONTyped,
    PageNumberPaginationToJSON,
} from './PageNumberPagination';
import type { AccountMeta } from './AccountMeta';
import {
    AccountMetaFromJSON,
    AccountMetaFromJSONTyped,
    AccountMetaToJSON,
} from './AccountMeta';
import type { MobileAccount } from './MobileAccount';
import {
    MobileAccountFromJSON,
    MobileAccountFromJSONTyped,
    MobileAccountToJSON,
} from './MobileAccount';

/**
 * 
 * @export
 * @interface PaginatedAccounts
 */
export interface PaginatedAccounts {
    /**
     * 
     * @type {Array<MobileAccount>}
     * @memberof PaginatedAccounts
     */
    accounts: Array<MobileAccount>;
    /**
     * 
     * @type {PageNumberPagination}
     * @memberof PaginatedAccounts
     */
    links: PageNumberPagination;
    /**
     * 
     * @type {AccountMeta}
     * @memberof PaginatedAccounts
     */
    meta: AccountMeta;
}

/**
 * Check if a given object implements the PaginatedAccounts interface.
 */
export function instanceOfPaginatedAccounts(value: object): value is PaginatedAccounts {
    if (!('accounts' in value) || value['accounts'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function PaginatedAccountsFromJSON(json: any): PaginatedAccounts {
    return PaginatedAccountsFromJSONTyped(json, false);
}

export function PaginatedAccountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAccounts {
    if (json == null) {
        return json;
    }
    return {
        
        'accounts': ((json['accounts'] as Array<any>).map(MobileAccountFromJSON)),
        'links': PageNumberPaginationFromJSON(json['links']),
        'meta': AccountMetaFromJSON(json['meta']),
    };
}

export function PaginatedAccountsToJSON(value?: PaginatedAccounts | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accounts': ((value['accounts'] as Array<any>).map(MobileAccountToJSON)),
        'links': PageNumberPaginationToJSON(value['links']),
        'meta': AccountMetaToJSON(value['meta']),
    };
}

