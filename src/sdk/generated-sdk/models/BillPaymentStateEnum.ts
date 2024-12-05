/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.12.20)
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
export const BillPaymentStateEnum = {
    Processed: 'processed',
    Canceled: 'canceled',
    Pending: 'pending',
    Returned: 'returned'
} as const;
export type BillPaymentStateEnum = typeof BillPaymentStateEnum[keyof typeof BillPaymentStateEnum];


export function instanceOfBillPaymentStateEnum(value: any): boolean {
    for (const key in BillPaymentStateEnum) {
        if (Object.prototype.hasOwnProperty.call(BillPaymentStateEnum, key)) {
            if ((BillPaymentStateEnum as Record<string, BillPaymentStateEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BillPaymentStateEnumFromJSON(json: any): BillPaymentStateEnum {
    return BillPaymentStateEnumFromJSONTyped(json, false);
}

export function BillPaymentStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillPaymentStateEnum {
    return json as BillPaymentStateEnum;
}

export function BillPaymentStateEnumToJSON(value?: BillPaymentStateEnum | null): any {
    return value as any;
}

