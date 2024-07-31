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
import type { CuratedSet } from './CuratedSet';
import {
    CuratedSetFromJSON,
    CuratedSetFromJSONTyped,
    CuratedSetToJSON,
} from './CuratedSet';
import type { SearchFacet } from './SearchFacet';
import {
    SearchFacetFromJSON,
    SearchFacetFromJSONTyped,
    SearchFacetToJSON,
} from './SearchFacet';

/**
 * 
 * @export
 * @interface CuratedSetResults
 */
export interface CuratedSetResults {
    /**
     * 
     * @type {Array<CuratedSet>}
     * @memberof CuratedSetResults
     */
    graph?: Array<CuratedSet>;
    /**
     * 
     * @type {string}
     * @memberof CuratedSetResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CuratedSetResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CuratedSetResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof CuratedSetResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the CuratedSetResults interface.
 */
export function instanceOfCuratedSetResults(value: object): value is CuratedSetResults {
    return true;
}

export function CuratedSetResultsFromJSON(json: any): CuratedSetResults {
    return CuratedSetResultsFromJSONTyped(json, false);
}

export function CuratedSetResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CuratedSetResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(CuratedSetFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function CuratedSetResultsToJSON(value?: CuratedSetResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(CuratedSetToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

