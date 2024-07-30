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

/**
* A rodent donor of a biosample. Submission of any sample originating from a rodent donor requires submission of information about the relevant donor. The rodent donor can be a generic representative of an inbred strain, or a unique, individual mouse. For example, submission of a B6 mouse donor is a prerequisite for submission of any B6 mouse samples.
*/
export class RodentDonor {
    /**
    * The date the object was released.
    */
    'releaseTimestamp'?: string;
    /**
    * The species of the organism.
    */
    'taxa'?: RodentDonor.TaxaEnum;
    /**
    * The publications associated with this object.
    */
    'publications'?: Set<string>;
    /**
    * The publication identifiers that provide more information about the object.
    */
    'publicationIdentifiers'?: Set<string>;
    /**
    * An external resource with additional information.
    */
    'url'?: string;
    /**
    * The originating lab(s) or vendor(s).
    */
    'sources'?: Set<string>;
    /**
    * The lot identifier provided by the originating lab or vendor.
    */
    'lotId'?: string;
    /**
    * The product identifier provided by the originating lab or vendor.
    */
    'productId'?: string;
    /**
    * Documents that provide additional information (not data file).
    */
    'documents'?: Set<string>;
    /**
    * Lab associated with the submission.
    */
    'lab'?: string;
    /**
    * Grant associated with the submission.
    */
    'award'?: string;
    /**
    * A unique identifier to be used to reference the object prefixed with IGVF.
    */
    'accession'?: string;
    /**
    * Accessions previously assigned to objects that have been merged with this object.
    */
    'alternateAccessions'?: Set<string>;
    /**
    * Some samples are part of particular data collections.
    */
    'collections'?: Set<RodentDonor.CollectionsEnum>;
    /**
    * The status of the metadata object.
    */
    'status'?: RodentDonor.StatusEnum;
    /**
    * Explanation of why an object was transitioned to the revoked status.
    */
    'revokeDetail'?: string;
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
    * Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF donors.
    */
    'dbxrefs'?: Set<string>;
    /**
    * Sex of the donor.
    */
    'sex'?: RodentDonor.SexEnum;
    /**
    * A list of associated phenotypic features of the donor.
    */
    'phenotypicFeatures'?: Set<string>;
    /**
    * Virtual donors are not representing actual human or model organism donors, samples coming from which were used in experiments, but rather capturing metadata about hypothetical donors that the reported analysis results are relevant for.
    */
    'virtual'?: boolean;
    /**
    * The specific parent strain designation of a non-human donor.
    */
    'strainBackground'?: RodentDonor.StrainBackgroundEnum;
    /**
    * The specific strain designation of a non-human donor.
    */
    'strain'?: string;
    /**
    * The genotype of the strain according to accepted nomenclature conventions.
    */
    'genotype'?: string;
    /**
    * This rodent donor represents an individual rodent.
    */
    'individualRodent'?: boolean;
    /**
    * The identifier for this individual rodent donor.
    */
    'rodentIdentifier'?: string;
    'id'?: string;
    'type'?: Array<string>;
    /**
    * A summary of the rodent donor.
    */
    'summary'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "releaseTimestamp",
            "baseName": "release_timestamp",
            "type": "string"
        },
        {
            "name": "taxa",
            "baseName": "taxa",
            "type": "RodentDonor.TaxaEnum"
        },
        {
            "name": "publications",
            "baseName": "publications",
            "type": "Set<string>"
        },
        {
            "name": "publicationIdentifiers",
            "baseName": "publication_identifiers",
            "type": "Set<string>"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Set<string>"
        },
        {
            "name": "lotId",
            "baseName": "lot_id",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Set<string>"
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
            "name": "accession",
            "baseName": "accession",
            "type": "string"
        },
        {
            "name": "alternateAccessions",
            "baseName": "alternate_accessions",
            "type": "Set<string>"
        },
        {
            "name": "collections",
            "baseName": "collections",
            "type": "Set<RodentDonor.CollectionsEnum>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "RodentDonor.StatusEnum"
        },
        {
            "name": "revokeDetail",
            "baseName": "revoke_detail",
            "type": "string"
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
            "name": "dbxrefs",
            "baseName": "dbxrefs",
            "type": "Set<string>"
        },
        {
            "name": "sex",
            "baseName": "sex",
            "type": "RodentDonor.SexEnum"
        },
        {
            "name": "phenotypicFeatures",
            "baseName": "phenotypic_features",
            "type": "Set<string>"
        },
        {
            "name": "virtual",
            "baseName": "virtual",
            "type": "boolean"
        },
        {
            "name": "strainBackground",
            "baseName": "strain_background",
            "type": "RodentDonor.StrainBackgroundEnum"
        },
        {
            "name": "strain",
            "baseName": "strain",
            "type": "string"
        },
        {
            "name": "genotype",
            "baseName": "genotype",
            "type": "string"
        },
        {
            "name": "individualRodent",
            "baseName": "individual_rodent",
            "type": "boolean"
        },
        {
            "name": "rodentIdentifier",
            "baseName": "rodent_identifier",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return RodentDonor.attributeTypeMap;
    }
}

export namespace RodentDonor {
    export enum TaxaEnum {
        MusMusculus = <any> 'Mus musculus'
    }
    export enum CollectionsEnum {
        ClinGen = <any> 'ClinGen',
        Encode = <any> 'ENCODE',
        GregoR = <any> 'GREGoR',
        IgvfCatalogBetaV01 = <any> 'IGVF_catalog_beta_v0.1',
        IgvfCatalogBetaV02 = <any> 'IGVF_catalog_beta_v0.2',
        IgvfCatalogBetaV03 = <any> 'IGVF_catalog_beta_v0.3',
        IgvfCatalogBetaV04 = <any> 'IGVF_catalog_beta_v0.4',
        MaveDb = <any> 'MaveDB',
        MprAbase = <any> 'MPRAbase',
        Vista = <any> 'Vista'
    }
    export enum StatusEnum {
        InProgress = <any> 'in progress',
        Released = <any> 'released',
        Deleted = <any> 'deleted',
        Replaced = <any> 'replaced',
        Revoked = <any> 'revoked',
        Archived = <any> 'archived'
    }
    export enum SexEnum {
        Male = <any> 'male',
        Female = <any> 'female',
        Unspecified = <any> 'unspecified'
    }
    export enum StrainBackgroundEnum {
        AJAj = <any> 'A/J (AJ)',
        C57Bl6JB6 = <any> 'C57BL/6J (B6)',
        _129S1SvImJ129 = <any> '129S1/SvImJ (129)',
        NodShiLtJNod = <any> 'NOD/ShiLtJ (NOD)',
        NzoH1LtJNzo = <any> 'NZO/H1LtJ (NZO)',
        CastEiJCast = <any> 'CAST/EiJ (CAST)',
        PwkPhJPwk = <any> 'PWK/PhJ (PWK)',
        WsbEiJWsb = <any> 'WSB/EiJ (WSB)',
        CastMMCastaneus = <any> 'CAST (M. m. castaneus)',
        WsbMMDomesticus = <any> 'WSB (M. m. domesticus)',
        PwkMMMusculus = <any> 'PWK (M. m. musculus)'
    }
}
