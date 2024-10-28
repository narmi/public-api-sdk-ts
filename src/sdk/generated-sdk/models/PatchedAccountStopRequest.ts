/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.149)
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
 * @interface PatchedAccountStopRequest
 */
export interface PatchedAccountStopRequest {
    /**
     * The lower bound check number which the stop applies to or the check number when targeting a single check with a specified amount.
     * @type {string}
     * @memberof PatchedAccountStopRequest
     */
    minCheckNumber?: string;
    /**
     * The upper bound check number which the stop applies to.
     * @type {string}
     * @memberof PatchedAccountStopRequest
     */
    maxCheckNumber?: string;
    /**
     * The amount of the original payment that should be targeted for the stop.
     * @type {number}
     * @memberof PatchedAccountStopRequest
     */
    amount?: number;
}

/**
 * Check if a given object implements the PatchedAccountStopRequest interface.
 */
export function instanceOfPatchedAccountStopRequest(value: object): value is PatchedAccountStopRequest {
    return true;
}

export function PatchedAccountStopRequestFromJSON(json: any): PatchedAccountStopRequest {
    return PatchedAccountStopRequestFromJSONTyped(json, false);
}

export function PatchedAccountStopRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAccountStopRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'minCheckNumber': json['min_check_number'] == null ? undefined : json['min_check_number'],
        'maxCheckNumber': json['max_check_number'] == null ? undefined : json['max_check_number'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function PatchedAccountStopRequestToJSON(value?: PatchedAccountStopRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'min_check_number': value['minCheckNumber'],
        'max_check_number': value['maxCheckNumber'],
        'amount': value['amount'],
    };
}

