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
 * A protein or chemical treatment applied to samples such as lipopolysaccharide, interleukin-2, or leucine.
 * @export
 * @interface Treatment
 */
export interface Treatment {
    /**
     * The date the object was released.
     * @type {string}
     * @memberof Treatment
     */
    releaseTimestamp?: string;
    /**
     * Lab associated with the submission.
     * @type {string}
     * @memberof Treatment
     */
    lab?: string;
    /**
     * Grant associated with the submission.
     * @type {string}
     * @memberof Treatment
     */
    award?: string;
    /**
     * The originating lab(s) or vendor(s).
     * @type {Set<string>}
     * @memberof Treatment
     */
    sources?: Set<string>;
    /**
     * The lot identifier provided by the originating lab or vendor.
     * @type {string}
     * @memberof Treatment
     */
    lotId?: string;
    /**
     * The product identifier provided by the originating lab or vendor.
     * @type {string}
     * @memberof Treatment
     */
    productId?: string;
    /**
     * Documents that describe the treatment protocol details.
     * @type {Set<string>}
     * @memberof Treatment
     */
    documents?: Set<string>;
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Treatment
     */
    status?: TreatmentStatusEnum;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Treatment
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Treatment
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Treatment
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Treatment
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Treatment
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Treatment
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Treatment
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Treatment
     */
    description?: string;
    /**
     * Specific quantity of the applied treatment (used in conjunction with amount_units).
     * @type {number}
     * @memberof Treatment
     */
    amount?: number;
    /**
     * A unit for an amount other than those for time or temperature.
     * @type {string}
     * @memberof Treatment
     */
    amountUnits?: TreatmentAmountUnitsEnum;
    /**
     * Duration indicates the time elapsed between the start and end of the treatment.
     * @type {number}
     * @memberof Treatment
     */
    duration?: number;
    /**
     * A unit of time.
     * @type {string}
     * @memberof Treatment
     */
    durationUnits?: TreatmentDurationUnitsEnum;
    /**
     * Final pH of the solution containing a chemical compound (if applicable)
     * @type {number}
     * @memberof Treatment
     */
    pH?: number;
    /**
     * The intended purpose for treating the samples; Activation: treatment is known to activate a pathway in the biosample; Agonist: a substance which is known to initiate a physiological response when combined with a receptor; Antagonist: a substance that is known to interfere with or inhibits the physiological action of another; Control: treatment applied to a sample for control purposes; Differentiation: treatment that is applied to convert a less specialized cell to a more specialized cell; De-differentiation: treatment used to reprogram differentiated cells back to less determined cell states; Perturbation: treatment applied to the sample in order to study the effect of its application; Selection: treatment used to affect biosample in a way that can be used to distinguish cells and select for in the downstream steps; Stimulation: treatment applied to stimulate a cellular pathway.
     * @type {string}
     * @memberof Treatment
     */
    purpose?: TreatmentPurposeEnum;
    /**
     * Post treatment time in conjunction with post treatment time units is used to specify the time that has passed between the point when biosamples were removed from the treatment solution before being sampled or treated with the next treatment.
     * @type {number}
     * @memberof Treatment
     */
    postTreatmentTime?: number;
    /**
     * A unit of time.
     * @type {string}
     * @memberof Treatment
     */
    postTreatmentTimeUnits?: TreatmentPostTreatmentTimeUnitsEnum;
    /**
     * The temperature in Celsius to which the sample was exposed
     * @type {number}
     * @memberof Treatment
     */
    temperature?: number;
    /**
     * A unit of temperature.
     * @type {string}
     * @memberof Treatment
     */
    temperatureUnits?: TreatmentTemperatureUnitsEnum;
    /**
     * The classification of treatment agent that specifies its exact molecular nature. Chemical type refers to (natural or synthetic) organic/inorganic compounds and also includes drugs, while protein type is restricted to active protein biomolecules that are naturally or artifically synthesized via cellular translation mechanism of converting DNA into a protein. Environmental type referes to other external conditions that directly influence biological processes or reactions within a given environment. Example of chemical type: lactate, ethanol,hydrocortisone, LPS etc. Example of protein type: Interferons, interlukin, antibodies, etc. Example of chemical type: stiffness.
     * @type {string}
     * @memberof Treatment
     */
    treatmentType?: TreatmentTreatmentTypeEnum;
    /**
     * Ontology identifier describing a component in the treatment.
     * @type {string}
     * @memberof Treatment
     */
    treatmentTermId?: string;
    /**
     * Ontology term describing a component in the treatment that is the principal component affecting the biosample being treated. Examples: interferon gamma, interleukin-4, Fibroblast growth factor 2, 20-hydroxyecdysone, 5-bromouridine etc.
     * @type {string}
     * @memberof Treatment
     */
    treatmentTermName?: string;
    /**
     * Treatment is depleted.
     * @type {boolean}
     * @memberof Treatment
     */
    depletion?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Treatment
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Treatment
     */
    type?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Treatment
     */
    summary?: string;
    /**
     * The samples which have been treated using this treatment.
     * @type {Set<string>}
     * @memberof Treatment
     */
    biosamplesTreated?: Set<string>;
}


/**
 * @export
 */
export const TreatmentStatusEnum = {
    Archived: 'archived',
    Deleted: 'deleted',
    InProgress: 'in progress',
    Released: 'released'
} as const;
export type TreatmentStatusEnum = typeof TreatmentStatusEnum[keyof typeof TreatmentStatusEnum];

/**
 * @export
 */
export const TreatmentAmountUnitsEnum = {
    MgKg: 'mg/kg',
    MgML: 'mg/mL',
    MM: 'mM',
    NgML: 'ng/mL',
    NM: 'nM',
    Percent: 'percent',
    GKg: 'μg/kg',
    GKg2: 'μg/kg',
    GML: 'μg/mL',
    M: 'μM',
    Kpa: 'kpa'
} as const;
export type TreatmentAmountUnitsEnum = typeof TreatmentAmountUnitsEnum[keyof typeof TreatmentAmountUnitsEnum];

/**
 * @export
 */
export const TreatmentDurationUnitsEnum = {
    Second: 'second',
    Minute: 'minute',
    Hour: 'hour',
    Day: 'day'
} as const;
export type TreatmentDurationUnitsEnum = typeof TreatmentDurationUnitsEnum[keyof typeof TreatmentDurationUnitsEnum];

/**
 * @export
 */
export const TreatmentPurposeEnum = {
    Activation: 'activation',
    Agonist: 'agonist',
    Antagonist: 'antagonist',
    Control: 'control',
    Differentiation: 'differentiation',
    DeDifferentiation: 'de-differentiation',
    Perturbation: 'perturbation',
    Selection: 'selection',
    Stimulation: 'stimulation'
} as const;
export type TreatmentPurposeEnum = typeof TreatmentPurposeEnum[keyof typeof TreatmentPurposeEnum];

/**
 * @export
 */
export const TreatmentPostTreatmentTimeUnitsEnum = {
    Minute: 'minute',
    Hour: 'hour',
    Day: 'day',
    Week: 'week',
    Month: 'month'
} as const;
export type TreatmentPostTreatmentTimeUnitsEnum = typeof TreatmentPostTreatmentTimeUnitsEnum[keyof typeof TreatmentPostTreatmentTimeUnitsEnum];

/**
 * @export
 */
export const TreatmentTemperatureUnitsEnum = {
    Celsius: 'Celsius'
} as const;
export type TreatmentTemperatureUnitsEnum = typeof TreatmentTemperatureUnitsEnum[keyof typeof TreatmentTemperatureUnitsEnum];

/**
 * @export
 */
export const TreatmentTreatmentTypeEnum = {
    Chemical: 'chemical',
    Protein: 'protein',
    Environmental: 'environmental'
} as const;
export type TreatmentTreatmentTypeEnum = typeof TreatmentTreatmentTypeEnum[keyof typeof TreatmentTreatmentTypeEnum];


/**
 * Check if a given object implements the Treatment interface.
 */
export function instanceOfTreatment(value: object): value is Treatment {
    return true;
}

export function TreatmentFromJSON(json: any): Treatment {
    return TreatmentFromJSONTyped(json, false);
}

export function TreatmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Treatment {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseTimestamp': json['release_timestamp'] == null ? undefined : json['release_timestamp'],
        'lab': json['lab'] == null ? undefined : json['lab'],
        'award': json['award'] == null ? undefined : json['award'],
        'sources': json['sources'] == null ? undefined : json['sources'],
        'lotId': json['lot_id'] == null ? undefined : json['lot_id'],
        'productId': json['product_id'] == null ? undefined : json['product_id'],
        'documents': json['documents'] == null ? undefined : json['documents'],
        'status': json['status'] == null ? undefined : json['status'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'amountUnits': json['amount_units'] == null ? undefined : json['amount_units'],
        'duration': json['duration'] == null ? undefined : json['duration'],
        'durationUnits': json['duration_units'] == null ? undefined : json['duration_units'],
        'pH': json['pH'] == null ? undefined : json['pH'],
        'purpose': json['purpose'] == null ? undefined : json['purpose'],
        'postTreatmentTime': json['post_treatment_time'] == null ? undefined : json['post_treatment_time'],
        'postTreatmentTimeUnits': json['post_treatment_time_units'] == null ? undefined : json['post_treatment_time_units'],
        'temperature': json['temperature'] == null ? undefined : json['temperature'],
        'temperatureUnits': json['temperature_units'] == null ? undefined : json['temperature_units'],
        'treatmentType': json['treatment_type'] == null ? undefined : json['treatment_type'],
        'treatmentTermId': json['treatment_term_id'] == null ? undefined : json['treatment_term_id'],
        'treatmentTermName': json['treatment_term_name'] == null ? undefined : json['treatment_term_name'],
        'depletion': json['depletion'] == null ? undefined : json['depletion'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'biosamplesTreated': json['biosamples_treated'] == null ? undefined : json['biosamples_treated'],
    };
}

export function TreatmentToJSON(value?: Treatment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'release_timestamp': value['releaseTimestamp'],
        'lab': value['lab'],
        'award': value['award'],
        'sources': value['sources'] == null ? undefined : Array.from(value['sources'] as Set<any>),
        'lot_id': value['lotId'],
        'product_id': value['productId'],
        'documents': value['documents'] == null ? undefined : Array.from(value['documents'] as Set<any>),
        'status': value['status'],
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'amount': value['amount'],
        'amount_units': value['amountUnits'],
        'duration': value['duration'],
        'duration_units': value['durationUnits'],
        'pH': value['pH'],
        'purpose': value['purpose'],
        'post_treatment_time': value['postTreatmentTime'],
        'post_treatment_time_units': value['postTreatmentTimeUnits'],
        'temperature': value['temperature'],
        'temperature_units': value['temperatureUnits'],
        'treatment_type': value['treatmentType'],
        'treatment_term_id': value['treatmentTermId'],
        'treatment_term_name': value['treatmentTermName'],
        'depletion': value['depletion'],
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
        'biosamples_treated': value['biosamplesTreated'] == null ? undefined : Array.from(value['biosamplesTreated'] as Set<any>),
    };
}
