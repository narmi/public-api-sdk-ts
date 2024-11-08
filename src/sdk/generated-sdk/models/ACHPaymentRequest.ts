/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.80)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
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
 * @interface ACHPaymentRequest
 */
export interface ACHPaymentRequest {
    /**
     * The amount of the ACH payment in cents.
     * @type {number}
     * @memberof ACHPaymentRequest
     */
    amount: number;
    /**
     * The UUID of the originating account for the transaction.
     * @type {string}
     * @memberof ACHPaymentRequest
     */
    institutionAccount: string;
    /**
     * Memo for the transaction. This is currently only used for internal record-keeping, and will not be not included in the resulting NACHA file entry.
     * @type {string}
     * @memberof ACHPaymentRequest
     */
    description?: string | null;
    /**
     * The client submits the UUID of the ACHCompany to use for the transaction, and we map this instances fields into the company_id and company_name fields below. These values could presumably change, and we want to maintain a record of these values at the time the transaction is submitted.
     * @type {string}
     * @memberof ACHPaymentRequest
     */
    achCompany: string;
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
     * @memberof ACHPaymentRequest
     */
    stdEntClsCode: StdEntClsCodeEnum;
    /**
     * A field that describes the purpose of the transaction to the receiver. It's used to help identify, monitor, and count payments for specific purposes.
     * 
     * * `EXT-TRAN` - External Transfer
     * @type {EntryDescEnum}
     * @memberof ACHPaymentRequest
     */
    entryDesc: EntryDescEnum;
    /**
     * The UUID of the recipient associated with the transaction.
     * @type {string}
     * @memberof ACHPaymentRequest
     */
    recipient: string;
}

/**
 * Check if a given object implements the ACHPaymentRequest interface.
 */
export function instanceOfACHPaymentRequest(value: object): value is ACHPaymentRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('institutionAccount' in value) || value['institutionAccount'] === undefined) return false;
    if (!('achCompany' in value) || value['achCompany'] === undefined) return false;
    if (!('stdEntClsCode' in value) || value['stdEntClsCode'] === undefined) return false;
    if (!('entryDesc' in value) || value['entryDesc'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    return true;
}

export function ACHPaymentRequestFromJSON(json: any): ACHPaymentRequest {
    return ACHPaymentRequestFromJSONTyped(json, false);
}

export function ACHPaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHPaymentRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'institutionAccount': json['institution_account'],
        'description': json['description'] == null ? undefined : json['description'],
        'achCompany': json['ach_company'],
        'stdEntClsCode': StdEntClsCodeEnumFromJSON(json['std_ent_cls_code']),
        'entryDesc': EntryDescEnumFromJSON(json['entry_desc']),
        'recipient': json['recipient'],
    };
}

export function ACHPaymentRequestToJSON(value?: ACHPaymentRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'institution_account': value['institutionAccount'],
        'description': value['description'],
        'ach_company': value['achCompany'],
        'std_ent_cls_code': StdEntClsCodeEnumToJSON(value['stdEntClsCode']),
        'entry_desc': EntryDescEnumToJSON(value['entryDesc']),
        'recipient': value['recipient'],
    };
}

