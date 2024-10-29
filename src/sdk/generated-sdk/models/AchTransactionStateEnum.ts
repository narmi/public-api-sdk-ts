/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.300)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `analyzing` - analyzing
 * * `pending` - pending
 * * `processing` - processing
 * * `processed` - processed
 * * `rejected` - rejected
 * * `review` - review
 * * `canceled` - canceled
 * @export
 */
export const AchTransactionStateEnum = {
    Analyzing: 'analyzing',
    Pending: 'pending',
    Processing: 'processing',
    Processed: 'processed',
    Rejected: 'rejected',
    Review: 'review',
    Canceled: 'canceled'
} as const;
export type AchTransactionStateEnum = typeof AchTransactionStateEnum[keyof typeof AchTransactionStateEnum];


export function instanceOfAchTransactionStateEnum(value: any): boolean {
    for (const key in AchTransactionStateEnum) {
        if (Object.prototype.hasOwnProperty.call(AchTransactionStateEnum, key)) {
            if ((AchTransactionStateEnum as Record<string, AchTransactionStateEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AchTransactionStateEnumFromJSON(json: any): AchTransactionStateEnum {
    return AchTransactionStateEnumFromJSONTyped(json, false);
}

export function AchTransactionStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AchTransactionStateEnum {
    return json as AchTransactionStateEnum;
}

export function AchTransactionStateEnumToJSON(value?: AchTransactionStateEnum | null): any {
    return value as any;
}

