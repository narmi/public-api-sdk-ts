/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.149)
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
 * @interface BiometricPublicKeyRequest
 */
export interface BiometricPublicKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof BiometricPublicKeyRequest
     */
    deviceId: string;
    /**
     * 
     * @type {string}
     * @memberof BiometricPublicKeyRequest
     */
    publicKey: string;
}

/**
 * Check if a given object implements the BiometricPublicKeyRequest interface.
 */
export function instanceOfBiometricPublicKeyRequest(value: object): value is BiometricPublicKeyRequest {
    if (!('deviceId' in value) || value['deviceId'] === undefined) return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined) return false;
    return true;
}

export function BiometricPublicKeyRequestFromJSON(json: any): BiometricPublicKeyRequest {
    return BiometricPublicKeyRequestFromJSONTyped(json, false);
}

export function BiometricPublicKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BiometricPublicKeyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'deviceId': json['device_id'],
        'publicKey': json['public_key'],
    };
}

export function BiometricPublicKeyRequestToJSON(value?: BiometricPublicKeyRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'device_id': value['deviceId'],
        'public_key': value['publicKey'],
    };
}

