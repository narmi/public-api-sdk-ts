/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1
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
import type { Document } from './Document';
import {
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';

/**
 * 
 * @export
 * @interface DocumentsList
 */
export interface DocumentsList {
    /**
     * 
     * @type {Array<Document>}
     * @memberof DocumentsList
     */
    documents: Array<Document>;
    /**
     * 
     * @type {PageNumberPagination}
     * @memberof DocumentsList
     */
    links: PageNumberPagination;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof DocumentsList
     */
    meta: { [key: string]: any; };
}

/**
 * Check if a given object implements the DocumentsList interface.
 */
export function instanceOfDocumentsList(value: object): value is DocumentsList {
    if (!('documents' in value) || value['documents'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function DocumentsListFromJSON(json: any): DocumentsList {
    return DocumentsListFromJSONTyped(json, false);
}

export function DocumentsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentsList {
    if (json == null) {
        return json;
    }
    return {
        
        'documents': ((json['documents'] as Array<any>).map(DocumentFromJSON)),
        'links': PageNumberPaginationFromJSON(json['links']),
        'meta': json['meta'],
    };
}

export function DocumentsListToJSON(value?: DocumentsList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'documents': ((value['documents'] as Array<any>).map(DocumentToJSON)),
        'links': PageNumberPaginationToJSON(value['links']),
        'meta': value['meta'],
    };
}
