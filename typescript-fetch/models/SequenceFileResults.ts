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
import type { SequenceFile } from './SequenceFile';
import {
    SequenceFileFromJSON,
    SequenceFileFromJSONTyped,
    SequenceFileToJSON,
} from './SequenceFile';

/**
 * 
 * @export
 * @interface SequenceFileResults
 */
export interface SequenceFileResults {
    /**
     * 
     * @type {Array<SequenceFile>}
     * @memberof SequenceFileResults
     */
    graph?: Array<SequenceFile>;
    /**
     * 
     * @type {string}
     * @memberof SequenceFileResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SequenceFileResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof SequenceFileResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof SequenceFileResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the SequenceFileResults interface.
 */
export function instanceOfSequenceFileResults(value: object): value is SequenceFileResults {
    return true;
}

export function SequenceFileResultsFromJSON(json: any): SequenceFileResults {
    return SequenceFileResultsFromJSONTyped(json, false);
}

export function SequenceFileResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SequenceFileResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(SequenceFileFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function SequenceFileResultsToJSON(value?: SequenceFileResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(SequenceFileToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

