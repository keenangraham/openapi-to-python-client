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
 * The SoftwareVersion model module.
 * @module model/SoftwareVersion
 * @version 0.1.0
 */
class SoftwareVersion {
    /**
     * Constructs a new <code>SoftwareVersion</code>.
     * A specific version of a software used for computational analysis. For example, Bowtie2 v2.3.0.
     * @alias module:model/SoftwareVersion
     */
    constructor() { 
        
        SoftwareVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SoftwareVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SoftwareVersion} obj Optional instance to populate.
     * @return {module:model/SoftwareVersion} The populated <code>SoftwareVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SoftwareVersion();

            if (data.hasOwnProperty('release_timestamp')) {
                obj['release_timestamp'] = ApiClient.convertToType(data['release_timestamp'], 'String');
            }
            if (data.hasOwnProperty('publications')) {
                obj['publications'] = ApiClient.convertToType(data['publications'], ['String']);
            }
            if (data.hasOwnProperty('publication_identifiers')) {
                obj['publication_identifiers'] = ApiClient.convertToType(data['publication_identifiers'], ['String']);
            }
            if (data.hasOwnProperty('lab')) {
                obj['lab'] = ApiClient.convertToType(data['lab'], 'String');
            }
            if (data.hasOwnProperty('award')) {
                obj['award'] = ApiClient.convertToType(data['award'], 'String');
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
            if (data.hasOwnProperty('software')) {
                obj['software'] = ApiClient.convertToType(data['software'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('download_id')) {
                obj['download_id'] = ApiClient.convertToType(data['download_id'], 'String');
            }
            if (data.hasOwnProperty('downloaded_url')) {
                obj['downloaded_url'] = ApiClient.convertToType(data['downloaded_url'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SoftwareVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SoftwareVersion</code>.
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
        // ensure the json data is a string
        if (data['lab'] && !(typeof data['lab'] === 'string' || data['lab'] instanceof String)) {
            throw new Error("Expected the field `lab` to be a primitive type in the JSON string but got " + data['lab']);
        }
        // ensure the json data is a string
        if (data['award'] && !(typeof data['award'] === 'string' || data['award'] instanceof String)) {
            throw new Error("Expected the field `award` to be a primitive type in the JSON string but got " + data['award']);
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
        if (data['software'] && !(typeof data['software'] === 'string' || data['software'] instanceof String)) {
            throw new Error("Expected the field `software` to be a primitive type in the JSON string but got " + data['software']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['download_id'] && !(typeof data['download_id'] === 'string' || data['download_id'] instanceof String)) {
            throw new Error("Expected the field `download_id` to be a primitive type in the JSON string but got " + data['download_id']);
        }
        // ensure the json data is a string
        if (data['downloaded_url'] && !(typeof data['downloaded_url'] === 'string' || data['downloaded_url'] instanceof String)) {
            throw new Error("Expected the field `downloaded_url` to be a primitive type in the JSON string but got " + data['downloaded_url']);
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

        return true;
    }


}



/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
SoftwareVersion.prototype['release_timestamp'] = undefined;

/**
 * The publications associated with this object.
 * @member {Array.<String>} publications
 */
SoftwareVersion.prototype['publications'] = undefined;

/**
 * The publication identifiers that provide more information about the object.
 * @member {Array.<String>} publication_identifiers
 */
SoftwareVersion.prototype['publication_identifiers'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
SoftwareVersion.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
SoftwareVersion.prototype['award'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/SoftwareVersion.StatusEnum} status
 */
SoftwareVersion.prototype['status'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
SoftwareVersion.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
SoftwareVersion.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
SoftwareVersion.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
SoftwareVersion.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
SoftwareVersion.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
SoftwareVersion.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
SoftwareVersion.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
SoftwareVersion.prototype['description'] = undefined;

/**
 * Unique name of the software package.
 * @member {String} software
 */
SoftwareVersion.prototype['software'] = undefined;

/**
 * The version of a particular software.
 * @member {String} version
 */
SoftwareVersion.prototype['version'] = undefined;

/**
 * The MD5 checksum, SHA-1 commit ID, image hash, or similar permanent identifier of the particular version of software used.
 * @member {String} download_id
 */
SoftwareVersion.prototype['download_id'] = undefined;

/**
 * An external resource to track the version of the software downloaded.
 * @member {String} downloaded_url
 */
SoftwareVersion.prototype['downloaded_url'] = undefined;

/**
 * @member {String} @id
 */
SoftwareVersion.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
SoftwareVersion.prototype['@type'] = undefined;

/**
 * A summary of the object.
 * @member {String} summary
 */
SoftwareVersion.prototype['summary'] = undefined;

/**
 * A unique identifier for a software version.
 * @member {String} name
 */
SoftwareVersion.prototype['name'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SoftwareVersion['StatusEnum'] = {

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



export default SoftwareVersion;
