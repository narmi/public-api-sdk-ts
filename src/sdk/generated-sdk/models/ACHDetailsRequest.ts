/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.91)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountPurposeEnum } from './AccountPurposeEnum';
import {
    AccountPurposeEnumFromJSON,
    AccountPurposeEnumFromJSONTyped,
    AccountPurposeEnumToJSON,
} from './AccountPurposeEnum';
import type { AccountTypeEnum } from './AccountTypeEnum';
import {
    AccountTypeEnumFromJSON,
    AccountTypeEnumFromJSONTyped,
    AccountTypeEnumToJSON,
} from './AccountTypeEnum';

/**
 * In addition to the standard ACHDetails fields you'd expect for a create/updated request,
 * this serializer also requires a recipient (passed in as the uuid of the recipient)
 * that will be associated with the created/updated ACHDetails.
 * @export
 * @interface ACHDetailsRequest
 */
export interface ACHDetailsRequest {
    /**
     * Account number for the ACH destination.
     * @type {string}
     * @memberof ACHDetailsRequest
     */
    accountNumber: string;
    /**
     * Routing number for the ACH destination.
     * @type {string}
     * @memberof ACHDetailsRequest
     */
    routingNumber: string;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof ACHDetailsRequest
     */
    accountType: AccountTypeEnum;
    /**
     * 
     * @type {AccountPurposeEnum}
     * @memberof ACHDetailsRequest
     */
    accountPurpose: AccountPurposeEnum;
    /**
     * UUID of the recipient associated with this ACH destination.
     * @type {string}
     * @memberof ACHDetailsRequest
     */
    recipient: string;
}

/**
 * Check if a given object implements the ACHDetailsRequest interface.
 */
export function instanceOfACHDetailsRequest(value: object): value is ACHDetailsRequest {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountType' in value) || value['accountType'] === undefined) return false;
    if (!('accountPurpose' in value) || value['accountPurpose'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    return true;
}

export function ACHDetailsRequestFromJSON(json: any): ACHDetailsRequest {
    return ACHDetailsRequestFromJSONTyped(json, false);
}

export function ACHDetailsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHDetailsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'],
        'routingNumber': json['routing_number'],
        'accountType': AccountTypeEnumFromJSON(json['account_type']),
        'accountPurpose': AccountPurposeEnumFromJSON(json['account_purpose']),
        'recipient': json['recipient'],
    };
}

export function ACHDetailsRequestToJSON(value?: ACHDetailsRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'routing_number': value['routingNumber'],
        'account_type': AccountTypeEnumToJSON(value['accountType']),
        'account_purpose': AccountPurposeEnumToJSON(value['accountPurpose']),
        'recipient': value['recipient'],
    };
}

