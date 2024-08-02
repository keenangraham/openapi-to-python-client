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
 * A grant providing financial support for a scientific project. For example, HG012076 supporting "Single-cell Mapping Center for Human Regulatory Elements and Gene Activity."
 * @export
 * @interface Award
 */
export interface Award {
    /**
     * The status of the metadata object.
     * @type {string}
     * @memberof Award
     */
    status?: AwardStatusEnum;
    /**
     * An external resource with additional information.
     * @type {string}
     * @memberof Award
     */
    url?: string;
    /**
     * The version of the JSON schema that the server uses to validate the object.
     * @type {string}
     * @memberof Award
     */
    schemaVersion?: string;
    /**
     * The unique identifier associated with every object.
     * @type {string}
     * @memberof Award
     */
    uuid?: string;
    /**
     * DACC internal notes.
     * @type {string}
     * @memberof Award
     */
    notes?: string;
    /**
     * Lab specific identifiers to reference an object.
     * @type {Set<string>}
     * @memberof Award
     */
    aliases?: Set<string>;
    /**
     * The date the object was created.
     * @type {string}
     * @memberof Award
     */
    creationTimestamp?: string;
    /**
     * The user who submitted the object.
     * @type {string}
     * @memberof Award
     */
    submittedBy?: string;
    /**
     * Additional information specified by the submitter to be displayed as a comment on the portal.
     * @type {string}
     * @memberof Award
     */
    submitterComment?: string;
    /**
     * A plain text description of the object.
     * @type {string}
     * @memberof Award
     */
    description?: string;
    /**
     * The grant name from the NIH database, if applicable.
     * @type {string}
     * @memberof Award
     */
    title?: string;
    /**
     * The official grant number from the NIH database, if applicable
     * @type {string}
     * @memberof Award
     */
    name?: string;
    /**
     * The date when the award begins.
     * @type {string}
     * @memberof Award
     */
    startDate?: string;
    /**
     * The date when the award concludes.
     * @type {string}
     * @memberof Award
     */
    endDate?: string;
    /**
     * Principal Investigator(s) of the grant.
     * @type {Set<string>}
     * @memberof Award
     */
    pis?: Set<string>;
    /**
     * The contact Principal Investigator of the grant.
     * @type {string}
     * @memberof Award
     */
    contactPi?: string;
    /**
     * The collection of biological data related to a single initiative, originating from a consortium.
     * @type {string}
     * @memberof Award
     */
    project?: AwardProjectEnum;
    /**
     * The group that determines which set of data the user has permission to view.
     * @type {string}
     * @memberof Award
     */
    viewingGroup?: AwardViewingGroupEnum;
    /**
     * The project component the award is associated with.
     * @type {string}
     * @memberof Award
     */
    component?: AwardComponentEnum;
    /**
     * 
     * @type {string}
     * @memberof Award
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Award
     */
    type?: Array<string>;
    /**
     * A summary of the award.
     * @type {string}
     * @memberof Award
     */
    summary?: string;
}


/**
 * @export
 */
export const AwardStatusEnum = {
    Current: 'current',
    Deleted: 'deleted',
    Disabled: 'disabled'
} as const;
export type AwardStatusEnum = typeof AwardStatusEnum[keyof typeof AwardStatusEnum];

/**
 * @export
 */
export const AwardProjectEnum = {
    Community: 'community',
    Encode: 'ENCODE',
    Igvf: 'IGVF'
} as const;
export type AwardProjectEnum = typeof AwardProjectEnum[keyof typeof AwardProjectEnum];

/**
 * @export
 */
export const AwardViewingGroupEnum = {
    Community: 'community',
    Igvf: 'IGVF'
} as const;
export type AwardViewingGroupEnum = typeof AwardViewingGroupEnum[keyof typeof AwardViewingGroupEnum];

/**
 * @export
 */
export const AwardComponentEnum = {
    Affiliate: 'affiliate',
    DataAnalysis: 'data analysis',
    DataCoordination: 'data coordination',
    FunctionalCharacterization: 'functional characterization',
    Mapping: 'mapping',
    Networks: 'networks',
    PredictiveModeling: 'predictive modeling'
} as const;
export type AwardComponentEnum = typeof AwardComponentEnum[keyof typeof AwardComponentEnum];


/**
 * Check if a given object implements the Award interface.
 */
export function instanceOfAward(value: object): value is Award {
    return true;
}

export function AwardFromJSON(json: any): Award {
    return AwardFromJSONTyped(json, false);
}

export function AwardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Award {
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
        'title': json['title'] == null ? undefined : json['title'],
        'name': json['name'] == null ? undefined : json['name'],
        'startDate': json['start_date'] == null ? undefined : json['start_date'],
        'endDate': json['end_date'] == null ? undefined : json['end_date'],
        'pis': json['pis'] == null ? undefined : json['pis'],
        'contactPi': json['contact_pi'] == null ? undefined : json['contact_pi'],
        'project': json['project'] == null ? undefined : json['project'],
        'viewingGroup': json['viewing_group'] == null ? undefined : json['viewing_group'],
        'component': json['component'] == null ? undefined : json['component'],
        'id': json['@id'] == null ? undefined : json['@id'],
        'type': json['@type'] == null ? undefined : json['@type'],
        'summary': json['summary'] == null ? undefined : json['summary'],
    };
}

export function AwardToJSON(value?: Award | null): any {
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
        'title': value['title'],
        'name': value['name'],
        'start_date': value['startDate'],
        'end_date': value['endDate'],
        'pis': value['pis'] == null ? undefined : Array.from(value['pis'] as Set<any>),
        'contact_pi': value['contactPi'],
        'project': value['project'],
        'viewing_group': value['viewingGroup'],
        'component': value['component'],
        '@id': value['id'],
        '@type': value['type'],
        'summary': value['summary'],
    };
}
