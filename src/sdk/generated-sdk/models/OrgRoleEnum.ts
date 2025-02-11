/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.77)
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
export const OrgRoleEnum = {
    AccountHolder: 'Account Holder',
    Admin: 'Admin',
    Collaborator: 'Collaborator',
    NoPermissions: 'No Permissions',
    Viewer: 'Viewer'
} as const;
export type OrgRoleEnum = typeof OrgRoleEnum[keyof typeof OrgRoleEnum];


export function instanceOfOrgRoleEnum(value: any): boolean {
    for (const key in OrgRoleEnum) {
        if (Object.prototype.hasOwnProperty.call(OrgRoleEnum, key)) {
            if ((OrgRoleEnum as Record<string, OrgRoleEnum>)[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function OrgRoleEnumFromJSON(json: any): OrgRoleEnum {
    return OrgRoleEnumFromJSONTyped(json, false);
}

export function OrgRoleEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrgRoleEnum {
    return json as OrgRoleEnum;
}

export function OrgRoleEnumToJSON(value?: OrgRoleEnum | null): any {
    return value as any;
}

