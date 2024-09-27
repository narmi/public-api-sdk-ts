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
import type { Check } from './Check';
import {
    CheckFromJSON,
    CheckFromJSONTyped,
    CheckToJSON,
} from './Check';
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';

/**
 * A base class for serializers that automatically demote resource
 * representations according to provided transform classes for the resource.
 * Note that the one provided by rest_framework_transforms is locked to ModelSerializer.
 * @export
 * @interface PatchedTransaction
 */
export interface PatchedTransaction {
    /**
     * Customer-facing description of the transaction. Typically an abridged version of the full description.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly description?: string;
    /**
     * Full description of the transaction.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly rawDescription?: string;
    /**
     * UUID of the transaction.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly id?: string;
    /**
     * Type of transaction typically starts with a value such as "withdrawal", "transfer", "deposit", "dividend", "fee", "loan_distribution", "loan_payment", and concatenated with a detail such as "ACH", "ATM", "Bill Payment", "Card", "Cash", "Check", "Draft", "Fee", "Home Banking", "Point of Sale".
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly source?: string;
    /**
     * Date-time the transaction was settled. Null for non-final transactions.
     * @type {Date}
     * @memberof PatchedTransaction
     */
    readonly settledAt?: Date;
    /**
     * Date-time when the transaction was created in the database.
     * @type {Date}
     * @memberof PatchedTransaction
     */
    readonly createdAt?: Date;
    /**
     * UUID of the account.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly accountId?: string;
    /**
     * Category of the transaction. Defaults to `"Unknown"`.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly category?: string;
    /**
     * Sub-category of the transaction. Defaults to empty string `""`.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly subCategory?: string;
    /**
     * Total amount of the transaction.
     * @type {number}
     * @memberof PatchedTransaction
     */
    readonly amount?: number;
    /**
     * New balance as of this transaction.
     * @type {number}
     * @memberof PatchedTransaction
     */
    readonly ledgerBalance?: number;
    /**
     * Geographic location where the transaction was executed.
     * @type {Location}
     * @memberof PatchedTransaction
     */
    readonly location?: Location;
    /**
     * Details for the check related to a transaction.
     * @type {Check}
     * @memberof PatchedTransaction
     */
    readonly check?: Check;
    /**
     * A list of user-defined tags associated with the transaction.
     * @type {Array<string>}
     * @memberof PatchedTransaction
     */
    tags?: Array<string>;
    /**
     * Merchant associated with the transaction. This is often set to empty string `""`.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly merchant?: string;
    /**
     * Supplemental information associated with the account. This is often set to an empty object `{}`.
     * @type {{ [key: string]: any; }}
     * @memberof PatchedTransaction
     */
    readonly metadata?: { [key: string]: any; };
    /**
     * Notes about the transaction set by the user.
     * @type {string}
     * @memberof PatchedTransaction
     */
    note?: string;
    /**
     * Type of transaction (e.g. loan, withdrawal). Can contain additional details about the transaction type.
     * @type {string}
     * @memberof PatchedTransaction
     */
    readonly type?: string | null;
    /**
     * Whether this is a recurring transaction.
     * @type {boolean}
     * @memberof PatchedTransaction
     */
    recurring?: boolean;
}

/**
 * Check if a given object implements the PatchedTransaction interface.
 */
export function instanceOfPatchedTransaction(value: object): value is PatchedTransaction {
    return true;
}

export function PatchedTransactionFromJSON(json: any): PatchedTransaction {
    return PatchedTransactionFromJSONTyped(json, false);
}

export function PatchedTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'rawDescription': json['raw_description'] == null ? undefined : json['raw_description'],
        'id': json['id'] == null ? undefined : json['id'],
        'source': json['source'] == null ? undefined : json['source'],
        'settledAt': json['settled_at'] == null ? undefined : (new Date(json['settled_at'])),
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'accountId': json['account_id'] == null ? undefined : json['account_id'],
        'category': json['category'] == null ? undefined : json['category'],
        'subCategory': json['sub_category'] == null ? undefined : json['sub_category'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'ledgerBalance': json['ledger_balance'] == null ? undefined : json['ledger_balance'],
        'location': json['location'] == null ? undefined : LocationFromJSON(json['location']),
        'check': json['check'] == null ? undefined : CheckFromJSON(json['check']),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'merchant': json['merchant'] == null ? undefined : json['merchant'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'note': json['note'] == null ? undefined : json['note'],
        'type': json['type'] == null ? undefined : json['type'],
        'recurring': json['recurring'] == null ? undefined : json['recurring'],
    };
}

export function PatchedTransactionToJSON(value?: Omit<PatchedTransaction, 'description'|'raw_description'|'id'|'source'|'settled_at'|'created_at'|'account_id'|'category'|'sub_category'|'amount'|'ledger_balance'|'location'|'check'|'merchant'|'metadata'|'type'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tags': value['tags'],
        'note': value['note'],
        'recurring': value['recurring'],
    };
}
