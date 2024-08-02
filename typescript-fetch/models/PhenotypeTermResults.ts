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
import type { PhenotypeTerm } from './PhenotypeTerm';
import {
    PhenotypeTermFromJSON,
    PhenotypeTermFromJSONTyped,
    PhenotypeTermToJSON,
} from './PhenotypeTerm';

/**
 * 
 * @export
 * @interface PhenotypeTermResults
 */
export interface PhenotypeTermResults {
    /**
     * 
     * @type {Array<PhenotypeTerm>}
     * @memberof PhenotypeTermResults
     */
    graph?: Array<PhenotypeTerm>;
    /**
     * 
     * @type {string}
     * @memberof PhenotypeTermResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PhenotypeTermResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof PhenotypeTermResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof PhenotypeTermResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the PhenotypeTermResults interface.
 */
export function instanceOfPhenotypeTermResults(value: object): value is PhenotypeTermResults {
    return true;
}

export function PhenotypeTermResultsFromJSON(json: any): PhenotypeTermResults {
    return PhenotypeTermResultsFromJSONTyped(json, false);
}

export function PhenotypeTermResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhenotypeTermResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(PhenotypeTermFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function PhenotypeTermResultsToJSON(value?: PhenotypeTermResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(PhenotypeTermToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}
