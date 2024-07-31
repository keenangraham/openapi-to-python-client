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
 * @type PredictionSet
 * A file set of computational predictions. Prediction sets contain results of analyses to predict functions or traits of genomic features.
 * @export
 */
export type PredictionSet = any;

export function PredictionSetFromJSON(json: any): PredictionSet {
    return PredictionSetFromJSONTyped(json, false);
}

export function PredictionSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictionSet {
    if (json == null) {
        return json;
    }
    if (instanceOfany(json)) {
        return anyFromJSONTyped(json, true);
    }
}

export function PredictionSetToJSON(value?: PredictionSet | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfany(value)) {
        return anyToJSON(value as any);
    }

    return {};
}

