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
import PlatformTerm from './PlatformTerm';
import SearchFacet from './SearchFacet';

/**
 * The PlatformTermResults model module.
 * @module model/PlatformTermResults
 * @version 0.1.0
 */
class PlatformTermResults {
    /**
     * Constructs a new <code>PlatformTermResults</code>.
     * @alias module:model/PlatformTermResults
     */
    constructor() { 
        
        PlatformTermResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformTermResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformTermResults} obj Optional instance to populate.
     * @return {module:model/PlatformTermResults} The populated <code>PlatformTermResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformTermResults();

            if (data.hasOwnProperty('@graph')) {
                obj['@graph'] = ApiClient.convertToType(data['@graph'], [PlatformTerm]);
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
     * Validates the JSON data with respect to <code>PlatformTermResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PlatformTermResults</code>.
     */
    static validateJSON(data) {
        if (data['@graph']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['@graph'])) {
                throw new Error("Expected the field `@graph` to be an array in the JSON data but got " + data['@graph']);
            }
            // validate the optional field `@graph` (array)
            for (const item of data['@graph']) {
                PlatformTerm.validateJSON(item);
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
 * @member {Array.<module:model/PlatformTerm>} @graph
 */
PlatformTermResults.prototype['@graph'] = undefined;

/**
 * @member {String} @id
 */
PlatformTermResults.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
PlatformTermResults.prototype['@type'] = undefined;

/**
 * @member {Number} total
 */
PlatformTermResults.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/SearchFacet>} facets
 */
PlatformTermResults.prototype['facets'] = undefined;






export default PlatformTermResults;
