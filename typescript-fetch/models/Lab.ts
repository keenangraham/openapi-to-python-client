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
/**
 * A lab that is part of or affiliated with the IGVF consortium.
 * @export
 * @interface Lab
 */
export interface Lab {
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Lab
     */
    status?: LabStatusEnum;
    /**
     * An external resource with additional information.
     * @type {string}
     * @memberof Lab
     */
    url?: string;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Lab
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Lab
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Lab
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Lab
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Lab
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Lab
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Lab
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Lab
     */
    description?: string;
    /**
     * A short unique name for the lab, current convention is lower cased and hyphen delimited of PI's first and last name (e.g. john-doe).
     * @type {string}
     * @memberof Lab
     */
    name?: string;
    /**
     * Principle Investigator of the lab.
     * @type {string}
     * @memberof Lab
     */
    pi?: string;
    /**
     * Grants associated with the lab.
     * @type {Set<string>}
     * @memberof Lab
     */
    awards?: Set<string>;
    /**
     * An abbreviation for the institute the lab is associated with.
     * @type {string}
     * @memberof Lab
     */
    instituteLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof Lab
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Lab
     */
    type?: Array<string>;
    /**
     * A summary of the lab.
     * @type {string}
     * @memberof Lab
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof Lab
     */
    title?: string;
}


/**
 * @export
 */
export const LabStatusEnum = {
    Current: 'current',
    Deleted: 'deleted',
    Disabled: 'disabled'
} as const;
export type LabStatusEnum = typeof LabStatusEnum[keyof typeof LabStatusEnum];


/**
 * Check if a given object implements the Lab interface.
 */
export function instanceOfLab(value: object): value is Lab {
    return true;
}

export function LabFromJSON(json: any): Lab {
    return LabFromJSONTyped(json, false);
}

export function LabFromJSONTyped(json: any, ignoreDiscriminator: boolean): Lab {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : json['status'],
        'url': json['url'] == null ? undefined : json['url'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'creationTimestamp': json['creation_timestamp'] == null ? undefined : json['creation_timestamp'],
        'submittedBy': json['submitted_by'] == null ? undefined : json['submitted_by'],
        'submitterComment': json['submitter_comment'] == null ? undefined : json['submitter_comment'],
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'] == null ? undefined : json['name'],
        'pi': json['pi'] == null ? undefined : json['pi'],
        'awards': json['awards'] == null ? undefined : json['awards'],
        'instituteLabel': json['institute_label'] == null ? undefined : json['institute_label'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function LabToJSON(value?: Lab | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': value['status'],
        'url': value['url'],
        'schema_version': value['schemaVersion'],
        'uuid': value['uuid'],
        'notes': value['notes'],
        'aliases': value['aliases'] == null ? undefined : Array.from(value['aliases'] as Set<any>),
        'creation_timestamp': value['creationTimestamp'],
        'submitted_by': value['submittedBy'],
        'submitter_comment': value['submitterComment'],
        'description': value['description'],
        'name': value['name'],
        'pi': value['pi'],
        'awards': value['awards'] == null ? undefined : Array.from(value['awards'] as Set<any>),
        'institute_label': value['instituteLabel'],
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
        'title': value['title'],
    };
}
