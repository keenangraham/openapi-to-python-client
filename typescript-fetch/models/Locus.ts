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
/**
 * 
 * @export
 * @interface Locus
 */
export interface Locus {
    /**
     * The genome assembly to which coordinates relate (e.g., GRCh38).
     * @type {string}
     * @memberof Locus
     */
    assembly: LocusAssemblyEnum;
    /**
     * The number (or letter) designation for the chromosome, e.g. chr1 or chrX
     * @type {string}
     * @memberof Locus
     */
    chromosome: string;
    /**
     * The 1-based, closed (inclusive) starting coordinate.
     * @type {number}
     * @memberof Locus
     */
    start: number;
    /**
     * The 1-based, closed (inclusive) ending coordinate.
     * @type {number}
     * @memberof Locus
     */
    end: number;
}


/**
 * @export
 */
export const LocusAssemblyEnum = {
    Grch38: 'GRCh38',
    Grcm39: 'GRCm39'
} as const;
export type LocusAssemblyEnum = typeof LocusAssemblyEnum[keyof typeof LocusAssemblyEnum];


/**
 * Check if a given object implements the Locus interface.
 */
export function instanceOfLocus(value: object): value is Locus {
    if (!('assembly' in value) || value['assembly'] === undefined) return false;
    if (!('chromosome' in value) || value['chromosome'] === undefined) return false;
    if (!('start' in value) || value['start'] === undefined) return false;
    if (!('end' in value) || value['end'] === undefined) return false;
    return true;
}

export function LocusFromJSON(json: any): Locus {
    return LocusFromJSONTyped(json, false);
}

export function LocusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Locus {
    if (json == null) {
        return json;
    }
    return {
        
        'assembly': json['assembly'],
        'chromosome': json['chromosome'],
        'start': json['start'],
        'end': json['end'],
    };
}

export function LocusToJSON(value?: Locus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'assembly': value['assembly'],
        'chromosome': value['chromosome'],
        'start': value['start'],
        'end': value['end'],
    };
}
