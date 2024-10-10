/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.35)
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
 * @interface MoneyMovementDestinationRequest
 */
export interface MoneyMovementDestinationRequest {
    /**
     * An account number used for domestic (U.S.-based) accounts.
     * @type {string}
     * @memberof MoneyMovementDestinationRequest
     */
    accountNumber: string;
    /**
     * A 9-digit routing number used for domestic (U.S.-based) accounts.
     * @type {string}
     * @memberof MoneyMovementDestinationRequest
     */
    routingNumber: string;
}

/**
 * Check if a given object implements the MoneyMovementDestinationRequest interface.
 */
export function instanceOfMoneyMovementDestinationRequest(value: object): value is MoneyMovementDestinationRequest {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    return true;
}

export function MoneyMovementDestinationRequestFromJSON(json: any): MoneyMovementDestinationRequest {
    return MoneyMovementDestinationRequestFromJSONTyped(json, false);
}

export function MoneyMovementDestinationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyMovementDestinationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'],
        'routingNumber': json['routing_number'],
    };
}

export function MoneyMovementDestinationRequestToJSON(value?: MoneyMovementDestinationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'routing_number': value['routingNumber'],
    };
}

