/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.98)
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
 * @interface BiometricPublicKey
 */
export interface BiometricPublicKey {
    /**
     * 
     * @type {string}
     * @memberof BiometricPublicKey
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof BiometricPublicKey
     */
    deviceId: string;
    /**
     * 
     * @type {string}
     * @memberof BiometricPublicKey
     */
    publicKey: string;
    /**
     * 
     * @type {Date}
     * @memberof BiometricPublicKey
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BiometricPublicKey
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the BiometricPublicKey interface.
 */
export function instanceOfBiometricPublicKey(value: object): value is BiometricPublicKey {
    if (!('deviceId' in value) || value['deviceId'] === undefined) return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined) return false;
    return true;
}

export function BiometricPublicKeyFromJSON(json: any): BiometricPublicKey {
    return BiometricPublicKeyFromJSONTyped(json, false);
}

export function BiometricPublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BiometricPublicKey {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'deviceId': json['device_id'],
        'publicKey': json['public_key'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function BiometricPublicKeyToJSON(value?: Omit<BiometricPublicKey, 'id'|'created_at'|'updated_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'device_id': value['deviceId'],
        'public_key': value['publicKey'],
    };
}

