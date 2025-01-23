/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.150)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { WireTransactionStateEnum } from './WireTransactionStateEnum';
import {
    WireTransactionStateEnumFromJSON,
    WireTransactionStateEnumFromJSONTyped,
    WireTransactionStateEnumToJSON,
} from './WireTransactionStateEnum';

/**
 * Currently, this serializer creates a WireTransaction based on an existing wire template, where the template
 * prescribes every field (except a few optional fields that, if not provided, must be filled out by the wire sender).
 * 
 * Most of the logic in this serializer is also relevant to the non-template wire sending flow, so in the near future, we should refactor
 * the non-template wire sending flow to use this serializer, and handle the template-specific validation separately.
 * @export
 * @interface WireTransaction
 */
export interface WireTransaction {
    /**
     * 
     * @type {string}
     * @memberof WireTransaction
     */
    readonly id?: string;
    /**
     * 
     * @type {Date}
     * @memberof WireTransaction
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WireTransaction
     */
    readonly processedAt?: Date | null;
    /**
     * The account name and masked account number.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly fromAccountDisplay?: string;
    /**
     * The current human-readable state of the wire transaction.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly displayState?: string;
    /**
     * The abbreviated, capitalized name of the destination financial institution.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly toAccountInstitutionName?: string;
    /**
     * The account from which the wire transaction was sent.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly fromAccount?: string;
    /**
     * The account number of the recipient.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly toAccountNumber?: string;
    /**
     * The routing number of the recipient.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly toAccountRoutingNumber?: string;
    /**
     * The name of the recipient.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly beneficiaryName?: string;
    /**
     * The first line of the recipient's address.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly beneficiaryAddress1?: string;
    /**
     * The second line of the recipient's address. Usually, this is the apartment, floor, or suite.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly beneficiaryAddress2?: string;
    /**
     * The third line of the recipient's address. Usually, this is the city, state, postal code and country code.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly beneficiaryAddress3?: string;
    /**
     * The first 35 characters of the memo used to create the wire transaction. If the memo is longer than 35 characters, the memo will be split into additional memo lines.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly memo1?: string;
    /**
     * Characters 36-70 of the memo used to create the wire transaction.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly memo2?: string;
    /**
     * Characters 71-105 of the memo used to create the wire transaction.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly memo3?: string;
    /**
     * Characters 106-140 of the memo used to create the wire transaction.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly memo4?: string;
    /**
     * The name of the template used to create the wire transaction.
     * @type {string}
     * @memberof WireTransaction
     */
    readonly templateName?: string | null;
    /**
     * Choices are configurable via Institution Settings. Please refer to Institution Settings for the most current list of wire reason types. 
     * @type {string}
     * @memberof WireTransaction
     */
    wireReason?: string | null;
    /**
     * 
     * @type {WireTransactionStateEnum}
     * @memberof WireTransaction
     */
    readonly state?: WireTransactionStateEnum;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof WireTransaction
     */
    amount?: number;
}

/**
 * Check if a given object implements the WireTransaction interface.
 */
export function instanceOfWireTransaction(value: object): value is WireTransaction {
    return true;
}

export function WireTransactionFromJSON(json: any): WireTransaction {
    return WireTransactionFromJSONTyped(json, false);
}

export function WireTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'processedAt': json['processed_at'] == null ? undefined : (new Date(json['processed_at'])),
        'fromAccountDisplay': json['from_account_display'] == null ? undefined : json['from_account_display'],
        'displayState': json['display_state'] == null ? undefined : json['display_state'],
        'toAccountInstitutionName': json['to_account_institution_name'] == null ? undefined : json['to_account_institution_name'],
        'fromAccount': json['from_account'] == null ? undefined : json['from_account'],
        'toAccountNumber': json['to_account_number'] == null ? undefined : json['to_account_number'],
        'toAccountRoutingNumber': json['to_account_routing_number'] == null ? undefined : json['to_account_routing_number'],
        'beneficiaryName': json['beneficiary_name'] == null ? undefined : json['beneficiary_name'],
        'beneficiaryAddress1': json['beneficiary_address_1'] == null ? undefined : json['beneficiary_address_1'],
        'beneficiaryAddress2': json['beneficiary_address_2'] == null ? undefined : json['beneficiary_address_2'],
        'beneficiaryAddress3': json['beneficiary_address_3'] == null ? undefined : json['beneficiary_address_3'],
        'memo1': json['memo_1'] == null ? undefined : json['memo_1'],
        'memo2': json['memo_2'] == null ? undefined : json['memo_2'],
        'memo3': json['memo_3'] == null ? undefined : json['memo_3'],
        'memo4': json['memo_4'] == null ? undefined : json['memo_4'],
        'templateName': json['template_name'] == null ? undefined : json['template_name'],
        'wireReason': json['wire_reason'] == null ? undefined : json['wire_reason'],
        'state': json['state'] == null ? undefined : WireTransactionStateEnumFromJSON(json['state']),
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function WireTransactionToJSON(value?: Omit<WireTransaction, 'id'|'created_at'|'processed_at'|'from_account_display'|'display_state'|'to_account_institution_name'|'from_account'|'to_account_number'|'to_account_routing_number'|'beneficiary_name'|'beneficiary_address_1'|'beneficiary_address_2'|'beneficiary_address_3'|'memo_1'|'memo_2'|'memo_3'|'memo_4'|'template_name'|'state'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'wire_reason': value['wireReason'],
        'amount': value['amount'],
    };
}

