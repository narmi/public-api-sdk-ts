/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.111)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `phone` - phone
 * * `email` - email
 * * `totp` - totp
 * * `static` - static
 * @export
 */
export const MFATypeEnum = {
    Phone: 'phone',
    Email: 'email',
    Totp: 'totp',
    Static: 'static'
} as const;
export type MFATypeEnum = typeof MFATypeEnum[keyof typeof MFATypeEnum];


export function instanceOfMFATypeEnum(value: any): boolean {
    for (const key in MFATypeEnum) {
        if (Object.prototype.hasOwnProperty.call(MFATypeEnum, key)) {
            if ((MFATypeEnum as Record<string, MFATypeEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function MFATypeEnumFromJSON(json: any): MFATypeEnum {
    return MFATypeEnumFromJSONTyped(json, false);
}

export function MFATypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MFATypeEnum {
    return json as MFATypeEnum;
}

export function MFATypeEnumToJSON(value?: MFATypeEnum | null): any {
    return value as any;
}

