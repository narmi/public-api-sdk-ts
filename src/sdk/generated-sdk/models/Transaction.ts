/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.132)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
import {
    TransactionTypeEnumFromJSON,
    TransactionTypeEnumFromJSONTyped,
    TransactionTypeEnumToJSON,
} from './TransactionTypeEnum';
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
 * Representation of a non-pending monetary transaction.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * Customer-facing description of the transaction. Typically an abridged version of the full description.
     * @type {string}
     * @memberof Transaction
     */
    readonly description?: string;
    /**
     * Full description of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    readonly rawDescription?: string;
    /**
     * UUID of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    readonly id?: string;
    /**
     * Type of transaction typically starts with a value such as "withdrawal", "transfer", "deposit", "dividend", "fee", "loan_distribution", "loan_payment", and concatenated with a detail such as "ACH", "ATM", "Bill Payment", "Card", "Cash", "Check", "Draft", "Fee", "Home Banking", "Point of Sale".
     * @type {string}
     * @memberof Transaction
     */
    readonly source?: string;
    /**
     * Date-time the transaction was settled. Null for non-final transactions.
     * @type {Date}
     * @memberof Transaction
     */
    readonly settledAt?: Date | null;
    /**
     * Date-time when the transaction was created in the database.
     * @type {Date}
     * @memberof Transaction
     */
    readonly createdAt?: Date;
    /**
     * UUID of the account.
     * @type {string}
     * @memberof Transaction
     */
    readonly accountId?: string;
    /**
     * Category of the transaction. Defaults to `"Unknown"`.
     * @type {string}
     * @memberof Transaction
     */
    readonly category?: string;
    /**
     * Sub-category of the transaction. Defaults to empty string `""`.
     * @type {string}
     * @memberof Transaction
     */
    readonly subCategory?: string | null;
    /**
     * Total amount of the transaction.
     * @type {number}
     * @memberof Transaction
     */
    readonly amount?: number;
    /**
     * New balance as of this transaction.
     * @type {number}
     * @memberof Transaction
     */
    readonly ledgerBalance?: number | null;
    /**
     * Geographic location where the transaction was executed.
     * @type {Location}
     * @memberof Transaction
     */
    readonly location?: Location;
    /**
     * Details for the check related to a transaction.
     * @type {Check}
     * @memberof Transaction
     */
    readonly check?: Check;
    /**
     * A list of user-defined tags associated with the transaction.
     * @type {Array<string>}
     * @memberof Transaction
     */
    tags?: Array<string>;
    /**
     * Merchant associated with the transaction. This is often set to empty string `""`.
     * @type {string}
     * @memberof Transaction
     */
    readonly merchant?: string;
    /**
     * Supplemental information associated with the account. This is often set to an empty object `{}`.
     * @type {{ [key: string]: any; }}
     * @memberof Transaction
     */
    readonly metadata?: { [key: string]: any; };
    /**
     * Notes about the transaction set by the user.
     * @type {string}
     * @memberof Transaction
     */
    note?: string;
    /**
     * 
     * @type {TransactionTypeEnum}
     * @memberof Transaction
     */
    type?: TransactionTypeEnum | null;
    /**
     * Whether this is a recurring transaction.
     * @type {boolean}
     * @memberof Transaction
     */
    recurring?: boolean;
}

/**
 * Check if a given object implements the Transaction interface.
 */
export function instanceOfTransaction(value: object): value is Transaction {
    return true;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
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
        'type': json['type'] == null ? undefined : TransactionTypeEnumFromJSON(json['type']),
        'recurring': json['recurring'] == null ? undefined : json['recurring'],
    };
}

export function TransactionToJSON(value?: Omit<Transaction, 'description'|'raw_description'|'id'|'source'|'settled_at'|'created_at'|'account_id'|'category'|'sub_category'|'amount'|'ledger_balance'|'location'|'check'|'merchant'|'metadata'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tags': value['tags'],
        'note': value['note'],
        'type': TransactionTypeEnumToJSON(value['type']),
        'recurring': value['recurring'],
    };
}

