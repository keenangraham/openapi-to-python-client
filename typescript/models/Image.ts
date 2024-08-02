/**
 * IGVF Project API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Attachment1 } from '../models/Attachment1';
import { HttpFile } from '../http/http';

/**
* An image to be displayed on an IGVF portal page. This is not a data object.
*/
export class Image {
    /**
    * The date the object was released.
    */
    'releaseTimestamp'?: string;
    /**
    * The status of the metadata object.
    */
    'status'?: ImageStatusEnum;
    'attachment'?: Attachment1;
    /**
    * The version of the JSON schema that the server uses to validate the object.
    */
    'schemaVersion'?: string;
    /**
    * The unique identifier associated with every object.
    */
    'uuid'?: string;
    /**
    * DACC internal notes.
    */
    'notes'?: string;
    /**
    * Lab specific identifiers to reference an object.
    */
    'aliases'?: Set<string>;
    /**
    * The date the object was created.
    */
    'creationTimestamp'?: string;
    /**
    * The user who submitted the object.
    */
    'submittedBy'?: string;
    /**
    * Additional information specified by the submitter to be displayed as a comment on the portal.
    */
    'submitterComment'?: string;
    /**
    * A plain text description of the object.
    */
    'description'?: string;
    /**
    * The caption of the image.
    */
    'caption'?: string;
    'id'?: string;
    'type'?: Array<string>;
    /**
    * A summary of the object.
    */
    'summary'?: string;
    /**
    * Image url
    */
    'thumbNail'?: string;
    /**
    * Download Url
    */
    'downloadUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "releaseTimestamp",
            "baseName": "release_timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ImageStatusEnum",
            "format": ""
        },
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Attachment1",
            "format": ""
        },
        {
            "name": "schemaVersion",
            "baseName": "schema_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "aliases",
            "baseName": "aliases",
            "type": "Set<string>",
            "format": ""
        },
        {
            "name": "creationTimestamp",
            "baseName": "creation_timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "submittedBy",
            "baseName": "submitted_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "submitterComment",
            "baseName": "submitter_comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "caption",
            "baseName": "caption",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbNail",
            "baseName": "thumb_nail",
            "type": "string",
            "format": ""
        },
        {
            "name": "downloadUrl",
            "baseName": "download_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Image.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ImageStatusEnum {
    Archived = 'archived',
    Deleted = 'deleted',
    InProgress = 'in progress',
    Released = 'released'
}
