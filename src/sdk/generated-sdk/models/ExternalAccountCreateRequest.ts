/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.290)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ProductTypeEnum } from './ProductTypeEnum';
import {
    ProductTypeEnumFromJSON,
    ProductTypeEnumFromJSONTyped,
    ProductTypeEnumToJSON,
} from './ProductTypeEnum';
import type { AccountPurposeEnum } from './AccountPurposeEnum';
import {
    AccountPurposeEnumFromJSON,
    AccountPurposeEnumFromJSONTyped,
    AccountPurposeEnumToJSON,
} from './AccountPurposeEnum';

/**
 * Shared fields and validation for all ExternalAccount serializers.
 * @export
 * @interface ExternalAccountCreateRequest
 */
export interface ExternalAccountCreateRequest {
    /**
     * Routing number for the external account.
     * @type {string}
     * @memberof ExternalAccountCreateRequest
     */
    routingNumber: string;
    /**
     * Account number for the external account.
     * @type {string}
     * @memberof ExternalAccountCreateRequest
     */
    accountNumber: string;
    /**
     * Account type, can be one of `checking`, `savings`, or `loan`.
     * 
     * * `checking` - Checking
     * * `savings` - Savings
     * * `loan` - Loan
     * @type {ProductTypeEnum}
     * @memberof ExternalAccountCreateRequest
     */
    productType: ProductTypeEnum;
    /**
     * Specifies whether an external account is `personal` or `business`.
     * 
     * * `personal` - Personal
     * * `business` - Business
     * @type {AccountPurposeEnum}
     * @memberof ExternalAccountCreateRequest
     */
    accountPurpose: AccountPurposeEnum;
    /**
     * Whether the user has accepted the terms for account creation. This must be set to true for the account to be created successfully.
     * @type {boolean}
     * @memberof ExternalAccountCreateRequest
     */
    agreement: boolean;
    /**
     * User-specific nickname for the account. This will be used as the display name of the account.
     * @type {string}
     * @memberof ExternalAccountCreateRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the ExternalAccountCreateRequest interface.
 */
export function instanceOfExternalAccountCreateRequest(value: object): value is ExternalAccountCreateRequest {
    if (!('routingNumber' in value) || value['routingNumber'] === undefined) return false;
    if (!('accountNumber' in value) || value['accountNumber'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('accountPurpose' in value) || value['accountPurpose'] === undefined) return false;
    if (!('agreement' in value) || value['agreement'] === undefined) return false;
    return true;
}

export function ExternalAccountCreateRequestFromJSON(json: any): ExternalAccountCreateRequest {
    return ExternalAccountCreateRequestFromJSONTyped(json, false);
}

export function ExternalAccountCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalAccountCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'routingNumber': json['routing_number'],
        'accountNumber': json['account_number'],
        'productType': ProductTypeEnumFromJSON(json['product_type']),
        'accountPurpose': AccountPurposeEnumFromJSON(json['account_purpose']),
        'agreement': json['agreement'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function ExternalAccountCreateRequestToJSON(value?: ExternalAccountCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'routing_number': value['routingNumber'],
        'account_number': value['accountNumber'],
        'product_type': ProductTypeEnumToJSON(value['productType']),
        'account_purpose': AccountPurposeEnumToJSON(value['accountPurpose']),
        'agreement': value['agreement'],
        'description': value['description'],
    };
}

