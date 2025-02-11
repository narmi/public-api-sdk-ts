/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.76)
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
import type { EntryDescEnum } from './EntryDescEnum';
import {
    EntryDescEnumFromJSON,
    EntryDescEnumFromJSONTyped,
    EntryDescEnumToJSON,
} from './EntryDescEnum';
import type { StdEntClsCodeEnum } from './StdEntClsCodeEnum';
import {
    StdEntClsCodeEnumFromJSON,
    StdEntClsCodeEnumFromJSONTyped,
    StdEntClsCodeEnumToJSON,
} from './StdEntClsCodeEnum';

/**
 * 
 * @export
 * @interface ScheduledUnverifiedACHTransferRequest
 */
export interface ScheduledUnverifiedACHTransferRequest {
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    memo?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    recurringRule: string;
    /**
     * A field that represents the stringified UUID of a related object.
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    institutionAccount: string;
    /**
     * A field that represents the stringified UUID of a related object.
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    recipient: string;
    /**
     * 
     * @type {TransactionTypeEnum}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    transactionType: TransactionTypeEnum;
    /**
     * A field that represents the stringified UUID of a related object.
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    achCompany: string;
    /**
     * 
     * @type {StdEntClsCodeEnum}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    stdEntClsCode: StdEntClsCodeEnum;
    /**
     * 
     * @type {EntryDescEnum}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    entryDesc: EntryDescEnum;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransferRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the ScheduledUnverifiedACHTransferRequest interface.
 */
export function instanceOfScheduledUnverifiedACHTransferRequest(value: object): value is ScheduledUnverifiedACHTransferRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('recurringRule' in value) || value['recurringRule'] === undefined) return false;
    if (!('institutionAccount' in value) || value['institutionAccount'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    if (!('transactionType' in value) || value['transactionType'] === undefined) return false;
    if (!('achCompany' in value) || value['achCompany'] === undefined) return false;
    if (!('stdEntClsCode' in value) || value['stdEntClsCode'] === undefined) return false;
    if (!('entryDesc' in value) || value['entryDesc'] === undefined) return false;
    return true;
}

export function ScheduledUnverifiedACHTransferRequestFromJSON(json: any): ScheduledUnverifiedACHTransferRequest {
    return ScheduledUnverifiedACHTransferRequestFromJSONTyped(json, false);
}

export function ScheduledUnverifiedACHTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledUnverifiedACHTransferRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'deviceId': json['device_id'] == null ? undefined : json['device_id'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'recurringRule': json['recurring_rule'],
        'institutionAccount': json['institution_account'],
        'recipient': json['recipient'],
        'transactionType': TransactionTypeEnumFromJSON(json['transaction_type']),
        'achCompany': json['ach_company'],
        'stdEntClsCode': StdEntClsCodeEnumFromJSON(json['std_ent_cls_code']),
        'entryDesc': EntryDescEnumFromJSON(json['entry_desc']),
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function ScheduledUnverifiedACHTransferRequestToJSON(value?: ScheduledUnverifiedACHTransferRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'device_id': value['deviceId'],
        'memo': value['memo'],
        'recurring_rule': value['recurringRule'],
        'institution_account': value['institutionAccount'],
        'recipient': value['recipient'],
        'transaction_type': TransactionTypeEnumToJSON(value['transactionType']),
        'ach_company': value['achCompany'],
        'std_ent_cls_code': StdEntClsCodeEnumToJSON(value['stdEntClsCode']),
        'entry_desc': EntryDescEnumToJSON(value['entryDesc']),
        'description': value['description'],
    };
}

