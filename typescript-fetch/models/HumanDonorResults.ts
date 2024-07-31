/* tslint:disable */
/* eslint-disable */
/**
 * IGVF Project API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { SearchFacet } from './SearchFacet';
import {
    SearchFacetFromJSON,
    SearchFacetFromJSONTyped,
    SearchFacetToJSON,
} from './SearchFacet';
import type { HumanDonor } from './HumanDonor';
import {
    HumanDonorFromJSON,
    HumanDonorFromJSONTyped,
    HumanDonorToJSON,
} from './HumanDonor';

/**
 * 
 * @export
 * @interface HumanDonorResults
 */
export interface HumanDonorResults {
    /**
     * 
     * @type {Array<HumanDonor>}
     * @memberof HumanDonorResults
     */
    graph?: Array<HumanDonor>;
    /**
     * 
     * @type {string}
     * @memberof HumanDonorResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof HumanDonorResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof HumanDonorResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof HumanDonorResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the HumanDonorResults interface.
 */
export function instanceOfHumanDonorResults(value: object): value is HumanDonorResults {
    return true;
}

export function HumanDonorResultsFromJSON(json: any): HumanDonorResults {
    return HumanDonorResultsFromJSONTyped(json, false);
}

export function HumanDonorResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HumanDonorResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(HumanDonorFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function HumanDonorResultsToJSON(value?: HumanDonorResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(HumanDonorToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

