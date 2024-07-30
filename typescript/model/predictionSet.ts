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

import { RequestFile } from './models';

/**
* A file set of computational predictions. Prediction sets contain results of analyses to predict functions or traits of genomic features.
*/
export class PredictionSet {
    /**
    * The file set(s) required for this prediction set.
    */
    'inputFileSets'?: Set<string>;
    /**
    * A small scale (<=100) list of specific chromosomal region(s).
    */
    'smallScaleLociList'?: Set<object>;
    /**
    * A large scale list (>100) of specific chromosomal regions.
    */
    'largeScaleLociList'?: string;
    /**
    * The specific, small scale list of (<=100) gene(s) this prediction set targets.
    */
    'smallScaleGeneList'?: Set<string>;
    /**
    * The large scale list of (>100 genes) this this prediction set targets.
    */
    'largeScaleGeneList'?: string;
    /**
    * The date the object was released.
    */
    'releaseTimestamp'?: string;
    /**
    * The publications associated with this object.
    */
    'publications'?: Set<string>;
    /**
    * The publication identifiers that provide more information about the object.
    */
    'publicationIdentifiers'?: Set<string>;
    /**
    * Documents that provide additional information (not data file).
    */
    'documents'?: Set<string>;
    /**
    * Lab associated with the submission.
    */
    'lab'?: string;
    /**
    * Grant associated with the submission.
    */
    'award'?: string;
    /**
    * A unique identifier to be used to reference the object prefixed with IGVF.
    */
    'accession'?: string;
    /**
    * Accessions previously assigned to objects that have been merged with this object.
    */
    'alternateAccessions'?: Set<string>;
    /**
    * Some samples are part of particular data collections.
    */
    'collections'?: Set<PredictionSet.CollectionsEnum>;
    /**
    * The status of the metadata object.
    */
    'status'?: PredictionSet.StatusEnum;
    /**
    * Explanation of why an object was transitioned to the revoked status.
    */
    'revokeDetail'?: string;
    /**
    * An external resource with additional information.
    */
    'url'?: string;
    /**
    * The version of the JSON schema that the server uses to validate the object.
    */
    'schemaVersion'?: string;
    /**
    * The unique identifier associated with every object.
    */
    'uuid'?: string;
    /**
    * DACC internal notes.
    */
    'notes'?: string;
    /**
    * Lab specific identifiers to reference an object.
    */
    'aliases'?: Set<string>;
    /**
    * The date the object was created.
    */
    'creationTimestamp'?: string;
    /**
    * The user who submitted the object.
    */
    'submittedBy'?: string;
    /**
    * Additional information specified by the submitter to be displayed as a comment on the portal.
    */
    'submitterComment'?: string;
    /**
    * A plain text description of the object.
    */
    'description'?: string;
    /**
    * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets.
    */
    'dbxrefs'?: Set<string>;
    /**
    * The sample(s) associated with this file set.
    */
    'samples'?: Set<string>;
    /**
    * The donor(s) associated with this file set.
    */
    'donors'?: Set<string>;
    /**
    * The category that best describes this prediction set.
    */
    'fileSetType'?: PredictionSet.FileSetTypeEnum;
    /**
    * The scope or scale that this prediction set is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property.
    */
    'scope'?: PredictionSet.ScopeEnum;
    'id'?: string;
    'type'?: Array<string>;
    /**
    * A summary of the prediction set.
    */
    'summary'?: string;
    /**
    * The files associated with this file set.
    */
    'files'?: Set<string>;
    /**
    * The file sets for which this file set is a control.
    */
    'controlFor'?: Set<string>;
    /**
    * The timestamp the first file object in the file_set or associated auxiliary sets was created.
    */
    'submittedFilesTimestamp'?: string;
    /**
    * The file sets that use this file set as an input.
    */
    'inputFileSetFor'?: Set<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputFileSets",
            "baseName": "input_file_sets",
            "type": "Set<string>"
        },
        {
            "name": "smallScaleLociList",
            "baseName": "small_scale_loci_list",
            "type": "Set<object>"
        },
        {
            "name": "largeScaleLociList",
            "baseName": "large_scale_loci_list",
            "type": "string"
        },
        {
            "name": "smallScaleGeneList",
            "baseName": "small_scale_gene_list",
            "type": "Set<string>"
        },
        {
            "name": "largeScaleGeneList",
            "baseName": "large_scale_gene_list",
            "type": "string"
        },
        {
            "name": "releaseTimestamp",
            "baseName": "release_timestamp",
            "type": "string"
        },
        {
            "name": "publications",
            "baseName": "publications",
            "type": "Set<string>"
        },
        {
            "name": "publicationIdentifiers",
            "baseName": "publication_identifiers",
            "type": "Set<string>"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Set<string>"
        },
        {
            "name": "lab",
            "baseName": "lab",
            "type": "string"
        },
        {
            "name": "award",
            "baseName": "award",
            "type": "string"
        },
        {
            "name": "accession",
            "baseName": "accession",
            "type": "string"
        },
        {
            "name": "alternateAccessions",
            "baseName": "alternate_accessions",
            "type": "Set<string>"
        },
        {
            "name": "collections",
            "baseName": "collections",
            "type": "Set<PredictionSet.CollectionsEnum>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PredictionSet.StatusEnum"
        },
        {
            "name": "revokeDetail",
            "baseName": "revoke_detail",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "schemaVersion",
            "baseName": "schema_version",
            "type": "string"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "aliases",
            "baseName": "aliases",
            "type": "Set<string>"
        },
        {
            "name": "creationTimestamp",
            "baseName": "creation_timestamp",
            "type": "string"
        },
        {
            "name": "submittedBy",
            "baseName": "submitted_by",
            "type": "string"
        },
        {
            "name": "submitterComment",
            "baseName": "submitter_comment",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dbxrefs",
            "baseName": "dbxrefs",
            "type": "Set<string>"
        },
        {
            "name": "samples",
            "baseName": "samples",
            "type": "Set<string>"
        },
        {
            "name": "donors",
            "baseName": "donors",
            "type": "Set<string>"
        },
        {
            "name": "fileSetType",
            "baseName": "file_set_type",
            "type": "PredictionSet.FileSetTypeEnum"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "PredictionSet.ScopeEnum"
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "Array<string>"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Set<string>"
        },
        {
            "name": "controlFor",
            "baseName": "control_for",
            "type": "Set<string>"
        },
        {
            "name": "submittedFilesTimestamp",
            "baseName": "submitted_files_timestamp",
            "type": "string"
        },
        {
            "name": "inputFileSetFor",
            "baseName": "input_file_set_for",
            "type": "Set<string>"
        }    ];

    static getAttributeTypeMap() {
        return PredictionSet.attributeTypeMap;
    }
}

