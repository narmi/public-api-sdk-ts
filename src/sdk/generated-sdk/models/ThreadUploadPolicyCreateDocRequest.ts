/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.264)
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
 * @interface ThreadUploadPolicyCreateDocRequest
 */
export interface ThreadUploadPolicyCreateDocRequest {
    /**
     * MIME content type for the target upload.
     * @type {string}
     * @memberof ThreadUploadPolicyCreateDocRequest
     */
    type: string;
    /**
     * Target filename for the uploaded file.
     * @type {string}
     * @memberof ThreadUploadPolicyCreateDocRequest
     */
    name: string;
}

/**
 * Check if a given object implements the ThreadUploadPolicyCreateDocRequest interface.
 */
export function instanceOfThreadUploadPolicyCreateDocRequest(value: object): value is ThreadUploadPolicyCreateDocRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ThreadUploadPolicyCreateDocRequestFromJSON(json: any): ThreadUploadPolicyCreateDocRequest {
    return ThreadUploadPolicyCreateDocRequestFromJSONTyped(json, false);
}

export function ThreadUploadPolicyCreateDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadUploadPolicyCreateDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'name': json['name'],
    };
}

export function ThreadUploadPolicyCreateDocRequestToJSON(value?: ThreadUploadPolicyCreateDocRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'name': value['name'],
    };
}

