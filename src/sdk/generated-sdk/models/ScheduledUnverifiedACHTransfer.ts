/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.177)
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
 * @interface ScheduledUnverifiedACHTransfer
 */
export interface ScheduledUnverifiedACHTransfer {
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    memo?: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    recurringRule: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    readonly uuid?: string;
    /**
     * A field that represents the stringified UUID of a related object.
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    institutionAccount: string;
    /**
     * A field that represents the stringified UUID of a related object.
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    recipient: string;
    /**
     * 
     * @type {TransactionTypeEnum}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    transactionType: TransactionTypeEnum;
    /**
     * A field that represents the stringified UUID of a related object.
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    achCompany: string;
    /**
     * 
     * @type {StdEntClsCodeEnum}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    stdEntClsCode: StdEntClsCodeEnum;
    /**
     * 
     * @type {EntryDescEnum}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    entryDesc: EntryDescEnum;
    /**
     * 
     * @type {string}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof ScheduledUnverifiedACHTransfer
     */
    readonly nextTransferAt?: Date;
}

/**
 * Check if a given object implements the ScheduledUnverifiedACHTransfer interface.
 */
export function instanceOfScheduledUnverifiedACHTransfer(value: object): value is ScheduledUnverifiedACHTransfer {
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

export function ScheduledUnverifiedACHTransferFromJSON(json: any): ScheduledUnverifiedACHTransfer {
    return ScheduledUnverifiedACHTransferFromJSONTyped(json, false);
}

export function ScheduledUnverifiedACHTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduledUnverifiedACHTransfer {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'deviceId': json['device_id'] == null ? undefined : json['device_id'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'recurringRule': json['recurring_rule'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'institutionAccount': json['institution_account'],
        'recipient': json['recipient'],
        'transactionType': TransactionTypeEnumFromJSON(json['transaction_type']),
        'achCompany': json['ach_company'],
        'stdEntClsCode': StdEntClsCodeEnumFromJSON(json['std_ent_cls_code']),
        'entryDesc': EntryDescEnumFromJSON(json['entry_desc']),
        'description': json['description'] == null ? undefined : json['description'],
        'nextTransferAt': json['next_transfer_at'] == null ? undefined : (new Date(json['next_transfer_at'])),
    };
}

export function ScheduledUnverifiedACHTransferToJSON(value?: Omit<ScheduledUnverifiedACHTransfer, 'uuid'|'next_transfer_at'> | null): any {
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

