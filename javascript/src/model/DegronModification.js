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
 * The DegronModification model module.
 * @module model/DegronModification
 * @version 0.1.0
 */
class DegronModification {
    /**
     * Constructs a new <code>DegronModification</code>.
     * A degron modification that can induce degradation of a protein.
     * @alias module:model/DegronModification
     */
    constructor() { 
        
        DegronModification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DegronModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegronModification} obj Optional instance to populate.
     * @return {module:model/DegronModification} The populated <code>DegronModification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DegronModification();

            if (data.hasOwnProperty('release_timestamp')) {
                obj['release_timestamp'] = ApiClient.convertToType(data['release_timestamp'], 'String');
            }
            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], ['String']);
            }
            if (data.hasOwnProperty('lot_id')) {
                obj['lot_id'] = ApiClient.convertToType(data['lot_id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('lab')) {
                obj['lab'] = ApiClient.convertToType(data['lab'], 'String');
            }
            if (data.hasOwnProperty('award')) {
                obj['award'] = ApiClient.convertToType(data['award'], 'String');
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
            if (data.hasOwnProperty('activated')) {
                obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
            }
            if (data.hasOwnProperty('activating_agent_term_id')) {
                obj['activating_agent_term_id'] = ApiClient.convertToType(data['activating_agent_term_id'], 'String');
            }
            if (data.hasOwnProperty('activating_agent_term_name')) {
                obj['activating_agent_term_name'] = ApiClient.convertToType(data['activating_agent_term_name'], 'String');
            }
            if (data.hasOwnProperty('modality')) {
                obj['modality'] = ApiClient.convertToType(data['modality'], 'String');
            }
            if (data.hasOwnProperty('degron_system')) {
                obj['degron_system'] = ApiClient.convertToType(data['degron_system'], 'String');
            }
            if (data.hasOwnProperty('tagged_proteins')) {
                obj['tagged_proteins'] = ApiClient.convertToType(data['tagged_proteins'], ['String']);
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
            if (data.hasOwnProperty('biosamples_modified')) {
                obj['biosamples_modified'] = ApiClient.convertToType(data['biosamples_modified'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DegronModification</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DegronModification</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['release_timestamp'] && !(typeof data['release_timestamp'] === 'string' || data['release_timestamp'] instanceof String)) {
            throw new Error("Expected the field `release_timestamp` to be a primitive type in the JSON string but got " + data['release_timestamp']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sources'])) {
            throw new Error("Expected the field `sources` to be an array in the JSON data but got " + data['sources']);
        }
        // ensure the json data is a string
        if (data['lot_id'] && !(typeof data['lot_id'] === 'string' || data['lot_id'] instanceof String)) {
            throw new Error("Expected the field `lot_id` to be a primitive type in the JSON string but got " + data['lot_id']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['documents'])) {
            throw new Error("Expected the field `documents` to be an array in the JSON data but got " + data['documents']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
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
        if (data['activating_agent_term_id'] && !(typeof data['activating_agent_term_id'] === 'string' || data['activating_agent_term_id'] instanceof String)) {
            throw new Error("Expected the field `activating_agent_term_id` to be a primitive type in the JSON string but got " + data['activating_agent_term_id']);
        }
        // ensure the json data is a string
        if (data['activating_agent_term_name'] && !(typeof data['activating_agent_term_name'] === 'string' || data['activating_agent_term_name'] instanceof String)) {
            throw new Error("Expected the field `activating_agent_term_name` to be a primitive type in the JSON string but got " + data['activating_agent_term_name']);
        }
        // ensure the json data is a string
        if (data['modality'] && !(typeof data['modality'] === 'string' || data['modality'] instanceof String)) {
            throw new Error("Expected the field `modality` to be a primitive type in the JSON string but got " + data['modality']);
        }
        // ensure the json data is a string
        if (data['degron_system'] && !(typeof data['degron_system'] === 'string' || data['degron_system'] instanceof String)) {
            throw new Error("Expected the field `degron_system` to be a primitive type in the JSON string but got " + data['degron_system']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tagged_proteins'])) {
            throw new Error("Expected the field `tagged_proteins` to be an array in the JSON data but got " + data['tagged_proteins']);
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
        if (!Array.isArray(data['biosamples_modified'])) {
            throw new Error("Expected the field `biosamples_modified` to be an array in the JSON data but got " + data['biosamples_modified']);
        }

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
DegronModification.prototype['release_timestamp'] = undefined;

/**
 * The originating lab(s) or vendor(s).
 * @member {Array.<String>} sources
 */
DegronModification.prototype['sources'] = undefined;

/**
 * The lot identifier provided by the originating lab or vendor.
 * @member {String} lot_id
 */
DegronModification.prototype['lot_id'] = undefined;

/**
 * The product or catalog identifier provided following deposition to addgene.org.
 * @member {String} product_id
 */
DegronModification.prototype['product_id'] = undefined;

/**
 * Documents that provide additional information (not data file).
 * @member {Array.<String>} documents
 */
DegronModification.prototype['documents'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/DegronModification.StatusEnum} status
 */
DegronModification.prototype['status'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
DegronModification.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
DegronModification.prototype['award'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
DegronModification.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
DegronModification.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
DegronModification.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
DegronModification.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
DegronModification.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
DegronModification.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
DegronModification.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
DegronModification.prototype['description'] = undefined;

/**
 * A boolean indicating whether the modification has been activated by a chemical agent.
 * @member {Boolean} activated
 */
DegronModification.prototype['activated'] = undefined;

/**
 * The CHEBI identifier for the activating agent of the modification.
 * @member {String} activating_agent_term_id
 */
DegronModification.prototype['activating_agent_term_id'] = undefined;

/**
 * The CHEBI name for the activating agent of the modification.
 * @member {String} activating_agent_term_name
 */
DegronModification.prototype['activating_agent_term_name'] = undefined;

/**
 * The purpose or intended effect of a modification.
 * @member {module:model/DegronModification.ModalityEnum} modality
 */
DegronModification.prototype['modality'] = undefined;

/**
 * The type of degron system implemented.
 * @member {module:model/DegronModification.DegronSystemEnum} degron_system
 */
DegronModification.prototype['degron_system'] = undefined;

/**
 * The tagged proteins which are targeted for degradation.
 * @member {Array.<String>} tagged_proteins
 */
DegronModification.prototype['tagged_proteins'] = undefined;

/**
 * @member {String} @id
 */
DegronModification.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
DegronModification.prototype['@type'] = undefined;

/**
 * @member {String} summary
 */
DegronModification.prototype['summary'] = undefined;

/**
 * The biosamples which have been modified with this modification.
 * @member {Array.<String>} biosamples_modified
 */
DegronModification.prototype['biosamples_modified'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
DegronModification['StatusEnum'] = {

    /**
     * value: "archived"
     * @const
     */
    "archived": "archived",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "in progress"
     * @const
     */
    "in progress": "in progress",

    /**
     * value: "released"
     * @const
     */
    "released": "released"
};


/**
 * Allowed values for the <code>modality</code> property.
 * @enum {String}
 * @readonly
 */
DegronModification['ModalityEnum'] = {

    /**
     * value: "degradation"
     * @const
     */
    "degradation": "degradation"
};


/**
 * Allowed values for the <code>degron_system</code> property.
 * @enum {String}
 * @readonly
 */
DegronModification['DegronSystemEnum'] = {

    /**
     * value: "AID"
     * @const
     */
    "AID": "AID",

    /**
     * value: "AlissAid"
     * @const
     */
    "AlissAid": "AlissAid",

    /**
     * value: "ssAID"
     * @const
     */
    "ssAID": "ssAID"
};



export default DegronModification;

