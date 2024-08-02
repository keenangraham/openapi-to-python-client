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
import NoResultsResponseColumnsValue from './NoResultsResponseColumnsValue';
import NoResultsResponseFacetGroupsInner from './NoResultsResponseFacetGroupsInner';
import NoResultsResponseFacetsInner from './NoResultsResponseFacetsInner';
import NoResultsResponseFiltersInner from './NoResultsResponseFiltersInner';
import NoResultsResponseSortValue from './NoResultsResponseSortValue';

/**
 * The NoResultsResponse model module.
 * @module model/NoResultsResponse
 * @version 0.1.0
 */
class NoResultsResponse {
    /**
     * Constructs a new <code>NoResultsResponse</code>.
     * @alias module:model/NoResultsResponse
     */
    constructor() { 
        
        NoResultsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NoResultsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NoResultsResponse} obj Optional instance to populate.
     * @return {module:model/NoResultsResponse} The populated <code>NoResultsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NoResultsResponse();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
            }
            if (data.hasOwnProperty('@graph')) {
                obj['@graph'] = ApiClient.convertToType(data['@graph'], [Object]);
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], ['String']);
            }
            if (data.hasOwnProperty('clear_filters')) {
                obj['clear_filters'] = ApiClient.convertToType(data['clear_filters'], 'String');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], Object);
            }
            if (data.hasOwnProperty('facet_groups')) {
                obj['facet_groups'] = ApiClient.convertToType(data['facet_groups'], [NoResultsResponseFacetGroupsInner]);
            }
            if (data.hasOwnProperty('facets')) {
                obj['facets'] = ApiClient.convertToType(data['facets'], [NoResultsResponseFacetsInner]);
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [NoResultsResponseFiltersInner]);
            }
            if (data.hasOwnProperty('notification')) {
                obj['notification'] = ApiClient.convertToType(data['notification'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NoResultsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NoResultsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['@context'] && !(typeof data['@context'] === 'string' || data['@context'] instanceof String)) {
            throw new Error("Expected the field `@context` to be a primitive type in the JSON string but got " + data['@context']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['@graph'])) {
            throw new Error("Expected the field `@graph` to be an array in the JSON data but got " + data['@graph']);
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
        if (data['clear_filters'] && !(typeof data['clear_filters'] === 'string' || data['clear_filters'] instanceof String)) {
            throw new Error("Expected the field `clear_filters` to be a primitive type in the JSON string but got " + data['clear_filters']);
        }
        if (data['facet_groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['facet_groups'])) {
                throw new Error("Expected the field `facet_groups` to be an array in the JSON data but got " + data['facet_groups']);
            }
            // validate the optional field `facet_groups` (array)
            for (const item of data['facet_groups']) {
                NoResultsResponseFacetGroupsInner.validateJSON(item);
            };
        }
        if (data['facets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['facets'])) {
                throw new Error("Expected the field `facets` to be an array in the JSON data but got " + data['facets']);
            }
            // validate the optional field `facets` (array)
            for (const item of data['facets']) {
                NoResultsResponseFacetsInner.validateJSON(item);
            };
        }
        if (data['filters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['filters'])) {
                throw new Error("Expected the field `filters` to be an array in the JSON data but got " + data['filters']);
            }
            // validate the optional field `filters` (array)
            for (const item of data['filters']) {
                NoResultsResponseFiltersInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['notification'] && !(typeof data['notification'] === 'string' || data['notification'] instanceof String)) {
            throw new Error("Expected the field `notification` to be a primitive type in the JSON string but got " + data['notification']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {String} @context
 */
NoResultsResponse.prototype['@context'] = undefined;

/**
 * @member {Array.<Object>} @graph
 */
NoResultsResponse.prototype['@graph'] = undefined;

/**
 * @member {String} @id
 */
NoResultsResponse.prototype['@id'] = undefined;

/**
 * @member {Array.<String>} @type
 */
NoResultsResponse.prototype['@type'] = undefined;

/**
 * @member {String} clear_filters
 */
NoResultsResponse.prototype['clear_filters'] = undefined;

/**
 * @member {Object} columns
 */
NoResultsResponse.prototype['columns'] = undefined;

/**
 * @member {Array.<module:model/NoResultsResponseFacetGroupsInner>} facet_groups
 */
NoResultsResponse.prototype['facet_groups'] = undefined;

/**
 * @member {Array.<module:model/NoResultsResponseFacetsInner>} facets
 */
NoResultsResponse.prototype['facets'] = undefined;

/**
 * @member {Array.<module:model/NoResultsResponseFiltersInner>} filters
 */
NoResultsResponse.prototype['filters'] = undefined;

/**
 * @member {String} notification
 */
NoResultsResponse.prototype['notification'] = undefined;

/**
 * @member {Object} sort
 */
NoResultsResponse.prototype['sort'] = undefined;

/**
 * @member {String} title
 */
NoResultsResponse.prototype['title'] = undefined;

/**
 * @member {Number} total
 */
NoResultsResponse.prototype['total'] = undefined;






export default NoResultsResponse;
