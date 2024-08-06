/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MFATypeEnum } from './MFATypeEnum';
import {
    MFATypeEnumFromJSON,
    MFATypeEnumFromJSONTyped,
    MFATypeEnumToJSON,
} from './MFATypeEnum';

/**
 * Serializer for two-factor authorization devices.
 * @export
 * @interface MFA
 */
export interface MFA {
    /**
     * 
     * @type {string}
     * @memberof MFA
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof MFA
     */
    readonly name: string;
    /**
     * 
     * @type {MFATypeEnum}
     * @memberof MFA
     */
    readonly type: MFATypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MFA
     */
    readonly value: string;
}

/**
 * Check if a given object implements the MFA interface.
 */
export function instanceOfMFA(value: object): value is MFA {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function MFAFromJSON(json: any): MFA {
    return MFAFromJSONTyped(json, false);
}

export function MFAFromJSONTyped(json: any, ignoreDiscriminator: boolean): MFA {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': MFATypeEnumFromJSON(json['type']),
        'value': json['value'],
    };
}

export function MFAToJSON(value?: Omit<MFA, 'id'|'name'|'type'|'value'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

