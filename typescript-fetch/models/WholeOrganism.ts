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
 * @interface WholeOrganism
 */
export interface WholeOrganism {
}

/**
 * Check if a given object implements the WholeOrganism interface.
 */
export function instanceOfWholeOrganism(value: object): value is WholeOrganism {
    return true;
}

export function WholeOrganismFromJSON(json: any): WholeOrganism {
    return WholeOrganismFromJSONTyped(json, false);
}

export function WholeOrganismFromJSONTyped(json: any, ignoreDiscriminator: boolean): WholeOrganism {
    return json;
}

export function WholeOrganismToJSON(value?: WholeOrganism | null): any {
    return value;
}

