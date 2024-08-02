/**
 * IGVF Project API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SearchFacet } from '../models/SearchFacet';
import { WholeOrganism } from '../models/WholeOrganism';
import { HttpFile } from '../http/http';

export class WholeOrganismResults {
    'graph'?: Array<WholeOrganism>;
    'id'?: string;
    'type'?: Array<string>;
    'total'?: number;
    'facets'?: Array<SearchFacet>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "graph",
            "baseName": "@graph",
            "type": "Array<WholeOrganism>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "facets",
            "baseName": "facets",
            "type": "Array<SearchFacet>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WholeOrganismResults.attributeTypeMap;
    }

    public constructor() {
    }
}
