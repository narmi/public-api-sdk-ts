/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.84)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DocumentWithData } from './DocumentWithData';
import {
    DocumentWithDataFromJSON,
    DocumentWithDataFromJSONTyped,
    DocumentWithDataToJSON,
} from './DocumentWithData';

/**
 * 
 * @export
 * @interface DocumentWithDataResponse
 */
export interface DocumentWithDataResponse {
    /**
     * 
     * @type {DocumentWithData}
     * @memberof DocumentWithDataResponse
     */
    document: DocumentWithData;
}

/**
 * Check if a given object implements the DocumentWithDataResponse interface.
 */
export function instanceOfDocumentWithDataResponse(value: object): value is DocumentWithDataResponse {
    if (!('document' in value) || value['document'] === undefined) return false;
    return true;
}

export function DocumentWithDataResponseFromJSON(json: any): DocumentWithDataResponse {
    return DocumentWithDataResponseFromJSONTyped(json, false);
}

export function DocumentWithDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentWithDataResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'document': DocumentWithDataFromJSON(json['document']),
    };
}

export function DocumentWithDataResponseToJSON(value?: DocumentWithDataResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'document': DocumentWithDataToJSON(value['document']),
    };
}

