/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.317)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Representation of a non-pending monetary transaction.
 * @export
 * @interface PatchedTransactionRequest
 */
export interface PatchedTransactionRequest {
    /**
     * A list of user-defined tags associated with the transaction.
     * @type {Array<string>}
     * @memberof PatchedTransactionRequest
     */
    tags?: Array<string>;
    /**
     * Notes about the transaction set by the user.
     * @type {string}
     * @memberof PatchedTransactionRequest
     */
    note?: string;
    /**
     * Whether this is a recurring transaction.
     * @type {boolean}
     * @memberof PatchedTransactionRequest
     */
    recurring?: boolean;
}

/**
 * Check if a given object implements the PatchedTransactionRequest interface.
 */
export function instanceOfPatchedTransactionRequest(value: object): value is PatchedTransactionRequest {
    return true;
}

export function PatchedTransactionRequestFromJSON(json: any): PatchedTransactionRequest {
    return PatchedTransactionRequestFromJSONTyped(json, false);
}

export function PatchedTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTransactionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'tags': json['tags'] == null ? undefined : json['tags'],
        'note': json['note'] == null ? undefined : json['note'],
        'recurring': json['recurring'] == null ? undefined : json['recurring'],
    };
}

export function PatchedTransactionRequestToJSON(value?: PatchedTransactionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tags': value['tags'],
        'note': value['note'],
        'recurring': value['recurring'],
    };
}

