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
import type { MatrixFile } from './MatrixFile';
import {
    MatrixFileFromJSON,
    MatrixFileFromJSONTyped,
    MatrixFileToJSON,
} from './MatrixFile';
import type { SearchFacet } from './SearchFacet';
import {
    SearchFacetFromJSON,
    SearchFacetFromJSONTyped,
    SearchFacetToJSON,
} from './SearchFacet';

/**
 * 
 * @export
 * @interface MatrixFileResults
 */
export interface MatrixFileResults {
    /**
     * 
     * @type {Array<MatrixFile>}
     * @memberof MatrixFileResults
     */
    graph?: Array<MatrixFile>;
    /**
     * 
     * @type {string}
     * @memberof MatrixFileResults
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MatrixFileResults
     */
    type?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof MatrixFileResults
     */
    total?: number;
    /**
     * 
     * @type {Array<SearchFacet>}
     * @memberof MatrixFileResults
     */
    facets?: Array<SearchFacet>;
}

/**
 * Check if a given object implements the MatrixFileResults interface.
 */
export function instanceOfMatrixFileResults(value: object): value is MatrixFileResults {
    return true;
}

export function MatrixFileResultsFromJSON(json: any): MatrixFileResults {
    return MatrixFileResultsFromJSONTyped(json, false);
}

export function MatrixFileResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatrixFileResults {
    if (json == null) {
        return json;
    }
    return {
        
        'graph': json['@graph'] == null ? undefined : ((json['@graph'] as Array<any>).map(MatrixFileFromJSON)),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'total': json['total'] == null ? undefined : json['total'],
        'facets': json['facets'] == null ? undefined : ((json['facets'] as Array<any>).map(SearchFacetFromJSON)),
    };
}

export function MatrixFileResultsToJSON(value?: MatrixFileResults | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@graph': value['graph'] == null ? undefined : ((value['graph'] as Array<any>).map(MatrixFileToJSON)),
        '@id': value['id'],
        '@type': value['type'],
        'total': value['total'],
        'facets': value['facets'] == null ? undefined : ((value['facets'] as Array<any>).map(SearchFacetToJSON)),
    };
}

