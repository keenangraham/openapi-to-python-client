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
 *
 */


import ApiClient from './ApiClient';
import AccessKey from './model/AccessKey';
import AccessKeyResults from './model/AccessKeyResults';
import AlignmentFile from './model/AlignmentFile';
import AlignmentFileResults from './model/AlignmentFileResults';
import AnalysisSet from './model/AnalysisSet';
import AnalysisSetResults from './model/AnalysisSetResults';
import AnalysisStep from './model/AnalysisStep';
import AnalysisStepResults from './model/AnalysisStepResults';
import AnalysisStepVersion from './model/AnalysisStepVersion';
import AnalysisStepVersionResults from './model/AnalysisStepVersionResults';
import AssayTerm from './model/AssayTerm';
import AssayTermResults from './model/AssayTermResults';
import Attachment from './model/Attachment';
import Attachment1 from './model/Attachment1';
import AuxiliarySet from './model/AuxiliarySet';
import AuxiliarySetResults from './model/AuxiliarySetResults';
import Award from './model/Award';
import AwardResults from './model/AwardResults';
import Biomarker from './model/Biomarker';
import BiomarkerResults from './model/BiomarkerResults';
import ConfigurationFile from './model/ConfigurationFile';
import ConfigurationFileResults from './model/ConfigurationFileResults';
import ConstructLibrarySet from './model/ConstructLibrarySet';
import ConstructLibrarySetResults from './model/ConstructLibrarySetResults';
import CrisprModification from './model/CrisprModification';
import CrisprModificationResults from './model/CrisprModificationResults';
import CuratedSet from './model/CuratedSet';
import CuratedSetResults from './model/CuratedSetResults';
import DegronModification from './model/DegronModification';
import DegronModificationResults from './model/DegronModificationResults';
import Document from './model/Document';
import DocumentResults from './model/DocumentResults';
import Gene from './model/Gene';
import GeneLocation from './model/GeneLocation';
import GeneLocation1 from './model/GeneLocation1';
import GeneResults from './model/GeneResults';
import GenomeBrowserAnnotationFile from './model/GenomeBrowserAnnotationFile';
import GenomeBrowserAnnotationFileResults from './model/GenomeBrowserAnnotationFileResults';
import HumanDonor from './model/HumanDonor';
import HumanDonorResults from './model/HumanDonorResults';
import Image from './model/Image';
import ImageFile from './model/ImageFile';
import ImageFileResults from './model/ImageFileResults';
import ImageResults from './model/ImageResults';
import InVitroSystem from './model/InVitroSystem';
import InVitroSystemResults from './model/InVitroSystemResults';
import InstitutionalCertificate from './model/InstitutionalCertificate';
import InstitutionalCertificateResults from './model/InstitutionalCertificateResults';
import Item from './model/Item';
import ItemType from './model/ItemType';
import Lab from './model/Lab';
import LabResults from './model/LabResults';
import Limit from './model/Limit';
import Locus from './model/Locus';
import Locus1 from './model/Locus1';
import MatrixFile from './model/MatrixFile';
import MatrixFileResults from './model/MatrixFileResults';
import MeasurementSet from './model/MeasurementSet';
import MeasurementSetResults from './model/MeasurementSetResults';
import ModelFile from './model/ModelFile';
import ModelFileResults from './model/ModelFileResults';
import ModelSet from './model/ModelSet';
import ModelSetResults from './model/ModelSetResults';
import MultiplexedSample from './model/MultiplexedSample';
import MultiplexedSampleResults from './model/MultiplexedSampleResults';
import NoResultsResponse from './model/NoResultsResponse';
import NoResultsResponseColumnsValue from './model/NoResultsResponseColumnsValue';
import NoResultsResponseFacetGroupsInner from './model/NoResultsResponseFacetGroupsInner';
import NoResultsResponseFacetsInner from './model/NoResultsResponseFacetsInner';
import NoResultsResponseFacetsInnerTermsInner from './model/NoResultsResponseFacetsInnerTermsInner';
import NoResultsResponseFiltersInner from './model/NoResultsResponseFiltersInner';
import NoResultsResponseSortValue from './model/NoResultsResponseSortValue';
import OpenReadingFrame from './model/OpenReadingFrame';
import OpenReadingFrameResults from './model/OpenReadingFrameResults';
import Page from './model/Page';
import PageLayout from './model/PageLayout';
import PageLayoutComponents from './model/PageLayoutComponents';
import PageResults from './model/PageResults';
import PhenotypeTerm from './model/PhenotypeTerm';
import PhenotypeTermResults from './model/PhenotypeTermResults';
import PhenotypicFeature from './model/PhenotypicFeature';
import PhenotypicFeatureResults from './model/PhenotypicFeatureResults';
import PlatformTerm from './model/PlatformTerm';
import PlatformTermResults from './model/PlatformTermResults';
import PredictionSet from './model/PredictionSet';
import PredictionSetResults from './model/PredictionSetResults';
import PrimaryCell from './model/PrimaryCell';
import PrimaryCellResults from './model/PrimaryCellResults';
import Publication from './model/Publication';
import PublicationResults from './model/PublicationResults';
import ReferenceFile from './model/ReferenceFile';
import ReferenceFileResults from './model/ReferenceFileResults';
import RelatedDonor from './model/RelatedDonor';
import RodentDonor from './model/RodentDonor';
import RodentDonorResults from './model/RodentDonorResults';
import SampleTerm from './model/SampleTerm';
import SampleTermResults from './model/SampleTermResults';
import SearchFacet from './model/SearchFacet';
import SearchResultItem from './model/SearchResultItem';
import SearchResults from './model/SearchResults';
import SequenceFile from './model/SequenceFile';
import SequenceFileResults from './model/SequenceFileResults';
import SignalFile from './model/SignalFile';
import SignalFileResults from './model/SignalFileResults';
import Software from './model/Software';
import SoftwareResults from './model/SoftwareResults';
import SoftwareVersion from './model/SoftwareVersion';
import SoftwareVersionResults from './model/SoftwareVersionResults';
import Source from './model/Source';
import SourceResults from './model/SourceResults';
import TabularFile from './model/TabularFile';
import TabularFileResults from './model/TabularFileResults';
import TechnicalSample from './model/TechnicalSample';
import TechnicalSampleResults from './model/TechnicalSampleResults';
import Tile from './model/Tile';
import Tissue from './model/Tissue';
import TissueResults from './model/TissueResults';
import Treatment from './model/Treatment';
import TreatmentResults from './model/TreatmentResults';
import User from './model/User';
import UserResults from './model/UserResults';
import WholeOrganism from './model/WholeOrganism';
import WholeOrganismResults from './model/WholeOrganismResults';
import Workflow from './model/Workflow';
import WorkflowResults from './model/WorkflowResults';
import IgvfApi from './api/IgvfApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var IgvfProjectApi = require('index'); // See note below*.
* var xxxSvc = new IgvfProjectApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new IgvfProjectApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new IgvfProjectApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new IgvfProjectApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessKey model constructor.
     * @property {module:model/AccessKey}
     */
    AccessKey,

    /**
     * The AccessKeyResults model constructor.
     * @property {module:model/AccessKeyResults}
     */
    AccessKeyResults,

    /**
     * The AlignmentFile model constructor.
     * @property {module:model/AlignmentFile}
     */
    AlignmentFile,

    /**
     * The AlignmentFileResults model constructor.
     * @property {module:model/AlignmentFileResults}
     */
    AlignmentFileResults,

    /**
     * The AnalysisSet model constructor.
     * @property {module:model/AnalysisSet}
     */
    AnalysisSet,

    /**
     * The AnalysisSetResults model constructor.
     * @property {module:model/AnalysisSetResults}
     */
    AnalysisSetResults,

    /**
     * The AnalysisStep model constructor.
     * @property {module:model/AnalysisStep}
     */
    AnalysisStep,

    /**
     * The AnalysisStepResults model constructor.
     * @property {module:model/AnalysisStepResults}
     */
    AnalysisStepResults,

    /**
     * The AnalysisStepVersion model constructor.
     * @property {module:model/AnalysisStepVersion}
     */
    AnalysisStepVersion,

    /**
     * The AnalysisStepVersionResults model constructor.
     * @property {module:model/AnalysisStepVersionResults}
     */
    AnalysisStepVersionResults,

    /**
     * The AssayTerm model constructor.
     * @property {module:model/AssayTerm}
     */
    AssayTerm,

    /**
     * The AssayTermResults model constructor.
     * @property {module:model/AssayTermResults}
     */
    AssayTermResults,

    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment,

    /**
     * The Attachment1 model constructor.
     * @property {module:model/Attachment1}
     */
    Attachment1,

    /**
     * The AuxiliarySet model constructor.
     * @property {module:model/AuxiliarySet}
     */
    AuxiliarySet,

    /**
     * The AuxiliarySetResults model constructor.
     * @property {module:model/AuxiliarySetResults}
     */
    AuxiliarySetResults,

    /**
     * The Award model constructor.
     * @property {module:model/Award}
     */
    Award,

    /**
     * The AwardResults model constructor.
     * @property {module:model/AwardResults}
     */
    AwardResults,

    /**
     * The Biomarker model constructor.
     * @property {module:model/Biomarker}
     */
    Biomarker,

    /**
     * The BiomarkerResults model constructor.
     * @property {module:model/BiomarkerResults}
     */
    BiomarkerResults,

    /**
     * The ConfigurationFile model constructor.
     * @property {module:model/ConfigurationFile}
     */
    ConfigurationFile,

    /**
     * The ConfigurationFileResults model constructor.
     * @property {module:model/ConfigurationFileResults}
     */
    ConfigurationFileResults,

    /**
     * The ConstructLibrarySet model constructor.
     * @property {module:model/ConstructLibrarySet}
     */
    ConstructLibrarySet,

    /**
     * The ConstructLibrarySetResults model constructor.
     * @property {module:model/ConstructLibrarySetResults}
     */
    ConstructLibrarySetResults,

    /**
     * The CrisprModification model constructor.
     * @property {module:model/CrisprModification}
     */
    CrisprModification,

    /**
     * The CrisprModificationResults model constructor.
     * @property {module:model/CrisprModificationResults}
     */
    CrisprModificationResults,

    /**
     * The CuratedSet model constructor.
     * @property {module:model/CuratedSet}
     */
    CuratedSet,

    /**
     * The CuratedSetResults model constructor.
     * @property {module:model/CuratedSetResults}
     */
    CuratedSetResults,

    /**
     * The DegronModification model constructor.
     * @property {module:model/DegronModification}
     */
    DegronModification,

    /**
     * The DegronModificationResults model constructor.
     * @property {module:model/DegronModificationResults}
     */
    DegronModificationResults,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The DocumentResults model constructor.
     * @property {module:model/DocumentResults}
     */
    DocumentResults,

    /**
     * The Gene model constructor.
     * @property {module:model/Gene}
     */
    Gene,

    /**
     * The GeneLocation model constructor.
     * @property {module:model/GeneLocation}
     */
    GeneLocation,

    /**
     * The GeneLocation1 model constructor.
     * @property {module:model/GeneLocation1}
     */
    GeneLocation1,

    /**
     * The GeneResults model constructor.
     * @property {module:model/GeneResults}
     */
    GeneResults,

    /**
     * The GenomeBrowserAnnotationFile model constructor.
     * @property {module:model/GenomeBrowserAnnotationFile}
     */
    GenomeBrowserAnnotationFile,

    /**
     * The GenomeBrowserAnnotationFileResults model constructor.
     * @property {module:model/GenomeBrowserAnnotationFileResults}
     */
    GenomeBrowserAnnotationFileResults,

    /**
     * The HumanDonor model constructor.
     * @property {module:model/HumanDonor}
     */
    HumanDonor,

    /**
     * The HumanDonorResults model constructor.
     * @property {module:model/HumanDonorResults}
     */
    HumanDonorResults,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The ImageFile model constructor.
     * @property {module:model/ImageFile}
     */
    ImageFile,

    /**
     * The ImageFileResults model constructor.
     * @property {module:model/ImageFileResults}
     */
    ImageFileResults,

    /**
     * The ImageResults model constructor.
     * @property {module:model/ImageResults}
     */
    ImageResults,

    /**
     * The InVitroSystem model constructor.
     * @property {module:model/InVitroSystem}
     */
    InVitroSystem,

    /**
     * The InVitroSystemResults model constructor.
     * @property {module:model/InVitroSystemResults}
     */
    InVitroSystemResults,

    /**
     * The InstitutionalCertificate model constructor.
     * @property {module:model/InstitutionalCertificate}
     */
    InstitutionalCertificate,

    /**
     * The InstitutionalCertificateResults model constructor.
     * @property {module:model/InstitutionalCertificateResults}
     */
    InstitutionalCertificateResults,

    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item,

    /**
     * The ItemType model constructor.
     * @property {module:model/ItemType}
     */
    ItemType,

    /**
     * The Lab model constructor.
     * @property {module:model/Lab}
     */
    Lab,

    /**
     * The LabResults model constructor.
     * @property {module:model/LabResults}
     */
    LabResults,

    /**
     * The Limit model constructor.
     * @property {module:model/Limit}
     */
    Limit,

    /**
     * The Locus model constructor.
     * @property {module:model/Locus}
     */
    Locus,

    /**
     * The Locus1 model constructor.
     * @property {module:model/Locus1}
     */
    Locus1,

    /**
     * The MatrixFile model constructor.
     * @property {module:model/MatrixFile}
     */
    MatrixFile,

    /**
     * The MatrixFileResults model constructor.
     * @property {module:model/MatrixFileResults}
     */
    MatrixFileResults,

    /**
     * The MeasurementSet model constructor.
     * @property {module:model/MeasurementSet}
     */
    MeasurementSet,

    /**
     * The MeasurementSetResults model constructor.
     * @property {module:model/MeasurementSetResults}
     */
    MeasurementSetResults,

    /**
     * The ModelFile model constructor.
     * @property {module:model/ModelFile}
     */
    ModelFile,

    /**
     * The ModelFileResults model constructor.
     * @property {module:model/ModelFileResults}
     */
    ModelFileResults,

    /**
     * The ModelSet model constructor.
     * @property {module:model/ModelSet}
     */
    ModelSet,

    /**
     * The ModelSetResults model constructor.
     * @property {module:model/ModelSetResults}
     */
    ModelSetResults,

    /**
     * The MultiplexedSample model constructor.
     * @property {module:model/MultiplexedSample}
     */
    MultiplexedSample,

    /**
     * The MultiplexedSampleResults model constructor.
     * @property {module:model/MultiplexedSampleResults}
     */
    MultiplexedSampleResults,

    /**
     * The NoResultsResponse model constructor.
     * @property {module:model/NoResultsResponse}
     */
    NoResultsResponse,

    /**
     * The NoResultsResponseColumnsValue model constructor.
     * @property {module:model/NoResultsResponseColumnsValue}
     */
    NoResultsResponseColumnsValue,

    /**
     * The NoResultsResponseFacetGroupsInner model constructor.
     * @property {module:model/NoResultsResponseFacetGroupsInner}
     */
    NoResultsResponseFacetGroupsInner,

    /**
     * The NoResultsResponseFacetsInner model constructor.
     * @property {module:model/NoResultsResponseFacetsInner}
     */
    NoResultsResponseFacetsInner,

    /**
     * The NoResultsResponseFacetsInnerTermsInner model constructor.
     * @property {module:model/NoResultsResponseFacetsInnerTermsInner}
     */
    NoResultsResponseFacetsInnerTermsInner,

    /**
     * The NoResultsResponseFiltersInner model constructor.
     * @property {module:model/NoResultsResponseFiltersInner}
     */
    NoResultsResponseFiltersInner,

    /**
     * The NoResultsResponseSortValue model constructor.
     * @property {module:model/NoResultsResponseSortValue}
     */
    NoResultsResponseSortValue,

    /**
     * The OpenReadingFrame model constructor.
     * @property {module:model/OpenReadingFrame}
     */
    OpenReadingFrame,

    /**
     * The OpenReadingFrameResults model constructor.
     * @property {module:model/OpenReadingFrameResults}
     */
    OpenReadingFrameResults,

    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page,

    /**
     * The PageLayout model constructor.
     * @property {module:model/PageLayout}
     */
    PageLayout,

    /**
     * The PageLayoutComponents model constructor.
     * @property {module:model/PageLayoutComponents}
     */
    PageLayoutComponents,

    /**
     * The PageResults model constructor.
     * @property {module:model/PageResults}
     */
    PageResults,

    /**
     * The PhenotypeTerm model constructor.
     * @property {module:model/PhenotypeTerm}
     */
    PhenotypeTerm,

    /**
     * The PhenotypeTermResults model constructor.
     * @property {module:model/PhenotypeTermResults}
     */
    PhenotypeTermResults,

    /**
     * The PhenotypicFeature model constructor.
     * @property {module:model/PhenotypicFeature}
     */
    PhenotypicFeature,

    /**
     * The PhenotypicFeatureResults model constructor.
     * @property {module:model/PhenotypicFeatureResults}
     */
    PhenotypicFeatureResults,

    /**
     * The PlatformTerm model constructor.
     * @property {module:model/PlatformTerm}
     */
    PlatformTerm,

    /**
     * The PlatformTermResults model constructor.
     * @property {module:model/PlatformTermResults}
     */
    PlatformTermResults,

    /**
     * The PredictionSet model constructor.
     * @property {module:model/PredictionSet}
     */
    PredictionSet,

    /**
     * The PredictionSetResults model constructor.
     * @property {module:model/PredictionSetResults}
     */
    PredictionSetResults,

    /**
     * The PrimaryCell model constructor.
     * @property {module:model/PrimaryCell}
     */
    PrimaryCell,

    /**
     * The PrimaryCellResults model constructor.
     * @property {module:model/PrimaryCellResults}
     */
    PrimaryCellResults,

    /**
     * The Publication model constructor.
     * @property {module:model/Publication}
     */
    Publication,

    /**
     * The PublicationResults model constructor.
     * @property {module:model/PublicationResults}
     */
    PublicationResults,

    /**
     * The ReferenceFile model constructor.
     * @property {module:model/ReferenceFile}
     */
    ReferenceFile,

    /**
     * The ReferenceFileResults model constructor.
     * @property {module:model/ReferenceFileResults}
     */
    ReferenceFileResults,

    /**
     * The RelatedDonor model constructor.
     * @property {module:model/RelatedDonor}
     */
    RelatedDonor,

    /**
     * The RodentDonor model constructor.
     * @property {module:model/RodentDonor}
     */
    RodentDonor,

    /**
     * The RodentDonorResults model constructor.
     * @property {module:model/RodentDonorResults}
     */
    RodentDonorResults,

    /**
     * The SampleTerm model constructor.
     * @property {module:model/SampleTerm}
     */
    SampleTerm,

    /**
     * The SampleTermResults model constructor.
     * @property {module:model/SampleTermResults}
     */
    SampleTermResults,

    /**
     * The SearchFacet model constructor.
     * @property {module:model/SearchFacet}
     */
    SearchFacet,

    /**
     * The SearchResultItem model constructor.
     * @property {module:model/SearchResultItem}
     */
    SearchResultItem,

    /**
     * The SearchResults model constructor.
     * @property {module:model/SearchResults}
     */
    SearchResults,

    /**
     * The SequenceFile model constructor.
     * @property {module:model/SequenceFile}
     */
    SequenceFile,

    /**
     * The SequenceFileResults model constructor.
     * @property {module:model/SequenceFileResults}
     */
    SequenceFileResults,

    /**
     * The SignalFile model constructor.
     * @property {module:model/SignalFile}
     */
    SignalFile,

    /**
     * The SignalFileResults model constructor.
     * @property {module:model/SignalFileResults}
     */
    SignalFileResults,

    /**
     * The Software model constructor.
     * @property {module:model/Software}
     */
    Software,

    /**
     * The SoftwareResults model constructor.
     * @property {module:model/SoftwareResults}
     */
    SoftwareResults,

    /**
     * The SoftwareVersion model constructor.
     * @property {module:model/SoftwareVersion}
     */
    SoftwareVersion,

    /**
     * The SoftwareVersionResults model constructor.
     * @property {module:model/SoftwareVersionResults}
     */
    SoftwareVersionResults,

    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source,

    /**
     * The SourceResults model constructor.
     * @property {module:model/SourceResults}
     */
    SourceResults,

    /**
     * The TabularFile model constructor.
     * @property {module:model/TabularFile}
     */
    TabularFile,

    /**
     * The TabularFileResults model constructor.
     * @property {module:model/TabularFileResults}
     */
    TabularFileResults,

    /**
     * The TechnicalSample model constructor.
     * @property {module:model/TechnicalSample}
     */
    TechnicalSample,

    /**
     * The TechnicalSampleResults model constructor.
     * @property {module:model/TechnicalSampleResults}
     */
    TechnicalSampleResults,

    /**
     * The Tile model constructor.
     * @property {module:model/Tile}
     */
    Tile,

    /**
     * The Tissue model constructor.
     * @property {module:model/Tissue}
     */
    Tissue,

    /**
     * The TissueResults model constructor.
     * @property {module:model/TissueResults}
     */
    TissueResults,

    /**
     * The Treatment model constructor.
     * @property {module:model/Treatment}
     */
    Treatment,

    /**
     * The TreatmentResults model constructor.
     * @property {module:model/TreatmentResults}
     */
    TreatmentResults,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserResults model constructor.
     * @property {module:model/UserResults}
     */
    UserResults,

    /**
     * The WholeOrganism model constructor.
     * @property {module:model/WholeOrganism}
     */
    WholeOrganism,

    /**
     * The WholeOrganismResults model constructor.
     * @property {module:model/WholeOrganismResults}
     */
    WholeOrganismResults,

    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow,

    /**
     * The WorkflowResults model constructor.
     * @property {module:model/WorkflowResults}
     */
    WorkflowResults,

    /**
    * The IgvfApi service constructor.
    * @property {module:api/IgvfApi}
    */
    IgvfApi
};
