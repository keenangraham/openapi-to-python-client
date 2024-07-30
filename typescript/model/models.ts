import localVarRequest from 'request';

export * from './accessKey';
export * from './accessKeyResults';
export * from './alignmentFile';
export * from './alignmentFileResults';
export * from './analysisSet';
export * from './analysisSetResults';
export * from './analysisStep';
export * from './analysisStepResults';
export * from './analysisStepVersion';
export * from './analysisStepVersionResults';
export * from './assayTerm';
export * from './assayTermResults';
export * from './attachment';
export * from './attachment1';
export * from './auxiliarySet';
export * from './auxiliarySetResults';
export * from './award';
export * from './awardResults';
export * from './biomarker';
export * from './biomarkerResults';
export * from './configurationFile';
export * from './configurationFileResults';
export * from './constructLibrarySet';
export * from './constructLibrarySetResults';
export * from './crisprModification';
export * from './crisprModificationResults';
export * from './curatedSet';
export * from './curatedSetResults';
export * from './degronModification';
export * from './degronModificationResults';
export * from './document';
export * from './documentResults';
export * from './gene';
export * from './geneLocation';
export * from './geneLocation1';
export * from './geneResults';
export * from './genomeBrowserAnnotationFile';
export * from './genomeBrowserAnnotationFileResults';
export * from './humanDonor';
export * from './humanDonorResults';
export * from './image';
export * from './imageFile';
export * from './imageFileResults';
export * from './imageResults';
export * from './inVitroSystem';
export * from './inVitroSystemResults';
export * from './institutionalCertificate';
export * from './institutionalCertificateResults';
export * from './item';
export * from './itemType';
export * from './lab';
export * from './labResults';
export * from './limit';
export * from './locus';
export * from './locus1';
export * from './matrixFile';
export * from './matrixFileResults';
export * from './measurementSet';
export * from './measurementSetResults';
export * from './modelFile';
export * from './modelFileResults';
export * from './modelSet';
export * from './modelSetResults';
export * from './multiplexedSample';
export * from './multiplexedSampleResults';
export * from './noResultsResponse';
export * from './noResultsResponseColumnsValue';
export * from './noResultsResponseFacetGroupsInner';
export * from './noResultsResponseFacetsInner';
export * from './noResultsResponseFacetsInnerTermsInner';
export * from './noResultsResponseFiltersInner';
export * from './noResultsResponseSortValue';
export * from './openReadingFrame';
export * from './openReadingFrameResults';
export * from './page';
export * from './pageLayout';
export * from './pageLayoutComponents';
export * from './pageResults';
export * from './phenotypeTerm';
export * from './phenotypeTermResults';
export * from './phenotypicFeature';
export * from './phenotypicFeatureResults';
export * from './platformTerm';
export * from './platformTermResults';
export * from './predictionSet';
export * from './predictionSetResults';
export * from './primaryCell';
export * from './primaryCellResults';
export * from './publication';
export * from './publicationResults';
export * from './referenceFile';
export * from './referenceFileResults';
export * from './relatedDonor';
export * from './rodentDonor';
export * from './rodentDonorResults';
export * from './sampleTerm';
export * from './sampleTermResults';
export * from './searchFacet';
export * from './searchResultItem';
export * from './searchResults';
export * from './sequenceFile';
export * from './sequenceFileResults';
export * from './signalFile';
export * from './signalFileResults';
export * from './software';
export * from './softwareResults';
export * from './softwareVersion';
export * from './softwareVersionResults';
export * from './source';
export * from './sourceResults';
export * from './tabularFile';
export * from './tabularFileResults';
export * from './technicalSample';
export * from './technicalSampleResults';
export * from './tile';
export * from './tissue';
export * from './tissueResults';
export * from './treatment';
export * from './treatmentResults';
export * from './user';
export * from './userResults';
export * from './wholeOrganism';
export * from './wholeOrganismResults';
export * from './workflow';
export * from './workflowResults';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccessKey } from './accessKey';
import { AccessKeyResults } from './accessKeyResults';
import { AlignmentFile } from './alignmentFile';
import { AlignmentFileResults } from './alignmentFileResults';
import { AnalysisSet } from './analysisSet';
import { AnalysisSetResults } from './analysisSetResults';
import { AnalysisStep } from './analysisStep';
import { AnalysisStepResults } from './analysisStepResults';
import { AnalysisStepVersion } from './analysisStepVersion';
import { AnalysisStepVersionResults } from './analysisStepVersionResults';
import { AssayTerm } from './assayTerm';
import { AssayTermResults } from './assayTermResults';
import { Attachment } from './attachment';
import { Attachment1 } from './attachment1';
import { AuxiliarySet } from './auxiliarySet';
import { AuxiliarySetResults } from './auxiliarySetResults';
import { Award } from './award';
import { AwardResults } from './awardResults';
import { Biomarker } from './biomarker';
import { BiomarkerResults } from './biomarkerResults';
import { ConfigurationFile } from './configurationFile';
import { ConfigurationFileResults } from './configurationFileResults';
import { ConstructLibrarySet } from './constructLibrarySet';
import { ConstructLibrarySetResults } from './constructLibrarySetResults';
import { CrisprModification } from './crisprModification';
import { CrisprModificationResults } from './crisprModificationResults';
import { CuratedSet } from './curatedSet';
import { CuratedSetResults } from './curatedSetResults';
import { DegronModification } from './degronModification';
import { DegronModificationResults } from './degronModificationResults';
import { Document } from './document';
import { DocumentResults } from './documentResults';
import { Gene } from './gene';
import { GeneLocation } from './geneLocation';
import { GeneLocation1 } from './geneLocation1';
import { GeneResults } from './geneResults';
import { GenomeBrowserAnnotationFile } from './genomeBrowserAnnotationFile';
import { GenomeBrowserAnnotationFileResults } from './genomeBrowserAnnotationFileResults';
import { HumanDonor } from './humanDonor';
import { HumanDonorResults } from './humanDonorResults';
import { Image } from './image';
import { ImageFile } from './imageFile';
import { ImageFileResults } from './imageFileResults';
import { ImageResults } from './imageResults';
import { InVitroSystem } from './inVitroSystem';
import { InVitroSystemResults } from './inVitroSystemResults';
import { InstitutionalCertificate } from './institutionalCertificate';
import { InstitutionalCertificateResults } from './institutionalCertificateResults';
import { Item } from './item';
import { ItemType } from './itemType';
import { Lab } from './lab';
import { LabResults } from './labResults';
import { Limit } from './limit';
import { Locus } from './locus';
import { Locus1 } from './locus1';
import { MatrixFile } from './matrixFile';
import { MatrixFileResults } from './matrixFileResults';
import { MeasurementSet } from './measurementSet';
import { MeasurementSetResults } from './measurementSetResults';
import { ModelFile } from './modelFile';
import { ModelFileResults } from './modelFileResults';
import { ModelSet } from './modelSet';
import { ModelSetResults } from './modelSetResults';
import { MultiplexedSample } from './multiplexedSample';
import { MultiplexedSampleResults } from './multiplexedSampleResults';
import { NoResultsResponse } from './noResultsResponse';
import { NoResultsResponseColumnsValue } from './noResultsResponseColumnsValue';
import { NoResultsResponseFacetGroupsInner } from './noResultsResponseFacetGroupsInner';
import { NoResultsResponseFacetsInner } from './noResultsResponseFacetsInner';
import { NoResultsResponseFacetsInnerTermsInner } from './noResultsResponseFacetsInnerTermsInner';
import { NoResultsResponseFiltersInner } from './noResultsResponseFiltersInner';
import { NoResultsResponseSortValue } from './noResultsResponseSortValue';
import { OpenReadingFrame } from './openReadingFrame';
import { OpenReadingFrameResults } from './openReadingFrameResults';
import { Page } from './page';
import { PageLayout } from './pageLayout';
import { PageLayoutComponents } from './pageLayoutComponents';
import { PageResults } from './pageResults';
import { PhenotypeTerm } from './phenotypeTerm';
import { PhenotypeTermResults } from './phenotypeTermResults';
import { PhenotypicFeature } from './phenotypicFeature';
import { PhenotypicFeatureResults } from './phenotypicFeatureResults';
import { PlatformTerm } from './platformTerm';
import { PlatformTermResults } from './platformTermResults';
import { PredictionSet } from './predictionSet';
import { PredictionSetResults } from './predictionSetResults';
import { PrimaryCell } from './primaryCell';
import { PrimaryCellResults } from './primaryCellResults';
import { Publication } from './publication';
import { PublicationResults } from './publicationResults';
import { ReferenceFile } from './referenceFile';
import { ReferenceFileResults } from './referenceFileResults';
import { RelatedDonor } from './relatedDonor';
import { RodentDonor } from './rodentDonor';
import { RodentDonorResults } from './rodentDonorResults';
import { SampleTerm } from './sampleTerm';
import { SampleTermResults } from './sampleTermResults';
import { SearchFacet } from './searchFacet';
import { SearchResultItem } from './searchResultItem';
import { SearchResults } from './searchResults';
import { SequenceFile } from './sequenceFile';
import { SequenceFileResults } from './sequenceFileResults';
import { SignalFile } from './signalFile';
import { SignalFileResults } from './signalFileResults';
import { Software } from './software';
import { SoftwareResults } from './softwareResults';
import { SoftwareVersion } from './softwareVersion';
import { SoftwareVersionResults } from './softwareVersionResults';
import { Source } from './source';
import { SourceResults } from './sourceResults';
import { TabularFile } from './tabularFile';
import { TabularFileResults } from './tabularFileResults';
import { TechnicalSample } from './technicalSample';
import { TechnicalSampleResults } from './technicalSampleResults';
import { Tile } from './tile';
import { Tissue } from './tissue';
import { TissueResults } from './tissueResults';
import { Treatment } from './treatment';
import { TreatmentResults } from './treatmentResults';
import { User } from './user';
import { UserResults } from './userResults';
import { WholeOrganism } from './wholeOrganism';
import { WholeOrganismResults } from './wholeOrganismResults';
import { Workflow } from './workflow';
import { WorkflowResults } from './workflowResults';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccessKey.StatusEnum": AccessKey.StatusEnum,
        "AlignmentFile.TranscriptomeAnnotationEnum": AlignmentFile.TranscriptomeAnnotationEnum,
        "AlignmentFile.AssemblyEnum": AlignmentFile.AssemblyEnum,
        "AlignmentFile.CollectionsEnum": AlignmentFile.CollectionsEnum,
        "AlignmentFile.StatusEnum": AlignmentFile.StatusEnum,
        "AlignmentFile.FileFormatEnum": AlignmentFile.FileFormatEnum,
        "AlignmentFile.UploadStatusEnum": AlignmentFile.UploadStatusEnum,
        "AnalysisSet.CollectionsEnum": AnalysisSet.CollectionsEnum,
        "AnalysisSet.StatusEnum": AnalysisSet.StatusEnum,
        "AnalysisSet.FileSetTypeEnum": AnalysisSet.FileSetTypeEnum,
        "AnalysisStep.StatusEnum": AnalysisStep.StatusEnum,
        "AnalysisStep.AnalysisStepTypesEnum": AnalysisStep.AnalysisStepTypesEnum,
        "AnalysisStepVersion.StatusEnum": AnalysisStepVersion.StatusEnum,
        "AssayTerm.StatusEnum": AssayTerm.StatusEnum,
        "AssayTerm.PreferredAssayTitlesEnum": AssayTerm.PreferredAssayTitlesEnum,
        "Attachment.TypeEnum": Attachment.TypeEnum,
        "Attachment1.TypeEnum": Attachment1.TypeEnum,
        "AuxiliarySet.CollectionsEnum": AuxiliarySet.CollectionsEnum,
        "AuxiliarySet.StatusEnum": AuxiliarySet.StatusEnum,
        "AuxiliarySet.FileSetTypeEnum": AuxiliarySet.FileSetTypeEnum,
        "Award.StatusEnum": Award.StatusEnum,
        "Award.ProjectEnum": Award.ProjectEnum,
        "Award.ViewingGroupEnum": Award.ViewingGroupEnum,
        "Award.ComponentEnum": Award.ComponentEnum,
        "Biomarker.StatusEnum": Biomarker.StatusEnum,
        "Biomarker.ClassificationEnum": Biomarker.ClassificationEnum,
        "Biomarker.QuantificationEnum": Biomarker.QuantificationEnum,
        "ConfigurationFile.CollectionsEnum": ConfigurationFile.CollectionsEnum,
        "ConfigurationFile.StatusEnum": ConfigurationFile.StatusEnum,
        "ConfigurationFile.FileFormatEnum": ConfigurationFile.FileFormatEnum,
        "ConfigurationFile.UploadStatusEnum": ConfigurationFile.UploadStatusEnum,
        "ConstructLibrarySet.CollectionsEnum": ConstructLibrarySet.CollectionsEnum,
        "ConstructLibrarySet.StatusEnum": ConstructLibrarySet.StatusEnum,
        "ConstructLibrarySet.FileSetTypeEnum": ConstructLibrarySet.FileSetTypeEnum,
        "ConstructLibrarySet.ScopeEnum": ConstructLibrarySet.ScopeEnum,
        "ConstructLibrarySet.SelectionCriteriaEnum": ConstructLibrarySet.SelectionCriteriaEnum,
        "ConstructLibrarySet.GuideTypeEnum": ConstructLibrarySet.GuideTypeEnum,
        "ConstructLibrarySet.TilingModalityEnum": ConstructLibrarySet.TilingModalityEnum,
        "CrisprModification.StatusEnum": CrisprModification.StatusEnum,
        "CrisprModification.ModalityEnum": CrisprModification.ModalityEnum,
        "CrisprModification.CasEnum": CrisprModification.CasEnum,
        "CrisprModification.FusedDomainEnum": CrisprModification.FusedDomainEnum,
        "CrisprModification.CasSpeciesEnum": CrisprModification.CasSpeciesEnum,
        "CuratedSet.TaxaEnum": CuratedSet.TaxaEnum,
        "CuratedSet.CollectionsEnum": CuratedSet.CollectionsEnum,
        "CuratedSet.StatusEnum": CuratedSet.StatusEnum,
        "CuratedSet.FileSetTypeEnum": CuratedSet.FileSetTypeEnum,
        "DegronModification.StatusEnum": DegronModification.StatusEnum,
        "DegronModification.ModalityEnum": DegronModification.ModalityEnum,
        "DegronModification.DegronSystemEnum": DegronModification.DegronSystemEnum,
        "Document.StatusEnum": Document.StatusEnum,
        "Document.DocumentTypeEnum": Document.DocumentTypeEnum,
        "Document.CharacterizationMethodEnum": Document.CharacterizationMethodEnum,
        "Gene.TranscriptomeAnnotationEnum": Gene.TranscriptomeAnnotationEnum,
        "Gene.TaxaEnum": Gene.TaxaEnum,
        "Gene.StatusEnum": Gene.StatusEnum,
        "GeneLocation.AssemblyEnum": GeneLocation.AssemblyEnum,
        "GeneLocation1.AssemblyEnum": GeneLocation1.AssemblyEnum,
        "GenomeBrowserAnnotationFile.AssemblyEnum": GenomeBrowserAnnotationFile.AssemblyEnum,
        "GenomeBrowserAnnotationFile.FileFormatTypeEnum": GenomeBrowserAnnotationFile.FileFormatTypeEnum,
        "GenomeBrowserAnnotationFile.TranscriptomeAnnotationEnum": GenomeBrowserAnnotationFile.TranscriptomeAnnotationEnum,
        "GenomeBrowserAnnotationFile.CollectionsEnum": GenomeBrowserAnnotationFile.CollectionsEnum,
        "GenomeBrowserAnnotationFile.StatusEnum": GenomeBrowserAnnotationFile.StatusEnum,
        "GenomeBrowserAnnotationFile.FileFormatEnum": GenomeBrowserAnnotationFile.FileFormatEnum,
        "GenomeBrowserAnnotationFile.UploadStatusEnum": GenomeBrowserAnnotationFile.UploadStatusEnum,
        "HumanDonor.TaxaEnum": HumanDonor.TaxaEnum,
        "HumanDonor.CollectionsEnum": HumanDonor.CollectionsEnum,
        "HumanDonor.StatusEnum": HumanDonor.StatusEnum,
        "HumanDonor.SexEnum": HumanDonor.SexEnum,
        "HumanDonor.EthnicitiesEnum": HumanDonor.EthnicitiesEnum,
        "Image.StatusEnum": Image.StatusEnum,
        "ImageFile.CollectionsEnum": ImageFile.CollectionsEnum,
        "ImageFile.StatusEnum": ImageFile.StatusEnum,
        "ImageFile.FileFormatEnum": ImageFile.FileFormatEnum,
        "ImageFile.UploadStatusEnum": ImageFile.UploadStatusEnum,
        "InVitroSystem.TaxaEnum": InVitroSystem.TaxaEnum,
        "InVitroSystem.CollectionsEnum": InVitroSystem.CollectionsEnum,
        "InVitroSystem.StatusEnum": InVitroSystem.StatusEnum,
        "InVitroSystem.AgeUnitsEnum": InVitroSystem.AgeUnitsEnum,
        "InVitroSystem.StartingAmountUnitsEnum": InVitroSystem.StartingAmountUnitsEnum,
        "InVitroSystem.NucleicAcidDeliveryEnum": InVitroSystem.NucleicAcidDeliveryEnum,
        "InVitroSystem.TimePostLibraryDeliveryUnitsEnum": InVitroSystem.TimePostLibraryDeliveryUnitsEnum,
        "InVitroSystem.ClassificationsEnum": InVitroSystem.ClassificationsEnum,
        "InVitroSystem.TimePostChangeUnitsEnum": InVitroSystem.TimePostChangeUnitsEnum,
        "InVitroSystem.GrowthMediumEnum": InVitroSystem.GrowthMediumEnum,
        "InVitroSystem.SexEnum": InVitroSystem.SexEnum,
        "InstitutionalCertificate.StatusEnum": InstitutionalCertificate.StatusEnum,
        "InstitutionalCertificate.DataUseLimitationEnum": InstitutionalCertificate.DataUseLimitationEnum,
        "InstitutionalCertificate.DataUseLimitationModifiersEnum": InstitutionalCertificate.DataUseLimitationModifiersEnum,
        "Item.StatusEnum": Item.StatusEnum,
        "Item.AnalysisStepTypesEnum": Item.AnalysisStepTypesEnum,
        "Item.ProjectEnum": Item.ProjectEnum,
        "Item.ViewingGroupEnum": Item.ViewingGroupEnum,
        "Item.ComponentEnum": Item.ComponentEnum,
        "Item.ClassificationEnum": Item.ClassificationEnum,
        "Item.QuantificationEnum": Item.QuantificationEnum,
        "Item.DocumentTypeEnum": Item.DocumentTypeEnum,
        "Item.CharacterizationMethodEnum": Item.CharacterizationMethodEnum,
        "Item.TaxaEnum": Item.TaxaEnum,
        "Item.CollectionsEnum": Item.CollectionsEnum,
        "Item.SexEnum": Item.SexEnum,
        "Item.EthnicitiesEnum": Item.EthnicitiesEnum,
        "Item.StrainBackgroundEnum": Item.StrainBackgroundEnum,
        "Item.TranscriptomeAnnotationEnum": Item.TranscriptomeAnnotationEnum,
        "Item.AssemblyEnum": Item.AssemblyEnum,
        "Item.FileFormatEnum": Item.FileFormatEnum,
        "Item.UploadStatusEnum": Item.UploadStatusEnum,
        "Item.FileFormatTypeEnum": Item.FileFormatTypeEnum,
        "Item.Dimension1Enum": Item.Dimension1Enum,
        "Item.Dimension2Enum": Item.Dimension2Enum,
        "Item.SequencingKitEnum": Item.SequencingKitEnum,
        "Item.IlluminaReadTypeEnum": Item.IlluminaReadTypeEnum,
        "Item.StrandSpecificityEnum": Item.StrandSpecificityEnum,
        "Item.FileSetTypeEnum": Item.FileSetTypeEnum,
        "Item.ScopeEnum": Item.ScopeEnum,
        "Item.SelectionCriteriaEnum": Item.SelectionCriteriaEnum,
        "Item.GuideTypeEnum": Item.GuideTypeEnum,
        "Item.TilingModalityEnum": Item.TilingModalityEnum,
        "Item.PreferredAssayTitleEnum": Item.PreferredAssayTitleEnum,
        "Item.SequencingLibraryTypesEnum": Item.SequencingLibraryTypesEnum,
        "Item.PredictionObjectsEnum": Item.PredictionObjectsEnum,
        "Item.DataUseLimitationEnum": Item.DataUseLimitationEnum,
        "Item.DataUseLimitationModifiersEnum": Item.DataUseLimitationModifiersEnum,
        "Item.ModalityEnum": Item.ModalityEnum,
        "Item.CasEnum": Item.CasEnum,
        "Item.FusedDomainEnum": Item.FusedDomainEnum,
        "Item.CasSpeciesEnum": Item.CasSpeciesEnum,
        "Item.DegronSystemEnum": Item.DegronSystemEnum,
        "Item.PreferredAssayTitlesEnum": Item.PreferredAssayTitlesEnum,
        "Item.CompanyEnum": Item.CompanyEnum,
        "Item.SequencingKitsEnum": Item.SequencingKitsEnum,
        "Item.QuantityUnitsEnum": Item.QuantityUnitsEnum,
        "Item.PublishedByEnum": Item.PublishedByEnum,
        "Item.AgeUnitsEnum": Item.AgeUnitsEnum,
        "Item.StartingAmountUnitsEnum": Item.StartingAmountUnitsEnum,
        "Item.NucleicAcidDeliveryEnum": Item.NucleicAcidDeliveryEnum,
        "Item.TimePostLibraryDeliveryUnitsEnum": Item.TimePostLibraryDeliveryUnitsEnum,
        "Item.TimePostChangeUnitsEnum": Item.TimePostChangeUnitsEnum,
        "Item.GrowthMediumEnum": Item.GrowthMediumEnum,
        "Item.SampleMaterialEnum": Item.SampleMaterialEnum,
        "Item.PmiUnitsEnum": Item.PmiUnitsEnum,
        "Item.PreservationMethodEnum": Item.PreservationMethodEnum,
        "Item.UsedByEnum": Item.UsedByEnum,
        "Item.AmountUnitsEnum": Item.AmountUnitsEnum,
        "Item.DurationUnitsEnum": Item.DurationUnitsEnum,
        "Item.PurposeEnum": Item.PurposeEnum,
        "Item.PostTreatmentTimeUnitsEnum": Item.PostTreatmentTimeUnitsEnum,
        "Item.TemperatureUnitsEnum": Item.TemperatureUnitsEnum,
        "Item.TreatmentTypeEnum": Item.TreatmentTypeEnum,
        "Item.GroupsEnum": Item.GroupsEnum,
        "Item.ViewingGroupsEnum": Item.ViewingGroupsEnum,
        "Item.JobTitleEnum": Item.JobTitleEnum,
        "ItemType": ItemType,
        "Lab.StatusEnum": Lab.StatusEnum,
        "Locus.AssemblyEnum": Locus.AssemblyEnum,
        "Locus1.AssemblyEnum": Locus1.AssemblyEnum,
        "MatrixFile.CollectionsEnum": MatrixFile.CollectionsEnum,
        "MatrixFile.StatusEnum": MatrixFile.StatusEnum,
        "MatrixFile.FileFormatEnum": MatrixFile.FileFormatEnum,
        "MatrixFile.UploadStatusEnum": MatrixFile.UploadStatusEnum,
        "MatrixFile.Dimension1Enum": MatrixFile.Dimension1Enum,
        "MatrixFile.Dimension2Enum": MatrixFile.Dimension2Enum,
        "MeasurementSet.CollectionsEnum": MeasurementSet.CollectionsEnum,
        "MeasurementSet.StatusEnum": MeasurementSet.StatusEnum,
        "MeasurementSet.FileSetTypeEnum": MeasurementSet.FileSetTypeEnum,
        "MeasurementSet.PreferredAssayTitleEnum": MeasurementSet.PreferredAssayTitleEnum,
        "MeasurementSet.SequencingLibraryTypesEnum": MeasurementSet.SequencingLibraryTypesEnum,
        "ModelFile.CollectionsEnum": ModelFile.CollectionsEnum,
        "ModelFile.StatusEnum": ModelFile.StatusEnum,
        "ModelFile.FileFormatEnum": ModelFile.FileFormatEnum,
        "ModelFile.UploadStatusEnum": ModelFile.UploadStatusEnum,
        "OpenReadingFrame.StatusEnum": OpenReadingFrame.StatusEnum,
        "Page.StatusEnum": Page.StatusEnum,
        "PhenotypeTerm.StatusEnum": PhenotypeTerm.StatusEnum,
        "PhenotypicFeature.StatusEnum": PhenotypicFeature.StatusEnum,
        "PhenotypicFeature.QuantityUnitsEnum": PhenotypicFeature.QuantityUnitsEnum,
        "PlatformTerm.StatusEnum": PlatformTerm.StatusEnum,
        "PlatformTerm.CompanyEnum": PlatformTerm.CompanyEnum,
        "PlatformTerm.SequencingKitsEnum": PlatformTerm.SequencingKitsEnum,
        "PrimaryCell.TaxaEnum": PrimaryCell.TaxaEnum,
        "PrimaryCell.CollectionsEnum": PrimaryCell.CollectionsEnum,
        "PrimaryCell.StatusEnum": PrimaryCell.StatusEnum,
        "PrimaryCell.AgeUnitsEnum": PrimaryCell.AgeUnitsEnum,
        "PrimaryCell.StartingAmountUnitsEnum": PrimaryCell.StartingAmountUnitsEnum,
        "PrimaryCell.NucleicAcidDeliveryEnum": PrimaryCell.NucleicAcidDeliveryEnum,
        "PrimaryCell.TimePostLibraryDeliveryUnitsEnum": PrimaryCell.TimePostLibraryDeliveryUnitsEnum,
        "PrimaryCell.SexEnum": PrimaryCell.SexEnum,
        "Publication.StatusEnum": Publication.StatusEnum,
        "Publication.PublishedByEnum": Publication.PublishedByEnum,
        "ReferenceFile.AssemblyEnum": ReferenceFile.AssemblyEnum,
        "ReferenceFile.FileFormatTypeEnum": ReferenceFile.FileFormatTypeEnum,
        "ReferenceFile.TranscriptomeAnnotationEnum": ReferenceFile.TranscriptomeAnnotationEnum,
        "ReferenceFile.CollectionsEnum": ReferenceFile.CollectionsEnum,
        "ReferenceFile.StatusEnum": ReferenceFile.StatusEnum,
        "ReferenceFile.FileFormatEnum": ReferenceFile.FileFormatEnum,
        "ReferenceFile.UploadStatusEnum": ReferenceFile.UploadStatusEnum,
        "RelatedDonor.RelationshipTypeEnum": RelatedDonor.RelationshipTypeEnum,
        "RodentDonor.TaxaEnum": RodentDonor.TaxaEnum,
        "RodentDonor.CollectionsEnum": RodentDonor.CollectionsEnum,
        "RodentDonor.StatusEnum": RodentDonor.StatusEnum,
        "RodentDonor.SexEnum": RodentDonor.SexEnum,
        "RodentDonor.StrainBackgroundEnum": RodentDonor.StrainBackgroundEnum,
        "SampleTerm.StatusEnum": SampleTerm.StatusEnum,
        "SearchResultItem.StatusEnum": SearchResultItem.StatusEnum,
        "SearchResultItem.AnalysisStepTypesEnum": SearchResultItem.AnalysisStepTypesEnum,
        "SearchResultItem.ProjectEnum": SearchResultItem.ProjectEnum,
        "SearchResultItem.ViewingGroupEnum": SearchResultItem.ViewingGroupEnum,
        "SearchResultItem.ComponentEnum": SearchResultItem.ComponentEnum,
        "SearchResultItem.ClassificationEnum": SearchResultItem.ClassificationEnum,
        "SearchResultItem.QuantificationEnum": SearchResultItem.QuantificationEnum,
        "SearchResultItem.DocumentTypeEnum": SearchResultItem.DocumentTypeEnum,
        "SearchResultItem.CharacterizationMethodEnum": SearchResultItem.CharacterizationMethodEnum,
        "SearchResultItem.TaxaEnum": SearchResultItem.TaxaEnum,
        "SearchResultItem.CollectionsEnum": SearchResultItem.CollectionsEnum,
        "SearchResultItem.SexEnum": SearchResultItem.SexEnum,
        "SearchResultItem.EthnicitiesEnum": SearchResultItem.EthnicitiesEnum,
        "SearchResultItem.StrainBackgroundEnum": SearchResultItem.StrainBackgroundEnum,
        "SearchResultItem.TranscriptomeAnnotationEnum": SearchResultItem.TranscriptomeAnnotationEnum,
        "SearchResultItem.AssemblyEnum": SearchResultItem.AssemblyEnum,
        "SearchResultItem.FileFormatEnum": SearchResultItem.FileFormatEnum,
        "SearchResultItem.UploadStatusEnum": SearchResultItem.UploadStatusEnum,
        "SearchResultItem.FileFormatTypeEnum": SearchResultItem.FileFormatTypeEnum,
        "SearchResultItem.Dimension1Enum": SearchResultItem.Dimension1Enum,
        "SearchResultItem.Dimension2Enum": SearchResultItem.Dimension2Enum,
        "SearchResultItem.SequencingKitEnum": SearchResultItem.SequencingKitEnum,
        "SearchResultItem.IlluminaReadTypeEnum": SearchResultItem.IlluminaReadTypeEnum,
        "SearchResultItem.StrandSpecificityEnum": SearchResultItem.StrandSpecificityEnum,
        "SearchResultItem.FileSetTypeEnum": SearchResultItem.FileSetTypeEnum,
        "SearchResultItem.ScopeEnum": SearchResultItem.ScopeEnum,
        "SearchResultItem.SelectionCriteriaEnum": SearchResultItem.SelectionCriteriaEnum,
        "SearchResultItem.GuideTypeEnum": SearchResultItem.GuideTypeEnum,
        "SearchResultItem.TilingModalityEnum": SearchResultItem.TilingModalityEnum,
        "SearchResultItem.PreferredAssayTitleEnum": SearchResultItem.PreferredAssayTitleEnum,
        "SearchResultItem.SequencingLibraryTypesEnum": SearchResultItem.SequencingLibraryTypesEnum,
        "SearchResultItem.PredictionObjectsEnum": SearchResultItem.PredictionObjectsEnum,
        "SearchResultItem.DataUseLimitationEnum": SearchResultItem.DataUseLimitationEnum,
        "SearchResultItem.DataUseLimitationModifiersEnum": SearchResultItem.DataUseLimitationModifiersEnum,
        "SearchResultItem.ModalityEnum": SearchResultItem.ModalityEnum,
        "SearchResultItem.CasEnum": SearchResultItem.CasEnum,
        "SearchResultItem.FusedDomainEnum": SearchResultItem.FusedDomainEnum,
        "SearchResultItem.CasSpeciesEnum": SearchResultItem.CasSpeciesEnum,
        "SearchResultItem.DegronSystemEnum": SearchResultItem.DegronSystemEnum,
        "SearchResultItem.PreferredAssayTitlesEnum": SearchResultItem.PreferredAssayTitlesEnum,
        "SearchResultItem.CompanyEnum": SearchResultItem.CompanyEnum,
        "SearchResultItem.SequencingKitsEnum": SearchResultItem.SequencingKitsEnum,
        "SearchResultItem.QuantityUnitsEnum": SearchResultItem.QuantityUnitsEnum,
        "SearchResultItem.PublishedByEnum": SearchResultItem.PublishedByEnum,
        "SearchResultItem.AgeUnitsEnum": SearchResultItem.AgeUnitsEnum,
        "SearchResultItem.StartingAmountUnitsEnum": SearchResultItem.StartingAmountUnitsEnum,
        "SearchResultItem.NucleicAcidDeliveryEnum": SearchResultItem.NucleicAcidDeliveryEnum,
        "SearchResultItem.TimePostLibraryDeliveryUnitsEnum": SearchResultItem.TimePostLibraryDeliveryUnitsEnum,
        "SearchResultItem.TimePostChangeUnitsEnum": SearchResultItem.TimePostChangeUnitsEnum,
        "SearchResultItem.GrowthMediumEnum": SearchResultItem.GrowthMediumEnum,
        "SearchResultItem.SampleMaterialEnum": SearchResultItem.SampleMaterialEnum,
        "SearchResultItem.PmiUnitsEnum": SearchResultItem.PmiUnitsEnum,
        "SearchResultItem.PreservationMethodEnum": SearchResultItem.PreservationMethodEnum,
        "SearchResultItem.UsedByEnum": SearchResultItem.UsedByEnum,
        "SearchResultItem.AmountUnitsEnum": SearchResultItem.AmountUnitsEnum,
        "SearchResultItem.DurationUnitsEnum": SearchResultItem.DurationUnitsEnum,
        "SearchResultItem.PurposeEnum": SearchResultItem.PurposeEnum,
        "SearchResultItem.PostTreatmentTimeUnitsEnum": SearchResultItem.PostTreatmentTimeUnitsEnum,
        "SearchResultItem.TemperatureUnitsEnum": SearchResultItem.TemperatureUnitsEnum,
        "SearchResultItem.TreatmentTypeEnum": SearchResultItem.TreatmentTypeEnum,
        "SearchResultItem.GroupsEnum": SearchResultItem.GroupsEnum,
        "SearchResultItem.ViewingGroupsEnum": SearchResultItem.ViewingGroupsEnum,
        "SearchResultItem.JobTitleEnum": SearchResultItem.JobTitleEnum,
        "SequenceFile.CollectionsEnum": SequenceFile.CollectionsEnum,
        "SequenceFile.StatusEnum": SequenceFile.StatusEnum,
        "SequenceFile.FileFormatEnum": SequenceFile.FileFormatEnum,
        "SequenceFile.UploadStatusEnum": SequenceFile.UploadStatusEnum,
        "SequenceFile.SequencingKitEnum": SequenceFile.SequencingKitEnum,
        "SequenceFile.IlluminaReadTypeEnum": SequenceFile.IlluminaReadTypeEnum,
        "SignalFile.TranscriptomeAnnotationEnum": SignalFile.TranscriptomeAnnotationEnum,
        "SignalFile.AssemblyEnum": SignalFile.AssemblyEnum,
        "SignalFile.CollectionsEnum": SignalFile.CollectionsEnum,
        "SignalFile.StatusEnum": SignalFile.StatusEnum,
        "SignalFile.FileFormatEnum": SignalFile.FileFormatEnum,
        "SignalFile.UploadStatusEnum": SignalFile.UploadStatusEnum,
        "SignalFile.StrandSpecificityEnum": SignalFile.StrandSpecificityEnum,
        "Software.StatusEnum": Software.StatusEnum,
        "Software.UsedByEnum": Software.UsedByEnum,
        "Source.StatusEnum": Source.StatusEnum,
        "TabularFile.AssemblyEnum": TabularFile.AssemblyEnum,
        "TabularFile.FileFormatTypeEnum": TabularFile.FileFormatTypeEnum,
        "TabularFile.TranscriptomeAnnotationEnum": TabularFile.TranscriptomeAnnotationEnum,
        "TabularFile.CollectionsEnum": TabularFile.CollectionsEnum,
        "TabularFile.StatusEnum": TabularFile.StatusEnum,
        "TabularFile.FileFormatEnum": TabularFile.FileFormatEnum,
        "TabularFile.UploadStatusEnum": TabularFile.UploadStatusEnum,
        "TechnicalSample.CollectionsEnum": TechnicalSample.CollectionsEnum,
        "TechnicalSample.StatusEnum": TechnicalSample.StatusEnum,
        "TechnicalSample.StartingAmountUnitsEnum": TechnicalSample.StartingAmountUnitsEnum,
        "TechnicalSample.NucleicAcidDeliveryEnum": TechnicalSample.NucleicAcidDeliveryEnum,
        "TechnicalSample.TimePostLibraryDeliveryUnitsEnum": TechnicalSample.TimePostLibraryDeliveryUnitsEnum,
        "TechnicalSample.SampleMaterialEnum": TechnicalSample.SampleMaterialEnum,
        "TechnicalSample.TaxaEnum": TechnicalSample.TaxaEnum,
        "Tissue.TaxaEnum": Tissue.TaxaEnum,
        "Tissue.CollectionsEnum": Tissue.CollectionsEnum,
        "Tissue.StatusEnum": Tissue.StatusEnum,
        "Tissue.AgeUnitsEnum": Tissue.AgeUnitsEnum,
        "Tissue.StartingAmountUnitsEnum": Tissue.StartingAmountUnitsEnum,
        "Tissue.NucleicAcidDeliveryEnum": Tissue.NucleicAcidDeliveryEnum,
        "Tissue.TimePostLibraryDeliveryUnitsEnum": Tissue.TimePostLibraryDeliveryUnitsEnum,
        "Tissue.PmiUnitsEnum": Tissue.PmiUnitsEnum,
        "Tissue.PreservationMethodEnum": Tissue.PreservationMethodEnum,
        "Tissue.SexEnum": Tissue.SexEnum,
        "Treatment.StatusEnum": Treatment.StatusEnum,
        "Treatment.AmountUnitsEnum": Treatment.AmountUnitsEnum,
        "Treatment.DurationUnitsEnum": Treatment.DurationUnitsEnum,
        "Treatment.PurposeEnum": Treatment.PurposeEnum,
        "Treatment.PostTreatmentTimeUnitsEnum": Treatment.PostTreatmentTimeUnitsEnum,
        "Treatment.TemperatureUnitsEnum": Treatment.TemperatureUnitsEnum,
        "Treatment.TreatmentTypeEnum": Treatment.TreatmentTypeEnum,
        "User.StatusEnum": User.StatusEnum,
        "User.GroupsEnum": User.GroupsEnum,
        "User.ViewingGroupsEnum": User.ViewingGroupsEnum,
        "User.JobTitleEnum": User.JobTitleEnum,
        "Workflow.CollectionsEnum": Workflow.CollectionsEnum,
        "Workflow.StatusEnum": Workflow.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AccessKey": AccessKey,
    "AccessKeyResults": AccessKeyResults,
    "AlignmentFile": AlignmentFile,
    "AlignmentFileResults": AlignmentFileResults,
    "AnalysisSet": AnalysisSet,
    "AnalysisSetResults": AnalysisSetResults,
    "AnalysisStep": AnalysisStep,
    "AnalysisStepResults": AnalysisStepResults,
    "AnalysisStepVersion": AnalysisStepVersion,
    "AnalysisStepVersionResults": AnalysisStepVersionResults,
    "AssayTerm": AssayTerm,
    "AssayTermResults": AssayTermResults,
    "Attachment": Attachment,
    "Attachment1": Attachment1,
    "AuxiliarySet": AuxiliarySet,
    "AuxiliarySetResults": AuxiliarySetResults,
    "Award": Award,
    "AwardResults": AwardResults,
    "Biomarker": Biomarker,
    "BiomarkerResults": BiomarkerResults,
    "ConfigurationFile": ConfigurationFile,
    "ConfigurationFileResults": ConfigurationFileResults,
    "ConstructLibrarySet": ConstructLibrarySet,
    "ConstructLibrarySetResults": ConstructLibrarySetResults,
    "CrisprModification": CrisprModification,
    "CrisprModificationResults": CrisprModificationResults,
    "CuratedSet": CuratedSet,
    "CuratedSetResults": CuratedSetResults,
    "DegronModification": DegronModification,
    "DegronModificationResults": DegronModificationResults,
    "Document": Document,
    "DocumentResults": DocumentResults,
    "Gene": Gene,
    "GeneLocation": GeneLocation,
    "GeneLocation1": GeneLocation1,
    "GeneResults": GeneResults,
    "GenomeBrowserAnnotationFile": GenomeBrowserAnnotationFile,
    "GenomeBrowserAnnotationFileResults": GenomeBrowserAnnotationFileResults,
    "HumanDonor": HumanDonor,
    "HumanDonorResults": HumanDonorResults,
    "Image": Image,
    "ImageFile": ImageFile,
    "ImageFileResults": ImageFileResults,
    "ImageResults": ImageResults,
    "InVitroSystem": InVitroSystem,
    "InVitroSystemResults": InVitroSystemResults,
    "InstitutionalCertificate": InstitutionalCertificate,
    "InstitutionalCertificateResults": InstitutionalCertificateResults,
    "Item": Item,
    "Lab": Lab,
    "LabResults": LabResults,
    "Limit": Limit,
    "Locus": Locus,
    "Locus1": Locus1,
    "MatrixFile": MatrixFile,
    "MatrixFileResults": MatrixFileResults,
    "MeasurementSet": MeasurementSet,
    "MeasurementSetResults": MeasurementSetResults,
    "ModelFile": ModelFile,
    "ModelFileResults": ModelFileResults,
    "ModelSet": ModelSet,
    "ModelSetResults": ModelSetResults,
    "MultiplexedSample": MultiplexedSample,
    "MultiplexedSampleResults": MultiplexedSampleResults,
    "NoResultsResponse": NoResultsResponse,
    "NoResultsResponseColumnsValue": NoResultsResponseColumnsValue,
    "NoResultsResponseFacetGroupsInner": NoResultsResponseFacetGroupsInner,
    "NoResultsResponseFacetsInner": NoResultsResponseFacetsInner,
    "NoResultsResponseFacetsInnerTermsInner": NoResultsResponseFacetsInnerTermsInner,
    "NoResultsResponseFiltersInner": NoResultsResponseFiltersInner,
    "NoResultsResponseSortValue": NoResultsResponseSortValue,
    "OpenReadingFrame": OpenReadingFrame,
    "OpenReadingFrameResults": OpenReadingFrameResults,
    "Page": Page,
    "PageLayout": PageLayout,
    "PageLayoutComponents": PageLayoutComponents,
    "PageResults": PageResults,
    "PhenotypeTerm": PhenotypeTerm,
    "PhenotypeTermResults": PhenotypeTermResults,
    "PhenotypicFeature": PhenotypicFeature,
    "PhenotypicFeatureResults": PhenotypicFeatureResults,
    "PlatformTerm": PlatformTerm,
    "PlatformTermResults": PlatformTermResults,
    "PredictionSet": PredictionSet,
    "PredictionSetResults": PredictionSetResults,
    "PrimaryCell": PrimaryCell,
    "PrimaryCellResults": PrimaryCellResults,
    "Publication": Publication,
    "PublicationResults": PublicationResults,
    "ReferenceFile": ReferenceFile,
    "ReferenceFileResults": ReferenceFileResults,
    "RelatedDonor": RelatedDonor,
    "RodentDonor": RodentDonor,
    "RodentDonorResults": RodentDonorResults,
    "SampleTerm": SampleTerm,
    "SampleTermResults": SampleTermResults,
    "SearchFacet": SearchFacet,
    "SearchResultItem": SearchResultItem,
    "SearchResults": SearchResults,
    "SequenceFile": SequenceFile,
    "SequenceFileResults": SequenceFileResults,
    "SignalFile": SignalFile,
    "SignalFileResults": SignalFileResults,
    "Software": Software,
    "SoftwareResults": SoftwareResults,
    "SoftwareVersion": SoftwareVersion,
    "SoftwareVersionResults": SoftwareVersionResults,
    "Source": Source,
    "SourceResults": SourceResults,
    "TabularFile": TabularFile,
    "TabularFileResults": TabularFileResults,
    "TechnicalSample": TechnicalSample,
    "TechnicalSampleResults": TechnicalSampleResults,
    "Tile": Tile,
    "Tissue": Tissue,
    "TissueResults": TissueResults,
    "Treatment": Treatment,
    "TreatmentResults": TreatmentResults,
    "User": User,
    "UserResults": UserResults,
    "WholeOrganism": WholeOrganism,
    "WholeOrganismResults": WholeOrganismResults,
    "Workflow": Workflow,
    "WorkflowResults": WorkflowResults,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
