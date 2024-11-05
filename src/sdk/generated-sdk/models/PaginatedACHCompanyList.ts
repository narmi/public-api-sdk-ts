/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.206)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ACHCompany } from './ACHCompany';
import {
    ACHCompanyFromJSON,
    ACHCompanyFromJSONTyped,
    ACHCompanyToJSON,
} from './ACHCompany';

/**
 * 
 * @export
 * @interface PaginatedACHCompanyList
 */
export interface PaginatedACHCompanyList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedACHCompanyList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedACHCompanyList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedACHCompanyList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<ACHCompany>}
     * @memberof PaginatedACHCompanyList
     */
    results: Array<ACHCompany>;
}

/**
 * Check if a given object implements the PaginatedACHCompanyList interface.
 */
export function instanceOfPaginatedACHCompanyList(value: object): value is PaginatedACHCompanyList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedACHCompanyListFromJSON(json: any): PaginatedACHCompanyList {
    return PaginatedACHCompanyListFromJSONTyped(json, false);
}

export function PaginatedACHCompanyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedACHCompanyList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(ACHCompanyFromJSON)),
    };
}

export function PaginatedACHCompanyListToJSON(value?: PaginatedACHCompanyList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(ACHCompanyToJSON)),
    };
}

