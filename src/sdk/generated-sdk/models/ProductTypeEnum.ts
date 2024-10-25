/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.294)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `checking` - Checking
 * * `savings` - Savings
 * * `loan` - Loan
 * @export
 */
export const ProductTypeEnum = {
    Checking: 'checking',
    Savings: 'savings',
    Loan: 'loan'
} as const;
export type ProductTypeEnum = typeof ProductTypeEnum[keyof typeof ProductTypeEnum];


export function instanceOfProductTypeEnum(value: any): boolean {
    for (const key in ProductTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(ProductTypeEnum, key)) {
            if ((ProductTypeEnum as Record<string, ProductTypeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ProductTypeEnumFromJSON(json: any): ProductTypeEnum {
    return ProductTypeEnumFromJSONTyped(json, false);
}

export function ProductTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductTypeEnum {
    return json as ProductTypeEnum;
}

export function ProductTypeEnumToJSON(value?: ProductTypeEnum | null): any {
    return value as any;
}

