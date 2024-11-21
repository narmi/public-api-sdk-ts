/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.173)
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
 * @interface DocumentResponse
 */
export interface DocumentResponse {
    /**
     * 
     * @type {Document}
     * @memberof DocumentResponse
     */
    document: Document;
}

/**
 * Check if a given object implements the DocumentResponse interface.
 */
export function instanceOfDocumentResponse(value: object): value is DocumentResponse {
    if (!('document' in value) || value['document'] === undefined) return false;
    return true;
}

export function DocumentResponseFromJSON(json: any): DocumentResponse {
    return DocumentResponseFromJSONTyped(json, false);
}

export function DocumentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'document': DocumentFromJSON(json['document']),
    };
}

export function DocumentResponseToJSON(value?: DocumentResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'document': DocumentToJSON(value['document']),
    };
}

