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
import type { TabularFile } from './TabularFile';
import {
    TabularFileFromJSON,
    TabularFileFromJSONTyped,
    TabularFileToJSON,
} from './TabularFile';
import type { SearchFacet } from './SearchFacet';
import {
    SearchFacetFromJSON,
    SearchFacetFromJSONTyped,
    SearchFacetToJSON,
} from './SearchFacet';

/**
 * 
 * @export
 * @interface TabularFileResults
 */
export interface TabularFileResults {
    /**
     * 
     * @type {Array<TabularFile>}
     * @memberof TabularFileResults
     */
    graph?: Array<TabularFile>;
    /**
     * 
     * @type {string}
     * @memberof TabularFileResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TabularFileResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof TabularFileResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof TabularFileResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the TabularFileResults interface.
 */
export function instanceOfTabularFileResults(value: object): value is TabularFileResults {
    return true;
}

export function TabularFileResultsFromJSON(json: any): TabularFileResults {
    return TabularFileResultsFromJSONTyped(json, false);
}

export function TabularFileResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TabularFileResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(TabularFileFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function TabularFileResultsToJSON(value?: TabularFileResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(TabularFileToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}
