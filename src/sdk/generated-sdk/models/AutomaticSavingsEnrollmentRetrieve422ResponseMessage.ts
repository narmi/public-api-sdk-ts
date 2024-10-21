/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.266)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @type AutomaticSavingsEnrollmentRetrieve422ResponseMessage
 * An error response detailing the field and the nature of the error.
 * @export
 */
export type AutomaticSavingsEnrollmentRetrieve422ResponseMessage = Array<{ [key: string]: any; }> | string | { [key: string]: any; };

export function AutomaticSavingsEnrollmentRetrieve422ResponseMessageFromJSON(json: any): AutomaticSavingsEnrollmentRetrieve422ResponseMessage {
    return AutomaticSavingsEnrollmentRetrieve422ResponseMessageFromJSONTyped(json, false);
}

export function AutomaticSavingsEnrollmentRetrieve422ResponseMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomaticSavingsEnrollmentRetrieve422ResponseMessage {
    if (json == null) {
        return json;
    }
    if (instanceOfArray<{ [key: string]: any; }>(json)) {
        return Array<{ [key: string]: any; }>FromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
    if (instanceOf{ [key: string]: any; }(json)) {
        return { [key: string]: any; }FromJSONTyped(json, true);
    }
}

export function AutomaticSavingsEnrollmentRetrieve422ResponseMessageToJSON(value?: AutomaticSavingsEnrollmentRetrieve422ResponseMessage | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfArray<{ [key: string]: any; }>(value)) {
        return Array<{ [key: string]: any; }>ToJSON(value as Array<{ [key: string]: any; }>);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }
    if (instanceOf{ [key: string]: any; }(value)) {
        return { [key: string]: any; }ToJSON(value as { [key: string]: any; });
    }

    return {};
}

