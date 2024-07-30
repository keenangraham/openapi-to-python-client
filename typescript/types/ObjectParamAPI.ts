import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AccessKey } from '../models/AccessKey';
import { AccessKeyResults } from '../models/AccessKeyResults';
import { AlignmentFile } from '../models/AlignmentFile';
import { AlignmentFileResults } from '../models/AlignmentFileResults';
import { AnalysisSet } from '../models/AnalysisSet';
import { AnalysisSetResults } from '../models/AnalysisSetResults';
import { AnalysisStep } from '../models/AnalysisStep';
import { AnalysisStepResults } from '../models/AnalysisStepResults';
import { AnalysisStepVersion } from '../models/AnalysisStepVersion';
import { AnalysisStepVersionResults } from '../models/AnalysisStepVersionResults';
import { AssayTerm } from '../models/AssayTerm';
import { AssayTermResults } from '../models/AssayTermResults';
import { Attachment } from '../models/Attachment';
import { Attachment1 } from '../models/Attachment1';
import { AuxiliarySet } from '../models/AuxiliarySet';
import { AuxiliarySetResults } from '../models/AuxiliarySetResults';
import { Award } from '../models/Award';
import { AwardResults } from '../models/AwardResults';
import { Biomarker } from '../models/Biomarker';
import { BiomarkerResults } from '../models/BiomarkerResults';
import { ConfigurationFile } from '../models/ConfigurationFile';
import { ConfigurationFileResults } from '../models/ConfigurationFileResults';
import { ConstructLibrarySet } from '../models/ConstructLibrarySet';
import { ConstructLibrarySetResults } from '../models/ConstructLibrarySetResults';
import { CrisprModification } from '../models/CrisprModification';
import { CrisprModificationResults } from '../models/CrisprModificationResults';
import { CuratedSet } from '../models/CuratedSet';
import { CuratedSetResults } from '../models/CuratedSetResults';
import { DegronModification } from '../models/DegronModification';
import { DegronModificationResults } from '../models/DegronModificationResults';
import { Document } from '../models/Document';
import { DocumentResults } from '../models/DocumentResults';
import { Gene } from '../models/Gene';
import { GeneLocation } from '../models/GeneLocation';
import { GeneLocation1 } from '../models/GeneLocation1';
import { GeneResults } from '../models/GeneResults';
import { GenomeBrowserAnnotationFile } from '../models/GenomeBrowserAnnotationFile';
import { GenomeBrowserAnnotationFileResults } from '../models/GenomeBrowserAnnotationFileResults';
import { HumanDonor } from '../models/HumanDonor';
import { HumanDonorResults } from '../models/HumanDonorResults';
import { Image } from '../models/Image';
import { ImageFile } from '../models/ImageFile';
import { ImageFileResults } from '../models/ImageFileResults';
import { ImageResults } from '../models/ImageResults';
import { InVitroSystem } from '../models/InVitroSystem';
import { InVitroSystemResults } from '../models/InVitroSystemResults';
import { InstitutionalCertificate } from '../models/InstitutionalCertificate';
import { InstitutionalCertificateResults } from '../models/InstitutionalCertificateResults';
import { Item } from '../models/Item';
import { ItemType } from '../models/ItemType';
import { Lab } from '../models/Lab';
import { LabResults } from '../models/LabResults';
import { Limit } from '../models/Limit';
import { Locus } from '../models/Locus';
import { Locus1 } from '../models/Locus1';
import { MatrixFile } from '../models/MatrixFile';
import { MatrixFileResults } from '../models/MatrixFileResults';
import { MeasurementSet } from '../models/MeasurementSet';
import { MeasurementSetResults } from '../models/MeasurementSetResults';
import { ModelFile } from '../models/ModelFile';
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
import { OpenReadingFrame } from '../models/OpenReadingFrame';
import { OpenReadingFrameResults } from '../models/OpenReadingFrameResults';
import { Page } from '../models/Page';
import { PageLayout } from '../models/PageLayout';
import { PageLayoutComponents } from '../models/PageLayoutComponents';
import { PageResults } from '../models/PageResults';
import { PhenotypeTerm } from '../models/PhenotypeTerm';
import { PhenotypeTermResults } from '../models/PhenotypeTermResults';
import { PhenotypicFeature } from '../models/PhenotypicFeature';
import { PhenotypicFeatureResults } from '../models/PhenotypicFeatureResults';
import { PlatformTerm } from '../models/PlatformTerm';
import { PlatformTermResults } from '../models/PlatformTermResults';
import { PredictionSet } from '../models/PredictionSet';
import { PredictionSetResults } from '../models/PredictionSetResults';
import { PrimaryCell } from '../models/PrimaryCell';
import { PrimaryCellResults } from '../models/PrimaryCellResults';
import { Publication } from '../models/Publication';
import { PublicationResults } from '../models/PublicationResults';
import { ReferenceFile } from '../models/ReferenceFile';
import { ReferenceFileResults } from '../models/ReferenceFileResults';
import { RelatedDonor } from '../models/RelatedDonor';
import { RodentDonor } from '../models/RodentDonor';
import { RodentDonorResults } from '../models/RodentDonorResults';
import { SampleTerm } from '../models/SampleTerm';
import { SampleTermResults } from '../models/SampleTermResults';
import { SearchFacet } from '../models/SearchFacet';
import { SearchResultItem } from '../models/SearchResultItem';
import { SearchResults } from '../models/SearchResults';
import { SequenceFile } from '../models/SequenceFile';
import { SequenceFileResults } from '../models/SequenceFileResults';
import { SignalFile } from '../models/SignalFile';
import { SignalFileResults } from '../models/SignalFileResults';
import { Software } from '../models/Software';
import { SoftwareResults } from '../models/SoftwareResults';
import { SoftwareVersion } from '../models/SoftwareVersion';
import { SoftwareVersionResults } from '../models/SoftwareVersionResults';
import { Source } from '../models/Source';
import { SourceResults } from '../models/SourceResults';
import { TabularFile } from '../models/TabularFile';
import { TabularFileResults } from '../models/TabularFileResults';
import { TechnicalSample } from '../models/TechnicalSample';
import { TechnicalSampleResults } from '../models/TechnicalSampleResults';
import { Tile } from '../models/Tile';
import { Tissue } from '../models/Tissue';
import { TissueResults } from '../models/TissueResults';
import { Treatment } from '../models/Treatment';
import { TreatmentResults } from '../models/TreatmentResults';
import { User } from '../models/User';
import { UserResults } from '../models/UserResults';
import { WholeOrganism } from '../models/WholeOrganism';
import { WholeOrganismResults } from '../models/WholeOrganismResults';
import { Workflow } from '../models/Workflow';
import { WorkflowResults } from '../models/WorkflowResults';

import { ObservableIgvfApi } from "./ObservableAPI";
import { IgvfApiRequestFactory, IgvfApiResponseProcessor} from "../apis/IgvfApi";

export interface IgvfApiAccessKeysRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiaccessKeys
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiaccessKeys
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiaccessKeys
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    id?: Array<string>
    /**
     * Filter by access_key_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    accessKeyId?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    aliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    description?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    notes?: Array<string>
    /**
     * Filter by secret_access_key_hash
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    secretAccessKeyHash?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;current&#39; | &#39;deleted&#39;&gt;
     * @memberof IgvfApiaccessKeys
     */
    status?: Array<'current' | 'deleted'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    summary?: Array<string>
    /**
     * Filter by user
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    user?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiaccessKeys
     */
    uuid?: Array<string>
}

export interface IgvfApiAlignmentFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApialignmentFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApialignmentFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApialignmentFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by anvil_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    anvilUrl?: Array<string>
    /**
     * Filter by assembly
     * @type Array&lt;&#39;GRCh38&#39; | &#39;GRCm39&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    assembly?: Array<'GRCh38' | 'GRCm39'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    contentSummary?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    contentType?: Array<string>
    /**
     * Filter by controlled_access
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApialignmentFiles
     */
    controlledAccess?: Array<boolean>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;bam&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    fileFormat?: Array<'bam'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApialignmentFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by filtered
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApialignmentFiles
     */
    filtered?: Array<boolean>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    notes?: Array<string>
    /**
     * Filter by redacted
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApialignmentFiles
     */
    redacted?: Array<boolean>
    /**
     * Filter by reference_files
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    referenceFiles?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    summary?: Array<string>
    /**
     * Filter by transcriptome_annotation
     * @type Array&lt;&#39;GENCODE 40&#39; | &#39;GENCODE 41&#39; | &#39;GENCODE 42&#39; | &#39;GENCODE 43&#39; | &#39;GENCODE 44&#39; | &#39;GENCODE 45&#39; | &#39;GENCODE M30&#39; | &#39;GENCODE M31&#39; | &#39;GENCODE M32&#39; | &#39;GENCODE M33&#39; | &#39;GENCODE M34&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApialignmentFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApialignmentFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiAnalysisSetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApianalysisSets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApianalysisSets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApianalysisSets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by assay_titles
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    assayTitles?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.contact_pi.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    awardContactPiId?: Array<string>
    /**
     * Filter by award.contact_pi.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    awardContactPiTitle?: Array<string>
    /**
     * Filter by award.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    awardTitle?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    documents?: Array<string>
    /**
     * Filter by donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    donorsId?: Array<string>
    /**
     * Filter by donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    donorsAccession?: Array<string>
    /**
     * Filter by donors.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    donorsAliases?: Array<string>
    /**
     * Filter by donors.sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    donorsSex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by donors.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by donors.taxa
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    donorsTaxa?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;intermediate analysis&#39; | &#39;principal analysis&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    fileSetType?: Array<'intermediate analysis' | 'principal analysis'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesCreationTimestamp?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApianalysisSets
     */
    filesFileSize?: Array<number>
    /**
     * Filter by files.href
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesHref?: Array<string>
    /**
     * Filter by files.s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesS3Uri?: Array<string>
    /**
     * Filter by files.sequencing_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesSequencingPlatform?: Array<string>
    /**
     * Filter by files.submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    filesSubmittedFileName?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by input_file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    inputFileSetsId?: Array<string>
    /**
     * Filter by input_file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    inputFileSetsAccession?: Array<string>
    /**
     * Filter by input_file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    inputFileSetsAliases?: Array<string>
    /**
     * Filter by input_file_sets.file_set_type
     * @type Array&lt;&#39;pathogenicity&#39; | &#39;functional effect&#39; | &#39;protein stability&#39; | &#39;activity level&#39; | &#39;binding effect&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    inputFileSetsFileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesId?: Array<string>
    /**
     * Filter by samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesAccession?: Array<string>
    /**
     * Filter by samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesAliases?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesCellFateChangeTreatments?: Array<string>
    /**
     * Filter by samples.classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by samples.construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesConstructLibrarySets?: Array<string>
    /**
     * Filter by samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesDiseaseTermsId?: Array<string>
    /**
     * Filter by samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by samples.modifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesModifications?: Array<string>
    /**
     * Filter by samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesSampleTermsId?: Array<string>
    /**
     * Filter by samples.sample_terms.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesSampleTermsAliases?: Array<string>
    /**
     * Filter by samples.sample_terms.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by samples.sample_terms.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesSampleTermsSummary?: Array<string>
    /**
     * Filter by samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesSampleTermsTermName?: Array<string>
    /**
     * Filter by samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesSummary?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesTargetedSampleTermId?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesTargetedSampleTermTermName?: Array<string>
    /**
     * Filter by samples.taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by samples.treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    samplesTreatments?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApianalysisSets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    summary?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSets
     */
    uuid?: Array<string>
}

export interface IgvfApiAnalysisStepVersionsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApianalysisStepVersions
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApianalysisStepVersions
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApianalysisStepVersions
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    aliases?: Array<string>
    /**
     * Filter by analysis_step.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    analysisStepId?: Array<string>
    /**
     * Filter by analysis_step.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    analysisStepName?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    description?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by software_versions.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    softwareVersionsId?: Array<string>
    /**
     * Filter by software_versions.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    softwareVersionsName?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    summary?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisStepVersions
     */
    uuid?: Array<string>
}

export interface IgvfApiAnalysisStepsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApianalysisSteps
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApianalysisSteps
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApianalysisSteps
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    aliases?: Array<string>
    /**
     * Filter by analysis_step_types
     * @type Array&lt;&#39;alignment&#39; | &#39;file format conversion&#39; | &#39;signal generation&#39;&gt;
     * @memberof IgvfApianalysisSteps
     */
    analysisStepTypes?: Array<'alignment' | 'file format conversion' | 'signal generation'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApianalysisSteps
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    description?: Array<string>
    /**
     * Filter by input_content_types
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    inputContentTypes?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    labTitle?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    notes?: Array<string>
    /**
     * Filter by output_content_types
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    outputContentTypes?: Array<string>
    /**
     * Filter by parents.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    parentsId?: Array<string>
    /**
     * Filter by parents.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    parentsTitle?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApianalysisSteps
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by step_label
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    stepLabel?: Array<string>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    title?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    uuid?: Array<string>
    /**
     * Filter by workflow.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    workflowId?: Array<string>
    /**
     * Filter by workflow.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApianalysisSteps
     */
    workflowAccession?: Array<string>
}

export interface IgvfApiAssayTermsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiassayTerms
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiassayTerms
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiassayTerms
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    aliases?: Array<string>
    /**
     * Filter by ancestors
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    ancestors?: Array<string>
    /**
     * Filter by assay_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    assaySlims?: Array<string>
    /**
     * Filter by category_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    categorySlims?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by deprecated_ntr_terms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    deprecatedNtrTerms?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    description?: Array<string>
    /**
     * Filter by is_a
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    isA?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    notes?: Array<string>
    /**
     * Filter by objective_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    objectiveSlims?: Array<string>
    /**
     * Filter by ontology
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    ontology?: Array<string>
    /**
     * Filter by preferred_assay_titles
     * @type Array&lt;&#39;10x multiome&#39; | &#39;10x multiome with MULTI-seq&#39; | &#39;AAV-MPRA&#39; | &#39;ATAC-seq&#39; | &#39;CERES-seq&#39; | &#39;Cell painting&#39; | &#39;CRISPR FlowFISH&#39; | &#39;DOGMA-seq&#39; | &#39;Histone ChIP-seq&#39; | &#39;Hi-C&#39; | &#39;lentiMPRA&#39; | &#39;MERFISH&#39; | &#39;MIAA&#39; | &#39;mN2H&#39; | &#39;MPRA&#39; | &#39;MPRA (scQer)&#39; | &#39;MULTI-seq&#39; | &#39;Parse SPLiT-seq&#39; | &#39;Perturb-seq&#39; | &#39;RNA-seq&#39; | &#39;SGE&#39; | &#39;scATAC-seq&#39; | &#39;scNT-seq&#39; | &#39;scNT-seq2&#39; | &#39;scRNA-seq&#39; | &#39;semi-qY2H&#39; | &#39;SHARE-seq&#39; | &#39;smFISH&#39; | &#39;snATAC-seq&#39; | &#39;snmC-Seq2&#39; | &#39;snMCT-seq&#39; | &#39;snM3C-seq&#39; | &#39;snRNA-seq&#39; | &#39;SUPERSTARR&#39; | &#39;TAP-seq&#39; | &#39;TF ChIP-seq&#39; | &#39;VAMP-seq&#39; | &#39;Variant FlowFISH&#39; | &#39;Variant painting&#39; | &#39;Y2H&#39; | &#39;yN2H&#39;&gt;
     * @memberof IgvfApiassayTerms
     */
    preferredAssayTitles?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiassayTerms
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    summary?: Array<string>
    /**
     * Filter by synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    synonyms?: Array<string>
    /**
     * Filter by term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    termId?: Array<string>
    /**
     * Filter by term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    termName?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiassayTerms
     */
    uuid?: Array<string>
}

export interface IgvfApiAuxiliarySetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiauxiliarySets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiauxiliarySets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiauxiliarySets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.contact_pi.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    awardContactPiId?: Array<string>
    /**
     * Filter by award.contact_pi.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    awardContactPiTitle?: Array<string>
    /**
     * Filter by award.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    awardTitle?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    documents?: Array<string>
    /**
     * Filter by donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    donorsId?: Array<string>
    /**
     * Filter by donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    donorsAccession?: Array<string>
    /**
     * Filter by donors.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    donorsAliases?: Array<string>
    /**
     * Filter by donors.sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    donorsSex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by donors.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by donors.taxa
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    donorsTaxa?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;cell hashing&#39; | &#39;cell sorting&#39; | &#39;circularized RNA barcode detection&#39; | &#39;gRNA sequencing&#39; | &#39;oligo-conjugated lipids&#39; | &#39;quantification DNA barcode sequencing&#39; | &#39;variant sequencing&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    fileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesCreationTimestamp?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesFileSize?: Array<number>
    /**
     * Filter by files.href
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesHref?: Array<string>
    /**
     * Filter by files.s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesS3Uri?: Array<string>
    /**
     * Filter by files.sequencing_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesSequencingPlatform?: Array<string>
    /**
     * Filter by files.submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesSubmittedFileName?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    labTitle?: Array<string>
    /**
     * Filter by library_construction_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    libraryConstructionPlatform?: Array<string>
    /**
     * Filter by measurement_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    measurementSetsId?: Array<string>
    /**
     * Filter by measurement_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    measurementSetsAccession?: Array<string>
    /**
     * Filter by measurement_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    measurementSetsAliases?: Array<string>
    /**
     * Filter by measurement_sets.preferred_assay_title
     * @type Array&lt;&#39;10x multiome&#39; | &#39;10x multiome with MULTI-seq&#39; | &#39;AAV-MPRA&#39; | &#39;ATAC-seq&#39; | &#39;CERES-seq&#39; | &#39;Cell painting&#39; | &#39;CRISPR FlowFISH&#39; | &#39;DOGMA-seq&#39; | &#39;Histone ChIP-seq&#39; | &#39;Hi-C&#39; | &#39;lentiMPRA&#39; | &#39;MERFISH&#39; | &#39;MIAA&#39; | &#39;mN2H&#39; | &#39;MPRA&#39; | &#39;MPRA (scQer)&#39; | &#39;MULTI-seq&#39; | &#39;Parse SPLiT-seq&#39; | &#39;Perturb-seq&#39; | &#39;RNA-seq&#39; | &#39;SGE&#39; | &#39;scATAC-seq&#39; | &#39;scNT-seq&#39; | &#39;scNT-seq2&#39; | &#39;scRNA-seq&#39; | &#39;semi-qY2H&#39; | &#39;SHARE-seq&#39; | &#39;smFISH&#39; | &#39;snATAC-seq&#39; | &#39;snmC-Seq2&#39; | &#39;snMCT-seq&#39; | &#39;snM3C-seq&#39; | &#39;snRNA-seq&#39; | &#39;SUPERSTARR&#39; | &#39;TAP-seq&#39; | &#39;TF ChIP-seq&#39; | &#39;VAMP-seq&#39; | &#39;Variant FlowFISH&#39; | &#39;Variant painting&#39; | &#39;Y2H&#39; | &#39;yN2H&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    measurementSetsPreferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesId?: Array<string>
    /**
     * Filter by samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesAccession?: Array<string>
    /**
     * Filter by samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesAliases?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesCellFateChangeTreatments?: Array<string>
    /**
     * Filter by samples.classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by samples.construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesConstructLibrarySets?: Array<string>
    /**
     * Filter by samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesDiseaseTermsId?: Array<string>
    /**
     * Filter by samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by samples.modifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesModifications?: Array<string>
    /**
     * Filter by samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesSampleTermsId?: Array<string>
    /**
     * Filter by samples.sample_terms.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesSampleTermsAliases?: Array<string>
    /**
     * Filter by samples.sample_terms.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by samples.sample_terms.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesSampleTermsSummary?: Array<string>
    /**
     * Filter by samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesSampleTermsTermName?: Array<string>
    /**
     * Filter by samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesSummary?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesTargetedSampleTermId?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesTargetedSampleTermTermName?: Array<string>
    /**
     * Filter by samples.taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by samples.treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    samplesTreatments?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiauxiliarySets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    summary?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiauxiliarySets
     */
    uuid?: Array<string>
}

export interface IgvfApiAwardsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiawards
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiawards
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiawards
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    aliases?: Array<string>
    /**
     * Filter by component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiawards
     */
    component?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by contact_pi
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    contactPi?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    description?: Array<string>
    /**
     * Filter by end_date
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    endDate?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    notes?: Array<string>
    /**
     * Filter by pis
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    pis?: Array<string>
    /**
     * Filter by project
     * @type Array&lt;&#39;community&#39; | &#39;ENCODE&#39; | &#39;IGVF&#39;&gt;
     * @memberof IgvfApiawards
     */
    project?: Array<'community' | 'ENCODE' | 'IGVF'>
    /**
     * Filter by start_date
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    startDate?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;current&#39; | &#39;deleted&#39; | &#39;disabled&#39;&gt;
     * @memberof IgvfApiawards
     */
    status?: Array<'current' | 'deleted' | 'disabled'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    title?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiawards
     */
    uuid?: Array<string>
    /**
     * Filter by viewing_group
     * @type Array&lt;&#39;community&#39; | &#39;IGVF&#39;&gt;
     * @memberof IgvfApiawards
     */
    viewingGroup?: Array<'community' | 'IGVF'>
}

export interface IgvfApiBatchDownloadRequest {
    /**
     * Type of objects to return. Can be repeated for multiple types.
     * @type Array&lt;string&gt;
     * @memberof IgvfApibatchDownload
     */
    type: Array<string>
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApibatchDownload
     */
    query?: string
    /**
     * Any field from any object type can be used as a filter. Use \&#39;!\&#39; for negation, \&#39;*\&#39; as a wildcard, and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; for range queries on numeric fields.
     * @type any
     * @memberof IgvfApibatchDownload
     */
    fieldFilters?: any
}

export interface IgvfApiBiomarkersRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApibiomarkers
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApibiomarkers
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApibiomarkers
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApibiomarkers
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    awardName?: Array<string>
    /**
     * Filter by biomarker_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    biomarkerFor?: Array<string>
    /**
     * Filter by classification
     * @type Array&lt;&#39;cell surface protein&#39; | &#39;marker gene&#39;&gt;
     * @memberof IgvfApibiomarkers
     */
    classification?: Array<'cell surface protein' | 'marker gene'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    description?: Array<string>
    /**
     * Filter by gene
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    gene?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    labTitle?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    name?: Array<string>
    /**
     * Filter by name_quantification
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    nameQuantification?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    notes?: Array<string>
    /**
     * Filter by quantification
     * @type Array&lt;&#39;negative&#39; | &#39;positive&#39; | &#39;low&#39; | &#39;intermediate&#39; | &#39;high&#39;&gt;
     * @memberof IgvfApibiomarkers
     */
    quantification?: Array<'negative' | 'positive' | 'low' | 'intermediate' | 'high'>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApibiomarkers
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    summary?: Array<string>
    /**
     * Filter by synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    synonyms?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApibiomarkers
     */
    uuid?: Array<string>
}

export interface IgvfApiConfigurationFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiconfigurationFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiconfigurationFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiconfigurationFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    contentType?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;yaml&#39;&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    fileFormat?: Array<'yaml'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by seqspec_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    seqspecOf?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    summary?: Array<string>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconfigurationFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiConstructLibrarySetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiconstructLibrarySets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiconstructLibrarySets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiconstructLibrarySets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by applied_to_samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesId?: Array<string>
    /**
     * Filter by applied_to_samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesAccession?: Array<string>
    /**
     * Filter by applied_to_samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesAliases?: Array<string>
    /**
     * Filter by applied_to_samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesDiseaseTermsId?: Array<string>
    /**
     * Filter by applied_to_samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by applied_to_samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesSampleTermsId?: Array<string>
    /**
     * Filter by applied_to_samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesSampleTermsTermName?: Array<string>
    /**
     * Filter by applied_to_samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by applied_to_samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    appliedToSamplesSummary?: Array<string>
    /**
     * Filter by associated_phenotypes.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    associatedPhenotypesId?: Array<string>
    /**
     * Filter by associated_phenotypes.term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    associatedPhenotypesTermId?: Array<string>
    /**
     * Filter by associated_phenotypes.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    associatedPhenotypesTermName?: Array<string>
    /**
     * Filter by average_guide_coverage
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    averageGuideCoverage?: Array<number>
    /**
     * Filter by average_insert_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    averageInsertSize?: Array<number>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    documents?: Array<string>
    /**
     * Filter by exon
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    exon?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;guide library&#39; | &#39;reporter library&#39; | &#39;expression vector library&#39; | &#39;editing template library&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    fileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by guide_type
     * @type Array&lt;&#39;sgRNA&#39; | &#39;pgRNA&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    guideType?: Array<'sgRNA' | 'pgRNA'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by integrated_content_files
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    integratedContentFiles?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    labTitle?: Array<string>
    /**
     * Filter by large_scale_gene_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    largeScaleGeneListId?: Array<string>
    /**
     * Filter by large_scale_gene_list.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    largeScaleGeneListAccession?: Array<string>
    /**
     * Filter by large_scale_gene_list.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    largeScaleGeneListAliases?: Array<string>
    /**
     * Filter by large_scale_loci_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    largeScaleLociListId?: Array<string>
    /**
     * Filter by large_scale_loci_list.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    largeScaleLociListAccession?: Array<string>
    /**
     * Filter by large_scale_loci_list.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    largeScaleLociListAliases?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    lotId?: Array<string>
    /**
     * Filter by lower_bound_guide_coverage
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    lowerBoundGuideCoverage?: Array<number>
    /**
     * Filter by lower_bound_insert_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    lowerBoundInsertSize?: Array<number>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    notes?: Array<string>
    /**
     * Filter by orf_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    orfListId?: Array<string>
    /**
     * Filter by orf_list.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    orfListAliases?: Array<string>
    /**
     * Filter by orf_list.gene
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    orfListGene?: Array<string>
    /**
     * Filter by orf_list.orf_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    orfListOrfId?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    productId?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by scope
     * @type Array&lt;&#39;tile&#39; | &#39;exon&#39; | &#39;genes&#39; | &#39;loci&#39; | &#39;genome-wide&#39; | &#39;interactors&#39; | &#39;alleles&#39; | &#39;targeton&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    scope?: Array<'tile' | 'exon' | 'genes' | 'loci' | 'genome-wide' | 'interactors' | 'alleles' | 'targeton'>
    /**
     * Filter by selection_criteria
     * @type Array&lt;&#39;accessible genome regions&#39; | &#39;candidate cis-regulatory elements&#39; | &#39;chromatin states&#39; | &#39;phenotype-associated variants&#39; | &#39;DNase hypersensitive sites&#39; | &#39;genes&#39; | &#39;histone modifications&#39; | &#39;protein interactors&#39; | &#39;sequence variants&#39; | &#39;synthetic elements&#39; | &#39;transcription start sites&#39; | &#39;TF binding sites&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    selectionCriteria?: Array<'accessible genome regions' | 'candidate cis-regulatory elements' | 'chromatin states' | 'phenotype-associated variants' | 'DNase hypersensitive sites' | 'genes' | 'histone modifications' | 'protein interactors' | 'sequence variants' | 'synthetic elements' | 'transcription start sites' | 'TF binding sites'>
    /**
     * Filter by small_scale_gene_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    smallScaleGeneListId?: Array<string>
    /**
     * Filter by small_scale_gene_list.geneid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    smallScaleGeneListGeneid?: Array<string>
    /**
     * Filter by small_scale_gene_list.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    smallScaleGeneListName?: Array<string>
    /**
     * Filter by small_scale_gene_list.symbol
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    smallScaleGeneListSymbol?: Array<string>
    /**
     * Filter by small_scale_gene_list.synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    smallScaleGeneListSynonyms?: Array<string>
    /**
     * Filter by small_scale_loci_list
     * @type Array&lt;Locus&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    smallScaleLociList?: Array<Locus>
    /**
     * Filter by sources
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    sources?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    summary?: Array<string>
    /**
     * Filter by targeton
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    targeton?: Array<string>
    /**
     * Filter by tiling_modality
     * @type Array&lt;&#39;peak tiling&#39; | &#39;full tiling&#39; | &#39;sparse peaks&#39;&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    tilingModality?: Array<'peak tiling' | 'full tiling' | 'sparse peaks'>
    /**
     * Filter by upper_bound_guide_coverage
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    upperBoundGuideCoverage?: Array<number>
    /**
     * Filter by upper_bound_insert_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    upperBoundInsertSize?: Array<number>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiconstructLibrarySets
     */
    uuid?: Array<string>
}

export interface IgvfApiCrisprModificationsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApicrisprModifications
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApicrisprModifications
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApicrisprModifications
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    id?: Array<string>
    /**
     * Filter by activated
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApicrisprModifications
     */
    activated?: Array<boolean>
    /**
     * Filter by activating_agent_term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    activatingAgentTermId?: Array<string>
    /**
     * Filter by activating_agent_term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    activatingAgentTermName?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApicrisprModifications
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biosamples_modified
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    biosamplesModified?: Array<string>
    /**
     * Filter by cas
     * @type Array&lt;&#39;Cas9&#39; | &#39;Cas12a&#39; | &#39;Cas13&#39; | &#39;dCas9&#39; | &#39;nCas9&#39; | &#39;SpG&#39; | &#39;SpRY&#39;&gt;
     * @memberof IgvfApicrisprModifications
     */
    cas?: Array<'Cas9' | 'Cas12a' | 'Cas13' | 'dCas9' | 'nCas9' | 'SpG' | 'SpRY'>
    /**
     * Filter by cas_species
     * @type Array&lt;&#39;Streptococcus pyogenes (Sp)&#39; | &#39;Staphylococcus aureus (Sa)&#39; | &#39;Campylobacter jejuni (Cj)&#39; | &#39;Neisseria meningitidis (Nm)&#39;&gt;
     * @memberof IgvfApicrisprModifications
     */
    casSpecies?: Array<'Streptococcus pyogenes (Sp)' | 'Staphylococcus aureus (Sa)' | 'Campylobacter jejuni (Cj)' | 'Neisseria meningitidis (Nm)'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    documents?: Array<string>
    /**
     * Filter by fused_domain
     * @type Array&lt;&#39;2xVP64&#39; | &#39;3xVP64&#39; | &#39;ABE8e&#39; | &#39;ABE8.20&#39; | &#39;ANTI-FLAG&#39; | &#39;BE4&#39; | &#39;BE4max&#39; | &#39;eA3A&#39; | &#39;eA3A-T31A&#39; | &#39;eA3A-T44D-S45A&#39; | &#39;KOX1-KRAB&#39; | &#39;M-MLV RT (PE2)&#39; | &#39;p300&#39; | &#39;TdCBE&#39; | &#39;TdCGBE&#39; | &#39;TdDE&#39; | &#39;VPH&#39; | &#39;VP64&#39; | &#39;VP64-p65-Rta (VPR)&#39; | &#39;ZIM3-KRAB&#39;&gt;
     * @memberof IgvfApicrisprModifications
     */
    fusedDomain?: Array<'2xVP64' | '3xVP64' | 'ABE8e' | 'ABE8.20' | 'ANTI-FLAG' | 'BE4' | 'BE4max' | 'eA3A' | 'eA3A-T31A' | 'eA3A-T44D-S45A' | 'KOX1-KRAB' | 'M-MLV RT (PE2)' | 'p300' | 'TdCBE' | 'TdCGBE' | 'TdDE' | 'VPH' | 'VP64' | 'VP64-p65-Rta (VPR)' | 'ZIM3-KRAB'>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    lotId?: Array<string>
    /**
     * Filter by modality
     * @type Array&lt;&#39;activation&#39; | &#39;base editing&#39; | &#39;cutting&#39; | &#39;interference&#39; | &#39;knockout&#39; | &#39;localizing&#39; | &#39;prime editing&#39;&gt;
     * @memberof IgvfApicrisprModifications
     */
    modality?: Array<'activation' | 'base editing' | 'cutting' | 'interference' | 'knockout' | 'localizing' | 'prime editing'>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    notes?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    productId?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by sources
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    sources?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApicrisprModifications
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    summary?: Array<string>
    /**
     * Filter by tagged_protein
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    taggedProtein?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApicrisprModifications
     */
    uuid?: Array<string>
}

export interface IgvfApiCuratedSetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApicuratedSets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApicuratedSets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApicuratedSets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by assemblies
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    assemblies?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.contact_pi.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    awardContactPiId?: Array<string>
    /**
     * Filter by award.contact_pi.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    awardContactPiTitle?: Array<string>
    /**
     * Filter by award.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    awardTitle?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    documents?: Array<string>
    /**
     * Filter by donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    donorsId?: Array<string>
    /**
     * Filter by donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    donorsAccession?: Array<string>
    /**
     * Filter by donors.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    donorsAliases?: Array<string>
    /**
     * Filter by donors.sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    donorsSex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by donors.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by donors.taxa
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    donorsTaxa?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;barcodes&#39; | &#39;editing templates&#39; | &#39;elements&#39; | &#39;external data for catalog&#39; | &#39;genome&#39; | &#39;genes&#39; | &#39;guide RNAs&#39; | &#39;transcriptome&#39; | &#39;variants&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    fileSetType?: Array<'barcodes' | 'editing templates' | 'elements' | 'external data for catalog' | 'genome' | 'genes' | 'guide RNAs' | 'transcriptome' | 'variants'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesCreationTimestamp?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApicuratedSets
     */
    filesFileSize?: Array<number>
    /**
     * Filter by files.href
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesHref?: Array<string>
    /**
     * Filter by files.s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesS3Uri?: Array<string>
    /**
     * Filter by files.sequencing_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesSequencingPlatform?: Array<string>
    /**
     * Filter by files.submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    filesSubmittedFileName?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesId?: Array<string>
    /**
     * Filter by samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesAccession?: Array<string>
    /**
     * Filter by samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesAliases?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesCellFateChangeTreatments?: Array<string>
    /**
     * Filter by samples.classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by samples.construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesConstructLibrarySets?: Array<string>
    /**
     * Filter by samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesDiseaseTermsId?: Array<string>
    /**
     * Filter by samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by samples.modifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesModifications?: Array<string>
    /**
     * Filter by samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesSampleTermsId?: Array<string>
    /**
     * Filter by samples.sample_terms.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesSampleTermsAliases?: Array<string>
    /**
     * Filter by samples.sample_terms.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by samples.sample_terms.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesSampleTermsSummary?: Array<string>
    /**
     * Filter by samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesSampleTermsTermName?: Array<string>
    /**
     * Filter by samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesSummary?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesTargetedSampleTermId?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesTargetedSampleTermTermName?: Array<string>
    /**
     * Filter by samples.taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by samples.treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    samplesTreatments?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApicuratedSets
     */
    taxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by transcriptome_annotations
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    transcriptomeAnnotations?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApicuratedSets
     */
    uuid?: Array<string>
}

export interface IgvfApiDegronModificationsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApidegronModifications
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApidegronModifications
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApidegronModifications
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    id?: Array<string>
    /**
     * Filter by activated
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApidegronModifications
     */
    activated?: Array<boolean>
    /**
     * Filter by activating_agent_term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    activatingAgentTermId?: Array<string>
    /**
     * Filter by activating_agent_term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    activatingAgentTermName?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApidegronModifications
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biosamples_modified
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    biosamplesModified?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by degron_system
     * @type Array&lt;&#39;AID&#39; | &#39;AlissAid&#39; | &#39;ssAID&#39;&gt;
     * @memberof IgvfApidegronModifications
     */
    degronSystem?: Array<'AID' | 'AlissAid' | 'ssAID'>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    documents?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    lotId?: Array<string>
    /**
     * Filter by modality
     * @type Array&lt;&#39;degradation&#39;&gt;
     * @memberof IgvfApidegronModifications
     */
    modality?: Array<'degradation'>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    notes?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    productId?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by sources
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    sources?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApidegronModifications
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    summary?: Array<string>
    /**
     * Filter by tagged_proteins
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    taggedProteins?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApidegronModifications
     */
    uuid?: Array<string>
}

export interface IgvfApiDocumentsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApidocuments
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApidocuments
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApidocuments
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApidocuments
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by characterization_method
     * @type Array&lt;&#39;FACS&#39; | &#39;immunoblot&#39; | &#39;immunofluorescence&#39; | &#39;immunoprecipitation&#39; | &#39;mass spectrometry&#39; | &#39;PCR&#39; | &#39;restriction digest&#39; | &#39;RT-qPCR&#39; | &#39;sequencing&#39;&gt;
     * @memberof IgvfApidocuments
     */
    characterizationMethod?: Array<'FACS' | 'immunoblot' | 'immunofluorescence' | 'immunoprecipitation' | 'mass spectrometry' | 'PCR' | 'restriction digest' | 'RT-qPCR' | 'sequencing'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    description?: Array<string>
    /**
     * Filter by document_type
     * @type Array&lt;&#39;cell fate change protocol&#39; | &#39;characterization&#39; | &#39;computational protocol&#39; | &#39;experimental protocol&#39; | &#39;file format specification&#39; | &#39;image&#39; | &#39;model source data&#39; | &#39;plate map&#39; | &#39;plasmid map&#39; | &#39;plasmid sequence&#39; | &#39;standards&#39;&gt;
     * @memberof IgvfApidocuments
     */
    documentType?: Array<'cell fate change protocol' | 'characterization' | 'computational protocol' | 'experimental protocol' | 'file format specification' | 'image' | 'model source data' | 'plate map' | 'plasmid map' | 'plasmid sequence' | 'standards'>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApidocuments
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    summary?: Array<string>
    /**
     * Filter by urls
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    urls?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApidocuments
     */
    uuid?: Array<string>
}

export interface IgvfApiDownloadRequest {
    /**
     * The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03).
     * @type string
     * @memberof IgvfApidownload
     */
    fileId: string
}

export interface IgvfApiGenesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApigenes
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApigenes
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApigenes
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    aliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    description?: Array<string>
    /**
     * Filter by geneid
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    geneid?: Array<string>
    /**
     * Filter by geneid_with_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    geneidWithVersion?: Array<string>
    /**
     * Filter by locations
     * @type Array&lt;GeneLocation&gt;
     * @memberof IgvfApigenes
     */
    locations?: Array<GeneLocation>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApigenes
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    summary?: Array<string>
    /**
     * Filter by symbol
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    symbol?: Array<string>
    /**
     * Filter by synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    synonyms?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApigenes
     */
    taxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    title?: Array<string>
    /**
     * Filter by transcriptome_annotation
     * @type Array&lt;&#39;GENCODE 40&#39; | &#39;GENCODE 41&#39; | &#39;GENCODE 42&#39; | &#39;GENCODE 43&#39; | &#39;GENCODE 44&#39; | &#39;GENCODE 45&#39; | &#39;GENCODE M30&#39; | &#39;GENCODE M31&#39; | &#39;GENCODE M32&#39; | &#39;GENCODE M33&#39; | &#39;GENCODE M34&#39;&gt;
     * @memberof IgvfApigenes
     */
    transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    uuid?: Array<string>
    /**
     * Filter by version_number
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenes
     */
    versionNumber?: Array<string>
}

export interface IgvfApiGenomeBrowserAnnotationFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by assembly
     * @type Array&lt;&#39;GRCh38&#39; | &#39;GRCm39&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    assembly?: Array<'GRCh38' | 'GRCm39'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    contentType?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;bigBed&#39; | &#39;tabix&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    fileFormat?: Array<'bigBed' | 'tabix'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_format_type
     * @type Array&lt;&#39;bed12&#39; | &#39;bed3&#39; | &#39;bed3+&#39; | &#39;bed5&#39; | &#39;bed6&#39; | &#39;bed6+&#39; | &#39;bed9&#39; | &#39;bed9+&#39; | &#39;mpra_starr&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    summary?: Array<string>
    /**
     * Filter by transcriptome_annotation
     * @type Array&lt;&#39;GENCODE 40&#39; | &#39;GENCODE 41&#39; | &#39;GENCODE 42&#39; | &#39;GENCODE 43&#39; | &#39;GENCODE 44&#39; | &#39;GENCODE 45&#39; | &#39;GENCODE M30&#39; | &#39;GENCODE M31&#39; | &#39;GENCODE M32&#39; | &#39;GENCODE M33&#39; | &#39;GENCODE M34&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApigenomeBrowserAnnotationFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiGetByIdRequest {
    /**
     * The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;).
     * @type string
     * @memberof IgvfApigetById
     */
    resourceId: string
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApigetById
     */
    frame: 'object'
}

export interface IgvfApiHumanDonorsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApihumanDonors
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApihumanDonors
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApihumanDonors
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    documents?: Array<string>
    /**
     * Filter by ethnicities
     * @type Array&lt;&#39;African American&#39; | &#39;African Caribbean&#39; | &#39;Arab&#39; | &#39;Asian&#39; | &#39;Black&#39; | &#39;Black African&#39; | &#39;Chinese&#39; | &#39;Colombian&#39; | &#39;Dai Chinese&#39; | &#39;Esan&#39; | &#39;Eskimo&#39; | &#39;European&#39; | &#39;Gambian&#39; | &#39;Han Chinese&#39; | &#39;Hispanic&#39; | &#39;Indian&#39; | &#39;Japanese&#39; | &#39;Kinh Vietnamese&#39; | &#39;Luhya&#39; | &#39;Maasai&#39; | &#39;Mende&#39; | &#39;Native Hawaiian&#39; | &#39;Pacific Islander&#39; | &#39;Puerto Rican&#39; | &#39;Yoruba&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    ethnicities?: Array<'African American' | 'African Caribbean' | 'Arab' | 'Asian' | 'Black' | 'Black African' | 'Chinese' | 'Colombian' | 'Dai Chinese' | 'Esan' | 'Eskimo' | 'European' | 'Gambian' | 'Han Chinese' | 'Hispanic' | 'Indian' | 'Japanese' | 'Kinh Vietnamese' | 'Luhya' | 'Maasai' | 'Mende' | 'Native Hawaiian' | 'Pacific Islander' | 'Puerto Rican' | 'Yoruba'>
    /**
     * Filter by human_donor_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    humanDonorIdentifiers?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    notes?: Array<string>
    /**
     * Filter by phenotypic_features.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    phenotypicFeaturesId?: Array<string>
    /**
     * Filter by phenotypic_features.feature.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    phenotypicFeaturesFeatureId?: Array<string>
    /**
     * Filter by phenotypic_features.feature.term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    phenotypicFeaturesFeatureTermId?: Array<string>
    /**
     * Filter by phenotypic_features.feature.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    phenotypicFeaturesFeatureTermName?: Array<string>
    /**
     * Filter by phenotypic_features.observation_date
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    phenotypicFeaturesObservationDate?: Array<string>
    /**
     * Filter by phenotypic_features.quantity_units
     * @type Array&lt;&#39;meter&#39; | &#39;micromole&#39; | &#39;nanogram&#39; | &#39;microgram&#39; | &#39;milligram&#39; | &#39;gram&#39; | &#39;kilogram&#39; | &#39;milli-International Unit per milliliter&#39; | &#39;picogram per milliliter&#39; | &#39;nanogram per milliliter&#39; | &#39;milligram per deciliter&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    publications?: Array<string>
    /**
     * Filter by related_donors.donor.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    relatedDonorsDonorId?: Array<string>
    /**
     * Filter by related_donors.donor.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    relatedDonorsDonorAccession?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    sex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39;&gt;
     * @memberof IgvfApihumanDonors
     */
    taxa?: Array<'Homo sapiens'>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApihumanDonors
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApihumanDonors
     */
    virtual?: Array<boolean>
}

export interface IgvfApiImageFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiimageFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiimageFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiimageFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiimageFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiimageFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    contentType?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;jpg&#39; | &#39;png&#39;&gt;
     * @memberof IgvfApiimageFiles
     */
    fileFormat?: Array<'jpg' | 'png'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApiimageFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiimageFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    summary?: Array<string>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApiimageFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimageFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiImagesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiimages
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiimages
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiimages
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    aliases?: Array<string>
    /**
     * Filter by caption
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    caption?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    description?: Array<string>
    /**
     * Filter by download_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    downloadUrl?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiimages
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    summary?: Array<string>
    /**
     * Filter by thumb_nail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    thumbNail?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiimages
     */
    uuid?: Array<string>
}

export interface IgvfApiInVitroSystemsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiinVitroSystems
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiinVitroSystems
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiinVitroSystems
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    accession?: Array<string>
    /**
     * Filter by age
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    age?: Array<string>
    /**
     * Filter by age_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39; | &#39;year&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biomarkers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    biomarkers?: Array<string>
    /**
     * Filter by cell_fate_change_protocol
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellFateChangeProtocol?: Array<string>
    /**
     * Filter by cell_fate_change_treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellFateChangeTreatmentsId?: Array<string>
    /**
     * Filter by cell_fate_change_treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by cell_fate_change_treatments.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellFateChangeTreatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by cell_fate_change_treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellFateChangeTreatmentsSummary?: Array<string>
    /**
     * Filter by cell_fate_change_treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by cellular_sub_pool
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    cellularSubPool?: Array<string>
    /**
     * Filter by classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    classifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    constructLibrarySets?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_obtained
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    dateObtained?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    dbxrefs?: Array<string>
    /**
     * Filter by demultiplexed_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    demultiplexedFrom?: Array<string>
    /**
     * Filter by demultiplexed_to
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    demultiplexedTo?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    description?: Array<string>
    /**
     * Filter by disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    diseaseTermsId?: Array<string>
    /**
     * Filter by disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    diseaseTermsTermName?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    documents?: Array<string>
    /**
     * Filter by donors
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    donors?: Array<string>
    /**
     * Filter by embryonic
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiinVitroSystems
     */
    embryonic?: Array<boolean>
    /**
     * Filter by file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsId?: Array<string>
    /**
     * Filter by file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsAccession?: Array<string>
    /**
     * Filter by file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsAliases?: Array<string>
    /**
     * Filter by file_sets.assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsAssayTermTermName?: Array<string>
    /**
     * Filter by file_sets.lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsLabTitle?: Array<string>
    /**
     * Filter by file_sets.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by file_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    fileSetsSummary?: Array<string>
    /**
     * Filter by growth_medium
     * @type Array&lt;&#39;DMEM with serum&#39; | &#39;DMEM without serum&#39; | &#39;SMBM with serum&#39; | &#39;SMBM without serum&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    growthMedium?: Array<'DMEM with serum' | 'DMEM without serum' | 'SMBM with serum' | 'SMBM without serum'>
    /**
     * Filter by institutional_certificates.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    institutionalCertificatesId?: Array<string>
    /**
     * Filter by institutional_certificates.certificate_identifier
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    institutionalCertificatesCertificateIdentifier?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    lotId?: Array<string>
    /**
     * Filter by lower_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    lowerBoundAge?: Array<number>
    /**
     * Filter by lower_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    lowerBoundAgeInHours?: Array<number>
    /**
     * Filter by modifications.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    modificationsId?: Array<string>
    /**
     * Filter by modifications.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by modifications.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    modificationsSummary?: Array<string>
    /**
     * Filter by moi
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    moi?: Array<number>
    /**
     * Filter by multiplexed_in.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    multiplexedInId?: Array<string>
    /**
     * Filter by multiplexed_in.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    multiplexedInAccession?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    notes?: Array<string>
    /**
     * Filter by nucleic_acid_delivery
     * @type Array&lt;&#39;transfection&#39; | &#39;adenoviral transduction&#39; | &#39;lentiviral transduction&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>
    /**
     * Filter by origin_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    originOf?: Array<string>
    /**
     * Filter by originated_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    originatedFromId?: Array<string>
    /**
     * Filter by originated_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    originatedFromAccession?: Array<string>
    /**
     * Filter by part_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    partOf?: Array<string>
    /**
     * Filter by parts
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    parts?: Array<string>
    /**
     * Filter by passage_number
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    passageNumber?: Array<number>
    /**
     * Filter by pooled_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    pooledFrom?: Array<string>
    /**
     * Filter by pooled_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    pooledIn?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    productId?: Array<string>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sampleTermsId?: Array<string>
    /**
     * Filter by sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sampleTermsTermName?: Array<string>
    /**
     * Filter by sex
     * @type Array&lt;&#39;female&#39; | &#39;male&#39; | &#39;mixed&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>
    /**
     * Filter by sorted_fractions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sortedFractions?: Array<string>
    /**
     * Filter by sorted_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sortedFromId?: Array<string>
    /**
     * Filter by sorted_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sortedFromAccession?: Array<string>
    /**
     * Filter by sorted_from_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sortedFromDetail?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    sourcesId?: Array<string>
    /**
     * Filter by starting_amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    startingAmount?: Array<number>
    /**
     * Filter by starting_amount_units
     * @type Array&lt;&#39;cells&#39; | &#39;cells/ml&#39; | &#39;g&#39; | &#39;items&#39; | &#39;mg&#39; | &#39;whole animals&#39; | &#39;whole embryos&#39; | &#39;μg&#39; | &#39;ng&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    summary?: Array<string>
    /**
     * Filter by targeted_sample_term
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    targetedSampleTerm?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    taxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by time_post_change
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    timePostChange?: Array<number>
    /**
     * Filter by time_post_change_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    timePostChangeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by time_post_library_delivery
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    timePostLibraryDelivery?: Array<number>
    /**
     * Filter by time_post_library_delivery_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    treatmentsId?: Array<string>
    /**
     * Filter by treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by treatments.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    treatmentsSummary?: Array<string>
    /**
     * Filter by treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApiinVitroSystems
     */
    treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by upper_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    upperBoundAge?: Array<number>
    /**
     * Filter by upper_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApiinVitroSystems
     */
    upperBoundAgeInHours?: Array<number>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinVitroSystems
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiinVitroSystems
     */
    virtual?: Array<boolean>
}

export interface IgvfApiInstitutionalCertificatesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiinstitutionalCertificates
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiinstitutionalCertificates
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiinstitutionalCertificates
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by certificate_identifier
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    certificateIdentifier?: Array<string>
    /**
     * Filter by controlled_access
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    controlledAccess?: Array<boolean>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by data_use_limitation
     * @type Array&lt;&#39;DS&#39; | &#39;GRU&#39; | &#39;HMB&#39; | &#39;other&#39;&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    dataUseLimitation?: Array<'DS' | 'GRU' | 'HMB' | 'other'>
    /**
     * Filter by data_use_limitation_modifiers
     * @type Array&lt;&#39;COL&#39; | &#39;GSO&#39; | &#39;IRB&#39; | &#39;MDS&#39; | &#39;NPU&#39; | &#39;PUB&#39;&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    dataUseLimitationModifiers?: Array<'COL' | 'GSO' | 'IRB' | 'MDS' | 'NPU' | 'PUB'>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    description?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by samples
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    samples?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    summary?: Array<string>
    /**
     * Filter by urls
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    urls?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiinstitutionalCertificates
     */
    uuid?: Array<string>
}

export interface IgvfApiLabsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApilabs
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApilabs
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApilabs
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    aliases?: Array<string>
    /**
     * Filter by awards.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    awardsId?: Array<string>
    /**
     * Filter by awards.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApilabs
     */
    awardsComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by awards.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    awardsName?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    description?: Array<string>
    /**
     * Filter by institute_label
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    instituteLabel?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    notes?: Array<string>
    /**
     * Filter by pi
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    pi?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;current&#39; | &#39;deleted&#39; | &#39;disabled&#39;&gt;
     * @memberof IgvfApilabs
     */
    status?: Array<'current' | 'deleted' | 'disabled'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    title?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApilabs
     */
    uuid?: Array<string>
}

export interface IgvfApiMatrixFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApimatrixFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApimatrixFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApimatrixFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    contentSummary?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    contentType?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    description?: Array<string>
    /**
     * Filter by dimension1
     * @type Array&lt;&#39;cell&#39; | &#39;fragment&#39; | &#39;gene&#39; | &#39;time&#39; | &#39;treatment&#39; | &#39;variant&#39; | &#39;genomic position&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    dimension1?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>
    /**
     * Filter by dimension2
     * @type Array&lt;&#39;cell&#39; | &#39;fragment&#39; | &#39;gene&#39; | &#39;time&#39; | &#39;treatment&#39; | &#39;variant&#39; | &#39;genomic position&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    dimension2?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;h5ad&#39; | &#39;hdf5&#39; | &#39;mtx&#39; | &#39;tar&#39; | &#39;hic&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    fileFormat?: Array<'h5ad' | 'hdf5' | 'mtx' | 'tar' | 'hic'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApimatrixFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    notes?: Array<string>
    /**
     * Filter by reference_files
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    referenceFiles?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    summary?: Array<string>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApimatrixFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimatrixFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiMeasurementSetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApimeasurementSets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApimeasurementSets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApimeasurementSets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by assay_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    assayTermId?: Array<string>
    /**
     * Filter by assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    assayTermTermName?: Array<string>
    /**
     * Filter by auxiliary_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    auxiliarySetsId?: Array<string>
    /**
     * Filter by auxiliary_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    auxiliarySetsAccession?: Array<string>
    /**
     * Filter by auxiliary_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    auxiliarySetsAliases?: Array<string>
    /**
     * Filter by auxiliary_sets.file_set_type
     * @type Array&lt;&#39;cell hashing&#39; | &#39;cell sorting&#39; | &#39;circularized RNA barcode detection&#39; | &#39;gRNA sequencing&#39; | &#39;oligo-conjugated lipids&#39; | &#39;quantification DNA barcode sequencing&#39; | &#39;variant sequencing&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    auxiliarySetsFileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.contact_pi.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    awardContactPiId?: Array<string>
    /**
     * Filter by award.contact_pi.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    awardContactPiTitle?: Array<string>
    /**
     * Filter by award.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    awardTitle?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    controlFileSetsId?: Array<string>
    /**
     * Filter by control_file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    controlFileSetsAccession?: Array<string>
    /**
     * Filter by control_file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    controlFileSetsAliases?: Array<string>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    documents?: Array<string>
    /**
     * Filter by donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    donorsId?: Array<string>
    /**
     * Filter by donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    donorsAccession?: Array<string>
    /**
     * Filter by donors.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    donorsAliases?: Array<string>
    /**
     * Filter by donors.sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    donorsSex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by donors.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by donors.taxa
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    donorsTaxa?: Array<string>
    /**
     * Filter by external_image_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    externalImageUrl?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;experimental data&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    fileSetType?: Array<'experimental data'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesCreationTimestamp?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesFileSize?: Array<number>
    /**
     * Filter by files.href
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesHref?: Array<string>
    /**
     * Filter by files.s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesS3Uri?: Array<string>
    /**
     * Filter by files.sequencing_platform.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesSequencingPlatformId?: Array<string>
    /**
     * Filter by files.sequencing_platform.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesSequencingPlatformTermName?: Array<string>
    /**
     * Filter by files.submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesSubmittedFileName?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    labTitle?: Array<string>
    /**
     * Filter by library_construction_platform.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    libraryConstructionPlatformId?: Array<string>
    /**
     * Filter by library_construction_platform.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    libraryConstructionPlatformTermName?: Array<string>
    /**
     * Filter by multiome_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApimeasurementSets
     */
    multiomeSize?: Array<number>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    notes?: Array<string>
    /**
     * Filter by preferred_assay_title
     * @type Array&lt;&#39;10x multiome&#39; | &#39;10x multiome with MULTI-seq&#39; | &#39;AAV-MPRA&#39; | &#39;ATAC-seq&#39; | &#39;CERES-seq&#39; | &#39;Cell painting&#39; | &#39;CRISPR FlowFISH&#39; | &#39;DOGMA-seq&#39; | &#39;Histone ChIP-seq&#39; | &#39;Hi-C&#39; | &#39;lentiMPRA&#39; | &#39;MERFISH&#39; | &#39;MIAA&#39; | &#39;mN2H&#39; | &#39;MPRA&#39; | &#39;MPRA (scQer)&#39; | &#39;MULTI-seq&#39; | &#39;Parse SPLiT-seq&#39; | &#39;Perturb-seq&#39; | &#39;RNA-seq&#39; | &#39;SGE&#39; | &#39;scATAC-seq&#39; | &#39;scNT-seq&#39; | &#39;scNT-seq2&#39; | &#39;scRNA-seq&#39; | &#39;semi-qY2H&#39; | &#39;SHARE-seq&#39; | &#39;smFISH&#39; | &#39;snATAC-seq&#39; | &#39;snmC-Seq2&#39; | &#39;snMCT-seq&#39; | &#39;snM3C-seq&#39; | &#39;snRNA-seq&#39; | &#39;SUPERSTARR&#39; | &#39;TAP-seq&#39; | &#39;TF ChIP-seq&#39; | &#39;VAMP-seq&#39; | &#39;Variant FlowFISH&#39; | &#39;Variant painting&#39; | &#39;Y2H&#39; | &#39;yN2H&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    preferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    publications?: Array<string>
    /**
     * Filter by related_multiome_datasets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    relatedMultiomeDatasetsId?: Array<string>
    /**
     * Filter by related_multiome_datasets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    relatedMultiomeDatasetsAccession?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesId?: Array<string>
    /**
     * Filter by samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesAccession?: Array<string>
    /**
     * Filter by samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesAliases?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesCellFateChangeTreatmentsId?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesCellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by samples.cell_fate_change_treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesCellFateChangeTreatmentsSummary?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesCellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by samples.classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by samples.construct_library_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsId?: Array<string>
    /**
     * Filter by samples.construct_library_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsAccession?: Array<string>
    /**
     * Filter by samples.construct_library_sets.file_set_type
     * @type Array&lt;&#39;guide library&#39; | &#39;reporter library&#39; | &#39;expression vector library&#39; | &#39;editing template library&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsFileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>
    /**
     * Filter by samples.construct_library_sets.small_scale_gene_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsSmallScaleGeneListId?: Array<string>
    /**
     * Filter by samples.construct_library_sets.small_scale_gene_list.geneid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsSmallScaleGeneListGeneid?: Array<string>
    /**
     * Filter by samples.construct_library_sets.small_scale_gene_list.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsSmallScaleGeneListName?: Array<string>
    /**
     * Filter by samples.construct_library_sets.small_scale_gene_list.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsSmallScaleGeneListSummary?: Array<string>
    /**
     * Filter by samples.construct_library_sets.small_scale_gene_list.symbol
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsSmallScaleGeneListSymbol?: Array<string>
    /**
     * Filter by samples.construct_library_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesConstructLibrarySetsSummary?: Array<string>
    /**
     * Filter by samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesDiseaseTermsId?: Array<string>
    /**
     * Filter by samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by samples.modifications.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesModificationsId?: Array<string>
    /**
     * Filter by samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesSampleTermsId?: Array<string>
    /**
     * Filter by samples.sample_terms.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesSampleTermsAliases?: Array<string>
    /**
     * Filter by samples.sample_terms.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by samples.sample_terms.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesSampleTermsSummary?: Array<string>
    /**
     * Filter by samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesSampleTermsTermName?: Array<string>
    /**
     * Filter by samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesSummary?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTargetedSampleTermId?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTargetedSampleTermTermName?: Array<string>
    /**
     * Filter by samples.taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by samples.treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTreatmentsId?: Array<string>
    /**
     * Filter by samples.treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by samples.treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTreatmentsSummary?: Array<string>
    /**
     * Filter by samples.treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    samplesTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by sequencing_library_types
     * @type Array&lt;&#39;direct RNA&#39; | &#39;exome capture&#39; | &#39;mRNA enriched&#39; | &#39;rRNA depleted&#39; | &#39;polyA depleted&#39; | &#39;polyA enriched&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    sequencingLibraryTypes?: Array<'direct RNA' | 'exome capture' | 'mRNA enriched' | 'rRNA depleted' | 'polyA depleted' | 'polyA enriched'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimeasurementSets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    summary?: Array<string>
    /**
     * Filter by targeted_genes.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    targetedGenesId?: Array<string>
    /**
     * Filter by targeted_genes.geneid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    targetedGenesGeneid?: Array<string>
    /**
     * Filter by targeted_genes.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    targetedGenesName?: Array<string>
    /**
     * Filter by targeted_genes.symbol
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    targetedGenesSymbol?: Array<string>
    /**
     * Filter by targeted_genes.synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    targetedGenesSynonyms?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimeasurementSets
     */
    uuid?: Array<string>
}

export interface IgvfApiModelFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApimodelFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApimodelFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApimodelFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by anvil_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    anvilUrl?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApimodelFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApimodelFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    contentType?: Array<string>
    /**
     * Filter by controlled_access
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApimodelFiles
     */
    controlledAccess?: Array<boolean>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;hdf5&#39; | &#39;json&#39; | &#39;tar&#39; | &#39;tsv&#39;&gt;
     * @memberof IgvfApimodelFiles
     */
    fileFormat?: Array<'hdf5' | 'json' | 'tar' | 'tsv'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApimodelFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimodelFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    summary?: Array<string>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApimodelFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiModelSetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApimodelSets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApimodelSets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApimodelSets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by assessed_genes
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    assessedGenes?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.contact_pi.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    awardContactPiId?: Array<string>
    /**
     * Filter by award.contact_pi.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    awardContactPiTitle?: Array<string>
    /**
     * Filter by award.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    awardTitle?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    documents?: Array<string>
    /**
     * Filter by donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    donorsId?: Array<string>
    /**
     * Filter by donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    donorsAccession?: Array<string>
    /**
     * Filter by donors.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    donorsAliases?: Array<string>
    /**
     * Filter by donors.sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    donorsSex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by donors.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by donors.taxa
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    donorsTaxa?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;neural network&#39; | &#39;random forest&#39; | &#39;decision tree&#39; | &#39;support vector machine&#39; | &#39;variant binding effect&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    fileSetType?: Array<'neural network' | 'random forest' | 'decision tree' | 'support vector machine' | 'variant binding effect'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesCreationTimestamp?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApimodelSets
     */
    filesFileSize?: Array<number>
    /**
     * Filter by files.href
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesHref?: Array<string>
    /**
     * Filter by files.s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesS3Uri?: Array<string>
    /**
     * Filter by files.sequencing_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesSequencingPlatform?: Array<string>
    /**
     * Filter by files.submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    filesSubmittedFileName?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by input_file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    inputFileSetsId?: Array<string>
    /**
     * Filter by input_file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    inputFileSetsAccession?: Array<string>
    /**
     * Filter by input_file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    inputFileSetsAliases?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    labTitle?: Array<string>
    /**
     * Filter by model_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    modelName?: Array<string>
    /**
     * Filter by model_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    modelVersion?: Array<string>
    /**
     * Filter by model_zoo_location
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    modelZooLocation?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    notes?: Array<string>
    /**
     * Filter by prediction_objects
     * @type Array&lt;&#39;coding variants&#39; | &#39;non-coding variants&#39; | &#39;all variants&#39; | &#39;regulatory elements&#39; | &#39;genes&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    predictionObjects?: Array<'coding variants' | 'non-coding variants' | 'all variants' | 'regulatory elements' | 'genes'>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesId?: Array<string>
    /**
     * Filter by samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesAccession?: Array<string>
    /**
     * Filter by samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesAliases?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesCellFateChangeTreatments?: Array<string>
    /**
     * Filter by samples.classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by samples.construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesConstructLibrarySets?: Array<string>
    /**
     * Filter by samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesDiseaseTermsId?: Array<string>
    /**
     * Filter by samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by samples.modifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesModifications?: Array<string>
    /**
     * Filter by samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesSampleTermsId?: Array<string>
    /**
     * Filter by samples.sample_terms.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesSampleTermsAliases?: Array<string>
    /**
     * Filter by samples.sample_terms.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by samples.sample_terms.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesSampleTermsSummary?: Array<string>
    /**
     * Filter by samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesSampleTermsTermName?: Array<string>
    /**
     * Filter by samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesSummary?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesTargetedSampleTermId?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesTargetedSampleTermTermName?: Array<string>
    /**
     * Filter by samples.taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by samples.treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    samplesTreatments?: Array<string>
    /**
     * Filter by software_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    softwareVersion?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimodelSets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    summary?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimodelSets
     */
    uuid?: Array<string>
}

export interface IgvfApiMultiplexedSamplesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApimultiplexedSamples
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApimultiplexedSamples
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApimultiplexedSamples
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by barcode_sample_map
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    barcodeSampleMap?: Array<string>
    /**
     * Filter by biomarkers
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    biomarkers?: Array<string>
    /**
     * Filter by cellular_sub_pool
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    cellularSubPool?: Array<string>
    /**
     * Filter by classifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    classifications?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by construct_library_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    constructLibrarySetsId?: Array<string>
    /**
     * Filter by construct_library_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    constructLibrarySetsAccession?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_obtained
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    dateObtained?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    description?: Array<string>
    /**
     * Filter by disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    diseaseTermsId?: Array<string>
    /**
     * Filter by disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    diseaseTermsTermName?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    documents?: Array<string>
    /**
     * Filter by donors
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    donors?: Array<string>
    /**
     * Filter by file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsId?: Array<string>
    /**
     * Filter by file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsAccession?: Array<string>
    /**
     * Filter by file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsAliases?: Array<string>
    /**
     * Filter by file_sets.assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsAssayTermTermName?: Array<string>
    /**
     * Filter by file_sets.lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsLabTitle?: Array<string>
    /**
     * Filter by file_sets.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by file_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    fileSetsSummary?: Array<string>
    /**
     * Filter by institutional_certificates
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    institutionalCertificates?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    labTitle?: Array<string>
    /**
     * Filter by modifications.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    modificationsId?: Array<string>
    /**
     * Filter by modifications.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by modifications.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    modificationsSummary?: Array<string>
    /**
     * Filter by moi
     * @type Array&lt;number&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    moi?: Array<number>
    /**
     * Filter by multiplexed_in.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedInId?: Array<string>
    /**
     * Filter by multiplexed_in.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedInAccession?: Array<string>
    /**
     * Filter by multiplexed_samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesId?: Array<string>
    /**
     * Filter by multiplexed_samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesAccession?: Array<string>
    /**
     * Filter by multiplexed_samples.construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesConstructLibrarySets?: Array<string>
    /**
     * Filter by multiplexed_samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesDiseaseTermsId?: Array<string>
    /**
     * Filter by multiplexed_samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by multiplexed_samples.donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesDonorsId?: Array<string>
    /**
     * Filter by multiplexed_samples.donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesDonorsAccession?: Array<string>
    /**
     * Filter by multiplexed_samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesSampleTermsId?: Array<string>
    /**
     * Filter by multiplexed_samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesSampleTermsTermName?: Array<string>
    /**
     * Filter by multiplexed_samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by multiplexed_samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    multiplexedSamplesSummary?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    notes?: Array<string>
    /**
     * Filter by nucleic_acid_delivery
     * @type Array&lt;&#39;transfection&#39; | &#39;adenoviral transduction&#39; | &#39;lentiviral transduction&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>
    /**
     * Filter by origin_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    originOf?: Array<string>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sampleTermsId?: Array<string>
    /**
     * Filter by sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sampleTermsTermName?: Array<string>
    /**
     * Filter by sorted_fractions
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sortedFractions?: Array<string>
    /**
     * Filter by sorted_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sortedFromId?: Array<string>
    /**
     * Filter by sorted_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sortedFromAccession?: Array<string>
    /**
     * Filter by sorted_from_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sortedFromDetail?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    sourcesId?: Array<string>
    /**
     * Filter by starting_amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    startingAmount?: Array<number>
    /**
     * Filter by starting_amount_units
     * @type Array&lt;&#39;cells&#39; | &#39;cells/ml&#39; | &#39;g&#39; | &#39;items&#39; | &#39;mg&#39; | &#39;whole animals&#39; | &#39;whole embryos&#39; | &#39;μg&#39; | &#39;ng&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    summary?: Array<string>
    /**
     * Filter by time_post_library_delivery
     * @type Array&lt;number&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    timePostLibraryDelivery?: Array<number>
    /**
     * Filter by time_post_library_delivery_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    treatmentsId?: Array<string>
    /**
     * Filter by treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by treatments.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    treatmentsSummary?: Array<string>
    /**
     * Filter by treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApimultiplexedSamples
     */
    virtual?: Array<boolean>
}

export interface IgvfApiOpenReadingFramesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiopenReadingFrames
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiopenReadingFrames
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiopenReadingFrames
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    aliases?: Array<string>
    /**
     * Filter by award
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    award?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    description?: Array<string>
    /**
     * Filter by gene.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    geneId?: Array<string>
    /**
     * Filter by gene.geneid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    geneGeneid?: Array<string>
    /**
     * Filter by gene.symbol
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    geneSymbol?: Array<string>
    /**
     * Filter by lab
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    lab?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    notes?: Array<string>
    /**
     * Filter by orf_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    orfId?: Array<string>
    /**
     * Filter by pct_coverage_orf
     * @type Array&lt;number&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    pctCoverageOrf?: Array<number>
    /**
     * Filter by pct_coverage_protein
     * @type Array&lt;number&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    pctCoverageProtein?: Array<number>
    /**
     * Filter by pct_identical_protein
     * @type Array&lt;number&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    pctIdenticalProtein?: Array<number>
    /**
     * Filter by protein_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    proteinId?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    submittedBy?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    summary?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiopenReadingFrames
     */
    uuid?: Array<string>
}

export interface IgvfApiPagesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApipages
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApipages
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApipages
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    aliases?: Array<string>
    /**
     * Filter by award
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    award?: Array<string>
    /**
     * Filter by canonical_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    canonicalUri?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    description?: Array<string>
    /**
     * Filter by lab
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    lab?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    notes?: Array<string>
    /**
     * Filter by parent
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    parent?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApipages
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    title?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApipages
     */
    uuid?: Array<string>
}

export interface IgvfApiPhenotypeTermsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiphenotypeTerms
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiphenotypeTerms
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiphenotypeTerms
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    aliases?: Array<string>
    /**
     * Filter by ancestors
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    ancestors?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by deprecated_ntr_terms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    deprecatedNtrTerms?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    description?: Array<string>
    /**
     * Filter by is_a
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    isA?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    notes?: Array<string>
    /**
     * Filter by ontology
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    ontology?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    summary?: Array<string>
    /**
     * Filter by synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    synonyms?: Array<string>
    /**
     * Filter by term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    termId?: Array<string>
    /**
     * Filter by term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    termName?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypeTerms
     */
    uuid?: Array<string>
}

export interface IgvfApiPhenotypicFeaturesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiphenotypicFeatures
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiphenotypicFeatures
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiphenotypicFeatures
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    description?: Array<string>
    /**
     * Filter by feature.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    featureId?: Array<string>
    /**
     * Filter by feature.term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    featureTermId?: Array<string>
    /**
     * Filter by feature.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    featureTermName?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    notes?: Array<string>
    /**
     * Filter by observation_date
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    observationDate?: Array<string>
    /**
     * Filter by quantity
     * @type Array&lt;number&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    quantity?: Array<number>
    /**
     * Filter by quantity_units
     * @type Array&lt;&#39;meter&#39; | &#39;micromole&#39; | &#39;nanogram&#39; | &#39;microgram&#39; | &#39;milligram&#39; | &#39;gram&#39; | &#39;kilogram&#39; | &#39;milli-International Unit per milliliter&#39; | &#39;picogram per milliliter&#39; | &#39;nanogram per milliliter&#39; | &#39;milligram per deciliter&#39;&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    quantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    summary?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiphenotypicFeatures
     */
    uuid?: Array<string>
}

export interface IgvfApiPlatformTermsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiplatformTerms
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiplatformTerms
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiplatformTerms
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    aliases?: Array<string>
    /**
     * Filter by ancestors
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    ancestors?: Array<string>
    /**
     * Filter by company
     * @type Array&lt;&#39;10X Genomics&#39; | &#39;Illumina&#39; | &#39;Life Technologies&#39; | &#39;Oxford Nanopore Technologies&#39; | &#39;Pacific Biosciences&#39; | &#39;Parse Biosciences&#39; | &#39;Roche&#39;&gt;
     * @memberof IgvfApiplatformTerms
     */
    company?: Array<'10X Genomics' | 'Illumina' | 'Life Technologies' | 'Oxford Nanopore Technologies' | 'Pacific Biosciences' | 'Parse Biosciences' | 'Roche'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by deprecated_ntr_terms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    deprecatedNtrTerms?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    description?: Array<string>
    /**
     * Filter by is_a
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    isA?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    notes?: Array<string>
    /**
     * Filter by ontology
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    ontology?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by sequencing_kits
     * @type Array&lt;&#39;HiSeq SBS Kit v4&#39; | &#39;HiSeq SR Cluster Kit v4-cBot-HS&#39; | &#39;HiSeq PE Cluster Kit v4-cBot-HS&#39; | &#39;HiSeq SR Rapid Cluster Kit v2&#39; | &#39;HiSeq PE Rapid Cluster Kit v2&#39; | &#39;HiSeq Rapid SBS Kit v2&#39; | &#39;HiSeq 3000/4000 SBS Kit&#39; | &#39;HiSeq 3000/4000 SR Cluster Kit&#39; | &#39;HiSeq 3000/4000 PE Cluster Kit&#39; | &#39;MiSeq Reagent Kit v2&#39; | &#39;NextSeq 500 Mid Output Kit&#39; | &#39;NextSeq 500 High Output Kit&#39; | &#39;NextSeq 500 Mid Output v2 Kit&#39; | &#39;NextSeq 500 High Output v2 Kit&#39; | &#39;NextSeq 500/550 Mid-Output v2.5 Kit&#39; | &#39;NextSeq 500/550 High-Output v2.5 Kit&#39; | &#39;TG NextSeq 500/550 Mid-Output Kit v2.5&#39; | &#39;TG NextSeq 500/550 High-Output Kit v2.5&#39; | &#39;NextSeq 1000/2000 P1 Reagent Kit&#39; | &#39;NextSeq 1000/2000 P2 Reagent Kit&#39; | &#39;NextSeq 1000/2000 P3 Reagent Kit&#39; | &#39;NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit&#39; | &#39;NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit&#39; | &#39;NextSeq 2000 P3 XLEAP-SBS Reagent Kit&#39; | &#39;NextSeq 2000 P4 XLEAP-SBS Reagent Kit&#39; | &#39;NovaSeq 6000 SP Reagent Kit v1.5&#39; | &#39;NovaSeq 6000 S1 Reagent Kit v1.5&#39; | &#39;NovaSeq 6000 S2 Reagent Kit v1.5&#39; | &#39;NovaSeq 6000 S4 Reagent Kit v1.5&#39; | &#39;NovaSeq X Series 10B Reagent Kit&#39; | &#39;ONT Ligation Sequencing Kit V14&#39; | &#39;Sequel sequencing kit 3.0&#39; | &#39;Sequel II sequencing kit 2.0&#39;&gt;
     * @memberof IgvfApiplatformTerms
     */
    sequencingKits?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiplatformTerms
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    summary?: Array<string>
    /**
     * Filter by synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    synonyms?: Array<string>
    /**
     * Filter by term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    termId?: Array<string>
    /**
     * Filter by term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    termName?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiplatformTerms
     */
    uuid?: Array<string>
}

export interface IgvfApiPredictionSetsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApipredictionSets
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApipredictionSets
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApipredictionSets
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by award.contact_pi.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    awardContactPiId?: Array<string>
    /**
     * Filter by award.contact_pi.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    awardContactPiTitle?: Array<string>
    /**
     * Filter by award.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    awardTitle?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by control_for.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    controlForId?: Array<string>
    /**
     * Filter by control_for.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    controlForAccession?: Array<string>
    /**
     * Filter by control_for.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    controlForAliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    documents?: Array<string>
    /**
     * Filter by donors.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    donorsId?: Array<string>
    /**
     * Filter by donors.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    donorsAccession?: Array<string>
    /**
     * Filter by donors.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    donorsAliases?: Array<string>
    /**
     * Filter by donors.sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    donorsSex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by donors.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by donors.taxa
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    donorsTaxa?: Array<string>
    /**
     * Filter by file_set_type
     * @type Array&lt;&#39;pathogenicity&#39; | &#39;functional effect&#39; | &#39;protein stability&#39; | &#39;activity level&#39; | &#39;binding effect&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    fileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>
    /**
     * Filter by files.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesId?: Array<string>
    /**
     * Filter by files.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesAccession?: Array<string>
    /**
     * Filter by files.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesAliases?: Array<string>
    /**
     * Filter by files.content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesContentType?: Array<string>
    /**
     * Filter by files.creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesCreationTimestamp?: Array<string>
    /**
     * Filter by files.file_format
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesFileFormat?: Array<string>
    /**
     * Filter by files.file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApipredictionSets
     */
    filesFileSize?: Array<number>
    /**
     * Filter by files.href
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesHref?: Array<string>
    /**
     * Filter by files.s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesS3Uri?: Array<string>
    /**
     * Filter by files.sequencing_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesSequencingPlatform?: Array<string>
    /**
     * Filter by files.submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    filesSubmittedFileName?: Array<string>
    /**
     * Filter by files.upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by input_file_set_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    inputFileSetFor?: Array<string>
    /**
     * Filter by input_file_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    inputFileSets?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    labTitle?: Array<string>
    /**
     * Filter by large_scale_gene_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    largeScaleGeneListId?: Array<string>
    /**
     * Filter by large_scale_gene_list.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    largeScaleGeneListAccession?: Array<string>
    /**
     * Filter by large_scale_gene_list.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    largeScaleGeneListAliases?: Array<string>
    /**
     * Filter by large_scale_loci_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    largeScaleLociListId?: Array<string>
    /**
     * Filter by large_scale_loci_list.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    largeScaleLociListAccession?: Array<string>
    /**
     * Filter by large_scale_loci_list.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    largeScaleLociListAliases?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    revokeDetail?: Array<string>
    /**
     * Filter by samples.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesId?: Array<string>
    /**
     * Filter by samples.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesAccession?: Array<string>
    /**
     * Filter by samples.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesAliases?: Array<string>
    /**
     * Filter by samples.cell_fate_change_treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesCellFateChangeTreatments?: Array<string>
    /**
     * Filter by samples.classifications
     * @type Array&lt;&#39;organoid&#39; | &#39;gastruloid&#39; | &#39;embryoid&#39; | &#39;cell line&#39; | &#39;differentiated cell specimen&#39; | &#39;reprogrammed cell specimen&#39; | &#39;pooled cell specimen&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>
    /**
     * Filter by samples.construct_library_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesConstructLibrarySetsId?: Array<string>
    /**
     * Filter by samples.construct_library_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesConstructLibrarySetsAccession?: Array<string>
    /**
     * Filter by samples.construct_library_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesConstructLibrarySetsSummary?: Array<string>
    /**
     * Filter by samples.disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesDiseaseTermsId?: Array<string>
    /**
     * Filter by samples.disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesDiseaseTermsTermName?: Array<string>
    /**
     * Filter by samples.modifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesModifications?: Array<string>
    /**
     * Filter by samples.sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesSampleTermsId?: Array<string>
    /**
     * Filter by samples.sample_terms.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesSampleTermsAliases?: Array<string>
    /**
     * Filter by samples.sample_terms.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by samples.sample_terms.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesSampleTermsSummary?: Array<string>
    /**
     * Filter by samples.sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesSampleTermsTermName?: Array<string>
    /**
     * Filter by samples.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by samples.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesSummary?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesTargetedSampleTermId?: Array<string>
    /**
     * Filter by samples.targeted_sample_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesTargetedSampleTermTermName?: Array<string>
    /**
     * Filter by samples.taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by samples.treatments
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    samplesTreatments?: Array<string>
    /**
     * Filter by scope
     * @type Array&lt;&#39;genes&#39; | &#39;loci&#39; | &#39;genome-wide&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    scope?: Array<'genes' | 'loci' | 'genome-wide'>
    /**
     * Filter by small_scale_gene_list.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    smallScaleGeneListId?: Array<string>
    /**
     * Filter by small_scale_gene_list.geneid
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    smallScaleGeneListGeneid?: Array<string>
    /**
     * Filter by small_scale_gene_list.name
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    smallScaleGeneListName?: Array<string>
    /**
     * Filter by small_scale_gene_list.symbol
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    smallScaleGeneListSymbol?: Array<string>
    /**
     * Filter by small_scale_gene_list.synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    smallScaleGeneListSynonyms?: Array<string>
    /**
     * Filter by small_scale_loci_list
     * @type Array&lt;Locus&gt;
     * @memberof IgvfApipredictionSets
     */
    smallScaleLociList?: Array<Locus>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApipredictionSets
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_files_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    submittedFilesTimestamp?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    summary?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApipredictionSets
     */
    uuid?: Array<string>
}

export interface IgvfApiPrimaryCellsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiprimaryCells
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiprimaryCells
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiprimaryCells
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    accession?: Array<string>
    /**
     * Filter by age
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    age?: Array<string>
    /**
     * Filter by age_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39; | &#39;year&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biomarkers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    biomarkers?: Array<string>
    /**
     * Filter by cellular_sub_pool
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    cellularSubPool?: Array<string>
    /**
     * Filter by classifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    classifications?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    constructLibrarySets?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_obtained
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    dateObtained?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    description?: Array<string>
    /**
     * Filter by disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    diseaseTermsId?: Array<string>
    /**
     * Filter by disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    diseaseTermsTermName?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    documents?: Array<string>
    /**
     * Filter by donors
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    donors?: Array<string>
    /**
     * Filter by embryonic
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiprimaryCells
     */
    embryonic?: Array<boolean>
    /**
     * Filter by file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsId?: Array<string>
    /**
     * Filter by file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsAccession?: Array<string>
    /**
     * Filter by file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsAliases?: Array<string>
    /**
     * Filter by file_sets.assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsAssayTermTermName?: Array<string>
    /**
     * Filter by file_sets.lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsLabTitle?: Array<string>
    /**
     * Filter by file_sets.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by file_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    fileSetsSummary?: Array<string>
    /**
     * Filter by institutional_certificates.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    institutionalCertificatesId?: Array<string>
    /**
     * Filter by institutional_certificates.certificate_identifier
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    institutionalCertificatesCertificateIdentifier?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    lotId?: Array<string>
    /**
     * Filter by lower_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    lowerBoundAge?: Array<number>
    /**
     * Filter by lower_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    lowerBoundAgeInHours?: Array<number>
    /**
     * Filter by modifications.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    modificationsId?: Array<string>
    /**
     * Filter by modifications.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by modifications.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    modificationsSummary?: Array<string>
    /**
     * Filter by moi
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    moi?: Array<number>
    /**
     * Filter by multiplexed_in.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    multiplexedInId?: Array<string>
    /**
     * Filter by multiplexed_in.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    multiplexedInAccession?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    notes?: Array<string>
    /**
     * Filter by nucleic_acid_delivery
     * @type Array&lt;&#39;transfection&#39; | &#39;adenoviral transduction&#39; | &#39;lentiviral transduction&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>
    /**
     * Filter by origin_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    originOf?: Array<string>
    /**
     * Filter by originated_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    originatedFrom?: Array<string>
    /**
     * Filter by part_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    partOf?: Array<string>
    /**
     * Filter by parts
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    parts?: Array<string>
    /**
     * Filter by passage_number
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    passageNumber?: Array<number>
    /**
     * Filter by pooled_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    pooledFrom?: Array<string>
    /**
     * Filter by pooled_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    pooledIn?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    productId?: Array<string>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sampleTermsId?: Array<string>
    /**
     * Filter by sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sampleTermsTermName?: Array<string>
    /**
     * Filter by sex
     * @type Array&lt;&#39;female&#39; | &#39;male&#39; | &#39;mixed&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>
    /**
     * Filter by sorted_fractions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sortedFractions?: Array<string>
    /**
     * Filter by sorted_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sortedFromId?: Array<string>
    /**
     * Filter by sorted_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sortedFromAccession?: Array<string>
    /**
     * Filter by sorted_from_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sortedFromDetail?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    sourcesId?: Array<string>
    /**
     * Filter by starting_amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    startingAmount?: Array<number>
    /**
     * Filter by starting_amount_units
     * @type Array&lt;&#39;cells&#39; | &#39;cells/ml&#39; | &#39;g&#39; | &#39;items&#39; | &#39;mg&#39; | &#39;whole animals&#39; | &#39;whole embryos&#39; | &#39;μg&#39; | &#39;ng&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    taxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by time_post_library_delivery
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    timePostLibraryDelivery?: Array<number>
    /**
     * Filter by time_post_library_delivery_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    treatmentsId?: Array<string>
    /**
     * Filter by treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by treatments.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    treatmentsSummary?: Array<string>
    /**
     * Filter by treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApiprimaryCells
     */
    treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by upper_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    upperBoundAge?: Array<number>
    /**
     * Filter by upper_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApiprimaryCells
     */
    upperBoundAgeInHours?: Array<number>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiprimaryCells
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiprimaryCells
     */
    virtual?: Array<boolean>
}

export interface IgvfApiPublicationsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApipublications
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApipublications
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApipublications
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    id?: Array<string>
    /**
     * Filter by abstract
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    _abstract?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    aliases?: Array<string>
    /**
     * Filter by authors
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    authors?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApipublications
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_published
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    datePublished?: Array<string>
    /**
     * Filter by date_revised
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    dateRevised?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    description?: Array<string>
    /**
     * Filter by donors
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    donors?: Array<string>
    /**
     * Filter by file_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    fileSets?: Array<string>
    /**
     * Filter by issue
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    issue?: Array<string>
    /**
     * Filter by journal
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    journal?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    labTitle?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    notes?: Array<string>
    /**
     * Filter by page
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    page?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publication_year
     * @type Array&lt;number&gt;
     * @memberof IgvfApipublications
     */
    publicationYear?: Array<number>
    /**
     * Filter by published_by
     * @type Array&lt;&#39;community&#39; | &#39;IGVF&#39; | &#39;ENCODE&#39;&gt;
     * @memberof IgvfApipublications
     */
    publishedBy?: Array<'community' | 'IGVF' | 'ENCODE'>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by samples
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    samples?: Array<string>
    /**
     * Filter by software
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    software?: Array<string>
    /**
     * Filter by software_versions
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    softwareVersions?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApipublications
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    title?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    uuid?: Array<string>
    /**
     * Filter by volume
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    volume?: Array<string>
    /**
     * Filter by workflows
     * @type Array&lt;string&gt;
     * @memberof IgvfApipublications
     */
    workflows?: Array<string>
}

export interface IgvfApiReferenceFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApireferenceFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApireferenceFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApireferenceFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by anvil_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    anvilUrl?: Array<string>
    /**
     * Filter by assembly
     * @type Array&lt;&#39;GRCh38&#39; | &#39;hg19&#39; | &#39;GRCm39&#39; | &#39;mm10&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    assembly?: Array<'GRCh38' | 'hg19' | 'GRCm39' | 'mm10'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    contentType?: Array<string>
    /**
     * Filter by controlled_access
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApireferenceFiles
     */
    controlledAccess?: Array<boolean>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    documents?: Array<string>
    /**
     * Filter by external
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApireferenceFiles
     */
    external?: Array<boolean>
    /**
     * Filter by external_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    externalId?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;bed&#39; | &#39;csv&#39; | &#39;dat&#39; | &#39;fasta&#39; | &#39;gaf&#39; | &#39;gds&#39; | &#39;gtf&#39; | &#39;obo&#39; | &#39;owl&#39; | &#39;PWM&#39; | &#39;tar&#39; | &#39;tsv&#39; | &#39;txt&#39; | &#39;vcf&#39; | &#39;xml&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    fileFormat?: Array<'bed' | 'csv' | 'dat' | 'fasta' | 'gaf' | 'gds' | 'gtf' | 'obo' | 'owl' | 'PWM' | 'tar' | 'tsv' | 'txt' | 'vcf' | 'xml'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_format_type
     * @type Array&lt;&#39;bed12&#39; | &#39;bed3&#39; | &#39;bed3+&#39; | &#39;bed5&#39; | &#39;bed6&#39; | &#39;bed6+&#39; | &#39;bed9&#39; | &#39;bed9+&#39; | &#39;mpra_starr&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApireferenceFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by source_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    sourceUrl?: Array<string>
    /**
     * Filter by sources
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    sources?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    summary?: Array<string>
    /**
     * Filter by transcriptome_annotation
     * @type Array&lt;&#39;GENCODE 40&#39; | &#39;GENCODE 41&#39; | &#39;GENCODE 42&#39; | &#39;GENCODE 43&#39; | &#39;GENCODE 44&#39; | &#39;GENCODE 45&#39; | &#39;GENCODE M30&#39; | &#39;GENCODE M31&#39; | &#39;GENCODE M32&#39; | &#39;GENCODE M33&#39; | &#39;GENCODE M34&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApireferenceFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApireferenceFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiReportRequest {
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApireport
     */
    query?: string
    /**
     * Filter by item type.
     * @type Array&lt;string&gt;
     * @memberof IgvfApireport
     */
    type?: Array<string>
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApireport
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApireport
     */
    sort?: Array<string>
    /**
     * Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;}
     * @type any
     * @memberof IgvfApireport
     */
    fieldFilters?: any
    /**
     * Fields to include in the response. Can be repeated for multiple fields.
     * @type Array&lt;string&gt;
     * @memberof IgvfApireport
     */
    include_fields?: Array<string>
    /**
     * Object with links, or object with some links embedded.
     * @type &#39;object&#39; | &#39;embedded&#39;
     * @memberof IgvfApireport
     */
    frame?: 'object' | 'embedded'
}

export interface IgvfApiRodentDonorsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApirodentDonors
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApirodentDonors
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApirodentDonors
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    documents?: Array<string>
    /**
     * Filter by genotype
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    genotype?: Array<string>
    /**
     * Filter by individual_rodent
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApirodentDonors
     */
    individualRodent?: Array<boolean>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    lotId?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    notes?: Array<string>
    /**
     * Filter by phenotypic_features.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    phenotypicFeaturesId?: Array<string>
    /**
     * Filter by phenotypic_features.feature.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    phenotypicFeaturesFeatureId?: Array<string>
    /**
     * Filter by phenotypic_features.feature.term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    phenotypicFeaturesFeatureTermId?: Array<string>
    /**
     * Filter by phenotypic_features.feature.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    phenotypicFeaturesFeatureTermName?: Array<string>
    /**
     * Filter by phenotypic_features.observation_date
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    phenotypicFeaturesObservationDate?: Array<string>
    /**
     * Filter by phenotypic_features.quantity_units
     * @type Array&lt;&#39;meter&#39; | &#39;micromole&#39; | &#39;nanogram&#39; | &#39;microgram&#39; | &#39;milligram&#39; | &#39;gram&#39; | &#39;kilogram&#39; | &#39;milli-International Unit per milliliter&#39; | &#39;picogram per milliliter&#39; | &#39;nanogram per milliliter&#39; | &#39;milligram per deciliter&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    productId?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    revokeDetail?: Array<string>
    /**
     * Filter by rodent_identifier
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    rodentIdentifier?: Array<string>
    /**
     * Filter by sex
     * @type Array&lt;&#39;male&#39; | &#39;female&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    sex?: Array<'male' | 'female' | 'unspecified'>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    sourcesId?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by strain
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    strain?: Array<string>
    /**
     * Filter by strain_background
     * @type Array&lt;&#39;A/J (AJ)&#39; | &#39;C57BL/6J (B6)&#39; | &#39;129S1/SvImJ (129)&#39; | &#39;NOD/ShiLtJ (NOD)&#39; | &#39;NZO/H1LtJ (NZO)&#39; | &#39;CAST/EiJ (CAST)&#39; | &#39;PWK/PhJ (PWK)&#39; | &#39;WSB/EiJ (WSB)&#39; | &#39;CAST (M. m. castaneus)&#39; | &#39;WSB (M. m. domesticus)&#39; | &#39;PWK (M. m. musculus)&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    strainBackground?: Array<'A/J (AJ)' | 'C57BL/6J (B6)' | '129S1/SvImJ (129)' | 'NOD/ShiLtJ (NOD)' | 'NZO/H1LtJ (NZO)' | 'CAST/EiJ (CAST)' | 'PWK/PhJ (PWK)' | 'WSB/EiJ (WSB)' | 'CAST (M. m. castaneus)' | 'WSB (M. m. domesticus)' | 'PWK (M. m. musculus)'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Mus musculus&#39;&gt;
     * @memberof IgvfApirodentDonors
     */
    taxa?: Array<'Mus musculus'>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApirodentDonors
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApirodentDonors
     */
    virtual?: Array<boolean>
}

export interface IgvfApiSampleTermsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisampleTerms
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisampleTerms
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisampleTerms
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    aliases?: Array<string>
    /**
     * Filter by ancestors
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    ancestors?: Array<string>
    /**
     * Filter by cell_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    cellSlims?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    dbxrefs?: Array<string>
    /**
     * Filter by deprecated_ntr_terms
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    deprecatedNtrTerms?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    description?: Array<string>
    /**
     * Filter by developmental_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    developmentalSlims?: Array<string>
    /**
     * Filter by is_a
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    isA?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    notes?: Array<string>
    /**
     * Filter by ontology
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    ontology?: Array<string>
    /**
     * Filter by organ_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    organSlims?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApisampleTerms
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    summary?: Array<string>
    /**
     * Filter by synonyms
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    synonyms?: Array<string>
    /**
     * Filter by system_slims
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    systemSlims?: Array<string>
    /**
     * Filter by term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    termId?: Array<string>
    /**
     * Filter by term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    termName?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApisampleTerms
     */
    uuid?: Array<string>
}

export interface IgvfApiSchemaForItemTypeRequest {
    /**
     * The name of the item type
     * @type ItemType
     * @memberof IgvfApischemaForItemType
     */
    itemType: ItemType
}

export interface IgvfApiSchemasRequest {
}

export interface IgvfApiSearchRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisearch
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisearch
     */
    query?: string
    /**
     * Filter by item type.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisearch
     */
    type?: Array<string>
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisearch
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisearch
     */
    sort?: Array<string>
    /**
     * Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;}
     * @type any
     * @memberof IgvfApisearch
     */
    fieldFilters?: any
}

export interface IgvfApiSequenceFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisequenceFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisequenceFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisequenceFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by anvil_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    anvilUrl?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    contentType?: Array<string>
    /**
     * Filter by controlled_access
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApisequenceFiles
     */
    controlledAccess?: Array<boolean>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;bam&#39; | &#39;fastq&#39; | &#39;pod5&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    fileFormat?: Array<'bam' | 'fastq' | 'pod5'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by flowcell_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    flowcellId?: Array<string>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    href?: Array<string>
    /**
     * Filter by illumina_read_type
     * @type Array&lt;&#39;R1&#39; | &#39;R2&#39; | &#39;R3&#39; | &#39;I1&#39; | &#39;I2&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    illuminaReadType?: Array<'R1' | 'R2' | 'R3' | 'I1' | 'I2'>
    /**
     * Filter by index
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    index?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by lane
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    lane?: Array<number>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by maximum_read_length
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    maximumReadLength?: Array<number>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by mean_read_length
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    meanReadLength?: Array<number>
    /**
     * Filter by minimum_read_length
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    minimumReadLength?: Array<number>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    notes?: Array<string>
    /**
     * Filter by read_count
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    readCount?: Array<number>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by seqspecs
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    seqspecs?: Array<string>
    /**
     * Filter by sequencing_kit
     * @type Array&lt;&#39;HiSeq SBS Kit v4&#39; | &#39;HiSeq SR Cluster Kit v4-cBot-HS&#39; | &#39;HiSeq PE Cluster Kit v4-cBot-HS&#39; | &#39;HiSeq SR Rapid Cluster Kit v2&#39; | &#39;HiSeq PE Rapid Cluster Kit v2&#39; | &#39;HiSeq Rapid SBS Kit v2&#39; | &#39;HiSeq 3000/4000 SBS Kit&#39; | &#39;HiSeq 3000/4000 SR Cluster Kit&#39; | &#39;HiSeq 3000/4000 PE Cluster Kit&#39; | &#39;MiSeq Reagent Kit v2&#39; | &#39;NextSeq 500 Mid Output Kit&#39; | &#39;NextSeq 500 High Output Kit&#39; | &#39;NextSeq 500 Mid Output v2 Kit&#39; | &#39;NextSeq 500 High Output v2 Kit&#39; | &#39;NextSeq 500/550 Mid-Output v2.5 Kit&#39; | &#39;NextSeq 500/550 High-Output v2.5 Kit&#39; | &#39;TG NextSeq 500/550 Mid-Output Kit v2.5&#39; | &#39;TG NextSeq 500/550 High-Output Kit v2.5&#39; | &#39;NextSeq 1000/2000 P1 Reagent Kit&#39; | &#39;NextSeq 1000/2000 P2 Reagent Kit&#39; | &#39;NextSeq 1000/2000 P3 Reagent Kit&#39; | &#39;NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit&#39; | &#39;NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit&#39; | &#39;NextSeq 2000 P3 XLEAP-SBS Reagent Kit&#39; | &#39;NextSeq 2000 P4 XLEAP-SBS Reagent Kit&#39; | &#39;NovaSeq 6000 SP Reagent Kit v1.5&#39; | &#39;NovaSeq 6000 S1 Reagent Kit v1.5&#39; | &#39;NovaSeq 6000 S2 Reagent Kit v1.5&#39; | &#39;NovaSeq 6000 S4 Reagent Kit v1.5&#39; | &#39;NovaSeq X Series 10B Reagent Kit&#39; | &#39;ONT Ligation Sequencing Kit V14&#39; | &#39;Sequel sequencing kit 3.0&#39; | &#39;Sequel II sequencing kit 2.0&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    sequencingKit?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>
    /**
     * Filter by sequencing_platform
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    sequencingPlatform?: Array<string>
    /**
     * Filter by sequencing_run
     * @type Array&lt;number&gt;
     * @memberof IgvfApisequenceFiles
     */
    sequencingRun?: Array<number>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    summary?: Array<string>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApisequenceFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApisequenceFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiSignalFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisignalFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisignalFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisignalFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by assembly
     * @type Array&lt;&#39;GRCh38&#39; | &#39;GRCm39&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    assembly?: Array<'GRCh38' | 'GRCm39'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    contentSummary?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    contentType?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;bigWig&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    fileFormat?: Array<'bigWig'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApisignalFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by filtered
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApisignalFiles
     */
    filtered?: Array<boolean>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by normalized
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApisignalFiles
     */
    normalized?: Array<boolean>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    notes?: Array<string>
    /**
     * Filter by reference_files
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    referenceFiles?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by start_view_position
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    startViewPosition?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by strand_specificity
     * @type Array&lt;&#39;plus&#39; | &#39;minus&#39; | &#39;unstranded&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    strandSpecificity?: Array<'plus' | 'minus' | 'unstranded'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    summary?: Array<string>
    /**
     * Filter by transcriptome_annotation
     * @type Array&lt;&#39;GENCODE 40&#39; | &#39;GENCODE 41&#39; | &#39;GENCODE 42&#39; | &#39;GENCODE 43&#39; | &#39;GENCODE 44&#39; | &#39;GENCODE 45&#39; | &#39;GENCODE M30&#39; | &#39;GENCODE M31&#39; | &#39;GENCODE M32&#39; | &#39;GENCODE M33&#39; | &#39;GENCODE M34&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApisignalFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApisignalFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiSoftwareRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisoftware
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisoftware
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisoftware
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApisoftware
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    description?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    labTitle?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by source_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    sourceUrl?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApisoftware
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    title?: Array<string>
    /**
     * Filter by used_by
     * @type Array&lt;&#39;consortium analysis&#39; | &#39;DACC&#39; | &#39;processing pipelines&#39;&gt;
     * @memberof IgvfApisoftware
     */
    usedBy?: Array<'consortium analysis' | 'DACC' | 'processing pipelines'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    uuid?: Array<string>
    /**
     * Filter by versions
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftware
     */
    versions?: Array<string>
}

export interface IgvfApiSoftwareVersionsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisoftwareVersions
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisoftwareVersions
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisoftwareVersions
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    aliases?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApisoftwareVersions
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    description?: Array<string>
    /**
     * Filter by download_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    downloadId?: Array<string>
    /**
     * Filter by downloaded_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    downloadedUrl?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    labTitle?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by software.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    softwareId?: Array<string>
    /**
     * Filter by software.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    softwareTitle?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApisoftwareVersions
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    summary?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    uuid?: Array<string>
    /**
     * Filter by version
     * @type Array&lt;string&gt;
     * @memberof IgvfApisoftwareVersions
     */
    version?: Array<string>
}

export interface IgvfApiSourcesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApisources
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApisources
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApisources
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    aliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    description?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApisources
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    title?: Array<string>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApisources
     */
    uuid?: Array<string>
}

export interface IgvfApiTabularFilesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApitabularFiles
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApitabularFiles
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApitabularFiles
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_step_version
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    analysisStepVersion?: Array<string>
    /**
     * Filter by anvil_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    anvilUrl?: Array<string>
    /**
     * Filter by assembly
     * @type Array&lt;&#39;GRCh38&#39; | &#39;GRCm39&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    assembly?: Array<'GRCh38' | 'GRCm39'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by content_md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    contentMd5sum?: Array<string>
    /**
     * Filter by content_type
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    contentType?: Array<string>
    /**
     * Filter by controlled_access
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApitabularFiles
     */
    controlledAccess?: Array<boolean>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    dbxrefs?: Array<string>
    /**
     * Filter by derived_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    derivedFrom?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    documents?: Array<string>
    /**
     * Filter by file_format
     * @type Array&lt;&#39;bed&#39; | &#39;csv&#39; | &#39;gtf&#39; | &#39;tsv&#39; | &#39;txt&#39; | &#39;vcf&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    fileFormat?: Array<'bed' | 'csv' | 'gtf' | 'tsv' | 'txt' | 'vcf'>
    /**
     * Filter by file_format_specifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    fileFormatSpecifications?: Array<string>
    /**
     * Filter by file_format_type
     * @type Array&lt;&#39;bed12&#39; | &#39;bed3&#39; | &#39;bed3+&#39; | &#39;bed5&#39; | &#39;bed6&#39; | &#39;bed6+&#39; | &#39;bed9&#39; | &#39;bed9+&#39; | &#39;mpra_starr&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>
    /**
     * Filter by file_set
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    fileSet?: Array<string>
    /**
     * Filter by file_size
     * @type Array&lt;number&gt;
     * @memberof IgvfApitabularFiles
     */
    fileSize?: Array<number>
    /**
     * Filter by gene_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    geneListFor?: Array<string>
    /**
     * Filter by href
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    href?: Array<string>
    /**
     * Filter by input_file_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    inputFileFor?: Array<string>
    /**
     * Filter by integrated_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    integratedIn?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    labTitle?: Array<string>
    /**
     * Filter by loci_list_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    lociListFor?: Array<string>
    /**
     * Filter by md5sum
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    md5sum?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    notes?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    revokeDetail?: Array<string>
    /**
     * Filter by s3_uri
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    s3Uri?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitted_file_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    submittedFileName?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    summary?: Array<string>
    /**
     * Filter by transcriptome_annotation
     * @type Array&lt;&#39;GENCODE 40&#39; | &#39;GENCODE 41&#39; | &#39;GENCODE 42&#39; | &#39;GENCODE 43&#39; | &#39;GENCODE 44&#39; | &#39;GENCODE 45&#39; | &#39;GENCODE M30&#39; | &#39;GENCODE M31&#39; | &#39;GENCODE M32&#39; | &#39;GENCODE M33&#39; | &#39;GENCODE M34&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>
    /**
     * Filter by upload_status
     * @type Array&lt;&#39;pending&#39; | &#39;file not found&#39; | &#39;invalidated&#39; | &#39;validated&#39;&gt;
     * @memberof IgvfApitabularFiles
     */
    uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    uuid?: Array<string>
    /**
     * Filter by validation_error_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApitabularFiles
     */
    validationErrorDetail?: Array<string>
}

export interface IgvfApiTechnicalSamplesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApitechnicalSamples
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApitechnicalSamples
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApitechnicalSamples
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by classifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    classifications?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    constructLibrarySets?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_obtained
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    dateObtained?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    documents?: Array<string>
    /**
     * Filter by file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsId?: Array<string>
    /**
     * Filter by file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsAccession?: Array<string>
    /**
     * Filter by file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsAliases?: Array<string>
    /**
     * Filter by file_sets.assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsAssayTermTermName?: Array<string>
    /**
     * Filter by file_sets.lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsLabTitle?: Array<string>
    /**
     * Filter by file_sets.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by file_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    fileSetsSummary?: Array<string>
    /**
     * Filter by institutional_certificates
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    institutionalCertificates?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    lotId?: Array<string>
    /**
     * Filter by moi
     * @type Array&lt;number&gt;
     * @memberof IgvfApitechnicalSamples
     */
    moi?: Array<number>
    /**
     * Filter by multiplexed_in.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    multiplexedInId?: Array<string>
    /**
     * Filter by multiplexed_in.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    multiplexedInAccession?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    notes?: Array<string>
    /**
     * Filter by nucleic_acid_delivery
     * @type Array&lt;&#39;transfection&#39; | &#39;adenoviral transduction&#39; | &#39;lentiviral transduction&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>
    /**
     * Filter by origin_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    originOf?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    productId?: Array<string>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sample_material
     * @type Array&lt;&#39;undefined&#39; | &#39;inorganic&#39; | &#39;synthetic&#39; | &#39;organic&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sampleMaterial?: Array<'undefined' | 'inorganic' | 'synthetic' | 'organic'>
    /**
     * Filter by sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sampleTermsId?: Array<string>
    /**
     * Filter by sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sampleTermsTermName?: Array<string>
    /**
     * Filter by sorted_fractions
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sortedFractions?: Array<string>
    /**
     * Filter by sorted_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sortedFromId?: Array<string>
    /**
     * Filter by sorted_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sortedFromAccession?: Array<string>
    /**
     * Filter by sorted_from_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sortedFromDetail?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    sourcesId?: Array<string>
    /**
     * Filter by starting_amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApitechnicalSamples
     */
    startingAmount?: Array<number>
    /**
     * Filter by starting_amount_units
     * @type Array&lt;&#39;cells&#39; | &#39;cells/ml&#39; | &#39;g&#39; | &#39;items&#39; | &#39;mg&#39; | &#39;whole animals&#39; | &#39;whole embryos&#39; | &#39;μg&#39; | &#39;ng&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Saccharomyces cerevisiae&#39; | &#39;Homo sapiens&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    taxa?: Array<'Saccharomyces cerevisiae' | 'Homo sapiens'>
    /**
     * Filter by time_post_library_delivery
     * @type Array&lt;number&gt;
     * @memberof IgvfApitechnicalSamples
     */
    timePostLibraryDelivery?: Array<number>
    /**
     * Filter by time_post_library_delivery_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApitechnicalSamples
     */
    timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApitechnicalSamples
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApitechnicalSamples
     */
    virtual?: Array<boolean>
}

export interface IgvfApiTissuesRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApitissues
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApitissues
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApitissues
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    accession?: Array<string>
    /**
     * Filter by age
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    age?: Array<string>
    /**
     * Filter by age_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39; | &#39;year&#39;&gt;
     * @memberof IgvfApitissues
     */
    ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApitissues
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biomarkers
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    biomarkers?: Array<string>
    /**
     * Filter by ccf_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    ccfId?: Array<string>
    /**
     * Filter by cellular_sub_pool
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    cellularSubPool?: Array<string>
    /**
     * Filter by classifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    classifications?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApitissues
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    constructLibrarySets?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_obtained
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    dateObtained?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    description?: Array<string>
    /**
     * Filter by disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    diseaseTermsId?: Array<string>
    /**
     * Filter by disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    diseaseTermsTermName?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    documents?: Array<string>
    /**
     * Filter by donors
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    donors?: Array<string>
    /**
     * Filter by embryonic
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApitissues
     */
    embryonic?: Array<boolean>
    /**
     * Filter by file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    fileSetsId?: Array<string>
    /**
     * Filter by file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    fileSetsAccession?: Array<string>
    /**
     * Filter by file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    fileSetsAliases?: Array<string>
    /**
     * Filter by file_sets.assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    fileSetsAssayTermTermName?: Array<string>
    /**
     * Filter by file_sets.lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    fileSetsLabTitle?: Array<string>
    /**
     * Filter by file_sets.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApitissues
     */
    fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by file_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    fileSetsSummary?: Array<string>
    /**
     * Filter by institutional_certificates.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    institutionalCertificatesId?: Array<string>
    /**
     * Filter by institutional_certificates.certificate_identifier
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    institutionalCertificatesCertificateIdentifier?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    lotId?: Array<string>
    /**
     * Filter by lower_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    lowerBoundAge?: Array<number>
    /**
     * Filter by lower_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    lowerBoundAgeInHours?: Array<number>
    /**
     * Filter by modifications.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    modificationsId?: Array<string>
    /**
     * Filter by modifications.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApitissues
     */
    modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by modifications.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    modificationsSummary?: Array<string>
    /**
     * Filter by moi
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    moi?: Array<number>
    /**
     * Filter by multiplexed_in.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    multiplexedInId?: Array<string>
    /**
     * Filter by multiplexed_in.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    multiplexedInAccession?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    notes?: Array<string>
    /**
     * Filter by nucleic_acid_delivery
     * @type Array&lt;&#39;transfection&#39; | &#39;adenoviral transduction&#39; | &#39;lentiviral transduction&#39;&gt;
     * @memberof IgvfApitissues
     */
    nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>
    /**
     * Filter by origin_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    originOf?: Array<string>
    /**
     * Filter by originated_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    originatedFrom?: Array<string>
    /**
     * Filter by part_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    partOf?: Array<string>
    /**
     * Filter by parts
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    parts?: Array<string>
    /**
     * Filter by pmi
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    pmi?: Array<number>
    /**
     * Filter by pmi_units
     * @type Array&lt;&#39;second&#39; | &#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39;&gt;
     * @memberof IgvfApitissues
     */
    pmiUnits?: Array<'second' | 'minute' | 'hour' | 'day' | 'week'>
    /**
     * Filter by pooled_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    pooledFrom?: Array<string>
    /**
     * Filter by pooled_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    pooledIn?: Array<string>
    /**
     * Filter by preservation_method
     * @type Array&lt;&#39;cryopreservation&#39; | &#39;flash-freezing&#39;&gt;
     * @memberof IgvfApitissues
     */
    preservationMethod?: Array<'cryopreservation' | 'flash-freezing'>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    productId?: Array<string>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sampleTermsId?: Array<string>
    /**
     * Filter by sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sampleTermsTermName?: Array<string>
    /**
     * Filter by sex
     * @type Array&lt;&#39;female&#39; | &#39;male&#39; | &#39;mixed&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApitissues
     */
    sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>
    /**
     * Filter by sorted_fractions
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sortedFractions?: Array<string>
    /**
     * Filter by sorted_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sortedFromId?: Array<string>
    /**
     * Filter by sorted_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sortedFromAccession?: Array<string>
    /**
     * Filter by sorted_from_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sortedFromDetail?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    sourcesId?: Array<string>
    /**
     * Filter by starting_amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    startingAmount?: Array<number>
    /**
     * Filter by starting_amount_units
     * @type Array&lt;&#39;cells&#39; | &#39;cells/ml&#39; | &#39;g&#39; | &#39;items&#39; | &#39;mg&#39; | &#39;whole animals&#39; | &#39;whole embryos&#39; | &#39;μg&#39; | &#39;ng&#39;&gt;
     * @memberof IgvfApitissues
     */
    startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApitissues
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApitissues
     */
    taxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by time_post_library_delivery
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    timePostLibraryDelivery?: Array<number>
    /**
     * Filter by time_post_library_delivery_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApitissues
     */
    timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    treatmentsId?: Array<string>
    /**
     * Filter by treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApitissues
     */
    treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by treatments.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApitissues
     */
    treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    treatmentsSummary?: Array<string>
    /**
     * Filter by treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApitissues
     */
    treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by upper_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    upperBoundAge?: Array<number>
    /**
     * Filter by upper_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApitissues
     */
    upperBoundAgeInHours?: Array<number>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApitissues
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApitissues
     */
    virtual?: Array<boolean>
}

export interface IgvfApiTreatmentsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApitreatments
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApitreatments
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApitreatments
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    aliases?: Array<string>
    /**
     * Filter by amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApitreatments
     */
    amount?: Array<number>
    /**
     * Filter by amount_units
     * @type Array&lt;&#39;mg/kg&#39; | &#39;mg/mL&#39; | &#39;mM&#39; | &#39;ng/mL&#39; | &#39;nM&#39; | &#39;percent&#39; | &#39;μg/kg&#39; | &#39;μg/kg&#39; | &#39;μg/mL&#39; | &#39;μM&#39; | &#39;kpa&#39;&gt;
     * @memberof IgvfApitreatments
     */
    amountUnits?: Array<'mg/kg' | 'mg/mL' | 'mM' | 'ng/mL' | 'nM' | 'percent' | 'μg/kg' | 'μg/kg' | 'μg/mL' | 'μM' | 'kpa'>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApitreatments
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biosamples_treated
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    biosamplesTreated?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by depletion
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApitreatments
     */
    depletion?: Array<boolean>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    documents?: Array<string>
    /**
     * Filter by duration
     * @type Array&lt;number&gt;
     * @memberof IgvfApitreatments
     */
    duration?: Array<number>
    /**
     * Filter by duration_units
     * @type Array&lt;&#39;second&#39; | &#39;minute&#39; | &#39;hour&#39; | &#39;day&#39;&gt;
     * @memberof IgvfApitreatments
     */
    durationUnits?: Array<'second' | 'minute' | 'hour' | 'day'>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    lotId?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    notes?: Array<string>
    /**
     * Filter by pH
     * @type Array&lt;number&gt;
     * @memberof IgvfApitreatments
     */
    pH?: Array<number>
    /**
     * Filter by post_treatment_time
     * @type Array&lt;number&gt;
     * @memberof IgvfApitreatments
     */
    postTreatmentTime?: Array<number>
    /**
     * Filter by post_treatment_time_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApitreatments
     */
    postTreatmentTimeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    productId?: Array<string>
    /**
     * Filter by purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApitreatments
     */
    purpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    sourcesId?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApitreatments
     */
    status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    summary?: Array<string>
    /**
     * Filter by temperature
     * @type Array&lt;number&gt;
     * @memberof IgvfApitreatments
     */
    temperature?: Array<number>
    /**
     * Filter by temperature_units
     * @type Array&lt;&#39;Celsius&#39;&gt;
     * @memberof IgvfApitreatments
     */
    temperatureUnits?: Array<'Celsius'>
    /**
     * Filter by treatment_term_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    treatmentTermId?: Array<string>
    /**
     * Filter by treatment_term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    treatmentTermName?: Array<string>
    /**
     * Filter by treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApitreatments
     */
    treatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApitreatments
     */
    uuid?: Array<string>
}

export interface IgvfApiUsersRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiusers
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiusers
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiusers
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    id?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    aliases?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    description?: Array<string>
    /**
     * Filter by email
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    email?: Array<string>
    /**
     * Filter by first_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    firstName?: Array<string>
    /**
     * Filter by groups
     * @type Array&lt;&#39;admin&#39; | &#39;read-only-admin&#39; | &#39;verified&#39;&gt;
     * @memberof IgvfApiusers
     */
    groups?: Array<'admin' | 'read-only-admin' | 'verified'>
    /**
     * Filter by job_title
     * @type Array&lt;&#39;Principal Investigator&#39; | &#39;Co-Investigator&#39; | &#39;Project Manager&#39; | &#39;Submitter&#39; | &#39;Post Doc&#39; | &#39;Data Wrangler&#39; | &#39;Scientist&#39; | &#39;Computational Scientist&#39; | &#39;Software Developer&#39; | &#39;NHGRI staff member&#39; | &#39;Other&#39;&gt;
     * @memberof IgvfApiusers
     */
    jobTitle?: Array<'Principal Investigator' | 'Co-Investigator' | 'Project Manager' | 'Submitter' | 'Post Doc' | 'Data Wrangler' | 'Scientist' | 'Computational Scientist' | 'Software Developer' | 'NHGRI staff member' | 'Other'>
    /**
     * Filter by lab
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    lab?: Array<string>
    /**
     * Filter by last_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    lastName?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    notes?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;current&#39; | &#39;deleted&#39; | &#39;disabled&#39;&gt;
     * @memberof IgvfApiusers
     */
    status?: Array<'current' | 'deleted' | 'disabled'>
    /**
     * Filter by submits_for
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    submitsFor?: Array<string>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    summary?: Array<string>
    /**
     * Filter by title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    title?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiusers
     */
    uuid?: Array<string>
    /**
     * Filter by viewing_groups
     * @type Array&lt;&#39;community&#39; | &#39;IGVF&#39;&gt;
     * @memberof IgvfApiusers
     */
    viewingGroups?: Array<'community' | 'IGVF'>
}

export interface IgvfApiWholeOrganismsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiwholeOrganisms
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiwholeOrganisms
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiwholeOrganisms
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    accession?: Array<string>
    /**
     * Filter by age
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    age?: Array<string>
    /**
     * Filter by age_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39; | &#39;year&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by biomarkers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    biomarkers?: Array<string>
    /**
     * Filter by cellular_sub_pool
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    cellularSubPool?: Array<string>
    /**
     * Filter by classifications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    classifications?: Array<string>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by construct_library_sets
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    constructLibrarySets?: Array<string>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by date_obtained
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    dateObtained?: Array<string>
    /**
     * Filter by dbxrefs
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    dbxrefs?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    description?: Array<string>
    /**
     * Filter by disease_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    diseaseTermsId?: Array<string>
    /**
     * Filter by disease_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    diseaseTermsTermName?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    documents?: Array<string>
    /**
     * Filter by donors
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    donors?: Array<string>
    /**
     * Filter by embryonic
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    embryonic?: Array<boolean>
    /**
     * Filter by file_sets.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsId?: Array<string>
    /**
     * Filter by file_sets.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsAccession?: Array<string>
    /**
     * Filter by file_sets.aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsAliases?: Array<string>
    /**
     * Filter by file_sets.assay_term.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsAssayTermTermName?: Array<string>
    /**
     * Filter by file_sets.lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsLabTitle?: Array<string>
    /**
     * Filter by file_sets.status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by file_sets.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    fileSetsSummary?: Array<string>
    /**
     * Filter by institutional_certificates.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    institutionalCertificatesId?: Array<string>
    /**
     * Filter by institutional_certificates.certificate_identifier
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    institutionalCertificatesCertificateIdentifier?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    labTitle?: Array<string>
    /**
     * Filter by lot_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    lotId?: Array<string>
    /**
     * Filter by lower_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    lowerBoundAge?: Array<number>
    /**
     * Filter by lower_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    lowerBoundAgeInHours?: Array<number>
    /**
     * Filter by modifications.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    modificationsId?: Array<string>
    /**
     * Filter by modifications.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by modifications.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    modificationsSummary?: Array<string>
    /**
     * Filter by moi
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    moi?: Array<number>
    /**
     * Filter by multiplexed_in.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    multiplexedInId?: Array<string>
    /**
     * Filter by multiplexed_in.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    multiplexedInAccession?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    notes?: Array<string>
    /**
     * Filter by nucleic_acid_delivery
     * @type Array&lt;&#39;transfection&#39; | &#39;adenoviral transduction&#39; | &#39;lentiviral transduction&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>
    /**
     * Filter by origin_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    originOf?: Array<string>
    /**
     * Filter by originated_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    originatedFrom?: Array<string>
    /**
     * Filter by part_of
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    partOf?: Array<string>
    /**
     * Filter by parts
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    parts?: Array<string>
    /**
     * Filter by pooled_from
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    pooledFrom?: Array<string>
    /**
     * Filter by pooled_in
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    pooledIn?: Array<string>
    /**
     * Filter by product_id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    productId?: Array<string>
    /**
     * Filter by protocols
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    protocols?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    revokeDetail?: Array<string>
    /**
     * Filter by sample_terms.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sampleTermsId?: Array<string>
    /**
     * Filter by sample_terms.term_name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sampleTermsTermName?: Array<string>
    /**
     * Filter by sex
     * @type Array&lt;&#39;female&#39; | &#39;male&#39; | &#39;mixed&#39; | &#39;unspecified&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>
    /**
     * Filter by sorted_fractions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sortedFractions?: Array<string>
    /**
     * Filter by sorted_from.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sortedFromId?: Array<string>
    /**
     * Filter by sorted_from.accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sortedFromAccession?: Array<string>
    /**
     * Filter by sorted_from_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sortedFromDetail?: Array<string>
    /**
     * Filter by sources.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    sourcesId?: Array<string>
    /**
     * Filter by starting_amount
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    startingAmount?: Array<number>
    /**
     * Filter by starting_amount_units
     * @type Array&lt;&#39;cells&#39; | &#39;cells/ml&#39; | &#39;g&#39; | &#39;items&#39; | &#39;mg&#39; | &#39;whole animals&#39; | &#39;whole embryos&#39; | &#39;μg&#39; | &#39;ng&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    summary?: Array<string>
    /**
     * Filter by taxa
     * @type Array&lt;&#39;Homo sapiens&#39; | &#39;Mus musculus&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    taxa?: Array<'Homo sapiens' | 'Mus musculus'>
    /**
     * Filter by time_post_library_delivery
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    timePostLibraryDelivery?: Array<number>
    /**
     * Filter by time_post_library_delivery_units
     * @type Array&lt;&#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>
    /**
     * Filter by treatments.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    treatmentsId?: Array<string>
    /**
     * Filter by treatments.purpose
     * @type Array&lt;&#39;activation&#39; | &#39;agonist&#39; | &#39;antagonist&#39; | &#39;control&#39; | &#39;differentiation&#39; | &#39;de-differentiation&#39; | &#39;perturbation&#39; | &#39;selection&#39; | &#39;stimulation&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>
    /**
     * Filter by treatments.status
     * @type Array&lt;&#39;archived&#39; | &#39;deleted&#39; | &#39;in progress&#39; | &#39;released&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>
    /**
     * Filter by treatments.summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    treatmentsSummary?: Array<string>
    /**
     * Filter by treatments.treatment_type
     * @type Array&lt;&#39;chemical&#39; | &#39;protein&#39; | &#39;environmental&#39;&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>
    /**
     * Filter by upper_bound_age
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    upperBoundAge?: Array<number>
    /**
     * Filter by upper_bound_age_in_hours
     * @type Array&lt;number&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    upperBoundAgeInHours?: Array<number>
    /**
     * Filter by url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    url?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    uuid?: Array<string>
    /**
     * Filter by virtual
     * @type Array&lt;boolean&gt;
     * @memberof IgvfApiwholeOrganisms
     */
    virtual?: Array<boolean>
}

export interface IgvfApiWorkflowsRequest {
    /**
     * Constant value. Do not set.
     * @type &#39;object&#39;
     * @memberof IgvfApiworkflows
     */
    frame: 'object'
    /**
     * Query string for searching.
     * @type string
     * @memberof IgvfApiworkflows
     */
    query?: string
    /**
     * Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @type Limit
     * @memberof IgvfApiworkflows
     */
    limit?: Limit
    /**
     * Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    sort?: Array<string>
    /**
     * Filter by @id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    id?: Array<string>
    /**
     * Filter by accession
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    accession?: Array<string>
    /**
     * Filter by aliases
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    aliases?: Array<string>
    /**
     * Filter by alternate_accessions
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    alternateAccessions?: Array<string>
    /**
     * Filter by analysis_steps
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    analysisSteps?: Array<string>
    /**
     * Filter by award.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    awardId?: Array<string>
    /**
     * Filter by award.component
     * @type Array&lt;&#39;affiliate&#39; | &#39;data analysis&#39; | &#39;data coordination&#39; | &#39;functional characterization&#39; | &#39;mapping&#39; | &#39;networks&#39; | &#39;predictive modeling&#39;&gt;
     * @memberof IgvfApiworkflows
     */
    awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>
    /**
     * Filter by collections
     * @type Array&lt;&#39;ClinGen&#39; | &#39;ENCODE&#39; | &#39;GREGoR&#39; | &#39;IGVF_catalog_beta_v0.1&#39; | &#39;IGVF_catalog_beta_v0.2&#39; | &#39;IGVF_catalog_beta_v0.3&#39; | &#39;IGVF_catalog_beta_v0.4&#39; | &#39;MaveDB&#39; | &#39;MPRAbase&#39; | &#39;Vista&#39;&gt;
     * @memberof IgvfApiworkflows
     */
    collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>
    /**
     * Filter by creation_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    creationTimestamp?: Array<string>
    /**
     * Filter by description
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    description?: Array<string>
    /**
     * Filter by documents
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    documents?: Array<string>
    /**
     * Filter by lab.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    labId?: Array<string>
    /**
     * Filter by lab.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    labTitle?: Array<string>
    /**
     * Filter by name
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    name?: Array<string>
    /**
     * Filter by notes
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    notes?: Array<string>
    /**
     * Filter by publication_identifiers
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    publicationIdentifiers?: Array<string>
    /**
     * Filter by publications
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    publications?: Array<string>
    /**
     * Filter by release_timestamp
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    releaseTimestamp?: Array<string>
    /**
     * Filter by revoke_detail
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    revokeDetail?: Array<string>
    /**
     * Filter by source_url
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    sourceUrl?: Array<string>
    /**
     * Filter by standards_page.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    standardsPageId?: Array<string>
    /**
     * Filter by standards_page.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    standardsPageTitle?: Array<string>
    /**
     * Filter by status
     * @type Array&lt;&#39;in progress&#39; | &#39;released&#39; | &#39;deleted&#39; | &#39;replaced&#39; | &#39;revoked&#39; | &#39;archived&#39;&gt;
     * @memberof IgvfApiworkflows
     */
    status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>
    /**
     * Filter by submitted_by.@id
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    submittedById?: Array<string>
    /**
     * Filter by submitted_by.title
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    submittedByTitle?: Array<string>
    /**
     * Filter by submitter_comment
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    submitterComment?: Array<string>
    /**
     * Filter by summary
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    summary?: Array<string>
    /**
     * Filter by uuid
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    uuid?: Array<string>
    /**
     * Filter by workflow_repositories
     * @type Array&lt;string&gt;
     * @memberof IgvfApiworkflows
     */
    workflowRepositories?: Array<string>
    /**
     * Filter by workflow_version
     * @type Array&lt;number&gt;
     * @memberof IgvfApiworkflows
     */
    workflowVersion?: Array<number>
}

export class ObjectIgvfApi {
    private api: ObservableIgvfApi

    public constructor(configuration: Configuration, requestFactory?: IgvfApiRequestFactory, responseProcessor?: IgvfApiResponseProcessor) {
        this.api = new ObservableIgvfApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.
     * List items in the AccessKey collection.
     * @param param the request object
     */
    public accessKeysWithHttpInfo(param: IgvfApiAccessKeysRequest, options?: Configuration): Promise<HttpInfo<AccessKeyResults>> {
        return this.api.accessKeysWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accessKeyId, param.aliases, param.creationTimestamp, param.description, param.notes, param.secretAccessKeyHash, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.user, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.
     * List items in the AccessKey collection.
     * @param param the request object
     */
    public accessKeys(param: IgvfApiAccessKeysRequest, options?: Configuration): Promise<AccessKeyResults> {
        return this.api.accessKeys(param.frame, param.query, param.limit, param.sort, param.id, param.accessKeyId, param.aliases, param.creationTimestamp, param.description, param.notes, param.secretAccessKeyHash, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.user, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.
     * List items in the AlignmentFile collection.
     * @param param the request object
     */
    public alignmentFilesWithHttpInfo(param: IgvfApiAlignmentFilesRequest, options?: Configuration): Promise<HttpInfo<AlignmentFileResults>> {
        return this.api.alignmentFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentSummary, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.filtered, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.redacted, param.referenceFiles, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.
     * List items in the AlignmentFile collection.
     * @param param the request object
     */
    public alignmentFiles(param: IgvfApiAlignmentFilesRequest, options?: Configuration): Promise<AlignmentFileResults> {
        return this.api.alignmentFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentSummary, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.filtered, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.redacted, param.referenceFiles, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.
     * List items in the AnalysisSet collection.
     * @param param the request object
     */
    public analysisSetsWithHttpInfo(param: IgvfApiAnalysisSetsRequest, options?: Configuration): Promise<HttpInfo<AnalysisSetResults>> {
        return this.api.analysisSetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assayTitles, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.inputFileSetsId, param.inputFileSetsAccession, param.inputFileSetsAliases, param.inputFileSetsFileSetType, param.labId, param.labTitle, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.
     * List items in the AnalysisSet collection.
     * @param param the request object
     */
    public analysisSets(param: IgvfApiAnalysisSetsRequest, options?: Configuration): Promise<AnalysisSetResults> {
        return this.api.analysisSets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assayTitles, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.inputFileSetsId, param.inputFileSetsAccession, param.inputFileSetsAliases, param.inputFileSetsFileSetType, param.labId, param.labTitle, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.
     * List items in the AnalysisStepVersion collection.
     * @param param the request object
     */
    public analysisStepVersionsWithHttpInfo(param: IgvfApiAnalysisStepVersionsRequest, options?: Configuration): Promise<HttpInfo<AnalysisStepVersionResults>> {
        return this.api.analysisStepVersionsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.analysisStepId, param.analysisStepName, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.labId, param.labTitle, param.notes, param.releaseTimestamp, param.softwareVersionsId, param.softwareVersionsName, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.
     * List items in the AnalysisStepVersion collection.
     * @param param the request object
     */
    public analysisStepVersions(param: IgvfApiAnalysisStepVersionsRequest, options?: Configuration): Promise<AnalysisStepVersionResults> {
        return this.api.analysisStepVersions(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.analysisStepId, param.analysisStepName, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.labId, param.labTitle, param.notes, param.releaseTimestamp, param.softwareVersionsId, param.softwareVersionsName, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.
     * List items in the AnalysisStep collection.
     * @param param the request object
     */
    public analysisStepsWithHttpInfo(param: IgvfApiAnalysisStepsRequest, options?: Configuration): Promise<HttpInfo<AnalysisStepResults>> {
        return this.api.analysisStepsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.analysisStepTypes, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.inputContentTypes, param.labId, param.labTitle, param.name, param.notes, param.outputContentTypes, param.parentsId, param.parentsTitle, param.releaseTimestamp, param.status, param.stepLabel, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid, param.workflowId, param.workflowAccession,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.
     * List items in the AnalysisStep collection.
     * @param param the request object
     */
    public analysisSteps(param: IgvfApiAnalysisStepsRequest, options?: Configuration): Promise<AnalysisStepResults> {
        return this.api.analysisSteps(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.analysisStepTypes, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.inputContentTypes, param.labId, param.labTitle, param.name, param.notes, param.outputContentTypes, param.parentsId, param.parentsTitle, param.releaseTimestamp, param.status, param.stepLabel, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid, param.workflowId, param.workflowAccession,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.
     * List items in the AssayTerm collection.
     * @param param the request object
     */
    public assayTermsWithHttpInfo(param: IgvfApiAssayTermsRequest, options?: Configuration): Promise<HttpInfo<AssayTermResults>> {
        return this.api.assayTermsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.assaySlims, param.categorySlims, param.creationTimestamp, param.deprecatedNtrTerms, param.description, param.isA, param.name, param.notes, param.objectiveSlims, param.ontology, param.preferredAssayTitles, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.
     * List items in the AssayTerm collection.
     * @param param the request object
     */
    public assayTerms(param: IgvfApiAssayTermsRequest, options?: Configuration): Promise<AssayTermResults> {
        return this.api.assayTerms(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.assaySlims, param.categorySlims, param.creationTimestamp, param.deprecatedNtrTerms, param.description, param.isA, param.name, param.notes, param.objectiveSlims, param.ontology, param.preferredAssayTitles, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.
     * List items in the AuxiliarySet collection.
     * @param param the request object
     */
    public auxiliarySetsWithHttpInfo(param: IgvfApiAuxiliarySetsRequest, options?: Configuration): Promise<HttpInfo<AuxiliarySetResults>> {
        return this.api.auxiliarySetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.labId, param.labTitle, param.libraryConstructionPlatform, param.measurementSetsId, param.measurementSetsAccession, param.measurementSetsAliases, param.measurementSetsPreferredAssayTitle, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.
     * List items in the AuxiliarySet collection.
     * @param param the request object
     */
    public auxiliarySets(param: IgvfApiAuxiliarySetsRequest, options?: Configuration): Promise<AuxiliarySetResults> {
        return this.api.auxiliarySets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.labId, param.labTitle, param.libraryConstructionPlatform, param.measurementSetsId, param.measurementSetsAccession, param.measurementSetsAliases, param.measurementSetsPreferredAssayTitle, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.
     * List items in the Award collection.
     * @param param the request object
     */
    public awardsWithHttpInfo(param: IgvfApiAwardsRequest, options?: Configuration): Promise<HttpInfo<AwardResults>> {
        return this.api.awardsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.component, param.contactPi, param.creationTimestamp, param.description, param.endDate, param.name, param.notes, param.pis, param.project, param.startDate, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.url, param.uuid, param.viewingGroup,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.
     * List items in the Award collection.
     * @param param the request object
     */
    public awards(param: IgvfApiAwardsRequest, options?: Configuration): Promise<AwardResults> {
        return this.api.awards(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.component, param.contactPi, param.creationTimestamp, param.description, param.endDate, param.name, param.notes, param.pis, param.project, param.startDate, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.url, param.uuid, param.viewingGroup,  options).toPromise();
    }

    /**
     * Generates TSV of files contained in FileSets in search results.
     * List files to download based on search query. All results are returned.
     * @param param the request object
     */
    public batchDownloadWithHttpInfo(param: IgvfApiBatchDownloadRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.batchDownloadWithHttpInfo(param.type, param.query, param.fieldFilters,  options).toPromise();
    }

    /**
     * Generates TSV of files contained in FileSets in search results.
     * List files to download based on search query. All results are returned.
     * @param param the request object
     */
    public batchDownload(param: IgvfApiBatchDownloadRequest, options?: Configuration): Promise<string> {
        return this.api.batchDownload(param.type, param.query, param.fieldFilters,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.
     * List items in the Biomarker collection.
     * @param param the request object
     */
    public biomarkersWithHttpInfo(param: IgvfApiBiomarkersRequest, options?: Configuration): Promise<HttpInfo<BiomarkerResults>> {
        return this.api.biomarkersWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.awardName, param.biomarkerFor, param.classification, param.creationTimestamp, param.description, param.gene, param.labId, param.labTitle, param.name, param.nameQuantification, param.notes, param.quantification, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.
     * List items in the Biomarker collection.
     * @param param the request object
     */
    public biomarkers(param: IgvfApiBiomarkersRequest, options?: Configuration): Promise<BiomarkerResults> {
        return this.api.biomarkers(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.awardName, param.biomarkerFor, param.classification, param.creationTimestamp, param.description, param.gene, param.labId, param.labTitle, param.name, param.nameQuantification, param.notes, param.quantification, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.
     * List items in the ConfigurationFile collection.
     * @param param the request object
     */
    public configurationFilesWithHttpInfo(param: IgvfApiConfigurationFilesRequest, options?: Configuration): Promise<HttpInfo<ConfigurationFileResults>> {
        return this.api.configurationFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.seqspecOf, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.
     * List items in the ConfigurationFile collection.
     * @param param the request object
     */
    public configurationFiles(param: IgvfApiConfigurationFilesRequest, options?: Configuration): Promise<ConfigurationFileResults> {
        return this.api.configurationFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.seqspecOf, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.
     * List items in the ConstructLibrarySet collection.
     * @param param the request object
     */
    public constructLibrarySetsWithHttpInfo(param: IgvfApiConstructLibrarySetsRequest, options?: Configuration): Promise<HttpInfo<ConstructLibrarySetResults>> {
        return this.api.constructLibrarySetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.appliedToSamplesId, param.appliedToSamplesAccession, param.appliedToSamplesAliases, param.appliedToSamplesDiseaseTermsId, param.appliedToSamplesDiseaseTermsTermName, param.appliedToSamplesSampleTermsId, param.appliedToSamplesSampleTermsTermName, param.appliedToSamplesStatus, param.appliedToSamplesSummary, param.associatedPhenotypesId, param.associatedPhenotypesTermId, param.associatedPhenotypesTermName, param.averageGuideCoverage, param.averageInsertSize, param.awardId, param.awardComponent, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.description, param.documents, param.exon, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesFileFormat, param.filesUploadStatus, param.guideType, param.inputFileSetFor, param.integratedContentFiles, param.labId, param.labTitle, param.largeScaleGeneListId, param.largeScaleGeneListAccession, param.largeScaleGeneListAliases, param.largeScaleLociListId, param.largeScaleLociListAccession, param.largeScaleLociListAliases, param.lotId, param.lowerBoundGuideCoverage, param.lowerBoundInsertSize, param.notes, param.orfListId, param.orfListAliases, param.orfListGene, param.orfListOrfId, param.productId, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.scope, param.selectionCriteria, param.smallScaleGeneListId, param.smallScaleGeneListGeneid, param.smallScaleGeneListName, param.smallScaleGeneListSymbol, param.smallScaleGeneListSynonyms, param.smallScaleLociList, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.targeton, param.tilingModality, param.upperBoundGuideCoverage, param.upperBoundInsertSize, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.
     * List items in the ConstructLibrarySet collection.
     * @param param the request object
     */
    public constructLibrarySets(param: IgvfApiConstructLibrarySetsRequest, options?: Configuration): Promise<ConstructLibrarySetResults> {
        return this.api.constructLibrarySets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.appliedToSamplesId, param.appliedToSamplesAccession, param.appliedToSamplesAliases, param.appliedToSamplesDiseaseTermsId, param.appliedToSamplesDiseaseTermsTermName, param.appliedToSamplesSampleTermsId, param.appliedToSamplesSampleTermsTermName, param.appliedToSamplesStatus, param.appliedToSamplesSummary, param.associatedPhenotypesId, param.associatedPhenotypesTermId, param.associatedPhenotypesTermName, param.averageGuideCoverage, param.averageInsertSize, param.awardId, param.awardComponent, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.description, param.documents, param.exon, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesFileFormat, param.filesUploadStatus, param.guideType, param.inputFileSetFor, param.integratedContentFiles, param.labId, param.labTitle, param.largeScaleGeneListId, param.largeScaleGeneListAccession, param.largeScaleGeneListAliases, param.largeScaleLociListId, param.largeScaleLociListAccession, param.largeScaleLociListAliases, param.lotId, param.lowerBoundGuideCoverage, param.lowerBoundInsertSize, param.notes, param.orfListId, param.orfListAliases, param.orfListGene, param.orfListOrfId, param.productId, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.scope, param.selectionCriteria, param.smallScaleGeneListId, param.smallScaleGeneListGeneid, param.smallScaleGeneListName, param.smallScaleGeneListSymbol, param.smallScaleGeneListSynonyms, param.smallScaleLociList, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.targeton, param.tilingModality, param.upperBoundGuideCoverage, param.upperBoundInsertSize, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.
     * List items in the CrisprModification collection.
     * @param param the request object
     */
    public crisprModificationsWithHttpInfo(param: IgvfApiCrisprModificationsRequest, options?: Configuration): Promise<HttpInfo<CrisprModificationResults>> {
        return this.api.crisprModificationsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.activated, param.activatingAgentTermId, param.activatingAgentTermName, param.aliases, param.awardId, param.awardComponent, param.biosamplesModified, param.cas, param.casSpecies, param.creationTimestamp, param.description, param.documents, param.fusedDomain, param.labId, param.labTitle, param.lotId, param.modality, param.notes, param.productId, param.releaseTimestamp, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taggedProtein, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.
     * List items in the CrisprModification collection.
     * @param param the request object
     */
    public crisprModifications(param: IgvfApiCrisprModificationsRequest, options?: Configuration): Promise<CrisprModificationResults> {
        return this.api.crisprModifications(param.frame, param.query, param.limit, param.sort, param.id, param.activated, param.activatingAgentTermId, param.activatingAgentTermName, param.aliases, param.awardId, param.awardComponent, param.biosamplesModified, param.cas, param.casSpecies, param.creationTimestamp, param.description, param.documents, param.fusedDomain, param.labId, param.labTitle, param.lotId, param.modality, param.notes, param.productId, param.releaseTimestamp, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taggedProtein, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.
     * List items in the CuratedSet collection.
     * @param param the request object
     */
    public curatedSetsWithHttpInfo(param: IgvfApiCuratedSetsRequest, options?: Configuration): Promise<HttpInfo<CuratedSetResults>> {
        return this.api.curatedSetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assemblies, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.labId, param.labTitle, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.taxa, param.transcriptomeAnnotations, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.
     * List items in the CuratedSet collection.
     * @param param the request object
     */
    public curatedSets(param: IgvfApiCuratedSetsRequest, options?: Configuration): Promise<CuratedSetResults> {
        return this.api.curatedSets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assemblies, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.labId, param.labTitle, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.taxa, param.transcriptomeAnnotations, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.
     * List items in the DegronModification collection.
     * @param param the request object
     */
    public degronModificationsWithHttpInfo(param: IgvfApiDegronModificationsRequest, options?: Configuration): Promise<HttpInfo<DegronModificationResults>> {
        return this.api.degronModificationsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.activated, param.activatingAgentTermId, param.activatingAgentTermName, param.aliases, param.awardId, param.awardComponent, param.biosamplesModified, param.creationTimestamp, param.degronSystem, param.description, param.documents, param.labId, param.labTitle, param.lotId, param.modality, param.notes, param.productId, param.releaseTimestamp, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taggedProteins, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.
     * List items in the DegronModification collection.
     * @param param the request object
     */
    public degronModifications(param: IgvfApiDegronModificationsRequest, options?: Configuration): Promise<DegronModificationResults> {
        return this.api.degronModifications(param.frame, param.query, param.limit, param.sort, param.id, param.activated, param.activatingAgentTermId, param.activatingAgentTermName, param.aliases, param.awardId, param.awardComponent, param.biosamplesModified, param.creationTimestamp, param.degronSystem, param.description, param.documents, param.labId, param.labTitle, param.lotId, param.modality, param.notes, param.productId, param.releaseTimestamp, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taggedProteins, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.
     * List items in the Document collection.
     * @param param the request object
     */
    public documentsWithHttpInfo(param: IgvfApiDocumentsRequest, options?: Configuration): Promise<HttpInfo<DocumentResults>> {
        return this.api.documentsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.characterizationMethod, param.creationTimestamp, param.description, param.documentType, param.labId, param.labTitle, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.urls, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.
     * List items in the Document collection.
     * @param param the request object
     */
    public documents(param: IgvfApiDocumentsRequest, options?: Configuration): Promise<DocumentResults> {
        return this.api.documents(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.characterizationMethod, param.creationTimestamp, param.description, param.documentType, param.labId, param.labTitle, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.urls, param.uuid,  options).toPromise();
    }

    /**
     * Returns underlying file associated with file metadata
     * Download file.
     * @param param the request object
     */
    public downloadWithHttpInfo(param: IgvfApiDownloadRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadWithHttpInfo(param.fileId,  options).toPromise();
    }

    /**
     * Returns underlying file associated with file metadata
     * Download file.
     * @param param the request object
     */
    public download(param: IgvfApiDownloadRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.download(param.fileId,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.
     * List items in the Gene collection.
     * @param param the request object
     */
    public genesWithHttpInfo(param: IgvfApiGenesRequest, options?: Configuration): Promise<HttpInfo<GeneResults>> {
        return this.api.genesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.creationTimestamp, param.dbxrefs, param.description, param.geneid, param.geneidWithVersion, param.locations, param.name, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.symbol, param.synonyms, param.taxa, param.title, param.transcriptomeAnnotation, param.uuid, param.versionNumber,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.
     * List items in the Gene collection.
     * @param param the request object
     */
    public genes(param: IgvfApiGenesRequest, options?: Configuration): Promise<GeneResults> {
        return this.api.genes(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.creationTimestamp, param.dbxrefs, param.description, param.geneid, param.geneidWithVersion, param.locations, param.name, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.symbol, param.synonyms, param.taxa, param.title, param.transcriptomeAnnotation, param.uuid, param.versionNumber,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.
     * List items in the GenomeBrowserAnnotationFile collection.
     * @param param the request object
     */
    public genomeBrowserAnnotationFilesWithHttpInfo(param: IgvfApiGenomeBrowserAnnotationFilesRequest, options?: Configuration): Promise<HttpInfo<GenomeBrowserAnnotationFileResults>> {
        return this.api.genomeBrowserAnnotationFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileFormatType, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.
     * List items in the GenomeBrowserAnnotationFile collection.
     * @param param the request object
     */
    public genomeBrowserAnnotationFiles(param: IgvfApiGenomeBrowserAnnotationFilesRequest, options?: Configuration): Promise<GenomeBrowserAnnotationFileResults> {
        return this.api.genomeBrowserAnnotationFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileFormatType, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific item using its @id or uuid.
     * Get item information
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: IgvfApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Item>> {
        return this.api.getByIdWithHttpInfo(param.resourceId, param.frame,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific item using its @id or uuid.
     * Get item information
     * @param param the request object
     */
    public getById(param: IgvfApiGetByIdRequest, options?: Configuration): Promise<Item> {
        return this.api.getById(param.resourceId, param.frame,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.
     * List items in the HumanDonor collection.
     * @param param the request object
     */
    public humanDonorsWithHttpInfo(param: IgvfApiHumanDonorsRequest, options?: Configuration): Promise<HttpInfo<HumanDonorResults>> {
        return this.api.humanDonorsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.collections, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.ethnicities, param.humanDonorIdentifiers, param.labId, param.labTitle, param.notes, param.phenotypicFeaturesId, param.phenotypicFeaturesFeatureId, param.phenotypicFeaturesFeatureTermId, param.phenotypicFeaturesFeatureTermName, param.phenotypicFeaturesObservationDate, param.phenotypicFeaturesQuantityUnits, param.publicationIdentifiers, param.publications, param.relatedDonorsDonorId, param.relatedDonorsDonorAccession, param.releaseTimestamp, param.revokeDetail, param.sex, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.
     * List items in the HumanDonor collection.
     * @param param the request object
     */
    public humanDonors(param: IgvfApiHumanDonorsRequest, options?: Configuration): Promise<HumanDonorResults> {
        return this.api.humanDonors(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.collections, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.ethnicities, param.humanDonorIdentifiers, param.labId, param.labTitle, param.notes, param.phenotypicFeaturesId, param.phenotypicFeaturesFeatureId, param.phenotypicFeaturesFeatureTermId, param.phenotypicFeaturesFeatureTermName, param.phenotypicFeaturesObservationDate, param.phenotypicFeaturesQuantityUnits, param.publicationIdentifiers, param.publications, param.relatedDonorsDonorId, param.relatedDonorsDonorAccession, param.releaseTimestamp, param.revokeDetail, param.sex, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.
     * List items in the ImageFile collection.
     * @param param the request object
     */
    public imageFilesWithHttpInfo(param: IgvfApiImageFilesRequest, options?: Configuration): Promise<HttpInfo<ImageFileResults>> {
        return this.api.imageFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.
     * List items in the ImageFile collection.
     * @param param the request object
     */
    public imageFiles(param: IgvfApiImageFilesRequest, options?: Configuration): Promise<ImageFileResults> {
        return this.api.imageFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.
     * List items in the Image collection.
     * @param param the request object
     */
    public imagesWithHttpInfo(param: IgvfApiImagesRequest, options?: Configuration): Promise<HttpInfo<ImageResults>> {
        return this.api.imagesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.caption, param.creationTimestamp, param.description, param.downloadUrl, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.thumbNail, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.
     * List items in the Image collection.
     * @param param the request object
     */
    public images(param: IgvfApiImagesRequest, options?: Configuration): Promise<ImageResults> {
        return this.api.images(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.caption, param.creationTimestamp, param.description, param.downloadUrl, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.thumbNail, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.
     * List items in the InVitroSystem collection.
     * @param param the request object
     */
    public inVitroSystemsWithHttpInfo(param: IgvfApiInVitroSystemsRequest, options?: Configuration): Promise<HttpInfo<InVitroSystemResults>> {
        return this.api.inVitroSystemsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.cellFateChangeProtocol, param.cellFateChangeTreatmentsId, param.cellFateChangeTreatmentsPurpose, param.cellFateChangeTreatmentsStatus, param.cellFateChangeTreatmentsSummary, param.cellFateChangeTreatmentsTreatmentType, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.demultiplexedFrom, param.demultiplexedTo, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.growthMedium, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFromId, param.originatedFromAccession, param.partOf, param.parts, param.passageNumber, param.pooledFrom, param.pooledIn, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.targetedSampleTerm, param.taxa, param.timePostChange, param.timePostChangeUnits, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.
     * List items in the InVitroSystem collection.
     * @param param the request object
     */
    public inVitroSystems(param: IgvfApiInVitroSystemsRequest, options?: Configuration): Promise<InVitroSystemResults> {
        return this.api.inVitroSystems(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.cellFateChangeProtocol, param.cellFateChangeTreatmentsId, param.cellFateChangeTreatmentsPurpose, param.cellFateChangeTreatmentsStatus, param.cellFateChangeTreatmentsSummary, param.cellFateChangeTreatmentsTreatmentType, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.demultiplexedFrom, param.demultiplexedTo, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.growthMedium, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFromId, param.originatedFromAccession, param.partOf, param.parts, param.passageNumber, param.pooledFrom, param.pooledIn, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.targetedSampleTerm, param.taxa, param.timePostChange, param.timePostChangeUnits, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.
     * List items in the InstitutionalCertificate collection.
     * @param param the request object
     */
    public institutionalCertificatesWithHttpInfo(param: IgvfApiInstitutionalCertificatesRequest, options?: Configuration): Promise<HttpInfo<InstitutionalCertificateResults>> {
        return this.api.institutionalCertificatesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.certificateIdentifier, param.controlledAccess, param.creationTimestamp, param.dataUseLimitation, param.dataUseLimitationModifiers, param.description, param.labId, param.labTitle, param.notes, param.releaseTimestamp, param.samples, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.urls, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.
     * List items in the InstitutionalCertificate collection.
     * @param param the request object
     */
    public institutionalCertificates(param: IgvfApiInstitutionalCertificatesRequest, options?: Configuration): Promise<InstitutionalCertificateResults> {
        return this.api.institutionalCertificates(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.certificateIdentifier, param.controlledAccess, param.creationTimestamp, param.dataUseLimitation, param.dataUseLimitationModifiers, param.description, param.labId, param.labTitle, param.notes, param.releaseTimestamp, param.samples, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.urls, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.
     * List items in the Lab collection.
     * @param param the request object
     */
    public labsWithHttpInfo(param: IgvfApiLabsRequest, options?: Configuration): Promise<HttpInfo<LabResults>> {
        return this.api.labsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardsId, param.awardsComponent, param.awardsName, param.creationTimestamp, param.description, param.instituteLabel, param.name, param.notes, param.pi, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.
     * List items in the Lab collection.
     * @param param the request object
     */
    public labs(param: IgvfApiLabsRequest, options?: Configuration): Promise<LabResults> {
        return this.api.labs(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardsId, param.awardsComponent, param.awardsName, param.creationTimestamp, param.description, param.instituteLabel, param.name, param.notes, param.pi, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.
     * List items in the MatrixFile collection.
     * @param param the request object
     */
    public matrixFilesWithHttpInfo(param: IgvfApiMatrixFilesRequest, options?: Configuration): Promise<HttpInfo<MatrixFileResults>> {
        return this.api.matrixFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentSummary, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.dimension1, param.dimension2, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.referenceFiles, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.
     * List items in the MatrixFile collection.
     * @param param the request object
     */
    public matrixFiles(param: IgvfApiMatrixFilesRequest, options?: Configuration): Promise<MatrixFileResults> {
        return this.api.matrixFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentSummary, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.dimension1, param.dimension2, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.referenceFiles, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.
     * List items in the MeasurementSet collection.
     * @param param the request object
     */
    public measurementSetsWithHttpInfo(param: IgvfApiMeasurementSetsRequest, options?: Configuration): Promise<HttpInfo<MeasurementSetResults>> {
        return this.api.measurementSetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assayTermId, param.assayTermTermName, param.auxiliarySetsId, param.auxiliarySetsAccession, param.auxiliarySetsAliases, param.auxiliarySetsFileSetType, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlFileSetsId, param.controlFileSetsAccession, param.controlFileSetsAliases, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.externalImageUrl, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatformId, param.filesSequencingPlatformTermName, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.labId, param.labTitle, param.libraryConstructionPlatformId, param.libraryConstructionPlatformTermName, param.multiomeSize, param.notes, param.preferredAssayTitle, param.protocols, param.publicationIdentifiers, param.publications, param.relatedMultiomeDatasetsId, param.relatedMultiomeDatasetsAccession, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatmentsId, param.samplesCellFateChangeTreatmentsPurpose, param.samplesCellFateChangeTreatmentsSummary, param.samplesCellFateChangeTreatmentsTreatmentType, param.samplesClassifications, param.samplesConstructLibrarySetsId, param.samplesConstructLibrarySetsAccession, param.samplesConstructLibrarySetsFileSetType, param.samplesConstructLibrarySetsSmallScaleGeneListId, param.samplesConstructLibrarySetsSmallScaleGeneListGeneid, param.samplesConstructLibrarySetsSmallScaleGeneListName, param.samplesConstructLibrarySetsSmallScaleGeneListSummary, param.samplesConstructLibrarySetsSmallScaleGeneListSymbol, param.samplesConstructLibrarySetsSummary, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModificationsId, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatmentsId, param.samplesTreatmentsPurpose, param.samplesTreatmentsSummary, param.samplesTreatmentsTreatmentType, param.sequencingLibraryTypes, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.targetedGenesId, param.targetedGenesGeneid, param.targetedGenesName, param.targetedGenesSymbol, param.targetedGenesSynonyms, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.
     * List items in the MeasurementSet collection.
     * @param param the request object
     */
    public measurementSets(param: IgvfApiMeasurementSetsRequest, options?: Configuration): Promise<MeasurementSetResults> {
        return this.api.measurementSets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assayTermId, param.assayTermTermName, param.auxiliarySetsId, param.auxiliarySetsAccession, param.auxiliarySetsAliases, param.auxiliarySetsFileSetType, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlFileSetsId, param.controlFileSetsAccession, param.controlFileSetsAliases, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.externalImageUrl, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatformId, param.filesSequencingPlatformTermName, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.labId, param.labTitle, param.libraryConstructionPlatformId, param.libraryConstructionPlatformTermName, param.multiomeSize, param.notes, param.preferredAssayTitle, param.protocols, param.publicationIdentifiers, param.publications, param.relatedMultiomeDatasetsId, param.relatedMultiomeDatasetsAccession, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatmentsId, param.samplesCellFateChangeTreatmentsPurpose, param.samplesCellFateChangeTreatmentsSummary, param.samplesCellFateChangeTreatmentsTreatmentType, param.samplesClassifications, param.samplesConstructLibrarySetsId, param.samplesConstructLibrarySetsAccession, param.samplesConstructLibrarySetsFileSetType, param.samplesConstructLibrarySetsSmallScaleGeneListId, param.samplesConstructLibrarySetsSmallScaleGeneListGeneid, param.samplesConstructLibrarySetsSmallScaleGeneListName, param.samplesConstructLibrarySetsSmallScaleGeneListSummary, param.samplesConstructLibrarySetsSmallScaleGeneListSymbol, param.samplesConstructLibrarySetsSummary, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModificationsId, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatmentsId, param.samplesTreatmentsPurpose, param.samplesTreatmentsSummary, param.samplesTreatmentsTreatmentType, param.sequencingLibraryTypes, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.targetedGenesId, param.targetedGenesGeneid, param.targetedGenesName, param.targetedGenesSymbol, param.targetedGenesSynonyms, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.
     * List items in the ModelFile collection.
     * @param param the request object
     */
    public modelFilesWithHttpInfo(param: IgvfApiModelFilesRequest, options?: Configuration): Promise<HttpInfo<ModelFileResults>> {
        return this.api.modelFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.
     * List items in the ModelFile collection.
     * @param param the request object
     */
    public modelFiles(param: IgvfApiModelFilesRequest, options?: Configuration): Promise<ModelFileResults> {
        return this.api.modelFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.
     * List items in the ModelSet collection.
     * @param param the request object
     */
    public modelSetsWithHttpInfo(param: IgvfApiModelSetsRequest, options?: Configuration): Promise<HttpInfo<ModelSetResults>> {
        return this.api.modelSetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assessedGenes, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.inputFileSetsId, param.inputFileSetsAccession, param.inputFileSetsAliases, param.labId, param.labTitle, param.modelName, param.modelVersion, param.modelZooLocation, param.notes, param.predictionObjects, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.softwareVersion, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.
     * List items in the ModelSet collection.
     * @param param the request object
     */
    public modelSets(param: IgvfApiModelSetsRequest, options?: Configuration): Promise<ModelSetResults> {
        return this.api.modelSets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.assessedGenes, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.inputFileSetsId, param.inputFileSetsAccession, param.inputFileSetsAliases, param.labId, param.labTitle, param.modelName, param.modelVersion, param.modelZooLocation, param.notes, param.predictionObjects, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySets, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.softwareVersion, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.
     * List items in the MultiplexedSample collection.
     * @param param the request object
     */
    public multiplexedSamplesWithHttpInfo(param: IgvfApiMultiplexedSamplesRequest, options?: Configuration): Promise<HttpInfo<MultiplexedSampleResults>> {
        return this.api.multiplexedSamplesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.barcodeSampleMap, param.biomarkers, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySetsId, param.constructLibrarySetsAccession, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificates, param.labId, param.labTitle, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.multiplexedSamplesId, param.multiplexedSamplesAccession, param.multiplexedSamplesConstructLibrarySets, param.multiplexedSamplesDiseaseTermsId, param.multiplexedSamplesDiseaseTermsTermName, param.multiplexedSamplesDonorsId, param.multiplexedSamplesDonorsAccession, param.multiplexedSamplesSampleTermsId, param.multiplexedSamplesSampleTermsTermName, param.multiplexedSamplesStatus, param.multiplexedSamplesSummary, param.notes, param.nucleicAcidDelivery, param.originOf, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.
     * List items in the MultiplexedSample collection.
     * @param param the request object
     */
    public multiplexedSamples(param: IgvfApiMultiplexedSamplesRequest, options?: Configuration): Promise<MultiplexedSampleResults> {
        return this.api.multiplexedSamples(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.barcodeSampleMap, param.biomarkers, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySetsId, param.constructLibrarySetsAccession, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificates, param.labId, param.labTitle, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.multiplexedSamplesId, param.multiplexedSamplesAccession, param.multiplexedSamplesConstructLibrarySets, param.multiplexedSamplesDiseaseTermsId, param.multiplexedSamplesDiseaseTermsTermName, param.multiplexedSamplesDonorsId, param.multiplexedSamplesDonorsAccession, param.multiplexedSamplesSampleTermsId, param.multiplexedSamplesSampleTermsTermName, param.multiplexedSamplesStatus, param.multiplexedSamplesSummary, param.notes, param.nucleicAcidDelivery, param.originOf, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.
     * List items in the OpenReadingFrame collection.
     * @param param the request object
     */
    public openReadingFramesWithHttpInfo(param: IgvfApiOpenReadingFramesRequest, options?: Configuration): Promise<HttpInfo<OpenReadingFrameResults>> {
        return this.api.openReadingFramesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.award, param.creationTimestamp, param.dbxrefs, param.description, param.geneId, param.geneGeneid, param.geneSymbol, param.lab, param.notes, param.orfId, param.pctCoverageOrf, param.pctCoverageProtein, param.pctIdenticalProtein, param.proteinId, param.releaseTimestamp, param.status, param.submittedBy, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.
     * List items in the OpenReadingFrame collection.
     * @param param the request object
     */
    public openReadingFrames(param: IgvfApiOpenReadingFramesRequest, options?: Configuration): Promise<OpenReadingFrameResults> {
        return this.api.openReadingFrames(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.award, param.creationTimestamp, param.dbxrefs, param.description, param.geneId, param.geneGeneid, param.geneSymbol, param.lab, param.notes, param.orfId, param.pctCoverageOrf, param.pctCoverageProtein, param.pctIdenticalProtein, param.proteinId, param.releaseTimestamp, param.status, param.submittedBy, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.
     * List items in the Page collection.
     * @param param the request object
     */
    public pagesWithHttpInfo(param: IgvfApiPagesRequest, options?: Configuration): Promise<HttpInfo<PageResults>> {
        return this.api.pagesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.award, param.canonicalUri, param.creationTimestamp, param.description, param.lab, param.name, param.notes, param.parent, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.
     * List items in the Page collection.
     * @param param the request object
     */
    public pages(param: IgvfApiPagesRequest, options?: Configuration): Promise<PageResults> {
        return this.api.pages(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.award, param.canonicalUri, param.creationTimestamp, param.description, param.lab, param.name, param.notes, param.parent, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.
     * List items in the PhenotypeTerm collection.
     * @param param the request object
     */
    public phenotypeTermsWithHttpInfo(param: IgvfApiPhenotypeTermsRequest, options?: Configuration): Promise<HttpInfo<PhenotypeTermResults>> {
        return this.api.phenotypeTermsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.creationTimestamp, param.deprecatedNtrTerms, param.description, param.isA, param.name, param.notes, param.ontology, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.
     * List items in the PhenotypeTerm collection.
     * @param param the request object
     */
    public phenotypeTerms(param: IgvfApiPhenotypeTermsRequest, options?: Configuration): Promise<PhenotypeTermResults> {
        return this.api.phenotypeTerms(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.creationTimestamp, param.deprecatedNtrTerms, param.description, param.isA, param.name, param.notes, param.ontology, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.
     * List items in the PhenotypicFeature collection.
     * @param param the request object
     */
    public phenotypicFeaturesWithHttpInfo(param: IgvfApiPhenotypicFeaturesRequest, options?: Configuration): Promise<HttpInfo<PhenotypicFeatureResults>> {
        return this.api.phenotypicFeaturesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.featureId, param.featureTermId, param.featureTermName, param.labId, param.labTitle, param.notes, param.observationDate, param.quantity, param.quantityUnits, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.
     * List items in the PhenotypicFeature collection.
     * @param param the request object
     */
    public phenotypicFeatures(param: IgvfApiPhenotypicFeaturesRequest, options?: Configuration): Promise<PhenotypicFeatureResults> {
        return this.api.phenotypicFeatures(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.featureId, param.featureTermId, param.featureTermName, param.labId, param.labTitle, param.notes, param.observationDate, param.quantity, param.quantityUnits, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.
     * List items in the PlatformTerm collection.
     * @param param the request object
     */
    public platformTermsWithHttpInfo(param: IgvfApiPlatformTermsRequest, options?: Configuration): Promise<HttpInfo<PlatformTermResults>> {
        return this.api.platformTermsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.company, param.creationTimestamp, param.deprecatedNtrTerms, param.description, param.isA, param.name, param.notes, param.ontology, param.releaseTimestamp, param.sequencingKits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.
     * List items in the PlatformTerm collection.
     * @param param the request object
     */
    public platformTerms(param: IgvfApiPlatformTermsRequest, options?: Configuration): Promise<PlatformTermResults> {
        return this.api.platformTerms(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.company, param.creationTimestamp, param.deprecatedNtrTerms, param.description, param.isA, param.name, param.notes, param.ontology, param.releaseTimestamp, param.sequencingKits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.
     * List items in the PredictionSet collection.
     * @param param the request object
     */
    public predictionSetsWithHttpInfo(param: IgvfApiPredictionSetsRequest, options?: Configuration): Promise<HttpInfo<PredictionSetResults>> {
        return this.api.predictionSetsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.inputFileSets, param.labId, param.labTitle, param.largeScaleGeneListId, param.largeScaleGeneListAccession, param.largeScaleGeneListAliases, param.largeScaleLociListId, param.largeScaleLociListAccession, param.largeScaleLociListAliases, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySetsId, param.samplesConstructLibrarySetsAccession, param.samplesConstructLibrarySetsSummary, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.scope, param.smallScaleGeneListId, param.smallScaleGeneListGeneid, param.smallScaleGeneListName, param.smallScaleGeneListSymbol, param.smallScaleGeneListSynonyms, param.smallScaleLociList, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.
     * List items in the PredictionSet collection.
     * @param param the request object
     */
    public predictionSets(param: IgvfApiPredictionSetsRequest, options?: Configuration): Promise<PredictionSetResults> {
        return this.api.predictionSets(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.awardContactPiId, param.awardContactPiTitle, param.awardTitle, param.collections, param.controlForId, param.controlForAccession, param.controlForAliases, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.donorsId, param.donorsAccession, param.donorsAliases, param.donorsSex, param.donorsStatus, param.donorsTaxa, param.fileSetType, param.filesId, param.filesAccession, param.filesAliases, param.filesContentType, param.filesCreationTimestamp, param.filesFileFormat, param.filesFileSize, param.filesHref, param.filesS3Uri, param.filesSequencingPlatform, param.filesSubmittedFileName, param.filesUploadStatus, param.inputFileSetFor, param.inputFileSets, param.labId, param.labTitle, param.largeScaleGeneListId, param.largeScaleGeneListAccession, param.largeScaleGeneListAliases, param.largeScaleLociListId, param.largeScaleLociListAccession, param.largeScaleLociListAliases, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.samplesId, param.samplesAccession, param.samplesAliases, param.samplesCellFateChangeTreatments, param.samplesClassifications, param.samplesConstructLibrarySetsId, param.samplesConstructLibrarySetsAccession, param.samplesConstructLibrarySetsSummary, param.samplesDiseaseTermsId, param.samplesDiseaseTermsTermName, param.samplesModifications, param.samplesSampleTermsId, param.samplesSampleTermsAliases, param.samplesSampleTermsStatus, param.samplesSampleTermsSummary, param.samplesSampleTermsTermName, param.samplesStatus, param.samplesSummary, param.samplesTargetedSampleTermId, param.samplesTargetedSampleTermTermName, param.samplesTaxa, param.samplesTreatments, param.scope, param.smallScaleGeneListId, param.smallScaleGeneListGeneid, param.smallScaleGeneListName, param.smallScaleGeneListSymbol, param.smallScaleGeneListSynonyms, param.smallScaleLociList, param.status, param.submittedById, param.submittedByTitle, param.submittedFilesTimestamp, param.submitterComment, param.summary, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.
     * List items in the PrimaryCell collection.
     * @param param the request object
     */
    public primaryCellsWithHttpInfo(param: IgvfApiPrimaryCellsRequest, options?: Configuration): Promise<HttpInfo<PrimaryCellResults>> {
        return this.api.primaryCellsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFrom, param.partOf, param.parts, param.passageNumber, param.pooledFrom, param.pooledIn, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.
     * List items in the PrimaryCell collection.
     * @param param the request object
     */
    public primaryCells(param: IgvfApiPrimaryCellsRequest, options?: Configuration): Promise<PrimaryCellResults> {
        return this.api.primaryCells(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFrom, param.partOf, param.parts, param.passageNumber, param.pooledFrom, param.pooledIn, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.
     * List items in the Publication collection.
     * @param param the request object
     */
    public publicationsWithHttpInfo(param: IgvfApiPublicationsRequest, options?: Configuration): Promise<HttpInfo<PublicationResults>> {
        return this.api.publicationsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param._abstract, param.aliases, param.authors, param.awardId, param.awardComponent, param.creationTimestamp, param.datePublished, param.dateRevised, param.description, param.donors, param.fileSets, param.issue, param.journal, param.labId, param.labTitle, param.notes, param.page, param.publicationIdentifiers, param.publicationYear, param.publishedBy, param.releaseTimestamp, param.samples, param.software, param.softwareVersions, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid, param.volume, param.workflows,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.
     * List items in the Publication collection.
     * @param param the request object
     */
    public publications(param: IgvfApiPublicationsRequest, options?: Configuration): Promise<PublicationResults> {
        return this.api.publications(param.frame, param.query, param.limit, param.sort, param.id, param._abstract, param.aliases, param.authors, param.awardId, param.awardComponent, param.creationTimestamp, param.datePublished, param.dateRevised, param.description, param.donors, param.fileSets, param.issue, param.journal, param.labId, param.labTitle, param.notes, param.page, param.publicationIdentifiers, param.publicationYear, param.publishedBy, param.releaseTimestamp, param.samples, param.software, param.softwareVersions, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid, param.volume, param.workflows,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.
     * List items in the ReferenceFile collection.
     * @param param the request object
     */
    public referenceFilesWithHttpInfo(param: IgvfApiReferenceFilesRequest, options?: Configuration): Promise<HttpInfo<ReferenceFileResults>> {
        return this.api.referenceFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.external, param.externalId, param.fileFormat, param.fileFormatSpecifications, param.fileFormatType, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.sourceUrl, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.
     * List items in the ReferenceFile collection.
     * @param param the request object
     */
    public referenceFiles(param: IgvfApiReferenceFilesRequest, options?: Configuration): Promise<ReferenceFileResults> {
        return this.api.referenceFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.external, param.externalId, param.fileFormat, param.fileFormatSpecifications, param.fileFormatType, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.sourceUrl, param.sources, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).
     * Generate a report based on search query. All results are returned.
     * @param param the request object
     */
    public reportWithHttpInfo(param: IgvfApiReportRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.reportWithHttpInfo(param.query, param.type, param.limit, param.sort, param.fieldFilters, param.include_fields, param.frame,  options).toPromise();
    }

    /**
     * Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).
     * Generate a report based on search query. All results are returned.
     * @param param the request object
     */
    public report(param: IgvfApiReportRequest = {}, options?: Configuration): Promise<string> {
        return this.api.report(param.query, param.type, param.limit, param.sort, param.fieldFilters, param.include_fields, param.frame,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.
     * List items in the RodentDonor collection.
     * @param param the request object
     */
    public rodentDonorsWithHttpInfo(param: IgvfApiRodentDonorsRequest, options?: Configuration): Promise<HttpInfo<RodentDonorResults>> {
        return this.api.rodentDonorsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.collections, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.genotype, param.individualRodent, param.labId, param.labTitle, param.lotId, param.notes, param.phenotypicFeaturesId, param.phenotypicFeaturesFeatureId, param.phenotypicFeaturesFeatureTermId, param.phenotypicFeaturesFeatureTermName, param.phenotypicFeaturesObservationDate, param.phenotypicFeaturesQuantityUnits, param.productId, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.rodentIdentifier, param.sex, param.sourcesId, param.status, param.strain, param.strainBackground, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.
     * List items in the RodentDonor collection.
     * @param param the request object
     */
    public rodentDonors(param: IgvfApiRodentDonorsRequest, options?: Configuration): Promise<RodentDonorResults> {
        return this.api.rodentDonors(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.collections, param.creationTimestamp, param.dbxrefs, param.description, param.documents, param.genotype, param.individualRodent, param.labId, param.labTitle, param.lotId, param.notes, param.phenotypicFeaturesId, param.phenotypicFeaturesFeatureId, param.phenotypicFeaturesFeatureTermId, param.phenotypicFeaturesFeatureTermName, param.phenotypicFeaturesObservationDate, param.phenotypicFeaturesQuantityUnits, param.productId, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.rodentIdentifier, param.sex, param.sourcesId, param.status, param.strain, param.strainBackground, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.
     * List items in the SampleTerm collection.
     * @param param the request object
     */
    public sampleTermsWithHttpInfo(param: IgvfApiSampleTermsRequest, options?: Configuration): Promise<HttpInfo<SampleTermResults>> {
        return this.api.sampleTermsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.cellSlims, param.creationTimestamp, param.dbxrefs, param.deprecatedNtrTerms, param.description, param.developmentalSlims, param.isA, param.name, param.notes, param.ontology, param.organSlims, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.systemSlims, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.
     * List items in the SampleTerm collection.
     * @param param the request object
     */
    public sampleTerms(param: IgvfApiSampleTermsRequest, options?: Configuration): Promise<SampleTermResults> {
        return this.api.sampleTerms(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.ancestors, param.cellSlims, param.creationTimestamp, param.dbxrefs, param.deprecatedNtrTerms, param.description, param.developmentalSlims, param.isA, param.name, param.notes, param.ontology, param.organSlims, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.synonyms, param.systemSlims, param.termId, param.termName, param.uuid,  options).toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schema for item type
     * @param param the request object
     */
    public schemaForItemTypeWithHttpInfo(param: IgvfApiSchemaForItemTypeRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.schemaForItemTypeWithHttpInfo(param.itemType,  options).toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schema for item type
     * @param param the request object
     */
    public schemaForItemType(param: IgvfApiSchemaForItemTypeRequest, options?: Configuration): Promise<any> {
        return this.api.schemaForItemType(param.itemType,  options).toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schemas for all item types
     * @param param the request object
     */
    public schemasWithHttpInfo(param: IgvfApiSchemasRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.schemasWithHttpInfo( options).toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schemas for all item types
     * @param param the request object
     */
    public schemas(param: IgvfApiSchemasRequest = {}, options?: Configuration): Promise<any> {
        return this.api.schemas( options).toPromise();
    }

    /**
     * Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.
     * Search for items in the IGVF Project.
     * @param param the request object
     */
    public searchWithHttpInfo(param: IgvfApiSearchRequest, options?: Configuration): Promise<HttpInfo<SearchResults>> {
        return this.api.searchWithHttpInfo(param.frame, param.query, param.type, param.limit, param.sort, param.fieldFilters,  options).toPromise();
    }

    /**
     * Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.
     * Search for items in the IGVF Project.
     * @param param the request object
     */
    public search(param: IgvfApiSearchRequest, options?: Configuration): Promise<SearchResults> {
        return this.api.search(param.frame, param.query, param.type, param.limit, param.sort, param.fieldFilters,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.
     * List items in the SequenceFile collection.
     * @param param the request object
     */
    public sequenceFilesWithHttpInfo(param: IgvfApiSequenceFilesRequest, options?: Configuration): Promise<HttpInfo<SequenceFileResults>> {
        return this.api.sequenceFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.flowcellId, param.geneListFor, param.href, param.illuminaReadType, param.index, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lane, param.lociListFor, param.maximumReadLength, param.md5sum, param.meanReadLength, param.minimumReadLength, param.notes, param.readCount, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.seqspecs, param.sequencingKit, param.sequencingPlatform, param.sequencingRun, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.
     * List items in the SequenceFile collection.
     * @param param the request object
     */
    public sequenceFiles(param: IgvfApiSequenceFilesRequest, options?: Configuration): Promise<SequenceFileResults> {
        return this.api.sequenceFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.flowcellId, param.geneListFor, param.href, param.illuminaReadType, param.index, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lane, param.lociListFor, param.maximumReadLength, param.md5sum, param.meanReadLength, param.minimumReadLength, param.notes, param.readCount, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.seqspecs, param.sequencingKit, param.sequencingPlatform, param.sequencingRun, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.
     * List items in the SignalFile collection.
     * @param param the request object
     */
    public signalFilesWithHttpInfo(param: IgvfApiSignalFilesRequest, options?: Configuration): Promise<HttpInfo<SignalFileResults>> {
        return this.api.signalFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentSummary, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.filtered, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.normalized, param.notes, param.referenceFiles, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.startViewPosition, param.status, param.strandSpecificity, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.
     * List items in the SignalFile collection.
     * @param param the request object
     */
    public signalFiles(param: IgvfApiSignalFilesRequest, options?: Configuration): Promise<SignalFileResults> {
        return this.api.signalFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentSummary, param.contentType, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileSet, param.fileSize, param.filtered, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.normalized, param.notes, param.referenceFiles, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.startViewPosition, param.status, param.strandSpecificity, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.
     * List items in the Software collection.
     * @param param the request object
     */
    public softwareWithHttpInfo(param: IgvfApiSoftwareRequest, options?: Configuration): Promise<HttpInfo<SoftwareResults>> {
        return this.api.softwareWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.labId, param.labTitle, param.name, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.sourceUrl, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.usedBy, param.uuid, param.versions,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.
     * List items in the Software collection.
     * @param param the request object
     */
    public software(param: IgvfApiSoftwareRequest, options?: Configuration): Promise<SoftwareResults> {
        return this.api.software(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.labId, param.labTitle, param.name, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.sourceUrl, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.usedBy, param.uuid, param.versions,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.
     * List items in the SoftwareVersion collection.
     * @param param the request object
     */
    public softwareVersionsWithHttpInfo(param: IgvfApiSoftwareVersionsRequest, options?: Configuration): Promise<HttpInfo<SoftwareVersionResults>> {
        return this.api.softwareVersionsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.downloadId, param.downloadedUrl, param.labId, param.labTitle, param.name, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.softwareId, param.softwareTitle, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid, param.version,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.
     * List items in the SoftwareVersion collection.
     * @param param the request object
     */
    public softwareVersions(param: IgvfApiSoftwareVersionsRequest, options?: Configuration): Promise<SoftwareVersionResults> {
        return this.api.softwareVersions(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.awardId, param.awardComponent, param.creationTimestamp, param.description, param.downloadId, param.downloadedUrl, param.labId, param.labTitle, param.name, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.softwareId, param.softwareTitle, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid, param.version,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.
     * List items in the Source collection.
     * @param param the request object
     */
    public sourcesWithHttpInfo(param: IgvfApiSourcesRequest, options?: Configuration): Promise<HttpInfo<SourceResults>> {
        return this.api.sourcesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.creationTimestamp, param.description, param.name, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.
     * List items in the Source collection.
     * @param param the request object
     */
    public sources(param: IgvfApiSourcesRequest, options?: Configuration): Promise<SourceResults> {
        return this.api.sources(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.creationTimestamp, param.description, param.name, param.notes, param.releaseTimestamp, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.url, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.
     * List items in the TabularFile collection.
     * @param param the request object
     */
    public tabularFilesWithHttpInfo(param: IgvfApiTabularFilesRequest, options?: Configuration): Promise<HttpInfo<TabularFileResults>> {
        return this.api.tabularFilesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileFormatType, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.
     * List items in the TabularFile collection.
     * @param param the request object
     */
    public tabularFiles(param: IgvfApiTabularFilesRequest, options?: Configuration): Promise<TabularFileResults> {
        return this.api.tabularFiles(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisStepVersion, param.anvilUrl, param.assembly, param.awardId, param.awardComponent, param.collections, param.contentMd5sum, param.contentType, param.controlledAccess, param.creationTimestamp, param.dbxrefs, param.derivedFrom, param.description, param.documents, param.fileFormat, param.fileFormatSpecifications, param.fileFormatType, param.fileSet, param.fileSize, param.geneListFor, param.href, param.inputFileFor, param.integratedIn, param.labId, param.labTitle, param.lociListFor, param.md5sum, param.notes, param.releaseTimestamp, param.revokeDetail, param.s3Uri, param.status, param.submittedById, param.submittedByTitle, param.submittedFileName, param.submitterComment, param.summary, param.transcriptomeAnnotation, param.uploadStatus, param.uuid, param.validationErrorDetail,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.
     * List items in the TechnicalSample collection.
     * @param param the request object
     */
    public technicalSamplesWithHttpInfo(param: IgvfApiTechnicalSamplesRequest, options?: Configuration): Promise<HttpInfo<TechnicalSampleResults>> {
        return this.api.technicalSamplesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.documents, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificates, param.labId, param.labTitle, param.lotId, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleMaterial, param.sampleTermsId, param.sampleTermsTermName, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.
     * List items in the TechnicalSample collection.
     * @param param the request object
     */
    public technicalSamples(param: IgvfApiTechnicalSamplesRequest, options?: Configuration): Promise<TechnicalSampleResults> {
        return this.api.technicalSamples(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.documents, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificates, param.labId, param.labTitle, param.lotId, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleMaterial, param.sampleTermsId, param.sampleTermsTermName, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.
     * List items in the Tissue collection.
     * @param param the request object
     */
    public tissuesWithHttpInfo(param: IgvfApiTissuesRequest, options?: Configuration): Promise<HttpInfo<TissueResults>> {
        return this.api.tissuesWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.ccfId, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFrom, param.partOf, param.parts, param.pmi, param.pmiUnits, param.pooledFrom, param.pooledIn, param.preservationMethod, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.
     * List items in the Tissue collection.
     * @param param the request object
     */
    public tissues(param: IgvfApiTissuesRequest, options?: Configuration): Promise<TissueResults> {
        return this.api.tissues(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.ccfId, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFrom, param.partOf, param.parts, param.pmi, param.pmiUnits, param.pooledFrom, param.pooledIn, param.preservationMethod, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.
     * List items in the Treatment collection.
     * @param param the request object
     */
    public treatmentsWithHttpInfo(param: IgvfApiTreatmentsRequest, options?: Configuration): Promise<HttpInfo<TreatmentResults>> {
        return this.api.treatmentsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.amount, param.amountUnits, param.awardId, param.awardComponent, param.biosamplesTreated, param.creationTimestamp, param.depletion, param.description, param.documents, param.duration, param.durationUnits, param.labId, param.labTitle, param.lotId, param.notes, param.pH, param.postTreatmentTime, param.postTreatmentTimeUnits, param.productId, param.purpose, param.releaseTimestamp, param.sourcesId, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.temperature, param.temperatureUnits, param.treatmentTermId, param.treatmentTermName, param.treatmentType, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.
     * List items in the Treatment collection.
     * @param param the request object
     */
    public treatments(param: IgvfApiTreatmentsRequest, options?: Configuration): Promise<TreatmentResults> {
        return this.api.treatments(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.amount, param.amountUnits, param.awardId, param.awardComponent, param.biosamplesTreated, param.creationTimestamp, param.depletion, param.description, param.documents, param.duration, param.durationUnits, param.labId, param.labTitle, param.lotId, param.notes, param.pH, param.postTreatmentTime, param.postTreatmentTimeUnits, param.productId, param.purpose, param.releaseTimestamp, param.sourcesId, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.temperature, param.temperatureUnits, param.treatmentTermId, param.treatmentTermName, param.treatmentType, param.uuid,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.
     * List items in the User collection.
     * @param param the request object
     */
    public usersWithHttpInfo(param: IgvfApiUsersRequest, options?: Configuration): Promise<HttpInfo<UserResults>> {
        return this.api.usersWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.creationTimestamp, param.description, param.email, param.firstName, param.groups, param.jobTitle, param.lab, param.lastName, param.notes, param.status, param.submitsFor, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid, param.viewingGroups,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.
     * List items in the User collection.
     * @param param the request object
     */
    public users(param: IgvfApiUsersRequest, options?: Configuration): Promise<UserResults> {
        return this.api.users(param.frame, param.query, param.limit, param.sort, param.id, param.aliases, param.creationTimestamp, param.description, param.email, param.firstName, param.groups, param.jobTitle, param.lab, param.lastName, param.notes, param.status, param.submitsFor, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.title, param.uuid, param.viewingGroups,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.
     * List items in the WholeOrganism collection.
     * @param param the request object
     */
    public wholeOrganismsWithHttpInfo(param: IgvfApiWholeOrganismsRequest, options?: Configuration): Promise<HttpInfo<WholeOrganismResults>> {
        return this.api.wholeOrganismsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFrom, param.partOf, param.parts, param.pooledFrom, param.pooledIn, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.
     * List items in the WholeOrganism collection.
     * @param param the request object
     */
    public wholeOrganisms(param: IgvfApiWholeOrganismsRequest, options?: Configuration): Promise<WholeOrganismResults> {
        return this.api.wholeOrganisms(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.age, param.ageUnits, param.aliases, param.alternateAccessions, param.awardId, param.awardComponent, param.biomarkers, param.cellularSubPool, param.classifications, param.collections, param.constructLibrarySets, param.creationTimestamp, param.dateObtained, param.dbxrefs, param.description, param.diseaseTermsId, param.diseaseTermsTermName, param.documents, param.donors, param.embryonic, param.fileSetsId, param.fileSetsAccession, param.fileSetsAliases, param.fileSetsAssayTermTermName, param.fileSetsLabTitle, param.fileSetsStatus, param.fileSetsSummary, param.institutionalCertificatesId, param.institutionalCertificatesCertificateIdentifier, param.labId, param.labTitle, param.lotId, param.lowerBoundAge, param.lowerBoundAgeInHours, param.modificationsId, param.modificationsStatus, param.modificationsSummary, param.moi, param.multiplexedInId, param.multiplexedInAccession, param.notes, param.nucleicAcidDelivery, param.originOf, param.originatedFrom, param.partOf, param.parts, param.pooledFrom, param.pooledIn, param.productId, param.protocols, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sampleTermsId, param.sampleTermsTermName, param.sex, param.sortedFractions, param.sortedFromId, param.sortedFromAccession, param.sortedFromDetail, param.sourcesId, param.startingAmount, param.startingAmountUnits, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.taxa, param.timePostLibraryDelivery, param.timePostLibraryDeliveryUnits, param.treatmentsId, param.treatmentsPurpose, param.treatmentsStatus, param.treatmentsSummary, param.treatmentsTreatmentType, param.upperBoundAge, param.upperBoundAgeInHours, param.url, param.uuid, param.virtual,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.
     * List items in the Workflow collection.
     * @param param the request object
     */
    public workflowsWithHttpInfo(param: IgvfApiWorkflowsRequest, options?: Configuration): Promise<HttpInfo<WorkflowResults>> {
        return this.api.workflowsWithHttpInfo(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisSteps, param.awardId, param.awardComponent, param.collections, param.creationTimestamp, param.description, param.documents, param.labId, param.labTitle, param.name, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sourceUrl, param.standardsPageId, param.standardsPageTitle, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid, param.workflowRepositories, param.workflowVersion,  options).toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.
     * List items in the Workflow collection.
     * @param param the request object
     */
    public workflows(param: IgvfApiWorkflowsRequest, options?: Configuration): Promise<WorkflowResults> {
        return this.api.workflows(param.frame, param.query, param.limit, param.sort, param.id, param.accession, param.aliases, param.alternateAccessions, param.analysisSteps, param.awardId, param.awardComponent, param.collections, param.creationTimestamp, param.description, param.documents, param.labId, param.labTitle, param.name, param.notes, param.publicationIdentifiers, param.publications, param.releaseTimestamp, param.revokeDetail, param.sourceUrl, param.standardsPageId, param.standardsPageTitle, param.status, param.submittedById, param.submittedByTitle, param.submitterComment, param.summary, param.uuid, param.workflowRepositories, param.workflowVersion,  options).toPromise();
    }

}
