/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.11.42)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Render Institution-specific data, such as URLs, asset URLs, and customizable settings
 * @export
 * @interface InstitutionContextProcessor
 */
export interface InstitutionContextProcessor {
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly forgotPasswordUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly registerUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly mainDomain?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly routingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly helpPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly helpEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly helpCardPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly termsUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    readonly logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    tertiaryColorHex: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    primaryColorHex: string;
    /**
     * 
     * @type {string}
     * @memberof InstitutionContextProcessor
     */
    secondaryColorHex: string;
}

/**
 * Check if a given object implements the InstitutionContextProcessor interface.
 */
export function instanceOfInstitutionContextProcessor(value: object): value is InstitutionContextProcessor {
    if (!('tertiaryColorHex' in value) || value['tertiaryColorHex'] === undefined) return false;
    if (!('primaryColorHex' in value) || value['primaryColorHex'] === undefined) return false;
    if (!('secondaryColorHex' in value) || value['secondaryColorHex'] === undefined) return false;
    return true;
}

export function InstitutionContextProcessorFromJSON(json: any): InstitutionContextProcessor {
    return InstitutionContextProcessorFromJSONTyped(json, false);
}

export function InstitutionContextProcessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionContextProcessor {
    if (json == null) {
        return json;
    }
    return {
        
        'forgotPasswordUrl': json['forgot_password_url'] == null ? undefined : json['forgot_password_url'],
        'registerUrl': json['register_url'] == null ? undefined : json['register_url'],
        'mainDomain': json['main_domain'] == null ? undefined : json['main_domain'],
        'shortName': json['short_name'] == null ? undefined : json['short_name'],
        'routingNumber': json['routing_number'] == null ? undefined : json['routing_number'],
        'helpPhone': json['help_phone'] == null ? undefined : json['help_phone'],
        'helpEmail': json['help_email'] == null ? undefined : json['help_email'],
        'helpCardPhone': json['help_card_phone'] == null ? undefined : json['help_card_phone'],
        'termsUrl': json['terms_url'] == null ? undefined : json['terms_url'],
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
        'tertiaryColorHex': json['tertiary_color_hex'],
        'primaryColorHex': json['primary_color_hex'],
        'secondaryColorHex': json['secondary_color_hex'],
    };
}

export function InstitutionContextProcessorToJSON(value?: Omit<InstitutionContextProcessor, 'forgot_password_url'|'register_url'|'main_domain'|'short_name'|'routing_number'|'help_phone'|'help_email'|'help_card_phone'|'terms_url'|'logo_url'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tertiary_color_hex': value['tertiaryColorHex'],
        'primary_color_hex': value['primaryColorHex'],
        'secondary_color_hex': value['secondaryColorHex'],
    };
}

