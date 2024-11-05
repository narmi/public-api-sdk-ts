/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.201)
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
import type { Deposit } from './Deposit';
import {
    DepositFromJSON,
    DepositFromJSONTyped,
    DepositToJSON,
} from './Deposit';

/**
 * 
 * @export
 * @interface DepositsResponse
 */
export interface DepositsResponse {
    /**
     * 
     * @type {Array<Deposit>}
     * @memberof DepositsResponse
     */
    deposits: Array<Deposit>;
    /**
     * 
     * @type {PageNumberPagination}
     * @memberof DepositsResponse
     */
    links: PageNumberPagination;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof DepositsResponse
     */
    meta: { [key: string]: any; };
}

/**
 * Check if a given object implements the DepositsResponse interface.
 */
export function instanceOfDepositsResponse(value: object): value is DepositsResponse {
    if (!('deposits' in value) || value['deposits'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function DepositsResponseFromJSON(json: any): DepositsResponse {
    return DepositsResponseFromJSONTyped(json, false);
}

export function DepositsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'deposits': ((json['deposits'] as Array<any>).map(DepositFromJSON)),
        'links': PageNumberPaginationFromJSON(json['links']),
        'meta': json['meta'],
    };
}

export function DepositsResponseToJSON(value?: DepositsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'deposits': ((value['deposits'] as Array<any>).map(DepositToJSON)),
        'links': PageNumberPaginationToJSON(value['links']),
        'meta': value['meta'],
    };
}

