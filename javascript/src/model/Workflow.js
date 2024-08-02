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
 * The Workflow model module.
 * @module model/Workflow
 * @version 0.1.0
 */
class Workflow {
    /**
     * Constructs a new <code>Workflow</code>.
     * A workflow for computational analysis of genomic data. A workflow is made up of analysis steps.
     * @alias module:model/Workflow
     */
    constructor() { 
        
        Workflow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Workflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workflow} obj Optional instance to populate.
     * @return {module:model/Workflow} The populated <code>Workflow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Workflow();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source_url')) {
                obj['source_url'] = ApiClient.convertToType(data['source_url'], 'String');
            }
            if (data.hasOwnProperty('workflow_repositories')) {
                obj['workflow_repositories'] = ApiClient.convertToType(data['workflow_repositories'], ['String']);
            }
            if (data.hasOwnProperty('standards_page')) {
                obj['standards_page'] = ApiClient.convertToType(data['standards_page'], 'String');
            }
            if (data.hasOwnProperty('workflow_version')) {
                obj['workflow_version'] = ApiClient.convertToType(data['workflow_version'], 'Number');
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
            if (data.hasOwnProperty('analysis_steps')) {
                obj['analysis_steps'] = ApiClient.convertToType(data['analysis_steps'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Workflow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Workflow</code>.
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['source_url'] && !(typeof data['source_url'] === 'string' || data['source_url'] instanceof String)) {
            throw new Error("Expected the field `source_url` to be a primitive type in the JSON string but got " + data['source_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['workflow_repositories'])) {
            throw new Error("Expected the field `workflow_repositories` to be an array in the JSON data but got " + data['workflow_repositories']);
        }
        // ensure the json data is a string
        if (data['standards_page'] && !(typeof data['standards_page'] === 'string' || data['standards_page'] instanceof String)) {
            throw new Error("Expected the field `standards_page` to be a primitive type in the JSON string but got " + data['standards_page']);
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
        if (!Array.isArray(data['analysis_steps'])) {
            throw new Error("Expected the field `analysis_steps` to be an array in the JSON data but got " + data['analysis_steps']);
        }

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
Workflow.prototype['release_timestamp'] = undefined;

/**
 * The publications associated with this object.
 * @member {Array.<String>} publications
 */
Workflow.prototype['publications'] = undefined;

/**
 * The publication identifiers that provide more information about the object.
 * @member {Array.<String>} publication_identifiers
 */
Workflow.prototype['publication_identifiers'] = undefined;

/**
 * Documents that provide additional information (not data file).
 * @member {Array.<String>} documents
 */
Workflow.prototype['documents'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
Workflow.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
Workflow.prototype['award'] = undefined;

/**
 * A unique identifier to be used to reference the object prefixed with IGVF.
 * @member {String} accession
 */
Workflow.prototype['accession'] = undefined;

/**
 * Accessions previously assigned to objects that have been merged with this object.
 * @member {Array.<String>} alternate_accessions
 */
Workflow.prototype['alternate_accessions'] = undefined;

/**
 * Some samples are part of particular data collections.
 * @member {Array.<module:model/Workflow.CollectionsEnum>} collections
 */
Workflow.prototype['collections'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/Workflow.StatusEnum} status
 */
Workflow.prototype['status'] = undefined;

/**
 * Explanation of why an object was transitioned to the revoked status.
 * @member {String} revoke_detail
 */
Workflow.prototype['revoke_detail'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
Workflow.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
Workflow.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
Workflow.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
Workflow.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
Workflow.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
Workflow.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
Workflow.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
Workflow.prototype['description'] = undefined;

/**
 * The preferred viewable name of the workflow.
 * @member {String} name
 */
Workflow.prototype['name'] = undefined;

/**
 * An external resource to the code base of the workflow in github.
 * @member {String} source_url
 */
Workflow.prototype['source_url'] = undefined;

/**
 * Resources hosting the workflow.
 * @member {Array.<String>} workflow_repositories
 */
Workflow.prototype['workflow_repositories'] = undefined;

/**
 * A link to a page describing the standards for this workflow.
 * @member {String} standards_page
 */
Workflow.prototype['standards_page'] = undefined;

/**
 * The version of this workflow.
 * @member {Number} workflow_version
 */
Workflow.prototype['workflow_version'] = undefined;

/**
 * @member {String} @id
 */
Workflow.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
Workflow.prototype['@type'] = undefined;

/**
 * A summary of the object.
 * @member {String} summary
 */
Workflow.prototype['summary'] = undefined;

/**
 * The analysis steps which are part of this workflow.
 * @member {Array.<String>} analysis_steps
 */
Workflow.prototype['analysis_steps'] = undefined;





/**
 * Allowed values for the <code>collections</code> property.
 * @enum {String}
 * @readonly
 */
Workflow['CollectionsEnum'] = {

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
Workflow['StatusEnum'] = {

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



export default Workflow;
