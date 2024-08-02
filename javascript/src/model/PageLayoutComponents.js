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
 * The PageLayoutComponents model module.
 * @module model/PageLayoutComponents
 * @version 0.1.0
 */
class PageLayoutComponents {
    /**
     * Constructs a new <code>PageLayoutComponents</code>.
     * @alias module:model/PageLayoutComponents
     */
    constructor() { 
        
        PageLayoutComponents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageLayoutComponents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageLayoutComponents} obj Optional instance to populate.
     * @return {module:model/PageLayoutComponents} The populated <code>PageLayoutComponents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageLayoutComponents();

            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageLayoutComponents</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageLayoutComponents</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['@id'] && !(typeof data['@id'] === 'string' || data['@id'] instanceof String)) {
            throw new Error("Expected the field `@id` to be a primitive type in the JSON string but got " + data['@id']);
        }
        // ensure the json data is a string
        if (data['@type'] && !(typeof data['@type'] === 'string' || data['@type'] instanceof String)) {
            throw new Error("Expected the field `@type` to be a primitive type in the JSON string but got " + data['@type']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }

        return true;
    }


}



/**
 * Unique identifier for this blocUnique identifier for this block.
 * @member {String} @id
 */
PageLayoutComponents.prototype['@id'] = undefined;

/**
 * Indicates whether this block contains markdown or a component specification.
 * @member {String} @type
 */
PageLayoutComponents.prototype['@type'] = undefined;

/**
 * The text content of this block.
 * @member {String} body
 */
PageLayoutComponents.prototype['body'] = undefined;

/**
 * The text language direction -- ltr or rtl.
 * @member {String} direction
 */
PageLayoutComponents.prototype['direction'] = undefined;






export default PageLayoutComponents;
