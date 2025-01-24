/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.159)
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
 * @interface FedwireTemplateRequest
 */
export interface FedwireTemplateRequest {
    /**
     * The UUID of the wire recipient for wires sent using this template.
     * @type {string}
     * @memberof FedwireTemplateRequest
     */
    recipient: string;
    /**
     * The UUID of the source account for wires sent using this template.
     * @type {string}
     * @memberof FedwireTemplateRequest
     */
    sourceAccount: string;
    /**
     * Name of the wire template for easy reference in the UI. This name must be unique to all templates owned by an organization.
     * @type {string}
     * @memberof FedwireTemplateRequest
     */
    name: string;
    /**
     * Choices are configurable via Institution Settings. Please refer to Institution Settings for the most current list of wire reason types. If not provided, this value must be included when making a request to send a wire.
     * @type {string}
     * @memberof FedwireTemplateRequest
     */
    wireReason?: string | null;
    /**
     * A field that returns the original value in the currency's smallest unit (e.g. cents). If not provided, this value must be included when making a request to send a wire. 
     * @type {number}
     * @memberof FedwireTemplateRequest
     */
    amount?: number | null;
    /**
     * Memo for wires sent using this template. If not provided, this value must be included when making a request to send a wire.
     * @type {string}
     * @memberof FedwireTemplateRequest
     */
    memo?: string | null;
}

/**
 * Check if a given object implements the FedwireTemplateRequest interface.
 */
export function instanceOfFedwireTemplateRequest(value: object): value is FedwireTemplateRequest {
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    if (!('sourceAccount' in value) || value['sourceAccount'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function FedwireTemplateRequestFromJSON(json: any): FedwireTemplateRequest {
    return FedwireTemplateRequestFromJSONTyped(json, false);
}

export function FedwireTemplateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FedwireTemplateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'recipient': json['recipient'],
        'sourceAccount': json['source_account'],
        'name': json['name'],
        'wireReason': json['wire_reason'] == null ? undefined : json['wire_reason'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'memo': json['memo'] == null ? undefined : json['memo'],
    };
}

export function FedwireTemplateRequestToJSON(value?: FedwireTemplateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recipient': value['recipient'],
        'source_account': value['sourceAccount'],
        'name': value['name'],
        'wire_reason': value['wireReason'],
        'amount': value['amount'],
        'memo': value['memo'],
    };
}

