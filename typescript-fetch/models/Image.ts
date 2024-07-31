/* tslint:disable */
/* eslint-disable */
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
 */

import { mapValues } from '../runtime';
import type { Attachment1 } from './Attachment1';
import {
    Attachment1FromJSON,
    Attachment1FromJSONTyped,
    Attachment1ToJSON,
} from './Attachment1';

/**
 * An image to be displayed on an IGVF portal page. This is not a data object.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * The date the object was released.
     * @type {string}
     * @memberof Image
     */
    releaseTimestamp?: string;
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Image
     */
    status?: ImageStatusEnum;
    /**
     * 
     * @type {Attachment1}
     * @memberof Image
     */
    attachment?: Attachment1;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Image
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Image
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Image
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Image
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Image
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Image
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Image
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Image
     */
    description?: string;
    /**
     * The caption of the image.
     * @type {string}
     * @memberof Image
     */
    caption?: string;
    /**
     * 
     * @type {string}
     * @memberof Image
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Image
     */
    type?: Array<string>;
    /**
     * A summary of the object.
     * @type {string}
     * @memberof Image
     */
    summary?: string;
    /**
     * Image url
     * @type {string}
     * @memberof Image
     */
    thumbNail?: string;
    /**
     * Download Url
     * @type {string}
     * @memberof Image
     */
    downloadUrl?: string;
}


/**
 * @export
 */
export const ImageStatusEnum = {
    Archived: 'archived',
    Deleted: 'deleted',
    InProgress: 'in progress',
    Released: 'released'
} as const;
export type ImageStatusEnum = typeof ImageStatusEnum[keyof typeof ImageStatusEnum];


/**
 * Check if a given object implements the Image interface.
 */
export function instanceOfImage(value: object): value is Image {
    return true;
}

export function ImageFromJSON(json: any): Image {
    return ImageFromJSONTyped(json, false);
}

export function ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Image {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseTimestamp': json['release_timestamp'] == null ? undefined : json['release_timestamp'],
        'status': json['status'] == null ? undefined : json['status'],
        'attachment': json['attachment'] == null ? undefined : Attachment1FromJSON(json['attachment']),
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'caption': json['caption'] == null ? undefined : json['caption'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'thumbNail': json['thumb_nail'] == null ? undefined : json['thumb_nail'],
        'downloadUrl': json['download_url'] == null ? undefined : json['download_url'],
    };
}

export function ImageToJSON(value?: Image | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'release_timestamp': value['releaseTimestamp'],
        'status': value['status'],
        'attachment': Attachment1ToJSON(value['attachment']),
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'caption': value['caption'],
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
        'thumb_nail': value['thumbNail'],
        'download_url': value['downloadUrl'],
    };
}

