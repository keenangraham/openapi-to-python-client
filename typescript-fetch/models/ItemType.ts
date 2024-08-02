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


/**
 * 
 * @export
 */
export const ItemType = {
    AccessKey: 'AccessKey',
    AnalysisStep: 'AnalysisStep',
    AnalysisStepVersion: 'AnalysisStepVersion',
    Award: 'Award',
    Biomarker: 'Biomarker',
    Document: 'Document',
    HumanDonor: 'HumanDonor',
    RodentDonor: 'RodentDonor',
    AlignmentFile: 'AlignmentFile',
    ConfigurationFile: 'ConfigurationFile',
    GenomeBrowserAnnotationFile: 'GenomeBrowserAnnotationFile',
    ImageFile: 'ImageFile',
    MatrixFile: 'MatrixFile',
    ModelFile: 'ModelFile',
    ReferenceFile: 'ReferenceFile',
    SequenceFile: 'SequenceFile',
    SignalFile: 'SignalFile',
    TabularFile: 'TabularFile',
    AnalysisSet: 'AnalysisSet',
    AuxiliarySet: 'AuxiliarySet',
    ConstructLibrarySet: 'ConstructLibrarySet',
    CuratedSet: 'CuratedSet',
    MeasurementSet: 'MeasurementSet',
    ModelSet: 'ModelSet',
    PredictionSet: 'PredictionSet',
    Gene: 'Gene',
    Image: 'Image',
    InstitutionalCertificate: 'InstitutionalCertificate',
    Lab: 'Lab',
    CrisprModification: 'CrisprModification',
    DegronModification: 'DegronModification',
    AssayTerm: 'AssayTerm',
    PhenotypeTerm: 'PhenotypeTerm',
    PlatformTerm: 'PlatformTerm',
    SampleTerm: 'SampleTerm',
    OpenReadingFrame: 'OpenReadingFrame',
    Page: 'Page',
    PhenotypicFeature: 'PhenotypicFeature',
    Publication: 'Publication',
    InVitroSystem: 'InVitroSystem',
    MultiplexedSample: 'MultiplexedSample',
    PrimaryCell: 'PrimaryCell',
    TechnicalSample: 'TechnicalSample',
    Tissue: 'Tissue',
    WholeOrganism: 'WholeOrganism',
    Software: 'Software',
    SoftwareVersion: 'SoftwareVersion',
    Source: 'Source',
    Treatment: 'Treatment',
    User: 'User',
    Workflow: 'Workflow'
} as const;
export type ItemType = typeof ItemType[keyof typeof ItemType];


export function instanceOfItemType(value: any): boolean {
    for (const key in ItemType) {
        if (Object.prototype.hasOwnProperty.call(ItemType, key)) {
            if (ItemType[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ItemTypeFromJSON(json: any): ItemType {
    return ItemTypeFromJSONTyped(json, false);
}

export function ItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemType {
    return json as ItemType;
}

export function ItemTypeToJSON(value?: ItemType | null): any {
    return value as any;
}
