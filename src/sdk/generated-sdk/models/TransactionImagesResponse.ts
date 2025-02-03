/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.421)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CheckImage } from './CheckImage';
import {
    CheckImageFromJSON,
    CheckImageFromJSONTyped,
    CheckImageToJSON,
} from './CheckImage';

/**
 * 
 * @export
 * @interface TransactionImagesResponse
 */
export interface TransactionImagesResponse {
    /**
     * 
     * @type {CheckImage}
     * @memberof TransactionImagesResponse
     */
    checkImages: CheckImage;
}

/**
 * Check if a given object implements the TransactionImagesResponse interface.
 */
export function instanceOfTransactionImagesResponse(value: object): value is TransactionImagesResponse {
    if (!('checkImages' in value) || value['checkImages'] === undefined) return false;
    return true;
}

export function TransactionImagesResponseFromJSON(json: any): TransactionImagesResponse {
    return TransactionImagesResponseFromJSONTyped(json, false);
}

export function TransactionImagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionImagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'checkImages': CheckImageFromJSON(json['check_images']),
    };
}

export function TransactionImagesResponseToJSON(value?: TransactionImagesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'check_images': CheckImageToJSON(value['checkImages']),
    };
}

