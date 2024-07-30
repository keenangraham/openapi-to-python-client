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
* A file containing quantification data in a multi-dimension format.
*/
export class MatrixFile {
    /**
    * The date the object was released.
    */
    'releaseTimestamp'?: string;
    /**
    * Link to the reference files used to generate this file.
    */
    'referenceFiles'?: Set<string>;
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
    'collections'?: Set<MatrixFile.CollectionsEnum>;
    /**
    * The status of the metadata object.
    */
    'status'?: MatrixFile.StatusEnum;
    /**
    * Explanation of why an object was transitioned to the revoked status.
    */
    'revokeDetail'?: string;
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
    * The analysis step version of the file.
    */
    'analysisStepVersion'?: string;
    /**
    * The MD5sum of the uncompressed file.
    */
    'contentMd5sum'?: string;
    /**
    * The type of content in the file.
    */
    'contentType'?: string;
    /**
    * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects.
    */
    'dbxrefs'?: Set<string>;
    /**
    * The files participating as inputs into software to produce this output file.
    */
    'derivedFrom'?: Set<string>;
    /**
    * The file format or extension of the file.
    */
    'fileFormat'?: MatrixFile.FileFormatEnum;
    /**
    * Document that further explains the file format.
    */
    'fileFormatSpecifications'?: Set<string>;
    /**
    * The file set that this file belongs to.
    */
    'fileSet'?: string;
    /**
    * File size specified in bytes.
    */
    'fileSize'?: number;
    /**
    * The md5sum of the file being transferred.
    */
    'md5sum'?: string;
    /**
    * Original name of the file.
    */
    'submittedFileName'?: string;
    /**
    * The upload/validation status of the file.
    */
    'uploadStatus'?: MatrixFile.UploadStatusEnum;
    /**
    * Explanation of why the file failed the automated content checks.
    */
    'validationErrorDetail'?: string;
    /**
    * First dimension of the matrix.
    */
    'dimension1'?: MatrixFile.Dimension1Enum;
    /**
    * Second dimension of the matrix.
    */
    'dimension2'?: MatrixFile.Dimension2Enum;
    'id'?: string;
    'type'?: Array<string>;
    /**
    * A summary of the matrix file.
    */
    'summary'?: string;
    /**
    * Construct library set(s) that this file was used for in insert design.
    */
    'integratedIn'?: Set<string>;
    /**
    * The files which are derived from this file.
    */
    'inputFileFor'?: Set<string>;
    /**
    * File Set(s) that this file is a gene list for.
    */
    'geneListFor'?: Set<string>;
    /**
    * File Set(s) that this file is a loci list for.
    */
    'lociListFor'?: Set<string>;
    /**
    * The download path to obtain file.
    */
    'href'?: string;
    /**
    * The S3 URI of public file object.
    */
    's3Uri'?: string;
    /**
    * The upload credentials for S3 to submit the file content.
    */
    'uploadCredentials'?: object;
    /**
    * A summary of the data in the matrix file.
    */
    'contentSummary'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "releaseTimestamp",
            "baseName": "release_timestamp",
            "type": "string"
        },
        {
            "name": "referenceFiles",
            "baseName": "reference_files",
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
            "type": "Set<MatrixFile.CollectionsEnum>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "MatrixFile.StatusEnum"
        },
        {
            "name": "revokeDetail",
            "baseName": "revoke_detail",
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
            "name": "analysisStepVersion",
            "baseName": "analysis_step_version",
            "type": "string"
        },
        {
            "name": "contentMd5sum",
            "baseName": "content_md5sum",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string"
        },
        {
            "name": "dbxrefs",
            "baseName": "dbxrefs",
            "type": "Set<string>"
        },
        {
            "name": "derivedFrom",
            "baseName": "derived_from",
            "type": "Set<string>"
        },
        {
            "name": "fileFormat",
            "baseName": "file_format",
            "type": "MatrixFile.FileFormatEnum"
        },
        {
            "name": "fileFormatSpecifications",
            "baseName": "file_format_specifications",
            "type": "Set<string>"
        },
        {
            "name": "fileSet",
            "baseName": "file_set",
            "type": "string"
        },
        {
            "name": "fileSize",
            "baseName": "file_size",
            "type": "number"
        },
        {
            "name": "md5sum",
            "baseName": "md5sum",
            "type": "string"
        },
        {
            "name": "submittedFileName",
            "baseName": "submitted_file_name",
            "type": "string"
        },
        {
            "name": "uploadStatus",
            "baseName": "upload_status",
            "type": "MatrixFile.UploadStatusEnum"
        },
        {
            "name": "validationErrorDetail",
            "baseName": "validation_error_detail",
            "type": "string"
        },
        {
            "name": "dimension1",
            "baseName": "dimension1",
            "type": "MatrixFile.Dimension1Enum"
        },
        {
            "name": "dimension2",
            "baseName": "dimension2",
            "type": "MatrixFile.Dimension2Enum"
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
            "name": "integratedIn",
            "baseName": "integrated_in",
            "type": "Set<string>"
        },
        {
            "name": "inputFileFor",
            "baseName": "input_file_for",
            "type": "Set<string>"
        },
        {
            "name": "geneListFor",
            "baseName": "gene_list_for",
            "type": "Set<string>"
        },
        {
            "name": "lociListFor",
            "baseName": "loci_list_for",
            "type": "Set<string>"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "s3Uri",
            "baseName": "s3_uri",
            "type": "string"
        },
        {
            "name": "uploadCredentials",
            "baseName": "upload_credentials",
            "type": "object"
        },
        {
            "name": "contentSummary",
            "baseName": "content_summary",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MatrixFile.attributeTypeMap;
    }
}

export namespace MatrixFile {
    export enum CollectionsEnum {
        ClinGen = <any> 'ClinGen',
        Encode = <any> 'ENCODE',
        GregoR = <any> 'GREGoR',
        IgvfCatalogBetaV01 = <any> 'IGVF_catalog_beta_v0.1',
        IgvfCatalogBetaV02 = <any> 'IGVF_catalog_beta_v0.2',
        IgvfCatalogBetaV03 = <any> 'IGVF_catalog_beta_v0.3',
        IgvfCatalogBetaV04 = <any> 'IGVF_catalog_beta_v0.4',
        MaveDb = <any> 'MaveDB',
        MprAbase = <any> 'MPRAbase',
        Vista = <any> 'Vista'
    }
    export enum StatusEnum {
        InProgress = <any> 'in progress',
        Released = <any> 'released',
        Deleted = <any> 'deleted',
        Replaced = <any> 'replaced',
        Revoked = <any> 'revoked',
        Archived = <any> 'archived'
    }
    export enum FileFormatEnum {
        H5ad = <any> 'h5ad',
        Hdf5 = <any> 'hdf5',
        Mtx = <any> 'mtx',
        Tar = <any> 'tar',
        Hic = <any> 'hic'
    }
    export enum UploadStatusEnum {
        Pending = <any> 'pending',
        FileNotFound = <any> 'file not found',
        Invalidated = <any> 'invalidated',
        Validated = <any> 'validated'
    }
    export enum Dimension1Enum {
        Cell = <any> 'cell',
        Fragment = <any> 'fragment',
        Gene = <any> 'gene',
        Time = <any> 'time',
        Treatment = <any> 'treatment',
        Variant = <any> 'variant',
        GenomicPosition = <any> 'genomic position'
    }
    export enum Dimension2Enum {
        Cell = <any> 'cell',
        Fragment = <any> 'fragment',
        Gene = <any> 'gene',
        Time = <any> 'time',
        Treatment = <any> 'treatment',
        Variant = <any> 'variant',
        GenomicPosition = <any> 'genomic position'
    }
}
