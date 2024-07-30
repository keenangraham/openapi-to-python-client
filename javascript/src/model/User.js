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
 * The User model module.
 * @module model/User
 * @version 0.1.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * A user of IGVF data portal who is a member or affiliate member of IGVF.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

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
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('lab')) {
                obj['lab'] = ApiClient.convertToType(data['lab'], 'String');
            }
            if (data.hasOwnProperty('submits_for')) {
                obj['submits_for'] = ApiClient.convertToType(data['submits_for'], ['String']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('viewing_groups')) {
                obj['viewing_groups'] = ApiClient.convertToType(data['viewing_groups'], ['String']);
            }
            if (data.hasOwnProperty('job_title')) {
                obj['job_title'] = ApiClient.convertToType(data['job_title'], 'String');
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
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
    static validateJSON(data) {
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
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['lab'] && !(typeof data['lab'] === 'string' || data['lab'] instanceof String)) {
            throw new Error("Expected the field `lab` to be a primitive type in the JSON string but got " + data['lab']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['submits_for'])) {
            throw new Error("Expected the field `submits_for` to be an array in the JSON data but got " + data['submits_for']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['groups'])) {
            throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['viewing_groups'])) {
            throw new Error("Expected the field `viewing_groups` to be an array in the JSON data but got " + data['viewing_groups']);
        }
        // ensure the json data is a string
        if (data['job_title'] && !(typeof data['job_title'] === 'string' || data['job_title'] instanceof String)) {
            throw new Error("Expected the field `job_title` to be a primitive type in the JSON string but got " + data['job_title']);
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
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * The status of the metadata object.
 * @member {module:model/User.StatusEnum} status
 */
User.prototype['status'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
User.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
User.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
User.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
User.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
User.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
User.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
User.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
User.prototype['description'] = undefined;

/**
 * The email associated with the user's account.
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * The user's first (given) name.
 * @member {String} first_name
 */
User.prototype['first_name'] = undefined;

/**
 * The user's last (family) name.
 * @member {String} last_name
 */
User.prototype['last_name'] = undefined;

/**
 * Lab user is primarily associated with.
 * @member {String} lab
 */
User.prototype['lab'] = undefined;

/**
 * Labs user is authorized to submit data for.
 * @member {Array.<String>} submits_for
 */
User.prototype['submits_for'] = undefined;

/**
 * Additional access control groups
 * @member {Array.<module:model/User.GroupsEnum>} groups
 */
User.prototype['groups'] = undefined;

/**
 * The group that determines which set of data the user has permission to view.
 * @member {Array.<module:model/User.ViewingGroupsEnum>} viewing_groups
 */
User.prototype['viewing_groups'] = undefined;

/**
 * The role of the user in their lab or organization.
 * @member {module:model/User.JobTitleEnum} job_title
 */
User.prototype['job_title'] = undefined;

/**
 * @member {String} @id
 */
User.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
User.prototype['@type'] = undefined;

/**
 * A summary of the object.
 * @member {String} summary
 */
User.prototype['summary'] = undefined;

/**
 * The full name of the user.
 * @member {String} title
 */
User.prototype['title'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
User['StatusEnum'] = {

    /**
     * value: "current"
     * @const
     */
    "current": "current",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};


/**
 * Allowed values for the <code>groups</code> property.
 * @enum {String}
 * @readonly
 */
User['GroupsEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "read-only-admin"
     * @const
     */
    "read-only-admin": "read-only-admin",

    /**
     * value: "verified"
     * @const
     */
    "verified": "verified"
};


/**
 * Allowed values for the <code>viewingGroups</code> property.
 * @enum {String}
 * @readonly
 */
User['ViewingGroupsEnum'] = {

    /**
     * value: "community"
     * @const
     */
    "community": "community",

    /**
     * value: "IGVF"
     * @const
     */
    "IGVF": "IGVF"
};


/**
 * Allowed values for the <code>job_title</code> property.
 * @enum {String}
 * @readonly
 */
User['JobTitleEnum'] = {

    /**
     * value: "Principal Investigator"
     * @const
     */
    "Principal Investigator": "Principal Investigator",

    /**
     * value: "Co-Investigator"
     * @const
     */
    "Co-Investigator": "Co-Investigator",

    /**
     * value: "Project Manager"
     * @const
     */
    "Project Manager": "Project Manager",

    /**
     * value: "Submitter"
     * @const
     */
    "Submitter": "Submitter",

    /**
     * value: "Post Doc"
     * @const
     */
    "Post Doc": "Post Doc",

    /**
     * value: "Data Wrangler"
     * @const
     */
    "Data Wrangler": "Data Wrangler",

    /**
     * value: "Scientist"
     * @const
     */
    "Scientist": "Scientist",

    /**
     * value: "Computational Scientist"
     * @const
     */
    "Computational Scientist": "Computational Scientist",

    /**
     * value: "Software Developer"
     * @const
     */
    "Software Developer": "Software Developer",

    /**
     * value: "NHGRI staff member"
     * @const
     */
    "NHGRI staff member": "NHGRI staff member",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"
};



export default User;

