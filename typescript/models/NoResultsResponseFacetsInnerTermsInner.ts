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

import { HttpFile } from '../http/http';

export class NoResultsResponseFacetsInnerTermsInner {
    'key'?: string;
    'docCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "docCount",
            "baseName": "doc_count",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NoResultsResponseFacetsInnerTermsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
