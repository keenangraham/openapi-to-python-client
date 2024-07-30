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
 * The PhenotypeTerm model module.
 * @module model/PhenotypeTerm
 * @version 0.1.0
 */
class PhenotypeTerm {
    /**
     * Constructs a new <code>PhenotypeTerm</code>.
     * An ontology term from Experimental Factor Ontology (EFO), Human Disease Ontology (DOID), Human Phenotype Ontology (HP), Mondo Disease Ontology (MONDO), National Cancer Institute Thesaurus (NCIT), or Ontology of Biological Attributes (OBA) for phenotypes, diseases, and traits.
     * @alias module:model/PhenotypeTerm
     */
    constructor() { 
        
        PhenotypeTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PhenotypeTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhenotypeTerm} obj Optional instance to populate.
     * @return {module:model/PhenotypeTerm} The populated <code>PhenotypeTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhenotypeTerm();

            if (data.hasOwnProperty('release_timestamp')) {
                obj['release_timestamp'] = ApiClient.convertToType(data['release_timestamp'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
            if (data.hasOwnProperty('term_id')) {
                obj['term_id'] = ApiClient.convertToType(data['term_id'], 'String');
            }
            if (data.hasOwnProperty('term_name')) {
                obj['term_name'] = ApiClient.convertToType(data['term_name'], 'String');
            }
            if (data.hasOwnProperty('deprecated_ntr_terms')) {
                obj['deprecated_ntr_terms'] = ApiClient.convertToType(data['deprecated_ntr_terms'], ['String']);
            }
            if (data.hasOwnProperty('is_a')) {
                obj['is_a'] = ApiClient.convertToType(data['is_a'], ['String']);
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('synonyms')) {
                obj['synonyms'] = ApiClient.convertToType(data['synonyms'], ['String']);
            }
            if (data.hasOwnProperty('ancestors')) {
                obj['ancestors'] = ApiClient.convertToType(data['ancestors'], ['String']);
            }
            if (data.hasOwnProperty('ontology')) {
                obj['ontology'] = ApiClient.convertToType(data['ontology'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhenotypeTerm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhenotypeTerm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['release_timestamp'] && !(typeof data['release_timestamp'] === 'string' || data['release_timestamp'] instanceof String)) {
            throw new Error("Expected the field `release_timestamp` to be a primitive type in the JSON string but got " + data['release_timestamp']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
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
        if (data['term_id'] && !(typeof data['term_id'] === 'string' || data['term_id'] instanceof String)) {
            throw new Error("Expected the field `term_id` to be a primitive type in the JSON string but got " + data['term_id']);
        }
        // ensure the json data is a string
        if (data['term_name'] && !(typeof data['term_name'] === 'string' || data['term_name'] instanceof String)) {
            throw new Error("Expected the field `term_name` to be a primitive type in the JSON string but got " + data['term_name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['deprecated_ntr_terms'])) {
            throw new Error("Expected the field `deprecated_ntr_terms` to be an array in the JSON data but got " + data['deprecated_ntr_terms']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['is_a'])) {
            throw new Error("Expected the field `is_a` to be an array in the JSON data but got " + data['is_a']);
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
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['synonyms'])) {
            throw new Error("Expected the field `synonyms` to be an array in the JSON data but got " + data['synonyms']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ancestors'])) {
            throw new Error("Expected the field `ancestors` to be an array in the JSON data but got " + data['ancestors']);
        }
        // ensure the json data is a string
        if (data['ontology'] && !(typeof data['ontology'] === 'string' || data['ontology'] instanceof String)) {
            throw new Error("Expected the field `ontology` to be a primitive type in the JSON string but got " + data['ontology']);
        }

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
PhenotypeTerm.prototype['release_timestamp'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/PhenotypeTerm.StatusEnum} status
 */
PhenotypeTerm.prototype['status'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
PhenotypeTerm.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
PhenotypeTerm.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
PhenotypeTerm.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
PhenotypeTerm.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
PhenotypeTerm.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
PhenotypeTerm.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
PhenotypeTerm.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
PhenotypeTerm.prototype['description'] = undefined;

/**
 * An ontology term identifier describing a phenotype.
 * @member {String} term_id
 */
PhenotypeTerm.prototype['term_id'] = undefined;

/**
 * Ontology term describing a biological sample, assay, trait, or disease.
 * @member {String} term_name
 */
PhenotypeTerm.prototype['term_name'] = undefined;

/**
 * A list of deprecated NTR terms previously associated with this ontology term.
 * @member {Array.<String>} deprecated_ntr_terms
 */
PhenotypeTerm.prototype['deprecated_ntr_terms'] = undefined;

/**
 * A list of ontology terms which are the nearest ancestor to this ontology term.
 * @member {Array.<String>} is_a
 */
PhenotypeTerm.prototype['is_a'] = undefined;

/**
 * @member {String} @id
 */
PhenotypeTerm.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
PhenotypeTerm.prototype['@type'] = undefined;

/**
 * A summary of the ontology term.
 * @member {String} summary
 */
PhenotypeTerm.prototype['summary'] = undefined;

/**
 * A unique identifier for the ontology term, reformatted from the original term ID.
 * @member {String} name
 */
PhenotypeTerm.prototype['name'] = undefined;

/**
 * Synonyms for the term that have been recorded in an ontology.
 * @member {Array.<String>} synonyms
 */
PhenotypeTerm.prototype['synonyms'] = undefined;

/**
 * List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified.
 * @member {Array.<String>} ancestors
 */
PhenotypeTerm.prototype['ancestors'] = undefined;

/**
 * The ontology in which the term is recorded.
 * @member {String} ontology
 */
PhenotypeTerm.prototype['ontology'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PhenotypeTerm['StatusEnum'] = {

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



export default PhenotypeTerm;

