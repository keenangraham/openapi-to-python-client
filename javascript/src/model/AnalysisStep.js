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
 * The AnalysisStep model module.
 * @module model/AnalysisStep
 * @version 0.1.0
 */
class AnalysisStep {
    /**
     * Constructs a new <code>AnalysisStep</code>.
     * A step in a computational analysis workflow. For example, a sequence alignment step that represents the phase of the computational analysis in which sequenced reads are being aligned to the reference genome.
     * @alias module:model/AnalysisStep
     */
    constructor() { 
        
        AnalysisStep.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AnalysisStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalysisStep} obj Optional instance to populate.
     * @return {module:model/AnalysisStep} The populated <code>AnalysisStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalysisStep();

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
            if (data.hasOwnProperty('analysis_step_types')) {
                obj['analysis_step_types'] = ApiClient.convertToType(data['analysis_step_types'], ['String']);
            }
            if (data.hasOwnProperty('step_label')) {
                obj['step_label'] = ApiClient.convertToType(data['step_label'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('workflow')) {
                obj['workflow'] = ApiClient.convertToType(data['workflow'], 'String');
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], ['String']);
            }
            if (data.hasOwnProperty('input_content_types')) {
                obj['input_content_types'] = ApiClient.convertToType(data['input_content_types'], ['String']);
            }
            if (data.hasOwnProperty('output_content_types')) {
                obj['output_content_types'] = ApiClient.convertToType(data['output_content_types'], ['String']);
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
     * Validates the JSON data with respect to <code>AnalysisStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalysisStep</code>.
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
        // ensure the json data is an array
        if (!Array.isArray(data['analysis_step_types'])) {
            throw new Error("Expected the field `analysis_step_types` to be an array in the JSON data but got " + data['analysis_step_types']);
        }
        // ensure the json data is a string
        if (data['step_label'] && !(typeof data['step_label'] === 'string' || data['step_label'] instanceof String)) {
            throw new Error("Expected the field `step_label` to be a primitive type in the JSON string but got " + data['step_label']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['workflow'] && !(typeof data['workflow'] === 'string' || data['workflow'] instanceof String)) {
            throw new Error("Expected the field `workflow` to be a primitive type in the JSON string but got " + data['workflow']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parents'])) {
            throw new Error("Expected the field `parents` to be an array in the JSON data but got " + data['parents']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['input_content_types'])) {
            throw new Error("Expected the field `input_content_types` to be an array in the JSON data but got " + data['input_content_types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['output_content_types'])) {
            throw new Error("Expected the field `output_content_types` to be an array in the JSON data but got " + data['output_content_types']);
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
AnalysisStep.prototype['release_timestamp'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/AnalysisStep.StatusEnum} status
 */
AnalysisStep.prototype['status'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
AnalysisStep.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
AnalysisStep.prototype['award'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
AnalysisStep.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
AnalysisStep.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
AnalysisStep.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
AnalysisStep.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
AnalysisStep.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
AnalysisStep.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
AnalysisStep.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
AnalysisStep.prototype['description'] = undefined;

/**
 * The classification of the software.
 * @member {Array.<module:model/AnalysisStep.AnalysisStepTypesEnum>} analysis_step_types
 */
AnalysisStep.prototype['analysis_step_types'] = undefined;

/**
 * Unique lowercased label of the analysis step that includes the relevant assays, the software used, and the purpose of the step, e.g. rampage-grit-peak-calling-step
 * @member {String} step_label
 */
AnalysisStep.prototype['step_label'] = undefined;

/**
 * The preferred viewable name of the analysis step, likely the same as the step label.
 * @member {String} title
 */
AnalysisStep.prototype['title'] = undefined;

/**
 * The computational workflow in which this analysis step belongs.
 * @member {String} workflow
 */
AnalysisStep.prototype['workflow'] = undefined;

/**
 * The precursor steps.
 * @member {Array.<String>} parents
 */
AnalysisStep.prototype['parents'] = undefined;

/**
 * The content types used as input for the analysis step.
 * @member {Array.<String>} input_content_types
 */
AnalysisStep.prototype['input_content_types'] = undefined;

/**
 * The content types produced as output by the analysis step.
 * @member {Array.<String>} output_content_types
 */
AnalysisStep.prototype['output_content_types'] = undefined;

/**
 * @member {String} @id
 */
AnalysisStep.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
AnalysisStep.prototype['@type'] = undefined;

/**
 * A summary of the object.
 * @member {String} summary
 */
AnalysisStep.prototype['summary'] = undefined;

/**
 * Full name of the analysis step.
 * @member {String} name
 */
AnalysisStep.prototype['name'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AnalysisStep['StatusEnum'] = {

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
 * Allowed values for the <code>analysisStepTypes</code> property.
 * @enum {String}
 * @readonly
 */
AnalysisStep['AnalysisStepTypesEnum'] = {

    /**
     * value: "alignment"
     * @const
     */
    "alignment": "alignment",

    /**
     * value: "file format conversion"
     * @const
     */
    "file format conversion": "file format conversion",

    /**
     * value: "signal generation"
     * @const
     */
    "signal generation": "signal generation"
};



export default AnalysisStep;

