/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Returns data on a successful deposit.
 * @export
 * @interface Deposit
 */
export interface Deposit {
    /**
     * Identifier for the deposit, can be used via the retrieve endpoint. This value may differ between integrations.
     * @type {string}
     * @memberof Deposit
     */
    readonly id: string;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof Deposit
     */
    readonly amount: number;
    /**
     * 
     * @type {Date}
     * @memberof Deposit
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Deposit
     */
    readonly updatedAt: Date;
    /**
     * State of the deposit. Can be one of `Submitted`, `Cancelled`, `Approved`, or `Rejected` for Ensenta, but may differ between integrations.
     * @type {string}
     * @memberof Deposit
     */
    readonly state: string;
    /**
     * Front of the check. Typically in base64 image format, e.g. `data:image/jpeg;base64`.
     * @type {string}
     * @memberof Deposit
     */
    readonly front: string;
    /**
     * Back of the check. Typically in base64 image format, e.g. `data:image/jpeg;base64`.
     * @type {string}
     * @memberof Deposit
     */
    readonly back: string;
}

/**
 * Check if a given object implements the Deposit interface.
 */
export function instanceOfDeposit(value: object): value is Deposit {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('front' in value) || value['front'] === undefined) return false;
    if (!('back' in value) || value['back'] === undefined) return false;
    return true;
}

export function DepositFromJSON(json: any): Deposit {
    return DepositFromJSONTyped(json, false);
}

export function DepositFromJSONTyped(json: any, ignoreDiscriminator: boolean): Deposit {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'amount': json['amount'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'state': json['state'],
        'front': json['front'],
        'back': json['back'],
    };
}

export function DepositToJSON(value?: Omit<Deposit, 'id'|'amount'|'created_at'|'updated_at'|'state'|'front'|'back'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

