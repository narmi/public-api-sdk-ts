/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.52)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @type ProfileEnabledEstatementsAt
 * Date-time the user opted into electronic statements.
 * @export
 */
export type ProfileEnabledEstatementsAt = Date | string;

export function ProfileEnabledEstatementsAtFromJSON(json: any): ProfileEnabledEstatementsAt {
    return ProfileEnabledEstatementsAtFromJSONTyped(json, false);
}

export function ProfileEnabledEstatementsAtFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileEnabledEstatementsAt {
    if (json == null) {
        return json;
    }
    if (instanceOfDate(json)) {
        return DateFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
}

export function ProfileEnabledEstatementsAtToJSON(value?: ProfileEnabledEstatementsAt | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfDate(value)) {
        return DateToJSON(value as Date);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}

