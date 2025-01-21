/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.121)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Document } from './Document';
import {
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';

/**
 * 
 * @export
 * @interface PaginatedDocumentList
 */
export interface PaginatedDocumentList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedDocumentList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedDocumentList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedDocumentList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Document>}
     * @memberof PaginatedDocumentList
     */
    results?: Array<Document>;
}

/**
 * Check if a given object implements the PaginatedDocumentList interface.
 */
export function instanceOfPaginatedDocumentList(value: object): value is PaginatedDocumentList {
    return true;
}

export function PaginatedDocumentListFromJSON(json: any): PaginatedDocumentList {
    return PaginatedDocumentListFromJSONTyped(json, false);
}

export function PaginatedDocumentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedDocumentList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(DocumentFromJSON)),
    };
}

export function PaginatedDocumentListToJSON(value?: PaginatedDocumentList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(DocumentToJSON)),
    };
}

