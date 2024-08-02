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
import type { PageLayout } from './PageLayout';
import {
    PageLayoutFromJSON,
    PageLayoutFromJSONTyped,
    PageLayoutToJSON,
} from './PageLayout';

/**
 * A page on the IGVF portal.
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * The date the object was released.
     * @type {string}
     * @memberof Page
     */
    releaseTimestamp?: string;
    /**
     * Lab associated with the submission.
     * @type {string}
     * @memberof Page
     */
    lab?: string;
    /**
     * Grant associated with the submission.
     * @type {string}
     * @memberof Page
     */
    award?: string;
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Page
     */
    status?: PageStatusEnum;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Page
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Page
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Page
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Page
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Page
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Page
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Page
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Page
     */
    description?: string;
    /**
     * The parent page associated with this page.
     * @type {string}
     * @memberof Page
     */
    parent?: string;
    /**
     * The name shown in this page's URL.
     * @type {string}
     * @memberof Page
     */
    name?: string;
    /**
     * The name shown in the browser's title bar and tabs.
     * @type {string}
     * @memberof Page
     */
    title?: string;
    /**
     * 
     * @type {PageLayout}
     * @memberof Page
     */
    layout?: PageLayout;
    /**
     * 
     * @type {string}
     * @memberof Page
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Page
     */
    type?: Array<string>;
    /**
     * A summary of the object.
     * @type {string}
     * @memberof Page
     */
    summary?: string;
    /**
     * The path of the page.
     * @type {string}
     * @memberof Page
     */
    canonicalUri?: string;
}


/**
 * @export
 */
export const PageStatusEnum = {
    Archived: 'archived',
    Deleted: 'deleted',
    InProgress: 'in progress',
    Released: 'released'
} as const;
export type PageStatusEnum = typeof PageStatusEnum[keyof typeof PageStatusEnum];


/**
 * Check if a given object implements the Page interface.
 */
export function instanceOfPage(value: object): value is Page {
    return true;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseTimestamp': json['release_timestamp'] == null ? undefined : json['release_timestamp'],
        'lab': json['lab'] == null ? undefined : json['lab'],
        'award': json['award'] == null ? undefined : json['award'],
        'status': json['status'] == null ? undefined : json['status'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'parent': json['parent'] == null ? undefined : json['parent'],
        'name': json['name'] == null ? undefined : json['name'],
        'title': json['title'] == null ? undefined : json['title'],
        'layout': json['layout'] == null ? undefined : PageLayoutFromJSON(json['layout']),
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'canonicalUri': json['canonical_uri'] == null ? undefined : json['canonical_uri'],
    };
}

export function PageToJSON(value?: Page | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'release_timestamp': value['releaseTimestamp'],
        'lab': value['lab'],
        'award': value['award'],
        'status': value['status'],
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'parent': value['parent'],
        'name': value['name'],
        'title': value['title'],
        'layout': PageLayoutToJSON(value['layout']),
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
        'canonical_uri': value['canonicalUri'],
    };
}
