/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.135)
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
 * @interface ACHDetails
 */
export interface ACHDetails {
    /**
     * 
     * @type {string}
     * @memberof ACHDetails
     */
    readonly id?: string;
    /**
     * Account number for the ACH destination.
     * @type {string}
     * @memberof ACHDetails
     */
    accountNumber: string;
    /**
     * Routing number for the ACH destination.
     * @type {string}
     * @memberof ACHDetails
     */
    routingNumber: string;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof ACHDetails
     */
    accountType: AccountTypeEnum;
    /**
     * 
     * @type {AccountPurposeEnum}
     * @memberof ACHDetails
     */
    accountPurpose: AccountPurposeEnum;
    /**
     * 
     * @type {string}
     * @memberof ACHDetails
     */
    readonly institutionName?: string;
}

/**
 * Check if a given object implements the ACHDetails interface.
 */
export function instanceOfACHDetails(value: object): value is ACHDetails {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountType' in value) || value['accountType'] === undefined) return false;
    if (!('accountPurpose' in value) || value['accountPurpose'] === undefined) return false;
    return true;
}

export function ACHDetailsFromJSON(json: any): ACHDetails {
    return ACHDetailsFromJSONTyped(json, false);
}

export function ACHDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'accountNumber': json['account_number'],
        'routingNumber': json['routing_number'],
        'accountType': AccountTypeEnumFromJSON(json['account_type']),
        'accountPurpose': AccountPurposeEnumFromJSON(json['account_purpose']),
        'institutionName': json['institution_name'] == null ? undefined : json['institution_name'],
    };
}

export function ACHDetailsToJSON(value?: Omit<ACHDetails, 'id'|'institution_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_number': value['accountNumber'],
        'routing_number': value['routingNumber'],
        'account_type': AccountTypeEnumToJSON(value['accountType']),
        'account_purpose': AccountPurposeEnumToJSON(value['accountPurpose']),
    };
}

