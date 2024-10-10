/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.228)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountStop } from './AccountStop';
import {
    AccountStopFromJSON,
    AccountStopFromJSONTyped,
    AccountStopToJSON,
} from './AccountStop';

/**
 * 
 * @export
 * @interface PaginatedAccountStopsResponse
 */
export interface PaginatedAccountStopsResponse {
    /**
     * 
     * @type {Array<AccountStop>}
     * @memberof PaginatedAccountStopsResponse
     */
    stops: Array<AccountStop>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PaginatedAccountStopsResponse
     */
    meta?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PaginatedAccountStopsResponse
     */
    links?: { [key: string]: any; };
}

/**
 * Check if a given object implements the PaginatedAccountStopsResponse interface.
 */
export function instanceOfPaginatedAccountStopsResponse(value: object): value is PaginatedAccountStopsResponse {
    if (!('stops' in value) || value['stops'] === undefined) return false;
    return true;
}

export function PaginatedAccountStopsResponseFromJSON(json: any): PaginatedAccountStopsResponse {
    return PaginatedAccountStopsResponseFromJSONTyped(json, false);
}

export function PaginatedAccountStopsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAccountStopsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'stops': ((json['stops'] as Array<any>).map(AccountStopFromJSON)),
        'meta': json['meta'] == null ? undefined : json['meta'],
        'links': json['links'] == null ? undefined : json['links'],
    };
}

export function PaginatedAccountStopsResponseToJSON(value?: PaginatedAccountStopsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stops': ((value['stops'] as Array<any>).map(AccountStopToJSON)),
        'meta': value['meta'],
        'links': value['links'],
    };
}

