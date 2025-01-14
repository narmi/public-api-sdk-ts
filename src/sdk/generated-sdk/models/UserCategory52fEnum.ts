/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.385)
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
export const UserCategory52fEnum = {
    Personal: 'personal',
    Business: 'business'
} as const;
export type UserCategory52fEnum = typeof UserCategory52fEnum[keyof typeof UserCategory52fEnum];


export function instanceOfUserCategory52fEnum(value: any): boolean {
    for (const key in UserCategory52fEnum) {
        if (Object.prototype.hasOwnProperty.call(UserCategory52fEnum, key)) {
            if ((UserCategory52fEnum as Record<string, UserCategory52fEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UserCategory52fEnumFromJSON(json: any): UserCategory52fEnum {
    return UserCategory52fEnumFromJSONTyped(json, false);
}

export function UserCategory52fEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCategory52fEnum {
    return json as UserCategory52fEnum;
}

export function UserCategory52fEnumToJSON(value?: UserCategory52fEnum | null): any {
    return value as any;
}

