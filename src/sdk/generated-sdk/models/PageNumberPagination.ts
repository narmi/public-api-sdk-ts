/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.170)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PageNumberPagination
 */
export interface PageNumberPagination {
    /**
     * Link to the next results page.
     * @type {string}
     * @memberof PageNumberPagination
     */
    next: string | null;
    /**
     * Link to the previous results page.
     * @type {string}
     * @memberof PageNumberPagination
     */
    previous: string | null;
}

/**
 * Check if a given object implements the PageNumberPagination interface.
 */
export function instanceOfPageNumberPagination(value: object): value is PageNumberPagination {
    if (!('next' in value) || value['next'] === undefined) return false;
    if (!('previous' in value) || value['previous'] === undefined) return false;
    return true;
}

export function PageNumberPaginationFromJSON(json: any): PageNumberPagination {
    return PageNumberPaginationFromJSONTyped(json, false);
}

export function PageNumberPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageNumberPagination {
    if (json == null) {
        return json;
    }
    return {
        
        'next': json['next'],
        'previous': json['previous'],
    };
}

export function PageNumberPaginationToJSON(value?: PageNumberPagination | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'next': value['next'],
        'previous': value['previous'],
    };
}

