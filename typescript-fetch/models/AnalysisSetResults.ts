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
import type { AnalysisSet } from './AnalysisSet';
import {
    AnalysisSetFromJSON,
    AnalysisSetFromJSONTyped,
    AnalysisSetToJSON,
} from './AnalysisSet';

/**
 * 
 * @export
 * @interface AnalysisSetResults
 */
export interface AnalysisSetResults {
    /**
     * 
     * @type {Array<AnalysisSet>}
     * @memberof AnalysisSetResults
     */
    graph?: Array<AnalysisSet>;
    /**
     * 
     * @type {string}
     * @memberof AnalysisSetResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AnalysisSetResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof AnalysisSetResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof AnalysisSetResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the AnalysisSetResults interface.
 */
export function instanceOfAnalysisSetResults(value: object): value is AnalysisSetResults {
    return true;
}

export function AnalysisSetResultsFromJSON(json: any): AnalysisSetResults {
    return AnalysisSetResultsFromJSONTyped(json, false);
}

export function AnalysisSetResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisSetResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(AnalysisSetFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function AnalysisSetResultsToJSON(value?: AnalysisSetResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(AnalysisSetToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

