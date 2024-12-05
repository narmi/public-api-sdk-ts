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
 * * `business` - business
 * * `personal` - personal
 * @export
 */
export const EnrollmentDocUserCategoryEnum = {
    Business: 'business',
    Personal: 'personal'
} as const;
export type EnrollmentDocUserCategoryEnum = typeof EnrollmentDocUserCategoryEnum[keyof typeof EnrollmentDocUserCategoryEnum];


export function instanceOfEnrollmentDocUserCategoryEnum(value: any): boolean {
    for (const key in EnrollmentDocUserCategoryEnum) {
        if (Object.prototype.hasOwnProperty.call(EnrollmentDocUserCategoryEnum, key)) {
            if ((EnrollmentDocUserCategoryEnum as Record<string, EnrollmentDocUserCategoryEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function EnrollmentDocUserCategoryEnumFromJSON(json: any): EnrollmentDocUserCategoryEnum {
    return EnrollmentDocUserCategoryEnumFromJSONTyped(json, false);
}

export function EnrollmentDocUserCategoryEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrollmentDocUserCategoryEnum {
    return json as EnrollmentDocUserCategoryEnum;
}

export function EnrollmentDocUserCategoryEnumToJSON(value?: EnrollmentDocUserCategoryEnum | null): any {
    return value as any;
}

