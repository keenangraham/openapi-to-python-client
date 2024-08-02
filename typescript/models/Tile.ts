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

/**
* The coordinates and an identifier in plain text for the specific tile of a protein region cloned in an expression vector library. The associated gene for this protein must be listed in the small_scale_gene_list or large_scale_gene_list property.
*/
export class Tile {
    /**
    * An identifier in plain text for the specific tile of a protein region cloned in an expression vector library.
    */
    'tileId'?: string;
    /**
    * The 1-based, closed (inclusive) starting coordinate.
    */
    'tileStart'?: number;
    /**
    * The 1-based, closed (inclusive) ending coordinate.
    */
    'tileEnd'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tileId",
            "baseName": "tile_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "tileStart",
            "baseName": "tile_start",
            "type": "number",
            "format": ""
        },
        {
            "name": "tileEnd",
            "baseName": "tile_end",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Tile.attributeTypeMap;
    }

    public constructor() {
    }
}
