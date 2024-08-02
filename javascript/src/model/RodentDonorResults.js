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
import RodentDonor from './RodentDonor';
import SearchFacet from './SearchFacet';

/**
 * The RodentDonorResults model module.
 * @module model/RodentDonorResults
 * @version 0.1.0
 */
class RodentDonorResults {
    /**
     * Constructs a new <code>RodentDonorResults</code>.
     * @alias module:model/RodentDonorResults
     */
    constructor() { 
        
        RodentDonorResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RodentDonorResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RodentDonorResults} obj Optional instance to populate.
     * @return {module:model/RodentDonorResults} The populated <code>RodentDonorResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RodentDonorResults();

            if (data.hasOwnProperty('@graph')) {
                obj['@graph'] = ApiClient.convertToType(data['@graph'], [RodentDonor]);
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], ['String']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('facets')) {
                obj['facets'] = ApiClient.convertToType(data['facets'], [SearchFacet]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RodentDonorResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RodentDonorResults</code>.
     */
    static validateJSON(data) {
        if (data['@graph']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['@graph'])) {
                throw new Error("Expected the field `@graph` to be an array in the JSON data but got " + data['@graph']);
            }
            // validate the optional field `@graph` (array)
            for (const item of data['@graph']) {
                RodentDonor.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['@id'] && !(typeof data['@id'] === 'string' || data['@id'] instanceof String)) {
            throw new Error("Expected the field `@id` to be a primitive type in the JSON string but got " + data['@id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['@type'])) {
            throw new Error("Expected the field `@type` to be an array in the JSON data but got " + data['@type']);
        }
        if (data['facets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['facets'])) {
                throw new Error("Expected the field `facets` to be an array in the JSON data but got " + data['facets']);
            }
            // validate the optional field `facets` (array)
            for (const item of data['facets']) {
                SearchFacet.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/RodentDonor>} @graph
 */
RodentDonorResults.prototype['@graph'] = undefined;

/**
 * @member {String} @id
 */
RodentDonorResults.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
RodentDonorResults.prototype['@type'] = undefined;

/**
 * @member {Number} total
 */
RodentDonorResults.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/SearchFacet>} facets
 */
RodentDonorResults.prototype['facets'] = undefined;






export default RodentDonorResults;
