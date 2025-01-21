/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.114)
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
 * @interface BillPayDestroy
 */
export interface BillPayDestroy {
    /**
     * 
     * @type {string}
     * @memberof BillPayDestroy
     */
    readonly deleted?: string;
}

/**
 * Check if a given object implements the BillPayDestroy interface.
 */
export function instanceOfBillPayDestroy(value: object): value is BillPayDestroy {
    return true;
}

export function BillPayDestroyFromJSON(json: any): BillPayDestroy {
    return BillPayDestroyFromJSONTyped(json, false);
}

export function BillPayDestroyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillPayDestroy {
    if (json == null) {
        return json;
    }
    return {
        
        'deleted': json['deleted'] == null ? undefined : json['deleted'],
    };
}

export function BillPayDestroyToJSON(value?: Omit<BillPayDestroy, 'deleted'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

