/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.137)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ErrorRequest } from './ErrorRequest';
import {
    ErrorRequestFromJSON,
    ErrorRequestFromJSONTyped,
    ErrorRequestToJSON,
} from './ErrorRequest';

/**
 * 
 * @export
 * @interface CreateDepositRequestRequest
 */
export interface CreateDepositRequestRequest {
    /**
     * Warning codes to be suppressed during call.
     * @type {Array<ErrorRequest>}
     * @memberof CreateDepositRequestRequest
     */
    ignoreWarnings?: Array<ErrorRequest>;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof CreateDepositRequestRequest
     */
    amount: number;
    /**
     * Base64 encoded image of the front of the check.
     * @type {Blob}
     * @memberof CreateDepositRequestRequest
     */
    front: Blob;
    /**
     * Base64 encoded image of the back of the check.
     * @type {Blob}
     * @memberof CreateDepositRequestRequest
     */
    back: Blob;
}

/**
 * Check if a given object implements the CreateDepositRequestRequest interface.
 */
export function instanceOfCreateDepositRequestRequest(value: object): value is CreateDepositRequestRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('front' in value) || value['front'] === undefined) return false;
    if (!('back' in value) || value['back'] === undefined) return false;
    return true;
}

export function CreateDepositRequestRequestFromJSON(json: any): CreateDepositRequestRequest {
    return CreateDepositRequestRequestFromJSONTyped(json, false);
}

export function CreateDepositRequestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDepositRequestRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'ignoreWarnings': json['ignore_warnings'] == null ? undefined : ((json['ignore_warnings'] as Array<any>).map(ErrorRequestFromJSON)),
        'amount': json['amount'],
        'front': json['front'],
        'back': json['back'],
    };
}

export function CreateDepositRequestRequestToJSON(value?: CreateDepositRequestRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ignore_warnings': value['ignoreWarnings'] == null ? undefined : ((value['ignoreWarnings'] as Array<any>).map(ErrorRequestToJSON)),
        'amount': value['amount'],
        'front': value['front'],
        'back': value['back'],
    };
}

