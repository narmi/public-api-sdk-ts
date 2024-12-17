/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.61)
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
 * @interface DepositResponse
 */
export interface DepositResponse {
    /**
     * 
     * @type {Deposit}
     * @memberof DepositResponse
     */
    deposit: Deposit;
}

/**
 * Check if a given object implements the DepositResponse interface.
 */
export function instanceOfDepositResponse(value: object): value is DepositResponse {
    if (!('deposit' in value) || value['deposit'] === undefined) return false;
    return true;
}

export function DepositResponseFromJSON(json: any): DepositResponse {
    return DepositResponseFromJSONTyped(json, false);
}

export function DepositResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'deposit': DepositFromJSON(json['deposit']),
    };
}

export function DepositResponseToJSON(value?: DepositResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'deposit': DepositToJSON(value['deposit']),
    };
}

