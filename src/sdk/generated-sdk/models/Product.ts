/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.61)
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
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    readonly type?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    readonly description?: string;
}

/**
 * Check if a given object implements the Product interface.
 */
export function instanceOfProduct(value: object): value is Product {
    return true;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function ProductToJSON(value?: Omit<Product, 'type'|'description'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

