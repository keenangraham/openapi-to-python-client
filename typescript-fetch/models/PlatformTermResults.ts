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
import type { PlatformTerm } from './PlatformTerm';
import {
    PlatformTermFromJSON,
    PlatformTermFromJSONTyped,
    PlatformTermToJSON,
} from './PlatformTerm';

/**
 * 
 * @export
 * @interface PlatformTermResults
 */
export interface PlatformTermResults {
    /**
     * 
     * @type {Array<PlatformTerm>}
     * @memberof PlatformTermResults
     */
    graph?: Array<PlatformTerm>;
    /**
     * 
     * @type {string}
     * @memberof PlatformTermResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlatformTermResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof PlatformTermResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof PlatformTermResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the PlatformTermResults interface.
 */
export function instanceOfPlatformTermResults(value: object): value is PlatformTermResults {
    return true;
}

export function PlatformTermResultsFromJSON(json: any): PlatformTermResults {
    return PlatformTermResultsFromJSONTyped(json, false);
}

export function PlatformTermResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformTermResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(PlatformTermFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function PlatformTermResultsToJSON(value?: PlatformTermResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(PlatformTermToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

