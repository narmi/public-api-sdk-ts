/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.218)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Currently, this serializer creates a WireTransaction based on an existing wire template, where the template
 * prescribes every field (except a few optional fields that, if not provided, must be filled out by the wire sender).
 * 
 * Most of the logic in this serializer is also relevant to the non-template wire sending flow, so in the near future, we should refactor
 * the non-template wire sending flow to use this serializer, and handle the template-specific validation separately.
 * @export
 * @interface WireTransactionRequest
 */
export interface WireTransactionRequest {
    /**
     * Choices are configurable via Institution Settings. Please refer to Institution Settings for the most current list of wire reason types. 
     * @type {string}
     * @memberof WireTransactionRequest
     */
    wireReason?: string | null;
    /**
     * The UUID of the fedwire template to use for the wire transaction.
     * @type {string}
     * @memberof WireTransactionRequest
     */
    fedwireTemplate: string;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents).
     * @type {number}
     * @memberof WireTransactionRequest
     */
    amount?: number;
    /**
     * Memo for the wire transaction. If not provided, the memo will be generated from the template's memo field.
     * @type {string}
     * @memberof WireTransactionRequest
     */
    memo?: string | null;
    /**
     * The version ID of the template, based on when template or recipient details were last updated. This value is used to ensure that the template hasn't been updated since the user began drafting a wire using this template.
     * @type {string}
     * @memberof WireTransactionRequest
     */
    versionId: string;
}

/**
 * Check if a given object implements the WireTransactionRequest interface.
 */
export function instanceOfWireTransactionRequest(value: object): value is WireTransactionRequest {
    if (!('fedwireTemplate' in value) || value['fedwireTemplate'] === undefined) return false;
    if (!('versionId' in value) || value['versionId'] === undefined) return false;
    return true;
}

export function WireTransactionRequestFromJSON(json: any): WireTransactionRequest {
    return WireTransactionRequestFromJSONTyped(json, false);
}

export function WireTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireTransactionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'wireReason': json['wire_reason'] == null ? undefined : json['wire_reason'],
        'fedwireTemplate': json['fedwire_template'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'memo': json['memo'] == null ? undefined : json['memo'],
        'versionId': json['version_id'],
    };
}

export function WireTransactionRequestToJSON(value?: WireTransactionRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'wire_reason': value['wireReason'],
        'fedwire_template': value['fedwireTemplate'],
        'amount': value['amount'],
        'memo': value['memo'],
        'version_id': value['versionId'],
    };
}

