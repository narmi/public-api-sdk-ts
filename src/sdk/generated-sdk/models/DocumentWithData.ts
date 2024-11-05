/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.21)
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
 * @interface DocumentWithData
 */
export interface DocumentWithData {
    /**
     * Document ID. The format of the ID can vary between document stores.
     * @type {string}
     * @memberof DocumentWithData
     */
    readonly id?: string;
    /**
     * Document type, this value can vary between document stores.
     * @type {string}
     * @memberof DocumentWithData
     */
    readonly type?: string | null;
    /**
     * Human readable type, defaults to value of `type` field when missing.
     * @type {string}
     * @memberof DocumentWithData
     */
    readonly typeLabel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentWithData
     */
    readonly description?: string | null;
    /**
     * The date-time the document was posted.
     * @type {string}
     * @memberof DocumentWithData
     */
    readonly createdAt?: string;
    /**
     * Binary PDF file data, base64 encoded. This is included when `data` parameter is specified.
     * @type {string}
     * @memberof DocumentWithData
     */
    data?: string;
    /**
     * The URL of the retrieve API call.
     * @type {string}
     * @memberof DocumentWithData
     */
    readonly url?: string | null;
}

/**
 * Check if a given object implements the DocumentWithData interface.
 */
export function instanceOfDocumentWithData(value: object): value is DocumentWithData {
    return true;
}

export function DocumentWithDataFromJSON(json: any): DocumentWithData {
    return DocumentWithDataFromJSONTyped(json, false);
}

export function DocumentWithDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentWithData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'typeLabel': json['type_label'] == null ? undefined : json['type_label'],
        'description': json['description'] == null ? undefined : json['description'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'data': json['data'] == null ? undefined : json['data'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function DocumentWithDataToJSON(value?: Omit<DocumentWithData, 'id'|'type'|'type_label'|'description'|'created_at'|'url'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'],
    };
}

