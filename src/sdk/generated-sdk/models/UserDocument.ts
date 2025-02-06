/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.47)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { DocumentResponse } from './DocumentResponse';
import {
    instanceOfDocumentResponse,
    DocumentResponseFromJSON,
    DocumentResponseFromJSONTyped,
    DocumentResponseToJSON,
} from './DocumentResponse';
import type { DocumentWithDataResponse } from './DocumentWithDataResponse';
import {
    instanceOfDocumentWithDataResponse,
    DocumentWithDataResponseFromJSON,
    DocumentWithDataResponseFromJSONTyped,
    DocumentWithDataResponseToJSON,
} from './DocumentWithDataResponse';

/**
 * @type UserDocument
 * 
 * @export
 */
export type UserDocument = DocumentResponse | DocumentWithDataResponse;

export function UserDocumentFromJSON(json: any): UserDocument {
    return UserDocumentFromJSONTyped(json, false);
}

export function UserDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDocument {
    if (json == null) {
        return json;
    }
    if (instanceOfDocumentResponse(json)) {
        return DocumentResponseFromJSONTyped(json, true);
    }
    if (instanceOfDocumentWithDataResponse(json)) {
        return DocumentWithDataResponseFromJSONTyped(json, true);
    }
}

export function UserDocumentToJSON(value?: UserDocument | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfDocumentResponse(value)) {
        return DocumentResponseToJSON(value as DocumentResponse);
    }
    if (instanceOfDocumentWithDataResponse(value)) {
        return DocumentWithDataResponseToJSON(value as DocumentWithDataResponse);
    }

    return {};
}

