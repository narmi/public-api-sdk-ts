/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.72)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BillDeliveryOptionRequest } from './BillDeliveryOptionRequest';
import {
    BillDeliveryOptionRequestFromJSON,
    BillDeliveryOptionRequestFromJSONTyped,
    BillDeliveryOptionRequestToJSON,
} from './BillDeliveryOptionRequest';
import type { ErrorRequest } from './ErrorRequest';
import {
    ErrorRequestFromJSON,
    ErrorRequestFromJSONTyped,
    ErrorRequestToJSON,
} from './ErrorRequest';
import type { AddressRequest } from './AddressRequest';
import {
    AddressRequestFromJSON,
    AddressRequestFromJSONTyped,
    AddressRequestToJSON,
} from './AddressRequest';
import type { Type5d6Enum } from './Type5d6Enum';
import {
    Type5d6EnumFromJSON,
    Type5d6EnumFromJSONTyped,
    Type5d6EnumToJSON,
} from './Type5d6Enum';

/**
 * 
 * @export
 * @interface PayeeCreateDocRequest
 */
export interface PayeeCreateDocRequest {
    /**
     * Whether the payment recipient is a person or business.
     * @type {Type5d6Enum}
     * @memberof PayeeCreateDocRequest
     */
    type: Type5d6Enum;
    /**
     * Recipient's name.
     * @type {string}
     * @memberof PayeeCreateDocRequest
     */
    name: string;
    /**
     * Free-form text.
     * @type {string}
     * @memberof PayeeCreateDocRequest
     */
    description?: string;
    /**
     * Recipient's phone number.
     * @type {string}
     * @memberof PayeeCreateDocRequest
     */
    phone?: string;
    /**
     * Recipient's email address.
     * @type {string}
     * @memberof PayeeCreateDocRequest
     */
    email?: string | null;
    /**
     * Shared secret phrase between payer and payee.
     * @type {string}
     * @memberof PayeeCreateDocRequest
     */
    passphrase?: string;
    /**
     * Destination account number.
     * @type {string}
     * @memberof PayeeCreateDocRequest
     */
    accountNumber?: string | null;
    /**
     * Recipient's address.
     * @type {AddressRequest}
     * @memberof PayeeCreateDocRequest
     */
    address?: AddressRequest | null;
    /**
     * 
     * @type {Array<BillDeliveryOptionRequest>}
     * @memberof PayeeCreateDocRequest
     */
    deliveryOptions?: Array<BillDeliveryOptionRequest>;
    /**
     * Warning codes to be suppressed during call.
     * @type {Array<ErrorRequest>}
     * @memberof PayeeCreateDocRequest
     */
    ignoreWarnings?: Array<ErrorRequest>;
}

/**
 * Check if a given object implements the PayeeCreateDocRequest interface.
 */
export function instanceOfPayeeCreateDocRequest(value: object): value is PayeeCreateDocRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PayeeCreateDocRequestFromJSON(json: any): PayeeCreateDocRequest {
    return PayeeCreateDocRequestFromJSONTyped(json, false);
}

export function PayeeCreateDocRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeCreateDocRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': Type5d6EnumFromJSON(json['type']),
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'email': json['email'] == null ? undefined : json['email'],
        'passphrase': json['passphrase'] == null ? undefined : json['passphrase'],
        'accountNumber': json['account_number'] == null ? undefined : json['account_number'],
        'address': json['address'] == null ? undefined : AddressRequestFromJSON(json['address']),
        'deliveryOptions': json['delivery_options'] == null ? undefined : ((json['delivery_options'] as Array<any>).map(BillDeliveryOptionRequestFromJSON)),
        'ignoreWarnings': json['ignore_warnings'] == null ? undefined : ((json['ignore_warnings'] as Array<any>).map(ErrorRequestFromJSON)),
    };
}

export function PayeeCreateDocRequestToJSON(value?: PayeeCreateDocRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': Type5d6EnumToJSON(value['type']),
        'name': value['name'],
        'description': value['description'],
        'phone': value['phone'],
        'email': value['email'],
        'passphrase': value['passphrase'],
        'account_number': value['accountNumber'],
        'address': AddressRequestToJSON(value['address']),
        'delivery_options': value['deliveryOptions'] == null ? undefined : ((value['deliveryOptions'] as Array<any>).map(BillDeliveryOptionRequestToJSON)),
        'ignore_warnings': value['ignoreWarnings'] == null ? undefined : ((value['ignoreWarnings'] as Array<any>).map(ErrorRequestToJSON)),
    };
}

