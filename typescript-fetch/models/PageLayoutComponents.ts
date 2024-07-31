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
 * @interface PageLayoutComponents
 */
export interface PageLayoutComponents {
    /**
     * Unique identifier for this blocUnique identifier for this block.
     * @type {string}
     * @memberof PageLayoutComponents
     */
    id?: string;
    /**
     * Indicates whether this block contains markdown or a component specification.
     * @type {string}
     * @memberof PageLayoutComponents
     */
    type?: string;
    /**
     * The text content of this block.
     * @type {string}
     * @memberof PageLayoutComponents
     */
    body?: string;
    /**
     * The text language direction -- ltr or rtl.
     * @type {string}
     * @memberof PageLayoutComponents
     */
    direction?: string;
}

/**
 * Check if a given object implements the PageLayoutComponents interface.
 */
export function instanceOfPageLayoutComponents(value: object): value is PageLayoutComponents {
    return true;
}

export function PageLayoutComponentsFromJSON(json: any): PageLayoutComponents {
    return PageLayoutComponentsFromJSONTyped(json, false);
}

export function PageLayoutComponentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageLayoutComponents {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'body': json['body'] == null ? undefined : json['body'],
        'direction': json['direction'] == null ? undefined : json['direction'],
    };
}

export function PageLayoutComponentsToJSON(value?: PageLayoutComponents | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '@id': value['id'],
        '@type': value['type'],
        'body': value['body'],
        'direction': value['direction'],
    };
}

