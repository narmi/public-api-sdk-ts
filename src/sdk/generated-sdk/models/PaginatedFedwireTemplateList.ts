/* tslint:disable */
/* eslint-disable */
/**
 * Narmi Public API
 * To read about Public API access and authentication, go to [API Overview](https://docs.narmi.com/docs/narmi-developer-docs/xl9dvbz84o11l-introduction).
 *
 * The version of the OpenAPI document: v1 (v2024.9.264)
 * Contact: support@narmi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FedwireTemplate } from './FedwireTemplate';
import {
    FedwireTemplateFromJSON,
    FedwireTemplateFromJSONTyped,
    FedwireTemplateToJSON,
} from './FedwireTemplate';

/**
 * 
 * @export
 * @interface PaginatedFedwireTemplateList
 */
export interface PaginatedFedwireTemplateList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedFedwireTemplateList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFedwireTemplateList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFedwireTemplateList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<FedwireTemplate>}
     * @memberof PaginatedFedwireTemplateList
     */
    results: Array<FedwireTemplate>;
}

/**
 * Check if a given object implements the PaginatedFedwireTemplateList interface.
 */
export function instanceOfPaginatedFedwireTemplateList(value: object): value is PaginatedFedwireTemplateList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedFedwireTemplateListFromJSON(json: any): PaginatedFedwireTemplateList {
    return PaginatedFedwireTemplateListFromJSONTyped(json, false);
}

export function PaginatedFedwireTemplateListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedFedwireTemplateList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(FedwireTemplateFromJSON)),
    };
}

export function PaginatedFedwireTemplateListToJSON(value?: PaginatedFedwireTemplateList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(FedwireTemplateToJSON)),
    };
}

