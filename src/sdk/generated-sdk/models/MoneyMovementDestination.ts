/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.257)
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
 * @interface MoneyMovementDestination
 */
export interface MoneyMovementDestination {
    /**
     * 
     * @type {string}
     * @memberof MoneyMovementDestination
     */
    readonly id?: string;
    /**
     * An account number used for domestic (U.S.-based) accounts.
     * @type {string}
     * @memberof MoneyMovementDestination
     */
    accountNumber: string;
    /**
     * A 9-digit routing number used for domestic (U.S.-based) accounts.
     * @type {string}
     * @memberof MoneyMovementDestination
     */
    routingNumber: string;
}

/**
 * Check if a given object implements the MoneyMovementDestination interface.
 */
export function instanceOfMoneyMovementDestination(value: object): value is MoneyMovementDestination {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    return true;
}

export function MoneyMovementDestinationFromJSON(json: any): MoneyMovementDestination {
    return MoneyMovementDestinationFromJSONTyped(json, false);
}

export function MoneyMovementDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyMovementDestination {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'accountNumber': json['account_number'],
        'routingNumber': json['routing_number'],
    };
}

export function MoneyMovementDestinationToJSON(value?: Omit<MoneyMovementDestination, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'routing_number': value['routingNumber'],
    };
}

