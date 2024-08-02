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
 * The AuxiliarySet model module.
 * @module model/AuxiliarySet
 * @version 0.1.0
 */
class AuxiliarySet {
    /**
     * Constructs a new <code>AuxiliarySet</code>.
     * Auxiliary set is a file set that hosts raw data files (e.g. FASTQs) resulting from sequencing of nucleic acids of a sample that are a proxy to some vital information and necessary for the analysis of an associated measurement set. Auxiliary sets usually would not provide any information about the transcriptome or the genome of the sample in question. For example auxiliary sets would include the sequencing of barcodes that correspond to the elements introduced into cells, or sequencing of guide RNA coding sequences in the cells. The files hosted in the auxiliary sets are relevant for the analysis, but they by themselves are not assessing much of the biology of the sample being analyzed.
     * @alias module:model/AuxiliarySet
     */
    constructor() { 
        
        AuxiliarySet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuxiliarySet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuxiliarySet} obj Optional instance to populate.
     * @return {module:model/AuxiliarySet} The populated <code>AuxiliarySet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuxiliarySet();

            if (data.hasOwnProperty('release_timestamp')) {
                obj['release_timestamp'] = ApiClient.convertToType(data['release_timestamp'], 'String');
            }
            if (data.hasOwnProperty('publications')) {
                obj['publications'] = ApiClient.convertToType(data['publications'], ['String']);
            }
            if (data.hasOwnProperty('publication_identifiers')) {
                obj['publication_identifiers'] = ApiClient.convertToType(data['publication_identifiers'], ['String']);
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
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
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
            if (data.hasOwnProperty('dbxrefs')) {
                obj['dbxrefs'] = ApiClient.convertToType(data['dbxrefs'], ['String']);
            }
            if (data.hasOwnProperty('samples')) {
                obj['samples'] = ApiClient.convertToType(data['samples'], ['String']);
            }
            if (data.hasOwnProperty('donors')) {
                obj['donors'] = ApiClient.convertToType(data['donors'], ['String']);
            }
            if (data.hasOwnProperty('file_set_type')) {
                obj['file_set_type'] = ApiClient.convertToType(data['file_set_type'], 'String');
            }
            if (data.hasOwnProperty('library_construction_platform')) {
                obj['library_construction_platform'] = ApiClient.convertToType(data['library_construction_platform'], 'String');
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
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], ['String']);
            }
            if (data.hasOwnProperty('control_for')) {
                obj['control_for'] = ApiClient.convertToType(data['control_for'], ['String']);
            }
            if (data.hasOwnProperty('submitted_files_timestamp')) {
                obj['submitted_files_timestamp'] = ApiClient.convertToType(data['submitted_files_timestamp'], 'String');
            }
            if (data.hasOwnProperty('input_file_set_for')) {
                obj['input_file_set_for'] = ApiClient.convertToType(data['input_file_set_for'], ['String']);
            }
            if (data.hasOwnProperty('measurement_sets')) {
                obj['measurement_sets'] = ApiClient.convertToType(data['measurement_sets'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuxiliarySet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuxiliarySet</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['release_timestamp'] && !(typeof data['release_timestamp'] === 'string' || data['release_timestamp'] instanceof String)) {
            throw new Error("Expected the field `release_timestamp` to be a primitive type in the JSON string but got " + data['release_timestamp']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['publications'])) {
            throw new Error("Expected the field `publications` to be an array in the JSON data but got " + data['publications']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['publication_identifiers'])) {
            throw new Error("Expected the field `publication_identifiers` to be an array in the JSON data but got " + data['publication_identifiers']);
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
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['dbxrefs'])) {
            throw new Error("Expected the field `dbxrefs` to be an array in the JSON data but got " + data['dbxrefs']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['samples'])) {
            throw new Error("Expected the field `samples` to be an array in the JSON data but got " + data['samples']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['donors'])) {
            throw new Error("Expected the field `donors` to be an array in the JSON data but got " + data['donors']);
        }
        // ensure the json data is a string
        if (data['file_set_type'] && !(typeof data['file_set_type'] === 'string' || data['file_set_type'] instanceof String)) {
            throw new Error("Expected the field `file_set_type` to be a primitive type in the JSON string but got " + data['file_set_type']);
        }
        // ensure the json data is a string
        if (data['library_construction_platform'] && !(typeof data['library_construction_platform'] === 'string' || data['library_construction_platform'] instanceof String)) {
            throw new Error("Expected the field `library_construction_platform` to be a primitive type in the JSON string but got " + data['library_construction_platform']);
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
        if (!Array.isArray(data['files'])) {
            throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['control_for'])) {
            throw new Error("Expected the field `control_for` to be an array in the JSON data but got " + data['control_for']);
        }
        // ensure the json data is a string
        if (data['submitted_files_timestamp'] && !(typeof data['submitted_files_timestamp'] === 'string' || data['submitted_files_timestamp'] instanceof String)) {
            throw new Error("Expected the field `submitted_files_timestamp` to be a primitive type in the JSON string but got " + data['submitted_files_timestamp']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['input_file_set_for'])) {
            throw new Error("Expected the field `input_file_set_for` to be an array in the JSON data but got " + data['input_file_set_for']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['measurement_sets'])) {
            throw new Error("Expected the field `measurement_sets` to be an array in the JSON data but got " + data['measurement_sets']);
        }

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
AuxiliarySet.prototype['release_timestamp'] = undefined;

/**
 * The publications associated with this object.
 * @member {Array.<String>} publications
 */
AuxiliarySet.prototype['publications'] = undefined;

/**
 * The publication identifiers that provide more information about the object.
 * @member {Array.<String>} publication_identifiers
 */
AuxiliarySet.prototype['publication_identifiers'] = undefined;

/**
 * Documents that provide additional information (not data file).
 * @member {Array.<String>} documents
 */
AuxiliarySet.prototype['documents'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
AuxiliarySet.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
AuxiliarySet.prototype['award'] = undefined;

/**
 * A unique identifier to be used to reference the object prefixed with IGVF.
 * @member {String} accession
 */
AuxiliarySet.prototype['accession'] = undefined;

/**
 * Accessions previously assigned to objects that have been merged with this object.
 * @member {Array.<String>} alternate_accessions
 */
AuxiliarySet.prototype['alternate_accessions'] = undefined;

/**
 * Some samples are part of particular data collections.
 * @member {Array.<module:model/AuxiliarySet.CollectionsEnum>} collections
 */
AuxiliarySet.prototype['collections'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/AuxiliarySet.StatusEnum} status
 */
AuxiliarySet.prototype['status'] = undefined;

/**
 * Explanation of why an object was transitioned to the revoked status.
 * @member {String} revoke_detail
 */
AuxiliarySet.prototype['revoke_detail'] = undefined;

/**
 * An external resource with additional information.
 * @member {String} url
 */
AuxiliarySet.prototype['url'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
AuxiliarySet.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
AuxiliarySet.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
AuxiliarySet.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
AuxiliarySet.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
AuxiliarySet.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
AuxiliarySet.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
AuxiliarySet.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
AuxiliarySet.prototype['description'] = undefined;

/**
 * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets.
 * @member {Array.<String>} dbxrefs
 */
AuxiliarySet.prototype['dbxrefs'] = undefined;

/**
 * The sample(s) associated with this file set.
 * @member {Array.<String>} samples
 */
AuxiliarySet.prototype['samples'] = undefined;

/**
 * The donors of the samples associated with this auxiliary set.
 * @member {Array.<String>} donors
 */
AuxiliarySet.prototype['donors'] = undefined;

/**
 * The category that best describes this auxiliary file set.
 * @member {module:model/AuxiliarySet.FileSetTypeEnum} file_set_type
 */
AuxiliarySet.prototype['file_set_type'] = undefined;

/**
 * The platform used to construct the library sequenced in this auxiliary set.
 * @member {String} library_construction_platform
 */
AuxiliarySet.prototype['library_construction_platform'] = undefined;

/**
 * @member {String} @id
 */
AuxiliarySet.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
AuxiliarySet.prototype['@type'] = undefined;

/**
 * @member {String} summary
 */
AuxiliarySet.prototype['summary'] = undefined;

/**
 * The files associated with this file set.
 * @member {Array.<String>} files
 */
AuxiliarySet.prototype['files'] = undefined;

/**
 * The file sets for which this file set is a control.
 * @member {Array.<String>} control_for
 */
AuxiliarySet.prototype['control_for'] = undefined;

/**
 * The timestamp the first file object in the file_set or associated auxiliary sets was created.
 * @member {String} submitted_files_timestamp
 */
AuxiliarySet.prototype['submitted_files_timestamp'] = undefined;

/**
 * The file sets that use this file set as an input.
 * @member {Array.<String>} input_file_set_for
 */
AuxiliarySet.prototype['input_file_set_for'] = undefined;

/**
 * The measurement sets that link to this auxiliary set.
 * @member {Array.<String>} measurement_sets
 */
AuxiliarySet.prototype['measurement_sets'] = undefined;





/**
 * Allowed values for the <code>collections</code> property.
 * @enum {String}
 * @readonly
 */
AuxiliarySet['CollectionsEnum'] = {

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
AuxiliarySet['StatusEnum'] = {

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
 * Allowed values for the <code>file_set_type</code> property.
 * @enum {String}
 * @readonly
 */
AuxiliarySet['FileSetTypeEnum'] = {

    /**
     * value: "cell hashing"
     * @const
     */
    "cell hashing": "cell hashing",

    /**
     * value: "cell sorting"
     * @const
     */
    "cell sorting": "cell sorting",

    /**
     * value: "circularized RNA barcode detection"
     * @const
     */
    "circularized RNA barcode detection": "circularized RNA barcode detection",

    /**
     * value: "gRNA sequencing"
     * @const
     */
    "gRNA sequencing": "gRNA sequencing",

    /**
     * value: "oligo-conjugated lipids"
     * @const
     */
    "oligo-conjugated lipids": "oligo-conjugated lipids",

    /**
     * value: "quantification DNA barcode sequencing"
     * @const
     */
    "quantification DNA barcode sequencing": "quantification DNA barcode sequencing",

    /**
     * value: "variant sequencing"
     * @const
     */
    "variant sequencing": "variant sequencing"
};



export default AuxiliarySet;
