/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.1.228)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `analyzing` - Analyzing
 * * `pending` - Pending
 * * `review` - Review
 * * `processing` - Processing
 * * `processed` - Processed (in transit)
 * * `rejected` - Rejected by staff
 * * `canceled` - Canceled
 * * `awaiting_approval` - Awaiting dual approval
 * * `rejected_approval` - Dual approval rejected
 * @export
 */
export const WireTransactionStateEnum = {
    Analyzing: 'analyzing',
    Pending: 'pending',
    Review: 'review',
    Processing: 'processing',
    Processed: 'processed',
    Rejected: 'rejected',
    Canceled: 'canceled',
    AwaitingApproval: 'awaiting_approval',
    RejectedApproval: 'rejected_approval'
} as const;
export type WireTransactionStateEnum = typeof WireTransactionStateEnum[keyof typeof WireTransactionStateEnum];


export function instanceOfWireTransactionStateEnum(value: any): boolean {
    for (const key in WireTransactionStateEnum) {
        if (Object.prototype.hasOwnProperty.call(WireTransactionStateEnum, key)) {
            if ((WireTransactionStateEnum as Record<string, WireTransactionStateEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WireTransactionStateEnumFromJSON(json: any): WireTransactionStateEnum {
    return WireTransactionStateEnumFromJSONTyped(json, false);
}

export function WireTransactionStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): WireTransactionStateEnum {
    return json as WireTransactionStateEnum;
}

export function WireTransactionStateEnumToJSON(value?: WireTransactionStateEnum | null): any {
    return value as any;
}

