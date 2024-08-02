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

/**
 * @type Limit
 * 
 * @export
 */
export type Limit = number | string;

export function LimitFromJSON(json: any): Limit {
    return LimitFromJSONTyped(json, false);
}

export function LimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Limit {
    if (json == null) {
        return json;
    }
    if (instanceOfnumber(json)) {
        return numberFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }
}

export function LimitToJSON(value?: Limit | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
