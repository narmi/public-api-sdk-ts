/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.424)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ACHPaymentStateEnum } from './ACHPaymentStateEnum';
import {
    ACHPaymentStateEnumFromJSON,
    ACHPaymentStateEnumFromJSONTyped,
    ACHPaymentStateEnumToJSON,
} from './ACHPaymentStateEnum';
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
 * @interface ACHPayment
 */
export interface ACHPayment {
    /**
     * 
     * @type {string}
     * @memberof ACHPayment
     */
    readonly id?: string;
    /**
     * 
     * @type {Date}
     * @memberof ACHPayment
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ACHPayment
     */
    readonly updatedAt?: Date;
    /**
     * timestamp to avoid reprocessing this request
     * @type {Date}
     * @memberof ACHPayment
     */
    readonly processedAt?: Date | null;
    /**
     * 
     * @type {ACHPaymentStateEnum}
     * @memberof ACHPayment
     */
    readonly state?: ACHPaymentStateEnum;
    /**
     * The amount of the ACH payment in cents.
     * @type {number}
     * @memberof ACHPayment
     */
    amount: number;
    /**
     * The UUID of the originating account for the transaction.
     * @type {string}
     * @memberof ACHPayment
     */
    institutionAccount: string;
    /**
     * Memo for the transaction. This is currently only used for internal record-keeping, and will not be not included in the resulting NACHA file entry.
     * @type {string}
     * @memberof ACHPayment
     */
    description?: string | null;
    /**
     * The UUID of the external account details associated with the recipient. 
     * @type {string}
     * @memberof ACHPayment
     */
    readonly externalAccountDetails?: string;
    /**
     * A snapshot of the company_id sourced from the ACHCompany at the time the transaction is submitted. This field is persisted to the resulting ACH transaction instance.
     * @type {string}
     * @memberof ACHPayment
     */
    readonly companyId?: string;
    /**
     * A snapshot of the company_name sourced from the ACHCompany at the time the transaction is submitted. This field is persisted to the resulting ACH transaction instance.
     * @type {string}
     * @memberof ACHPayment
     */
    readonly companyName?: string;
    /**
     * A three letter code that describes how a payment was authorized by the consumer or business receiving an ACH transaction. SEC stands for 'Standard Entry Class'. SEC codes are defined and maintained by NACHA, the governing body for the ACH network.
     * 
     * * `PPD` - Batch Personal
     * * `CCD` - Batch Corporate
     * * `ARC` - Batch Accounts Receivable
     * * `CTX` - Batch Corporate Exchange
     * * `POS` - Batch Point Of Sale
     * * `WEB` - Batch Internet Initiated
     * * `BOC` - Batch Backoffice Conversion
     * * `TEL` - Batch Telephone Initiated
     * * `MTE` - Batch Machine Transfer
     * * `SHR` - Batch Shared Network
     * * `CIE` - Batch Customer Initiated
     * * `POP` - Batch Point Of Purchase
     * * `RCK` - Batch Represented Check
     * @type {StdEntClsCodeEnum}
     * @memberof ACHPayment
     */
    stdEntClsCode: StdEntClsCodeEnum;
    /**
     * A field that describes the purpose of the transaction to the receiver. It's used to help identify, monitor, and count payments for specific purposes.
     * 
     * * `EXT-TRAN` - External Transfer
     * @type {EntryDescEnum}
     * @memberof ACHPayment
     */
    entryDesc: EntryDescEnum;
}

/**
 * Check if a given object implements the ACHPayment interface.
 */
export function instanceOfACHPayment(value: object): value is ACHPayment {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('institutionAccount' in value) || value['institutionAccount'] === undefined) return false;
    if (!('stdEntClsCode' in value) || value['stdEntClsCode'] === undefined) return false;
    if (!('entryDesc' in value) || value['entryDesc'] === undefined) return false;
    return true;
}

export function ACHPaymentFromJSON(json: any): ACHPayment {
    return ACHPaymentFromJSONTyped(json, false);
}

export function ACHPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHPayment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'processedAt': json['processed_at'] == null ? undefined : (new Date(json['processed_at'])),
        'state': json['state'] == null ? undefined : ACHPaymentStateEnumFromJSON(json['state']),
        'amount': json['amount'],
        'institutionAccount': json['institution_account'],
        'description': json['description'] == null ? undefined : json['description'],
        'externalAccountDetails': json['external_account_details'] == null ? undefined : json['external_account_details'],
        'companyId': json['company_id'] == null ? undefined : json['company_id'],
        'companyName': json['company_name'] == null ? undefined : json['company_name'],
        'stdEntClsCode': StdEntClsCodeEnumFromJSON(json['std_ent_cls_code']),
        'entryDesc': EntryDescEnumFromJSON(json['entry_desc']),
    };
}

export function ACHPaymentToJSON(value?: Omit<ACHPayment, 'id'|'created_at'|'updated_at'|'processed_at'|'state'|'external_account_details'|'company_id'|'company_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'institution_account': value['institutionAccount'],
        'description': value['description'],
        'std_ent_cls_code': StdEntClsCodeEnumToJSON(value['stdEntClsCode']),
        'entry_desc': EntryDescEnumToJSON(value['entryDesc']),
    };
}

