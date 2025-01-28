/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.175)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FednowPayment
 */
export interface FednowPayment {
    /**
     * 
     * @type {number}
     * @memberof FednowPayment
     */
    amountCents: number;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    sourceFi: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    readonly sourceFiName?: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    destinationFi: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    readonly destinationFiName?: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    sourceAccount?: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    destinationAccount: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    sourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    destinationName?: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    paymentIdentification: string;
    /**
     * 
     * @type {Date}
     * @memberof FednowPayment
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof FednowPayment
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    memo?: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    type: string;
    /**
     * 
     * @type {Date}
     * @memberof FednowPayment
     */
    fedSettlementDate: Date;
    /**
     * 
     * @type {string}
     * @memberof FednowPayment
     */
    coreTransactionId?: string;
}

/**
 * Check if a given object implements the FednowPayment interface.
 */
export function instanceOfFednowPayment(value: object): value is FednowPayment {
    if (!('amountCents' in value) || value['amountCents'] === undefined) return false;
    if (!('sourceFi' in value) || value['sourceFi'] === undefined) return false;
    if (!('destinationFi' in value) || value['destinationFi'] === undefined) return false;
    if (!('destinationAccount' in value) || value['destinationAccount'] === undefined) return false;
    if (!('paymentIdentification' in value) || value['paymentIdentification'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fedSettlementDate' in value) || value['fedSettlementDate'] === undefined) return false;
    return true;
}

export function FednowPaymentFromJSON(json: any): FednowPayment {
    return FednowPaymentFromJSONTyped(json, false);
}

export function FednowPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): FednowPayment {
    if (json == null) {
        return json;
    }
    return {
        
        'amountCents': json['amount_cents'],
        'sourceFi': json['source_fi'],
        'sourceFiName': json['source_fi_name'] == null ? undefined : json['source_fi_name'],
        'destinationFi': json['destination_fi'],
        'destinationFiName': json['destination_fi_name'] == null ? undefined : json['destination_fi_name'],
        'sourceAccount': json['source_account'] == null ? undefined : json['source_account'],
        'destinationAccount': json['destination_account'],
        'sourceName': json['source_name'] == null ? undefined : json['source_name'],
        'destinationName': json['destination_name'] == null ? undefined : json['destination_name'],
        'paymentIdentification': json['payment_identification'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'memo': json['memo'] == null ? undefined : json['memo'],
        'state': json['state'],
        'type': json['type'],
        'fedSettlementDate': (new Date(json['fed_settlement_date'])),
        'coreTransactionId': json['core_transaction_id'] == null ? undefined : json['core_transaction_id'],
    };
}

export function FednowPaymentToJSON(value?: Omit<FednowPayment, 'source_fi_name'|'destination_fi_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount_cents': value['amountCents'],
        'source_fi': value['sourceFi'],
        'destination_fi': value['destinationFi'],
        'source_account': value['sourceAccount'],
        'destination_account': value['destinationAccount'],
        'source_name': value['sourceName'],
        'destination_name': value['destinationName'],
        'payment_identification': value['paymentIdentification'],
        'created_at': ((value['createdAt']).toISOString()),
        'updated_at': ((value['updatedAt']).toISOString()),
        'memo': value['memo'],
        'state': value['state'],
        'type': value['type'],
        'fed_settlement_date': ((value['fedSettlementDate']).toISOString().substring(0,10)),
        'core_transaction_id': value['coreTransactionId'],
    };
}

