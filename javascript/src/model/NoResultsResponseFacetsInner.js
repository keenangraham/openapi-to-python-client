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
import NoResultsResponseFacetsInnerTermsInner from './NoResultsResponseFacetsInnerTermsInner';

/**
 * The NoResultsResponseFacetsInner model module.
 * @module model/NoResultsResponseFacetsInner
 * @version 0.1.0
 */
class NoResultsResponseFacetsInner {
    /**
     * Constructs a new <code>NoResultsResponseFacetsInner</code>.
     * @alias module:model/NoResultsResponseFacetsInner
     */
    constructor() { 
        
        NoResultsResponseFacetsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NoResultsResponseFacetsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NoResultsResponseFacetsInner} obj Optional instance to populate.
     * @return {module:model/NoResultsResponseFacetsInner} The populated <code>NoResultsResponseFacetsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NoResultsResponseFacetsInner();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], [NoResultsResponseFacetsInnerTermsInner]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('appended')) {
                obj['appended'] = ApiClient.convertToType(data['appended'], 'Boolean');
            }
            if (data.hasOwnProperty('open_on_load')) {
                obj['open_on_load'] = ApiClient.convertToType(data['open_on_load'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NoResultsResponseFacetsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NoResultsResponseFacetsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        if (data['terms']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['terms'])) {
                throw new Error("Expected the field `terms` to be an array in the JSON data but got " + data['terms']);
            }
            // validate the optional field `terms` (array)
            for (const item of data['terms']) {
                NoResultsResponseFacetsInnerTermsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} field
 */
NoResultsResponseFacetsInner.prototype['field'] = undefined;

/**
 * @member {String} title
 */
NoResultsResponseFacetsInner.prototype['title'] = undefined;

/**
 * @member {Array.<module:model/NoResultsResponseFacetsInnerTermsInner>} terms
 */
NoResultsResponseFacetsInner.prototype['terms'] = undefined;

/**
 * @member {Number} total
 */
NoResultsResponseFacetsInner.prototype['total'] = undefined;

/**
 * @member {String} type
 */
NoResultsResponseFacetsInner.prototype['type'] = undefined;

/**
 * @member {Boolean} appended
 */
NoResultsResponseFacetsInner.prototype['appended'] = undefined;

/**
 * @member {Boolean} open_on_load
 */
NoResultsResponseFacetsInner.prototype['open_on_load'] = undefined;






export default NoResultsResponseFacetsInner;
