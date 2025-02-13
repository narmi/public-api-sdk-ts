/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2025.2.100)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ACHCompany
 */
export interface ACHCompany {
    /**
     * The name of the entity that is sending money through the ACH network. This name should be recognizable to the recipient.
     * @type {string}
     * @memberof ACHCompany
     */
    companyName: string;
    /**
     * 10-digit alphanumeric string that identifies the entity that is sending money through the ACH network.
     * @type {string}
     * @memberof ACHCompany
     */
    companyId: string;
    /**
     * The organization associated with the ACH company.
     * @type {string}
     * @memberof ACHCompany
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof ACHCompany
     */
    readonly id?: string;
}

/**
 * Check if a given object implements the ACHCompany interface.
 */
export function instanceOfACHCompany(value: object): value is ACHCompany {
    if (!('companyName' in value) || value['companyName'] === undefined) return false;
    if (!('companyId' in value) || value['companyId'] === undefined) return false;
    if (!('organization' in value) || value['organization'] === undefined) return false;
    return true;
}

export function ACHCompanyFromJSON(json: any): ACHCompany {
    return ACHCompanyFromJSONTyped(json, false);
}

export function ACHCompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHCompany {
    if (json == null) {
        return json;
    }
    return {
        
        'companyName': json['company_name'],
        'companyId': json['company_id'],
        'organization': json['organization'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function ACHCompanyToJSON(value?: Omit<ACHCompany, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'company_name': value['companyName'],
        'company_id': value['companyId'],
        'organization': value['organization'],
    };
}

