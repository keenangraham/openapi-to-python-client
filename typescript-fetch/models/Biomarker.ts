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
 * A biomarker, such as a cell surface protein, that is measured, detected, or used for sample sorting based upon the biomarker's presence, absence, or quantification. For example, a CD19 positive biomarker that was detected in a sample.
 * @export
 * @interface Biomarker
 */
export interface Biomarker {
    /**
     * The date the object was released.
     * @type {string}
     * @memberof Biomarker
     */
    releaseTimestamp?: string;
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Biomarker
     */
    status?: BiomarkerStatusEnum;
    /**
     * Lab associated with the submission.
     * @type {string}
     * @memberof Biomarker
     */
    lab?: string;
    /**
     * Grant associated with the submission.
     * @type {string}
     * @memberof Biomarker
     */
    award?: string;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Biomarker
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Biomarker
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Biomarker
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Biomarker
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Biomarker
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Biomarker
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Biomarker
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Biomarker
     */
    description?: string;
    /**
     * The biomarker name.
     * @type {string}
     * @memberof Biomarker
     */
    name?: string;
    /**
     * Sample specific biomarker.
     * @type {string}
     * @memberof Biomarker
     */
    classification?: BiomarkerClassificationEnum;
    /**
     * The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity.
     * @type {string}
     * @memberof Biomarker
     */
    quantification?: BiomarkerQuantificationEnum;
    /**
     * Alternate names for this biomarker.
     * @type {Set<string>}
     * @memberof Biomarker
     */
    synonyms?: Set<string>;
    /**
     * Biomarker gene.
     * @type {string}
     * @memberof Biomarker
     */
    gene?: string;
    /**
     * 
     * @type {string}
     * @memberof Biomarker
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Biomarker
     */
    type?: Array<string>;
    /**
     * A summary of the object.
     * @type {string}
     * @memberof Biomarker
     */
    summary?: string;
    /**
     * A concatenation of the name and quantification of the biomarker.
     * @type {string}
     * @memberof Biomarker
     */
    nameQuantification?: string;
    /**
     * The samples which have been confirmed to have this biomarker.
     * @type {Set<string>}
     * @memberof Biomarker
     */
    biomarkerFor?: Set<string>;
}


/**
 * @export
 */
export const BiomarkerStatusEnum = {
    Archived: 'archived',
    Deleted: 'deleted',
    InProgress: 'in progress',
    Released: 'released'
} as const;
export type BiomarkerStatusEnum = typeof BiomarkerStatusEnum[keyof typeof BiomarkerStatusEnum];

/**
 * @export
 */
export const BiomarkerClassificationEnum = {
    CellSurfaceProtein: 'cell surface protein',
    MarkerGene: 'marker gene'
} as const;
export type BiomarkerClassificationEnum = typeof BiomarkerClassificationEnum[keyof typeof BiomarkerClassificationEnum];

/**
 * @export
 */
export const BiomarkerQuantificationEnum = {
    Negative: 'negative',
    Positive: 'positive',
    Low: 'low',
    Intermediate: 'intermediate',
    High: 'high'
} as const;
export type BiomarkerQuantificationEnum = typeof BiomarkerQuantificationEnum[keyof typeof BiomarkerQuantificationEnum];


/**
 * Check if a given object implements the Biomarker interface.
 */
export function instanceOfBiomarker(value: object): value is Biomarker {
    return true;
}

export function BiomarkerFromJSON(json: any): Biomarker {
    return BiomarkerFromJSONTyped(json, false);
}

export function BiomarkerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Biomarker {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseTimestamp': json['release_timestamp'] == null ? undefined : json['release_timestamp'],
        'status': json['status'] == null ? undefined : json['status'],
        'lab': json['lab'] == null ? undefined : json['lab'],
        'award': json['award'] == null ? undefined : json['award'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'] == null ? undefined : json['name'],
        'classification': json['classification'] == null ? undefined : json['classification'],
        'quantification': json['quantification'] == null ? undefined : json['quantification'],
        'synonyms': json['synonyms'] == null ? undefined : json['synonyms'],
        'gene': json['gene'] == null ? undefined : json['gene'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'nameQuantification': json['name_quantification'] == null ? undefined : json['name_quantification'],
        'biomarkerFor': json['biomarker_for'] == null ? undefined : json['biomarker_for'],
    };
}

export function BiomarkerToJSON(value?: Biomarker | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'release_timestamp': value['releaseTimestamp'],
        'status': value['status'],
        'lab': value['lab'],
        'award': value['award'],
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'name': value['name'],
        'classification': value['classification'],
        'quantification': value['quantification'],
        'synonyms': value['synonyms'] == null ? undefined : Array.from(value['synonyms'] as Set<any>),
        'gene': value['gene'],
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
        'name_quantification': value['nameQuantification'],
        'biomarker_for': value['biomarkerFor'] == null ? undefined : Array.from(value['biomarkerFor'] as Set<any>),
    };
}
