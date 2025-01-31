/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.200)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const TransactionTypeEnum = {
    Credit: 'credit',
    Debit: 'debit'
} as const;
export type TransactionTypeEnum = typeof TransactionTypeEnum[keyof typeof TransactionTypeEnum];


export function instanceOfTransactionTypeEnum(value: any): boolean {
    for (const key in TransactionTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(TransactionTypeEnum, key)) {
            if ((TransactionTypeEnum as Record<string, TransactionTypeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionTypeEnumFromJSON(json: any): TransactionTypeEnum {
    return TransactionTypeEnumFromJSONTyped(json, false);
}

export function TransactionTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTypeEnum {
    return json as TransactionTypeEnum;
}

export function TransactionTypeEnumToJSON(value?: TransactionTypeEnum | null): any {
    return value as any;
}

