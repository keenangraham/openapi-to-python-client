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
import { ObservableIgvfApi } from './ObservableAPI';

import { IgvfApiRequestFactory, IgvfApiResponseProcessor} from "../apis/IgvfApi";
export class PromiseIgvfApi {
    private api: ObservableIgvfApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IgvfApiRequestFactory,
        responseProcessor?: IgvfApiResponseProcessor
    ) {
        this.api = new ObservableIgvfApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.
     * List items in the AccessKey collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accessKeyId Filter by access_key_id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param notes Filter by notes
     * @param secretAccessKeyHash Filter by secret_access_key_hash
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param user Filter by user
     * @param uuid Filter by uuid
     */
    public accessKeysWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accessKeyId?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, notes?: Array<string>, secretAccessKeyHash?: Array<string>, status?: Array<'current' | 'deleted'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, user?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<AccessKeyResults>> {
        const result = this.api.accessKeysWithHttpInfo(frame, query, limit, sort, id, accessKeyId, aliases, creationTimestamp, description, notes, secretAccessKeyHash, status, submittedById, submittedByTitle, submitterComment, summary, user, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.
     * List items in the AccessKey collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accessKeyId Filter by access_key_id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param notes Filter by notes
     * @param secretAccessKeyHash Filter by secret_access_key_hash
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param user Filter by user
     * @param uuid Filter by uuid
     */
    public accessKeys(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accessKeyId?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, notes?: Array<string>, secretAccessKeyHash?: Array<string>, status?: Array<'current' | 'deleted'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, user?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<AccessKeyResults> {
        const result = this.api.accessKeys(frame, query, limit, sort, id, accessKeyId, aliases, creationTimestamp, description, notes, secretAccessKeyHash, status, submittedById, submittedByTitle, submitterComment, summary, user, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.
     * List items in the AlignmentFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentSummary Filter by content_summary
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param filtered Filter by filtered
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param redacted Filter by redacted
     * @param referenceFiles Filter by reference_files
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public alignmentFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bam'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, filtered?: Array<boolean>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, redacted?: Array<boolean>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<AlignmentFileResults>> {
        const result = this.api.alignmentFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, assembly, awardId, awardComponent, collections, contentMd5sum, contentSummary, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, filtered, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, redacted, referenceFiles, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.
     * List items in the AlignmentFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentSummary Filter by content_summary
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param filtered Filter by filtered
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param redacted Filter by redacted
     * @param referenceFiles Filter by reference_files
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public alignmentFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bam'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, filtered?: Array<boolean>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, redacted?: Array<boolean>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<AlignmentFileResults> {
        const result = this.api.alignmentFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, assembly, awardId, awardComponent, collections, contentMd5sum, contentSummary, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, filtered, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, redacted, referenceFiles, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.
     * List items in the AnalysisSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assayTitles Filter by assay_titles
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param inputFileSetsId Filter by input_file_sets.@id
     * @param inputFileSetsAccession Filter by input_file_sets.accession
     * @param inputFileSetsAliases Filter by input_file_sets.aliases
     * @param inputFileSetsFileSetType Filter by input_file_sets.file_set_type
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public analysisSetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assayTitles?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'intermediate analysis' | 'principal analysis'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSetsId?: Array<string>, inputFileSetsAccession?: Array<string>, inputFileSetsAliases?: Array<string>, inputFileSetsFileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<AnalysisSetResults>> {
        const result = this.api.analysisSetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assayTitles, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, inputFileSetsId, inputFileSetsAccession, inputFileSetsAliases, inputFileSetsFileSetType, labId, labTitle, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.
     * List items in the AnalysisSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assayTitles Filter by assay_titles
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param inputFileSetsId Filter by input_file_sets.@id
     * @param inputFileSetsAccession Filter by input_file_sets.accession
     * @param inputFileSetsAliases Filter by input_file_sets.aliases
     * @param inputFileSetsFileSetType Filter by input_file_sets.file_set_type
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public analysisSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assayTitles?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'intermediate analysis' | 'principal analysis'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSetsId?: Array<string>, inputFileSetsAccession?: Array<string>, inputFileSetsAliases?: Array<string>, inputFileSetsFileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<AnalysisSetResults> {
        const result = this.api.analysisSets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assayTitles, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, inputFileSetsId, inputFileSetsAccession, inputFileSetsAliases, inputFileSetsFileSetType, labId, labTitle, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.
     * List items in the AnalysisStepVersion collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param analysisStepId Filter by analysis_step.@id
     * @param analysisStepName Filter by analysis_step.name
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param softwareVersionsId Filter by software_versions.@id
     * @param softwareVersionsName Filter by software_versions.name
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public analysisStepVersionsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, analysisStepId?: Array<string>, analysisStepName?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, softwareVersionsId?: Array<string>, softwareVersionsName?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<AnalysisStepVersionResults>> {
        const result = this.api.analysisStepVersionsWithHttpInfo(frame, query, limit, sort, id, aliases, analysisStepId, analysisStepName, awardId, awardComponent, creationTimestamp, description, labId, labTitle, notes, releaseTimestamp, softwareVersionsId, softwareVersionsName, status, submittedById, submittedByTitle, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.
     * List items in the AnalysisStepVersion collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param analysisStepId Filter by analysis_step.@id
     * @param analysisStepName Filter by analysis_step.name
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param softwareVersionsId Filter by software_versions.@id
     * @param softwareVersionsName Filter by software_versions.name
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public analysisStepVersions(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, analysisStepId?: Array<string>, analysisStepName?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, softwareVersionsId?: Array<string>, softwareVersionsName?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<AnalysisStepVersionResults> {
        const result = this.api.analysisStepVersions(frame, query, limit, sort, id, aliases, analysisStepId, analysisStepName, awardId, awardComponent, creationTimestamp, description, labId, labTitle, notes, releaseTimestamp, softwareVersionsId, softwareVersionsName, status, submittedById, submittedByTitle, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.
     * List items in the AnalysisStep collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param analysisStepTypes Filter by analysis_step_types
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param inputContentTypes Filter by input_content_types
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param outputContentTypes Filter by output_content_types
     * @param parentsId Filter by parents.@id
     * @param parentsTitle Filter by parents.title
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param stepLabel Filter by step_label
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     * @param workflowId Filter by workflow.@id
     * @param workflowAccession Filter by workflow.accession
     */
    public analysisStepsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, analysisStepTypes?: Array<'alignment' | 'file format conversion' | 'signal generation'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, inputContentTypes?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, outputContentTypes?: Array<string>, parentsId?: Array<string>, parentsTitle?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, stepLabel?: Array<string>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, workflowId?: Array<string>, workflowAccession?: Array<string>, _options?: Configuration): Promise<HttpInfo<AnalysisStepResults>> {
        const result = this.api.analysisStepsWithHttpInfo(frame, query, limit, sort, id, aliases, analysisStepTypes, awardId, awardComponent, creationTimestamp, description, inputContentTypes, labId, labTitle, name, notes, outputContentTypes, parentsId, parentsTitle, releaseTimestamp, status, stepLabel, submittedById, submittedByTitle, submitterComment, summary, title, uuid, workflowId, workflowAccession, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.
     * List items in the AnalysisStep collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param analysisStepTypes Filter by analysis_step_types
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param inputContentTypes Filter by input_content_types
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param outputContentTypes Filter by output_content_types
     * @param parentsId Filter by parents.@id
     * @param parentsTitle Filter by parents.title
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param stepLabel Filter by step_label
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     * @param workflowId Filter by workflow.@id
     * @param workflowAccession Filter by workflow.accession
     */
    public analysisSteps(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, analysisStepTypes?: Array<'alignment' | 'file format conversion' | 'signal generation'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, inputContentTypes?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, outputContentTypes?: Array<string>, parentsId?: Array<string>, parentsTitle?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, stepLabel?: Array<string>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, workflowId?: Array<string>, workflowAccession?: Array<string>, _options?: Configuration): Promise<AnalysisStepResults> {
        const result = this.api.analysisSteps(frame, query, limit, sort, id, aliases, analysisStepTypes, awardId, awardComponent, creationTimestamp, description, inputContentTypes, labId, labTitle, name, notes, outputContentTypes, parentsId, parentsTitle, releaseTimestamp, status, stepLabel, submittedById, submittedByTitle, submitterComment, summary, title, uuid, workflowId, workflowAccession, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.
     * List items in the AssayTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param assaySlims Filter by assay_slims
     * @param categorySlims Filter by category_slims
     * @param creationTimestamp Filter by creation_timestamp
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param objectiveSlims Filter by objective_slims
     * @param ontology Filter by ontology
     * @param preferredAssayTitles Filter by preferred_assay_titles
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public assayTermsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, assaySlims?: Array<string>, categorySlims?: Array<string>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, objectiveSlims?: Array<string>, ontology?: Array<string>, preferredAssayTitles?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<AssayTermResults>> {
        const result = this.api.assayTermsWithHttpInfo(frame, query, limit, sort, id, aliases, ancestors, assaySlims, categorySlims, creationTimestamp, deprecatedNtrTerms, description, isA, name, notes, objectiveSlims, ontology, preferredAssayTitles, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.
     * List items in the AssayTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param assaySlims Filter by assay_slims
     * @param categorySlims Filter by category_slims
     * @param creationTimestamp Filter by creation_timestamp
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param objectiveSlims Filter by objective_slims
     * @param ontology Filter by ontology
     * @param preferredAssayTitles Filter by preferred_assay_titles
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public assayTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, assaySlims?: Array<string>, categorySlims?: Array<string>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, objectiveSlims?: Array<string>, ontology?: Array<string>, preferredAssayTitles?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<AssayTermResults> {
        const result = this.api.assayTerms(frame, query, limit, sort, id, aliases, ancestors, assaySlims, categorySlims, creationTimestamp, deprecatedNtrTerms, description, isA, name, notes, objectiveSlims, ontology, preferredAssayTitles, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.
     * List items in the AuxiliarySet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param libraryConstructionPlatform Filter by library_construction_platform
     * @param measurementSetsId Filter by measurement_sets.@id
     * @param measurementSetsAccession Filter by measurement_sets.accession
     * @param measurementSetsAliases Filter by measurement_sets.aliases
     * @param measurementSetsPreferredAssayTitle Filter by measurement_sets.preferred_assay_title
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public auxiliarySetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, libraryConstructionPlatform?: Array<string>, measurementSetsId?: Array<string>, measurementSetsAccession?: Array<string>, measurementSetsAliases?: Array<string>, measurementSetsPreferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<AuxiliarySetResults>> {
        const result = this.api.auxiliarySetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, labId, labTitle, libraryConstructionPlatform, measurementSetsId, measurementSetsAccession, measurementSetsAliases, measurementSetsPreferredAssayTitle, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.
     * List items in the AuxiliarySet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param libraryConstructionPlatform Filter by library_construction_platform
     * @param measurementSetsId Filter by measurement_sets.@id
     * @param measurementSetsAccession Filter by measurement_sets.accession
     * @param measurementSetsAliases Filter by measurement_sets.aliases
     * @param measurementSetsPreferredAssayTitle Filter by measurement_sets.preferred_assay_title
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public auxiliarySets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, libraryConstructionPlatform?: Array<string>, measurementSetsId?: Array<string>, measurementSetsAccession?: Array<string>, measurementSetsAliases?: Array<string>, measurementSetsPreferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<AuxiliarySetResults> {
        const result = this.api.auxiliarySets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, labId, labTitle, libraryConstructionPlatform, measurementSetsId, measurementSetsAccession, measurementSetsAliases, measurementSetsPreferredAssayTitle, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.
     * List items in the Award collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param component Filter by component
     * @param contactPi Filter by contact_pi
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param endDate Filter by end_date
     * @param name Filter by name
     * @param notes Filter by notes
     * @param pis Filter by pis
     * @param project Filter by project
     * @param startDate Filter by start_date
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param viewingGroup Filter by viewing_group
     */
    public awardsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, component?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, contactPi?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, endDate?: Array<string>, name?: Array<string>, notes?: Array<string>, pis?: Array<string>, project?: Array<'community' | 'ENCODE' | 'IGVF'>, startDate?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, viewingGroup?: Array<'community' | 'IGVF'>, _options?: Configuration): Promise<HttpInfo<AwardResults>> {
        const result = this.api.awardsWithHttpInfo(frame, query, limit, sort, id, aliases, component, contactPi, creationTimestamp, description, endDate, name, notes, pis, project, startDate, status, submittedById, submittedByTitle, submitterComment, summary, title, url, uuid, viewingGroup, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.
     * List items in the Award collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param component Filter by component
     * @param contactPi Filter by contact_pi
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param endDate Filter by end_date
     * @param name Filter by name
     * @param notes Filter by notes
     * @param pis Filter by pis
     * @param project Filter by project
     * @param startDate Filter by start_date
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param viewingGroup Filter by viewing_group
     */
    public awards(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, component?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, contactPi?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, endDate?: Array<string>, name?: Array<string>, notes?: Array<string>, pis?: Array<string>, project?: Array<'community' | 'ENCODE' | 'IGVF'>, startDate?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, viewingGroup?: Array<'community' | 'IGVF'>, _options?: Configuration): Promise<AwardResults> {
        const result = this.api.awards(frame, query, limit, sort, id, aliases, component, contactPi, creationTimestamp, description, endDate, name, notes, pis, project, startDate, status, submittedById, submittedByTitle, submitterComment, summary, title, url, uuid, viewingGroup, _options);
        return result.toPromise();
    }

    /**
     * Generates TSV of files contained in FileSets in search results.
     * List files to download based on search query. All results are returned.
     * @param type Type of objects to return. Can be repeated for multiple types.
     * @param query Query string for searching.
     * @param fieldFilters Any field from any object type can be used as a filter. Use \&#39;!\&#39; for negation, \&#39;*\&#39; as a wildcard, and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; for range queries on numeric fields.
     */
    public batchDownloadWithHttpInfo(type: Array<string>, query?: string, fieldFilters?: any, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.batchDownloadWithHttpInfo(type, query, fieldFilters, _options);
        return result.toPromise();
    }

    /**
     * Generates TSV of files contained in FileSets in search results.
     * List files to download based on search query. All results are returned.
     * @param type Type of objects to return. Can be repeated for multiple types.
     * @param query Query string for searching.
     * @param fieldFilters Any field from any object type can be used as a filter. Use \&#39;!\&#39; for negation, \&#39;*\&#39; as a wildcard, and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; for range queries on numeric fields.
     */
    public batchDownload(type: Array<string>, query?: string, fieldFilters?: any, _options?: Configuration): Promise<string> {
        const result = this.api.batchDownload(type, query, fieldFilters, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.
     * List items in the Biomarker collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardName Filter by award.name
     * @param biomarkerFor Filter by biomarker_for
     * @param classification Filter by classification
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param gene Filter by gene
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param nameQuantification Filter by name_quantification
     * @param notes Filter by notes
     * @param quantification Filter by quantification
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param uuid Filter by uuid
     */
    public biomarkersWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardName?: Array<string>, biomarkerFor?: Array<string>, classification?: Array<'cell surface protein' | 'marker gene'>, creationTimestamp?: Array<string>, description?: Array<string>, gene?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, nameQuantification?: Array<string>, notes?: Array<string>, quantification?: Array<'negative' | 'positive' | 'low' | 'intermediate' | 'high'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<BiomarkerResults>> {
        const result = this.api.biomarkersWithHttpInfo(frame, query, limit, sort, id, aliases, awardId, awardComponent, awardName, biomarkerFor, classification, creationTimestamp, description, gene, labId, labTitle, name, nameQuantification, notes, quantification, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.
     * List items in the Biomarker collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardName Filter by award.name
     * @param biomarkerFor Filter by biomarker_for
     * @param classification Filter by classification
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param gene Filter by gene
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param nameQuantification Filter by name_quantification
     * @param notes Filter by notes
     * @param quantification Filter by quantification
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param uuid Filter by uuid
     */
    public biomarkers(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardName?: Array<string>, biomarkerFor?: Array<string>, classification?: Array<'cell surface protein' | 'marker gene'>, creationTimestamp?: Array<string>, description?: Array<string>, gene?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, nameQuantification?: Array<string>, notes?: Array<string>, quantification?: Array<'negative' | 'positive' | 'low' | 'intermediate' | 'high'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<BiomarkerResults> {
        const result = this.api.biomarkers(frame, query, limit, sort, id, aliases, awardId, awardComponent, awardName, biomarkerFor, classification, creationTimestamp, description, gene, labId, labTitle, name, nameQuantification, notes, quantification, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.
     * List items in the ConfigurationFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param seqspecOf Filter by seqspec_of
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public configurationFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'yaml'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, seqspecOf?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<ConfigurationFileResults>> {
        const result = this.api.configurationFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, awardId, awardComponent, collections, contentMd5sum, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, seqspecOf, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.
     * List items in the ConfigurationFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param seqspecOf Filter by seqspec_of
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public configurationFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'yaml'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, seqspecOf?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<ConfigurationFileResults> {
        const result = this.api.configurationFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, awardId, awardComponent, collections, contentMd5sum, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, seqspecOf, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.
     * List items in the ConstructLibrarySet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param appliedToSamplesId Filter by applied_to_samples.@id
     * @param appliedToSamplesAccession Filter by applied_to_samples.accession
     * @param appliedToSamplesAliases Filter by applied_to_samples.aliases
     * @param appliedToSamplesDiseaseTermsId Filter by applied_to_samples.disease_terms.@id
     * @param appliedToSamplesDiseaseTermsTermName Filter by applied_to_samples.disease_terms.term_name
     * @param appliedToSamplesSampleTermsId Filter by applied_to_samples.sample_terms.@id
     * @param appliedToSamplesSampleTermsTermName Filter by applied_to_samples.sample_terms.term_name
     * @param appliedToSamplesStatus Filter by applied_to_samples.status
     * @param appliedToSamplesSummary Filter by applied_to_samples.summary
     * @param associatedPhenotypesId Filter by associated_phenotypes.@id
     * @param associatedPhenotypesTermId Filter by associated_phenotypes.term_id
     * @param associatedPhenotypesTermName Filter by associated_phenotypes.term_name
     * @param averageGuideCoverage Filter by average_guide_coverage
     * @param averageInsertSize Filter by average_insert_size
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documents Filter by documents
     * @param exon Filter by exon
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesFileFormat Filter by files.file_format
     * @param filesUploadStatus Filter by files.upload_status
     * @param guideType Filter by guide_type
     * @param inputFileSetFor Filter by input_file_set_for
     * @param integratedContentFiles Filter by integrated_content_files
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param largeScaleGeneListId Filter by large_scale_gene_list.@id
     * @param largeScaleGeneListAccession Filter by large_scale_gene_list.accession
     * @param largeScaleGeneListAliases Filter by large_scale_gene_list.aliases
     * @param largeScaleLociListId Filter by large_scale_loci_list.@id
     * @param largeScaleLociListAccession Filter by large_scale_loci_list.accession
     * @param largeScaleLociListAliases Filter by large_scale_loci_list.aliases
     * @param lotId Filter by lot_id
     * @param lowerBoundGuideCoverage Filter by lower_bound_guide_coverage
     * @param lowerBoundInsertSize Filter by lower_bound_insert_size
     * @param notes Filter by notes
     * @param orfListId Filter by orf_list.@id
     * @param orfListAliases Filter by orf_list.aliases
     * @param orfListGene Filter by orf_list.gene
     * @param orfListOrfId Filter by orf_list.orf_id
     * @param productId Filter by product_id
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param scope Filter by scope
     * @param selectionCriteria Filter by selection_criteria
     * @param smallScaleGeneListId Filter by small_scale_gene_list.@id
     * @param smallScaleGeneListGeneid Filter by small_scale_gene_list.geneid
     * @param smallScaleGeneListName Filter by small_scale_gene_list.name
     * @param smallScaleGeneListSymbol Filter by small_scale_gene_list.symbol
     * @param smallScaleGeneListSynonyms Filter by small_scale_gene_list.synonyms
     * @param smallScaleLociList Filter by small_scale_loci_list
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param targeton Filter by targeton
     * @param tilingModality Filter by tiling_modality
     * @param upperBoundGuideCoverage Filter by upper_bound_guide_coverage
     * @param upperBoundInsertSize Filter by upper_bound_insert_size
     * @param uuid Filter by uuid
     */
    public constructLibrarySetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, appliedToSamplesId?: Array<string>, appliedToSamplesAccession?: Array<string>, appliedToSamplesAliases?: Array<string>, appliedToSamplesDiseaseTermsId?: Array<string>, appliedToSamplesDiseaseTermsTermName?: Array<string>, appliedToSamplesSampleTermsId?: Array<string>, appliedToSamplesSampleTermsTermName?: Array<string>, appliedToSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, appliedToSamplesSummary?: Array<string>, associatedPhenotypesId?: Array<string>, associatedPhenotypesTermId?: Array<string>, associatedPhenotypesTermName?: Array<string>, averageGuideCoverage?: Array<number>, averageInsertSize?: Array<number>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, exon?: Array<string>, fileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesFileFormat?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, guideType?: Array<'sgRNA' | 'pgRNA'>, inputFileSetFor?: Array<string>, integratedContentFiles?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, largeScaleGeneListId?: Array<string>, largeScaleGeneListAccession?: Array<string>, largeScaleGeneListAliases?: Array<string>, largeScaleLociListId?: Array<string>, largeScaleLociListAccession?: Array<string>, largeScaleLociListAliases?: Array<string>, lotId?: Array<string>, lowerBoundGuideCoverage?: Array<number>, lowerBoundInsertSize?: Array<number>, notes?: Array<string>, orfListId?: Array<string>, orfListAliases?: Array<string>, orfListGene?: Array<string>, orfListOrfId?: Array<string>, productId?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, scope?: Array<'tile' | 'exon' | 'genes' | 'loci' | 'genome-wide' | 'interactors' | 'alleles' | 'targeton'>, selectionCriteria?: Array<'accessible genome regions' | 'candidate cis-regulatory elements' | 'chromatin states' | 'phenotype-associated variants' | 'DNase hypersensitive sites' | 'genes' | 'histone modifications' | 'protein interactors' | 'sequence variants' | 'synthetic elements' | 'transcription start sites' | 'TF binding sites'>, smallScaleGeneListId?: Array<string>, smallScaleGeneListGeneid?: Array<string>, smallScaleGeneListName?: Array<string>, smallScaleGeneListSymbol?: Array<string>, smallScaleGeneListSynonyms?: Array<string>, smallScaleLociList?: Array<Locus>, sources?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targeton?: Array<string>, tilingModality?: Array<'peak tiling' | 'full tiling' | 'sparse peaks'>, upperBoundGuideCoverage?: Array<number>, upperBoundInsertSize?: Array<number>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<ConstructLibrarySetResults>> {
        const result = this.api.constructLibrarySetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, appliedToSamplesId, appliedToSamplesAccession, appliedToSamplesAliases, appliedToSamplesDiseaseTermsId, appliedToSamplesDiseaseTermsTermName, appliedToSamplesSampleTermsId, appliedToSamplesSampleTermsTermName, appliedToSamplesStatus, appliedToSamplesSummary, associatedPhenotypesId, associatedPhenotypesTermId, associatedPhenotypesTermName, averageGuideCoverage, averageInsertSize, awardId, awardComponent, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, description, documents, exon, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesFileFormat, filesUploadStatus, guideType, inputFileSetFor, integratedContentFiles, labId, labTitle, largeScaleGeneListId, largeScaleGeneListAccession, largeScaleGeneListAliases, largeScaleLociListId, largeScaleLociListAccession, largeScaleLociListAliases, lotId, lowerBoundGuideCoverage, lowerBoundInsertSize, notes, orfListId, orfListAliases, orfListGene, orfListOrfId, productId, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, scope, selectionCriteria, smallScaleGeneListId, smallScaleGeneListGeneid, smallScaleGeneListName, smallScaleGeneListSymbol, smallScaleGeneListSynonyms, smallScaleLociList, sources, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, targeton, tilingModality, upperBoundGuideCoverage, upperBoundInsertSize, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.
     * List items in the ConstructLibrarySet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param appliedToSamplesId Filter by applied_to_samples.@id
     * @param appliedToSamplesAccession Filter by applied_to_samples.accession
     * @param appliedToSamplesAliases Filter by applied_to_samples.aliases
     * @param appliedToSamplesDiseaseTermsId Filter by applied_to_samples.disease_terms.@id
     * @param appliedToSamplesDiseaseTermsTermName Filter by applied_to_samples.disease_terms.term_name
     * @param appliedToSamplesSampleTermsId Filter by applied_to_samples.sample_terms.@id
     * @param appliedToSamplesSampleTermsTermName Filter by applied_to_samples.sample_terms.term_name
     * @param appliedToSamplesStatus Filter by applied_to_samples.status
     * @param appliedToSamplesSummary Filter by applied_to_samples.summary
     * @param associatedPhenotypesId Filter by associated_phenotypes.@id
     * @param associatedPhenotypesTermId Filter by associated_phenotypes.term_id
     * @param associatedPhenotypesTermName Filter by associated_phenotypes.term_name
     * @param averageGuideCoverage Filter by average_guide_coverage
     * @param averageInsertSize Filter by average_insert_size
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documents Filter by documents
     * @param exon Filter by exon
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesFileFormat Filter by files.file_format
     * @param filesUploadStatus Filter by files.upload_status
     * @param guideType Filter by guide_type
     * @param inputFileSetFor Filter by input_file_set_for
     * @param integratedContentFiles Filter by integrated_content_files
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param largeScaleGeneListId Filter by large_scale_gene_list.@id
     * @param largeScaleGeneListAccession Filter by large_scale_gene_list.accession
     * @param largeScaleGeneListAliases Filter by large_scale_gene_list.aliases
     * @param largeScaleLociListId Filter by large_scale_loci_list.@id
     * @param largeScaleLociListAccession Filter by large_scale_loci_list.accession
     * @param largeScaleLociListAliases Filter by large_scale_loci_list.aliases
     * @param lotId Filter by lot_id
     * @param lowerBoundGuideCoverage Filter by lower_bound_guide_coverage
     * @param lowerBoundInsertSize Filter by lower_bound_insert_size
     * @param notes Filter by notes
     * @param orfListId Filter by orf_list.@id
     * @param orfListAliases Filter by orf_list.aliases
     * @param orfListGene Filter by orf_list.gene
     * @param orfListOrfId Filter by orf_list.orf_id
     * @param productId Filter by product_id
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param scope Filter by scope
     * @param selectionCriteria Filter by selection_criteria
     * @param smallScaleGeneListId Filter by small_scale_gene_list.@id
     * @param smallScaleGeneListGeneid Filter by small_scale_gene_list.geneid
     * @param smallScaleGeneListName Filter by small_scale_gene_list.name
     * @param smallScaleGeneListSymbol Filter by small_scale_gene_list.symbol
     * @param smallScaleGeneListSynonyms Filter by small_scale_gene_list.synonyms
     * @param smallScaleLociList Filter by small_scale_loci_list
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param targeton Filter by targeton
     * @param tilingModality Filter by tiling_modality
     * @param upperBoundGuideCoverage Filter by upper_bound_guide_coverage
     * @param upperBoundInsertSize Filter by upper_bound_insert_size
     * @param uuid Filter by uuid
     */
    public constructLibrarySets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, appliedToSamplesId?: Array<string>, appliedToSamplesAccession?: Array<string>, appliedToSamplesAliases?: Array<string>, appliedToSamplesDiseaseTermsId?: Array<string>, appliedToSamplesDiseaseTermsTermName?: Array<string>, appliedToSamplesSampleTermsId?: Array<string>, appliedToSamplesSampleTermsTermName?: Array<string>, appliedToSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, appliedToSamplesSummary?: Array<string>, associatedPhenotypesId?: Array<string>, associatedPhenotypesTermId?: Array<string>, associatedPhenotypesTermName?: Array<string>, averageGuideCoverage?: Array<number>, averageInsertSize?: Array<number>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, exon?: Array<string>, fileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesFileFormat?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, guideType?: Array<'sgRNA' | 'pgRNA'>, inputFileSetFor?: Array<string>, integratedContentFiles?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, largeScaleGeneListId?: Array<string>, largeScaleGeneListAccession?: Array<string>, largeScaleGeneListAliases?: Array<string>, largeScaleLociListId?: Array<string>, largeScaleLociListAccession?: Array<string>, largeScaleLociListAliases?: Array<string>, lotId?: Array<string>, lowerBoundGuideCoverage?: Array<number>, lowerBoundInsertSize?: Array<number>, notes?: Array<string>, orfListId?: Array<string>, orfListAliases?: Array<string>, orfListGene?: Array<string>, orfListOrfId?: Array<string>, productId?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, scope?: Array<'tile' | 'exon' | 'genes' | 'loci' | 'genome-wide' | 'interactors' | 'alleles' | 'targeton'>, selectionCriteria?: Array<'accessible genome regions' | 'candidate cis-regulatory elements' | 'chromatin states' | 'phenotype-associated variants' | 'DNase hypersensitive sites' | 'genes' | 'histone modifications' | 'protein interactors' | 'sequence variants' | 'synthetic elements' | 'transcription start sites' | 'TF binding sites'>, smallScaleGeneListId?: Array<string>, smallScaleGeneListGeneid?: Array<string>, smallScaleGeneListName?: Array<string>, smallScaleGeneListSymbol?: Array<string>, smallScaleGeneListSynonyms?: Array<string>, smallScaleLociList?: Array<Locus>, sources?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targeton?: Array<string>, tilingModality?: Array<'peak tiling' | 'full tiling' | 'sparse peaks'>, upperBoundGuideCoverage?: Array<number>, upperBoundInsertSize?: Array<number>, uuid?: Array<string>, _options?: Configuration): Promise<ConstructLibrarySetResults> {
        const result = this.api.constructLibrarySets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, appliedToSamplesId, appliedToSamplesAccession, appliedToSamplesAliases, appliedToSamplesDiseaseTermsId, appliedToSamplesDiseaseTermsTermName, appliedToSamplesSampleTermsId, appliedToSamplesSampleTermsTermName, appliedToSamplesStatus, appliedToSamplesSummary, associatedPhenotypesId, associatedPhenotypesTermId, associatedPhenotypesTermName, averageGuideCoverage, averageInsertSize, awardId, awardComponent, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, description, documents, exon, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesFileFormat, filesUploadStatus, guideType, inputFileSetFor, integratedContentFiles, labId, labTitle, largeScaleGeneListId, largeScaleGeneListAccession, largeScaleGeneListAliases, largeScaleLociListId, largeScaleLociListAccession, largeScaleLociListAliases, lotId, lowerBoundGuideCoverage, lowerBoundInsertSize, notes, orfListId, orfListAliases, orfListGene, orfListOrfId, productId, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, scope, selectionCriteria, smallScaleGeneListId, smallScaleGeneListGeneid, smallScaleGeneListName, smallScaleGeneListSymbol, smallScaleGeneListSynonyms, smallScaleLociList, sources, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, targeton, tilingModality, upperBoundGuideCoverage, upperBoundInsertSize, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.
     * List items in the CrisprModification collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param activated Filter by activated
     * @param activatingAgentTermId Filter by activating_agent_term_id
     * @param activatingAgentTermName Filter by activating_agent_term_name
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biosamplesModified Filter by biosamples_modified
     * @param cas Filter by cas
     * @param casSpecies Filter by cas_species
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fusedDomain Filter by fused_domain
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param modality Filter by modality
     * @param notes Filter by notes
     * @param productId Filter by product_id
     * @param releaseTimestamp Filter by release_timestamp
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taggedProtein Filter by tagged_protein
     * @param uuid Filter by uuid
     */
    public crisprModificationsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, activated?: Array<boolean>, activatingAgentTermId?: Array<string>, activatingAgentTermName?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesModified?: Array<string>, cas?: Array<'Cas9' | 'Cas12a' | 'Cas13' | 'dCas9' | 'nCas9' | 'SpG' | 'SpRY'>, casSpecies?: Array<'Streptococcus pyogenes (Sp)' | 'Staphylococcus aureus (Sa)' | 'Campylobacter jejuni (Cj)' | 'Neisseria meningitidis (Nm)'>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, fusedDomain?: Array<'2xVP64' | '3xVP64' | 'ABE8e' | 'ABE8.20' | 'ANTI-FLAG' | 'BE4' | 'BE4max' | 'eA3A' | 'eA3A-T31A' | 'eA3A-T44D-S45A' | 'KOX1-KRAB' | 'M-MLV RT (PE2)' | 'p300' | 'TdCBE' | 'TdCGBE' | 'TdDE' | 'VPH' | 'VP64' | 'VP64-p65-Rta (VPR)' | 'ZIM3-KRAB'>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, modality?: Array<'activation' | 'base editing' | 'cutting' | 'interference' | 'knockout' | 'localizing' | 'prime editing'>, notes?: Array<string>, productId?: Array<string>, releaseTimestamp?: Array<string>, sources?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taggedProtein?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<CrisprModificationResults>> {
        const result = this.api.crisprModificationsWithHttpInfo(frame, query, limit, sort, id, activated, activatingAgentTermId, activatingAgentTermName, aliases, awardId, awardComponent, biosamplesModified, cas, casSpecies, creationTimestamp, description, documents, fusedDomain, labId, labTitle, lotId, modality, notes, productId, releaseTimestamp, sources, status, submittedById, submittedByTitle, submitterComment, summary, taggedProtein, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.
     * List items in the CrisprModification collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param activated Filter by activated
     * @param activatingAgentTermId Filter by activating_agent_term_id
     * @param activatingAgentTermName Filter by activating_agent_term_name
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biosamplesModified Filter by biosamples_modified
     * @param cas Filter by cas
     * @param casSpecies Filter by cas_species
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fusedDomain Filter by fused_domain
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param modality Filter by modality
     * @param notes Filter by notes
     * @param productId Filter by product_id
     * @param releaseTimestamp Filter by release_timestamp
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taggedProtein Filter by tagged_protein
     * @param uuid Filter by uuid
     */
    public crisprModifications(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, activated?: Array<boolean>, activatingAgentTermId?: Array<string>, activatingAgentTermName?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesModified?: Array<string>, cas?: Array<'Cas9' | 'Cas12a' | 'Cas13' | 'dCas9' | 'nCas9' | 'SpG' | 'SpRY'>, casSpecies?: Array<'Streptococcus pyogenes (Sp)' | 'Staphylococcus aureus (Sa)' | 'Campylobacter jejuni (Cj)' | 'Neisseria meningitidis (Nm)'>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, fusedDomain?: Array<'2xVP64' | '3xVP64' | 'ABE8e' | 'ABE8.20' | 'ANTI-FLAG' | 'BE4' | 'BE4max' | 'eA3A' | 'eA3A-T31A' | 'eA3A-T44D-S45A' | 'KOX1-KRAB' | 'M-MLV RT (PE2)' | 'p300' | 'TdCBE' | 'TdCGBE' | 'TdDE' | 'VPH' | 'VP64' | 'VP64-p65-Rta (VPR)' | 'ZIM3-KRAB'>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, modality?: Array<'activation' | 'base editing' | 'cutting' | 'interference' | 'knockout' | 'localizing' | 'prime editing'>, notes?: Array<string>, productId?: Array<string>, releaseTimestamp?: Array<string>, sources?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taggedProtein?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<CrisprModificationResults> {
        const result = this.api.crisprModifications(frame, query, limit, sort, id, activated, activatingAgentTermId, activatingAgentTermName, aliases, awardId, awardComponent, biosamplesModified, cas, casSpecies, creationTimestamp, description, documents, fusedDomain, labId, labTitle, lotId, modality, notes, productId, releaseTimestamp, sources, status, submittedById, submittedByTitle, submitterComment, summary, taggedProtein, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.
     * List items in the CuratedSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assemblies Filter by assemblies
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param transcriptomeAnnotations Filter by transcriptome_annotations
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public curatedSetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assemblies?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'barcodes' | 'editing templates' | 'elements' | 'external data for catalog' | 'genome' | 'genes' | 'guide RNAs' | 'transcriptome' | 'variants'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, transcriptomeAnnotations?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<CuratedSetResults>> {
        const result = this.api.curatedSetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assemblies, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, labId, labTitle, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, taxa, transcriptomeAnnotations, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.
     * List items in the CuratedSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assemblies Filter by assemblies
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param transcriptomeAnnotations Filter by transcriptome_annotations
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public curatedSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assemblies?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'barcodes' | 'editing templates' | 'elements' | 'external data for catalog' | 'genome' | 'genes' | 'guide RNAs' | 'transcriptome' | 'variants'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, transcriptomeAnnotations?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<CuratedSetResults> {
        const result = this.api.curatedSets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assemblies, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, labId, labTitle, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, taxa, transcriptomeAnnotations, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.
     * List items in the DegronModification collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param activated Filter by activated
     * @param activatingAgentTermId Filter by activating_agent_term_id
     * @param activatingAgentTermName Filter by activating_agent_term_name
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biosamplesModified Filter by biosamples_modified
     * @param creationTimestamp Filter by creation_timestamp
     * @param degronSystem Filter by degron_system
     * @param description Filter by description
     * @param documents Filter by documents
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param modality Filter by modality
     * @param notes Filter by notes
     * @param productId Filter by product_id
     * @param releaseTimestamp Filter by release_timestamp
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taggedProteins Filter by tagged_proteins
     * @param uuid Filter by uuid
     */
    public degronModificationsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, activated?: Array<boolean>, activatingAgentTermId?: Array<string>, activatingAgentTermName?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesModified?: Array<string>, creationTimestamp?: Array<string>, degronSystem?: Array<'AID' | 'AlissAid' | 'ssAID'>, description?: Array<string>, documents?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, modality?: Array<'degradation'>, notes?: Array<string>, productId?: Array<string>, releaseTimestamp?: Array<string>, sources?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taggedProteins?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<DegronModificationResults>> {
        const result = this.api.degronModificationsWithHttpInfo(frame, query, limit, sort, id, activated, activatingAgentTermId, activatingAgentTermName, aliases, awardId, awardComponent, biosamplesModified, creationTimestamp, degronSystem, description, documents, labId, labTitle, lotId, modality, notes, productId, releaseTimestamp, sources, status, submittedById, submittedByTitle, submitterComment, summary, taggedProteins, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.
     * List items in the DegronModification collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param activated Filter by activated
     * @param activatingAgentTermId Filter by activating_agent_term_id
     * @param activatingAgentTermName Filter by activating_agent_term_name
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biosamplesModified Filter by biosamples_modified
     * @param creationTimestamp Filter by creation_timestamp
     * @param degronSystem Filter by degron_system
     * @param description Filter by description
     * @param documents Filter by documents
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param modality Filter by modality
     * @param notes Filter by notes
     * @param productId Filter by product_id
     * @param releaseTimestamp Filter by release_timestamp
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taggedProteins Filter by tagged_proteins
     * @param uuid Filter by uuid
     */
    public degronModifications(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, activated?: Array<boolean>, activatingAgentTermId?: Array<string>, activatingAgentTermName?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesModified?: Array<string>, creationTimestamp?: Array<string>, degronSystem?: Array<'AID' | 'AlissAid' | 'ssAID'>, description?: Array<string>, documents?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, modality?: Array<'degradation'>, notes?: Array<string>, productId?: Array<string>, releaseTimestamp?: Array<string>, sources?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taggedProteins?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<DegronModificationResults> {
        const result = this.api.degronModifications(frame, query, limit, sort, id, activated, activatingAgentTermId, activatingAgentTermName, aliases, awardId, awardComponent, biosamplesModified, creationTimestamp, degronSystem, description, documents, labId, labTitle, lotId, modality, notes, productId, releaseTimestamp, sources, status, submittedById, submittedByTitle, submitterComment, summary, taggedProteins, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.
     * List items in the Document collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param characterizationMethod Filter by characterization_method
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documentType Filter by document_type
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param urls Filter by urls
     * @param uuid Filter by uuid
     */
    public documentsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, characterizationMethod?: Array<'FACS' | 'immunoblot' | 'immunofluorescence' | 'immunoprecipitation' | 'mass spectrometry' | 'PCR' | 'restriction digest' | 'RT-qPCR' | 'sequencing'>, creationTimestamp?: Array<string>, description?: Array<string>, documentType?: Array<'cell fate change protocol' | 'characterization' | 'computational protocol' | 'experimental protocol' | 'file format specification' | 'image' | 'model source data' | 'plate map' | 'plasmid map' | 'plasmid sequence' | 'standards'>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, urls?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<DocumentResults>> {
        const result = this.api.documentsWithHttpInfo(frame, query, limit, sort, id, aliases, awardId, awardComponent, characterizationMethod, creationTimestamp, description, documentType, labId, labTitle, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, urls, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.
     * List items in the Document collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param characterizationMethod Filter by characterization_method
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documentType Filter by document_type
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param urls Filter by urls
     * @param uuid Filter by uuid
     */
    public documents(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, characterizationMethod?: Array<'FACS' | 'immunoblot' | 'immunofluorescence' | 'immunoprecipitation' | 'mass spectrometry' | 'PCR' | 'restriction digest' | 'RT-qPCR' | 'sequencing'>, creationTimestamp?: Array<string>, description?: Array<string>, documentType?: Array<'cell fate change protocol' | 'characterization' | 'computational protocol' | 'experimental protocol' | 'file format specification' | 'image' | 'model source data' | 'plate map' | 'plasmid map' | 'plasmid sequence' | 'standards'>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, urls?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<DocumentResults> {
        const result = this.api.documents(frame, query, limit, sort, id, aliases, awardId, awardComponent, characterizationMethod, creationTimestamp, description, documentType, labId, labTitle, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, urls, uuid, _options);
        return result.toPromise();
    }

    /**
     * Returns underlying file associated with file metadata
     * Download file.
     * @param fileId The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03).
     */
    public downloadWithHttpInfo(fileId: string, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.downloadWithHttpInfo(fileId, _options);
        return result.toPromise();
    }

    /**
     * Returns underlying file associated with file metadata
     * Download file.
     * @param fileId The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03).
     */
    public download(fileId: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.download(fileId, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.
     * List items in the Gene collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param geneid Filter by geneid
     * @param geneidWithVersion Filter by geneid_with_version
     * @param locations Filter by locations
     * @param name Filter by name
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param symbol Filter by symbol
     * @param synonyms Filter by synonyms
     * @param taxa Filter by taxa
     * @param title Filter by title
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uuid Filter by uuid
     * @param versionNumber Filter by version_number
     */
    public genesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, geneid?: Array<string>, geneidWithVersion?: Array<string>, locations?: Array<GeneLocation>, name?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, symbol?: Array<string>, synonyms?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, title?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uuid?: Array<string>, versionNumber?: Array<string>, _options?: Configuration): Promise<HttpInfo<GeneResults>> {
        const result = this.api.genesWithHttpInfo(frame, query, limit, sort, id, aliases, creationTimestamp, dbxrefs, description, geneid, geneidWithVersion, locations, name, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, symbol, synonyms, taxa, title, transcriptomeAnnotation, uuid, versionNumber, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.
     * List items in the Gene collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param geneid Filter by geneid
     * @param geneidWithVersion Filter by geneid_with_version
     * @param locations Filter by locations
     * @param name Filter by name
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param symbol Filter by symbol
     * @param synonyms Filter by synonyms
     * @param taxa Filter by taxa
     * @param title Filter by title
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uuid Filter by uuid
     * @param versionNumber Filter by version_number
     */
    public genes(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, geneid?: Array<string>, geneidWithVersion?: Array<string>, locations?: Array<GeneLocation>, name?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, symbol?: Array<string>, synonyms?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, title?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uuid?: Array<string>, versionNumber?: Array<string>, _options?: Configuration): Promise<GeneResults> {
        const result = this.api.genes(frame, query, limit, sort, id, aliases, creationTimestamp, dbxrefs, description, geneid, geneidWithVersion, locations, name, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, symbol, synonyms, taxa, title, transcriptomeAnnotation, uuid, versionNumber, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.
     * List items in the GenomeBrowserAnnotationFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileFormatType Filter by file_format_type
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public genomeBrowserAnnotationFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bigBed' | 'tabix'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<GenomeBrowserAnnotationFileResults>> {
        const result = this.api.genomeBrowserAnnotationFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, assembly, awardId, awardComponent, collections, contentMd5sum, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileFormatType, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.
     * List items in the GenomeBrowserAnnotationFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileFormatType Filter by file_format_type
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public genomeBrowserAnnotationFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bigBed' | 'tabix'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<GenomeBrowserAnnotationFileResults> {
        const result = this.api.genomeBrowserAnnotationFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, assembly, awardId, awardComponent, collections, contentMd5sum, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileFormatType, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about a specific item using its @id or uuid.
     * Get item information
     * @param resourceId The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;).
     * @param frame Constant value. Do not set.
     */
    public getByIdWithHttpInfo(resourceId: string, frame: 'object', _options?: Configuration): Promise<HttpInfo<Item>> {
        const result = this.api.getByIdWithHttpInfo(resourceId, frame, _options);
        return result.toPromise();
    }

    /**
     * Retrieve detailed information about a specific item using its @id or uuid.
     * Get item information
     * @param resourceId The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;).
     * @param frame Constant value. Do not set.
     */
    public getById(resourceId: string, frame: 'object', _options?: Configuration): Promise<Item> {
        const result = this.api.getById(resourceId, frame, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.
     * List items in the HumanDonor collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param ethnicities Filter by ethnicities
     * @param humanDonorIdentifiers Filter by human_donor_identifiers
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param phenotypicFeaturesId Filter by phenotypic_features.@id
     * @param phenotypicFeaturesFeatureId Filter by phenotypic_features.feature.@id
     * @param phenotypicFeaturesFeatureTermId Filter by phenotypic_features.feature.term_id
     * @param phenotypicFeaturesFeatureTermName Filter by phenotypic_features.feature.term_name
     * @param phenotypicFeaturesObservationDate Filter by phenotypic_features.observation_date
     * @param phenotypicFeaturesQuantityUnits Filter by phenotypic_features.quantity_units
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param relatedDonorsDonorId Filter by related_donors.donor.@id
     * @param relatedDonorsDonorAccession Filter by related_donors.donor.accession
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sex Filter by sex
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public humanDonorsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, ethnicities?: Array<'African American' | 'African Caribbean' | 'Arab' | 'Asian' | 'Black' | 'Black African' | 'Chinese' | 'Colombian' | 'Dai Chinese' | 'Esan' | 'Eskimo' | 'European' | 'Gambian' | 'Han Chinese' | 'Hispanic' | 'Indian' | 'Japanese' | 'Kinh Vietnamese' | 'Luhya' | 'Maasai' | 'Mende' | 'Native Hawaiian' | 'Pacific Islander' | 'Puerto Rican' | 'Yoruba'>, humanDonorIdentifiers?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, phenotypicFeaturesId?: Array<string>, phenotypicFeaturesFeatureId?: Array<string>, phenotypicFeaturesFeatureTermId?: Array<string>, phenotypicFeaturesFeatureTermName?: Array<string>, phenotypicFeaturesObservationDate?: Array<string>, phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, publicationIdentifiers?: Array<string>, publications?: Array<string>, relatedDonorsDonorId?: Array<string>, relatedDonorsDonorAccession?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sex?: Array<'male' | 'female' | 'unspecified'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<HumanDonorResults>> {
        const result = this.api.humanDonorsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, collections, creationTimestamp, dbxrefs, description, documents, ethnicities, humanDonorIdentifiers, labId, labTitle, notes, phenotypicFeaturesId, phenotypicFeaturesFeatureId, phenotypicFeaturesFeatureTermId, phenotypicFeaturesFeatureTermName, phenotypicFeaturesObservationDate, phenotypicFeaturesQuantityUnits, publicationIdentifiers, publications, relatedDonorsDonorId, relatedDonorsDonorAccession, releaseTimestamp, revokeDetail, sex, status, submittedById, submittedByTitle, submitterComment, summary, taxa, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.
     * List items in the HumanDonor collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param ethnicities Filter by ethnicities
     * @param humanDonorIdentifiers Filter by human_donor_identifiers
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param phenotypicFeaturesId Filter by phenotypic_features.@id
     * @param phenotypicFeaturesFeatureId Filter by phenotypic_features.feature.@id
     * @param phenotypicFeaturesFeatureTermId Filter by phenotypic_features.feature.term_id
     * @param phenotypicFeaturesFeatureTermName Filter by phenotypic_features.feature.term_name
     * @param phenotypicFeaturesObservationDate Filter by phenotypic_features.observation_date
     * @param phenotypicFeaturesQuantityUnits Filter by phenotypic_features.quantity_units
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param relatedDonorsDonorId Filter by related_donors.donor.@id
     * @param relatedDonorsDonorAccession Filter by related_donors.donor.accession
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sex Filter by sex
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public humanDonors(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, ethnicities?: Array<'African American' | 'African Caribbean' | 'Arab' | 'Asian' | 'Black' | 'Black African' | 'Chinese' | 'Colombian' | 'Dai Chinese' | 'Esan' | 'Eskimo' | 'European' | 'Gambian' | 'Han Chinese' | 'Hispanic' | 'Indian' | 'Japanese' | 'Kinh Vietnamese' | 'Luhya' | 'Maasai' | 'Mende' | 'Native Hawaiian' | 'Pacific Islander' | 'Puerto Rican' | 'Yoruba'>, humanDonorIdentifiers?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, phenotypicFeaturesId?: Array<string>, phenotypicFeaturesFeatureId?: Array<string>, phenotypicFeaturesFeatureTermId?: Array<string>, phenotypicFeaturesFeatureTermName?: Array<string>, phenotypicFeaturesObservationDate?: Array<string>, phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, publicationIdentifiers?: Array<string>, publications?: Array<string>, relatedDonorsDonorId?: Array<string>, relatedDonorsDonorAccession?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sex?: Array<'male' | 'female' | 'unspecified'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HumanDonorResults> {
        const result = this.api.humanDonors(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, collections, creationTimestamp, dbxrefs, description, documents, ethnicities, humanDonorIdentifiers, labId, labTitle, notes, phenotypicFeaturesId, phenotypicFeaturesFeatureId, phenotypicFeaturesFeatureTermId, phenotypicFeaturesFeatureTermName, phenotypicFeaturesObservationDate, phenotypicFeaturesQuantityUnits, publicationIdentifiers, publications, relatedDonorsDonorId, relatedDonorsDonorAccession, releaseTimestamp, revokeDetail, sex, status, submittedById, submittedByTitle, submitterComment, summary, taxa, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.
     * List items in the ImageFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public imageFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'jpg' | 'png'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<ImageFileResults>> {
        const result = this.api.imageFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, awardId, awardComponent, collections, contentMd5sum, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.
     * List items in the ImageFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public imageFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'jpg' | 'png'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<ImageFileResults> {
        const result = this.api.imageFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, awardId, awardComponent, collections, contentMd5sum, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.
     * List items in the Image collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param caption Filter by caption
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param downloadUrl Filter by download_url
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param thumbNail Filter by thumb_nail
     * @param uuid Filter by uuid
     */
    public imagesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, caption?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, downloadUrl?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, thumbNail?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<ImageResults>> {
        const result = this.api.imagesWithHttpInfo(frame, query, limit, sort, id, aliases, caption, creationTimestamp, description, downloadUrl, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, thumbNail, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.
     * List items in the Image collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param caption Filter by caption
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param downloadUrl Filter by download_url
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param thumbNail Filter by thumb_nail
     * @param uuid Filter by uuid
     */
    public images(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, caption?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, downloadUrl?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, thumbNail?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<ImageResults> {
        const result = this.api.images(frame, query, limit, sort, id, aliases, caption, creationTimestamp, description, downloadUrl, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, thumbNail, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.
     * List items in the InVitroSystem collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param cellFateChangeProtocol Filter by cell_fate_change_protocol
     * @param cellFateChangeTreatmentsId Filter by cell_fate_change_treatments.@id
     * @param cellFateChangeTreatmentsPurpose Filter by cell_fate_change_treatments.purpose
     * @param cellFateChangeTreatmentsStatus Filter by cell_fate_change_treatments.status
     * @param cellFateChangeTreatmentsSummary Filter by cell_fate_change_treatments.summary
     * @param cellFateChangeTreatmentsTreatmentType Filter by cell_fate_change_treatments.treatment_type
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param demultiplexedFrom Filter by demultiplexed_from
     * @param demultiplexedTo Filter by demultiplexed_to
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param growthMedium Filter by growth_medium
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFromId Filter by originated_from.@id
     * @param originatedFromAccession Filter by originated_from.accession
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param passageNumber Filter by passage_number
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param targetedSampleTerm Filter by targeted_sample_term
     * @param taxa Filter by taxa
     * @param timePostChange Filter by time_post_change
     * @param timePostChangeUnits Filter by time_post_change_units
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public inVitroSystemsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellFateChangeProtocol?: Array<string>, cellFateChangeTreatmentsId?: Array<string>, cellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, cellFateChangeTreatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, cellFateChangeTreatmentsSummary?: Array<string>, cellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, cellularSubPool?: Array<string>, classifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, demultiplexedFrom?: Array<string>, demultiplexedTo?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, growthMedium?: Array<'DMEM with serum' | 'DMEM without serum' | 'SMBM with serum' | 'SMBM without serum'>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFromId?: Array<string>, originatedFromAccession?: Array<string>, partOf?: Array<string>, parts?: Array<string>, passageNumber?: Array<number>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targetedSampleTerm?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostChange?: Array<number>, timePostChangeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<InVitroSystemResults>> {
        const result = this.api.inVitroSystemsWithHttpInfo(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, cellFateChangeProtocol, cellFateChangeTreatmentsId, cellFateChangeTreatmentsPurpose, cellFateChangeTreatmentsStatus, cellFateChangeTreatmentsSummary, cellFateChangeTreatmentsTreatmentType, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, demultiplexedFrom, demultiplexedTo, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, growthMedium, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFromId, originatedFromAccession, partOf, parts, passageNumber, pooledFrom, pooledIn, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, targetedSampleTerm, taxa, timePostChange, timePostChangeUnits, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.
     * List items in the InVitroSystem collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param cellFateChangeProtocol Filter by cell_fate_change_protocol
     * @param cellFateChangeTreatmentsId Filter by cell_fate_change_treatments.@id
     * @param cellFateChangeTreatmentsPurpose Filter by cell_fate_change_treatments.purpose
     * @param cellFateChangeTreatmentsStatus Filter by cell_fate_change_treatments.status
     * @param cellFateChangeTreatmentsSummary Filter by cell_fate_change_treatments.summary
     * @param cellFateChangeTreatmentsTreatmentType Filter by cell_fate_change_treatments.treatment_type
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param demultiplexedFrom Filter by demultiplexed_from
     * @param demultiplexedTo Filter by demultiplexed_to
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param growthMedium Filter by growth_medium
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFromId Filter by originated_from.@id
     * @param originatedFromAccession Filter by originated_from.accession
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param passageNumber Filter by passage_number
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param targetedSampleTerm Filter by targeted_sample_term
     * @param taxa Filter by taxa
     * @param timePostChange Filter by time_post_change
     * @param timePostChangeUnits Filter by time_post_change_units
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public inVitroSystems(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellFateChangeProtocol?: Array<string>, cellFateChangeTreatmentsId?: Array<string>, cellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, cellFateChangeTreatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, cellFateChangeTreatmentsSummary?: Array<string>, cellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, cellularSubPool?: Array<string>, classifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, demultiplexedFrom?: Array<string>, demultiplexedTo?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, growthMedium?: Array<'DMEM with serum' | 'DMEM without serum' | 'SMBM with serum' | 'SMBM without serum'>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFromId?: Array<string>, originatedFromAccession?: Array<string>, partOf?: Array<string>, parts?: Array<string>, passageNumber?: Array<number>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targetedSampleTerm?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostChange?: Array<number>, timePostChangeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<InVitroSystemResults> {
        const result = this.api.inVitroSystems(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, cellFateChangeProtocol, cellFateChangeTreatmentsId, cellFateChangeTreatmentsPurpose, cellFateChangeTreatmentsStatus, cellFateChangeTreatmentsSummary, cellFateChangeTreatmentsTreatmentType, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, demultiplexedFrom, demultiplexedTo, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, growthMedium, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFromId, originatedFromAccession, partOf, parts, passageNumber, pooledFrom, pooledIn, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, targetedSampleTerm, taxa, timePostChange, timePostChangeUnits, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.
     * List items in the InstitutionalCertificate collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param certificateIdentifier Filter by certificate_identifier
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dataUseLimitation Filter by data_use_limitation
     * @param dataUseLimitationModifiers Filter by data_use_limitation_modifiers
     * @param description Filter by description
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param samples Filter by samples
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param urls Filter by urls
     * @param uuid Filter by uuid
     */
    public institutionalCertificatesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, certificateIdentifier?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dataUseLimitation?: Array<'DS' | 'GRU' | 'HMB' | 'other'>, dataUseLimitationModifiers?: Array<'COL' | 'GSO' | 'IRB' | 'MDS' | 'NPU' | 'PUB'>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, samples?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, urls?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<InstitutionalCertificateResults>> {
        const result = this.api.institutionalCertificatesWithHttpInfo(frame, query, limit, sort, id, aliases, awardId, awardComponent, certificateIdentifier, controlledAccess, creationTimestamp, dataUseLimitation, dataUseLimitationModifiers, description, labId, labTitle, notes, releaseTimestamp, samples, status, submittedById, submittedByTitle, submitterComment, summary, urls, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.
     * List items in the InstitutionalCertificate collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param certificateIdentifier Filter by certificate_identifier
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dataUseLimitation Filter by data_use_limitation
     * @param dataUseLimitationModifiers Filter by data_use_limitation_modifiers
     * @param description Filter by description
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param samples Filter by samples
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param urls Filter by urls
     * @param uuid Filter by uuid
     */
    public institutionalCertificates(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, certificateIdentifier?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dataUseLimitation?: Array<'DS' | 'GRU' | 'HMB' | 'other'>, dataUseLimitationModifiers?: Array<'COL' | 'GSO' | 'IRB' | 'MDS' | 'NPU' | 'PUB'>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, samples?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, urls?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<InstitutionalCertificateResults> {
        const result = this.api.institutionalCertificates(frame, query, limit, sort, id, aliases, awardId, awardComponent, certificateIdentifier, controlledAccess, creationTimestamp, dataUseLimitation, dataUseLimitationModifiers, description, labId, labTitle, notes, releaseTimestamp, samples, status, submittedById, submittedByTitle, submitterComment, summary, urls, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.
     * List items in the Lab collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardsId Filter by awards.@id
     * @param awardsComponent Filter by awards.component
     * @param awardsName Filter by awards.name
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param instituteLabel Filter by institute_label
     * @param name Filter by name
     * @param notes Filter by notes
     * @param pi Filter by pi
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public labsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardsId?: Array<string>, awardsComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardsName?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, instituteLabel?: Array<string>, name?: Array<string>, notes?: Array<string>, pi?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<LabResults>> {
        const result = this.api.labsWithHttpInfo(frame, query, limit, sort, id, aliases, awardsId, awardsComponent, awardsName, creationTimestamp, description, instituteLabel, name, notes, pi, status, submittedById, submittedByTitle, submitterComment, summary, title, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.
     * List items in the Lab collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardsId Filter by awards.@id
     * @param awardsComponent Filter by awards.component
     * @param awardsName Filter by awards.name
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param instituteLabel Filter by institute_label
     * @param name Filter by name
     * @param notes Filter by notes
     * @param pi Filter by pi
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public labs(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardsId?: Array<string>, awardsComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardsName?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, instituteLabel?: Array<string>, name?: Array<string>, notes?: Array<string>, pi?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<LabResults> {
        const result = this.api.labs(frame, query, limit, sort, id, aliases, awardsId, awardsComponent, awardsName, creationTimestamp, description, instituteLabel, name, notes, pi, status, submittedById, submittedByTitle, submitterComment, summary, title, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.
     * List items in the MatrixFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentSummary Filter by content_summary
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param dimension1 Filter by dimension1
     * @param dimension2 Filter by dimension2
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param referenceFiles Filter by reference_files
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public matrixFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, dimension1?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>, dimension2?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>, documents?: Array<string>, fileFormat?: Array<'h5ad' | 'hdf5' | 'mtx' | 'tar' | 'hic'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<MatrixFileResults>> {
        const result = this.api.matrixFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, awardId, awardComponent, collections, contentMd5sum, contentSummary, contentType, creationTimestamp, dbxrefs, derivedFrom, description, dimension1, dimension2, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, referenceFiles, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.
     * List items in the MatrixFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentSummary Filter by content_summary
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param dimension1 Filter by dimension1
     * @param dimension2 Filter by dimension2
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param referenceFiles Filter by reference_files
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public matrixFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, dimension1?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>, dimension2?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>, documents?: Array<string>, fileFormat?: Array<'h5ad' | 'hdf5' | 'mtx' | 'tar' | 'hic'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<MatrixFileResults> {
        const result = this.api.matrixFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, awardId, awardComponent, collections, contentMd5sum, contentSummary, contentType, creationTimestamp, dbxrefs, derivedFrom, description, dimension1, dimension2, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, referenceFiles, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.
     * List items in the MeasurementSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assayTermId Filter by assay_term.@id
     * @param assayTermTermName Filter by assay_term.term_name
     * @param auxiliarySetsId Filter by auxiliary_sets.@id
     * @param auxiliarySetsAccession Filter by auxiliary_sets.accession
     * @param auxiliarySetsAliases Filter by auxiliary_sets.aliases
     * @param auxiliarySetsFileSetType Filter by auxiliary_sets.file_set_type
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlFileSetsId Filter by control_file_sets.@id
     * @param controlFileSetsAccession Filter by control_file_sets.accession
     * @param controlFileSetsAliases Filter by control_file_sets.aliases
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param externalImageUrl Filter by external_image_url
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatformId Filter by files.sequencing_platform.@id
     * @param filesSequencingPlatformTermName Filter by files.sequencing_platform.term_name
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param libraryConstructionPlatformId Filter by library_construction_platform.@id
     * @param libraryConstructionPlatformTermName Filter by library_construction_platform.term_name
     * @param multiomeSize Filter by multiome_size
     * @param notes Filter by notes
     * @param preferredAssayTitle Filter by preferred_assay_title
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param relatedMultiomeDatasetsId Filter by related_multiome_datasets.@id
     * @param relatedMultiomeDatasetsAccession Filter by related_multiome_datasets.accession
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatmentsId Filter by samples.cell_fate_change_treatments.@id
     * @param samplesCellFateChangeTreatmentsPurpose Filter by samples.cell_fate_change_treatments.purpose
     * @param samplesCellFateChangeTreatmentsSummary Filter by samples.cell_fate_change_treatments.summary
     * @param samplesCellFateChangeTreatmentsTreatmentType Filter by samples.cell_fate_change_treatments.treatment_type
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySetsId Filter by samples.construct_library_sets.@id
     * @param samplesConstructLibrarySetsAccession Filter by samples.construct_library_sets.accession
     * @param samplesConstructLibrarySetsFileSetType Filter by samples.construct_library_sets.file_set_type
     * @param samplesConstructLibrarySetsSmallScaleGeneListId Filter by samples.construct_library_sets.small_scale_gene_list.@id
     * @param samplesConstructLibrarySetsSmallScaleGeneListGeneid Filter by samples.construct_library_sets.small_scale_gene_list.geneid
     * @param samplesConstructLibrarySetsSmallScaleGeneListName Filter by samples.construct_library_sets.small_scale_gene_list.name
     * @param samplesConstructLibrarySetsSmallScaleGeneListSummary Filter by samples.construct_library_sets.small_scale_gene_list.summary
     * @param samplesConstructLibrarySetsSmallScaleGeneListSymbol Filter by samples.construct_library_sets.small_scale_gene_list.symbol
     * @param samplesConstructLibrarySetsSummary Filter by samples.construct_library_sets.summary
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModificationsId Filter by samples.modifications.@id
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatmentsId Filter by samples.treatments.@id
     * @param samplesTreatmentsPurpose Filter by samples.treatments.purpose
     * @param samplesTreatmentsSummary Filter by samples.treatments.summary
     * @param samplesTreatmentsTreatmentType Filter by samples.treatments.treatment_type
     * @param sequencingLibraryTypes Filter by sequencing_library_types
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param targetedGenesId Filter by targeted_genes.@id
     * @param targetedGenesGeneid Filter by targeted_genes.geneid
     * @param targetedGenesName Filter by targeted_genes.name
     * @param targetedGenesSymbol Filter by targeted_genes.symbol
     * @param targetedGenesSynonyms Filter by targeted_genes.synonyms
     * @param uuid Filter by uuid
     */
    public measurementSetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assayTermId?: Array<string>, assayTermTermName?: Array<string>, auxiliarySetsId?: Array<string>, auxiliarySetsAccession?: Array<string>, auxiliarySetsAliases?: Array<string>, auxiliarySetsFileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlFileSetsId?: Array<string>, controlFileSetsAccession?: Array<string>, controlFileSetsAliases?: Array<string>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, externalImageUrl?: Array<string>, fileSetType?: Array<'experimental data'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatformId?: Array<string>, filesSequencingPlatformTermName?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, libraryConstructionPlatformId?: Array<string>, libraryConstructionPlatformTermName?: Array<string>, multiomeSize?: Array<number>, notes?: Array<string>, preferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, relatedMultiomeDatasetsId?: Array<string>, relatedMultiomeDatasetsAccession?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatmentsId?: Array<string>, samplesCellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, samplesCellFateChangeTreatmentsSummary?: Array<string>, samplesCellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySetsId?: Array<string>, samplesConstructLibrarySetsAccession?: Array<string>, samplesConstructLibrarySetsFileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>, samplesConstructLibrarySetsSmallScaleGeneListId?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListGeneid?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListName?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListSummary?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListSymbol?: Array<string>, samplesConstructLibrarySetsSummary?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModificationsId?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatmentsId?: Array<string>, samplesTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, samplesTreatmentsSummary?: Array<string>, samplesTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, sequencingLibraryTypes?: Array<'direct RNA' | 'exome capture' | 'mRNA enriched' | 'rRNA depleted' | 'polyA depleted' | 'polyA enriched'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targetedGenesId?: Array<string>, targetedGenesGeneid?: Array<string>, targetedGenesName?: Array<string>, targetedGenesSymbol?: Array<string>, targetedGenesSynonyms?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<MeasurementSetResults>> {
        const result = this.api.measurementSetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assayTermId, assayTermTermName, auxiliarySetsId, auxiliarySetsAccession, auxiliarySetsAliases, auxiliarySetsFileSetType, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlFileSetsId, controlFileSetsAccession, controlFileSetsAliases, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, externalImageUrl, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatformId, filesSequencingPlatformTermName, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, labId, labTitle, libraryConstructionPlatformId, libraryConstructionPlatformTermName, multiomeSize, notes, preferredAssayTitle, protocols, publicationIdentifiers, publications, relatedMultiomeDatasetsId, relatedMultiomeDatasetsAccession, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatmentsId, samplesCellFateChangeTreatmentsPurpose, samplesCellFateChangeTreatmentsSummary, samplesCellFateChangeTreatmentsTreatmentType, samplesClassifications, samplesConstructLibrarySetsId, samplesConstructLibrarySetsAccession, samplesConstructLibrarySetsFileSetType, samplesConstructLibrarySetsSmallScaleGeneListId, samplesConstructLibrarySetsSmallScaleGeneListGeneid, samplesConstructLibrarySetsSmallScaleGeneListName, samplesConstructLibrarySetsSmallScaleGeneListSummary, samplesConstructLibrarySetsSmallScaleGeneListSymbol, samplesConstructLibrarySetsSummary, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModificationsId, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatmentsId, samplesTreatmentsPurpose, samplesTreatmentsSummary, samplesTreatmentsTreatmentType, sequencingLibraryTypes, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, targetedGenesId, targetedGenesGeneid, targetedGenesName, targetedGenesSymbol, targetedGenesSynonyms, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.
     * List items in the MeasurementSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assayTermId Filter by assay_term.@id
     * @param assayTermTermName Filter by assay_term.term_name
     * @param auxiliarySetsId Filter by auxiliary_sets.@id
     * @param auxiliarySetsAccession Filter by auxiliary_sets.accession
     * @param auxiliarySetsAliases Filter by auxiliary_sets.aliases
     * @param auxiliarySetsFileSetType Filter by auxiliary_sets.file_set_type
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlFileSetsId Filter by control_file_sets.@id
     * @param controlFileSetsAccession Filter by control_file_sets.accession
     * @param controlFileSetsAliases Filter by control_file_sets.aliases
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param externalImageUrl Filter by external_image_url
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatformId Filter by files.sequencing_platform.@id
     * @param filesSequencingPlatformTermName Filter by files.sequencing_platform.term_name
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param libraryConstructionPlatformId Filter by library_construction_platform.@id
     * @param libraryConstructionPlatformTermName Filter by library_construction_platform.term_name
     * @param multiomeSize Filter by multiome_size
     * @param notes Filter by notes
     * @param preferredAssayTitle Filter by preferred_assay_title
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param relatedMultiomeDatasetsId Filter by related_multiome_datasets.@id
     * @param relatedMultiomeDatasetsAccession Filter by related_multiome_datasets.accession
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatmentsId Filter by samples.cell_fate_change_treatments.@id
     * @param samplesCellFateChangeTreatmentsPurpose Filter by samples.cell_fate_change_treatments.purpose
     * @param samplesCellFateChangeTreatmentsSummary Filter by samples.cell_fate_change_treatments.summary
     * @param samplesCellFateChangeTreatmentsTreatmentType Filter by samples.cell_fate_change_treatments.treatment_type
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySetsId Filter by samples.construct_library_sets.@id
     * @param samplesConstructLibrarySetsAccession Filter by samples.construct_library_sets.accession
     * @param samplesConstructLibrarySetsFileSetType Filter by samples.construct_library_sets.file_set_type
     * @param samplesConstructLibrarySetsSmallScaleGeneListId Filter by samples.construct_library_sets.small_scale_gene_list.@id
     * @param samplesConstructLibrarySetsSmallScaleGeneListGeneid Filter by samples.construct_library_sets.small_scale_gene_list.geneid
     * @param samplesConstructLibrarySetsSmallScaleGeneListName Filter by samples.construct_library_sets.small_scale_gene_list.name
     * @param samplesConstructLibrarySetsSmallScaleGeneListSummary Filter by samples.construct_library_sets.small_scale_gene_list.summary
     * @param samplesConstructLibrarySetsSmallScaleGeneListSymbol Filter by samples.construct_library_sets.small_scale_gene_list.symbol
     * @param samplesConstructLibrarySetsSummary Filter by samples.construct_library_sets.summary
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModificationsId Filter by samples.modifications.@id
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatmentsId Filter by samples.treatments.@id
     * @param samplesTreatmentsPurpose Filter by samples.treatments.purpose
     * @param samplesTreatmentsSummary Filter by samples.treatments.summary
     * @param samplesTreatmentsTreatmentType Filter by samples.treatments.treatment_type
     * @param sequencingLibraryTypes Filter by sequencing_library_types
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param targetedGenesId Filter by targeted_genes.@id
     * @param targetedGenesGeneid Filter by targeted_genes.geneid
     * @param targetedGenesName Filter by targeted_genes.name
     * @param targetedGenesSymbol Filter by targeted_genes.symbol
     * @param targetedGenesSynonyms Filter by targeted_genes.synonyms
     * @param uuid Filter by uuid
     */
    public measurementSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assayTermId?: Array<string>, assayTermTermName?: Array<string>, auxiliarySetsId?: Array<string>, auxiliarySetsAccession?: Array<string>, auxiliarySetsAliases?: Array<string>, auxiliarySetsFileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlFileSetsId?: Array<string>, controlFileSetsAccession?: Array<string>, controlFileSetsAliases?: Array<string>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, externalImageUrl?: Array<string>, fileSetType?: Array<'experimental data'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatformId?: Array<string>, filesSequencingPlatformTermName?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, libraryConstructionPlatformId?: Array<string>, libraryConstructionPlatformTermName?: Array<string>, multiomeSize?: Array<number>, notes?: Array<string>, preferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, relatedMultiomeDatasetsId?: Array<string>, relatedMultiomeDatasetsAccession?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatmentsId?: Array<string>, samplesCellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, samplesCellFateChangeTreatmentsSummary?: Array<string>, samplesCellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySetsId?: Array<string>, samplesConstructLibrarySetsAccession?: Array<string>, samplesConstructLibrarySetsFileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>, samplesConstructLibrarySetsSmallScaleGeneListId?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListGeneid?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListName?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListSummary?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListSymbol?: Array<string>, samplesConstructLibrarySetsSummary?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModificationsId?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatmentsId?: Array<string>, samplesTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, samplesTreatmentsSummary?: Array<string>, samplesTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, sequencingLibraryTypes?: Array<'direct RNA' | 'exome capture' | 'mRNA enriched' | 'rRNA depleted' | 'polyA depleted' | 'polyA enriched'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targetedGenesId?: Array<string>, targetedGenesGeneid?: Array<string>, targetedGenesName?: Array<string>, targetedGenesSymbol?: Array<string>, targetedGenesSynonyms?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<MeasurementSetResults> {
        const result = this.api.measurementSets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assayTermId, assayTermTermName, auxiliarySetsId, auxiliarySetsAccession, auxiliarySetsAliases, auxiliarySetsFileSetType, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlFileSetsId, controlFileSetsAccession, controlFileSetsAliases, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, externalImageUrl, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatformId, filesSequencingPlatformTermName, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, labId, labTitle, libraryConstructionPlatformId, libraryConstructionPlatformTermName, multiomeSize, notes, preferredAssayTitle, protocols, publicationIdentifiers, publications, relatedMultiomeDatasetsId, relatedMultiomeDatasetsAccession, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatmentsId, samplesCellFateChangeTreatmentsPurpose, samplesCellFateChangeTreatmentsSummary, samplesCellFateChangeTreatmentsTreatmentType, samplesClassifications, samplesConstructLibrarySetsId, samplesConstructLibrarySetsAccession, samplesConstructLibrarySetsFileSetType, samplesConstructLibrarySetsSmallScaleGeneListId, samplesConstructLibrarySetsSmallScaleGeneListGeneid, samplesConstructLibrarySetsSmallScaleGeneListName, samplesConstructLibrarySetsSmallScaleGeneListSummary, samplesConstructLibrarySetsSmallScaleGeneListSymbol, samplesConstructLibrarySetsSummary, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModificationsId, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatmentsId, samplesTreatmentsPurpose, samplesTreatmentsSummary, samplesTreatmentsTreatmentType, sequencingLibraryTypes, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, targetedGenesId, targetedGenesGeneid, targetedGenesName, targetedGenesSymbol, targetedGenesSynonyms, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.
     * List items in the ModelFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public modelFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'hdf5' | 'json' | 'tar' | 'tsv'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<ModelFileResults>> {
        const result = this.api.modelFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.
     * List items in the ModelFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public modelFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'hdf5' | 'json' | 'tar' | 'tsv'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<ModelFileResults> {
        const result = this.api.modelFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.
     * List items in the ModelSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assessedGenes Filter by assessed_genes
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param inputFileSetsId Filter by input_file_sets.@id
     * @param inputFileSetsAccession Filter by input_file_sets.accession
     * @param inputFileSetsAliases Filter by input_file_sets.aliases
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param modelName Filter by model_name
     * @param modelVersion Filter by model_version
     * @param modelZooLocation Filter by model_zoo_location
     * @param notes Filter by notes
     * @param predictionObjects Filter by prediction_objects
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param softwareVersion Filter by software_version
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public modelSetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assessedGenes?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'neural network' | 'random forest' | 'decision tree' | 'support vector machine' | 'variant binding effect'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSetsId?: Array<string>, inputFileSetsAccession?: Array<string>, inputFileSetsAliases?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, modelName?: Array<string>, modelVersion?: Array<string>, modelZooLocation?: Array<string>, notes?: Array<string>, predictionObjects?: Array<'coding variants' | 'non-coding variants' | 'all variants' | 'regulatory elements' | 'genes'>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, softwareVersion?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<ModelSetResults>> {
        const result = this.api.modelSetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assessedGenes, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, inputFileSetsId, inputFileSetsAccession, inputFileSetsAliases, labId, labTitle, modelName, modelVersion, modelZooLocation, notes, predictionObjects, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, softwareVersion, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.
     * List items in the ModelSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param assessedGenes Filter by assessed_genes
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param inputFileSetsId Filter by input_file_sets.@id
     * @param inputFileSetsAccession Filter by input_file_sets.accession
     * @param inputFileSetsAliases Filter by input_file_sets.aliases
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param modelName Filter by model_name
     * @param modelVersion Filter by model_version
     * @param modelZooLocation Filter by model_zoo_location
     * @param notes Filter by notes
     * @param predictionObjects Filter by prediction_objects
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySets Filter by samples.construct_library_sets
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param softwareVersion Filter by software_version
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public modelSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assessedGenes?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'neural network' | 'random forest' | 'decision tree' | 'support vector machine' | 'variant binding effect'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSetsId?: Array<string>, inputFileSetsAccession?: Array<string>, inputFileSetsAliases?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, modelName?: Array<string>, modelVersion?: Array<string>, modelZooLocation?: Array<string>, notes?: Array<string>, predictionObjects?: Array<'coding variants' | 'non-coding variants' | 'all variants' | 'regulatory elements' | 'genes'>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, softwareVersion?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<ModelSetResults> {
        const result = this.api.modelSets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, assessedGenes, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, inputFileSetsId, inputFileSetsAccession, inputFileSetsAliases, labId, labTitle, modelName, modelVersion, modelZooLocation, notes, predictionObjects, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySets, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, softwareVersion, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.
     * List items in the MultiplexedSample collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param barcodeSampleMap Filter by barcode_sample_map
     * @param biomarkers Filter by biomarkers
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySetsId Filter by construct_library_sets.@id
     * @param constructLibrarySetsAccession Filter by construct_library_sets.accession
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificates Filter by institutional_certificates
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param multiplexedSamplesId Filter by multiplexed_samples.@id
     * @param multiplexedSamplesAccession Filter by multiplexed_samples.accession
     * @param multiplexedSamplesConstructLibrarySets Filter by multiplexed_samples.construct_library_sets
     * @param multiplexedSamplesDiseaseTermsId Filter by multiplexed_samples.disease_terms.@id
     * @param multiplexedSamplesDiseaseTermsTermName Filter by multiplexed_samples.disease_terms.term_name
     * @param multiplexedSamplesDonorsId Filter by multiplexed_samples.donors.@id
     * @param multiplexedSamplesDonorsAccession Filter by multiplexed_samples.donors.accession
     * @param multiplexedSamplesSampleTermsId Filter by multiplexed_samples.sample_terms.@id
     * @param multiplexedSamplesSampleTermsTermName Filter by multiplexed_samples.sample_terms.term_name
     * @param multiplexedSamplesStatus Filter by multiplexed_samples.status
     * @param multiplexedSamplesSummary Filter by multiplexed_samples.summary
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public multiplexedSamplesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, barcodeSampleMap?: Array<string>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySetsId?: Array<string>, constructLibrarySetsAccession?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificates?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, multiplexedSamplesId?: Array<string>, multiplexedSamplesAccession?: Array<string>, multiplexedSamplesConstructLibrarySets?: Array<string>, multiplexedSamplesDiseaseTermsId?: Array<string>, multiplexedSamplesDiseaseTermsTermName?: Array<string>, multiplexedSamplesDonorsId?: Array<string>, multiplexedSamplesDonorsAccession?: Array<string>, multiplexedSamplesSampleTermsId?: Array<string>, multiplexedSamplesSampleTermsTermName?: Array<string>, multiplexedSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, multiplexedSamplesSummary?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<MultiplexedSampleResults>> {
        const result = this.api.multiplexedSamplesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, barcodeSampleMap, biomarkers, cellularSubPool, classifications, collections, constructLibrarySetsId, constructLibrarySetsAccession, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificates, labId, labTitle, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, multiplexedSamplesId, multiplexedSamplesAccession, multiplexedSamplesConstructLibrarySets, multiplexedSamplesDiseaseTermsId, multiplexedSamplesDiseaseTermsTermName, multiplexedSamplesDonorsId, multiplexedSamplesDonorsAccession, multiplexedSamplesSampleTermsId, multiplexedSamplesSampleTermsTermName, multiplexedSamplesStatus, multiplexedSamplesSummary, notes, nucleicAcidDelivery, originOf, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.
     * List items in the MultiplexedSample collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param barcodeSampleMap Filter by barcode_sample_map
     * @param biomarkers Filter by biomarkers
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySetsId Filter by construct_library_sets.@id
     * @param constructLibrarySetsAccession Filter by construct_library_sets.accession
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificates Filter by institutional_certificates
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param multiplexedSamplesId Filter by multiplexed_samples.@id
     * @param multiplexedSamplesAccession Filter by multiplexed_samples.accession
     * @param multiplexedSamplesConstructLibrarySets Filter by multiplexed_samples.construct_library_sets
     * @param multiplexedSamplesDiseaseTermsId Filter by multiplexed_samples.disease_terms.@id
     * @param multiplexedSamplesDiseaseTermsTermName Filter by multiplexed_samples.disease_terms.term_name
     * @param multiplexedSamplesDonorsId Filter by multiplexed_samples.donors.@id
     * @param multiplexedSamplesDonorsAccession Filter by multiplexed_samples.donors.accession
     * @param multiplexedSamplesSampleTermsId Filter by multiplexed_samples.sample_terms.@id
     * @param multiplexedSamplesSampleTermsTermName Filter by multiplexed_samples.sample_terms.term_name
     * @param multiplexedSamplesStatus Filter by multiplexed_samples.status
     * @param multiplexedSamplesSummary Filter by multiplexed_samples.summary
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public multiplexedSamples(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, barcodeSampleMap?: Array<string>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySetsId?: Array<string>, constructLibrarySetsAccession?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificates?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, multiplexedSamplesId?: Array<string>, multiplexedSamplesAccession?: Array<string>, multiplexedSamplesConstructLibrarySets?: Array<string>, multiplexedSamplesDiseaseTermsId?: Array<string>, multiplexedSamplesDiseaseTermsTermName?: Array<string>, multiplexedSamplesDonorsId?: Array<string>, multiplexedSamplesDonorsAccession?: Array<string>, multiplexedSamplesSampleTermsId?: Array<string>, multiplexedSamplesSampleTermsTermName?: Array<string>, multiplexedSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, multiplexedSamplesSummary?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<MultiplexedSampleResults> {
        const result = this.api.multiplexedSamples(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, barcodeSampleMap, biomarkers, cellularSubPool, classifications, collections, constructLibrarySetsId, constructLibrarySetsAccession, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificates, labId, labTitle, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, multiplexedSamplesId, multiplexedSamplesAccession, multiplexedSamplesConstructLibrarySets, multiplexedSamplesDiseaseTermsId, multiplexedSamplesDiseaseTermsTermName, multiplexedSamplesDonorsId, multiplexedSamplesDonorsAccession, multiplexedSamplesSampleTermsId, multiplexedSamplesSampleTermsTermName, multiplexedSamplesStatus, multiplexedSamplesSummary, notes, nucleicAcidDelivery, originOf, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.
     * List items in the OpenReadingFrame collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param award Filter by award
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param geneId Filter by gene.@id
     * @param geneGeneid Filter by gene.geneid
     * @param geneSymbol Filter by gene.symbol
     * @param lab Filter by lab
     * @param notes Filter by notes
     * @param orfId Filter by orf_id
     * @param pctCoverageOrf Filter by pct_coverage_orf
     * @param pctCoverageProtein Filter by pct_coverage_protein
     * @param pctIdenticalProtein Filter by pct_identical_protein
     * @param proteinId Filter by protein_id
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedBy Filter by submitted_by
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public openReadingFramesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, award?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, geneId?: Array<string>, geneGeneid?: Array<string>, geneSymbol?: Array<string>, lab?: Array<string>, notes?: Array<string>, orfId?: Array<string>, pctCoverageOrf?: Array<number>, pctCoverageProtein?: Array<number>, pctIdenticalProtein?: Array<number>, proteinId?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedBy?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<OpenReadingFrameResults>> {
        const result = this.api.openReadingFramesWithHttpInfo(frame, query, limit, sort, id, aliases, award, creationTimestamp, dbxrefs, description, geneId, geneGeneid, geneSymbol, lab, notes, orfId, pctCoverageOrf, pctCoverageProtein, pctIdenticalProtein, proteinId, releaseTimestamp, status, submittedBy, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.
     * List items in the OpenReadingFrame collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param award Filter by award
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param geneId Filter by gene.@id
     * @param geneGeneid Filter by gene.geneid
     * @param geneSymbol Filter by gene.symbol
     * @param lab Filter by lab
     * @param notes Filter by notes
     * @param orfId Filter by orf_id
     * @param pctCoverageOrf Filter by pct_coverage_orf
     * @param pctCoverageProtein Filter by pct_coverage_protein
     * @param pctIdenticalProtein Filter by pct_identical_protein
     * @param proteinId Filter by protein_id
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedBy Filter by submitted_by
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public openReadingFrames(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, award?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, geneId?: Array<string>, geneGeneid?: Array<string>, geneSymbol?: Array<string>, lab?: Array<string>, notes?: Array<string>, orfId?: Array<string>, pctCoverageOrf?: Array<number>, pctCoverageProtein?: Array<number>, pctIdenticalProtein?: Array<number>, proteinId?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedBy?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<OpenReadingFrameResults> {
        const result = this.api.openReadingFrames(frame, query, limit, sort, id, aliases, award, creationTimestamp, dbxrefs, description, geneId, geneGeneid, geneSymbol, lab, notes, orfId, pctCoverageOrf, pctCoverageProtein, pctIdenticalProtein, proteinId, releaseTimestamp, status, submittedBy, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.
     * List items in the Page collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param award Filter by award
     * @param canonicalUri Filter by canonical_uri
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param lab Filter by lab
     * @param name Filter by name
     * @param notes Filter by notes
     * @param parent Filter by parent
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     */
    public pagesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, award?: Array<string>, canonicalUri?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, lab?: Array<string>, name?: Array<string>, notes?: Array<string>, parent?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<PageResults>> {
        const result = this.api.pagesWithHttpInfo(frame, query, limit, sort, id, aliases, award, canonicalUri, creationTimestamp, description, lab, name, notes, parent, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, title, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.
     * List items in the Page collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param award Filter by award
     * @param canonicalUri Filter by canonical_uri
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param lab Filter by lab
     * @param name Filter by name
     * @param notes Filter by notes
     * @param parent Filter by parent
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     */
    public pages(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, award?: Array<string>, canonicalUri?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, lab?: Array<string>, name?: Array<string>, notes?: Array<string>, parent?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<PageResults> {
        const result = this.api.pages(frame, query, limit, sort, id, aliases, award, canonicalUri, creationTimestamp, description, lab, name, notes, parent, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, title, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.
     * List items in the PhenotypeTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param creationTimestamp Filter by creation_timestamp
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param ontology Filter by ontology
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public phenotypeTermsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<PhenotypeTermResults>> {
        const result = this.api.phenotypeTermsWithHttpInfo(frame, query, limit, sort, id, aliases, ancestors, creationTimestamp, deprecatedNtrTerms, description, isA, name, notes, ontology, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.
     * List items in the PhenotypeTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param creationTimestamp Filter by creation_timestamp
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param ontology Filter by ontology
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public phenotypeTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<PhenotypeTermResults> {
        const result = this.api.phenotypeTerms(frame, query, limit, sort, id, aliases, ancestors, creationTimestamp, deprecatedNtrTerms, description, isA, name, notes, ontology, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.
     * List items in the PhenotypicFeature collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param featureId Filter by feature.@id
     * @param featureTermId Filter by feature.term_id
     * @param featureTermName Filter by feature.term_name
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param observationDate Filter by observation_date
     * @param quantity Filter by quantity
     * @param quantityUnits Filter by quantity_units
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public phenotypicFeaturesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, featureId?: Array<string>, featureTermId?: Array<string>, featureTermName?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, observationDate?: Array<string>, quantity?: Array<number>, quantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<PhenotypicFeatureResults>> {
        const result = this.api.phenotypicFeaturesWithHttpInfo(frame, query, limit, sort, id, aliases, awardId, awardComponent, creationTimestamp, description, featureId, featureTermId, featureTermName, labId, labTitle, notes, observationDate, quantity, quantityUnits, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.
     * List items in the PhenotypicFeature collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param featureId Filter by feature.@id
     * @param featureTermId Filter by feature.term_id
     * @param featureTermName Filter by feature.term_name
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param observationDate Filter by observation_date
     * @param quantity Filter by quantity
     * @param quantityUnits Filter by quantity_units
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     */
    public phenotypicFeatures(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, featureId?: Array<string>, featureTermId?: Array<string>, featureTermName?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, observationDate?: Array<string>, quantity?: Array<number>, quantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<PhenotypicFeatureResults> {
        const result = this.api.phenotypicFeatures(frame, query, limit, sort, id, aliases, awardId, awardComponent, creationTimestamp, description, featureId, featureTermId, featureTermName, labId, labTitle, notes, observationDate, quantity, quantityUnits, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.
     * List items in the PlatformTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param company Filter by company
     * @param creationTimestamp Filter by creation_timestamp
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param ontology Filter by ontology
     * @param releaseTimestamp Filter by release_timestamp
     * @param sequencingKits Filter by sequencing_kits
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public platformTermsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, company?: Array<'10X Genomics' | 'Illumina' | 'Life Technologies' | 'Oxford Nanopore Technologies' | 'Pacific Biosciences' | 'Parse Biosciences' | 'Roche'>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, releaseTimestamp?: Array<string>, sequencingKits?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<PlatformTermResults>> {
        const result = this.api.platformTermsWithHttpInfo(frame, query, limit, sort, id, aliases, ancestors, company, creationTimestamp, deprecatedNtrTerms, description, isA, name, notes, ontology, releaseTimestamp, sequencingKits, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.
     * List items in the PlatformTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param company Filter by company
     * @param creationTimestamp Filter by creation_timestamp
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param ontology Filter by ontology
     * @param releaseTimestamp Filter by release_timestamp
     * @param sequencingKits Filter by sequencing_kits
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public platformTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, company?: Array<'10X Genomics' | 'Illumina' | 'Life Technologies' | 'Oxford Nanopore Technologies' | 'Pacific Biosciences' | 'Parse Biosciences' | 'Roche'>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, releaseTimestamp?: Array<string>, sequencingKits?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<PlatformTermResults> {
        const result = this.api.platformTerms(frame, query, limit, sort, id, aliases, ancestors, company, creationTimestamp, deprecatedNtrTerms, description, isA, name, notes, ontology, releaseTimestamp, sequencingKits, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.
     * List items in the PredictionSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param inputFileSets Filter by input_file_sets
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param largeScaleGeneListId Filter by large_scale_gene_list.@id
     * @param largeScaleGeneListAccession Filter by large_scale_gene_list.accession
     * @param largeScaleGeneListAliases Filter by large_scale_gene_list.aliases
     * @param largeScaleLociListId Filter by large_scale_loci_list.@id
     * @param largeScaleLociListAccession Filter by large_scale_loci_list.accession
     * @param largeScaleLociListAliases Filter by large_scale_loci_list.aliases
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySetsId Filter by samples.construct_library_sets.@id
     * @param samplesConstructLibrarySetsAccession Filter by samples.construct_library_sets.accession
     * @param samplesConstructLibrarySetsSummary Filter by samples.construct_library_sets.summary
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param scope Filter by scope
     * @param smallScaleGeneListId Filter by small_scale_gene_list.@id
     * @param smallScaleGeneListGeneid Filter by small_scale_gene_list.geneid
     * @param smallScaleGeneListName Filter by small_scale_gene_list.name
     * @param smallScaleGeneListSymbol Filter by small_scale_gene_list.symbol
     * @param smallScaleGeneListSynonyms Filter by small_scale_gene_list.synonyms
     * @param smallScaleLociList Filter by small_scale_loci_list
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public predictionSetsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSets?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, largeScaleGeneListId?: Array<string>, largeScaleGeneListAccession?: Array<string>, largeScaleGeneListAliases?: Array<string>, largeScaleLociListId?: Array<string>, largeScaleLociListAccession?: Array<string>, largeScaleLociListAliases?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySetsId?: Array<string>, samplesConstructLibrarySetsAccession?: Array<string>, samplesConstructLibrarySetsSummary?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, scope?: Array<'genes' | 'loci' | 'genome-wide'>, smallScaleGeneListId?: Array<string>, smallScaleGeneListGeneid?: Array<string>, smallScaleGeneListName?: Array<string>, smallScaleGeneListSymbol?: Array<string>, smallScaleGeneListSynonyms?: Array<string>, smallScaleLociList?: Array<Locus>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<PredictionSetResults>> {
        const result = this.api.predictionSetsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, inputFileSets, labId, labTitle, largeScaleGeneListId, largeScaleGeneListAccession, largeScaleGeneListAliases, largeScaleLociListId, largeScaleLociListAccession, largeScaleLociListAliases, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySetsId, samplesConstructLibrarySetsAccession, samplesConstructLibrarySetsSummary, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, scope, smallScaleGeneListId, smallScaleGeneListGeneid, smallScaleGeneListName, smallScaleGeneListSymbol, smallScaleGeneListSynonyms, smallScaleLociList, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.
     * List items in the PredictionSet collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param awardContactPiId Filter by award.contact_pi.@id
     * @param awardContactPiTitle Filter by award.contact_pi.title
     * @param awardTitle Filter by award.title
     * @param collections Filter by collections
     * @param controlForId Filter by control_for.@id
     * @param controlForAccession Filter by control_for.accession
     * @param controlForAliases Filter by control_for.aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param donorsId Filter by donors.@id
     * @param donorsAccession Filter by donors.accession
     * @param donorsAliases Filter by donors.aliases
     * @param donorsSex Filter by donors.sex
     * @param donorsStatus Filter by donors.status
     * @param donorsTaxa Filter by donors.taxa
     * @param fileSetType Filter by file_set_type
     * @param filesId Filter by files.@id
     * @param filesAccession Filter by files.accession
     * @param filesAliases Filter by files.aliases
     * @param filesContentType Filter by files.content_type
     * @param filesCreationTimestamp Filter by files.creation_timestamp
     * @param filesFileFormat Filter by files.file_format
     * @param filesFileSize Filter by files.file_size
     * @param filesHref Filter by files.href
     * @param filesS3Uri Filter by files.s3_uri
     * @param filesSequencingPlatform Filter by files.sequencing_platform
     * @param filesSubmittedFileName Filter by files.submitted_file_name
     * @param filesUploadStatus Filter by files.upload_status
     * @param inputFileSetFor Filter by input_file_set_for
     * @param inputFileSets Filter by input_file_sets
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param largeScaleGeneListId Filter by large_scale_gene_list.@id
     * @param largeScaleGeneListAccession Filter by large_scale_gene_list.accession
     * @param largeScaleGeneListAliases Filter by large_scale_gene_list.aliases
     * @param largeScaleLociListId Filter by large_scale_loci_list.@id
     * @param largeScaleLociListAccession Filter by large_scale_loci_list.accession
     * @param largeScaleLociListAliases Filter by large_scale_loci_list.aliases
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param samplesId Filter by samples.@id
     * @param samplesAccession Filter by samples.accession
     * @param samplesAliases Filter by samples.aliases
     * @param samplesCellFateChangeTreatments Filter by samples.cell_fate_change_treatments
     * @param samplesClassifications Filter by samples.classifications
     * @param samplesConstructLibrarySetsId Filter by samples.construct_library_sets.@id
     * @param samplesConstructLibrarySetsAccession Filter by samples.construct_library_sets.accession
     * @param samplesConstructLibrarySetsSummary Filter by samples.construct_library_sets.summary
     * @param samplesDiseaseTermsId Filter by samples.disease_terms.@id
     * @param samplesDiseaseTermsTermName Filter by samples.disease_terms.term_name
     * @param samplesModifications Filter by samples.modifications
     * @param samplesSampleTermsId Filter by samples.sample_terms.@id
     * @param samplesSampleTermsAliases Filter by samples.sample_terms.aliases
     * @param samplesSampleTermsStatus Filter by samples.sample_terms.status
     * @param samplesSampleTermsSummary Filter by samples.sample_terms.summary
     * @param samplesSampleTermsTermName Filter by samples.sample_terms.term_name
     * @param samplesStatus Filter by samples.status
     * @param samplesSummary Filter by samples.summary
     * @param samplesTargetedSampleTermId Filter by samples.targeted_sample_term.@id
     * @param samplesTargetedSampleTermTermName Filter by samples.targeted_sample_term.term_name
     * @param samplesTaxa Filter by samples.taxa
     * @param samplesTreatments Filter by samples.treatments
     * @param scope Filter by scope
     * @param smallScaleGeneListId Filter by small_scale_gene_list.@id
     * @param smallScaleGeneListGeneid Filter by small_scale_gene_list.geneid
     * @param smallScaleGeneListName Filter by small_scale_gene_list.name
     * @param smallScaleGeneListSymbol Filter by small_scale_gene_list.symbol
     * @param smallScaleGeneListSynonyms Filter by small_scale_gene_list.synonyms
     * @param smallScaleLociList Filter by small_scale_loci_list
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFilesTimestamp Filter by submitted_files_timestamp
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public predictionSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSets?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, largeScaleGeneListId?: Array<string>, largeScaleGeneListAccession?: Array<string>, largeScaleGeneListAliases?: Array<string>, largeScaleLociListId?: Array<string>, largeScaleLociListAccession?: Array<string>, largeScaleLociListAliases?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySetsId?: Array<string>, samplesConstructLibrarySetsAccession?: Array<string>, samplesConstructLibrarySetsSummary?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, scope?: Array<'genes' | 'loci' | 'genome-wide'>, smallScaleGeneListId?: Array<string>, smallScaleGeneListGeneid?: Array<string>, smallScaleGeneListName?: Array<string>, smallScaleGeneListSymbol?: Array<string>, smallScaleGeneListSynonyms?: Array<string>, smallScaleLociList?: Array<Locus>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<PredictionSetResults> {
        const result = this.api.predictionSets(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, awardContactPiId, awardContactPiTitle, awardTitle, collections, controlForId, controlForAccession, controlForAliases, creationTimestamp, dbxrefs, description, documents, donorsId, donorsAccession, donorsAliases, donorsSex, donorsStatus, donorsTaxa, fileSetType, filesId, filesAccession, filesAliases, filesContentType, filesCreationTimestamp, filesFileFormat, filesFileSize, filesHref, filesS3Uri, filesSequencingPlatform, filesSubmittedFileName, filesUploadStatus, inputFileSetFor, inputFileSets, labId, labTitle, largeScaleGeneListId, largeScaleGeneListAccession, largeScaleGeneListAliases, largeScaleLociListId, largeScaleLociListAccession, largeScaleLociListAliases, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, samplesId, samplesAccession, samplesAliases, samplesCellFateChangeTreatments, samplesClassifications, samplesConstructLibrarySetsId, samplesConstructLibrarySetsAccession, samplesConstructLibrarySetsSummary, samplesDiseaseTermsId, samplesDiseaseTermsTermName, samplesModifications, samplesSampleTermsId, samplesSampleTermsAliases, samplesSampleTermsStatus, samplesSampleTermsSummary, samplesSampleTermsTermName, samplesStatus, samplesSummary, samplesTargetedSampleTermId, samplesTargetedSampleTermTermName, samplesTaxa, samplesTreatments, scope, smallScaleGeneListId, smallScaleGeneListGeneid, smallScaleGeneListName, smallScaleGeneListSymbol, smallScaleGeneListSynonyms, smallScaleLociList, status, submittedById, submittedByTitle, submittedFilesTimestamp, submitterComment, summary, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.
     * List items in the PrimaryCell collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFrom Filter by originated_from
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param passageNumber Filter by passage_number
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public primaryCellsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, passageNumber?: Array<number>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<PrimaryCellResults>> {
        const result = this.api.primaryCellsWithHttpInfo(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFrom, partOf, parts, passageNumber, pooledFrom, pooledIn, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.
     * List items in the PrimaryCell collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFrom Filter by originated_from
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param passageNumber Filter by passage_number
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public primaryCells(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, passageNumber?: Array<number>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<PrimaryCellResults> {
        const result = this.api.primaryCells(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFrom, partOf, parts, passageNumber, pooledFrom, pooledIn, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.
     * List items in the Publication collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param _abstract Filter by abstract
     * @param aliases Filter by aliases
     * @param authors Filter by authors
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param datePublished Filter by date_published
     * @param dateRevised Filter by date_revised
     * @param description Filter by description
     * @param donors Filter by donors
     * @param fileSets Filter by file_sets
     * @param issue Filter by issue
     * @param journal Filter by journal
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param page Filter by page
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publicationYear Filter by publication_year
     * @param publishedBy Filter by published_by
     * @param releaseTimestamp Filter by release_timestamp
     * @param samples Filter by samples
     * @param software Filter by software
     * @param softwareVersions Filter by software_versions
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     * @param volume Filter by volume
     * @param workflows Filter by workflows
     */
    public publicationsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, _abstract?: Array<string>, aliases?: Array<string>, authors?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, datePublished?: Array<string>, dateRevised?: Array<string>, description?: Array<string>, donors?: Array<string>, fileSets?: Array<string>, issue?: Array<string>, journal?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, page?: Array<string>, publicationIdentifiers?: Array<string>, publicationYear?: Array<number>, publishedBy?: Array<'community' | 'IGVF' | 'ENCODE'>, releaseTimestamp?: Array<string>, samples?: Array<string>, software?: Array<string>, softwareVersions?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, volume?: Array<string>, workflows?: Array<string>, _options?: Configuration): Promise<HttpInfo<PublicationResults>> {
        const result = this.api.publicationsWithHttpInfo(frame, query, limit, sort, id, _abstract, aliases, authors, awardId, awardComponent, creationTimestamp, datePublished, dateRevised, description, donors, fileSets, issue, journal, labId, labTitle, notes, page, publicationIdentifiers, publicationYear, publishedBy, releaseTimestamp, samples, software, softwareVersions, status, submittedById, submittedByTitle, submitterComment, summary, title, uuid, volume, workflows, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.
     * List items in the Publication collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param _abstract Filter by abstract
     * @param aliases Filter by aliases
     * @param authors Filter by authors
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param datePublished Filter by date_published
     * @param dateRevised Filter by date_revised
     * @param description Filter by description
     * @param donors Filter by donors
     * @param fileSets Filter by file_sets
     * @param issue Filter by issue
     * @param journal Filter by journal
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param notes Filter by notes
     * @param page Filter by page
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publicationYear Filter by publication_year
     * @param publishedBy Filter by published_by
     * @param releaseTimestamp Filter by release_timestamp
     * @param samples Filter by samples
     * @param software Filter by software
     * @param softwareVersions Filter by software_versions
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     * @param volume Filter by volume
     * @param workflows Filter by workflows
     */
    public publications(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, _abstract?: Array<string>, aliases?: Array<string>, authors?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, datePublished?: Array<string>, dateRevised?: Array<string>, description?: Array<string>, donors?: Array<string>, fileSets?: Array<string>, issue?: Array<string>, journal?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, page?: Array<string>, publicationIdentifiers?: Array<string>, publicationYear?: Array<number>, publishedBy?: Array<'community' | 'IGVF' | 'ENCODE'>, releaseTimestamp?: Array<string>, samples?: Array<string>, software?: Array<string>, softwareVersions?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, volume?: Array<string>, workflows?: Array<string>, _options?: Configuration): Promise<PublicationResults> {
        const result = this.api.publications(frame, query, limit, sort, id, _abstract, aliases, authors, awardId, awardComponent, creationTimestamp, datePublished, dateRevised, description, donors, fileSets, issue, journal, labId, labTitle, notes, page, publicationIdentifiers, publicationYear, publishedBy, releaseTimestamp, samples, software, softwareVersions, status, submittedById, submittedByTitle, submitterComment, summary, title, uuid, volume, workflows, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.
     * List items in the ReferenceFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param external Filter by external
     * @param externalId Filter by external_id
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileFormatType Filter by file_format_type
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param sourceUrl Filter by source_url
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public referenceFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'hg19' | 'GRCm39' | 'mm10'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, external?: Array<boolean>, externalId?: Array<string>, fileFormat?: Array<'bed' | 'csv' | 'dat' | 'fasta' | 'gaf' | 'gds' | 'gtf' | 'obo' | 'owl' | 'PWM' | 'tar' | 'tsv' | 'txt' | 'vcf' | 'xml'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, sourceUrl?: Array<string>, sources?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<ReferenceFileResults>> {
        const result = this.api.referenceFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, assembly, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, external, externalId, fileFormat, fileFormatSpecifications, fileFormatType, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, sourceUrl, sources, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.
     * List items in the ReferenceFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param external Filter by external
     * @param externalId Filter by external_id
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileFormatType Filter by file_format_type
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param sourceUrl Filter by source_url
     * @param sources Filter by sources
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public referenceFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'hg19' | 'GRCm39' | 'mm10'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, external?: Array<boolean>, externalId?: Array<string>, fileFormat?: Array<'bed' | 'csv' | 'dat' | 'fasta' | 'gaf' | 'gds' | 'gtf' | 'obo' | 'owl' | 'PWM' | 'tar' | 'tsv' | 'txt' | 'vcf' | 'xml'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, sourceUrl?: Array<string>, sources?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<ReferenceFileResults> {
        const result = this.api.referenceFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, assembly, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, external, externalId, fileFormat, fileFormatSpecifications, fileFormatType, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, sourceUrl, sources, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).
     * Generate a report based on search query. All results are returned.
     * @param query Query string for searching.
     * @param type Filter by item type.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all.
     * @param fieldFilters Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;}
     * @param include_fields Fields to include in the response. Can be repeated for multiple fields.
     * @param frame Object with links, or object with some links embedded.
     */
    public reportWithHttpInfo(query?: string, type?: Array<string>, limit?: Limit, sort?: Array<string>, fieldFilters?: any, include_fields?: Array<string>, frame?: 'object' | 'embedded', _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.reportWithHttpInfo(query, type, limit, sort, fieldFilters, include_fields, frame, _options);
        return result.toPromise();
    }

    /**
     * Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).
     * Generate a report based on search query. All results are returned.
     * @param query Query string for searching.
     * @param type Filter by item type.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all.
     * @param fieldFilters Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;}
     * @param include_fields Fields to include in the response. Can be repeated for multiple fields.
     * @param frame Object with links, or object with some links embedded.
     */
    public report(query?: string, type?: Array<string>, limit?: Limit, sort?: Array<string>, fieldFilters?: any, include_fields?: Array<string>, frame?: 'object' | 'embedded', _options?: Configuration): Promise<string> {
        const result = this.api.report(query, type, limit, sort, fieldFilters, include_fields, frame, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.
     * List items in the RodentDonor collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param genotype Filter by genotype
     * @param individualRodent Filter by individual_rodent
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param notes Filter by notes
     * @param phenotypicFeaturesId Filter by phenotypic_features.@id
     * @param phenotypicFeaturesFeatureId Filter by phenotypic_features.feature.@id
     * @param phenotypicFeaturesFeatureTermId Filter by phenotypic_features.feature.term_id
     * @param phenotypicFeaturesFeatureTermName Filter by phenotypic_features.feature.term_name
     * @param phenotypicFeaturesObservationDate Filter by phenotypic_features.observation_date
     * @param phenotypicFeaturesQuantityUnits Filter by phenotypic_features.quantity_units
     * @param productId Filter by product_id
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param rodentIdentifier Filter by rodent_identifier
     * @param sex Filter by sex
     * @param sourcesId Filter by sources.@id
     * @param status Filter by status
     * @param strain Filter by strain
     * @param strainBackground Filter by strain_background
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public rodentDonorsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, genotype?: Array<string>, individualRodent?: Array<boolean>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, notes?: Array<string>, phenotypicFeaturesId?: Array<string>, phenotypicFeaturesFeatureId?: Array<string>, phenotypicFeaturesFeatureTermId?: Array<string>, phenotypicFeaturesFeatureTermName?: Array<string>, phenotypicFeaturesObservationDate?: Array<string>, phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, productId?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, rodentIdentifier?: Array<string>, sex?: Array<'male' | 'female' | 'unspecified'>, sourcesId?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, strain?: Array<string>, strainBackground?: Array<'A/J (AJ)' | 'C57BL/6J (B6)' | '129S1/SvImJ (129)' | 'NOD/ShiLtJ (NOD)' | 'NZO/H1LtJ (NZO)' | 'CAST/EiJ (CAST)' | 'PWK/PhJ (PWK)' | 'WSB/EiJ (WSB)' | 'CAST (M. m. castaneus)' | 'WSB (M. m. domesticus)' | 'PWK (M. m. musculus)'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Mus musculus'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<RodentDonorResults>> {
        const result = this.api.rodentDonorsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, collections, creationTimestamp, dbxrefs, description, documents, genotype, individualRodent, labId, labTitle, lotId, notes, phenotypicFeaturesId, phenotypicFeaturesFeatureId, phenotypicFeaturesFeatureTermId, phenotypicFeaturesFeatureTermName, phenotypicFeaturesObservationDate, phenotypicFeaturesQuantityUnits, productId, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, rodentIdentifier, sex, sourcesId, status, strain, strainBackground, submittedById, submittedByTitle, submitterComment, summary, taxa, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.
     * List items in the RodentDonor collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param genotype Filter by genotype
     * @param individualRodent Filter by individual_rodent
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param notes Filter by notes
     * @param phenotypicFeaturesId Filter by phenotypic_features.@id
     * @param phenotypicFeaturesFeatureId Filter by phenotypic_features.feature.@id
     * @param phenotypicFeaturesFeatureTermId Filter by phenotypic_features.feature.term_id
     * @param phenotypicFeaturesFeatureTermName Filter by phenotypic_features.feature.term_name
     * @param phenotypicFeaturesObservationDate Filter by phenotypic_features.observation_date
     * @param phenotypicFeaturesQuantityUnits Filter by phenotypic_features.quantity_units
     * @param productId Filter by product_id
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param rodentIdentifier Filter by rodent_identifier
     * @param sex Filter by sex
     * @param sourcesId Filter by sources.@id
     * @param status Filter by status
     * @param strain Filter by strain
     * @param strainBackground Filter by strain_background
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public rodentDonors(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, genotype?: Array<string>, individualRodent?: Array<boolean>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, notes?: Array<string>, phenotypicFeaturesId?: Array<string>, phenotypicFeaturesFeatureId?: Array<string>, phenotypicFeaturesFeatureTermId?: Array<string>, phenotypicFeaturesFeatureTermName?: Array<string>, phenotypicFeaturesObservationDate?: Array<string>, phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, productId?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, rodentIdentifier?: Array<string>, sex?: Array<'male' | 'female' | 'unspecified'>, sourcesId?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, strain?: Array<string>, strainBackground?: Array<'A/J (AJ)' | 'C57BL/6J (B6)' | '129S1/SvImJ (129)' | 'NOD/ShiLtJ (NOD)' | 'NZO/H1LtJ (NZO)' | 'CAST/EiJ (CAST)' | 'PWK/PhJ (PWK)' | 'WSB/EiJ (WSB)' | 'CAST (M. m. castaneus)' | 'WSB (M. m. domesticus)' | 'PWK (M. m. musculus)'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Mus musculus'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RodentDonorResults> {
        const result = this.api.rodentDonors(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, collections, creationTimestamp, dbxrefs, description, documents, genotype, individualRodent, labId, labTitle, lotId, notes, phenotypicFeaturesId, phenotypicFeaturesFeatureId, phenotypicFeaturesFeatureTermId, phenotypicFeaturesFeatureTermName, phenotypicFeaturesObservationDate, phenotypicFeaturesQuantityUnits, productId, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, rodentIdentifier, sex, sourcesId, status, strain, strainBackground, submittedById, submittedByTitle, submitterComment, summary, taxa, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.
     * List items in the SampleTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param cellSlims Filter by cell_slims
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param developmentalSlims Filter by developmental_slims
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param ontology Filter by ontology
     * @param organSlims Filter by organ_slims
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param systemSlims Filter by system_slims
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public sampleTermsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, cellSlims?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, developmentalSlims?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, organSlims?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, systemSlims?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<SampleTermResults>> {
        const result = this.api.sampleTermsWithHttpInfo(frame, query, limit, sort, id, aliases, ancestors, cellSlims, creationTimestamp, dbxrefs, deprecatedNtrTerms, description, developmentalSlims, isA, name, notes, ontology, organSlims, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, systemSlims, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.
     * List items in the SampleTerm collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param ancestors Filter by ancestors
     * @param cellSlims Filter by cell_slims
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param deprecatedNtrTerms Filter by deprecated_ntr_terms
     * @param description Filter by description
     * @param developmentalSlims Filter by developmental_slims
     * @param isA Filter by is_a
     * @param name Filter by name
     * @param notes Filter by notes
     * @param ontology Filter by ontology
     * @param organSlims Filter by organ_slims
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param synonyms Filter by synonyms
     * @param systemSlims Filter by system_slims
     * @param termId Filter by term_id
     * @param termName Filter by term_name
     * @param uuid Filter by uuid
     */
    public sampleTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, cellSlims?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, developmentalSlims?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, organSlims?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, systemSlims?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<SampleTermResults> {
        const result = this.api.sampleTerms(frame, query, limit, sort, id, aliases, ancestors, cellSlims, creationTimestamp, dbxrefs, deprecatedNtrTerms, description, developmentalSlims, isA, name, notes, ontology, organSlims, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, synonyms, systemSlims, termId, termName, uuid, _options);
        return result.toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schema for item type
     * @param itemType The name of the item type
     */
    public schemaForItemTypeWithHttpInfo(itemType: ItemType, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.schemaForItemTypeWithHttpInfo(itemType, _options);
        return result.toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schema for item type
     * @param itemType The name of the item type
     */
    public schemaForItemType(itemType: ItemType, _options?: Configuration): Promise<any> {
        const result = this.api.schemaForItemType(itemType, _options);
        return result.toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schemas for all item types
     */
    public schemasWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.schemasWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schemas for all item types
     */
    public schemas(_options?: Configuration): Promise<any> {
        const result = this.api.schemas(_options);
        return result.toPromise();
    }

    /**
     * Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.
     * Search for items in the IGVF Project.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param type Filter by item type.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all.
     * @param fieldFilters Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;}
     */
    public searchWithHttpInfo(frame: 'object', query?: string, type?: Array<string>, limit?: Limit, sort?: Array<string>, fieldFilters?: any, _options?: Configuration): Promise<HttpInfo<SearchResults>> {
        const result = this.api.searchWithHttpInfo(frame, query, type, limit, sort, fieldFilters, _options);
        return result.toPromise();
    }

    /**
     * Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.
     * Search for items in the IGVF Project.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param type Filter by item type.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all.
     * @param fieldFilters Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;}
     */
    public search(frame: 'object', query?: string, type?: Array<string>, limit?: Limit, sort?: Array<string>, fieldFilters?: any, _options?: Configuration): Promise<SearchResults> {
        const result = this.api.search(frame, query, type, limit, sort, fieldFilters, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.
     * List items in the SequenceFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param flowcellId Filter by flowcell_id
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param illuminaReadType Filter by illumina_read_type
     * @param index Filter by index
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lane Filter by lane
     * @param lociListFor Filter by loci_list_for
     * @param maximumReadLength Filter by maximum_read_length
     * @param md5sum Filter by md5sum
     * @param meanReadLength Filter by mean_read_length
     * @param minimumReadLength Filter by minimum_read_length
     * @param notes Filter by notes
     * @param readCount Filter by read_count
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param seqspecs Filter by seqspecs
     * @param sequencingKit Filter by sequencing_kit
     * @param sequencingPlatform Filter by sequencing_platform
     * @param sequencingRun Filter by sequencing_run
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public sequenceFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bam' | 'fastq' | 'pod5'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, flowcellId?: Array<string>, geneListFor?: Array<string>, href?: Array<string>, illuminaReadType?: Array<'R1' | 'R2' | 'R3' | 'I1' | 'I2'>, index?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lane?: Array<number>, lociListFor?: Array<string>, maximumReadLength?: Array<number>, md5sum?: Array<string>, meanReadLength?: Array<number>, minimumReadLength?: Array<number>, notes?: Array<string>, readCount?: Array<number>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, seqspecs?: Array<string>, sequencingKit?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>, sequencingPlatform?: Array<string>, sequencingRun?: Array<number>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<SequenceFileResults>> {
        const result = this.api.sequenceFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, flowcellId, geneListFor, href, illuminaReadType, index, inputFileFor, integratedIn, labId, labTitle, lane, lociListFor, maximumReadLength, md5sum, meanReadLength, minimumReadLength, notes, readCount, releaseTimestamp, revokeDetail, s3Uri, seqspecs, sequencingKit, sequencingPlatform, sequencingRun, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.
     * List items in the SequenceFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param flowcellId Filter by flowcell_id
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param illuminaReadType Filter by illumina_read_type
     * @param index Filter by index
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lane Filter by lane
     * @param lociListFor Filter by loci_list_for
     * @param maximumReadLength Filter by maximum_read_length
     * @param md5sum Filter by md5sum
     * @param meanReadLength Filter by mean_read_length
     * @param minimumReadLength Filter by minimum_read_length
     * @param notes Filter by notes
     * @param readCount Filter by read_count
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param seqspecs Filter by seqspecs
     * @param sequencingKit Filter by sequencing_kit
     * @param sequencingPlatform Filter by sequencing_platform
     * @param sequencingRun Filter by sequencing_run
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public sequenceFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bam' | 'fastq' | 'pod5'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, flowcellId?: Array<string>, geneListFor?: Array<string>, href?: Array<string>, illuminaReadType?: Array<'R1' | 'R2' | 'R3' | 'I1' | 'I2'>, index?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lane?: Array<number>, lociListFor?: Array<string>, maximumReadLength?: Array<number>, md5sum?: Array<string>, meanReadLength?: Array<number>, minimumReadLength?: Array<number>, notes?: Array<string>, readCount?: Array<number>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, seqspecs?: Array<string>, sequencingKit?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>, sequencingPlatform?: Array<string>, sequencingRun?: Array<number>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<SequenceFileResults> {
        const result = this.api.sequenceFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, flowcellId, geneListFor, href, illuminaReadType, index, inputFileFor, integratedIn, labId, labTitle, lane, lociListFor, maximumReadLength, md5sum, meanReadLength, minimumReadLength, notes, readCount, releaseTimestamp, revokeDetail, s3Uri, seqspecs, sequencingKit, sequencingPlatform, sequencingRun, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.
     * List items in the SignalFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentSummary Filter by content_summary
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param filtered Filter by filtered
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param normalized Filter by normalized
     * @param notes Filter by notes
     * @param referenceFiles Filter by reference_files
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param startViewPosition Filter by start_view_position
     * @param status Filter by status
     * @param strandSpecificity Filter by strand_specificity
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public signalFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bigWig'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, filtered?: Array<boolean>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, normalized?: Array<boolean>, notes?: Array<string>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, startViewPosition?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, strandSpecificity?: Array<'plus' | 'minus' | 'unstranded'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<SignalFileResults>> {
        const result = this.api.signalFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, assembly, awardId, awardComponent, collections, contentMd5sum, contentSummary, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, filtered, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, normalized, notes, referenceFiles, releaseTimestamp, revokeDetail, s3Uri, startViewPosition, status, strandSpecificity, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.
     * List items in the SignalFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentSummary Filter by content_summary
     * @param contentType Filter by content_type
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param filtered Filter by filtered
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param normalized Filter by normalized
     * @param notes Filter by notes
     * @param referenceFiles Filter by reference_files
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param startViewPosition Filter by start_view_position
     * @param status Filter by status
     * @param strandSpecificity Filter by strand_specificity
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public signalFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bigWig'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, filtered?: Array<boolean>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, normalized?: Array<boolean>, notes?: Array<string>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, startViewPosition?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, strandSpecificity?: Array<'plus' | 'minus' | 'unstranded'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<SignalFileResults> {
        const result = this.api.signalFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, assembly, awardId, awardComponent, collections, contentMd5sum, contentSummary, contentType, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileSet, fileSize, filtered, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, normalized, notes, referenceFiles, releaseTimestamp, revokeDetail, s3Uri, startViewPosition, status, strandSpecificity, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.
     * List items in the Software collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param sourceUrl Filter by source_url
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param usedBy Filter by used_by
     * @param uuid Filter by uuid
     * @param versions Filter by versions
     */
    public softwareWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, sourceUrl?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, usedBy?: Array<'consortium analysis' | 'DACC' | 'processing pipelines'>, uuid?: Array<string>, versions?: Array<string>, _options?: Configuration): Promise<HttpInfo<SoftwareResults>> {
        const result = this.api.softwareWithHttpInfo(frame, query, limit, sort, id, aliases, awardId, awardComponent, creationTimestamp, description, labId, labTitle, name, notes, publicationIdentifiers, publications, releaseTimestamp, sourceUrl, status, submittedById, submittedByTitle, submitterComment, summary, title, usedBy, uuid, versions, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.
     * List items in the Software collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param sourceUrl Filter by source_url
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param usedBy Filter by used_by
     * @param uuid Filter by uuid
     * @param versions Filter by versions
     */
    public software(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, sourceUrl?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, usedBy?: Array<'consortium analysis' | 'DACC' | 'processing pipelines'>, uuid?: Array<string>, versions?: Array<string>, _options?: Configuration): Promise<SoftwareResults> {
        const result = this.api.software(frame, query, limit, sort, id, aliases, awardId, awardComponent, creationTimestamp, description, labId, labTitle, name, notes, publicationIdentifiers, publications, releaseTimestamp, sourceUrl, status, submittedById, submittedByTitle, submitterComment, summary, title, usedBy, uuid, versions, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.
     * List items in the SoftwareVersion collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param downloadId Filter by download_id
     * @param downloadedUrl Filter by downloaded_url
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param softwareId Filter by software.@id
     * @param softwareTitle Filter by software.title
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     * @param version Filter by version
     */
    public softwareVersionsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, downloadId?: Array<string>, downloadedUrl?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, softwareId?: Array<string>, softwareTitle?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, version?: Array<string>, _options?: Configuration): Promise<HttpInfo<SoftwareVersionResults>> {
        const result = this.api.softwareVersionsWithHttpInfo(frame, query, limit, sort, id, aliases, awardId, awardComponent, creationTimestamp, description, downloadId, downloadedUrl, labId, labTitle, name, notes, publicationIdentifiers, publications, releaseTimestamp, softwareId, softwareTitle, status, submittedById, submittedByTitle, submitterComment, summary, uuid, version, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.
     * List items in the SoftwareVersion collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param downloadId Filter by download_id
     * @param downloadedUrl Filter by downloaded_url
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param softwareId Filter by software.@id
     * @param softwareTitle Filter by software.title
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     * @param version Filter by version
     */
    public softwareVersions(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, downloadId?: Array<string>, downloadedUrl?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, softwareId?: Array<string>, softwareTitle?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, version?: Array<string>, _options?: Configuration): Promise<SoftwareVersionResults> {
        const result = this.api.softwareVersions(frame, query, limit, sort, id, aliases, awardId, awardComponent, creationTimestamp, description, downloadId, downloadedUrl, labId, labTitle, name, notes, publicationIdentifiers, publications, releaseTimestamp, softwareId, softwareTitle, status, submittedById, submittedByTitle, submitterComment, summary, uuid, version, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.
     * List items in the Source collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param name Filter by name
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public sourcesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, name?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<SourceResults>> {
        const result = this.api.sourcesWithHttpInfo(frame, query, limit, sort, id, aliases, creationTimestamp, description, name, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, title, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.
     * List items in the Source collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param name Filter by name
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param url Filter by url
     * @param uuid Filter by uuid
     */
    public sources(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, name?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<SourceResults> {
        const result = this.api.sources(frame, query, limit, sort, id, aliases, creationTimestamp, description, name, notes, releaseTimestamp, status, submittedById, submittedByTitle, submitterComment, summary, title, url, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.
     * List items in the TabularFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileFormatType Filter by file_format_type
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public tabularFilesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bed' | 'csv' | 'gtf' | 'tsv' | 'txt' | 'vcf'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<HttpInfo<TabularFileResults>> {
        const result = this.api.tabularFilesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, assembly, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileFormatType, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.
     * List items in the TabularFile collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisStepVersion Filter by analysis_step_version
     * @param anvilUrl Filter by anvil_url
     * @param assembly Filter by assembly
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param contentMd5sum Filter by content_md5sum
     * @param contentType Filter by content_type
     * @param controlledAccess Filter by controlled_access
     * @param creationTimestamp Filter by creation_timestamp
     * @param dbxrefs Filter by dbxrefs
     * @param derivedFrom Filter by derived_from
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileFormat Filter by file_format
     * @param fileFormatSpecifications Filter by file_format_specifications
     * @param fileFormatType Filter by file_format_type
     * @param fileSet Filter by file_set
     * @param fileSize Filter by file_size
     * @param geneListFor Filter by gene_list_for
     * @param href Filter by href
     * @param inputFileFor Filter by input_file_for
     * @param integratedIn Filter by integrated_in
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lociListFor Filter by loci_list_for
     * @param md5sum Filter by md5sum
     * @param notes Filter by notes
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param s3Uri Filter by s3_uri
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submittedFileName Filter by submitted_file_name
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param transcriptomeAnnotation Filter by transcriptome_annotation
     * @param uploadStatus Filter by upload_status
     * @param uuid Filter by uuid
     * @param validationErrorDetail Filter by validation_error_detail
     */
    public tabularFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bed' | 'csv' | 'gtf' | 'tsv' | 'txt' | 'vcf'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<TabularFileResults> {
        const result = this.api.tabularFiles(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisStepVersion, anvilUrl, assembly, awardId, awardComponent, collections, contentMd5sum, contentType, controlledAccess, creationTimestamp, dbxrefs, derivedFrom, description, documents, fileFormat, fileFormatSpecifications, fileFormatType, fileSet, fileSize, geneListFor, href, inputFileFor, integratedIn, labId, labTitle, lociListFor, md5sum, notes, releaseTimestamp, revokeDetail, s3Uri, status, submittedById, submittedByTitle, submittedFileName, submitterComment, summary, transcriptomeAnnotation, uploadStatus, uuid, validationErrorDetail, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.
     * List items in the TechnicalSample collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificates Filter by institutional_certificates
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleMaterial Filter by sample_material
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public technicalSamplesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificates?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleMaterial?: Array<'undefined' | 'inorganic' | 'synthetic' | 'organic'>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Saccharomyces cerevisiae' | 'Homo sapiens'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<TechnicalSampleResults>> {
        const result = this.api.technicalSamplesWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, documents, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificates, labId, labTitle, lotId, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleMaterial, sampleTermsId, sampleTermsTermName, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.
     * List items in the TechnicalSample collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param documents Filter by documents
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificates Filter by institutional_certificates
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleMaterial Filter by sample_material
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public technicalSamples(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificates?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleMaterial?: Array<'undefined' | 'inorganic' | 'synthetic' | 'organic'>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Saccharomyces cerevisiae' | 'Homo sapiens'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<TechnicalSampleResults> {
        const result = this.api.technicalSamples(frame, query, limit, sort, id, accession, aliases, alternateAccessions, awardId, awardComponent, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, documents, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificates, labId, labTitle, lotId, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleMaterial, sampleTermsId, sampleTermsTermName, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.
     * List items in the Tissue collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param ccfId Filter by ccf_id
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFrom Filter by originated_from
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param pmi Filter by pmi
     * @param pmiUnits Filter by pmi_units
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param preservationMethod Filter by preservation_method
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public tissuesWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, ccfId?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, pmi?: Array<number>, pmiUnits?: Array<'second' | 'minute' | 'hour' | 'day' | 'week'>, pooledFrom?: Array<string>, pooledIn?: Array<string>, preservationMethod?: Array<'cryopreservation' | 'flash-freezing'>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<TissueResults>> {
        const result = this.api.tissuesWithHttpInfo(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, ccfId, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFrom, partOf, parts, pmi, pmiUnits, pooledFrom, pooledIn, preservationMethod, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.
     * List items in the Tissue collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param ccfId Filter by ccf_id
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFrom Filter by originated_from
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param pmi Filter by pmi
     * @param pmiUnits Filter by pmi_units
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param preservationMethod Filter by preservation_method
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public tissues(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, ccfId?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, pmi?: Array<number>, pmiUnits?: Array<'second' | 'minute' | 'hour' | 'day' | 'week'>, pooledFrom?: Array<string>, pooledIn?: Array<string>, preservationMethod?: Array<'cryopreservation' | 'flash-freezing'>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<TissueResults> {
        const result = this.api.tissues(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, ccfId, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFrom, partOf, parts, pmi, pmiUnits, pooledFrom, pooledIn, preservationMethod, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.
     * List items in the Treatment collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param amount Filter by amount
     * @param amountUnits Filter by amount_units
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biosamplesTreated Filter by biosamples_treated
     * @param creationTimestamp Filter by creation_timestamp
     * @param depletion Filter by depletion
     * @param description Filter by description
     * @param documents Filter by documents
     * @param duration Filter by duration
     * @param durationUnits Filter by duration_units
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param notes Filter by notes
     * @param pH Filter by pH
     * @param postTreatmentTime Filter by post_treatment_time
     * @param postTreatmentTimeUnits Filter by post_treatment_time_units
     * @param productId Filter by product_id
     * @param purpose Filter by purpose
     * @param releaseTimestamp Filter by release_timestamp
     * @param sourcesId Filter by sources.@id
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param temperature Filter by temperature
     * @param temperatureUnits Filter by temperature_units
     * @param treatmentTermId Filter by treatment_term_id
     * @param treatmentTermName Filter by treatment_term_name
     * @param treatmentType Filter by treatment_type
     * @param uuid Filter by uuid
     */
    public treatmentsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, amount?: Array<number>, amountUnits?: Array<'mg/kg' | 'mg/mL' | 'mM' | 'ng/mL' | 'nM' | 'percent' | 'μg/kg' | 'μg/kg' | 'μg/mL' | 'μM' | 'kpa'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesTreated?: Array<string>, creationTimestamp?: Array<string>, depletion?: Array<boolean>, description?: Array<string>, documents?: Array<string>, duration?: Array<number>, durationUnits?: Array<'second' | 'minute' | 'hour' | 'day'>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, notes?: Array<string>, pH?: Array<number>, postTreatmentTime?: Array<number>, postTreatmentTimeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, productId?: Array<string>, purpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, releaseTimestamp?: Array<string>, sourcesId?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, temperature?: Array<number>, temperatureUnits?: Array<'Celsius'>, treatmentTermId?: Array<string>, treatmentTermName?: Array<string>, treatmentType?: Array<'chemical' | 'protein' | 'environmental'>, uuid?: Array<string>, _options?: Configuration): Promise<HttpInfo<TreatmentResults>> {
        const result = this.api.treatmentsWithHttpInfo(frame, query, limit, sort, id, aliases, amount, amountUnits, awardId, awardComponent, biosamplesTreated, creationTimestamp, depletion, description, documents, duration, durationUnits, labId, labTitle, lotId, notes, pH, postTreatmentTime, postTreatmentTimeUnits, productId, purpose, releaseTimestamp, sourcesId, status, submittedById, submittedByTitle, submitterComment, summary, temperature, temperatureUnits, treatmentTermId, treatmentTermName, treatmentType, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.
     * List items in the Treatment collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param amount Filter by amount
     * @param amountUnits Filter by amount_units
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biosamplesTreated Filter by biosamples_treated
     * @param creationTimestamp Filter by creation_timestamp
     * @param depletion Filter by depletion
     * @param description Filter by description
     * @param documents Filter by documents
     * @param duration Filter by duration
     * @param durationUnits Filter by duration_units
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param notes Filter by notes
     * @param pH Filter by pH
     * @param postTreatmentTime Filter by post_treatment_time
     * @param postTreatmentTimeUnits Filter by post_treatment_time_units
     * @param productId Filter by product_id
     * @param purpose Filter by purpose
     * @param releaseTimestamp Filter by release_timestamp
     * @param sourcesId Filter by sources.@id
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param temperature Filter by temperature
     * @param temperatureUnits Filter by temperature_units
     * @param treatmentTermId Filter by treatment_term_id
     * @param treatmentTermName Filter by treatment_term_name
     * @param treatmentType Filter by treatment_type
     * @param uuid Filter by uuid
     */
    public treatments(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, amount?: Array<number>, amountUnits?: Array<'mg/kg' | 'mg/mL' | 'mM' | 'ng/mL' | 'nM' | 'percent' | 'μg/kg' | 'μg/kg' | 'μg/mL' | 'μM' | 'kpa'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesTreated?: Array<string>, creationTimestamp?: Array<string>, depletion?: Array<boolean>, description?: Array<string>, documents?: Array<string>, duration?: Array<number>, durationUnits?: Array<'second' | 'minute' | 'hour' | 'day'>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, notes?: Array<string>, pH?: Array<number>, postTreatmentTime?: Array<number>, postTreatmentTimeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, productId?: Array<string>, purpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, releaseTimestamp?: Array<string>, sourcesId?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, temperature?: Array<number>, temperatureUnits?: Array<'Celsius'>, treatmentTermId?: Array<string>, treatmentTermName?: Array<string>, treatmentType?: Array<'chemical' | 'protein' | 'environmental'>, uuid?: Array<string>, _options?: Configuration): Promise<TreatmentResults> {
        const result = this.api.treatments(frame, query, limit, sort, id, aliases, amount, amountUnits, awardId, awardComponent, biosamplesTreated, creationTimestamp, depletion, description, documents, duration, durationUnits, labId, labTitle, lotId, notes, pH, postTreatmentTime, postTreatmentTimeUnits, productId, purpose, releaseTimestamp, sourcesId, status, submittedById, submittedByTitle, submitterComment, summary, temperature, temperatureUnits, treatmentTermId, treatmentTermName, treatmentType, uuid, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.
     * List items in the User collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param email Filter by email
     * @param firstName Filter by first_name
     * @param groups Filter by groups
     * @param jobTitle Filter by job_title
     * @param lab Filter by lab
     * @param lastName Filter by last_name
     * @param notes Filter by notes
     * @param status Filter by status
     * @param submitsFor Filter by submits_for
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     * @param viewingGroups Filter by viewing_groups
     */
    public usersWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, email?: Array<string>, firstName?: Array<string>, groups?: Array<'admin' | 'read-only-admin' | 'verified'>, jobTitle?: Array<'Principal Investigator' | 'Co-Investigator' | 'Project Manager' | 'Submitter' | 'Post Doc' | 'Data Wrangler' | 'Scientist' | 'Computational Scientist' | 'Software Developer' | 'NHGRI staff member' | 'Other'>, lab?: Array<string>, lastName?: Array<string>, notes?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submitsFor?: Array<string>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, viewingGroups?: Array<'community' | 'IGVF'>, _options?: Configuration): Promise<HttpInfo<UserResults>> {
        const result = this.api.usersWithHttpInfo(frame, query, limit, sort, id, aliases, creationTimestamp, description, email, firstName, groups, jobTitle, lab, lastName, notes, status, submitsFor, submittedById, submittedByTitle, submitterComment, summary, title, uuid, viewingGroups, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.
     * List items in the User collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param aliases Filter by aliases
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param email Filter by email
     * @param firstName Filter by first_name
     * @param groups Filter by groups
     * @param jobTitle Filter by job_title
     * @param lab Filter by lab
     * @param lastName Filter by last_name
     * @param notes Filter by notes
     * @param status Filter by status
     * @param submitsFor Filter by submits_for
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param title Filter by title
     * @param uuid Filter by uuid
     * @param viewingGroups Filter by viewing_groups
     */
    public users(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, email?: Array<string>, firstName?: Array<string>, groups?: Array<'admin' | 'read-only-admin' | 'verified'>, jobTitle?: Array<'Principal Investigator' | 'Co-Investigator' | 'Project Manager' | 'Submitter' | 'Post Doc' | 'Data Wrangler' | 'Scientist' | 'Computational Scientist' | 'Software Developer' | 'NHGRI staff member' | 'Other'>, lab?: Array<string>, lastName?: Array<string>, notes?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submitsFor?: Array<string>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, viewingGroups?: Array<'community' | 'IGVF'>, _options?: Configuration): Promise<UserResults> {
        const result = this.api.users(frame, query, limit, sort, id, aliases, creationTimestamp, description, email, firstName, groups, jobTitle, lab, lastName, notes, status, submitsFor, submittedById, submittedByTitle, submitterComment, summary, title, uuid, viewingGroups, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.
     * List items in the WholeOrganism collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFrom Filter by originated_from
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public wholeOrganismsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<HttpInfo<WholeOrganismResults>> {
        const result = this.api.wholeOrganismsWithHttpInfo(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFrom, partOf, parts, pooledFrom, pooledIn, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.
     * List items in the WholeOrganism collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param age Filter by age
     * @param ageUnits Filter by age_units
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param biomarkers Filter by biomarkers
     * @param cellularSubPool Filter by cellular_sub_pool
     * @param classifications Filter by classifications
     * @param collections Filter by collections
     * @param constructLibrarySets Filter by construct_library_sets
     * @param creationTimestamp Filter by creation_timestamp
     * @param dateObtained Filter by date_obtained
     * @param dbxrefs Filter by dbxrefs
     * @param description Filter by description
     * @param diseaseTermsId Filter by disease_terms.@id
     * @param diseaseTermsTermName Filter by disease_terms.term_name
     * @param documents Filter by documents
     * @param donors Filter by donors
     * @param embryonic Filter by embryonic
     * @param fileSetsId Filter by file_sets.@id
     * @param fileSetsAccession Filter by file_sets.accession
     * @param fileSetsAliases Filter by file_sets.aliases
     * @param fileSetsAssayTermTermName Filter by file_sets.assay_term.term_name
     * @param fileSetsLabTitle Filter by file_sets.lab.title
     * @param fileSetsStatus Filter by file_sets.status
     * @param fileSetsSummary Filter by file_sets.summary
     * @param institutionalCertificatesId Filter by institutional_certificates.@id
     * @param institutionalCertificatesCertificateIdentifier Filter by institutional_certificates.certificate_identifier
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param lotId Filter by lot_id
     * @param lowerBoundAge Filter by lower_bound_age
     * @param lowerBoundAgeInHours Filter by lower_bound_age_in_hours
     * @param modificationsId Filter by modifications.@id
     * @param modificationsStatus Filter by modifications.status
     * @param modificationsSummary Filter by modifications.summary
     * @param moi Filter by moi
     * @param multiplexedInId Filter by multiplexed_in.@id
     * @param multiplexedInAccession Filter by multiplexed_in.accession
     * @param notes Filter by notes
     * @param nucleicAcidDelivery Filter by nucleic_acid_delivery
     * @param originOf Filter by origin_of
     * @param originatedFrom Filter by originated_from
     * @param partOf Filter by part_of
     * @param parts Filter by parts
     * @param pooledFrom Filter by pooled_from
     * @param pooledIn Filter by pooled_in
     * @param productId Filter by product_id
     * @param protocols Filter by protocols
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sampleTermsId Filter by sample_terms.@id
     * @param sampleTermsTermName Filter by sample_terms.term_name
     * @param sex Filter by sex
     * @param sortedFractions Filter by sorted_fractions
     * @param sortedFromId Filter by sorted_from.@id
     * @param sortedFromAccession Filter by sorted_from.accession
     * @param sortedFromDetail Filter by sorted_from_detail
     * @param sourcesId Filter by sources.@id
     * @param startingAmount Filter by starting_amount
     * @param startingAmountUnits Filter by starting_amount_units
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param taxa Filter by taxa
     * @param timePostLibraryDelivery Filter by time_post_library_delivery
     * @param timePostLibraryDeliveryUnits Filter by time_post_library_delivery_units
     * @param treatmentsId Filter by treatments.@id
     * @param treatmentsPurpose Filter by treatments.purpose
     * @param treatmentsStatus Filter by treatments.status
     * @param treatmentsSummary Filter by treatments.summary
     * @param treatmentsTreatmentType Filter by treatments.treatment_type
     * @param upperBoundAge Filter by upper_bound_age
     * @param upperBoundAgeInHours Filter by upper_bound_age_in_hours
     * @param url Filter by url
     * @param uuid Filter by uuid
     * @param virtual Filter by virtual
     */
    public wholeOrganisms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<WholeOrganismResults> {
        const result = this.api.wholeOrganisms(frame, query, limit, sort, id, accession, age, ageUnits, aliases, alternateAccessions, awardId, awardComponent, biomarkers, cellularSubPool, classifications, collections, constructLibrarySets, creationTimestamp, dateObtained, dbxrefs, description, diseaseTermsId, diseaseTermsTermName, documents, donors, embryonic, fileSetsId, fileSetsAccession, fileSetsAliases, fileSetsAssayTermTermName, fileSetsLabTitle, fileSetsStatus, fileSetsSummary, institutionalCertificatesId, institutionalCertificatesCertificateIdentifier, labId, labTitle, lotId, lowerBoundAge, lowerBoundAgeInHours, modificationsId, modificationsStatus, modificationsSummary, moi, multiplexedInId, multiplexedInAccession, notes, nucleicAcidDelivery, originOf, originatedFrom, partOf, parts, pooledFrom, pooledIn, productId, protocols, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sampleTermsId, sampleTermsTermName, sex, sortedFractions, sortedFromId, sortedFromAccession, sortedFromDetail, sourcesId, startingAmount, startingAmountUnits, status, submittedById, submittedByTitle, submitterComment, summary, taxa, timePostLibraryDelivery, timePostLibraryDeliveryUnits, treatmentsId, treatmentsPurpose, treatmentsStatus, treatmentsSummary, treatmentsTreatmentType, upperBoundAge, upperBoundAgeInHours, url, uuid, virtual, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.
     * List items in the Workflow collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisSteps Filter by analysis_steps
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documents Filter by documents
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sourceUrl Filter by source_url
     * @param standardsPageId Filter by standards_page.@id
     * @param standardsPageTitle Filter by standards_page.title
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     * @param workflowRepositories Filter by workflow_repositories
     * @param workflowVersion Filter by workflow_version
     */
    public workflowsWithHttpInfo(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisSteps?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sourceUrl?: Array<string>, standardsPageId?: Array<string>, standardsPageTitle?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, workflowRepositories?: Array<string>, workflowVersion?: Array<number>, _options?: Configuration): Promise<HttpInfo<WorkflowResults>> {
        const result = this.api.workflowsWithHttpInfo(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisSteps, awardId, awardComponent, collections, creationTimestamp, description, documents, labId, labTitle, name, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sourceUrl, standardsPageId, standardsPageTitle, status, submittedById, submittedByTitle, submitterComment, summary, uuid, workflowRepositories, workflowVersion, _options);
        return result.toPromise();
    }

    /**
     * Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.
     * List items in the Workflow collection.
     * @param frame Constant value. Do not set.
     * @param query Query string for searching.
     * @param limit Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results.
     * @param sort Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all.
     * @param id Filter by @id
     * @param accession Filter by accession
     * @param aliases Filter by aliases
     * @param alternateAccessions Filter by alternate_accessions
     * @param analysisSteps Filter by analysis_steps
     * @param awardId Filter by award.@id
     * @param awardComponent Filter by award.component
     * @param collections Filter by collections
     * @param creationTimestamp Filter by creation_timestamp
     * @param description Filter by description
     * @param documents Filter by documents
     * @param labId Filter by lab.@id
     * @param labTitle Filter by lab.title
     * @param name Filter by name
     * @param notes Filter by notes
     * @param publicationIdentifiers Filter by publication_identifiers
     * @param publications Filter by publications
     * @param releaseTimestamp Filter by release_timestamp
     * @param revokeDetail Filter by revoke_detail
     * @param sourceUrl Filter by source_url
     * @param standardsPageId Filter by standards_page.@id
     * @param standardsPageTitle Filter by standards_page.title
     * @param status Filter by status
     * @param submittedById Filter by submitted_by.@id
     * @param submittedByTitle Filter by submitted_by.title
     * @param submitterComment Filter by submitter_comment
     * @param summary Filter by summary
     * @param uuid Filter by uuid
     * @param workflowRepositories Filter by workflow_repositories
     * @param workflowVersion Filter by workflow_version
     */
    public workflows(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisSteps?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sourceUrl?: Array<string>, standardsPageId?: Array<string>, standardsPageTitle?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, workflowRepositories?: Array<string>, workflowVersion?: Array<number>, _options?: Configuration): Promise<WorkflowResults> {
        const result = this.api.workflows(frame, query, limit, sort, id, accession, aliases, alternateAccessions, analysisSteps, awardId, awardComponent, collections, creationTimestamp, description, documents, labId, labTitle, name, notes, publicationIdentifiers, publications, releaseTimestamp, revokeDetail, sourceUrl, standardsPageId, standardsPageTitle, status, submittedById, submittedByTitle, submitterComment, summary, uuid, workflowRepositories, workflowVersion, _options);
        return result.toPromise();
    }


}



