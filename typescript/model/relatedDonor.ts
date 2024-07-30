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
* Familial relation of this donor.
*/
export class RelatedDonor {
    /**
    * An identifier for the related donor.
    */
    'donor': string;
    /**
    * A descriptive term for the related donor’s relationship to this donor.
    */
    'relationshipType': RelatedDonor.RelationshipTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "donor",
            "baseName": "donor",
            "type": "string"
        },
        {
            "name": "relationshipType",
            "baseName": "relationship_type",
            "type": "RelatedDonor.RelationshipTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return RelatedDonor.attributeTypeMap;
    }
}

export namespace RelatedDonor {
    export enum RelationshipTypeEnum {
        Aunt = <any> 'aunt',
        Child = <any> 'child',
        FirstCousinOnceRemoved = <any> 'first cousin once removed',
        FirstCousin = <any> 'first cousin',
        FraternalTwin = <any> 'fraternal twin',
        Grandparent = <any> 'grandparent',
        HalfSibling = <any> 'half-sibling',
        Niece = <any> 'niece',
        Nephew = <any> 'nephew',
        Parent = <any> 'parent',
        PaternalTwin = <any> 'paternal twin',
        Sibling = <any> 'sibling',
        SecondCousin = <any> 'second cousin',
        Uncle = <any> 'uncle'
    }
}
