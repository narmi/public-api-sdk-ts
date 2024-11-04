/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.3)
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
 * @interface UploadFileError
 */
export interface UploadFileError {
    /**
     * 
     * @type {string}
     * @memberof UploadFileError
     */
    reason?: string;
}

/**
 * Check if a given object implements the UploadFileError interface.
 */
export function instanceOfUploadFileError(value: object): value is UploadFileError {
    return true;
}

export function UploadFileErrorFromJSON(json: any): UploadFileError {
    return UploadFileErrorFromJSONTyped(json, false);
}

export function UploadFileErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFileError {
    if (json == null) {
        return json;
    }
    return {
        
        'reason': json['reason'] == null ? undefined : json['reason'],
    };
}

export function UploadFileErrorToJSON(value?: UploadFileError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reason': value['reason'],
    };
}

