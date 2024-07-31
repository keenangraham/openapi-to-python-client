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
import type { AnalysisStepVersion } from './AnalysisStepVersion';
import {
    AnalysisStepVersionFromJSON,
    AnalysisStepVersionFromJSONTyped,
    AnalysisStepVersionToJSON,
} from './AnalysisStepVersion';

/**
 * 
 * @export
 * @interface AnalysisStepVersionResults
 */
export interface AnalysisStepVersionResults {
    /**
     * 
     * @type {Array<AnalysisStepVersion>}
     * @memberof AnalysisStepVersionResults
     */
    graph?: Array<AnalysisStepVersion>;
    /**
     * 
     * @type {string}
     * @memberof AnalysisStepVersionResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AnalysisStepVersionResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof AnalysisStepVersionResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof AnalysisStepVersionResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the AnalysisStepVersionResults interface.
 */
export function instanceOfAnalysisStepVersionResults(value: object): value is AnalysisStepVersionResults {
    return true;
}

export function AnalysisStepVersionResultsFromJSON(json: any): AnalysisStepVersionResults {
    return AnalysisStepVersionResultsFromJSONTyped(json, false);
}

export function AnalysisStepVersionResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisStepVersionResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(AnalysisStepVersionFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function AnalysisStepVersionResultsToJSON(value?: AnalysisStepVersionResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(AnalysisStepVersionToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

