/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.33)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Deposit } from './Deposit';
import {
    DepositFromJSON,
    DepositFromJSONTyped,
    DepositToJSON,
} from './Deposit';

/**
 * 
 * @export
 * @interface CreateDepositResponse
 */
export interface CreateDepositResponse {
    /**
     * 
     * @type {Deposit}
     * @memberof CreateDepositResponse
     */
    deposit: Deposit;
}

/**
 * Check if a given object implements the CreateDepositResponse interface.
 */
export function instanceOfCreateDepositResponse(value: object): value is CreateDepositResponse {
    if (!('deposit' in value) || value['deposit'] === undefined) return false;
    return true;
}

export function CreateDepositResponseFromJSON(json: any): CreateDepositResponse {
    return CreateDepositResponseFromJSONTyped(json, false);
}

export function CreateDepositResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDepositResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'deposit': DepositFromJSON(json['deposit']),
    };
}

export function CreateDepositResponseToJSON(value?: CreateDepositResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'deposit': DepositToJSON(value['deposit']),
    };
}

