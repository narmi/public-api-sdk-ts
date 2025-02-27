/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.189)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `receive` - Receive only
 * * `send` - Send only
 * * `send_receive` - Send and Receive
 * * `rfp` - Request for payment and receive only
 * * `rfp_send` - Request for payment with send and receive
 * * `none` - Not in the FedNow network
 * @export
 */
export const EnrollmentLevelEnum = {
    Receive: 'receive',
    Send: 'send',
    SendReceive: 'send_receive',
    Rfp: 'rfp',
    RfpSend: 'rfp_send',
    None: 'none'
} as const;
export type EnrollmentLevelEnum = typeof EnrollmentLevelEnum[keyof typeof EnrollmentLevelEnum];


export function instanceOfEnrollmentLevelEnum(value: any): boolean {
    for (const key in EnrollmentLevelEnum) {
        if (Object.prototype.hasOwnProperty.call(EnrollmentLevelEnum, key)) {
            if ((EnrollmentLevelEnum as Record<string, EnrollmentLevelEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function EnrollmentLevelEnumFromJSON(json: any): EnrollmentLevelEnum {
    return EnrollmentLevelEnumFromJSONTyped(json, false);
}

export function EnrollmentLevelEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentLevelEnum {
    return json as EnrollmentLevelEnum;
}

export function EnrollmentLevelEnumToJSON(value?: EnrollmentLevelEnum | null): any {
    return value as any;
}

