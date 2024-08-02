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
import type { Attachment } from './Attachment';
import {
    AttachmentFromJSON,
    AttachmentFromJSONTyped,
    AttachmentToJSON,
} from './Attachment';

/**
 * A document with additional information regarding another object submitted to the data portal. For example, a plasmid map document associated with a transduced cell line sample.
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * The date the object was released.
     * @type {string}
     * @memberof Document
     */
    releaseTimestamp?: string;
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Document
     */
    status?: DocumentStatusEnum;
    /**
     * Lab associated with the submission.
     * @type {string}
     * @memberof Document
     */
    lab?: string;
    /**
     * Grant associated with the submission.
     * @type {string}
     * @memberof Document
     */
    award?: string;
    /**
     * 
     * @type {Attachment}
     * @memberof Document
     */
    attachment?: Attachment;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Document
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Document
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Document
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Document
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Document
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Document
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Document
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Document
     */
    description?: string;
    /**
     * The category that best describes the document.
     * @type {string}
     * @memberof Document
     */
    documentType?: DocumentDocumentTypeEnum;
    /**
     * The method used for the characterization.
     * @type {string}
     * @memberof Document
     */
    characterizationMethod?: DocumentCharacterizationMethodEnum;
    /**
     * External resources with additional information to the document.
     * @type {Set<string>}
     * @memberof Document
     */
    urls?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Document
     */
    type?: Array<string>;
    /**
     * A summary of the document.
     * @type {string}
     * @memberof Document
     */
    summary?: string;
}


/**
 * @export
 */
export const DocumentStatusEnum = {
    Archived: 'archived',
    Deleted: 'deleted',
    InProgress: 'in progress',
    Released: 'released'
} as const;
export type DocumentStatusEnum = typeof DocumentStatusEnum[keyof typeof DocumentStatusEnum];

/**
 * @export
 */
export const DocumentDocumentTypeEnum = {
    CellFateChangeProtocol: 'cell fate change protocol',
    Characterization: 'characterization',
    ComputationalProtocol: 'computational protocol',
    ExperimentalProtocol: 'experimental protocol',
    FileFormatSpecification: 'file format specification',
    Image: 'image',
    ModelSourceData: 'model source data',
    PlateMap: 'plate map',
    PlasmidMap: 'plasmid map',
    PlasmidSequence: 'plasmid sequence',
    Standards: 'standards'
} as const;
export type DocumentDocumentTypeEnum = typeof DocumentDocumentTypeEnum[keyof typeof DocumentDocumentTypeEnum];

/**
 * @export
 */
export const DocumentCharacterizationMethodEnum = {
    Facs: 'FACS',
    Immunoblot: 'immunoblot',
    Immunofluorescence: 'immunofluorescence',
    Immunoprecipitation: 'immunoprecipitation',
    MassSpectrometry: 'mass spectrometry',
    Pcr: 'PCR',
    RestrictionDigest: 'restriction digest',
    RtQPcr: 'RT-qPCR',
    Sequencing: 'sequencing'
} as const;
export type DocumentCharacterizationMethodEnum = typeof DocumentCharacterizationMethodEnum[keyof typeof DocumentCharacterizationMethodEnum];


/**
 * Check if a given object implements the Document interface.
 */
export function instanceOfDocument(value: object): value is Document {
    return true;
}

export function DocumentFromJSON(json: any): Document {
    return DocumentFromJSONTyped(json, false);
}

export function DocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Document {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseTimestamp': json['release_timestamp'] == null ? undefined : json['release_timestamp'],
        'status': json['status'] == null ? undefined : json['status'],
        'lab': json['lab'] == null ? undefined : json['lab'],
        'award': json['award'] == null ? undefined : json['award'],
        'attachment': json['attachment'] == null ? undefined : AttachmentFromJSON(json['attachment']),
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'documentType': json['document_type'] == null ? undefined : json['document_type'],
        'characterizationMethod': json['characterization_method'] == null ? undefined : json['characterization_method'],
        'urls': json['urls'] == null ? undefined : json['urls'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
    };
}

export function DocumentToJSON(value?: Document | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'release_timestamp': value['releaseTimestamp'],
        'status': value['status'],
        'lab': value['lab'],
        'award': value['award'],
        'attachment': AttachmentToJSON(value['attachment']),
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'document_type': value['documentType'],
        'characterization_method': value['characterizationMethod'],
        'urls': value['urls'] == null ? undefined : Array.from(value['urls'] as Set<any>),
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
    };
}
