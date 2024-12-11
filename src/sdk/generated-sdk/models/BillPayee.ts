/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.282)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { BillDeliveryOption } from './BillDeliveryOption';
import {
    BillDeliveryOptionFromJSON,
    BillDeliveryOptionFromJSONTyped,
    BillDeliveryOptionToJSON,
} from './BillDeliveryOption';
import type { Type5d6Enum } from './Type5d6Enum';
import {
    Type5d6EnumFromJSON,
    Type5d6EnumFromJSONTyped,
    Type5d6EnumToJSON,
} from './Type5d6Enum';

/**
 * 
 * @export
 * @interface BillPayee
 */
export interface BillPayee {
    /**
     * Identifies payment recipient to the payment processor. Can be fetched via the payees endpoints.
     * @type {string}
     * @memberof BillPayee
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof BillPayee
     */
    readonly maskedAccountNumber?: string;
    /**
     * Whether the payment recipient is a person or business.
     * @type {Type5d6Enum}
     * @memberof BillPayee
     */
    type: Type5d6Enum;
    /**
     * Recipient's name.
     * @type {string}
     * @memberof BillPayee
     */
    name: string;
    /**
     * Free-form text.
     * @type {string}
     * @memberof BillPayee
     */
    description?: string;
    /**
     * Recipient's phone number.
     * @type {string}
     * @memberof BillPayee
     */
    phone?: string;
    /**
     * Recipient's email address.
     * @type {string}
     * @memberof BillPayee
     */
    email?: string | null;
    /**
     * Shared secret phrase between payer and payee.
     * @type {string}
     * @memberof BillPayee
     */
    passphrase?: string;
    /**
     * Destination account number.
     * @type {string}
     * @memberof BillPayee
     */
    accountNumber?: string | null;
    /**
     * Recipient's address.
     * @type {Address}
     * @memberof BillPayee
     */
    address?: Address | null;
    /**
     * 
     * @type {Array<BillDeliveryOption>}
     * @memberof BillPayee
     */
    deliveryOptions?: Array<BillDeliveryOption>;
}

/**
 * Check if a given object implements the BillPayee interface.
 */
export function instanceOfBillPayee(value: object): value is BillPayee {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function BillPayeeFromJSON(json: any): BillPayee {
    return BillPayeeFromJSONTyped(json, false);
}

export function BillPayeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillPayee {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'maskedAccountNumber': json['masked_account_number'] == null ? undefined : json['masked_account_number'],
        'type': Type5d6EnumFromJSON(json['type']),
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'email': json['email'] == null ? undefined : json['email'],
        'passphrase': json['passphrase'] == null ? undefined : json['passphrase'],
        'accountNumber': json['account_number'] == null ? undefined : json['account_number'],
        'address': json['address'] == null ? undefined : AddressFromJSON(json['address']),
        'deliveryOptions': json['delivery_options'] == null ? undefined : ((json['delivery_options'] as Array<any>).map(BillDeliveryOptionFromJSON)),
    };
}

export function BillPayeeToJSON(value?: Omit<BillPayee, 'id'|'masked_account_number'> | null): any {
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
        'address': AddressToJSON(value['address']),
        'delivery_options': value['deliveryOptions'] == null ? undefined : ((value['deliveryOptions'] as Array<any>).map(BillDeliveryOptionToJSON)),
    };
}

