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
 * A file containing quantification data in a multi-dimension format.
 * @export
 * @interface MatrixFile
 */
export interface MatrixFile {
    /**
     * The date the object was released.
     * @type {string}
     * @memberof MatrixFile
     */
    releaseTimestamp?: string;
    /**
     * Link to the reference files used to generate this file.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    referenceFiles?: Set<string>;
    /**
     * Documents that provide additional information (not data file).
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    documents?: Set<string>;
    /**
     * Lab associated with the submission.
     * @type {string}
     * @memberof MatrixFile
     */
    lab?: string;
    /**
     * Grant associated with the submission.
     * @type {string}
     * @memberof MatrixFile
     */
    award?: string;
    /**
     * A unique identifier to be used to reference the object prefixed with IGVF.
     * @type {string}
     * @memberof MatrixFile
     */
    accession?: string;
    /**
     * Accessions previously assigned to objects that have been merged with this object.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    alternateAccessions?: Set<string>;
    /**
     * Some samples are part of particular data collections.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    collections?: Set<MatrixFileCollectionsEnum>;
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof MatrixFile
     */
    status?: MatrixFileStatusEnum;
    /**
     * Explanation of why an object was transitioned to the revoked status.
     * @type {string}
     * @memberof MatrixFile
     */
    revokeDetail?: string;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof MatrixFile
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof MatrixFile
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof MatrixFile
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof MatrixFile
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof MatrixFile
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof MatrixFile
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof MatrixFile
     */
    description?: string;
    /**
     * The analysis step version of the file.
     * @type {string}
     * @memberof MatrixFile
     */
    analysisStepVersion?: string;
    /**
     * The MD5sum of the uncompressed file.
     * @type {string}
     * @memberof MatrixFile
     */
    contentMd5sum?: string;
    /**
     * The type of content in the file.
     * @type {string}
     * @memberof MatrixFile
     */
    contentType?: string;
    /**
     * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    dbxrefs?: Set<string>;
    /**
     * The files participating as inputs into software to produce this output file.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    derivedFrom?: Set<string>;
    /**
     * The file format or extension of the file.
     * @type {string}
     * @memberof MatrixFile
     */
    fileFormat?: MatrixFileFileFormatEnum;
    /**
     * Document that further explains the file format.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    fileFormatSpecifications?: Set<string>;
    /**
     * The file set that this file belongs to.
     * @type {string}
     * @memberof MatrixFile
     */
    fileSet?: string;
    /**
     * File size specified in bytes.
     * @type {number}
     * @memberof MatrixFile
     */
    fileSize?: number;
    /**
     * The md5sum of the file being transferred.
     * @type {string}
     * @memberof MatrixFile
     */
    md5sum?: string;
    /**
     * Original name of the file.
     * @type {string}
     * @memberof MatrixFile
     */
    submittedFileName?: string;
    /**
     * The upload/validation status of the file.
     * @type {string}
     * @memberof MatrixFile
     */
    uploadStatus?: MatrixFileUploadStatusEnum;
    /**
     * Explanation of why the file failed the automated content checks.
     * @type {string}
     * @memberof MatrixFile
     */
    validationErrorDetail?: string;
    /**
     * First dimension of the matrix.
     * @type {string}
     * @memberof MatrixFile
     */
    dimension1?: MatrixFileDimension1Enum;
    /**
     * Second dimension of the matrix.
     * @type {string}
     * @memberof MatrixFile
     */
    dimension2?: MatrixFileDimension2Enum;
    /**
     * 
     * @type {string}
     * @memberof MatrixFile
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MatrixFile
     */
    type?: Array<string>;
    /**
     * A summary of the matrix file.
     * @type {string}
     * @memberof MatrixFile
     */
    summary?: string;
    /**
     * Construct library set(s) that this file was used for in insert design.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    integratedIn?: Set<string>;
    /**
     * The files which are derived from this file.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    inputFileFor?: Set<string>;
    /**
     * File Set(s) that this file is a gene list for.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    geneListFor?: Set<string>;
    /**
     * File Set(s) that this file is a loci list for.
     * @type {Set<string>}
     * @memberof MatrixFile
     */
    lociListFor?: Set<string>;
    /**
     * The download path to obtain file.
     * @type {string}
     * @memberof MatrixFile
     */
    href?: string;
    /**
     * The S3 URI of public file object.
     * @type {string}
     * @memberof MatrixFile
     */
    s3Uri?: string;
    /**
     * The upload credentials for S3 to submit the file content.
     * @type {object}
     * @memberof MatrixFile
     */
    uploadCredentials?: object;
    /**
     * A summary of the data in the matrix file.
     * @type {string}
     * @memberof MatrixFile
     */
    contentSummary?: string;
}


/**
 * @export
 */
export const MatrixFileCollectionsEnum = {
    ClinGen: 'ClinGen',
    Encode: 'ENCODE',
    GregoR: 'GREGoR',
    IgvfCatalogBetaV01: 'IGVF_catalog_beta_v0.1',
    IgvfCatalogBetaV02: 'IGVF_catalog_beta_v0.2',
    IgvfCatalogBetaV03: 'IGVF_catalog_beta_v0.3',
    IgvfCatalogBetaV04: 'IGVF_catalog_beta_v0.4',
    MaveDb: 'MaveDB',
    MprAbase: 'MPRAbase',
    Vista: 'Vista'
} as const;
export type MatrixFileCollectionsEnum = typeof MatrixFileCollectionsEnum[keyof typeof MatrixFileCollectionsEnum];

/**
 * @export
 */
export const MatrixFileStatusEnum = {
    InProgress: 'in progress',
    Released: 'released',
    Deleted: 'deleted',
    Replaced: 'replaced',
    Revoked: 'revoked',
    Archived: 'archived'
} as const;
export type MatrixFileStatusEnum = typeof MatrixFileStatusEnum[keyof typeof MatrixFileStatusEnum];

/**
 * @export
 */
export const MatrixFileFileFormatEnum = {
    H5ad: 'h5ad',
    Hdf5: 'hdf5',
    Mtx: 'mtx',
    Tar: 'tar',
    Hic: 'hic'
} as const;
export type MatrixFileFileFormatEnum = typeof MatrixFileFileFormatEnum[keyof typeof MatrixFileFileFormatEnum];

/**
 * @export
 */
export const MatrixFileUploadStatusEnum = {
    Pending: 'pending',
    FileNotFound: 'file not found',
    Invalidated: 'invalidated',
    Validated: 'validated'
} as const;
export type MatrixFileUploadStatusEnum = typeof MatrixFileUploadStatusEnum[keyof typeof MatrixFileUploadStatusEnum];

/**
 * @export
 */
export const MatrixFileDimension1Enum = {
    Cell: 'cell',
    Fragment: 'fragment',
    Gene: 'gene',
    Time: 'time',
    Treatment: 'treatment',
    Variant: 'variant',
    GenomicPosition: 'genomic position'
} as const;
export type MatrixFileDimension1Enum = typeof MatrixFileDimension1Enum[keyof typeof MatrixFileDimension1Enum];

/**
 * @export
 */
export const MatrixFileDimension2Enum = {
    Cell: 'cell',
    Fragment: 'fragment',
    Gene: 'gene',
    Time: 'time',
    Treatment: 'treatment',
    Variant: 'variant',
    GenomicPosition: 'genomic position'
} as const;
export type MatrixFileDimension2Enum = typeof MatrixFileDimension2Enum[keyof typeof MatrixFileDimension2Enum];


/**
 * Check if a given object implements the MatrixFile interface.
 */
export function instanceOfMatrixFile(value: object): value is MatrixFile {
    return true;
}

export function MatrixFileFromJSON(json: any): MatrixFile {
    return MatrixFileFromJSONTyped(json, false);
}

export function MatrixFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatrixFile {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseTimestamp': json['release_timestamp'] == null ? undefined : json['release_timestamp'],
        'referenceFiles': json['reference_files'] == null ? undefined : json['reference_files'],
        'documents': json['documents'] == null ? undefined : json['documents'],
        'lab': json['lab'] == null ? undefined : json['lab'],
        'award': json['award'] == null ? undefined : json['award'],
        'accession': json['accession'] == null ? undefined : json['accession'],
        'alternateAccessions': json['alternate_accessions'] == null ? undefined : json['alternate_accessions'],
        'collections': json['collections'] == null ? undefined : json['collections'],
        'status': json['status'] == null ? undefined : json['status'],
        'revokeDetail': json['revoke_detail'] == null ? undefined : json['revoke_detail'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'analysisStepVersion': json['analysis_step_version'] == null ? undefined : json['analysis_step_version'],
        'contentMd5sum': json['content_md5sum'] == null ? undefined : json['content_md5sum'],
        'contentType': json['content_type'] == null ? undefined : json['content_type'],
        'dbxrefs': json['dbxrefs'] == null ? undefined : json['dbxrefs'],
        'derivedFrom': json['derived_from'] == null ? undefined : json['derived_from'],
        'fileFormat': json['file_format'] == null ? undefined : json['file_format'],
        'fileFormatSpecifications': json['file_format_specifications'] == null ? undefined : json['file_format_specifications'],
        'fileSet': json['file_set'] == null ? undefined : json['file_set'],
        'fileSize': json['file_size'] == null ? undefined : json['file_size'],
        'md5sum': json['md5sum'] == null ? undefined : json['md5sum'],
        'submittedFileName': json['submitted_file_name'] == null ? undefined : json['submitted_file_name'],
        'uploadStatus': json['upload_status'] == null ? undefined : json['upload_status'],
        'validationErrorDetail': json['validation_error_detail'] == null ? undefined : json['validation_error_detail'],
        'dimension1': json['dimension1'] == null ? undefined : json['dimension1'],
        'dimension2': json['dimension2'] == null ? undefined : json['dimension2'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'integratedIn': json['integrated_in'] == null ? undefined : json['integrated_in'],
        'inputFileFor': json['input_file_for'] == null ? undefined : json['input_file_for'],
        'geneListFor': json['gene_list_for'] == null ? undefined : json['gene_list_for'],
        'lociListFor': json['loci_list_for'] == null ? undefined : json['loci_list_for'],
        'href': json['href'] == null ? undefined : json['href'],
        's3Uri': json['s3_uri'] == null ? undefined : json['s3_uri'],
        'uploadCredentials': json['upload_credentials'] == null ? undefined : json['upload_credentials'],
        'contentSummary': json['content_summary'] == null ? undefined : json['content_summary'],
    };
}

export function MatrixFileToJSON(value?: MatrixFile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'release_timestamp': value['releaseTimestamp'],
        'reference_files': value['referenceFiles'] == null ? undefined : Array.from(value['referenceFiles'] as Set<any>),
        'documents': value['documents'] == null ? undefined : Array.from(value['documents'] as Set<any>),
        'lab': value['lab'],
        'award': value['award'],
        'accession': value['accession'],
        'alternate_accessions': value['alternateAccessions'] == null ? undefined : Array.from(value['alternateAccessions'] as Set<any>),
        'collections': value['collections'] == null ? undefined : Array.from(value['collections'] as Set<any>),
        'status': value['status'],
        'revoke_detail': value['revokeDetail'],
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'analysis_step_version': value['analysisStepVersion'],
        'content_md5sum': value['contentMd5sum'],
        'content_type': value['contentType'],
        'dbxrefs': value['dbxrefs'] == null ? undefined : Array.from(value['dbxrefs'] as Set<any>),
        'derived_from': value['derivedFrom'] == null ? undefined : Array.from(value['derivedFrom'] as Set<any>),
        'file_format': value['fileFormat'],
        'file_format_specifications': value['fileFormatSpecifications'] == null ? undefined : Array.from(value['fileFormatSpecifications'] as Set<any>),
        'file_set': value['fileSet'],
        'file_size': value['fileSize'],
        'md5sum': value['md5sum'],
        'submitted_file_name': value['submittedFileName'],
        'upload_status': value['uploadStatus'],
        'validation_error_detail': value['validationErrorDetail'],
        'dimension1': value['dimension1'],
        'dimension2': value['dimension2'],
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
        'integrated_in': value['integratedIn'] == null ? undefined : Array.from(value['integratedIn'] as Set<any>),
        'input_file_for': value['inputFileFor'] == null ? undefined : Array.from(value['inputFileFor'] as Set<any>),
        'gene_list_for': value['geneListFor'] == null ? undefined : Array.from(value['geneListFor'] as Set<any>),
        'loci_list_for': value['lociListFor'] == null ? undefined : Array.from(value['lociListFor'] as Set<any>),
        'href': value['href'],
        's3_uri': value['s3Uri'],
        'upload_credentials': value['uploadCredentials'],
        'content_summary': value['contentSummary'],
    };
}
