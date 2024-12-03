/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.253)
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
 * @interface Hold
 */
export interface Hold {
    /**
     * This id can be disregarded, and is only generated/included to maintain current API contract.
     * @type {string}
     * @memberof Hold
     */
    readonly id?: string;
    /**
     * The amount to hold on the account.
     * @type {number}
     * @memberof Hold
     */
    readonly amount?: number;
    /**
     * A plain text description of the hold.
     * @type {string}
     * @memberof Hold
     */
    description?: string;
    /**
     * The date-time when the hold will be lifted. This will be set to null if the hold does not expire.
     * @type {Date}
     * @memberof Hold
     */
    readonly expiresAt?: Date;
}

/**
 * Check if a given object implements the Hold interface.
 */
export function instanceOfHold(value: object): value is Hold {
    return true;
}

export function HoldFromJSON(json: any): Hold {
    return HoldFromJSONTyped(json, false);
}

export function HoldFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hold {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'description': json['description'] == null ? undefined : json['description'],
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
    };
}

export function HoldToJSON(value?: Omit<Hold, 'id'|'amount'|'expires_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
    };
}

