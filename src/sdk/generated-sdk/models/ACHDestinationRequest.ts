/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.316)
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
 * In addition to the standard ACHDestination fields you'd expect for a create/updated request,
 * this serializer also requires a recipient (passed in as the uuid of the recipient)
 * that will be associated with the created/updated ACHDestination.
 * @export
 * @interface ACHDestinationRequest
 */
export interface ACHDestinationRequest {
    /**
     * Account number for the ACH destination.
     * @type {string}
     * @memberof ACHDestinationRequest
     */
    accountNumber: string;
    /**
     * Routing number for the ACH destination.
     * @type {string}
     * @memberof ACHDestinationRequest
     */
    routingNumber: string;
    /**
     * 
     * @type {AccountTypeEnum}
     * @memberof ACHDestinationRequest
     */
    accountType: AccountTypeEnum;
    /**
     * 
     * @type {AccountPurposeEnum}
     * @memberof ACHDestinationRequest
     */
    accountPurpose: AccountPurposeEnum;
    /**
     * UUID of the recipient associated with this ACH destination.
     * @type {string}
     * @memberof ACHDestinationRequest
     */
    recipient: string;
}

/**
 * Check if a given object implements the ACHDestinationRequest interface.
 */
export function instanceOfACHDestinationRequest(value: object): value is ACHDestinationRequest {
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountType' in value) || value['accountType'] === undefined) return false;
    if (!('accountPurpose' in value) || value['accountPurpose'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    return true;
}

export function ACHDestinationRequestFromJSON(json: any): ACHDestinationRequest {
    return ACHDestinationRequestFromJSONTyped(json, false);
}

export function ACHDestinationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHDestinationRequest {
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

export function ACHDestinationRequestToJSON(value?: ACHDestinationRequest | null): any {
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

