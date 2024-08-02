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
 * The PhenotypicFeature model module.
 * @module model/PhenotypicFeature
 * @version 0.1.0
 */
class PhenotypicFeature {
    /**
     * Constructs a new <code>PhenotypicFeature</code>.
     * A phenotypic feature of a donor the sample is coming from. For example, the donor’s height measured at the time of sample collection.
     * @alias module:model/PhenotypicFeature
     */
    constructor() { 
        
        PhenotypicFeature.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PhenotypicFeature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhenotypicFeature} obj Optional instance to populate.
     * @return {module:model/PhenotypicFeature} The populated <code>PhenotypicFeature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhenotypicFeature();

            if (data.hasOwnProperty('release_timestamp')) {
                obj['release_timestamp'] = ApiClient.convertToType(data['release_timestamp'], 'String');
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
            if (data.hasOwnProperty('feature')) {
                obj['feature'] = ApiClient.convertToType(data['feature'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('quantity_units')) {
                obj['quantity_units'] = ApiClient.convertToType(data['quantity_units'], 'String');
            }
            if (data.hasOwnProperty('observation_date')) {
                obj['observation_date'] = ApiClient.convertToType(data['observation_date'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhenotypicFeature</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhenotypicFeature</code>.
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
        if (data['feature'] && !(typeof data['feature'] === 'string' || data['feature'] instanceof String)) {
            throw new Error("Expected the field `feature` to be a primitive type in the JSON string but got " + data['feature']);
        }
        // ensure the json data is a string
        if (data['quantity_units'] && !(typeof data['quantity_units'] === 'string' || data['quantity_units'] instanceof String)) {
            throw new Error("Expected the field `quantity_units` to be a primitive type in the JSON string but got " + data['quantity_units']);
        }
        // ensure the json data is a string
        if (data['observation_date'] && !(typeof data['observation_date'] === 'string' || data['observation_date'] instanceof String)) {
            throw new Error("Expected the field `observation_date` to be a primitive type in the JSON string but got " + data['observation_date']);
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

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
PhenotypicFeature.prototype['release_timestamp'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/PhenotypicFeature.StatusEnum} status
 */
PhenotypicFeature.prototype['status'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
PhenotypicFeature.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
PhenotypicFeature.prototype['award'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
PhenotypicFeature.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
PhenotypicFeature.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
PhenotypicFeature.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
PhenotypicFeature.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
PhenotypicFeature.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
PhenotypicFeature.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
PhenotypicFeature.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
PhenotypicFeature.prototype['description'] = undefined;

/**
 * The phenotypic feature observed for the donor.
 * @member {String} feature
 */
PhenotypicFeature.prototype['feature'] = undefined;

/**
 * A quantity associated with the phenotypic feature, if applicable.
 * @member {Number} quantity
 */
PhenotypicFeature.prototype['quantity'] = undefined;

/**
 * The unit of measurement for a quantity associated with the phenotypic feature.
 * @member {module:model/PhenotypicFeature.QuantityUnitsEnum} quantity_units
 */
PhenotypicFeature.prototype['quantity_units'] = undefined;

/**
 * The date the feature was observed or measured.
 * @member {String} observation_date
 */
PhenotypicFeature.prototype['observation_date'] = undefined;

/**
 * @member {String} @id
 */
PhenotypicFeature.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
PhenotypicFeature.prototype['@type'] = undefined;

/**
 * A summary of the object.
 * @member {String} summary
 */
PhenotypicFeature.prototype['summary'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PhenotypicFeature['StatusEnum'] = {

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
 * Allowed values for the <code>quantity_units</code> property.
 * @enum {String}
 * @readonly
 */
PhenotypicFeature['QuantityUnitsEnum'] = {

    /**
     * value: "meter"
     * @const
     */
    "meter": "meter",

    /**
     * value: "micromole"
     * @const
     */
    "micromole": "micromole",

    /**
     * value: "nanogram"
     * @const
     */
    "nanogram": "nanogram",

    /**
     * value: "microgram"
     * @const
     */
    "microgram": "microgram",

    /**
     * value: "milligram"
     * @const
     */
    "milligram": "milligram",

    /**
     * value: "gram"
     * @const
     */
    "gram": "gram",

    /**
     * value: "kilogram"
     * @const
     */
    "kilogram": "kilogram",

    /**
     * value: "milli-International Unit per milliliter"
     * @const
     */
    "milli-International Unit per milliliter": "milli-International Unit per milliliter",

    /**
     * value: "picogram per milliliter"
     * @const
     */
    "picogram per milliliter": "picogram per milliliter",

    /**
     * value: "nanogram per milliliter"
     * @const
     */
    "nanogram per milliliter": "nanogram per milliliter",

    /**
     * value: "milligram per deciliter"
     * @const
     */
    "milligram per deciliter": "milligram per deciliter"
};



export default PhenotypicFeature;
