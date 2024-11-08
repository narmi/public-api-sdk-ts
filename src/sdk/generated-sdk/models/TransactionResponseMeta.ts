/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.233)
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
 * @interface TransactionResponseMeta
 */
export interface TransactionResponseMeta {
    /**
     * Total number of results.
     * @type {number}
     * @memberof TransactionResponseMeta
     */
    total: number;
    /**
     * Unique string indicating the warning raised during the request.
     * @type {string}
     * @memberof TransactionResponseMeta
     */
    warningId?: string;
    /**
     * Human-readable description of the warning raised.
     * @type {string}
     * @memberof TransactionResponseMeta
     */
    warningMessage?: string;
}

/**
 * Check if a given object implements the TransactionResponseMeta interface.
 */
export function instanceOfTransactionResponseMeta(value: object): value is TransactionResponseMeta {
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function TransactionResponseMetaFromJSON(json: any): TransactionResponseMeta {
    return TransactionResponseMetaFromJSONTyped(json, false);
}

export function TransactionResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResponseMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'warningId': json['warning_id'] == null ? undefined : json['warning_id'],
        'warningMessage': json['warning_message'] == null ? undefined : json['warning_message'],
    };
}

export function TransactionResponseMetaToJSON(value?: TransactionResponseMeta | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'total': value['total'],
        'warning_id': value['warningId'],
        'warning_message': value['warningMessage'],
    };
}

