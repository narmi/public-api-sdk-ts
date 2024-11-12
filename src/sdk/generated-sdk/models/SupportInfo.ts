/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.90)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Serializer that returns institution specific support information
 * @export
 * @interface SupportInfo
 */
export interface SupportInfo {
    /**
     * Support contact information, defined by the `Support Page Contact Us Information` institution setting
     * @type {any}
     * @memberof SupportInfo
     */
    readonly contacts?: any | null;
    /**
     * Frequently Asked Questions for support, defined by the `Support Page Frequently Asked Questions` institution setting
     * @type {any}
     * @memberof SupportInfo
     */
    readonly faqs?: any | null;
    /**
     * Support links to documentation and utilities, defined by the `Support Page Quick Links` institution setting
     * @type {any}
     * @memberof SupportInfo
     */
    readonly links?: any | null;
    /**
     * Support reply time, defined by the `Support Message Reply Time` institution setting
     * @type {string}
     * @memberof SupportInfo
     */
    readonly supportMessageReplyTime?: string;
    /**
     * Disclaimer information, defined by the `Support Message Reply Disclaimer` institution setting
     * @type {string}
     * @memberof SupportInfo
     */
    readonly supportMessageReplyDisclaimer?: string;
}

/**
 * Check if a given object implements the SupportInfo interface.
 */
export function instanceOfSupportInfo(value: object): value is SupportInfo {
    return true;
}

export function SupportInfoFromJSON(json: any): SupportInfo {
    return SupportInfoFromJSONTyped(json, false);
}

export function SupportInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupportInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'contacts': json['contacts'] == null ? undefined : json['contacts'],
        'faqs': json['faqs'] == null ? undefined : json['faqs'],
        'links': json['links'] == null ? undefined : json['links'],
        'supportMessageReplyTime': json['support_message_reply_time'] == null ? undefined : json['support_message_reply_time'],
        'supportMessageReplyDisclaimer': json['support_message_reply_disclaimer'] == null ? undefined : json['support_message_reply_disclaimer'],
    };
}

export function SupportInfoToJSON(value?: Omit<SupportInfo, 'contacts'|'faqs'|'links'|'support_message_reply_time'|'support_message_reply_disclaimer'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

