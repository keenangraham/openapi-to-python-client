export * from '../models/AccessKey';
export * from '../models/AccessKeyResults';
export * from '../models/AlignmentFile';
export * from '../models/AlignmentFileResults';
export * from '../models/AnalysisSet';
export * from '../models/AnalysisSetResults';
export * from '../models/AnalysisStep';
export * from '../models/AnalysisStepResults';
export * from '../models/AnalysisStepVersion';
export * from '../models/AnalysisStepVersionResults';
export * from '../models/AssayTerm';
export * from '../models/AssayTermResults';
export * from '../models/Attachment';
export * from '../models/Attachment1';
export * from '../models/AuxiliarySet';
export * from '../models/AuxiliarySetResults';
export * from '../models/Award';
export * from '../models/AwardResults';
export * from '../models/Biomarker';
export * from '../models/BiomarkerResults';
export * from '../models/ConfigurationFile';
export * from '../models/ConfigurationFileResults';
export * from '../models/ConstructLibrarySet';
export * from '../models/ConstructLibrarySetResults';
export * from '../models/CrisprModification';
export * from '../models/CrisprModificationResults';
export * from '../models/CuratedSet';
export * from '../models/CuratedSetResults';
export * from '../models/DegronModification';
export * from '../models/DegronModificationResults';
export * from '../models/Document';
export * from '../models/DocumentResults';
export * from '../models/Gene';
export * from '../models/GeneLocation';
export * from '../models/GeneLocation1';
export * from '../models/GeneResults';
export * from '../models/GenomeBrowserAnnotationFile';
export * from '../models/GenomeBrowserAnnotationFileResults';
export * from '../models/HumanDonor';
export * from '../models/HumanDonorResults';
export * from '../models/Image';
export * from '../models/ImageFile';
export * from '../models/ImageFileResults';
export * from '../models/ImageResults';
export * from '../models/InVitroSystem';
export * from '../models/InVitroSystemResults';
export * from '../models/InstitutionalCertificate';
export * from '../models/InstitutionalCertificateResults';
export * from '../models/Item';
export * from '../models/ItemType';
export * from '../models/Lab';
export * from '../models/LabResults';
export * from '../models/Limit';
export * from '../models/Locus';
export * from '../models/Locus1';
export * from '../models/MatrixFile';
export * from '../models/MatrixFileResults';
export * from '../models/MeasurementSet';
export * from '../models/MeasurementSetResults';
export * from '../models/ModelFile';
export * from '../models/ModelFileResults';
export * from '../models/ModelSet';
export * from '../models/ModelSetResults';
export * from '../models/MultiplexedSample';
export * from '../models/MultiplexedSampleResults';
export * from '../models/NoResultsResponse';
export * from '../models/NoResultsResponseColumnsValue';
export * from '../models/NoResultsResponseFacetGroupsInner';
export * from '../models/NoResultsResponseFacetsInner';
export * from '../models/NoResultsResponseFacetsInnerTermsInner';
export * from '../models/NoResultsResponseFiltersInner';
export * from '../models/NoResultsResponseSortValue';
export * from '../models/OpenReadingFrame';
export * from '../models/OpenReadingFrameResults';
export * from '../models/Page';
export * from '../models/PageLayout';
export * from '../models/PageLayoutComponents';
export * from '../models/PageResults';
export * from '../models/PhenotypeTerm';
export * from '../models/PhenotypeTermResults';
export * from '../models/PhenotypicFeature';
export * from '../models/PhenotypicFeatureResults';
export * from '../models/PlatformTerm';
export * from '../models/PlatformTermResults';
export * from '../models/PredictionSet';
export * from '../models/PredictionSetResults';
export * from '../models/PrimaryCell';
export * from '../models/PrimaryCellResults';
export * from '../models/Publication';
export * from '../models/PublicationResults';
export * from '../models/ReferenceFile';
export * from '../models/ReferenceFileResults';
export * from '../models/RelatedDonor';
export * from '../models/RodentDonor';
export * from '../models/RodentDonorResults';
export * from '../models/SampleTerm';
export * from '../models/SampleTermResults';
export * from '../models/SearchFacet';
export * from '../models/SearchResultItem';
export * from '../models/SearchResults';
export * from '../models/SequenceFile';
export * from '../models/SequenceFileResults';
export * from '../models/SignalFile';
export * from '../models/SignalFileResults';
export * from '../models/Software';
export * from '../models/SoftwareResults';
export * from '../models/SoftwareVersion';
export * from '../models/SoftwareVersionResults';
export * from '../models/Source';
export * from '../models/SourceResults';
export * from '../models/TabularFile';
export * from '../models/TabularFileResults';
export * from '../models/TechnicalSample';
export * from '../models/TechnicalSampleResults';
export * from '../models/Tile';
export * from '../models/Tissue';
export * from '../models/TissueResults';
export * from '../models/Treatment';
export * from '../models/TreatmentResults';
export * from '../models/User';
export * from '../models/UserResults';
export * from '../models/WholeOrganism';
export * from '../models/WholeOrganismResults';
export * from '../models/Workflow';
export * from '../models/WorkflowResults';

import { AccessKey        , AccessKeyStatusEnum         } from '../models/AccessKey';
import { AccessKeyResults } from '../models/AccessKeyResults';
import { AlignmentFile  , AlignmentFileTranscriptomeAnnotationEnum  , AlignmentFileAssemblyEnum         , AlignmentFileCollectionsEnum  , AlignmentFileStatusEnum                , AlignmentFileFileFormatEnum       , AlignmentFileUploadStatusEnum                 } from '../models/AlignmentFile';
import { AlignmentFileResults } from '../models/AlignmentFileResults';
import { AnalysisSet         , AnalysisSetCollectionsEnum  , AnalysisSetStatusEnum              , AnalysisSetFileSetTypeEnum           } from '../models/AnalysisSet';
import { AnalysisSetResults } from '../models/AnalysisSetResults';
import { AnalysisStep , AnalysisStepStatusEnum            , AnalysisStepAnalysisStepTypesEnum             } from '../models/AnalysisStep';
import { AnalysisStepResults } from '../models/AnalysisStepResults';
import { AnalysisStepVersion , AnalysisStepVersionStatusEnum                  } from '../models/AnalysisStepVersion';
import { AnalysisStepVersionResults } from '../models/AnalysisStepVersionResults';
import { AssayTerm , AssayTermStatusEnum              , AssayTermPreferredAssayTitlesEnum             } from '../models/AssayTerm';
import { AssayTermResults } from '../models/AssayTermResults';
import { Attachment  , AttachmentTypeEnum       } from '../models/Attachment';
import { Attachment1  , Attachment1TypeEnum       } from '../models/Attachment1';
import { AuxiliarySet        , AuxiliarySetCollectionsEnum  , AuxiliarySetStatusEnum               , AuxiliarySetFileSetTypeEnum            } from '../models/AuxiliarySet';
import { AuxiliarySetResults } from '../models/AuxiliarySetResults';
import { Award, AwardStatusEnum                 , AwardProjectEnum  , AwardViewingGroupEnum  , AwardComponentEnum      } from '../models/Award';
import { AwardResults } from '../models/AwardResults';
import { Biomarker , BiomarkerStatusEnum             , BiomarkerClassificationEnum  , BiomarkerQuantificationEnum          } from '../models/Biomarker';
import { BiomarkerResults } from '../models/BiomarkerResults';
import { ConfigurationFile      , ConfigurationFileCollectionsEnum  , ConfigurationFileStatusEnum                , ConfigurationFileFileFormatEnum       , ConfigurationFileUploadStatusEnum               } from '../models/ConfigurationFile';
import { ConfigurationFileResults } from '../models/ConfigurationFileResults';
import { ConstructLibrarySet               , ConstructLibrarySetCollectionsEnum  , ConstructLibrarySetStatusEnum           , ConstructLibrarySetFileSetTypeEnum  , ConstructLibrarySetScopeEnum  , ConstructLibrarySetSelectionCriteriaEnum       , ConstructLibrarySetGuideTypeEnum  , ConstructLibrarySetTilingModalityEnum                  } from '../models/ConstructLibrarySet';
import { ConstructLibrarySetResults } from '../models/ConstructLibrarySetResults';
import { CrisprModification     , CrisprModificationStatusEnum               , CrisprModificationModalityEnum  , CrisprModificationCasEnum  , CrisprModificationFusedDomainEnum   , CrisprModificationCasSpeciesEnum       } from '../models/CrisprModification';
import { CrisprModificationResults } from '../models/CrisprModificationResults';
import { CuratedSet , CuratedSetTaxaEnum         , CuratedSetCollectionsEnum  , CuratedSetStatusEnum               , CuratedSetFileSetTypeEnum            } from '../models/CuratedSet';
import { CuratedSetResults } from '../models/CuratedSetResults';
import { DegronModification     , DegronModificationStatusEnum               , DegronModificationModalityEnum  , DegronModificationDegronSystemEnum        } from '../models/DegronModification';
import { DegronModificationResults } from '../models/DegronModificationResults';
import { Document , DocumentStatusEnum             , DocumentDocumentTypeEnum  , DocumentCharacterizationMethodEnum       } from '../models/Document';
import { DocumentResults } from '../models/DocumentResults';
import { Gene , GeneTranscriptomeAnnotationEnum  , GeneTaxaEnum  , GeneStatusEnum                       } from '../models/Gene';
import { GeneLocation, GeneLocationAssemblyEnum      } from '../models/GeneLocation';
import { GeneLocation1, GeneLocation1AssemblyEnum      } from '../models/GeneLocation1';
import { GeneResults } from '../models/GeneResults';
import { GenomeBrowserAnnotationFile, GenomeBrowserAnnotationFileAssemblyEnum   , GenomeBrowserAnnotationFileFileFormatTypeEnum  , GenomeBrowserAnnotationFileTranscriptomeAnnotationEnum       , GenomeBrowserAnnotationFileCollectionsEnum  , GenomeBrowserAnnotationFileStatusEnum                , GenomeBrowserAnnotationFileFileFormatEnum       , GenomeBrowserAnnotationFileUploadStatusEnum              } from '../models/GenomeBrowserAnnotationFile';
import { GenomeBrowserAnnotationFileResults } from '../models/GenomeBrowserAnnotationFileResults';
import { HumanDonor , HumanDonorTaxaEnum          , HumanDonorCollectionsEnum  , HumanDonorStatusEnum            , HumanDonorSexEnum     , HumanDonorEthnicitiesEnum       } from '../models/HumanDonor';
import { HumanDonorResults } from '../models/HumanDonorResults';
import { Image , ImageStatusEnum                  } from '../models/Image';
import { ImageFile      , ImageFileCollectionsEnum  , ImageFileStatusEnum                , ImageFileFileFormatEnum       , ImageFileUploadStatusEnum              } from '../models/ImageFile';
import { ImageFileResults } from '../models/ImageFileResults';
import { ImageResults } from '../models/ImageResults';
import { InVitroSystem   , InVitroSystemTaxaEnum           , InVitroSystemCollectionsEnum  , InVitroSystemStatusEnum             , InVitroSystemAgeUnitsEnum              , InVitroSystemStartingAmountUnitsEnum         , InVitroSystemNucleicAcidDeliveryEnum   , InVitroSystemTimePostLibraryDeliveryUnitsEnum   , InVitroSystemClassificationsEnum   , InVitroSystemTimePostChangeUnitsEnum       , InVitroSystemGrowthMediumEnum          , InVitroSystemSexEnum         } from '../models/InVitroSystem';
import { InVitroSystemResults } from '../models/InVitroSystemResults';
import { InstitutionalCertificate , InstitutionalCertificateStatusEnum              , InstitutionalCertificateDataUseLimitationEnum  , InstitutionalCertificateDataUseLimitationModifiersEnum        } from '../models/InstitutionalCertificate';
import { InstitutionalCertificateResults } from '../models/InstitutionalCertificateResults';
import { Item        , ItemStatusEnum           , ItemAnalysisStepTypesEnum                , ItemProjectEnum  , ItemViewingGroupEnum  , ItemComponentEnum  , ItemClassificationEnum  , ItemQuantificationEnum       , ItemDocumentTypeEnum  , ItemCharacterizationMethodEnum   , ItemTaxaEnum       , ItemCollectionsEnum    , ItemSexEnum     , ItemEthnicitiesEnum      , ItemStrainBackgroundEnum        , ItemTranscriptomeAnnotationEnum  , ItemAssemblyEnum       , ItemFileFormatEnum       , ItemUploadStatusEnum              , ItemFileFormatTypeEnum  , ItemDimension1Enum  , ItemDimension2Enum            , ItemSequencingKitEnum   , ItemIlluminaReadTypeEnum    , ItemStrandSpecificityEnum       , ItemFileSetTypeEnum             , ItemScopeEnum  , ItemSelectionCriteriaEnum       , ItemGuideTypeEnum  , ItemTilingModalityEnum              , ItemPreferredAssayTitleEnum    , ItemSequencingLibraryTypesEnum        , ItemPredictionObjectsEnum              , ItemDataUseLimitationEnum  , ItemDataUseLimitationModifiersEnum        , ItemModalityEnum  , ItemCasEnum  , ItemFusedDomainEnum   , ItemCasSpeciesEnum   , ItemDegronSystemEnum       , ItemPreferredAssayTitlesEnum       , ItemCompanyEnum  , ItemSequencingKitsEnum                , ItemQuantityUnitsEnum           , ItemPublishedByEnum        , ItemAgeUnitsEnum             , ItemStartingAmountUnitsEnum       , ItemNucleicAcidDeliveryEnum   , ItemTimePostLibraryDeliveryUnitsEnum    , ItemTimePostChangeUnitsEnum       , ItemGrowthMediumEnum              , ItemSampleMaterialEnum   , ItemPmiUnitsEnum   , ItemPreservationMethodEnum  , ItemUsedByEnum       , ItemAmountUnitsEnum   , ItemDurationUnitsEnum   , ItemPurposeEnum   , ItemPostTreatmentTimeUnitsEnum   , ItemTemperatureUnitsEnum  , ItemTreatmentTypeEnum          , ItemGroupsEnum  , ItemViewingGroupsEnum  , ItemJobTitleEnum       } from '../models/Item';
import { ItemType } from '../models/ItemType';
import { Lab, LabStatusEnum                    } from '../models/Lab';
import { LabResults } from '../models/LabResults';
import { Limit } from '../models/Limit';
import { Locus, LocusAssemblyEnum      } from '../models/Locus';
import { Locus1, Locus1AssemblyEnum      } from '../models/Locus1';
import { MatrixFile       , MatrixFileCollectionsEnum  , MatrixFileStatusEnum                , MatrixFileFileFormatEnum       , MatrixFileUploadStatusEnum   , MatrixFileDimension1Enum  , MatrixFileDimension2Enum              } from '../models/MatrixFile';
import { MatrixFileResults } from '../models/MatrixFileResults';
import { MeasurementSet        , MeasurementSetCollectionsEnum  , MeasurementSetStatusEnum              , MeasurementSetFileSetTypeEnum     , MeasurementSetPreferredAssayTitleEnum    , MeasurementSetSequencingLibraryTypesEnum              } from '../models/MeasurementSet';
import { MeasurementSetResults } from '../models/MeasurementSetResults';
import { ModelFile        , ModelFileCollectionsEnum  , ModelFileStatusEnum                , ModelFileFileFormatEnum       , ModelFileUploadStatusEnum              } from '../models/ModelFile';
import { ModelFileResults } from '../models/ModelFileResults';
import { ModelSet } from '../models/ModelSet';
import { ModelSetResults } from '../models/ModelSetResults';
import { MultiplexedSample } from '../models/MultiplexedSample';
import { MultiplexedSampleResults } from '../models/MultiplexedSampleResults';
import { NoResultsResponse } from '../models/NoResultsResponse';
import { NoResultsResponseColumnsValue } from '../models/NoResultsResponseColumnsValue';
import { NoResultsResponseFacetGroupsInner } from '../models/NoResultsResponseFacetGroupsInner';
import { NoResultsResponseFacetsInner } from '../models/NoResultsResponseFacetsInner';
import { NoResultsResponseFacetsInnerTermsInner } from '../models/NoResultsResponseFacetsInnerTermsInner';
import { NoResultsResponseFiltersInner } from '../models/NoResultsResponseFiltersInner';
import { NoResultsResponseSortValue } from '../models/NoResultsResponseSortValue';
import { OpenReadingFrame , OpenReadingFrameStatusEnum                       } from '../models/OpenReadingFrame';
import { OpenReadingFrameResults } from '../models/OpenReadingFrameResults';
import { Page   , PageStatusEnum                   } from '../models/Page';
import { PageLayout } from '../models/PageLayout';
import { PageLayoutComponents } from '../models/PageLayoutComponents';
import { PageResults } from '../models/PageResults';
import { PhenotypeTerm , PhenotypeTermStatusEnum                      } from '../models/PhenotypeTerm';
import { PhenotypeTermResults } from '../models/PhenotypeTermResults';
import { PhenotypicFeature , PhenotypicFeatureStatusEnum              , PhenotypicFeatureQuantityUnitsEnum       } from '../models/PhenotypicFeature';
import { PhenotypicFeatureResults } from '../models/PhenotypicFeatureResults';
import { PlatformTerm , PlatformTermStatusEnum              , PlatformTermCompanyEnum  , PlatformTermSequencingKitsEnum          } from '../models/PlatformTerm';
import { PlatformTermResults } from '../models/PlatformTermResults';
import { PredictionSet } from '../models/PredictionSet';
import { PredictionSetResults } from '../models/PredictionSetResults';
import { PrimaryCell   , PrimaryCellTaxaEnum           , PrimaryCellCollectionsEnum  , PrimaryCellStatusEnum             , PrimaryCellAgeUnitsEnum              , PrimaryCellStartingAmountUnitsEnum         , PrimaryCellNucleicAcidDeliveryEnum   , PrimaryCellTimePostLibraryDeliveryUnitsEnum            , PrimaryCellSexEnum         } from '../models/PrimaryCell';
import { PrimaryCellResults } from '../models/PrimaryCellResults';
import { Publication  , PublicationStatusEnum                      , PublicationPublishedByEnum             } from '../models/Publication';
import { PublicationResults } from '../models/PublicationResults';
import { ReferenceFile  , ReferenceFileAssemblyEnum   , ReferenceFileFileFormatTypeEnum  , ReferenceFileTranscriptomeAnnotationEnum       , ReferenceFileCollectionsEnum  , ReferenceFileStatusEnum                , ReferenceFileFileFormatEnum       , ReferenceFileUploadStatusEnum                  } from '../models/ReferenceFile';
import { ReferenceFileResults } from '../models/ReferenceFileResults';
import { RelatedDonor , RelatedDonorRelationshipTypeEnum   } from '../models/RelatedDonor';
import { RodentDonor , RodentDonorTaxaEnum             , RodentDonorCollectionsEnum  , RodentDonorStatusEnum            , RodentDonorSexEnum    , RodentDonorStrainBackgroundEnum          } from '../models/RodentDonor';
import { RodentDonorResults } from '../models/RodentDonorResults';
import { SampleTerm , SampleTermStatusEnum                           } from '../models/SampleTerm';
import { SampleTermResults } from '../models/SampleTermResults';
import { SearchFacet } from '../models/SearchFacet';
import { SearchResultItem        , SearchResultItemStatusEnum           , SearchResultItemAnalysisStepTypesEnum                , SearchResultItemProjectEnum  , SearchResultItemViewingGroupEnum  , SearchResultItemComponentEnum  , SearchResultItemClassificationEnum  , SearchResultItemQuantificationEnum       , SearchResultItemDocumentTypeEnum  , SearchResultItemCharacterizationMethodEnum   , SearchResultItemTaxaEnum       , SearchResultItemCollectionsEnum    , SearchResultItemSexEnum     , SearchResultItemEthnicitiesEnum      , SearchResultItemStrainBackgroundEnum        , SearchResultItemTranscriptomeAnnotationEnum  , SearchResultItemAssemblyEnum       , SearchResultItemFileFormatEnum       , SearchResultItemUploadStatusEnum              , SearchResultItemFileFormatTypeEnum  , SearchResultItemDimension1Enum  , SearchResultItemDimension2Enum            , SearchResultItemSequencingKitEnum   , SearchResultItemIlluminaReadTypeEnum    , SearchResultItemStrandSpecificityEnum       , SearchResultItemFileSetTypeEnum             , SearchResultItemScopeEnum  , SearchResultItemSelectionCriteriaEnum       , SearchResultItemGuideTypeEnum  , SearchResultItemTilingModalityEnum              , SearchResultItemPreferredAssayTitleEnum    , SearchResultItemSequencingLibraryTypesEnum        , SearchResultItemPredictionObjectsEnum              , SearchResultItemDataUseLimitationEnum  , SearchResultItemDataUseLimitationModifiersEnum        , SearchResultItemModalityEnum  , SearchResultItemCasEnum  , SearchResultItemFusedDomainEnum   , SearchResultItemCasSpeciesEnum   , SearchResultItemDegronSystemEnum       , SearchResultItemPreferredAssayTitlesEnum       , SearchResultItemCompanyEnum  , SearchResultItemSequencingKitsEnum                , SearchResultItemQuantityUnitsEnum           , SearchResultItemPublishedByEnum        , SearchResultItemAgeUnitsEnum             , SearchResultItemStartingAmountUnitsEnum       , SearchResultItemNucleicAcidDeliveryEnum   , SearchResultItemTimePostLibraryDeliveryUnitsEnum    , SearchResultItemTimePostChangeUnitsEnum       , SearchResultItemGrowthMediumEnum              , SearchResultItemSampleMaterialEnum   , SearchResultItemPmiUnitsEnum   , SearchResultItemPreservationMethodEnum  , SearchResultItemUsedByEnum       , SearchResultItemAmountUnitsEnum   , SearchResultItemDurationUnitsEnum   , SearchResultItemPurposeEnum   , SearchResultItemPostTreatmentTimeUnitsEnum   , SearchResultItemTemperatureUnitsEnum  , SearchResultItemTreatmentTypeEnum          , SearchResultItemGroupsEnum  , SearchResultItemViewingGroupsEnum  , SearchResultItemJobTitleEnum       } from '../models/SearchResultItem';
import { SearchResults } from '../models/SearchResults';
import { SequenceFile        , SequenceFileCollectionsEnum  , SequenceFileStatusEnum                , SequenceFileFileFormatEnum       , SequenceFileUploadStatusEnum          , SequenceFileSequencingKitEnum   , SequenceFileIlluminaReadTypeEnum               } from '../models/SequenceFile';
import { SequenceFileResults } from '../models/SequenceFileResults';
import { SignalFile, SignalFileTranscriptomeAnnotationEnum  , SignalFileAssemblyEnum         , SignalFileCollectionsEnum  , SignalFileStatusEnum                , SignalFileFileFormatEnum       , SignalFileUploadStatusEnum   , SignalFileStrandSpecificityEnum                 } from '../models/SignalFile';
import { SignalFileResults } from '../models/SignalFileResults';
import { Software     , SoftwareStatusEnum             , SoftwareUsedByEnum       } from '../models/Software';
import { SoftwareResults } from '../models/SoftwareResults';
import { SoftwareVersion } from '../models/SoftwareVersion';
import { SoftwareVersionResults } from '../models/SoftwareVersionResults';
import { Source , SourceStatusEnum                 } from '../models/Source';
import { SourceResults } from '../models/SourceResults';
import { TabularFile  , TabularFileAssemblyEnum   , TabularFileFileFormatTypeEnum  , TabularFileTranscriptomeAnnotationEnum       , TabularFileCollectionsEnum  , TabularFileStatusEnum                , TabularFileFileFormatEnum       , TabularFileUploadStatusEnum              } from '../models/TabularFile';
import { TabularFileResults } from '../models/TabularFileResults';
import { TechnicalSample            , TechnicalSampleCollectionsEnum  , TechnicalSampleStatusEnum            , TechnicalSampleStartingAmountUnitsEnum         , TechnicalSampleNucleicAcidDeliveryEnum   , TechnicalSampleTimePostLibraryDeliveryUnitsEnum   , TechnicalSampleSampleMaterialEnum  , TechnicalSampleTaxaEnum             } from '../models/TechnicalSample';
import { TechnicalSampleResults } from '../models/TechnicalSampleResults';
import { Tile } from '../models/Tile';
import { Tissue   , TissueTaxaEnum           , TissueCollectionsEnum  , TissueStatusEnum             , TissueAgeUnitsEnum              , TissueStartingAmountUnitsEnum         , TissueNucleicAcidDeliveryEnum   , TissueTimePostLibraryDeliveryUnitsEnum    , TissuePmiUnitsEnum   , TissuePreservationMethodEnum          , TissueSexEnum         } from '../models/Tissue';
import { TissueResults } from '../models/TissueResults';
import { Treatment       , TreatmentStatusEnum           , TreatmentAmountUnitsEnum   , TreatmentDurationUnitsEnum   , TreatmentPurposeEnum   , TreatmentPostTreatmentTimeUnitsEnum   , TreatmentTemperatureUnitsEnum  , TreatmentTreatmentTypeEnum          } from '../models/Treatment';
import { TreatmentResults } from '../models/TreatmentResults';
import { User, UserStatusEnum               , UserGroupsEnum  , UserViewingGroupsEnum  , UserJobTitleEnum       } from '../models/User';
import { UserResults } from '../models/UserResults';
import { WholeOrganism } from '../models/WholeOrganism';
import { WholeOrganismResults } from '../models/WholeOrganismResults';
import { Workflow        , WorkflowCollectionsEnum  , WorkflowStatusEnum                     } from '../models/Workflow';
import { WorkflowResults } from '../models/WorkflowResults';

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

let enumsMap: Set<string> = new Set<string>([
    "AccessKeyStatusEnum",
    "AlignmentFileTranscriptomeAnnotationEnum",
    "AlignmentFileAssemblyEnum",
    "AlignmentFileCollectionsEnum",
    "AlignmentFileStatusEnum",
    "AlignmentFileFileFormatEnum",
    "AlignmentFileUploadStatusEnum",
    "AnalysisSetCollectionsEnum",
    "AnalysisSetStatusEnum",
    "AnalysisSetFileSetTypeEnum",
    "AnalysisStepStatusEnum",
    "AnalysisStepAnalysisStepTypesEnum",
    "AnalysisStepVersionStatusEnum",
    "AssayTermStatusEnum",
    "AssayTermPreferredAssayTitlesEnum",
    "AttachmentTypeEnum",
    "Attachment1TypeEnum",
    "AuxiliarySetCollectionsEnum",
    "AuxiliarySetStatusEnum",
    "AuxiliarySetFileSetTypeEnum",
    "AwardStatusEnum",
    "AwardProjectEnum",
    "AwardViewingGroupEnum",
    "AwardComponentEnum",
    "BiomarkerStatusEnum",
    "BiomarkerClassificationEnum",
    "BiomarkerQuantificationEnum",
    "ConfigurationFileCollectionsEnum",
    "ConfigurationFileStatusEnum",
    "ConfigurationFileFileFormatEnum",
    "ConfigurationFileUploadStatusEnum",
    "ConstructLibrarySetCollectionsEnum",
    "ConstructLibrarySetStatusEnum",
    "ConstructLibrarySetFileSetTypeEnum",
    "ConstructLibrarySetScopeEnum",
    "ConstructLibrarySetSelectionCriteriaEnum",
    "ConstructLibrarySetGuideTypeEnum",
    "ConstructLibrarySetTilingModalityEnum",
    "CrisprModificationStatusEnum",
    "CrisprModificationModalityEnum",
    "CrisprModificationCasEnum",
    "CrisprModificationFusedDomainEnum",
    "CrisprModificationCasSpeciesEnum",
    "CuratedSetTaxaEnum",
    "CuratedSetCollectionsEnum",
    "CuratedSetStatusEnum",
    "CuratedSetFileSetTypeEnum",
    "DegronModificationStatusEnum",
    "DegronModificationModalityEnum",
    "DegronModificationDegronSystemEnum",
    "DocumentStatusEnum",
    "DocumentDocumentTypeEnum",
    "DocumentCharacterizationMethodEnum",
    "GeneTranscriptomeAnnotationEnum",
    "GeneTaxaEnum",
    "GeneStatusEnum",
    "GeneLocationAssemblyEnum",
    "GeneLocation1AssemblyEnum",
    "GenomeBrowserAnnotationFileAssemblyEnum",
    "GenomeBrowserAnnotationFileFileFormatTypeEnum",
    "GenomeBrowserAnnotationFileTranscriptomeAnnotationEnum",
    "GenomeBrowserAnnotationFileCollectionsEnum",
    "GenomeBrowserAnnotationFileStatusEnum",
    "GenomeBrowserAnnotationFileFileFormatEnum",
    "GenomeBrowserAnnotationFileUploadStatusEnum",
    "HumanDonorTaxaEnum",
    "HumanDonorCollectionsEnum",
    "HumanDonorStatusEnum",
    "HumanDonorSexEnum",
    "HumanDonorEthnicitiesEnum",
    "ImageStatusEnum",
    "ImageFileCollectionsEnum",
    "ImageFileStatusEnum",
    "ImageFileFileFormatEnum",
    "ImageFileUploadStatusEnum",
    "InVitroSystemTaxaEnum",
    "InVitroSystemCollectionsEnum",
    "InVitroSystemStatusEnum",
    "InVitroSystemAgeUnitsEnum",
    "InVitroSystemStartingAmountUnitsEnum",
    "InVitroSystemNucleicAcidDeliveryEnum",
    "InVitroSystemTimePostLibraryDeliveryUnitsEnum",
    "InVitroSystemClassificationsEnum",
    "InVitroSystemTimePostChangeUnitsEnum",
    "InVitroSystemGrowthMediumEnum",
    "InVitroSystemSexEnum",
    "InstitutionalCertificateStatusEnum",
    "InstitutionalCertificateDataUseLimitationEnum",
    "InstitutionalCertificateDataUseLimitationModifiersEnum",
    "ItemStatusEnum",
    "ItemAnalysisStepTypesEnum",
    "ItemProjectEnum",
    "ItemViewingGroupEnum",
    "ItemComponentEnum",
    "ItemClassificationEnum",
    "ItemQuantificationEnum",
    "ItemDocumentTypeEnum",
    "ItemCharacterizationMethodEnum",
    "ItemTaxaEnum",
    "ItemCollectionsEnum",
    "ItemSexEnum",
    "ItemEthnicitiesEnum",
    "ItemStrainBackgroundEnum",
    "ItemTranscriptomeAnnotationEnum",
    "ItemAssemblyEnum",
    "ItemFileFormatEnum",
    "ItemUploadStatusEnum",
    "ItemFileFormatTypeEnum",
    "ItemDimension1Enum",
    "ItemDimension2Enum",
    "ItemSequencingKitEnum",
    "ItemIlluminaReadTypeEnum",
    "ItemStrandSpecificityEnum",
    "ItemFileSetTypeEnum",
    "ItemScopeEnum",
    "ItemSelectionCriteriaEnum",
    "ItemGuideTypeEnum",
    "ItemTilingModalityEnum",
    "ItemPreferredAssayTitleEnum",
    "ItemSequencingLibraryTypesEnum",
    "ItemPredictionObjectsEnum",
    "ItemDataUseLimitationEnum",
    "ItemDataUseLimitationModifiersEnum",
    "ItemModalityEnum",
    "ItemCasEnum",
    "ItemFusedDomainEnum",
    "ItemCasSpeciesEnum",
    "ItemDegronSystemEnum",
    "ItemPreferredAssayTitlesEnum",
    "ItemCompanyEnum",
    "ItemSequencingKitsEnum",
    "ItemQuantityUnitsEnum",
    "ItemPublishedByEnum",
    "ItemAgeUnitsEnum",
    "ItemStartingAmountUnitsEnum",
    "ItemNucleicAcidDeliveryEnum",
    "ItemTimePostLibraryDeliveryUnitsEnum",
    "ItemTimePostChangeUnitsEnum",
    "ItemGrowthMediumEnum",
    "ItemSampleMaterialEnum",
    "ItemPmiUnitsEnum",
    "ItemPreservationMethodEnum",
    "ItemUsedByEnum",
    "ItemAmountUnitsEnum",
    "ItemDurationUnitsEnum",
    "ItemPurposeEnum",
    "ItemPostTreatmentTimeUnitsEnum",
    "ItemTemperatureUnitsEnum",
    "ItemTreatmentTypeEnum",
    "ItemGroupsEnum",
    "ItemViewingGroupsEnum",
    "ItemJobTitleEnum",
    "ItemType",
    "LabStatusEnum",
    "LocusAssemblyEnum",
    "Locus1AssemblyEnum",
    "MatrixFileCollectionsEnum",
    "MatrixFileStatusEnum",
    "MatrixFileFileFormatEnum",
    "MatrixFileUploadStatusEnum",
    "MatrixFileDimension1Enum",
    "MatrixFileDimension2Enum",
    "MeasurementSetCollectionsEnum",
    "MeasurementSetStatusEnum",
    "MeasurementSetFileSetTypeEnum",
    "MeasurementSetPreferredAssayTitleEnum",
    "MeasurementSetSequencingLibraryTypesEnum",
    "ModelFileCollectionsEnum",
    "ModelFileStatusEnum",
    "ModelFileFileFormatEnum",
    "ModelFileUploadStatusEnum",
    "OpenReadingFrameStatusEnum",
    "PageStatusEnum",
    "PhenotypeTermStatusEnum",
    "PhenotypicFeatureStatusEnum",
    "PhenotypicFeatureQuantityUnitsEnum",
    "PlatformTermStatusEnum",
    "PlatformTermCompanyEnum",
    "PlatformTermSequencingKitsEnum",
    "PrimaryCellTaxaEnum",
    "PrimaryCellCollectionsEnum",
    "PrimaryCellStatusEnum",
    "PrimaryCellAgeUnitsEnum",
    "PrimaryCellStartingAmountUnitsEnum",
    "PrimaryCellNucleicAcidDeliveryEnum",
    "PrimaryCellTimePostLibraryDeliveryUnitsEnum",
    "PrimaryCellSexEnum",
    "PublicationStatusEnum",
    "PublicationPublishedByEnum",
    "ReferenceFileAssemblyEnum",
    "ReferenceFileFileFormatTypeEnum",
    "ReferenceFileTranscriptomeAnnotationEnum",
    "ReferenceFileCollectionsEnum",
    "ReferenceFileStatusEnum",
    "ReferenceFileFileFormatEnum",
    "ReferenceFileUploadStatusEnum",
    "RelatedDonorRelationshipTypeEnum",
    "RodentDonorTaxaEnum",
    "RodentDonorCollectionsEnum",
    "RodentDonorStatusEnum",
    "RodentDonorSexEnum",
    "RodentDonorStrainBackgroundEnum",
    "SampleTermStatusEnum",
    "SearchResultItemStatusEnum",
    "SearchResultItemAnalysisStepTypesEnum",
    "SearchResultItemProjectEnum",
    "SearchResultItemViewingGroupEnum",
    "SearchResultItemComponentEnum",
    "SearchResultItemClassificationEnum",
    "SearchResultItemQuantificationEnum",
    "SearchResultItemDocumentTypeEnum",
    "SearchResultItemCharacterizationMethodEnum",
    "SearchResultItemTaxaEnum",
    "SearchResultItemCollectionsEnum",
    "SearchResultItemSexEnum",
    "SearchResultItemEthnicitiesEnum",
    "SearchResultItemStrainBackgroundEnum",
    "SearchResultItemTranscriptomeAnnotationEnum",
    "SearchResultItemAssemblyEnum",
    "SearchResultItemFileFormatEnum",
    "SearchResultItemUploadStatusEnum",
    "SearchResultItemFileFormatTypeEnum",
    "SearchResultItemDimension1Enum",
    "SearchResultItemDimension2Enum",
    "SearchResultItemSequencingKitEnum",
    "SearchResultItemIlluminaReadTypeEnum",
    "SearchResultItemStrandSpecificityEnum",
    "SearchResultItemFileSetTypeEnum",
    "SearchResultItemScopeEnum",
    "SearchResultItemSelectionCriteriaEnum",
    "SearchResultItemGuideTypeEnum",
    "SearchResultItemTilingModalityEnum",
    "SearchResultItemPreferredAssayTitleEnum",
    "SearchResultItemSequencingLibraryTypesEnum",
    "SearchResultItemPredictionObjectsEnum",
    "SearchResultItemDataUseLimitationEnum",
    "SearchResultItemDataUseLimitationModifiersEnum",
    "SearchResultItemModalityEnum",
    "SearchResultItemCasEnum",
    "SearchResultItemFusedDomainEnum",
    "SearchResultItemCasSpeciesEnum",
    "SearchResultItemDegronSystemEnum",
    "SearchResultItemPreferredAssayTitlesEnum",
    "SearchResultItemCompanyEnum",
    "SearchResultItemSequencingKitsEnum",
    "SearchResultItemQuantityUnitsEnum",
    "SearchResultItemPublishedByEnum",
    "SearchResultItemAgeUnitsEnum",
    "SearchResultItemStartingAmountUnitsEnum",
    "SearchResultItemNucleicAcidDeliveryEnum",
    "SearchResultItemTimePostLibraryDeliveryUnitsEnum",
    "SearchResultItemTimePostChangeUnitsEnum",
    "SearchResultItemGrowthMediumEnum",
    "SearchResultItemSampleMaterialEnum",
    "SearchResultItemPmiUnitsEnum",
    "SearchResultItemPreservationMethodEnum",
    "SearchResultItemUsedByEnum",
    "SearchResultItemAmountUnitsEnum",
    "SearchResultItemDurationUnitsEnum",
    "SearchResultItemPurposeEnum",
    "SearchResultItemPostTreatmentTimeUnitsEnum",
    "SearchResultItemTemperatureUnitsEnum",
    "SearchResultItemTreatmentTypeEnum",
    "SearchResultItemGroupsEnum",
    "SearchResultItemViewingGroupsEnum",
    "SearchResultItemJobTitleEnum",
    "SequenceFileCollectionsEnum",
    "SequenceFileStatusEnum",
    "SequenceFileFileFormatEnum",
    "SequenceFileUploadStatusEnum",
    "SequenceFileSequencingKitEnum",
    "SequenceFileIlluminaReadTypeEnum",
    "SignalFileTranscriptomeAnnotationEnum",
    "SignalFileAssemblyEnum",
    "SignalFileCollectionsEnum",
    "SignalFileStatusEnum",
    "SignalFileFileFormatEnum",
    "SignalFileUploadStatusEnum",
    "SignalFileStrandSpecificityEnum",
    "SoftwareStatusEnum",
    "SoftwareUsedByEnum",
    "SourceStatusEnum",
    "TabularFileAssemblyEnum",
    "TabularFileFileFormatTypeEnum",
    "TabularFileTranscriptomeAnnotationEnum",
    "TabularFileCollectionsEnum",
    "TabularFileStatusEnum",
    "TabularFileFileFormatEnum",
    "TabularFileUploadStatusEnum",
    "TechnicalSampleCollectionsEnum",
    "TechnicalSampleStatusEnum",
    "TechnicalSampleStartingAmountUnitsEnum",
    "TechnicalSampleNucleicAcidDeliveryEnum",
    "TechnicalSampleTimePostLibraryDeliveryUnitsEnum",
    "TechnicalSampleSampleMaterialEnum",
    "TechnicalSampleTaxaEnum",
    "TissueTaxaEnum",
    "TissueCollectionsEnum",
    "TissueStatusEnum",
    "TissueAgeUnitsEnum",
    "TissueStartingAmountUnitsEnum",
    "TissueNucleicAcidDeliveryEnum",
    "TissueTimePostLibraryDeliveryUnitsEnum",
    "TissuePmiUnitsEnum",
    "TissuePreservationMethodEnum",
    "TissueSexEnum",
    "TreatmentStatusEnum",
    "TreatmentAmountUnitsEnum",
    "TreatmentDurationUnitsEnum",
    "TreatmentPurposeEnum",
    "TreatmentPostTreatmentTimeUnitsEnum",
    "TreatmentTemperatureUnitsEnum",
    "TreatmentTreatmentTypeEnum",
    "UserStatusEnum",
    "UserGroupsEnum",
    "UserViewingGroupsEnum",
    "UserJobTitleEnum",
    "WorkflowCollectionsEnum",
    "WorkflowStatusEnum",
]);

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

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
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

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
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
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
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
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
