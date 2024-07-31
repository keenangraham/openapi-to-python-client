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
import type { AssayTerm } from './AssayTerm';
import {
    AssayTermFromJSON,
    AssayTermFromJSONTyped,
    AssayTermToJSON,
} from './AssayTerm';

/**
 * 
 * @export
 * @interface AssayTermResults
 */
export interface AssayTermResults {
    /**
     * 
     * @type {Array<AssayTerm>}
     * @memberof AssayTermResults
     */
    graph?: Array<AssayTerm>;
    /**
     * 
     * @type {string}
     * @memberof AssayTermResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssayTermResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof AssayTermResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof AssayTermResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the AssayTermResults interface.
 */
export function instanceOfAssayTermResults(value: object): value is AssayTermResults {
    return true;
}

export function AssayTermResultsFromJSON(json: any): AssayTermResults {
    return AssayTermResultsFromJSONTyped(json, false);
}

export function AssayTermResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssayTermResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(AssayTermFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function AssayTermResultsToJSON(value?: AssayTermResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(AssayTermToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

