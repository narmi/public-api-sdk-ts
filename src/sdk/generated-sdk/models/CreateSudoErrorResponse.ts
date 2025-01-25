/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.160)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Device } from './Device';
import {
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
} from './Device';

/**
 * 
 * @export
 * @interface CreateSudoErrorResponse
 */
export interface CreateSudoErrorResponse {
    /**
     * Unique code describing the error
     * @type {string}
     * @memberof CreateSudoErrorResponse
     */
    id: string;
    /**
     * Error message detailing what went wrong
     * @type {string}
     * @memberof CreateSudoErrorResponse
     */
    message: string;
    /**
     * A list of devices that can be used to send an OTP to.
     * @type {Array<Device>}
     * @memberof CreateSudoErrorResponse
     */
    devices: Array<Device>;
    /**
     * Device which was targetted for the request by the client.
     * @type {Device}
     * @memberof CreateSudoErrorResponse
     */
    device: Device;
}

/**
 * Check if a given object implements the CreateSudoErrorResponse interface.
 */
export function instanceOfCreateSudoErrorResponse(value: object): value is CreateSudoErrorResponse {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('devices' in value) || value['devices'] === undefined) return false;
    if (!('device' in value) || value['device'] === undefined) return false;
    return true;
}

export function CreateSudoErrorResponseFromJSON(json: any): CreateSudoErrorResponse {
    return CreateSudoErrorResponseFromJSONTyped(json, false);
}

export function CreateSudoErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSudoErrorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'message': json['message'],
        'devices': ((json['devices'] as Array<any>).map(DeviceFromJSON)),
        'device': DeviceFromJSON(json['device']),
    };
}

export function CreateSudoErrorResponseToJSON(value?: CreateSudoErrorResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
        'devices': ((value['devices'] as Array<any>).map(DeviceToJSON)),
        'device': DeviceToJSON(value['device']),
    };
}

