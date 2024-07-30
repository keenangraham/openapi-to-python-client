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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ConfigurationFile model module.
 * @module model/ConfigurationFile
 * @version 0.1.0
 */
class ConfigurationFile {
    /**
     * Constructs a new <code>ConfigurationFile</code>.
     * A file containing configuration settings or information defining the structure of other data files&#39; content.
     * @alias module:model/ConfigurationFile
     */
    constructor() { 
        
        ConfigurationFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigurationFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigurationFile} obj Optional instance to populate.
     * @return {module:model/ConfigurationFile} The populated <code>ConfigurationFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigurationFile();

            if (data.hasOwnProperty('release_timestamp')) {
                obj['release_timestamp'] = ApiClient.convertToType(data['release_timestamp'], 'String');
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], ['String']);
            }
            if (data.hasOwnProperty('lab')) {
                obj['lab'] = ApiClient.convertToType(data['lab'], 'String');
            }
            if (data.hasOwnProperty('award')) {
                obj['award'] = ApiClient.convertToType(data['award'], 'String');
            }
            if (data.hasOwnProperty('accession')) {
                obj['accession'] = ApiClient.convertToType(data['accession'], 'String');
            }
            if (data.hasOwnProperty('alternate_accessions')) {
                obj['alternate_accessions'] = ApiClient.convertToType(data['alternate_accessions'], ['String']);
            }
            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('revoke_detail')) {
                obj['revoke_detail'] = ApiClient.convertToType(data['revoke_detail'], 'String');
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('aliases')) {
                obj['aliases'] = ApiClient.convertToType(data['aliases'], ['String']);
            }
            if (data.hasOwnProperty('creation_timestamp')) {
                obj['creation_timestamp'] = ApiClient.convertToType(data['creation_timestamp'], 'String');
            }
            if (data.hasOwnProperty('submitted_by')) {
                obj['submitted_by'] = ApiClient.convertToType(data['submitted_by'], 'String');
            }
            if (data.hasOwnProperty('submitter_comment')) {
                obj['submitter_comment'] = ApiClient.convertToType(data['submitter_comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('analysis_step_version')) {
                obj['analysis_step_version'] = ApiClient.convertToType(data['analysis_step_version'], 'String');
            }
            if (data.hasOwnProperty('content_md5sum')) {
                obj['content_md5sum'] = ApiClient.convertToType(data['content_md5sum'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('dbxrefs')) {
                obj['dbxrefs'] = ApiClient.convertToType(data['dbxrefs'], ['String']);
            }
            if (data.hasOwnProperty('derived_from')) {
                obj['derived_from'] = ApiClient.convertToType(data['derived_from'], ['String']);
            }
            if (data.hasOwnProperty('file_format')) {
                obj['file_format'] = ApiClient.convertToType(data['file_format'], 'String');
            }
            if (data.hasOwnProperty('file_format_specifications')) {
                obj['file_format_specifications'] = ApiClient.convertToType(data['file_format_specifications'], ['String']);
            }
            if (data.hasOwnProperty('file_set')) {
                obj['file_set'] = ApiClient.convertToType(data['file_set'], 'String');
            }
            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
            }
            if (data.hasOwnProperty('md5sum')) {
                obj['md5sum'] = ApiClient.convertToType(data['md5sum'], 'String');
            }
            if (data.hasOwnProperty('submitted_file_name')) {
                obj['submitted_file_name'] = ApiClient.convertToType(data['submitted_file_name'], 'String');
            }
            if (data.hasOwnProperty('upload_status')) {
                obj['upload_status'] = ApiClient.convertToType(data['upload_status'], 'String');
            }
            if (data.hasOwnProperty('validation_error_detail')) {
                obj['validation_error_detail'] = ApiClient.convertToType(data['validation_error_detail'], 'String');
            }
            if (data.hasOwnProperty('seqspec_of')) {
                obj['seqspec_of'] = ApiClient.convertToType(data['seqspec_of'], ['String']);
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], ['String']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('integrated_in')) {
                obj['integrated_in'] = ApiClient.convertToType(data['integrated_in'], ['String']);
            }
            if (data.hasOwnProperty('input_file_for')) {
                obj['input_file_for'] = ApiClient.convertToType(data['input_file_for'], ['String']);
            }
            if (data.hasOwnProperty('gene_list_for')) {
                obj['gene_list_for'] = ApiClient.convertToType(data['gene_list_for'], ['String']);
            }
            if (data.hasOwnProperty('loci_list_for')) {
                obj['loci_list_for'] = ApiClient.convertToType(data['loci_list_for'], ['String']);
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('s3_uri')) {
                obj['s3_uri'] = ApiClient.convertToType(data['s3_uri'], 'String');
            }
            if (data.hasOwnProperty('upload_credentials')) {
                obj['upload_credentials'] = ApiClient.convertToType(data['upload_credentials'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfigurationFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigurationFile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['release_timestamp'] && !(typeof data['release_timestamp'] === 'string' || data['release_timestamp'] instanceof String)) {
            throw new Error("Expected the field `release_timestamp` to be a primitive type in the JSON string but got " + data['release_timestamp']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['documents'])) {
            throw new Error("Expected the field `documents` to be an array in the JSON data but got " + data['documents']);
        }
        // ensure the json data is a string
        if (data['lab'] && !(typeof data['lab'] === 'string' || data['lab'] instanceof String)) {
            throw new Error("Expected the field `lab` to be a primitive type in the JSON string but got " + data['lab']);
        }
        // ensure the json data is a string
        if (data['award'] && !(typeof data['award'] === 'string' || data['award'] instanceof String)) {
            throw new Error("Expected the field `award` to be a primitive type in the JSON string but got " + data['award']);
        }
        // ensure the json data is a string
        if (data['accession'] && !(typeof data['accession'] === 'string' || data['accession'] instanceof String)) {
            throw new Error("Expected the field `accession` to be a primitive type in the JSON string but got " + data['accession']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['alternate_accessions'])) {
            throw new Error("Expected the field `alternate_accessions` to be an array in the JSON data but got " + data['alternate_accessions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['collections'])) {
            throw new Error("Expected the field `collections` to be an array in the JSON data but got " + data['collections']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['revoke_detail'] && !(typeof data['revoke_detail'] === 'string' || data['revoke_detail'] instanceof String)) {
            throw new Error("Expected the field `revoke_detail` to be a primitive type in the JSON string but got " + data['revoke_detail']);
        }
        // ensure the json data is a string
        if (data['schema_version'] && !(typeof data['schema_version'] === 'string' || data['schema_version'] instanceof String)) {
            throw new Error("Expected the field `schema_version` to be a primitive type in the JSON string but got " + data['schema_version']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['aliases'])) {
            throw new Error("Expected the field `aliases` to be an array in the JSON data but got " + data['aliases']);
        }
        // ensure the json data is a string
        if (data['creation_timestamp'] && !(typeof data['creation_timestamp'] === 'string' || data['creation_timestamp'] instanceof String)) {
            throw new Error("Expected the field `creation_timestamp` to be a primitive type in the JSON string but got " + data['creation_timestamp']);
        }
        // ensure the json data is a string
        if (data['submitted_by'] && !(typeof data['submitted_by'] === 'string' || data['submitted_by'] instanceof String)) {
            throw new Error("Expected the field `submitted_by` to be a primitive type in the JSON string but got " + data['submitted_by']);
        }
        // ensure the json data is a string
        if (data['submitter_comment'] && !(typeof data['submitter_comment'] === 'string' || data['submitter_comment'] instanceof String)) {
            throw new Error("Expected the field `submitter_comment` to be a primitive type in the JSON string but got " + data['submitter_comment']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['analysis_step_version'] && !(typeof data['analysis_step_version'] === 'string' || data['analysis_step_version'] instanceof String)) {
            throw new Error("Expected the field `analysis_step_version` to be a primitive type in the JSON string but got " + data['analysis_step_version']);
        }
        // ensure the json data is a string
        if (data['content_md5sum'] && !(typeof data['content_md5sum'] === 'string' || data['content_md5sum'] instanceof String)) {
            throw new Error("Expected the field `content_md5sum` to be a primitive type in the JSON string but got " + data['content_md5sum']);
        }
        // ensure the json data is a string
        if (data['content_type'] && !(typeof data['content_type'] === 'string' || data['content_type'] instanceof String)) {
            throw new Error("Expected the field `content_type` to be a primitive type in the JSON string but got " + data['content_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dbxrefs'])) {
            throw new Error("Expected the field `dbxrefs` to be an array in the JSON data but got " + data['dbxrefs']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['derived_from'])) {
            throw new Error("Expected the field `derived_from` to be an array in the JSON data but got " + data['derived_from']);
        }
        // ensure the json data is a string
        if (data['file_format'] && !(typeof data['file_format'] === 'string' || data['file_format'] instanceof String)) {
            throw new Error("Expected the field `file_format` to be a primitive type in the JSON string but got " + data['file_format']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['file_format_specifications'])) {
            throw new Error("Expected the field `file_format_specifications` to be an array in the JSON data but got " + data['file_format_specifications']);
        }
        // ensure the json data is a string
        if (data['file_set'] && !(typeof data['file_set'] === 'string' || data['file_set'] instanceof String)) {
            throw new Error("Expected the field `file_set` to be a primitive type in the JSON string but got " + data['file_set']);
        }
        // ensure the json data is a string
        if (data['md5sum'] && !(typeof data['md5sum'] === 'string' || data['md5sum'] instanceof String)) {
            throw new Error("Expected the field `md5sum` to be a primitive type in the JSON string but got " + data['md5sum']);
        }
        // ensure the json data is a string
        if (data['submitted_file_name'] && !(typeof data['submitted_file_name'] === 'string' || data['submitted_file_name'] instanceof String)) {
            throw new Error("Expected the field `submitted_file_name` to be a primitive type in the JSON string but got " + data['submitted_file_name']);
        }
        // ensure the json data is a string
        if (data['upload_status'] && !(typeof data['upload_status'] === 'string' || data['upload_status'] instanceof String)) {
            throw new Error("Expected the field `upload_status` to be a primitive type in the JSON string but got " + data['upload_status']);
        }
        // ensure the json data is a string
        if (data['validation_error_detail'] && !(typeof data['validation_error_detail'] === 'string' || data['validation_error_detail'] instanceof String)) {
            throw new Error("Expected the field `validation_error_detail` to be a primitive type in the JSON string but got " + data['validation_error_detail']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['seqspec_of'])) {
            throw new Error("Expected the field `seqspec_of` to be an array in the JSON data but got " + data['seqspec_of']);
        }
        // ensure the json data is a string
        if (data['@id'] && !(typeof data['@id'] === 'string' || data['@id'] instanceof String)) {
            throw new Error("Expected the field `@id` to be a primitive type in the JSON string but got " + data['@id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['@type'])) {
            throw new Error("Expected the field `@type` to be an array in the JSON data but got " + data['@type']);
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['integrated_in'])) {
            throw new Error("Expected the field `integrated_in` to be an array in the JSON data but got " + data['integrated_in']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['input_file_for'])) {
            throw new Error("Expected the field `input_file_for` to be an array in the JSON data but got " + data['input_file_for']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gene_list_for'])) {
            throw new Error("Expected the field `gene_list_for` to be an array in the JSON data but got " + data['gene_list_for']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['loci_list_for'])) {
            throw new Error("Expected the field `loci_list_for` to be an array in the JSON data but got " + data['loci_list_for']);
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['s3_uri'] && !(typeof data['s3_uri'] === 'string' || data['s3_uri'] instanceof String)) {
            throw new Error("Expected the field `s3_uri` to be a primitive type in the JSON string but got " + data['s3_uri']);
        }

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
ConfigurationFile.prototype['release_timestamp'] = undefined;

/**
 * Documents that provide additional information (not data file).
 * @member {Array.<String>} documents
 */
ConfigurationFile.prototype['documents'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
ConfigurationFile.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
ConfigurationFile.prototype['award'] = undefined;

/**
 * A unique identifier to be used to reference the object prefixed with IGVF.
 * @member {String} accession
 */
ConfigurationFile.prototype['accession'] = undefined;

/**
 * Accessions previously assigned to objects that have been merged with this object.
 * @member {Array.<String>} alternate_accessions
 */
ConfigurationFile.prototype['alternate_accessions'] = undefined;

/**
 * Some samples are part of particular data collections.
 * @member {Array.<module:model/ConfigurationFile.CollectionsEnum>} collections
 */
ConfigurationFile.prototype['collections'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/ConfigurationFile.StatusEnum} status
 */
ConfigurationFile.prototype['status'] = undefined;

/**
 * Explanation of why an object was transitioned to the revoked status.
 * @member {String} revoke_detail
 */
ConfigurationFile.prototype['revoke_detail'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
ConfigurationFile.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
ConfigurationFile.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
ConfigurationFile.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
ConfigurationFile.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
ConfigurationFile.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
ConfigurationFile.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
ConfigurationFile.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
ConfigurationFile.prototype['description'] = undefined;

/**
 * The analysis step version of the file.
 * @member {String} analysis_step_version
 */
ConfigurationFile.prototype['analysis_step_version'] = undefined;

/**
 * The MD5sum of the uncompressed file.
 * @member {String} content_md5sum
 */
ConfigurationFile.prototype['content_md5sum'] = undefined;

/**
 * The type of content in the file.
 * @member {String} content_type
 */
ConfigurationFile.prototype['content_type'] = undefined;

/**
 * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects.
 * @member {Array.<String>} dbxrefs
 */
ConfigurationFile.prototype['dbxrefs'] = undefined;

/**
 * The files participating as inputs into software to produce this output file.
 * @member {Array.<String>} derived_from
 */
ConfigurationFile.prototype['derived_from'] = undefined;

/**
 * The file format or extension of the file.
 * @member {module:model/ConfigurationFile.FileFormatEnum} file_format
 */
ConfigurationFile.prototype['file_format'] = undefined;

/**
 * Document that further explains the file format.
 * @member {Array.<String>} file_format_specifications
 */
ConfigurationFile.prototype['file_format_specifications'] = undefined;

/**
 * The file set that this file belongs to.
 * @member {String} file_set
 */
ConfigurationFile.prototype['file_set'] = undefined;

/**
 * File size specified in bytes.
 * @member {Number} file_size
 */
ConfigurationFile.prototype['file_size'] = undefined;

/**
 * The md5sum of the file being transferred.
 * @member {String} md5sum
 */
ConfigurationFile.prototype['md5sum'] = undefined;

/**
 * Original name of the file.
 * @member {String} submitted_file_name
 */
ConfigurationFile.prototype['submitted_file_name'] = undefined;

/**
 * The upload/validation status of the file.
 * @member {module:model/ConfigurationFile.UploadStatusEnum} upload_status
 */
ConfigurationFile.prototype['upload_status'] = undefined;

/**
 * Explanation of why the file failed the automated content checks.
 * @member {String} validation_error_detail
 */
ConfigurationFile.prototype['validation_error_detail'] = undefined;

/**
 * Sequence files this file is a seqspec of.
 * @member {Array.<String>} seqspec_of
 */
ConfigurationFile.prototype['seqspec_of'] = undefined;

/**
 * @member {String} @id
 */
ConfigurationFile.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
ConfigurationFile.prototype['@type'] = undefined;

/**
 * A summary of the configuration file.
 * @member {String} summary
 */
ConfigurationFile.prototype['summary'] = undefined;

/**
 * Construct library set(s) that this file was used for in insert design.
 * @member {Array.<String>} integrated_in
 */
ConfigurationFile.prototype['integrated_in'] = undefined;

/**
 * The files which are derived from this file.
 * @member {Array.<String>} input_file_for
 */
ConfigurationFile.prototype['input_file_for'] = undefined;

/**
 * File Set(s) that this file is a gene list for.
 * @member {Array.<String>} gene_list_for
 */
ConfigurationFile.prototype['gene_list_for'] = undefined;

/**
 * File Set(s) that this file is a loci list for.
 * @member {Array.<String>} loci_list_for
 */
ConfigurationFile.prototype['loci_list_for'] = undefined;

/**
 * The download path to obtain file.
 * @member {String} href
 */
ConfigurationFile.prototype['href'] = undefined;

/**
 * The S3 URI of public file object.
 * @member {String} s3_uri
 */
ConfigurationFile.prototype['s3_uri'] = undefined;

/**
 * The upload credentials for S3 to submit the file content.
 * @member {Object} upload_credentials
 */
ConfigurationFile.prototype['upload_credentials'] = undefined;





/**
 * Allowed values for the <code>collections</code> property.
 * @enum {String}
 * @readonly
 */
ConfigurationFile['CollectionsEnum'] = {

    /**
     * value: "ClinGen"
     * @const
     */
    "ClinGen": "ClinGen",

    /**
     * value: "ENCODE"
     * @const
     */
    "ENCODE": "ENCODE",

    /**
     * value: "GREGoR"
     * @const
     */
    "GREGoR": "GREGoR",

    /**
     * value: "IGVF_catalog_beta_v0.1"
     * @const
     */
    "IGVF_catalog_beta_v0.1": "IGVF_catalog_beta_v0.1",

    /**
     * value: "IGVF_catalog_beta_v0.2"
     * @const
     */
    "IGVF_catalog_beta_v0.2": "IGVF_catalog_beta_v0.2",

    /**
     * value: "IGVF_catalog_beta_v0.3"
     * @const
     */
    "IGVF_catalog_beta_v0.3": "IGVF_catalog_beta_v0.3",

    /**
     * value: "IGVF_catalog_beta_v0.4"
     * @const
     */
    "IGVF_catalog_beta_v0.4": "IGVF_catalog_beta_v0.4",

    /**
     * value: "MaveDB"
     * @const
     */
    "MaveDB": "MaveDB",

    /**
     * value: "MPRAbase"
     * @const
     */
    "MPRAbase": "MPRAbase",

    /**
     * value: "Vista"
     * @const
     */
    "Vista": "Vista"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ConfigurationFile['StatusEnum'] = {

    /**
     * value: "in progress"
     * @const
     */
    "in progress": "in progress",

    /**
     * value: "released"
     * @const
     */
    "released": "released",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "replaced"
     * @const
     */
    "replaced": "replaced",

    /**
     * value: "revoked"
     * @const
     */
    "revoked": "revoked",

    /**
     * value: "archived"
     * @const
     */
    "archived": "archived"
};


/**
 * Allowed values for the <code>file_format</code> property.
 * @enum {String}
 * @readonly
 */
ConfigurationFile['FileFormatEnum'] = {

    /**
     * value: "yaml"
     * @const
     */
    "yaml": "yaml"
};


/**
 * Allowed values for the <code>upload_status</code> property.
 * @enum {String}
 * @readonly
 */
ConfigurationFile['UploadStatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "file not found"
     * @const
     */
    "file not found": "file not found",

    /**
     * value: "invalidated"
     * @const
     */
    "invalidated": "invalidated",

    /**
     * value: "validated"
     * @const
     */
    "validated": "validated"
};



export default ConfigurationFile;

