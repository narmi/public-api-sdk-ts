/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.142)
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
 * @interface Document
 */
export interface Document {
    /**
     * Document ID. The format of the ID can vary between document stores.
     * @type {string}
     * @memberof Document
     */
    readonly id?: string;
    /**
     * Document type, this value can vary between document stores.
     * @type {string}
     * @memberof Document
     */
    readonly type?: string | null;
    /**
     * Human readable type, defaults to value of `type` field when missing.
     * @type {string}
     * @memberof Document
     */
    readonly typeLabel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    readonly description?: string | null;
    /**
     * The date-time the document was posted.
     * @type {string}
     * @memberof Document
     */
    readonly createdAt?: string;
    /**
     * The URL of the retrieve API call.
     * @type {string}
     * @memberof Document
     */
    readonly url?: string | null;
}

/**
 * Check if a given object implements the Document interface.
 */
export function instanceOfDocument(value: object): value is Document {
    return true;
}

export function DocumentFromJSON(json: any): Document {
    return DocumentFromJSONTyped(json, false);
}

export function DocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Document {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'typeLabel': json['type_label'] == null ? undefined : json['type_label'],
        'description': json['description'] == null ? undefined : json['description'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function DocumentToJSON(value?: Omit<Document, 'id'|'type'|'type_label'|'description'|'created_at'|'url'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

