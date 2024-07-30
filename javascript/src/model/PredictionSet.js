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
 * The PredictionSet model module.
 * @module model/PredictionSet
 * @version 0.1.0
 */
class PredictionSet {
    /**
     * Constructs a new <code>PredictionSet</code>.
     * A file set of computational predictions. Prediction sets contain results of analyses to predict functions or traits of genomic features.
     * @alias module:model/PredictionSet
     * @param {(module:model/Object)} instance The actual instance to initialize PredictionSet.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into Object
            errorMessages.push("Failed to construct Object: " + err)
        }

        try {
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into Object
            errorMessages.push("Failed to construct Object: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `PredictionSet` with oneOf schemas Object. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `PredictionSet` with oneOf schemas Object. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>PredictionSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PredictionSet} obj Optional instance to populate.
     * @return {module:model/PredictionSet} The populated <code>PredictionSet</code> instance.
     */
    static constructFromObject(data, obj) {
        return new PredictionSet(data);
    }

    /**
     * Gets the actual instance, which can be <code>Object</code>.
     * @return {(module:model/Object)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>Object</code>.
     * @param {(module:model/Object)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = PredictionSet.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of PredictionSet from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/PredictionSet} An instance of PredictionSet.
     */
    static fromJSON = function(json_string){
        return PredictionSet.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The file set(s) required for this prediction set.
 * @member {Array.<String>} input_file_sets
 */
PredictionSet.prototype['input_file_sets'] = undefined;

/**
 * A small scale (<=100) list of specific chromosomal region(s).
 * @member {Array.<Object>} small_scale_loci_list
 */
PredictionSet.prototype['small_scale_loci_list'] = undefined;

/**
 * A large scale list (>100) of specific chromosomal regions.
 * @member {String} large_scale_loci_list
 */
PredictionSet.prototype['large_scale_loci_list'] = undefined;

/**
 * The specific, small scale list of (<=100) gene(s) this prediction set targets.
 * @member {Array.<String>} small_scale_gene_list
 */
PredictionSet.prototype['small_scale_gene_list'] = undefined;

/**
 * The large scale list of (>100 genes) this this prediction set targets.
 * @member {String} large_scale_gene_list
 */
PredictionSet.prototype['large_scale_gene_list'] = undefined;

/**
 * The date the object was released.
 * @member {String} release_timestamp
 */
PredictionSet.prototype['release_timestamp'] = undefined;

/**
 * The publications associated with this object.
 * @member {Array.<String>} publications
 */
PredictionSet.prototype['publications'] = undefined;

/**
 * The publication identifiers that provide more information about the object.
 * @member {Array.<String>} publication_identifiers
 */
PredictionSet.prototype['publication_identifiers'] = undefined;

/**
 * Documents that provide additional information (not data file).
 * @member {Array.<String>} documents
 */
PredictionSet.prototype['documents'] = undefined;

/**
 * Lab associated with the submission.
 * @member {String} lab
 */
PredictionSet.prototype['lab'] = undefined;

/**
 * Grant associated with the submission.
 * @member {String} award
 */
PredictionSet.prototype['award'] = undefined;

/**
 * A unique identifier to be used to reference the object prefixed with IGVF.
 * @member {String} accession
 */
PredictionSet.prototype['accession'] = undefined;

/**
 * Accessions previously assigned to objects that have been merged with this object.
 * @member {Array.<String>} alternate_accessions
 */
PredictionSet.prototype['alternate_accessions'] = undefined;

/**
 * Some samples are part of particular data collections.
 * @member {Array.<module:model/PredictionSet.CollectionsEnum>} collections
 */
PredictionSet.prototype['collections'] = undefined;

/**
 * The status of the metadata object.
 * @member {module:model/PredictionSet.StatusEnum} status
 */
PredictionSet.prototype['status'] = undefined;

/**
 * Explanation of why an object was transitioned to the revoked status.
 * @member {String} revoke_detail
 */
PredictionSet.prototype['revoke_detail'] = undefined;

/**
 * An external resource with additional information.
 * @member {String} url
 */
PredictionSet.prototype['url'] = undefined;

/**
 * The version of the JSON schema that the server uses to validate the object.
 * @member {String} schema_version
 */
PredictionSet.prototype['schema_version'] = undefined;

/**
 * The unique identifier associated with every object.
 * @member {String} uuid
 */
PredictionSet.prototype['uuid'] = undefined;

/**
 * DACC internal notes.
 * @member {String} notes
 */
PredictionSet.prototype['notes'] = undefined;

/**
 * Lab specific identifiers to reference an object.
 * @member {Array.<String>} aliases
 */
PredictionSet.prototype['aliases'] = undefined;

/**
 * The date the object was created.
 * @member {String} creation_timestamp
 */
PredictionSet.prototype['creation_timestamp'] = undefined;

/**
 * The user who submitted the object.
 * @member {String} submitted_by
 */
PredictionSet.prototype['submitted_by'] = undefined;

/**
 * Additional information specified by the submitter to be displayed as a comment on the portal.
 * @member {String} submitter_comment
 */
PredictionSet.prototype['submitter_comment'] = undefined;

/**
 * A plain text description of the object.
 * @member {String} description
 */
PredictionSet.prototype['description'] = undefined;

/**
 * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets.
 * @member {Array.<String>} dbxrefs
 */
PredictionSet.prototype['dbxrefs'] = undefined;

/**
 * The sample(s) associated with this file set.
 * @member {Array.<String>} samples
 */
PredictionSet.prototype['samples'] = undefined;

/**
 * The donor(s) associated with this file set.
 * @member {Array.<String>} donors
 */
PredictionSet.prototype['donors'] = undefined;

/**
 * The category that best describes this prediction set.
 * @member {module:model/PredictionSet.FileSetTypeEnum} file_set_type
 */
PredictionSet.prototype['file_set_type'] = undefined;

/**
 * The scope or scale that this prediction set is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property.
 * @member {module:model/PredictionSet.ScopeEnum} scope
 */
PredictionSet.prototype['scope'] = undefined;

/**
 * @member {String} @id
 */
PredictionSet.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
PredictionSet.prototype['@type'] = undefined;

/**
 * A summary of the prediction set.
 * @member {String} summary
 */
PredictionSet.prototype['summary'] = undefined;

/**
 * The files associated with this file set.
 * @member {Array.<String>} files
 */
PredictionSet.prototype['files'] = undefined;

/**
 * The file sets for which this file set is a control.
 * @member {Array.<String>} control_for
 */
PredictionSet.prototype['control_for'] = undefined;

/**
 * The timestamp the first file object in the file_set or associated auxiliary sets was created.
 * @member {String} submitted_files_timestamp
 */
PredictionSet.prototype['submitted_files_timestamp'] = undefined;

/**
 * The file sets that use this file set as an input.
 * @member {Array.<String>} input_file_set_for
 */
PredictionSet.prototype['input_file_set_for'] = undefined;


PredictionSet.OneOf = ["Object"];

export default PredictionSet;

