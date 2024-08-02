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
import type { ModelSet } from './ModelSet';
import {
    ModelSetFromJSON,
    ModelSetFromJSONTyped,
    ModelSetToJSON,
} from './ModelSet';

/**
 * 
 * @export
 * @interface ModelSetResults
 */
export interface ModelSetResults {
    /**
     * 
     * @type {Array<ModelSet>}
     * @memberof ModelSetResults
     */
    graph?: Array<ModelSet>;
    /**
     * 
     * @type {string}
     * @memberof ModelSetResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelSetResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ModelSetResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof ModelSetResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the ModelSetResults interface.
 */
export function instanceOfModelSetResults(value: object): value is ModelSetResults {
    return true;
}

export function ModelSetResultsFromJSON(json: any): ModelSetResults {
    return ModelSetResultsFromJSONTyped(json, false);
}

export function ModelSetResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSetResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(ModelSetFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function ModelSetResultsToJSON(value?: ModelSetResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(ModelSetToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}
