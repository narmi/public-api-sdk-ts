/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.156)
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
 * @interface CreateSudo
 */
export interface CreateSudo {
    /**
     * 
     * @type {string}
     * @memberof CreateSudo
     */
    readonly message?: string;
}

/**
 * Check if a given object implements the CreateSudo interface.
 */
export function instanceOfCreateSudo(value: object): value is CreateSudo {
    return true;
}

export function CreateSudoFromJSON(json: any): CreateSudo {
    return CreateSudoFromJSONTyped(json, false);
}

export function CreateSudoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSudo {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function CreateSudoToJSON(value?: Omit<CreateSudo, 'message'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

