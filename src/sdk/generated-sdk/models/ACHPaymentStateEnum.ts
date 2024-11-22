/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.194)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `analyzing` - Analyzing
 * * `pending` - Pending
 * * `processing` - Processing
 * * `processed` - Processed (in transit)
 * * `rejected` - Rejected by staff
 * * `review` - Review
 * * `canceled` - Canceled
 * @export
 */
export const ACHPaymentStateEnum = {
    Analyzing: 'analyzing',
    Pending: 'pending',
    Processing: 'processing',
    Processed: 'processed',
    Rejected: 'rejected',
    Review: 'review',
    Canceled: 'canceled'
} as const;
export type ACHPaymentStateEnum = typeof ACHPaymentStateEnum[keyof typeof ACHPaymentStateEnum];


export function instanceOfACHPaymentStateEnum(value: any): boolean {
    for (const key in ACHPaymentStateEnum) {
        if (Object.prototype.hasOwnProperty.call(ACHPaymentStateEnum, key)) {
            if ((ACHPaymentStateEnum as Record<string, ACHPaymentStateEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ACHPaymentStateEnumFromJSON(json: any): ACHPaymentStateEnum {
    return ACHPaymentStateEnumFromJSONTyped(json, false);
}

export function ACHPaymentStateEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHPaymentStateEnum {
    return json as ACHPaymentStateEnum;
}

export function ACHPaymentStateEnumToJSON(value?: ACHPaymentStateEnum | null): any {
    return value as any;
}

