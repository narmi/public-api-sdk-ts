/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.10.40)
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
 * @interface WiresFedwireTemplatesCreate409Response
 */
export interface WiresFedwireTemplatesCreate409Response {
    /**
     * 
     * @type {string}
     * @memberof WiresFedwireTemplatesCreate409Response
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WiresFedwireTemplatesCreate409Response
     */
    message?: string;
}

/**
 * Check if a given object implements the WiresFedwireTemplatesCreate409Response interface.
 */
export function instanceOfWiresFedwireTemplatesCreate409Response(value: object): value is WiresFedwireTemplatesCreate409Response {
    return true;
}

export function WiresFedwireTemplatesCreate409ResponseFromJSON(json: any): WiresFedwireTemplatesCreate409Response {
    return WiresFedwireTemplatesCreate409ResponseFromJSONTyped(json, false);
}

export function WiresFedwireTemplatesCreate409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WiresFedwireTemplatesCreate409Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function WiresFedwireTemplatesCreate409ResponseToJSON(value?: WiresFedwireTemplatesCreate409Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'message': value['message'],
    };
}

