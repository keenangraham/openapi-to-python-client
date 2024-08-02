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
import type { Page } from './Page';
import {
    PageFromJSON,
    PageFromJSONTyped,
    PageToJSON,
} from './Page';

/**
 * 
 * @export
 * @interface PageResults
 */
export interface PageResults {
    /**
     * 
     * @type {Array<Page>}
     * @memberof PageResults
     */
    graph?: Array<Page>;
    /**
     * 
     * @type {string}
     * @memberof PageResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PageResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof PageResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof PageResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the PageResults interface.
 */
export function instanceOfPageResults(value: object): value is PageResults {
    return true;
}

export function PageResultsFromJSON(json: any): PageResults {
    return PageResultsFromJSONTyped(json, false);
}

export function PageResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(PageFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function PageResultsToJSON(value?: PageResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(PageToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}
