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

import { RequestFile } from './models';
import { AnalysisStep } from './analysisStep';
import { SearchFacet } from './searchFacet';

export class AnalysisStepResults {
    'graph'?: Array<AnalysisStep>;
    'id'?: string;
    'type'?: Array<string>;
    'total'?: number;
    'facets'?: Array<SearchFacet>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "graph",
            "baseName": "@graph",
            "type": "Array<AnalysisStep>"
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "Array<string>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "facets",
            "baseName": "facets",
            "type": "Array<SearchFacet>"
        }    ];

    static getAttributeTypeMap() {
        return AnalysisStepResults.attributeTypeMap;
    }
}

