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

import { RequestFile } from './models';
import { Attachment } from './attachment';

/**
* A publication related to IGVF.
*/
export class Publication {
    /**
    * The date the object was released.
    */
    'releaseTimestamp'?: string;
    /**
    * The publication identifiers that provide more information about the object.
    */
    'publicationIdentifiers'?: Set<string>;
    /**
    * The status of the metadata object.
    */
    'status'?: Publication.StatusEnum;
    /**
    * Lab associated with the submission.
    */
    'lab'?: string;
    /**
    * Grant associated with the submission.
    */
    'award'?: string;
    'attachment'?: Attachment;
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
    * Title of the publication or communication.
    */
    'title'?: string;
    /**
    * Abstract of the publication or communication.
    */
    '_abstract'?: string;
    /**
    * The authors of the publication.
    */
    'authors'?: string;
    /**
    * The date the publication or communication was published; must be in YYYY-MM-DD format.
    */
    'datePublished'?: string;
    /**
    * The date the publication was revised.
    */
    'dateRevised'?: string;
    /**
    * The issue of the publication.
    */
    'issue'?: string;
    /**
    * Pagination of the reference
    */
    'page'?: string;
    /**
    * The volume of the publication.
    */
    'volume'?: string;
    /**
    * The journal of the publication.
    */
    'journal'?: string;
    /**
    * The affiliation of the lab with a larger organization, such as IGVF.
    */
    'publishedBy'?: Set<Publication.PublishedByEnum>;
    'id'?: string;
    'type'?: Array<string>;
    /**
    * A summary of the publication.
    */
    'summary'?: string;
    /**
    * The year the publication was published.
    */
    'publicationYear'?: number;
    /**
    * The samples associated with this publication.
    */
    'samples'?: Set<string>;
    /**
    * The donors associated with this publication.
    */
    'donors'?: Set<string>;
    /**
    * The file sets associated with this publication.
    */
    'fileSets'?: Set<string>;
    /**
    * The workflows associated with this publication.
    */
    'workflows'?: Set<string>;
    /**
    * The software associated with this publication.
    */
    'software'?: Set<string>;
    /**
    * The software versions associated with this publication.
    */
    'softwareVersions'?: Set<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "releaseTimestamp",
            "baseName": "release_timestamp",
            "type": "string"
        },
        {
            "name": "publicationIdentifiers",
            "baseName": "publication_identifiers",
            "type": "Set<string>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Publication.StatusEnum"
        },
        {
            "name": "lab",
            "baseName": "lab",
            "type": "string"
        },
        {
            "name": "award",
            "baseName": "award",
            "type": "string"
        },
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Attachment"
        },
        {
            "name": "schemaVersion",
            "baseName": "schema_version",
            "type": "string"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "aliases",
            "baseName": "aliases",
            "type": "Set<string>"
        },
        {
            "name": "creationTimestamp",
            "baseName": "creation_timestamp",
            "type": "string"
        },
        {
            "name": "submittedBy",
            "baseName": "submitted_by",
            "type": "string"
        },
        {
            "name": "submitterComment",
            "baseName": "submitter_comment",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "_abstract",
            "baseName": "abstract",
            "type": "string"
        },
        {
            "name": "authors",
            "baseName": "authors",
            "type": "string"
        },
        {
            "name": "datePublished",
            "baseName": "date_published",
            "type": "string"
        },
        {
            "name": "dateRevised",
            "baseName": "date_revised",
            "type": "string"
        },
        {
            "name": "issue",
            "baseName": "issue",
            "type": "string"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "string"
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string"
        },
        {
            "name": "journal",
            "baseName": "journal",
            "type": "string"
        },
        {
            "name": "publishedBy",
            "baseName": "published_by",
            "type": "Set<Publication.PublishedByEnum>"
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "Array<string>"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "publicationYear",
            "baseName": "publication_year",
            "type": "number"
        },
        {
            "name": "samples",
            "baseName": "samples",
            "type": "Set<string>"
        },
        {
            "name": "donors",
            "baseName": "donors",
            "type": "Set<string>"
        },
        {
            "name": "fileSets",
            "baseName": "file_sets",
            "type": "Set<string>"
        },
        {
            "name": "workflows",
            "baseName": "workflows",
            "type": "Set<string>"
        },
        {
            "name": "software",
            "baseName": "software",
            "type": "Set<string>"
        },
        {
            "name": "softwareVersions",
            "baseName": "software_versions",
            "type": "Set<string>"
        }    ];

    static getAttributeTypeMap() {
        return Publication.attributeTypeMap;
    }
}

export namespace Publication {
    export enum StatusEnum {
        Archived = <any> 'archived',
        Deleted = <any> 'deleted',
        InProgress = <any> 'in progress',
        Released = <any> 'released'
    }
    export enum PublishedByEnum {
        Community = <any> 'community',
        Igvf = <any> 'IGVF',
        Encode = <any> 'ENCODE'
    }
}
