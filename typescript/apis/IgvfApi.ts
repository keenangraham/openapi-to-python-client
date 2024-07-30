// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccessKeyResults } from '../models/AccessKeyResults';
import { AlignmentFileResults } from '../models/AlignmentFileResults';
import { AnalysisSetResults } from '../models/AnalysisSetResults';
import { AnalysisStepResults } from '../models/AnalysisStepResults';
import { AnalysisStepVersionResults } from '../models/AnalysisStepVersionResults';
import { AssayTermResults } from '../models/AssayTermResults';
import { AuxiliarySetResults } from '../models/AuxiliarySetResults';
import { AwardResults } from '../models/AwardResults';
import { BiomarkerResults } from '../models/BiomarkerResults';
import { ConfigurationFileResults } from '../models/ConfigurationFileResults';
import { ConstructLibrarySetResults } from '../models/ConstructLibrarySetResults';
import { CrisprModificationResults } from '../models/CrisprModificationResults';
import { CuratedSetResults } from '../models/CuratedSetResults';
import { DegronModificationResults } from '../models/DegronModificationResults';
import { DocumentResults } from '../models/DocumentResults';
import { GeneLocation } from '../models/GeneLocation';
import { GeneResults } from '../models/GeneResults';
import { GenomeBrowserAnnotationFileResults } from '../models/GenomeBrowserAnnotationFileResults';
import { HumanDonorResults } from '../models/HumanDonorResults';
import { ImageFileResults } from '../models/ImageFileResults';
import { ImageResults } from '../models/ImageResults';
import { InVitroSystemResults } from '../models/InVitroSystemResults';
import { InstitutionalCertificateResults } from '../models/InstitutionalCertificateResults';
import { Item } from '../models/Item';
import { ItemType } from '../models/ItemType';
import { LabResults } from '../models/LabResults';
import { Limit } from '../models/Limit';
import { Locus } from '../models/Locus';
import { MatrixFileResults } from '../models/MatrixFileResults';
import { MeasurementSetResults } from '../models/MeasurementSetResults';
import { ModelFileResults } from '../models/ModelFileResults';
import { ModelSetResults } from '../models/ModelSetResults';
import { MultiplexedSampleResults } from '../models/MultiplexedSampleResults';
import { NoResultsResponse } from '../models/NoResultsResponse';
import { OpenReadingFrameResults } from '../models/OpenReadingFrameResults';
import { PageResults } from '../models/PageResults';
import { PhenotypeTermResults } from '../models/PhenotypeTermResults';
import { PhenotypicFeatureResults } from '../models/PhenotypicFeatureResults';
import { PlatformTermResults } from '../models/PlatformTermResults';
import { PredictionSetResults } from '../models/PredictionSetResults';
import { PrimaryCellResults } from '../models/PrimaryCellResults';
import { PublicationResults } from '../models/PublicationResults';
import { ReferenceFileResults } from '../models/ReferenceFileResults';
import { RodentDonorResults } from '../models/RodentDonorResults';
import { SampleTermResults } from '../models/SampleTermResults';
import { SearchResults } from '../models/SearchResults';
import { SequenceFileResults } from '../models/SequenceFileResults';
import { SignalFileResults } from '../models/SignalFileResults';
import { SoftwareResults } from '../models/SoftwareResults';
import { SoftwareVersionResults } from '../models/SoftwareVersionResults';
import { SourceResults } from '../models/SourceResults';
import { TabularFileResults } from '../models/TabularFileResults';
import { TechnicalSampleResults } from '../models/TechnicalSampleResults';
import { TissueResults } from '../models/TissueResults';
import { TreatmentResults } from '../models/TreatmentResults';
import { UserResults } from '../models/UserResults';
import { WholeOrganismResults } from '../models/WholeOrganismResults';
import { WorkflowResults } from '../models/WorkflowResults';

/**
 * no description
 */
export class IgvfApiRequestFactory extends BaseAPIRequestFactory {

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
    public async accessKeys(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accessKeyId?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, notes?: Array<string>, secretAccessKeyHash?: Array<string>, status?: Array<'current' | 'deleted'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, user?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "accessKeys", "frame");
        }



















        // Path Params
        const localVarPath = '/access-keys/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accessKeyId !== undefined) {
            requestContext.setQueryParam("access_key_id", ObjectSerializer.serialize(accessKeyId, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (secretAccessKeyHash !== undefined) {
            requestContext.setQueryParam("secret_access_key_hash", ObjectSerializer.serialize(secretAccessKeyHash, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'current' | 'deleted'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (user !== undefined) {
            requestContext.setQueryParam("user", ObjectSerializer.serialize(user, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async alignmentFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bam'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, filtered?: Array<boolean>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, redacted?: Array<boolean>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "alignmentFiles", "frame");
        }





















































        // Path Params
        const localVarPath = '/alignment-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (anvilUrl !== undefined) {
            requestContext.setQueryParam("anvil_url", ObjectSerializer.serialize(anvilUrl, "Array<string>", ""));
        }

        // Query Params
        if (assembly !== undefined) {
            requestContext.setQueryParam("assembly", ObjectSerializer.serialize(assembly, "Array<'GRCh38' | 'GRCm39'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentSummary !== undefined) {
            requestContext.setQueryParam("content_summary", ObjectSerializer.serialize(contentSummary, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (controlledAccess !== undefined) {
            requestContext.setQueryParam("controlled_access", ObjectSerializer.serialize(controlledAccess, "Array<boolean>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'bam'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (filtered !== undefined) {
            requestContext.setQueryParam("filtered", ObjectSerializer.serialize(filtered, "Array<boolean>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (redacted !== undefined) {
            requestContext.setQueryParam("redacted", ObjectSerializer.serialize(redacted, "Array<boolean>", ""));
        }

        // Query Params
        if (referenceFiles !== undefined) {
            requestContext.setQueryParam("reference_files", ObjectSerializer.serialize(referenceFiles, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (transcriptomeAnnotation !== undefined) {
            requestContext.setQueryParam("transcriptome_annotation", ObjectSerializer.serialize(transcriptomeAnnotation, "Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async analysisSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assayTitles?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'intermediate analysis' | 'principal analysis'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSetsId?: Array<string>, inputFileSetsAccession?: Array<string>, inputFileSetsAliases?: Array<string>, inputFileSetsFileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "analysisSets", "frame");
        }

















































































        // Path Params
        const localVarPath = '/analysis-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (assayTitles !== undefined) {
            requestContext.setQueryParam("assay_titles", ObjectSerializer.serialize(assayTitles, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardContactPiId !== undefined) {
            requestContext.setQueryParam("award.contact_pi.@id", ObjectSerializer.serialize(awardContactPiId, "Array<string>", ""));
        }

        // Query Params
        if (awardContactPiTitle !== undefined) {
            requestContext.setQueryParam("award.contact_pi.title", ObjectSerializer.serialize(awardContactPiTitle, "Array<string>", ""));
        }

        // Query Params
        if (awardTitle !== undefined) {
            requestContext.setQueryParam("award.title", ObjectSerializer.serialize(awardTitle, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donorsId !== undefined) {
            requestContext.setQueryParam("donors.@id", ObjectSerializer.serialize(donorsId, "Array<string>", ""));
        }

        // Query Params
        if (donorsAccession !== undefined) {
            requestContext.setQueryParam("donors.accession", ObjectSerializer.serialize(donorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (donorsAliases !== undefined) {
            requestContext.setQueryParam("donors.aliases", ObjectSerializer.serialize(donorsAliases, "Array<string>", ""));
        }

        // Query Params
        if (donorsSex !== undefined) {
            requestContext.setQueryParam("donors.sex", ObjectSerializer.serialize(donorsSex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (donorsStatus !== undefined) {
            requestContext.setQueryParam("donors.status", ObjectSerializer.serialize(donorsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (donorsTaxa !== undefined) {
            requestContext.setQueryParam("donors.taxa", ObjectSerializer.serialize(donorsTaxa, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'intermediate analysis' | 'principal analysis'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesCreationTimestamp !== undefined) {
            requestContext.setQueryParam("files.creation_timestamp", ObjectSerializer.serialize(filesCreationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesFileSize !== undefined) {
            requestContext.setQueryParam("files.file_size", ObjectSerializer.serialize(filesFileSize, "Array<number>", ""));
        }

        // Query Params
        if (filesHref !== undefined) {
            requestContext.setQueryParam("files.href", ObjectSerializer.serialize(filesHref, "Array<string>", ""));
        }

        // Query Params
        if (filesS3Uri !== undefined) {
            requestContext.setQueryParam("files.s3_uri", ObjectSerializer.serialize(filesS3Uri, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatform !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform", ObjectSerializer.serialize(filesSequencingPlatform, "Array<string>", ""));
        }

        // Query Params
        if (filesSubmittedFileName !== undefined) {
            requestContext.setQueryParam("files.submitted_file_name", ObjectSerializer.serialize(filesSubmittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsId !== undefined) {
            requestContext.setQueryParam("input_file_sets.@id", ObjectSerializer.serialize(inputFileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsAccession !== undefined) {
            requestContext.setQueryParam("input_file_sets.accession", ObjectSerializer.serialize(inputFileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsAliases !== undefined) {
            requestContext.setQueryParam("input_file_sets.aliases", ObjectSerializer.serialize(inputFileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsFileSetType !== undefined) {
            requestContext.setQueryParam("input_file_sets.file_set_type", ObjectSerializer.serialize(inputFileSetsFileSetType, "Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (samplesId !== undefined) {
            requestContext.setQueryParam("samples.@id", ObjectSerializer.serialize(samplesId, "Array<string>", ""));
        }

        // Query Params
        if (samplesAccession !== undefined) {
            requestContext.setQueryParam("samples.accession", ObjectSerializer.serialize(samplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesAliases !== undefined) {
            requestContext.setQueryParam("samples.aliases", ObjectSerializer.serialize(samplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatments !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments", ObjectSerializer.serialize(samplesCellFateChangeTreatments, "Array<string>", ""));
        }

        // Query Params
        if (samplesClassifications !== undefined) {
            requestContext.setQueryParam("samples.classifications", ObjectSerializer.serialize(samplesClassifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySets !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets", ObjectSerializer.serialize(samplesConstructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.@id", ObjectSerializer.serialize(samplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.term_name", ObjectSerializer.serialize(samplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesModifications !== undefined) {
            requestContext.setQueryParam("samples.modifications", ObjectSerializer.serialize(samplesModifications, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.@id", ObjectSerializer.serialize(samplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsAliases !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.aliases", ObjectSerializer.serialize(samplesSampleTermsAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsStatus !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.status", ObjectSerializer.serialize(samplesSampleTermsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (samplesSampleTermsSummary !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.summary", ObjectSerializer.serialize(samplesSampleTermsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.term_name", ObjectSerializer.serialize(samplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesStatus !== undefined) {
            requestContext.setQueryParam("samples.status", ObjectSerializer.serialize(samplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (samplesSummary !== undefined) {
            requestContext.setQueryParam("samples.summary", ObjectSerializer.serialize(samplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermId !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.@id", ObjectSerializer.serialize(samplesTargetedSampleTermId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermTermName !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.term_name", ObjectSerializer.serialize(samplesTargetedSampleTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesTaxa !== undefined) {
            requestContext.setQueryParam("samples.taxa", ObjectSerializer.serialize(samplesTaxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (samplesTreatments !== undefined) {
            requestContext.setQueryParam("samples.treatments", ObjectSerializer.serialize(samplesTreatments, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async analysisStepVersions(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, analysisStepId?: Array<string>, analysisStepName?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, softwareVersionsId?: Array<string>, softwareVersionsName?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "analysisStepVersions", "frame");
        }

























        // Path Params
        const localVarPath = '/analysis-step-versions/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepId !== undefined) {
            requestContext.setQueryParam("analysis_step.@id", ObjectSerializer.serialize(analysisStepId, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepName !== undefined) {
            requestContext.setQueryParam("analysis_step.name", ObjectSerializer.serialize(analysisStepName, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (softwareVersionsId !== undefined) {
            requestContext.setQueryParam("software_versions.@id", ObjectSerializer.serialize(softwareVersionsId, "Array<string>", ""));
        }

        // Query Params
        if (softwareVersionsName !== undefined) {
            requestContext.setQueryParam("software_versions.name", ObjectSerializer.serialize(softwareVersionsName, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async analysisSteps(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, analysisStepTypes?: Array<'alignment' | 'file format conversion' | 'signal generation'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, inputContentTypes?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, outputContentTypes?: Array<string>, parentsId?: Array<string>, parentsTitle?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, stepLabel?: Array<string>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, workflowId?: Array<string>, workflowAccession?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "analysisSteps", "frame");
        }































        // Path Params
        const localVarPath = '/analysis-steps/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepTypes !== undefined) {
            requestContext.setQueryParam("analysis_step_types", ObjectSerializer.serialize(analysisStepTypes, "Array<'alignment' | 'file format conversion' | 'signal generation'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (inputContentTypes !== undefined) {
            requestContext.setQueryParam("input_content_types", ObjectSerializer.serialize(inputContentTypes, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (outputContentTypes !== undefined) {
            requestContext.setQueryParam("output_content_types", ObjectSerializer.serialize(outputContentTypes, "Array<string>", ""));
        }

        // Query Params
        if (parentsId !== undefined) {
            requestContext.setQueryParam("parents.@id", ObjectSerializer.serialize(parentsId, "Array<string>", ""));
        }

        // Query Params
        if (parentsTitle !== undefined) {
            requestContext.setQueryParam("parents.title", ObjectSerializer.serialize(parentsTitle, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (stepLabel !== undefined) {
            requestContext.setQueryParam("step_label", ObjectSerializer.serialize(stepLabel, "Array<string>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (workflowId !== undefined) {
            requestContext.setQueryParam("workflow.@id", ObjectSerializer.serialize(workflowId, "Array<string>", ""));
        }

        // Query Params
        if (workflowAccession !== undefined) {
            requestContext.setQueryParam("workflow.accession", ObjectSerializer.serialize(workflowAccession, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async assayTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, assaySlims?: Array<string>, categorySlims?: Array<string>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, objectiveSlims?: Array<string>, ontology?: Array<string>, preferredAssayTitles?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "assayTerms", "frame");
        }





























        // Path Params
        const localVarPath = '/assay-terms/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (ancestors !== undefined) {
            requestContext.setQueryParam("ancestors", ObjectSerializer.serialize(ancestors, "Array<string>", ""));
        }

        // Query Params
        if (assaySlims !== undefined) {
            requestContext.setQueryParam("assay_slims", ObjectSerializer.serialize(assaySlims, "Array<string>", ""));
        }

        // Query Params
        if (categorySlims !== undefined) {
            requestContext.setQueryParam("category_slims", ObjectSerializer.serialize(categorySlims, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (deprecatedNtrTerms !== undefined) {
            requestContext.setQueryParam("deprecated_ntr_terms", ObjectSerializer.serialize(deprecatedNtrTerms, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (isA !== undefined) {
            requestContext.setQueryParam("is_a", ObjectSerializer.serialize(isA, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (objectiveSlims !== undefined) {
            requestContext.setQueryParam("objective_slims", ObjectSerializer.serialize(objectiveSlims, "Array<string>", ""));
        }

        // Query Params
        if (ontology !== undefined) {
            requestContext.setQueryParam("ontology", ObjectSerializer.serialize(ontology, "Array<string>", ""));
        }

        // Query Params
        if (preferredAssayTitles !== undefined) {
            requestContext.setQueryParam("preferred_assay_titles", ObjectSerializer.serialize(preferredAssayTitles, "Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (synonyms !== undefined) {
            requestContext.setQueryParam("synonyms", ObjectSerializer.serialize(synonyms, "Array<string>", ""));
        }

        // Query Params
        if (termId !== undefined) {
            requestContext.setQueryParam("term_id", ObjectSerializer.serialize(termId, "Array<string>", ""));
        }

        // Query Params
        if (termName !== undefined) {
            requestContext.setQueryParam("term_name", ObjectSerializer.serialize(termName, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async auxiliarySets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, libraryConstructionPlatform?: Array<string>, measurementSetsId?: Array<string>, measurementSetsAccession?: Array<string>, measurementSetsAliases?: Array<string>, measurementSetsPreferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "auxiliarySets", "frame");
        }


















































































        // Path Params
        const localVarPath = '/auxiliary-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardContactPiId !== undefined) {
            requestContext.setQueryParam("award.contact_pi.@id", ObjectSerializer.serialize(awardContactPiId, "Array<string>", ""));
        }

        // Query Params
        if (awardContactPiTitle !== undefined) {
            requestContext.setQueryParam("award.contact_pi.title", ObjectSerializer.serialize(awardContactPiTitle, "Array<string>", ""));
        }

        // Query Params
        if (awardTitle !== undefined) {
            requestContext.setQueryParam("award.title", ObjectSerializer.serialize(awardTitle, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donorsId !== undefined) {
            requestContext.setQueryParam("donors.@id", ObjectSerializer.serialize(donorsId, "Array<string>", ""));
        }

        // Query Params
        if (donorsAccession !== undefined) {
            requestContext.setQueryParam("donors.accession", ObjectSerializer.serialize(donorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (donorsAliases !== undefined) {
            requestContext.setQueryParam("donors.aliases", ObjectSerializer.serialize(donorsAliases, "Array<string>", ""));
        }

        // Query Params
        if (donorsSex !== undefined) {
            requestContext.setQueryParam("donors.sex", ObjectSerializer.serialize(donorsSex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (donorsStatus !== undefined) {
            requestContext.setQueryParam("donors.status", ObjectSerializer.serialize(donorsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (donorsTaxa !== undefined) {
            requestContext.setQueryParam("donors.taxa", ObjectSerializer.serialize(donorsTaxa, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesCreationTimestamp !== undefined) {
            requestContext.setQueryParam("files.creation_timestamp", ObjectSerializer.serialize(filesCreationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesFileSize !== undefined) {
            requestContext.setQueryParam("files.file_size", ObjectSerializer.serialize(filesFileSize, "Array<number>", ""));
        }

        // Query Params
        if (filesHref !== undefined) {
            requestContext.setQueryParam("files.href", ObjectSerializer.serialize(filesHref, "Array<string>", ""));
        }

        // Query Params
        if (filesS3Uri !== undefined) {
            requestContext.setQueryParam("files.s3_uri", ObjectSerializer.serialize(filesS3Uri, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatform !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform", ObjectSerializer.serialize(filesSequencingPlatform, "Array<string>", ""));
        }

        // Query Params
        if (filesSubmittedFileName !== undefined) {
            requestContext.setQueryParam("files.submitted_file_name", ObjectSerializer.serialize(filesSubmittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (libraryConstructionPlatform !== undefined) {
            requestContext.setQueryParam("library_construction_platform", ObjectSerializer.serialize(libraryConstructionPlatform, "Array<string>", ""));
        }

        // Query Params
        if (measurementSetsId !== undefined) {
            requestContext.setQueryParam("measurement_sets.@id", ObjectSerializer.serialize(measurementSetsId, "Array<string>", ""));
        }

        // Query Params
        if (measurementSetsAccession !== undefined) {
            requestContext.setQueryParam("measurement_sets.accession", ObjectSerializer.serialize(measurementSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (measurementSetsAliases !== undefined) {
            requestContext.setQueryParam("measurement_sets.aliases", ObjectSerializer.serialize(measurementSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (measurementSetsPreferredAssayTitle !== undefined) {
            requestContext.setQueryParam("measurement_sets.preferred_assay_title", ObjectSerializer.serialize(measurementSetsPreferredAssayTitle, "Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (samplesId !== undefined) {
            requestContext.setQueryParam("samples.@id", ObjectSerializer.serialize(samplesId, "Array<string>", ""));
        }

        // Query Params
        if (samplesAccession !== undefined) {
            requestContext.setQueryParam("samples.accession", ObjectSerializer.serialize(samplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesAliases !== undefined) {
            requestContext.setQueryParam("samples.aliases", ObjectSerializer.serialize(samplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatments !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments", ObjectSerializer.serialize(samplesCellFateChangeTreatments, "Array<string>", ""));
        }

        // Query Params
        if (samplesClassifications !== undefined) {
            requestContext.setQueryParam("samples.classifications", ObjectSerializer.serialize(samplesClassifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySets !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets", ObjectSerializer.serialize(samplesConstructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.@id", ObjectSerializer.serialize(samplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.term_name", ObjectSerializer.serialize(samplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesModifications !== undefined) {
            requestContext.setQueryParam("samples.modifications", ObjectSerializer.serialize(samplesModifications, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.@id", ObjectSerializer.serialize(samplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsAliases !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.aliases", ObjectSerializer.serialize(samplesSampleTermsAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsStatus !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.status", ObjectSerializer.serialize(samplesSampleTermsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (samplesSampleTermsSummary !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.summary", ObjectSerializer.serialize(samplesSampleTermsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.term_name", ObjectSerializer.serialize(samplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesStatus !== undefined) {
            requestContext.setQueryParam("samples.status", ObjectSerializer.serialize(samplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (samplesSummary !== undefined) {
            requestContext.setQueryParam("samples.summary", ObjectSerializer.serialize(samplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermId !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.@id", ObjectSerializer.serialize(samplesTargetedSampleTermId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermTermName !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.term_name", ObjectSerializer.serialize(samplesTargetedSampleTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesTaxa !== undefined) {
            requestContext.setQueryParam("samples.taxa", ObjectSerializer.serialize(samplesTaxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (samplesTreatments !== undefined) {
            requestContext.setQueryParam("samples.treatments", ObjectSerializer.serialize(samplesTreatments, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async awards(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, component?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, contactPi?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, endDate?: Array<string>, name?: Array<string>, notes?: Array<string>, pis?: Array<string>, project?: Array<'community' | 'ENCODE' | 'IGVF'>, startDate?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, viewingGroup?: Array<'community' | 'IGVF'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "awards", "frame");
        }


























        // Path Params
        const localVarPath = '/awards/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (component !== undefined) {
            requestContext.setQueryParam("component", ObjectSerializer.serialize(component, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (contactPi !== undefined) {
            requestContext.setQueryParam("contact_pi", ObjectSerializer.serialize(contactPi, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("end_date", ObjectSerializer.serialize(endDate, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (pis !== undefined) {
            requestContext.setQueryParam("pis", ObjectSerializer.serialize(pis, "Array<string>", ""));
        }

        // Query Params
        if (project !== undefined) {
            requestContext.setQueryParam("project", ObjectSerializer.serialize(project, "Array<'community' | 'ENCODE' | 'IGVF'>", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("start_date", ObjectSerializer.serialize(startDate, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'current' | 'deleted' | 'disabled'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (viewingGroup !== undefined) {
            requestContext.setQueryParam("viewing_group", ObjectSerializer.serialize(viewingGroup, "Array<'community' | 'IGVF'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generates TSV of files contained in FileSets in search results.
     * List files to download based on search query. All results are returned.
     * @param type Type of objects to return. Can be repeated for multiple types.
     * @param query Query string for searching.
     * @param fieldFilters Any field from any object type can be used as a filter. Use \&#39;!\&#39; for negation, \&#39;*\&#39; as a wildcard, and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; for range queries on numeric fields.
     */
    public async batchDownload(type: Array<string>, query?: string, fieldFilters?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("IgvfApi", "batchDownload", "type");
        }




        // Path Params
        const localVarPath = '/batch-download';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "Array<string>", ""));
        }

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (fieldFilters !== undefined) {
            requestContext.setQueryParam("field_filters", ObjectSerializer.serialize(fieldFilters, "any", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async biomarkers(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardName?: Array<string>, biomarkerFor?: Array<string>, classification?: Array<'cell surface protein' | 'marker gene'>, creationTimestamp?: Array<string>, description?: Array<string>, gene?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, nameQuantification?: Array<string>, notes?: Array<string>, quantification?: Array<'negative' | 'positive' | 'low' | 'intermediate' | 'high'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "biomarkers", "frame");
        }





























        // Path Params
        const localVarPath = '/biomarkers/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardName !== undefined) {
            requestContext.setQueryParam("award.name", ObjectSerializer.serialize(awardName, "Array<string>", ""));
        }

        // Query Params
        if (biomarkerFor !== undefined) {
            requestContext.setQueryParam("biomarker_for", ObjectSerializer.serialize(biomarkerFor, "Array<string>", ""));
        }

        // Query Params
        if (classification !== undefined) {
            requestContext.setQueryParam("classification", ObjectSerializer.serialize(classification, "Array<'cell surface protein' | 'marker gene'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (gene !== undefined) {
            requestContext.setQueryParam("gene", ObjectSerializer.serialize(gene, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (nameQuantification !== undefined) {
            requestContext.setQueryParam("name_quantification", ObjectSerializer.serialize(nameQuantification, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (quantification !== undefined) {
            requestContext.setQueryParam("quantification", ObjectSerializer.serialize(quantification, "Array<'negative' | 'positive' | 'low' | 'intermediate' | 'high'>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (synonyms !== undefined) {
            requestContext.setQueryParam("synonyms", ObjectSerializer.serialize(synonyms, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async configurationFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'yaml'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, seqspecOf?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "configurationFiles", "frame");
        }














































        // Path Params
        const localVarPath = '/configuration-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'yaml'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (seqspecOf !== undefined) {
            requestContext.setQueryParam("seqspec_of", ObjectSerializer.serialize(seqspecOf, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async constructLibrarySets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, appliedToSamplesId?: Array<string>, appliedToSamplesAccession?: Array<string>, appliedToSamplesAliases?: Array<string>, appliedToSamplesDiseaseTermsId?: Array<string>, appliedToSamplesDiseaseTermsTermName?: Array<string>, appliedToSamplesSampleTermsId?: Array<string>, appliedToSamplesSampleTermsTermName?: Array<string>, appliedToSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, appliedToSamplesSummary?: Array<string>, associatedPhenotypesId?: Array<string>, associatedPhenotypesTermId?: Array<string>, associatedPhenotypesTermName?: Array<string>, averageGuideCoverage?: Array<number>, averageInsertSize?: Array<number>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, exon?: Array<string>, fileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesFileFormat?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, guideType?: Array<'sgRNA' | 'pgRNA'>, inputFileSetFor?: Array<string>, integratedContentFiles?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, largeScaleGeneListId?: Array<string>, largeScaleGeneListAccession?: Array<string>, largeScaleGeneListAliases?: Array<string>, largeScaleLociListId?: Array<string>, largeScaleLociListAccession?: Array<string>, largeScaleLociListAliases?: Array<string>, lotId?: Array<string>, lowerBoundGuideCoverage?: Array<number>, lowerBoundInsertSize?: Array<number>, notes?: Array<string>, orfListId?: Array<string>, orfListAliases?: Array<string>, orfListGene?: Array<string>, orfListOrfId?: Array<string>, productId?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, scope?: Array<'tile' | 'exon' | 'genes' | 'loci' | 'genome-wide' | 'interactors' | 'alleles' | 'targeton'>, selectionCriteria?: Array<'accessible genome regions' | 'candidate cis-regulatory elements' | 'chromatin states' | 'phenotype-associated variants' | 'DNase hypersensitive sites' | 'genes' | 'histone modifications' | 'protein interactors' | 'sequence variants' | 'synthetic elements' | 'transcription start sites' | 'TF binding sites'>, smallScaleGeneListId?: Array<string>, smallScaleGeneListGeneid?: Array<string>, smallScaleGeneListName?: Array<string>, smallScaleGeneListSymbol?: Array<string>, smallScaleGeneListSynonyms?: Array<string>, smallScaleLociList?: Array<Locus>, sources?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targeton?: Array<string>, tilingModality?: Array<'peak tiling' | 'full tiling' | 'sparse peaks'>, upperBoundGuideCoverage?: Array<number>, upperBoundInsertSize?: Array<number>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "constructLibrarySets", "frame");
        }




















































































        // Path Params
        const localVarPath = '/construct-library-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesId !== undefined) {
            requestContext.setQueryParam("applied_to_samples.@id", ObjectSerializer.serialize(appliedToSamplesId, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesAccession !== undefined) {
            requestContext.setQueryParam("applied_to_samples.accession", ObjectSerializer.serialize(appliedToSamplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesAliases !== undefined) {
            requestContext.setQueryParam("applied_to_samples.aliases", ObjectSerializer.serialize(appliedToSamplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("applied_to_samples.disease_terms.@id", ObjectSerializer.serialize(appliedToSamplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("applied_to_samples.disease_terms.term_name", ObjectSerializer.serialize(appliedToSamplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("applied_to_samples.sample_terms.@id", ObjectSerializer.serialize(appliedToSamplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("applied_to_samples.sample_terms.term_name", ObjectSerializer.serialize(appliedToSamplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (appliedToSamplesStatus !== undefined) {
            requestContext.setQueryParam("applied_to_samples.status", ObjectSerializer.serialize(appliedToSamplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (appliedToSamplesSummary !== undefined) {
            requestContext.setQueryParam("applied_to_samples.summary", ObjectSerializer.serialize(appliedToSamplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (associatedPhenotypesId !== undefined) {
            requestContext.setQueryParam("associated_phenotypes.@id", ObjectSerializer.serialize(associatedPhenotypesId, "Array<string>", ""));
        }

        // Query Params
        if (associatedPhenotypesTermId !== undefined) {
            requestContext.setQueryParam("associated_phenotypes.term_id", ObjectSerializer.serialize(associatedPhenotypesTermId, "Array<string>", ""));
        }

        // Query Params
        if (associatedPhenotypesTermName !== undefined) {
            requestContext.setQueryParam("associated_phenotypes.term_name", ObjectSerializer.serialize(associatedPhenotypesTermName, "Array<string>", ""));
        }

        // Query Params
        if (averageGuideCoverage !== undefined) {
            requestContext.setQueryParam("average_guide_coverage", ObjectSerializer.serialize(averageGuideCoverage, "Array<number>", ""));
        }

        // Query Params
        if (averageInsertSize !== undefined) {
            requestContext.setQueryParam("average_insert_size", ObjectSerializer.serialize(averageInsertSize, "Array<number>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (exon !== undefined) {
            requestContext.setQueryParam("exon", ObjectSerializer.serialize(exon, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (guideType !== undefined) {
            requestContext.setQueryParam("guide_type", ObjectSerializer.serialize(guideType, "Array<'sgRNA' | 'pgRNA'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedContentFiles !== undefined) {
            requestContext.setQueryParam("integrated_content_files", ObjectSerializer.serialize(integratedContentFiles, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleGeneListId !== undefined) {
            requestContext.setQueryParam("large_scale_gene_list.@id", ObjectSerializer.serialize(largeScaleGeneListId, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleGeneListAccession !== undefined) {
            requestContext.setQueryParam("large_scale_gene_list.accession", ObjectSerializer.serialize(largeScaleGeneListAccession, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleGeneListAliases !== undefined) {
            requestContext.setQueryParam("large_scale_gene_list.aliases", ObjectSerializer.serialize(largeScaleGeneListAliases, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleLociListId !== undefined) {
            requestContext.setQueryParam("large_scale_loci_list.@id", ObjectSerializer.serialize(largeScaleLociListId, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleLociListAccession !== undefined) {
            requestContext.setQueryParam("large_scale_loci_list.accession", ObjectSerializer.serialize(largeScaleLociListAccession, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleLociListAliases !== undefined) {
            requestContext.setQueryParam("large_scale_loci_list.aliases", ObjectSerializer.serialize(largeScaleLociListAliases, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (lowerBoundGuideCoverage !== undefined) {
            requestContext.setQueryParam("lower_bound_guide_coverage", ObjectSerializer.serialize(lowerBoundGuideCoverage, "Array<number>", ""));
        }

        // Query Params
        if (lowerBoundInsertSize !== undefined) {
            requestContext.setQueryParam("lower_bound_insert_size", ObjectSerializer.serialize(lowerBoundInsertSize, "Array<number>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (orfListId !== undefined) {
            requestContext.setQueryParam("orf_list.@id", ObjectSerializer.serialize(orfListId, "Array<string>", ""));
        }

        // Query Params
        if (orfListAliases !== undefined) {
            requestContext.setQueryParam("orf_list.aliases", ObjectSerializer.serialize(orfListAliases, "Array<string>", ""));
        }

        // Query Params
        if (orfListGene !== undefined) {
            requestContext.setQueryParam("orf_list.gene", ObjectSerializer.serialize(orfListGene, "Array<string>", ""));
        }

        // Query Params
        if (orfListOrfId !== undefined) {
            requestContext.setQueryParam("orf_list.orf_id", ObjectSerializer.serialize(orfListOrfId, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "Array<'tile' | 'exon' | 'genes' | 'loci' | 'genome-wide' | 'interactors' | 'alleles' | 'targeton'>", ""));
        }

        // Query Params
        if (selectionCriteria !== undefined) {
            requestContext.setQueryParam("selection_criteria", ObjectSerializer.serialize(selectionCriteria, "Array<'accessible genome regions' | 'candidate cis-regulatory elements' | 'chromatin states' | 'phenotype-associated variants' | 'DNase hypersensitive sites' | 'genes' | 'histone modifications' | 'protein interactors' | 'sequence variants' | 'synthetic elements' | 'transcription start sites' | 'TF binding sites'>", ""));
        }

        // Query Params
        if (smallScaleGeneListId !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.@id", ObjectSerializer.serialize(smallScaleGeneListId, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListGeneid !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.geneid", ObjectSerializer.serialize(smallScaleGeneListGeneid, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListName !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.name", ObjectSerializer.serialize(smallScaleGeneListName, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListSymbol !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.symbol", ObjectSerializer.serialize(smallScaleGeneListSymbol, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListSynonyms !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.synonyms", ObjectSerializer.serialize(smallScaleGeneListSynonyms, "Array<string>", "gene_name"));
        }

        // Query Params
        if (smallScaleLociList !== undefined) {
            requestContext.setQueryParam("small_scale_loci_list", ObjectSerializer.serialize(smallScaleLociList, "Array<Locus>", ""));
        }

        // Query Params
        if (sources !== undefined) {
            requestContext.setQueryParam("sources", ObjectSerializer.serialize(sources, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (targeton !== undefined) {
            requestContext.setQueryParam("targeton", ObjectSerializer.serialize(targeton, "Array<string>", ""));
        }

        // Query Params
        if (tilingModality !== undefined) {
            requestContext.setQueryParam("tiling_modality", ObjectSerializer.serialize(tilingModality, "Array<'peak tiling' | 'full tiling' | 'sparse peaks'>", ""));
        }

        // Query Params
        if (upperBoundGuideCoverage !== undefined) {
            requestContext.setQueryParam("upper_bound_guide_coverage", ObjectSerializer.serialize(upperBoundGuideCoverage, "Array<number>", ""));
        }

        // Query Params
        if (upperBoundInsertSize !== undefined) {
            requestContext.setQueryParam("upper_bound_insert_size", ObjectSerializer.serialize(upperBoundInsertSize, "Array<number>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async crisprModifications(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, activated?: Array<boolean>, activatingAgentTermId?: Array<string>, activatingAgentTermName?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesModified?: Array<string>, cas?: Array<'Cas9' | 'Cas12a' | 'Cas13' | 'dCas9' | 'nCas9' | 'SpG' | 'SpRY'>, casSpecies?: Array<'Streptococcus pyogenes (Sp)' | 'Staphylococcus aureus (Sa)' | 'Campylobacter jejuni (Cj)' | 'Neisseria meningitidis (Nm)'>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, fusedDomain?: Array<'2xVP64' | '3xVP64' | 'ABE8e' | 'ABE8.20' | 'ANTI-FLAG' | 'BE4' | 'BE4max' | 'eA3A' | 'eA3A-T31A' | 'eA3A-T44D-S45A' | 'KOX1-KRAB' | 'M-MLV RT (PE2)' | 'p300' | 'TdCBE' | 'TdCGBE' | 'TdDE' | 'VPH' | 'VP64' | 'VP64-p65-Rta (VPR)' | 'ZIM3-KRAB'>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, modality?: Array<'activation' | 'base editing' | 'cutting' | 'interference' | 'knockout' | 'localizing' | 'prime editing'>, notes?: Array<string>, productId?: Array<string>, releaseTimestamp?: Array<string>, sources?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taggedProtein?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "crisprModifications", "frame");
        }


































        // Path Params
        const localVarPath = '/crispr-modifications/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (activated !== undefined) {
            requestContext.setQueryParam("activated", ObjectSerializer.serialize(activated, "Array<boolean>", ""));
        }

        // Query Params
        if (activatingAgentTermId !== undefined) {
            requestContext.setQueryParam("activating_agent_term_id", ObjectSerializer.serialize(activatingAgentTermId, "Array<string>", ""));
        }

        // Query Params
        if (activatingAgentTermName !== undefined) {
            requestContext.setQueryParam("activating_agent_term_name", ObjectSerializer.serialize(activatingAgentTermName, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biosamplesModified !== undefined) {
            requestContext.setQueryParam("biosamples_modified", ObjectSerializer.serialize(biosamplesModified, "Array<string>", ""));
        }

        // Query Params
        if (cas !== undefined) {
            requestContext.setQueryParam("cas", ObjectSerializer.serialize(cas, "Array<'Cas9' | 'Cas12a' | 'Cas13' | 'dCas9' | 'nCas9' | 'SpG' | 'SpRY'>", ""));
        }

        // Query Params
        if (casSpecies !== undefined) {
            requestContext.setQueryParam("cas_species", ObjectSerializer.serialize(casSpecies, "Array<'Streptococcus pyogenes (Sp)' | 'Staphylococcus aureus (Sa)' | 'Campylobacter jejuni (Cj)' | 'Neisseria meningitidis (Nm)'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fusedDomain !== undefined) {
            requestContext.setQueryParam("fused_domain", ObjectSerializer.serialize(fusedDomain, "Array<'2xVP64' | '3xVP64' | 'ABE8e' | 'ABE8.20' | 'ANTI-FLAG' | 'BE4' | 'BE4max' | 'eA3A' | 'eA3A-T31A' | 'eA3A-T44D-S45A' | 'KOX1-KRAB' | 'M-MLV RT (PE2)' | 'p300' | 'TdCBE' | 'TdCGBE' | 'TdDE' | 'VPH' | 'VP64' | 'VP64-p65-Rta (VPR)' | 'ZIM3-KRAB'>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (modality !== undefined) {
            requestContext.setQueryParam("modality", ObjectSerializer.serialize(modality, "Array<'activation' | 'base editing' | 'cutting' | 'interference' | 'knockout' | 'localizing' | 'prime editing'>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (sources !== undefined) {
            requestContext.setQueryParam("sources", ObjectSerializer.serialize(sources, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taggedProtein !== undefined) {
            requestContext.setQueryParam("tagged_protein", ObjectSerializer.serialize(taggedProtein, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async curatedSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assemblies?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'barcodes' | 'editing templates' | 'elements' | 'external data for catalog' | 'genome' | 'genes' | 'guide RNAs' | 'transcriptome' | 'variants'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, transcriptomeAnnotations?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "curatedSets", "frame");
        }
















































































        // Path Params
        const localVarPath = '/curated-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (assemblies !== undefined) {
            requestContext.setQueryParam("assemblies", ObjectSerializer.serialize(assemblies, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardContactPiId !== undefined) {
            requestContext.setQueryParam("award.contact_pi.@id", ObjectSerializer.serialize(awardContactPiId, "Array<string>", ""));
        }

        // Query Params
        if (awardContactPiTitle !== undefined) {
            requestContext.setQueryParam("award.contact_pi.title", ObjectSerializer.serialize(awardContactPiTitle, "Array<string>", ""));
        }

        // Query Params
        if (awardTitle !== undefined) {
            requestContext.setQueryParam("award.title", ObjectSerializer.serialize(awardTitle, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donorsId !== undefined) {
            requestContext.setQueryParam("donors.@id", ObjectSerializer.serialize(donorsId, "Array<string>", ""));
        }

        // Query Params
        if (donorsAccession !== undefined) {
            requestContext.setQueryParam("donors.accession", ObjectSerializer.serialize(donorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (donorsAliases !== undefined) {
            requestContext.setQueryParam("donors.aliases", ObjectSerializer.serialize(donorsAliases, "Array<string>", ""));
        }

        // Query Params
        if (donorsSex !== undefined) {
            requestContext.setQueryParam("donors.sex", ObjectSerializer.serialize(donorsSex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (donorsStatus !== undefined) {
            requestContext.setQueryParam("donors.status", ObjectSerializer.serialize(donorsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (donorsTaxa !== undefined) {
            requestContext.setQueryParam("donors.taxa", ObjectSerializer.serialize(donorsTaxa, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'barcodes' | 'editing templates' | 'elements' | 'external data for catalog' | 'genome' | 'genes' | 'guide RNAs' | 'transcriptome' | 'variants'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesCreationTimestamp !== undefined) {
            requestContext.setQueryParam("files.creation_timestamp", ObjectSerializer.serialize(filesCreationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesFileSize !== undefined) {
            requestContext.setQueryParam("files.file_size", ObjectSerializer.serialize(filesFileSize, "Array<number>", ""));
        }

        // Query Params
        if (filesHref !== undefined) {
            requestContext.setQueryParam("files.href", ObjectSerializer.serialize(filesHref, "Array<string>", ""));
        }

        // Query Params
        if (filesS3Uri !== undefined) {
            requestContext.setQueryParam("files.s3_uri", ObjectSerializer.serialize(filesS3Uri, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatform !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform", ObjectSerializer.serialize(filesSequencingPlatform, "Array<string>", ""));
        }

        // Query Params
        if (filesSubmittedFileName !== undefined) {
            requestContext.setQueryParam("files.submitted_file_name", ObjectSerializer.serialize(filesSubmittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (samplesId !== undefined) {
            requestContext.setQueryParam("samples.@id", ObjectSerializer.serialize(samplesId, "Array<string>", ""));
        }

        // Query Params
        if (samplesAccession !== undefined) {
            requestContext.setQueryParam("samples.accession", ObjectSerializer.serialize(samplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesAliases !== undefined) {
            requestContext.setQueryParam("samples.aliases", ObjectSerializer.serialize(samplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatments !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments", ObjectSerializer.serialize(samplesCellFateChangeTreatments, "Array<string>", ""));
        }

        // Query Params
        if (samplesClassifications !== undefined) {
            requestContext.setQueryParam("samples.classifications", ObjectSerializer.serialize(samplesClassifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySets !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets", ObjectSerializer.serialize(samplesConstructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.@id", ObjectSerializer.serialize(samplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.term_name", ObjectSerializer.serialize(samplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesModifications !== undefined) {
            requestContext.setQueryParam("samples.modifications", ObjectSerializer.serialize(samplesModifications, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.@id", ObjectSerializer.serialize(samplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsAliases !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.aliases", ObjectSerializer.serialize(samplesSampleTermsAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsStatus !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.status", ObjectSerializer.serialize(samplesSampleTermsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (samplesSampleTermsSummary !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.summary", ObjectSerializer.serialize(samplesSampleTermsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.term_name", ObjectSerializer.serialize(samplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesStatus !== undefined) {
            requestContext.setQueryParam("samples.status", ObjectSerializer.serialize(samplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (samplesSummary !== undefined) {
            requestContext.setQueryParam("samples.summary", ObjectSerializer.serialize(samplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermId !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.@id", ObjectSerializer.serialize(samplesTargetedSampleTermId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermTermName !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.term_name", ObjectSerializer.serialize(samplesTargetedSampleTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesTaxa !== undefined) {
            requestContext.setQueryParam("samples.taxa", ObjectSerializer.serialize(samplesTaxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (samplesTreatments !== undefined) {
            requestContext.setQueryParam("samples.treatments", ObjectSerializer.serialize(samplesTreatments, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (transcriptomeAnnotations !== undefined) {
            requestContext.setQueryParam("transcriptome_annotations", ObjectSerializer.serialize(transcriptomeAnnotations, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async degronModifications(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, activated?: Array<boolean>, activatingAgentTermId?: Array<string>, activatingAgentTermName?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesModified?: Array<string>, creationTimestamp?: Array<string>, degronSystem?: Array<'AID' | 'AlissAid' | 'ssAID'>, description?: Array<string>, documents?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, modality?: Array<'degradation'>, notes?: Array<string>, productId?: Array<string>, releaseTimestamp?: Array<string>, sources?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taggedProteins?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "degronModifications", "frame");
        }
































        // Path Params
        const localVarPath = '/degron-modifications/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (activated !== undefined) {
            requestContext.setQueryParam("activated", ObjectSerializer.serialize(activated, "Array<boolean>", ""));
        }

        // Query Params
        if (activatingAgentTermId !== undefined) {
            requestContext.setQueryParam("activating_agent_term_id", ObjectSerializer.serialize(activatingAgentTermId, "Array<string>", ""));
        }

        // Query Params
        if (activatingAgentTermName !== undefined) {
            requestContext.setQueryParam("activating_agent_term_name", ObjectSerializer.serialize(activatingAgentTermName, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biosamplesModified !== undefined) {
            requestContext.setQueryParam("biosamples_modified", ObjectSerializer.serialize(biosamplesModified, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (degronSystem !== undefined) {
            requestContext.setQueryParam("degron_system", ObjectSerializer.serialize(degronSystem, "Array<'AID' | 'AlissAid' | 'ssAID'>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (modality !== undefined) {
            requestContext.setQueryParam("modality", ObjectSerializer.serialize(modality, "Array<'degradation'>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (sources !== undefined) {
            requestContext.setQueryParam("sources", ObjectSerializer.serialize(sources, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taggedProteins !== undefined) {
            requestContext.setQueryParam("tagged_proteins", ObjectSerializer.serialize(taggedProteins, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async documents(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, characterizationMethod?: Array<'FACS' | 'immunoblot' | 'immunofluorescence' | 'immunoprecipitation' | 'mass spectrometry' | 'PCR' | 'restriction digest' | 'RT-qPCR' | 'sequencing'>, creationTimestamp?: Array<string>, description?: Array<string>, documentType?: Array<'cell fate change protocol' | 'characterization' | 'computational protocol' | 'experimental protocol' | 'file format specification' | 'image' | 'model source data' | 'plate map' | 'plasmid map' | 'plasmid sequence' | 'standards'>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, urls?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "documents", "frame");
        }
























        // Path Params
        const localVarPath = '/documents/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (characterizationMethod !== undefined) {
            requestContext.setQueryParam("characterization_method", ObjectSerializer.serialize(characterizationMethod, "Array<'FACS' | 'immunoblot' | 'immunofluorescence' | 'immunoprecipitation' | 'mass spectrometry' | 'PCR' | 'restriction digest' | 'RT-qPCR' | 'sequencing'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documentType !== undefined) {
            requestContext.setQueryParam("document_type", ObjectSerializer.serialize(documentType, "Array<'cell fate change protocol' | 'characterization' | 'computational protocol' | 'experimental protocol' | 'file format specification' | 'image' | 'model source data' | 'plate map' | 'plasmid map' | 'plasmid sequence' | 'standards'>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (urls !== undefined) {
            requestContext.setQueryParam("urls", ObjectSerializer.serialize(urls, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns underlying file associated with file metadata
     * Download file.
     * @param fileId The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03).
     */
    public async download(fileId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fileId' is not null or undefined
        if (fileId === null || fileId === undefined) {
            throw new RequiredError("IgvfApi", "download", "fileId");
        }


        // Path Params
        const localVarPath = '/{file_id}/@@download'
            .replace('{' + 'file_id' + '}', encodeURIComponent(String(fileId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async genes(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, geneid?: Array<string>, geneidWithVersion?: Array<string>, locations?: Array<GeneLocation>, name?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, symbol?: Array<string>, synonyms?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, title?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uuid?: Array<string>, versionNumber?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "genes", "frame");
        }




























        // Path Params
        const localVarPath = '/genes/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (geneid !== undefined) {
            requestContext.setQueryParam("geneid", ObjectSerializer.serialize(geneid, "Array<string>", ""));
        }

        // Query Params
        if (geneidWithVersion !== undefined) {
            requestContext.setQueryParam("geneid_with_version", ObjectSerializer.serialize(geneidWithVersion, "Array<string>", ""));
        }

        // Query Params
        if (locations !== undefined) {
            requestContext.setQueryParam("locations", ObjectSerializer.serialize(locations, "Array<GeneLocation>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (symbol !== undefined) {
            requestContext.setQueryParam("symbol", ObjectSerializer.serialize(symbol, "Array<string>", ""));
        }

        // Query Params
        if (synonyms !== undefined) {
            requestContext.setQueryParam("synonyms", ObjectSerializer.serialize(synonyms, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (transcriptomeAnnotation !== undefined) {
            requestContext.setQueryParam("transcriptome_annotation", ObjectSerializer.serialize(transcriptomeAnnotation, "Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (versionNumber !== undefined) {
            requestContext.setQueryParam("version_number", ObjectSerializer.serialize(versionNumber, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async genomeBrowserAnnotationFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bigBed' | 'tabix'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "genomeBrowserAnnotationFiles", "frame");
        }
















































        // Path Params
        const localVarPath = '/genome-browser-annotation-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (assembly !== undefined) {
            requestContext.setQueryParam("assembly", ObjectSerializer.serialize(assembly, "Array<'GRCh38' | 'GRCm39'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'bigBed' | 'tabix'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileFormatType !== undefined) {
            requestContext.setQueryParam("file_format_type", ObjectSerializer.serialize(fileFormatType, "Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (transcriptomeAnnotation !== undefined) {
            requestContext.setQueryParam("transcriptome_annotation", ObjectSerializer.serialize(transcriptomeAnnotation, "Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieve detailed information about a specific item using its @id or uuid.
     * Get item information
     * @param resourceId The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;).
     * @param frame Constant value. Do not set.
     */
    public async getById(resourceId: string, frame: 'object', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'resourceId' is not null or undefined
        if (resourceId === null || resourceId === undefined) {
            throw new RequiredError("IgvfApi", "getById", "resourceId");
        }


        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "getById", "frame");
        }


        // Path Params
        const localVarPath = '/{resource_id}'
            .replace('{' + 'resource_id' + '}', encodeURIComponent(String(resourceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async humanDonors(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, ethnicities?: Array<'African American' | 'African Caribbean' | 'Arab' | 'Asian' | 'Black' | 'Black African' | 'Chinese' | 'Colombian' | 'Dai Chinese' | 'Esan' | 'Eskimo' | 'European' | 'Gambian' | 'Han Chinese' | 'Hispanic' | 'Indian' | 'Japanese' | 'Kinh Vietnamese' | 'Luhya' | 'Maasai' | 'Mende' | 'Native Hawaiian' | 'Pacific Islander' | 'Puerto Rican' | 'Yoruba'>, humanDonorIdentifiers?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, phenotypicFeaturesId?: Array<string>, phenotypicFeaturesFeatureId?: Array<string>, phenotypicFeaturesFeatureTermId?: Array<string>, phenotypicFeaturesFeatureTermName?: Array<string>, phenotypicFeaturesObservationDate?: Array<string>, phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, publicationIdentifiers?: Array<string>, publications?: Array<string>, relatedDonorsDonorId?: Array<string>, relatedDonorsDonorAccession?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sex?: Array<'male' | 'female' | 'unspecified'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "humanDonors", "frame");
        }











































        // Path Params
        const localVarPath = '/human-donors/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (ethnicities !== undefined) {
            requestContext.setQueryParam("ethnicities", ObjectSerializer.serialize(ethnicities, "Array<'African American' | 'African Caribbean' | 'Arab' | 'Asian' | 'Black' | 'Black African' | 'Chinese' | 'Colombian' | 'Dai Chinese' | 'Esan' | 'Eskimo' | 'European' | 'Gambian' | 'Han Chinese' | 'Hispanic' | 'Indian' | 'Japanese' | 'Kinh Vietnamese' | 'Luhya' | 'Maasai' | 'Mende' | 'Native Hawaiian' | 'Pacific Islander' | 'Puerto Rican' | 'Yoruba'>", ""));
        }

        // Query Params
        if (humanDonorIdentifiers !== undefined) {
            requestContext.setQueryParam("human_donor_identifiers", ObjectSerializer.serialize(humanDonorIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesId !== undefined) {
            requestContext.setQueryParam("phenotypic_features.@id", ObjectSerializer.serialize(phenotypicFeaturesId, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesFeatureId !== undefined) {
            requestContext.setQueryParam("phenotypic_features.feature.@id", ObjectSerializer.serialize(phenotypicFeaturesFeatureId, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesFeatureTermId !== undefined) {
            requestContext.setQueryParam("phenotypic_features.feature.term_id", ObjectSerializer.serialize(phenotypicFeaturesFeatureTermId, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesFeatureTermName !== undefined) {
            requestContext.setQueryParam("phenotypic_features.feature.term_name", ObjectSerializer.serialize(phenotypicFeaturesFeatureTermName, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesObservationDate !== undefined) {
            requestContext.setQueryParam("phenotypic_features.observation_date", ObjectSerializer.serialize(phenotypicFeaturesObservationDate, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesQuantityUnits !== undefined) {
            requestContext.setQueryParam("phenotypic_features.quantity_units", ObjectSerializer.serialize(phenotypicFeaturesQuantityUnits, "Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (relatedDonorsDonorId !== undefined) {
            requestContext.setQueryParam("related_donors.donor.@id", ObjectSerializer.serialize(relatedDonorsDonorId, "Array<string>", ""));
        }

        // Query Params
        if (relatedDonorsDonorAccession !== undefined) {
            requestContext.setQueryParam("related_donors.donor.accession", ObjectSerializer.serialize(relatedDonorsDonorAccession, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sex !== undefined) {
            requestContext.setQueryParam("sex", ObjectSerializer.serialize(sex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens'>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async imageFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'jpg' | 'png'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "imageFiles", "frame");
        }













































        // Path Params
        const localVarPath = '/image-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'jpg' | 'png'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async images(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, caption?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, downloadUrl?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, thumbNail?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "images", "frame");
        }




















        // Path Params
        const localVarPath = '/images/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (caption !== undefined) {
            requestContext.setQueryParam("caption", ObjectSerializer.serialize(caption, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (downloadUrl !== undefined) {
            requestContext.setQueryParam("download_url", ObjectSerializer.serialize(downloadUrl, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (thumbNail !== undefined) {
            requestContext.setQueryParam("thumb_nail", ObjectSerializer.serialize(thumbNail, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async inVitroSystems(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellFateChangeProtocol?: Array<string>, cellFateChangeTreatmentsId?: Array<string>, cellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, cellFateChangeTreatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, cellFateChangeTreatmentsSummary?: Array<string>, cellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, cellularSubPool?: Array<string>, classifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, demultiplexedFrom?: Array<string>, demultiplexedTo?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, growthMedium?: Array<'DMEM with serum' | 'DMEM without serum' | 'SMBM with serum' | 'SMBM without serum'>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFromId?: Array<string>, originatedFromAccession?: Array<string>, partOf?: Array<string>, parts?: Array<string>, passageNumber?: Array<number>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targetedSampleTerm?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostChange?: Array<number>, timePostChangeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "inVitroSystems", "frame");
        }







































































































        // Path Params
        const localVarPath = '/in-vitro-systems/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (age !== undefined) {
            requestContext.setQueryParam("age", ObjectSerializer.serialize(age, "Array<string>", ""));
        }

        // Query Params
        if (ageUnits !== undefined) {
            requestContext.setQueryParam("age_units", ObjectSerializer.serialize(ageUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biomarkers !== undefined) {
            requestContext.setQueryParam("biomarkers", ObjectSerializer.serialize(biomarkers, "Array<string>", ""));
        }

        // Query Params
        if (cellFateChangeProtocol !== undefined) {
            requestContext.setQueryParam("cell_fate_change_protocol", ObjectSerializer.serialize(cellFateChangeProtocol, "Array<string>", ""));
        }

        // Query Params
        if (cellFateChangeTreatmentsId !== undefined) {
            requestContext.setQueryParam("cell_fate_change_treatments.@id", ObjectSerializer.serialize(cellFateChangeTreatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (cellFateChangeTreatmentsPurpose !== undefined) {
            requestContext.setQueryParam("cell_fate_change_treatments.purpose", ObjectSerializer.serialize(cellFateChangeTreatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (cellFateChangeTreatmentsStatus !== undefined) {
            requestContext.setQueryParam("cell_fate_change_treatments.status", ObjectSerializer.serialize(cellFateChangeTreatmentsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (cellFateChangeTreatmentsSummary !== undefined) {
            requestContext.setQueryParam("cell_fate_change_treatments.summary", ObjectSerializer.serialize(cellFateChangeTreatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (cellFateChangeTreatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("cell_fate_change_treatments.treatment_type", ObjectSerializer.serialize(cellFateChangeTreatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (cellularSubPool !== undefined) {
            requestContext.setQueryParam("cellular_sub_pool", ObjectSerializer.serialize(cellularSubPool, "Array<string>", ""));
        }

        // Query Params
        if (classifications !== undefined) {
            requestContext.setQueryParam("classifications", ObjectSerializer.serialize(classifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (constructLibrarySets !== undefined) {
            requestContext.setQueryParam("construct_library_sets", ObjectSerializer.serialize(constructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dateObtained !== undefined) {
            requestContext.setQueryParam("date_obtained", ObjectSerializer.serialize(dateObtained, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (demultiplexedFrom !== undefined) {
            requestContext.setQueryParam("demultiplexed_from", ObjectSerializer.serialize(demultiplexedFrom, "Array<string>", ""));
        }

        // Query Params
        if (demultiplexedTo !== undefined) {
            requestContext.setQueryParam("demultiplexed_to", ObjectSerializer.serialize(demultiplexedTo, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsId !== undefined) {
            requestContext.setQueryParam("disease_terms.@id", ObjectSerializer.serialize(diseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("disease_terms.term_name", ObjectSerializer.serialize(diseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donors !== undefined) {
            requestContext.setQueryParam("donors", ObjectSerializer.serialize(donors, "Array<string>", ""));
        }

        // Query Params
        if (embryonic !== undefined) {
            requestContext.setQueryParam("embryonic", ObjectSerializer.serialize(embryonic, "Array<boolean>", ""));
        }

        // Query Params
        if (fileSetsId !== undefined) {
            requestContext.setQueryParam("file_sets.@id", ObjectSerializer.serialize(fileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAccession !== undefined) {
            requestContext.setQueryParam("file_sets.accession", ObjectSerializer.serialize(fileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAliases !== undefined) {
            requestContext.setQueryParam("file_sets.aliases", ObjectSerializer.serialize(fileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAssayTermTermName !== undefined) {
            requestContext.setQueryParam("file_sets.assay_term.term_name", ObjectSerializer.serialize(fileSetsAssayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsLabTitle !== undefined) {
            requestContext.setQueryParam("file_sets.lab.title", ObjectSerializer.serialize(fileSetsLabTitle, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsStatus !== undefined) {
            requestContext.setQueryParam("file_sets.status", ObjectSerializer.serialize(fileSetsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (fileSetsSummary !== undefined) {
            requestContext.setQueryParam("file_sets.summary", ObjectSerializer.serialize(fileSetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (growthMedium !== undefined) {
            requestContext.setQueryParam("growth_medium", ObjectSerializer.serialize(growthMedium, "Array<'DMEM with serum' | 'DMEM without serum' | 'SMBM with serum' | 'SMBM without serum'>", ""));
        }

        // Query Params
        if (institutionalCertificatesId !== undefined) {
            requestContext.setQueryParam("institutional_certificates.@id", ObjectSerializer.serialize(institutionalCertificatesId, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesCertificateIdentifier !== undefined) {
            requestContext.setQueryParam("institutional_certificates.certificate_identifier", ObjectSerializer.serialize(institutionalCertificatesCertificateIdentifier, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (lowerBoundAge !== undefined) {
            requestContext.setQueryParam("lower_bound_age", ObjectSerializer.serialize(lowerBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (lowerBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("lower_bound_age_in_hours", ObjectSerializer.serialize(lowerBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (modificationsId !== undefined) {
            requestContext.setQueryParam("modifications.@id", ObjectSerializer.serialize(modificationsId, "Array<string>", ""));
        }

        // Query Params
        if (modificationsStatus !== undefined) {
            requestContext.setQueryParam("modifications.status", ObjectSerializer.serialize(modificationsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (modificationsSummary !== undefined) {
            requestContext.setQueryParam("modifications.summary", ObjectSerializer.serialize(modificationsSummary, "Array<string>", ""));
        }

        // Query Params
        if (moi !== undefined) {
            requestContext.setQueryParam("moi", ObjectSerializer.serialize(moi, "Array<number>", ""));
        }

        // Query Params
        if (multiplexedInId !== undefined) {
            requestContext.setQueryParam("multiplexed_in.@id", ObjectSerializer.serialize(multiplexedInId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedInAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_in.accession", ObjectSerializer.serialize(multiplexedInAccession, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (nucleicAcidDelivery !== undefined) {
            requestContext.setQueryParam("nucleic_acid_delivery", ObjectSerializer.serialize(nucleicAcidDelivery, "Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>", ""));
        }

        // Query Params
        if (originOf !== undefined) {
            requestContext.setQueryParam("origin_of", ObjectSerializer.serialize(originOf, "Array<string>", ""));
        }

        // Query Params
        if (originatedFromId !== undefined) {
            requestContext.setQueryParam("originated_from.@id", ObjectSerializer.serialize(originatedFromId, "Array<string>", ""));
        }

        // Query Params
        if (originatedFromAccession !== undefined) {
            requestContext.setQueryParam("originated_from.accession", ObjectSerializer.serialize(originatedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (partOf !== undefined) {
            requestContext.setQueryParam("part_of", ObjectSerializer.serialize(partOf, "Array<string>", ""));
        }

        // Query Params
        if (parts !== undefined) {
            requestContext.setQueryParam("parts", ObjectSerializer.serialize(parts, "Array<string>", ""));
        }

        // Query Params
        if (passageNumber !== undefined) {
            requestContext.setQueryParam("passage_number", ObjectSerializer.serialize(passageNumber, "Array<number>", ""));
        }

        // Query Params
        if (pooledFrom !== undefined) {
            requestContext.setQueryParam("pooled_from", ObjectSerializer.serialize(pooledFrom, "Array<string>", ""));
        }

        // Query Params
        if (pooledIn !== undefined) {
            requestContext.setQueryParam("pooled_in", ObjectSerializer.serialize(pooledIn, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsId !== undefined) {
            requestContext.setQueryParam("sample_terms.@id", ObjectSerializer.serialize(sampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsTermName !== undefined) {
            requestContext.setQueryParam("sample_terms.term_name", ObjectSerializer.serialize(sampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (sex !== undefined) {
            requestContext.setQueryParam("sex", ObjectSerializer.serialize(sex, "Array<'female' | 'male' | 'mixed' | 'unspecified'>", ""));
        }

        // Query Params
        if (sortedFractions !== undefined) {
            requestContext.setQueryParam("sorted_fractions", ObjectSerializer.serialize(sortedFractions, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromId !== undefined) {
            requestContext.setQueryParam("sorted_from.@id", ObjectSerializer.serialize(sortedFromId, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromAccession !== undefined) {
            requestContext.setQueryParam("sorted_from.accession", ObjectSerializer.serialize(sortedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromDetail !== undefined) {
            requestContext.setQueryParam("sorted_from_detail", ObjectSerializer.serialize(sortedFromDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (startingAmount !== undefined) {
            requestContext.setQueryParam("starting_amount", ObjectSerializer.serialize(startingAmount, "Array<number>", ""));
        }

        // Query Params
        if (startingAmountUnits !== undefined) {
            requestContext.setQueryParam("starting_amount_units", ObjectSerializer.serialize(startingAmountUnits, "Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (targetedSampleTerm !== undefined) {
            requestContext.setQueryParam("targeted_sample_term", ObjectSerializer.serialize(targetedSampleTerm, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (timePostChange !== undefined) {
            requestContext.setQueryParam("time_post_change", ObjectSerializer.serialize(timePostChange, "Array<number>", ""));
        }

        // Query Params
        if (timePostChangeUnits !== undefined) {
            requestContext.setQueryParam("time_post_change_units", ObjectSerializer.serialize(timePostChangeUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (timePostLibraryDelivery !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery", ObjectSerializer.serialize(timePostLibraryDelivery, "Array<number>", ""));
        }

        // Query Params
        if (timePostLibraryDeliveryUnits !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery_units", ObjectSerializer.serialize(timePostLibraryDeliveryUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (treatmentsId !== undefined) {
            requestContext.setQueryParam("treatments.@id", ObjectSerializer.serialize(treatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsPurpose !== undefined) {
            requestContext.setQueryParam("treatments.purpose", ObjectSerializer.serialize(treatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (treatmentsStatus !== undefined) {
            requestContext.setQueryParam("treatments.status", ObjectSerializer.serialize(treatmentsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (treatmentsSummary !== undefined) {
            requestContext.setQueryParam("treatments.summary", ObjectSerializer.serialize(treatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("treatments.treatment_type", ObjectSerializer.serialize(treatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (upperBoundAge !== undefined) {
            requestContext.setQueryParam("upper_bound_age", ObjectSerializer.serialize(upperBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (upperBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("upper_bound_age_in_hours", ObjectSerializer.serialize(upperBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async institutionalCertificates(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, certificateIdentifier?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dataUseLimitation?: Array<'DS' | 'GRU' | 'HMB' | 'other'>, dataUseLimitationModifiers?: Array<'COL' | 'GSO' | 'IRB' | 'MDS' | 'NPU' | 'PUB'>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, samples?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, urls?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "institutionalCertificates", "frame");
        }



























        // Path Params
        const localVarPath = '/institutional-certificates/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (certificateIdentifier !== undefined) {
            requestContext.setQueryParam("certificate_identifier", ObjectSerializer.serialize(certificateIdentifier, "Array<string>", ""));
        }

        // Query Params
        if (controlledAccess !== undefined) {
            requestContext.setQueryParam("controlled_access", ObjectSerializer.serialize(controlledAccess, "Array<boolean>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dataUseLimitation !== undefined) {
            requestContext.setQueryParam("data_use_limitation", ObjectSerializer.serialize(dataUseLimitation, "Array<'DS' | 'GRU' | 'HMB' | 'other'>", ""));
        }

        // Query Params
        if (dataUseLimitationModifiers !== undefined) {
            requestContext.setQueryParam("data_use_limitation_modifiers", ObjectSerializer.serialize(dataUseLimitationModifiers, "Array<'COL' | 'GSO' | 'IRB' | 'MDS' | 'NPU' | 'PUB'>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (samples !== undefined) {
            requestContext.setQueryParam("samples", ObjectSerializer.serialize(samples, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (urls !== undefined) {
            requestContext.setQueryParam("urls", ObjectSerializer.serialize(urls, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async labs(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardsId?: Array<string>, awardsComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardsName?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, instituteLabel?: Array<string>, name?: Array<string>, notes?: Array<string>, pi?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "labs", "frame");
        }
























        // Path Params
        const localVarPath = '/labs/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardsId !== undefined) {
            requestContext.setQueryParam("awards.@id", ObjectSerializer.serialize(awardsId, "Array<string>", ""));
        }

        // Query Params
        if (awardsComponent !== undefined) {
            requestContext.setQueryParam("awards.component", ObjectSerializer.serialize(awardsComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardsName !== undefined) {
            requestContext.setQueryParam("awards.name", ObjectSerializer.serialize(awardsName, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (instituteLabel !== undefined) {
            requestContext.setQueryParam("institute_label", ObjectSerializer.serialize(instituteLabel, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (pi !== undefined) {
            requestContext.setQueryParam("pi", ObjectSerializer.serialize(pi, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'current' | 'deleted' | 'disabled'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async matrixFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, dimension1?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>, dimension2?: Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>, documents?: Array<string>, fileFormat?: Array<'h5ad' | 'hdf5' | 'mtx' | 'tar' | 'hic'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "matrixFiles", "frame");
        }

















































        // Path Params
        const localVarPath = '/matrix-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentSummary !== undefined) {
            requestContext.setQueryParam("content_summary", ObjectSerializer.serialize(contentSummary, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (dimension1 !== undefined) {
            requestContext.setQueryParam("dimension1", ObjectSerializer.serialize(dimension1, "Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>", ""));
        }

        // Query Params
        if (dimension2 !== undefined) {
            requestContext.setQueryParam("dimension2", ObjectSerializer.serialize(dimension2, "Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'h5ad' | 'hdf5' | 'mtx' | 'tar' | 'hic'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (referenceFiles !== undefined) {
            requestContext.setQueryParam("reference_files", ObjectSerializer.serialize(referenceFiles, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async measurementSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assayTermId?: Array<string>, assayTermTermName?: Array<string>, auxiliarySetsId?: Array<string>, auxiliarySetsAccession?: Array<string>, auxiliarySetsAliases?: Array<string>, auxiliarySetsFileSetType?: Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlFileSetsId?: Array<string>, controlFileSetsAccession?: Array<string>, controlFileSetsAliases?: Array<string>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, externalImageUrl?: Array<string>, fileSetType?: Array<'experimental data'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatformId?: Array<string>, filesSequencingPlatformTermName?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, libraryConstructionPlatformId?: Array<string>, libraryConstructionPlatformTermName?: Array<string>, multiomeSize?: Array<number>, notes?: Array<string>, preferredAssayTitle?: Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, relatedMultiomeDatasetsId?: Array<string>, relatedMultiomeDatasetsAccession?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatmentsId?: Array<string>, samplesCellFateChangeTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, samplesCellFateChangeTreatmentsSummary?: Array<string>, samplesCellFateChangeTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySetsId?: Array<string>, samplesConstructLibrarySetsAccession?: Array<string>, samplesConstructLibrarySetsFileSetType?: Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>, samplesConstructLibrarySetsSmallScaleGeneListId?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListGeneid?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListName?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListSummary?: Array<string>, samplesConstructLibrarySetsSmallScaleGeneListSymbol?: Array<string>, samplesConstructLibrarySetsSummary?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModificationsId?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatmentsId?: Array<string>, samplesTreatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, samplesTreatmentsSummary?: Array<string>, samplesTreatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, sequencingLibraryTypes?: Array<'direct RNA' | 'exome capture' | 'mRNA enriched' | 'rRNA depleted' | 'polyA depleted' | 'polyA enriched'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, targetedGenesId?: Array<string>, targetedGenesGeneid?: Array<string>, targetedGenesName?: Array<string>, targetedGenesSymbol?: Array<string>, targetedGenesSynonyms?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "measurementSets", "frame");
        }


















































































































        // Path Params
        const localVarPath = '/measurement-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (assayTermId !== undefined) {
            requestContext.setQueryParam("assay_term.@id", ObjectSerializer.serialize(assayTermId, "Array<string>", ""));
        }

        // Query Params
        if (assayTermTermName !== undefined) {
            requestContext.setQueryParam("assay_term.term_name", ObjectSerializer.serialize(assayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (auxiliarySetsId !== undefined) {
            requestContext.setQueryParam("auxiliary_sets.@id", ObjectSerializer.serialize(auxiliarySetsId, "Array<string>", ""));
        }

        // Query Params
        if (auxiliarySetsAccession !== undefined) {
            requestContext.setQueryParam("auxiliary_sets.accession", ObjectSerializer.serialize(auxiliarySetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (auxiliarySetsAliases !== undefined) {
            requestContext.setQueryParam("auxiliary_sets.aliases", ObjectSerializer.serialize(auxiliarySetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (auxiliarySetsFileSetType !== undefined) {
            requestContext.setQueryParam("auxiliary_sets.file_set_type", ObjectSerializer.serialize(auxiliarySetsFileSetType, "Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardContactPiId !== undefined) {
            requestContext.setQueryParam("award.contact_pi.@id", ObjectSerializer.serialize(awardContactPiId, "Array<string>", ""));
        }

        // Query Params
        if (awardContactPiTitle !== undefined) {
            requestContext.setQueryParam("award.contact_pi.title", ObjectSerializer.serialize(awardContactPiTitle, "Array<string>", ""));
        }

        // Query Params
        if (awardTitle !== undefined) {
            requestContext.setQueryParam("award.title", ObjectSerializer.serialize(awardTitle, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlFileSetsId !== undefined) {
            requestContext.setQueryParam("control_file_sets.@id", ObjectSerializer.serialize(controlFileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (controlFileSetsAccession !== undefined) {
            requestContext.setQueryParam("control_file_sets.accession", ObjectSerializer.serialize(controlFileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlFileSetsAliases !== undefined) {
            requestContext.setQueryParam("control_file_sets.aliases", ObjectSerializer.serialize(controlFileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donorsId !== undefined) {
            requestContext.setQueryParam("donors.@id", ObjectSerializer.serialize(donorsId, "Array<string>", ""));
        }

        // Query Params
        if (donorsAccession !== undefined) {
            requestContext.setQueryParam("donors.accession", ObjectSerializer.serialize(donorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (donorsAliases !== undefined) {
            requestContext.setQueryParam("donors.aliases", ObjectSerializer.serialize(donorsAliases, "Array<string>", ""));
        }

        // Query Params
        if (donorsSex !== undefined) {
            requestContext.setQueryParam("donors.sex", ObjectSerializer.serialize(donorsSex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (donorsStatus !== undefined) {
            requestContext.setQueryParam("donors.status", ObjectSerializer.serialize(donorsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (donorsTaxa !== undefined) {
            requestContext.setQueryParam("donors.taxa", ObjectSerializer.serialize(donorsTaxa, "Array<string>", ""));
        }

        // Query Params
        if (externalImageUrl !== undefined) {
            requestContext.setQueryParam("external_image_url", ObjectSerializer.serialize(externalImageUrl, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'experimental data'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesCreationTimestamp !== undefined) {
            requestContext.setQueryParam("files.creation_timestamp", ObjectSerializer.serialize(filesCreationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesFileSize !== undefined) {
            requestContext.setQueryParam("files.file_size", ObjectSerializer.serialize(filesFileSize, "Array<number>", ""));
        }

        // Query Params
        if (filesHref !== undefined) {
            requestContext.setQueryParam("files.href", ObjectSerializer.serialize(filesHref, "Array<string>", ""));
        }

        // Query Params
        if (filesS3Uri !== undefined) {
            requestContext.setQueryParam("files.s3_uri", ObjectSerializer.serialize(filesS3Uri, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatformId !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform.@id", ObjectSerializer.serialize(filesSequencingPlatformId, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatformTermName !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform.term_name", ObjectSerializer.serialize(filesSequencingPlatformTermName, "Array<string>", ""));
        }

        // Query Params
        if (filesSubmittedFileName !== undefined) {
            requestContext.setQueryParam("files.submitted_file_name", ObjectSerializer.serialize(filesSubmittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (libraryConstructionPlatformId !== undefined) {
            requestContext.setQueryParam("library_construction_platform.@id", ObjectSerializer.serialize(libraryConstructionPlatformId, "Array<string>", ""));
        }

        // Query Params
        if (libraryConstructionPlatformTermName !== undefined) {
            requestContext.setQueryParam("library_construction_platform.term_name", ObjectSerializer.serialize(libraryConstructionPlatformTermName, "Array<string>", ""));
        }

        // Query Params
        if (multiomeSize !== undefined) {
            requestContext.setQueryParam("multiome_size", ObjectSerializer.serialize(multiomeSize, "Array<number>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (preferredAssayTitle !== undefined) {
            requestContext.setQueryParam("preferred_assay_title", ObjectSerializer.serialize(preferredAssayTitle, "Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (relatedMultiomeDatasetsId !== undefined) {
            requestContext.setQueryParam("related_multiome_datasets.@id", ObjectSerializer.serialize(relatedMultiomeDatasetsId, "Array<string>", ""));
        }

        // Query Params
        if (relatedMultiomeDatasetsAccession !== undefined) {
            requestContext.setQueryParam("related_multiome_datasets.accession", ObjectSerializer.serialize(relatedMultiomeDatasetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (samplesId !== undefined) {
            requestContext.setQueryParam("samples.@id", ObjectSerializer.serialize(samplesId, "Array<string>", ""));
        }

        // Query Params
        if (samplesAccession !== undefined) {
            requestContext.setQueryParam("samples.accession", ObjectSerializer.serialize(samplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesAliases !== undefined) {
            requestContext.setQueryParam("samples.aliases", ObjectSerializer.serialize(samplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatmentsId !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments.@id", ObjectSerializer.serialize(samplesCellFateChangeTreatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatmentsPurpose !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments.purpose", ObjectSerializer.serialize(samplesCellFateChangeTreatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatmentsSummary !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments.summary", ObjectSerializer.serialize(samplesCellFateChangeTreatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments.treatment_type", ObjectSerializer.serialize(samplesCellFateChangeTreatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (samplesClassifications !== undefined) {
            requestContext.setQueryParam("samples.classifications", ObjectSerializer.serialize(samplesClassifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsId !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.@id", ObjectSerializer.serialize(samplesConstructLibrarySetsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsAccession !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.accession", ObjectSerializer.serialize(samplesConstructLibrarySetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsFileSetType !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.file_set_type", ObjectSerializer.serialize(samplesConstructLibrarySetsFileSetType, "Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSmallScaleGeneListId !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.small_scale_gene_list.@id", ObjectSerializer.serialize(samplesConstructLibrarySetsSmallScaleGeneListId, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSmallScaleGeneListGeneid !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.small_scale_gene_list.geneid", ObjectSerializer.serialize(samplesConstructLibrarySetsSmallScaleGeneListGeneid, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSmallScaleGeneListName !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.small_scale_gene_list.name", ObjectSerializer.serialize(samplesConstructLibrarySetsSmallScaleGeneListName, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSmallScaleGeneListSummary !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.small_scale_gene_list.summary", ObjectSerializer.serialize(samplesConstructLibrarySetsSmallScaleGeneListSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSmallScaleGeneListSymbol !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.small_scale_gene_list.symbol", ObjectSerializer.serialize(samplesConstructLibrarySetsSmallScaleGeneListSymbol, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSummary !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.summary", ObjectSerializer.serialize(samplesConstructLibrarySetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.@id", ObjectSerializer.serialize(samplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.term_name", ObjectSerializer.serialize(samplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesModificationsId !== undefined) {
            requestContext.setQueryParam("samples.modifications.@id", ObjectSerializer.serialize(samplesModificationsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.@id", ObjectSerializer.serialize(samplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsAliases !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.aliases", ObjectSerializer.serialize(samplesSampleTermsAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsStatus !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.status", ObjectSerializer.serialize(samplesSampleTermsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (samplesSampleTermsSummary !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.summary", ObjectSerializer.serialize(samplesSampleTermsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.term_name", ObjectSerializer.serialize(samplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesStatus !== undefined) {
            requestContext.setQueryParam("samples.status", ObjectSerializer.serialize(samplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (samplesSummary !== undefined) {
            requestContext.setQueryParam("samples.summary", ObjectSerializer.serialize(samplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermId !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.@id", ObjectSerializer.serialize(samplesTargetedSampleTermId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermTermName !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.term_name", ObjectSerializer.serialize(samplesTargetedSampleTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesTaxa !== undefined) {
            requestContext.setQueryParam("samples.taxa", ObjectSerializer.serialize(samplesTaxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (samplesTreatmentsId !== undefined) {
            requestContext.setQueryParam("samples.treatments.@id", ObjectSerializer.serialize(samplesTreatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTreatmentsPurpose !== undefined) {
            requestContext.setQueryParam("samples.treatments.purpose", ObjectSerializer.serialize(samplesTreatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (samplesTreatmentsSummary !== undefined) {
            requestContext.setQueryParam("samples.treatments.summary", ObjectSerializer.serialize(samplesTreatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTreatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("samples.treatments.treatment_type", ObjectSerializer.serialize(samplesTreatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (sequencingLibraryTypes !== undefined) {
            requestContext.setQueryParam("sequencing_library_types", ObjectSerializer.serialize(sequencingLibraryTypes, "Array<'direct RNA' | 'exome capture' | 'mRNA enriched' | 'rRNA depleted' | 'polyA depleted' | 'polyA enriched'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (targetedGenesId !== undefined) {
            requestContext.setQueryParam("targeted_genes.@id", ObjectSerializer.serialize(targetedGenesId, "Array<string>", ""));
        }

        // Query Params
        if (targetedGenesGeneid !== undefined) {
            requestContext.setQueryParam("targeted_genes.geneid", ObjectSerializer.serialize(targetedGenesGeneid, "Array<string>", ""));
        }

        // Query Params
        if (targetedGenesName !== undefined) {
            requestContext.setQueryParam("targeted_genes.name", ObjectSerializer.serialize(targetedGenesName, "Array<string>", ""));
        }

        // Query Params
        if (targetedGenesSymbol !== undefined) {
            requestContext.setQueryParam("targeted_genes.symbol", ObjectSerializer.serialize(targetedGenesSymbol, "Array<string>", ""));
        }

        // Query Params
        if (targetedGenesSynonyms !== undefined) {
            requestContext.setQueryParam("targeted_genes.synonyms", ObjectSerializer.serialize(targetedGenesSynonyms, "Array<string>", "gene_name"));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async modelFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'hdf5' | 'json' | 'tar' | 'tsv'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "modelFiles", "frame");
        }















































        // Path Params
        const localVarPath = '/model-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (anvilUrl !== undefined) {
            requestContext.setQueryParam("anvil_url", ObjectSerializer.serialize(anvilUrl, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (controlledAccess !== undefined) {
            requestContext.setQueryParam("controlled_access", ObjectSerializer.serialize(controlledAccess, "Array<boolean>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'hdf5' | 'json' | 'tar' | 'tsv'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async modelSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, assessedGenes?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'neural network' | 'random forest' | 'decision tree' | 'support vector machine' | 'variant binding effect'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSetsId?: Array<string>, inputFileSetsAccession?: Array<string>, inputFileSetsAliases?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, modelName?: Array<string>, modelVersion?: Array<string>, modelZooLocation?: Array<string>, notes?: Array<string>, predictionObjects?: Array<'coding variants' | 'non-coding variants' | 'all variants' | 'regulatory elements' | 'genes'>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySets?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, softwareVersion?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "modelSets", "frame");
        }






















































































        // Path Params
        const localVarPath = '/model-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (assessedGenes !== undefined) {
            requestContext.setQueryParam("assessed_genes", ObjectSerializer.serialize(assessedGenes, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardContactPiId !== undefined) {
            requestContext.setQueryParam("award.contact_pi.@id", ObjectSerializer.serialize(awardContactPiId, "Array<string>", ""));
        }

        // Query Params
        if (awardContactPiTitle !== undefined) {
            requestContext.setQueryParam("award.contact_pi.title", ObjectSerializer.serialize(awardContactPiTitle, "Array<string>", ""));
        }

        // Query Params
        if (awardTitle !== undefined) {
            requestContext.setQueryParam("award.title", ObjectSerializer.serialize(awardTitle, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donorsId !== undefined) {
            requestContext.setQueryParam("donors.@id", ObjectSerializer.serialize(donorsId, "Array<string>", ""));
        }

        // Query Params
        if (donorsAccession !== undefined) {
            requestContext.setQueryParam("donors.accession", ObjectSerializer.serialize(donorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (donorsAliases !== undefined) {
            requestContext.setQueryParam("donors.aliases", ObjectSerializer.serialize(donorsAliases, "Array<string>", ""));
        }

        // Query Params
        if (donorsSex !== undefined) {
            requestContext.setQueryParam("donors.sex", ObjectSerializer.serialize(donorsSex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (donorsStatus !== undefined) {
            requestContext.setQueryParam("donors.status", ObjectSerializer.serialize(donorsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (donorsTaxa !== undefined) {
            requestContext.setQueryParam("donors.taxa", ObjectSerializer.serialize(donorsTaxa, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'neural network' | 'random forest' | 'decision tree' | 'support vector machine' | 'variant binding effect'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesCreationTimestamp !== undefined) {
            requestContext.setQueryParam("files.creation_timestamp", ObjectSerializer.serialize(filesCreationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesFileSize !== undefined) {
            requestContext.setQueryParam("files.file_size", ObjectSerializer.serialize(filesFileSize, "Array<number>", ""));
        }

        // Query Params
        if (filesHref !== undefined) {
            requestContext.setQueryParam("files.href", ObjectSerializer.serialize(filesHref, "Array<string>", ""));
        }

        // Query Params
        if (filesS3Uri !== undefined) {
            requestContext.setQueryParam("files.s3_uri", ObjectSerializer.serialize(filesS3Uri, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatform !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform", ObjectSerializer.serialize(filesSequencingPlatform, "Array<string>", ""));
        }

        // Query Params
        if (filesSubmittedFileName !== undefined) {
            requestContext.setQueryParam("files.submitted_file_name", ObjectSerializer.serialize(filesSubmittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsId !== undefined) {
            requestContext.setQueryParam("input_file_sets.@id", ObjectSerializer.serialize(inputFileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsAccession !== undefined) {
            requestContext.setQueryParam("input_file_sets.accession", ObjectSerializer.serialize(inputFileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSetsAliases !== undefined) {
            requestContext.setQueryParam("input_file_sets.aliases", ObjectSerializer.serialize(inputFileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (modelName !== undefined) {
            requestContext.setQueryParam("model_name", ObjectSerializer.serialize(modelName, "Array<string>", ""));
        }

        // Query Params
        if (modelVersion !== undefined) {
            requestContext.setQueryParam("model_version", ObjectSerializer.serialize(modelVersion, "Array<string>", ""));
        }

        // Query Params
        if (modelZooLocation !== undefined) {
            requestContext.setQueryParam("model_zoo_location", ObjectSerializer.serialize(modelZooLocation, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (predictionObjects !== undefined) {
            requestContext.setQueryParam("prediction_objects", ObjectSerializer.serialize(predictionObjects, "Array<'coding variants' | 'non-coding variants' | 'all variants' | 'regulatory elements' | 'genes'>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (samplesId !== undefined) {
            requestContext.setQueryParam("samples.@id", ObjectSerializer.serialize(samplesId, "Array<string>", ""));
        }

        // Query Params
        if (samplesAccession !== undefined) {
            requestContext.setQueryParam("samples.accession", ObjectSerializer.serialize(samplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesAliases !== undefined) {
            requestContext.setQueryParam("samples.aliases", ObjectSerializer.serialize(samplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatments !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments", ObjectSerializer.serialize(samplesCellFateChangeTreatments, "Array<string>", ""));
        }

        // Query Params
        if (samplesClassifications !== undefined) {
            requestContext.setQueryParam("samples.classifications", ObjectSerializer.serialize(samplesClassifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySets !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets", ObjectSerializer.serialize(samplesConstructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.@id", ObjectSerializer.serialize(samplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.term_name", ObjectSerializer.serialize(samplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesModifications !== undefined) {
            requestContext.setQueryParam("samples.modifications", ObjectSerializer.serialize(samplesModifications, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.@id", ObjectSerializer.serialize(samplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsAliases !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.aliases", ObjectSerializer.serialize(samplesSampleTermsAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsStatus !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.status", ObjectSerializer.serialize(samplesSampleTermsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (samplesSampleTermsSummary !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.summary", ObjectSerializer.serialize(samplesSampleTermsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.term_name", ObjectSerializer.serialize(samplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesStatus !== undefined) {
            requestContext.setQueryParam("samples.status", ObjectSerializer.serialize(samplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (samplesSummary !== undefined) {
            requestContext.setQueryParam("samples.summary", ObjectSerializer.serialize(samplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermId !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.@id", ObjectSerializer.serialize(samplesTargetedSampleTermId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermTermName !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.term_name", ObjectSerializer.serialize(samplesTargetedSampleTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesTaxa !== undefined) {
            requestContext.setQueryParam("samples.taxa", ObjectSerializer.serialize(samplesTaxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (samplesTreatments !== undefined) {
            requestContext.setQueryParam("samples.treatments", ObjectSerializer.serialize(samplesTreatments, "Array<string>", ""));
        }

        // Query Params
        if (softwareVersion !== undefined) {
            requestContext.setQueryParam("software_version", ObjectSerializer.serialize(softwareVersion, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async multiplexedSamples(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, barcodeSampleMap?: Array<string>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySetsId?: Array<string>, constructLibrarySetsAccession?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificates?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, multiplexedSamplesId?: Array<string>, multiplexedSamplesAccession?: Array<string>, multiplexedSamplesConstructLibrarySets?: Array<string>, multiplexedSamplesDiseaseTermsId?: Array<string>, multiplexedSamplesDiseaseTermsTermName?: Array<string>, multiplexedSamplesDonorsId?: Array<string>, multiplexedSamplesDonorsAccession?: Array<string>, multiplexedSamplesSampleTermsId?: Array<string>, multiplexedSamplesSampleTermsTermName?: Array<string>, multiplexedSamplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, multiplexedSamplesSummary?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "multiplexedSamples", "frame");
        }





















































































        // Path Params
        const localVarPath = '/multiplexed-samples/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (barcodeSampleMap !== undefined) {
            requestContext.setQueryParam("barcode_sample_map", ObjectSerializer.serialize(barcodeSampleMap, "Array<string>", ""));
        }

        // Query Params
        if (biomarkers !== undefined) {
            requestContext.setQueryParam("biomarkers", ObjectSerializer.serialize(biomarkers, "Array<string>", ""));
        }

        // Query Params
        if (cellularSubPool !== undefined) {
            requestContext.setQueryParam("cellular_sub_pool", ObjectSerializer.serialize(cellularSubPool, "Array<string>", ""));
        }

        // Query Params
        if (classifications !== undefined) {
            requestContext.setQueryParam("classifications", ObjectSerializer.serialize(classifications, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (constructLibrarySetsId !== undefined) {
            requestContext.setQueryParam("construct_library_sets.@id", ObjectSerializer.serialize(constructLibrarySetsId, "Array<string>", ""));
        }

        // Query Params
        if (constructLibrarySetsAccession !== undefined) {
            requestContext.setQueryParam("construct_library_sets.accession", ObjectSerializer.serialize(constructLibrarySetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dateObtained !== undefined) {
            requestContext.setQueryParam("date_obtained", ObjectSerializer.serialize(dateObtained, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsId !== undefined) {
            requestContext.setQueryParam("disease_terms.@id", ObjectSerializer.serialize(diseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("disease_terms.term_name", ObjectSerializer.serialize(diseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donors !== undefined) {
            requestContext.setQueryParam("donors", ObjectSerializer.serialize(donors, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsId !== undefined) {
            requestContext.setQueryParam("file_sets.@id", ObjectSerializer.serialize(fileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAccession !== undefined) {
            requestContext.setQueryParam("file_sets.accession", ObjectSerializer.serialize(fileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAliases !== undefined) {
            requestContext.setQueryParam("file_sets.aliases", ObjectSerializer.serialize(fileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAssayTermTermName !== undefined) {
            requestContext.setQueryParam("file_sets.assay_term.term_name", ObjectSerializer.serialize(fileSetsAssayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsLabTitle !== undefined) {
            requestContext.setQueryParam("file_sets.lab.title", ObjectSerializer.serialize(fileSetsLabTitle, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsStatus !== undefined) {
            requestContext.setQueryParam("file_sets.status", ObjectSerializer.serialize(fileSetsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (fileSetsSummary !== undefined) {
            requestContext.setQueryParam("file_sets.summary", ObjectSerializer.serialize(fileSetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificates !== undefined) {
            requestContext.setQueryParam("institutional_certificates", ObjectSerializer.serialize(institutionalCertificates, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (modificationsId !== undefined) {
            requestContext.setQueryParam("modifications.@id", ObjectSerializer.serialize(modificationsId, "Array<string>", ""));
        }

        // Query Params
        if (modificationsStatus !== undefined) {
            requestContext.setQueryParam("modifications.status", ObjectSerializer.serialize(modificationsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (modificationsSummary !== undefined) {
            requestContext.setQueryParam("modifications.summary", ObjectSerializer.serialize(modificationsSummary, "Array<string>", ""));
        }

        // Query Params
        if (moi !== undefined) {
            requestContext.setQueryParam("moi", ObjectSerializer.serialize(moi, "Array<number>", ""));
        }

        // Query Params
        if (multiplexedInId !== undefined) {
            requestContext.setQueryParam("multiplexed_in.@id", ObjectSerializer.serialize(multiplexedInId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedInAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_in.accession", ObjectSerializer.serialize(multiplexedInAccession, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesId !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.@id", ObjectSerializer.serialize(multiplexedSamplesId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.accession", ObjectSerializer.serialize(multiplexedSamplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesConstructLibrarySets !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.construct_library_sets", ObjectSerializer.serialize(multiplexedSamplesConstructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.disease_terms.@id", ObjectSerializer.serialize(multiplexedSamplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.disease_terms.term_name", ObjectSerializer.serialize(multiplexedSamplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesDonorsId !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.donors.@id", ObjectSerializer.serialize(multiplexedSamplesDonorsId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesDonorsAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.donors.accession", ObjectSerializer.serialize(multiplexedSamplesDonorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.sample_terms.@id", ObjectSerializer.serialize(multiplexedSamplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.sample_terms.term_name", ObjectSerializer.serialize(multiplexedSamplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedSamplesStatus !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.status", ObjectSerializer.serialize(multiplexedSamplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (multiplexedSamplesSummary !== undefined) {
            requestContext.setQueryParam("multiplexed_samples.summary", ObjectSerializer.serialize(multiplexedSamplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (nucleicAcidDelivery !== undefined) {
            requestContext.setQueryParam("nucleic_acid_delivery", ObjectSerializer.serialize(nucleicAcidDelivery, "Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>", ""));
        }

        // Query Params
        if (originOf !== undefined) {
            requestContext.setQueryParam("origin_of", ObjectSerializer.serialize(originOf, "Array<string>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsId !== undefined) {
            requestContext.setQueryParam("sample_terms.@id", ObjectSerializer.serialize(sampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsTermName !== undefined) {
            requestContext.setQueryParam("sample_terms.term_name", ObjectSerializer.serialize(sampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (sortedFractions !== undefined) {
            requestContext.setQueryParam("sorted_fractions", ObjectSerializer.serialize(sortedFractions, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromId !== undefined) {
            requestContext.setQueryParam("sorted_from.@id", ObjectSerializer.serialize(sortedFromId, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromAccession !== undefined) {
            requestContext.setQueryParam("sorted_from.accession", ObjectSerializer.serialize(sortedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromDetail !== undefined) {
            requestContext.setQueryParam("sorted_from_detail", ObjectSerializer.serialize(sortedFromDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (startingAmount !== undefined) {
            requestContext.setQueryParam("starting_amount", ObjectSerializer.serialize(startingAmount, "Array<number>", ""));
        }

        // Query Params
        if (startingAmountUnits !== undefined) {
            requestContext.setQueryParam("starting_amount_units", ObjectSerializer.serialize(startingAmountUnits, "Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (timePostLibraryDelivery !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery", ObjectSerializer.serialize(timePostLibraryDelivery, "Array<number>", ""));
        }

        // Query Params
        if (timePostLibraryDeliveryUnits !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery_units", ObjectSerializer.serialize(timePostLibraryDeliveryUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (treatmentsId !== undefined) {
            requestContext.setQueryParam("treatments.@id", ObjectSerializer.serialize(treatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsPurpose !== undefined) {
            requestContext.setQueryParam("treatments.purpose", ObjectSerializer.serialize(treatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (treatmentsStatus !== undefined) {
            requestContext.setQueryParam("treatments.status", ObjectSerializer.serialize(treatmentsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (treatmentsSummary !== undefined) {
            requestContext.setQueryParam("treatments.summary", ObjectSerializer.serialize(treatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("treatments.treatment_type", ObjectSerializer.serialize(treatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async openReadingFrames(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, award?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, geneId?: Array<string>, geneGeneid?: Array<string>, geneSymbol?: Array<string>, lab?: Array<string>, notes?: Array<string>, orfId?: Array<string>, pctCoverageOrf?: Array<number>, pctCoverageProtein?: Array<number>, pctIdenticalProtein?: Array<number>, proteinId?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedBy?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "openReadingFrames", "frame");
        }



























        // Path Params
        const localVarPath = '/open-reading-frames/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (award !== undefined) {
            requestContext.setQueryParam("award", ObjectSerializer.serialize(award, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (geneId !== undefined) {
            requestContext.setQueryParam("gene.@id", ObjectSerializer.serialize(geneId, "Array<string>", ""));
        }

        // Query Params
        if (geneGeneid !== undefined) {
            requestContext.setQueryParam("gene.geneid", ObjectSerializer.serialize(geneGeneid, "Array<string>", ""));
        }

        // Query Params
        if (geneSymbol !== undefined) {
            requestContext.setQueryParam("gene.symbol", ObjectSerializer.serialize(geneSymbol, "Array<string>", ""));
        }

        // Query Params
        if (lab !== undefined) {
            requestContext.setQueryParam("lab", ObjectSerializer.serialize(lab, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (orfId !== undefined) {
            requestContext.setQueryParam("orf_id", ObjectSerializer.serialize(orfId, "Array<string>", ""));
        }

        // Query Params
        if (pctCoverageOrf !== undefined) {
            requestContext.setQueryParam("pct_coverage_orf", ObjectSerializer.serialize(pctCoverageOrf, "Array<number>", ""));
        }

        // Query Params
        if (pctCoverageProtein !== undefined) {
            requestContext.setQueryParam("pct_coverage_protein", ObjectSerializer.serialize(pctCoverageProtein, "Array<number>", ""));
        }

        // Query Params
        if (pctIdenticalProtein !== undefined) {
            requestContext.setQueryParam("pct_identical_protein", ObjectSerializer.serialize(pctIdenticalProtein, "Array<number>", ""));
        }

        // Query Params
        if (proteinId !== undefined) {
            requestContext.setQueryParam("protein_id", ObjectSerializer.serialize(proteinId, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedBy !== undefined) {
            requestContext.setQueryParam("submitted_by", ObjectSerializer.serialize(submittedBy, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async pages(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, award?: Array<string>, canonicalUri?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, lab?: Array<string>, name?: Array<string>, notes?: Array<string>, parent?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "pages", "frame");
        }























        // Path Params
        const localVarPath = '/pages/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (award !== undefined) {
            requestContext.setQueryParam("award", ObjectSerializer.serialize(award, "Array<string>", ""));
        }

        // Query Params
        if (canonicalUri !== undefined) {
            requestContext.setQueryParam("canonical_uri", ObjectSerializer.serialize(canonicalUri, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (lab !== undefined) {
            requestContext.setQueryParam("lab", ObjectSerializer.serialize(lab, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (parent !== undefined) {
            requestContext.setQueryParam("parent", ObjectSerializer.serialize(parent, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async phenotypeTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "phenotypeTerms", "frame");
        }

























        // Path Params
        const localVarPath = '/phenotype-terms/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (ancestors !== undefined) {
            requestContext.setQueryParam("ancestors", ObjectSerializer.serialize(ancestors, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (deprecatedNtrTerms !== undefined) {
            requestContext.setQueryParam("deprecated_ntr_terms", ObjectSerializer.serialize(deprecatedNtrTerms, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (isA !== undefined) {
            requestContext.setQueryParam("is_a", ObjectSerializer.serialize(isA, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (ontology !== undefined) {
            requestContext.setQueryParam("ontology", ObjectSerializer.serialize(ontology, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (synonyms !== undefined) {
            requestContext.setQueryParam("synonyms", ObjectSerializer.serialize(synonyms, "Array<string>", ""));
        }

        // Query Params
        if (termId !== undefined) {
            requestContext.setQueryParam("term_id", ObjectSerializer.serialize(termId, "Array<string>", ""));
        }

        // Query Params
        if (termName !== undefined) {
            requestContext.setQueryParam("term_name", ObjectSerializer.serialize(termName, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async phenotypicFeatures(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, featureId?: Array<string>, featureTermId?: Array<string>, featureTermName?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, observationDate?: Array<string>, quantity?: Array<number>, quantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "phenotypicFeatures", "frame");
        }



























        // Path Params
        const localVarPath = '/phenotypic-features/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (featureId !== undefined) {
            requestContext.setQueryParam("feature.@id", ObjectSerializer.serialize(featureId, "Array<string>", ""));
        }

        // Query Params
        if (featureTermId !== undefined) {
            requestContext.setQueryParam("feature.term_id", ObjectSerializer.serialize(featureTermId, "Array<string>", ""));
        }

        // Query Params
        if (featureTermName !== undefined) {
            requestContext.setQueryParam("feature.term_name", ObjectSerializer.serialize(featureTermName, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (observationDate !== undefined) {
            requestContext.setQueryParam("observation_date", ObjectSerializer.serialize(observationDate, "Array<string>", ""));
        }

        // Query Params
        if (quantity !== undefined) {
            requestContext.setQueryParam("quantity", ObjectSerializer.serialize(quantity, "Array<number>", ""));
        }

        // Query Params
        if (quantityUnits !== undefined) {
            requestContext.setQueryParam("quantity_units", ObjectSerializer.serialize(quantityUnits, "Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async platformTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, company?: Array<'10X Genomics' | 'Illumina' | 'Life Technologies' | 'Oxford Nanopore Technologies' | 'Pacific Biosciences' | 'Parse Biosciences' | 'Roche'>, creationTimestamp?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, releaseTimestamp?: Array<string>, sequencingKits?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "platformTerms", "frame");
        }



























        // Path Params
        const localVarPath = '/platform-terms/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (ancestors !== undefined) {
            requestContext.setQueryParam("ancestors", ObjectSerializer.serialize(ancestors, "Array<string>", ""));
        }

        // Query Params
        if (company !== undefined) {
            requestContext.setQueryParam("company", ObjectSerializer.serialize(company, "Array<'10X Genomics' | 'Illumina' | 'Life Technologies' | 'Oxford Nanopore Technologies' | 'Pacific Biosciences' | 'Parse Biosciences' | 'Roche'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (deprecatedNtrTerms !== undefined) {
            requestContext.setQueryParam("deprecated_ntr_terms", ObjectSerializer.serialize(deprecatedNtrTerms, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (isA !== undefined) {
            requestContext.setQueryParam("is_a", ObjectSerializer.serialize(isA, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (ontology !== undefined) {
            requestContext.setQueryParam("ontology", ObjectSerializer.serialize(ontology, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (sequencingKits !== undefined) {
            requestContext.setQueryParam("sequencing_kits", ObjectSerializer.serialize(sequencingKits, "Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (synonyms !== undefined) {
            requestContext.setQueryParam("synonyms", ObjectSerializer.serialize(synonyms, "Array<string>", ""));
        }

        // Query Params
        if (termId !== undefined) {
            requestContext.setQueryParam("term_id", ObjectSerializer.serialize(termId, "Array<string>", ""));
        }

        // Query Params
        if (termName !== undefined) {
            requestContext.setQueryParam("term_name", ObjectSerializer.serialize(termName, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async predictionSets(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, awardContactPiId?: Array<string>, awardContactPiTitle?: Array<string>, awardTitle?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, controlForId?: Array<string>, controlForAccession?: Array<string>, controlForAliases?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, donorsId?: Array<string>, donorsAccession?: Array<string>, donorsAliases?: Array<string>, donorsSex?: Array<'male' | 'female' | 'unspecified'>, donorsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, donorsTaxa?: Array<string>, fileSetType?: Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>, filesId?: Array<string>, filesAccession?: Array<string>, filesAliases?: Array<string>, filesContentType?: Array<string>, filesCreationTimestamp?: Array<string>, filesFileFormat?: Array<string>, filesFileSize?: Array<number>, filesHref?: Array<string>, filesS3Uri?: Array<string>, filesSequencingPlatform?: Array<string>, filesSubmittedFileName?: Array<string>, filesUploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, inputFileSetFor?: Array<string>, inputFileSets?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, largeScaleGeneListId?: Array<string>, largeScaleGeneListAccession?: Array<string>, largeScaleGeneListAliases?: Array<string>, largeScaleLociListId?: Array<string>, largeScaleLociListAccession?: Array<string>, largeScaleLociListAliases?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, samplesId?: Array<string>, samplesAccession?: Array<string>, samplesAliases?: Array<string>, samplesCellFateChangeTreatments?: Array<string>, samplesClassifications?: Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>, samplesConstructLibrarySetsId?: Array<string>, samplesConstructLibrarySetsAccession?: Array<string>, samplesConstructLibrarySetsSummary?: Array<string>, samplesDiseaseTermsId?: Array<string>, samplesDiseaseTermsTermName?: Array<string>, samplesModifications?: Array<string>, samplesSampleTermsId?: Array<string>, samplesSampleTermsAliases?: Array<string>, samplesSampleTermsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, samplesSampleTermsSummary?: Array<string>, samplesSampleTermsTermName?: Array<string>, samplesStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, samplesSummary?: Array<string>, samplesTargetedSampleTermId?: Array<string>, samplesTargetedSampleTermTermName?: Array<string>, samplesTaxa?: Array<'Homo sapiens' | 'Mus musculus'>, samplesTreatments?: Array<string>, scope?: Array<'genes' | 'loci' | 'genome-wide'>, smallScaleGeneListId?: Array<string>, smallScaleGeneListGeneid?: Array<string>, smallScaleGeneListName?: Array<string>, smallScaleGeneListSymbol?: Array<string>, smallScaleGeneListSynonyms?: Array<string>, smallScaleLociList?: Array<Locus>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFilesTimestamp?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "predictionSets", "frame");
        }





























































































        // Path Params
        const localVarPath = '/prediction-sets/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (awardContactPiId !== undefined) {
            requestContext.setQueryParam("award.contact_pi.@id", ObjectSerializer.serialize(awardContactPiId, "Array<string>", ""));
        }

        // Query Params
        if (awardContactPiTitle !== undefined) {
            requestContext.setQueryParam("award.contact_pi.title", ObjectSerializer.serialize(awardContactPiTitle, "Array<string>", ""));
        }

        // Query Params
        if (awardTitle !== undefined) {
            requestContext.setQueryParam("award.title", ObjectSerializer.serialize(awardTitle, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (controlForId !== undefined) {
            requestContext.setQueryParam("control_for.@id", ObjectSerializer.serialize(controlForId, "Array<string>", ""));
        }

        // Query Params
        if (controlForAccession !== undefined) {
            requestContext.setQueryParam("control_for.accession", ObjectSerializer.serialize(controlForAccession, "Array<string>", ""));
        }

        // Query Params
        if (controlForAliases !== undefined) {
            requestContext.setQueryParam("control_for.aliases", ObjectSerializer.serialize(controlForAliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donorsId !== undefined) {
            requestContext.setQueryParam("donors.@id", ObjectSerializer.serialize(donorsId, "Array<string>", ""));
        }

        // Query Params
        if (donorsAccession !== undefined) {
            requestContext.setQueryParam("donors.accession", ObjectSerializer.serialize(donorsAccession, "Array<string>", ""));
        }

        // Query Params
        if (donorsAliases !== undefined) {
            requestContext.setQueryParam("donors.aliases", ObjectSerializer.serialize(donorsAliases, "Array<string>", ""));
        }

        // Query Params
        if (donorsSex !== undefined) {
            requestContext.setQueryParam("donors.sex", ObjectSerializer.serialize(donorsSex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (donorsStatus !== undefined) {
            requestContext.setQueryParam("donors.status", ObjectSerializer.serialize(donorsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (donorsTaxa !== undefined) {
            requestContext.setQueryParam("donors.taxa", ObjectSerializer.serialize(donorsTaxa, "Array<string>", ""));
        }

        // Query Params
        if (fileSetType !== undefined) {
            requestContext.setQueryParam("file_set_type", ObjectSerializer.serialize(fileSetType, "Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'>", ""));
        }

        // Query Params
        if (filesId !== undefined) {
            requestContext.setQueryParam("files.@id", ObjectSerializer.serialize(filesId, "Array<string>", ""));
        }

        // Query Params
        if (filesAccession !== undefined) {
            requestContext.setQueryParam("files.accession", ObjectSerializer.serialize(filesAccession, "Array<string>", ""));
        }

        // Query Params
        if (filesAliases !== undefined) {
            requestContext.setQueryParam("files.aliases", ObjectSerializer.serialize(filesAliases, "Array<string>", ""));
        }

        // Query Params
        if (filesContentType !== undefined) {
            requestContext.setQueryParam("files.content_type", ObjectSerializer.serialize(filesContentType, "Array<string>", ""));
        }

        // Query Params
        if (filesCreationTimestamp !== undefined) {
            requestContext.setQueryParam("files.creation_timestamp", ObjectSerializer.serialize(filesCreationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (filesFileFormat !== undefined) {
            requestContext.setQueryParam("files.file_format", ObjectSerializer.serialize(filesFileFormat, "Array<string>", ""));
        }

        // Query Params
        if (filesFileSize !== undefined) {
            requestContext.setQueryParam("files.file_size", ObjectSerializer.serialize(filesFileSize, "Array<number>", ""));
        }

        // Query Params
        if (filesHref !== undefined) {
            requestContext.setQueryParam("files.href", ObjectSerializer.serialize(filesHref, "Array<string>", ""));
        }

        // Query Params
        if (filesS3Uri !== undefined) {
            requestContext.setQueryParam("files.s3_uri", ObjectSerializer.serialize(filesS3Uri, "Array<string>", ""));
        }

        // Query Params
        if (filesSequencingPlatform !== undefined) {
            requestContext.setQueryParam("files.sequencing_platform", ObjectSerializer.serialize(filesSequencingPlatform, "Array<string>", ""));
        }

        // Query Params
        if (filesSubmittedFileName !== undefined) {
            requestContext.setQueryParam("files.submitted_file_name", ObjectSerializer.serialize(filesSubmittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (filesUploadStatus !== undefined) {
            requestContext.setQueryParam("files.upload_status", ObjectSerializer.serialize(filesUploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (inputFileSetFor !== undefined) {
            requestContext.setQueryParam("input_file_set_for", ObjectSerializer.serialize(inputFileSetFor, "Array<string>", ""));
        }

        // Query Params
        if (inputFileSets !== undefined) {
            requestContext.setQueryParam("input_file_sets", ObjectSerializer.serialize(inputFileSets, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleGeneListId !== undefined) {
            requestContext.setQueryParam("large_scale_gene_list.@id", ObjectSerializer.serialize(largeScaleGeneListId, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleGeneListAccession !== undefined) {
            requestContext.setQueryParam("large_scale_gene_list.accession", ObjectSerializer.serialize(largeScaleGeneListAccession, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleGeneListAliases !== undefined) {
            requestContext.setQueryParam("large_scale_gene_list.aliases", ObjectSerializer.serialize(largeScaleGeneListAliases, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleLociListId !== undefined) {
            requestContext.setQueryParam("large_scale_loci_list.@id", ObjectSerializer.serialize(largeScaleLociListId, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleLociListAccession !== undefined) {
            requestContext.setQueryParam("large_scale_loci_list.accession", ObjectSerializer.serialize(largeScaleLociListAccession, "Array<string>", ""));
        }

        // Query Params
        if (largeScaleLociListAliases !== undefined) {
            requestContext.setQueryParam("large_scale_loci_list.aliases", ObjectSerializer.serialize(largeScaleLociListAliases, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (samplesId !== undefined) {
            requestContext.setQueryParam("samples.@id", ObjectSerializer.serialize(samplesId, "Array<string>", ""));
        }

        // Query Params
        if (samplesAccession !== undefined) {
            requestContext.setQueryParam("samples.accession", ObjectSerializer.serialize(samplesAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesAliases !== undefined) {
            requestContext.setQueryParam("samples.aliases", ObjectSerializer.serialize(samplesAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesCellFateChangeTreatments !== undefined) {
            requestContext.setQueryParam("samples.cell_fate_change_treatments", ObjectSerializer.serialize(samplesCellFateChangeTreatments, "Array<string>", ""));
        }

        // Query Params
        if (samplesClassifications !== undefined) {
            requestContext.setQueryParam("samples.classifications", ObjectSerializer.serialize(samplesClassifications, "Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsId !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.@id", ObjectSerializer.serialize(samplesConstructLibrarySetsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsAccession !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.accession", ObjectSerializer.serialize(samplesConstructLibrarySetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (samplesConstructLibrarySetsSummary !== undefined) {
            requestContext.setQueryParam("samples.construct_library_sets.summary", ObjectSerializer.serialize(samplesConstructLibrarySetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsId !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.@id", ObjectSerializer.serialize(samplesDiseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesDiseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.disease_terms.term_name", ObjectSerializer.serialize(samplesDiseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesModifications !== undefined) {
            requestContext.setQueryParam("samples.modifications", ObjectSerializer.serialize(samplesModifications, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsId !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.@id", ObjectSerializer.serialize(samplesSampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsAliases !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.aliases", ObjectSerializer.serialize(samplesSampleTermsAliases, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsStatus !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.status", ObjectSerializer.serialize(samplesSampleTermsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (samplesSampleTermsSummary !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.summary", ObjectSerializer.serialize(samplesSampleTermsSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesSampleTermsTermName !== undefined) {
            requestContext.setQueryParam("samples.sample_terms.term_name", ObjectSerializer.serialize(samplesSampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesStatus !== undefined) {
            requestContext.setQueryParam("samples.status", ObjectSerializer.serialize(samplesStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (samplesSummary !== undefined) {
            requestContext.setQueryParam("samples.summary", ObjectSerializer.serialize(samplesSummary, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermId !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.@id", ObjectSerializer.serialize(samplesTargetedSampleTermId, "Array<string>", ""));
        }

        // Query Params
        if (samplesTargetedSampleTermTermName !== undefined) {
            requestContext.setQueryParam("samples.targeted_sample_term.term_name", ObjectSerializer.serialize(samplesTargetedSampleTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (samplesTaxa !== undefined) {
            requestContext.setQueryParam("samples.taxa", ObjectSerializer.serialize(samplesTaxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (samplesTreatments !== undefined) {
            requestContext.setQueryParam("samples.treatments", ObjectSerializer.serialize(samplesTreatments, "Array<string>", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "Array<'genes' | 'loci' | 'genome-wide'>", ""));
        }

        // Query Params
        if (smallScaleGeneListId !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.@id", ObjectSerializer.serialize(smallScaleGeneListId, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListGeneid !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.geneid", ObjectSerializer.serialize(smallScaleGeneListGeneid, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListName !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.name", ObjectSerializer.serialize(smallScaleGeneListName, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListSymbol !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.symbol", ObjectSerializer.serialize(smallScaleGeneListSymbol, "Array<string>", ""));
        }

        // Query Params
        if (smallScaleGeneListSynonyms !== undefined) {
            requestContext.setQueryParam("small_scale_gene_list.synonyms", ObjectSerializer.serialize(smallScaleGeneListSynonyms, "Array<string>", "gene_name"));
        }

        // Query Params
        if (smallScaleLociList !== undefined) {
            requestContext.setQueryParam("small_scale_loci_list", ObjectSerializer.serialize(smallScaleLociList, "Array<Locus>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFilesTimestamp !== undefined) {
            requestContext.setQueryParam("submitted_files_timestamp", ObjectSerializer.serialize(submittedFilesTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async primaryCells(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, passageNumber?: Array<number>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "primaryCells", "frame");
        }


























































































        // Path Params
        const localVarPath = '/primary-cells/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (age !== undefined) {
            requestContext.setQueryParam("age", ObjectSerializer.serialize(age, "Array<string>", ""));
        }

        // Query Params
        if (ageUnits !== undefined) {
            requestContext.setQueryParam("age_units", ObjectSerializer.serialize(ageUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biomarkers !== undefined) {
            requestContext.setQueryParam("biomarkers", ObjectSerializer.serialize(biomarkers, "Array<string>", ""));
        }

        // Query Params
        if (cellularSubPool !== undefined) {
            requestContext.setQueryParam("cellular_sub_pool", ObjectSerializer.serialize(cellularSubPool, "Array<string>", ""));
        }

        // Query Params
        if (classifications !== undefined) {
            requestContext.setQueryParam("classifications", ObjectSerializer.serialize(classifications, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (constructLibrarySets !== undefined) {
            requestContext.setQueryParam("construct_library_sets", ObjectSerializer.serialize(constructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dateObtained !== undefined) {
            requestContext.setQueryParam("date_obtained", ObjectSerializer.serialize(dateObtained, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsId !== undefined) {
            requestContext.setQueryParam("disease_terms.@id", ObjectSerializer.serialize(diseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("disease_terms.term_name", ObjectSerializer.serialize(diseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donors !== undefined) {
            requestContext.setQueryParam("donors", ObjectSerializer.serialize(donors, "Array<string>", ""));
        }

        // Query Params
        if (embryonic !== undefined) {
            requestContext.setQueryParam("embryonic", ObjectSerializer.serialize(embryonic, "Array<boolean>", ""));
        }

        // Query Params
        if (fileSetsId !== undefined) {
            requestContext.setQueryParam("file_sets.@id", ObjectSerializer.serialize(fileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAccession !== undefined) {
            requestContext.setQueryParam("file_sets.accession", ObjectSerializer.serialize(fileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAliases !== undefined) {
            requestContext.setQueryParam("file_sets.aliases", ObjectSerializer.serialize(fileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAssayTermTermName !== undefined) {
            requestContext.setQueryParam("file_sets.assay_term.term_name", ObjectSerializer.serialize(fileSetsAssayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsLabTitle !== undefined) {
            requestContext.setQueryParam("file_sets.lab.title", ObjectSerializer.serialize(fileSetsLabTitle, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsStatus !== undefined) {
            requestContext.setQueryParam("file_sets.status", ObjectSerializer.serialize(fileSetsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (fileSetsSummary !== undefined) {
            requestContext.setQueryParam("file_sets.summary", ObjectSerializer.serialize(fileSetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesId !== undefined) {
            requestContext.setQueryParam("institutional_certificates.@id", ObjectSerializer.serialize(institutionalCertificatesId, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesCertificateIdentifier !== undefined) {
            requestContext.setQueryParam("institutional_certificates.certificate_identifier", ObjectSerializer.serialize(institutionalCertificatesCertificateIdentifier, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (lowerBoundAge !== undefined) {
            requestContext.setQueryParam("lower_bound_age", ObjectSerializer.serialize(lowerBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (lowerBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("lower_bound_age_in_hours", ObjectSerializer.serialize(lowerBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (modificationsId !== undefined) {
            requestContext.setQueryParam("modifications.@id", ObjectSerializer.serialize(modificationsId, "Array<string>", ""));
        }

        // Query Params
        if (modificationsStatus !== undefined) {
            requestContext.setQueryParam("modifications.status", ObjectSerializer.serialize(modificationsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (modificationsSummary !== undefined) {
            requestContext.setQueryParam("modifications.summary", ObjectSerializer.serialize(modificationsSummary, "Array<string>", ""));
        }

        // Query Params
        if (moi !== undefined) {
            requestContext.setQueryParam("moi", ObjectSerializer.serialize(moi, "Array<number>", ""));
        }

        // Query Params
        if (multiplexedInId !== undefined) {
            requestContext.setQueryParam("multiplexed_in.@id", ObjectSerializer.serialize(multiplexedInId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedInAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_in.accession", ObjectSerializer.serialize(multiplexedInAccession, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (nucleicAcidDelivery !== undefined) {
            requestContext.setQueryParam("nucleic_acid_delivery", ObjectSerializer.serialize(nucleicAcidDelivery, "Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>", ""));
        }

        // Query Params
        if (originOf !== undefined) {
            requestContext.setQueryParam("origin_of", ObjectSerializer.serialize(originOf, "Array<string>", ""));
        }

        // Query Params
        if (originatedFrom !== undefined) {
            requestContext.setQueryParam("originated_from", ObjectSerializer.serialize(originatedFrom, "Array<string>", ""));
        }

        // Query Params
        if (partOf !== undefined) {
            requestContext.setQueryParam("part_of", ObjectSerializer.serialize(partOf, "Array<string>", ""));
        }

        // Query Params
        if (parts !== undefined) {
            requestContext.setQueryParam("parts", ObjectSerializer.serialize(parts, "Array<string>", ""));
        }

        // Query Params
        if (passageNumber !== undefined) {
            requestContext.setQueryParam("passage_number", ObjectSerializer.serialize(passageNumber, "Array<number>", ""));
        }

        // Query Params
        if (pooledFrom !== undefined) {
            requestContext.setQueryParam("pooled_from", ObjectSerializer.serialize(pooledFrom, "Array<string>", ""));
        }

        // Query Params
        if (pooledIn !== undefined) {
            requestContext.setQueryParam("pooled_in", ObjectSerializer.serialize(pooledIn, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsId !== undefined) {
            requestContext.setQueryParam("sample_terms.@id", ObjectSerializer.serialize(sampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsTermName !== undefined) {
            requestContext.setQueryParam("sample_terms.term_name", ObjectSerializer.serialize(sampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (sex !== undefined) {
            requestContext.setQueryParam("sex", ObjectSerializer.serialize(sex, "Array<'female' | 'male' | 'mixed' | 'unspecified'>", ""));
        }

        // Query Params
        if (sortedFractions !== undefined) {
            requestContext.setQueryParam("sorted_fractions", ObjectSerializer.serialize(sortedFractions, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromId !== undefined) {
            requestContext.setQueryParam("sorted_from.@id", ObjectSerializer.serialize(sortedFromId, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromAccession !== undefined) {
            requestContext.setQueryParam("sorted_from.accession", ObjectSerializer.serialize(sortedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromDetail !== undefined) {
            requestContext.setQueryParam("sorted_from_detail", ObjectSerializer.serialize(sortedFromDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (startingAmount !== undefined) {
            requestContext.setQueryParam("starting_amount", ObjectSerializer.serialize(startingAmount, "Array<number>", ""));
        }

        // Query Params
        if (startingAmountUnits !== undefined) {
            requestContext.setQueryParam("starting_amount_units", ObjectSerializer.serialize(startingAmountUnits, "Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (timePostLibraryDelivery !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery", ObjectSerializer.serialize(timePostLibraryDelivery, "Array<number>", ""));
        }

        // Query Params
        if (timePostLibraryDeliveryUnits !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery_units", ObjectSerializer.serialize(timePostLibraryDeliveryUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (treatmentsId !== undefined) {
            requestContext.setQueryParam("treatments.@id", ObjectSerializer.serialize(treatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsPurpose !== undefined) {
            requestContext.setQueryParam("treatments.purpose", ObjectSerializer.serialize(treatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (treatmentsStatus !== undefined) {
            requestContext.setQueryParam("treatments.status", ObjectSerializer.serialize(treatmentsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (treatmentsSummary !== undefined) {
            requestContext.setQueryParam("treatments.summary", ObjectSerializer.serialize(treatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("treatments.treatment_type", ObjectSerializer.serialize(treatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (upperBoundAge !== undefined) {
            requestContext.setQueryParam("upper_bound_age", ObjectSerializer.serialize(upperBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (upperBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("upper_bound_age_in_hours", ObjectSerializer.serialize(upperBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async publications(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, _abstract?: Array<string>, aliases?: Array<string>, authors?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, datePublished?: Array<string>, dateRevised?: Array<string>, description?: Array<string>, donors?: Array<string>, fileSets?: Array<string>, issue?: Array<string>, journal?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, notes?: Array<string>, page?: Array<string>, publicationIdentifiers?: Array<string>, publicationYear?: Array<number>, publishedBy?: Array<'community' | 'IGVF' | 'ENCODE'>, releaseTimestamp?: Array<string>, samples?: Array<string>, software?: Array<string>, softwareVersions?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, volume?: Array<string>, workflows?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "publications", "frame");
        }







































        // Path Params
        const localVarPath = '/publications/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (_abstract !== undefined) {
            requestContext.setQueryParam("abstract", ObjectSerializer.serialize(_abstract, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (authors !== undefined) {
            requestContext.setQueryParam("authors", ObjectSerializer.serialize(authors, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (datePublished !== undefined) {
            requestContext.setQueryParam("date_published", ObjectSerializer.serialize(datePublished, "Array<string>", ""));
        }

        // Query Params
        if (dateRevised !== undefined) {
            requestContext.setQueryParam("date_revised", ObjectSerializer.serialize(dateRevised, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (donors !== undefined) {
            requestContext.setQueryParam("donors", ObjectSerializer.serialize(donors, "Array<string>", ""));
        }

        // Query Params
        if (fileSets !== undefined) {
            requestContext.setQueryParam("file_sets", ObjectSerializer.serialize(fileSets, "Array<string>", ""));
        }

        // Query Params
        if (issue !== undefined) {
            requestContext.setQueryParam("issue", ObjectSerializer.serialize(issue, "Array<string>", ""));
        }

        // Query Params
        if (journal !== undefined) {
            requestContext.setQueryParam("journal", ObjectSerializer.serialize(journal, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publicationYear !== undefined) {
            requestContext.setQueryParam("publication_year", ObjectSerializer.serialize(publicationYear, "Array<number>", ""));
        }

        // Query Params
        if (publishedBy !== undefined) {
            requestContext.setQueryParam("published_by", ObjectSerializer.serialize(publishedBy, "Array<'community' | 'IGVF' | 'ENCODE'>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (samples !== undefined) {
            requestContext.setQueryParam("samples", ObjectSerializer.serialize(samples, "Array<string>", ""));
        }

        // Query Params
        if (software !== undefined) {
            requestContext.setQueryParam("software", ObjectSerializer.serialize(software, "Array<string>", ""));
        }

        // Query Params
        if (softwareVersions !== undefined) {
            requestContext.setQueryParam("software_versions", ObjectSerializer.serialize(softwareVersions, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (volume !== undefined) {
            requestContext.setQueryParam("volume", ObjectSerializer.serialize(volume, "Array<string>", ""));
        }

        // Query Params
        if (workflows !== undefined) {
            requestContext.setQueryParam("workflows", ObjectSerializer.serialize(workflows, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async referenceFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'hg19' | 'GRCm39' | 'mm10'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, external?: Array<boolean>, externalId?: Array<string>, fileFormat?: Array<'bed' | 'csv' | 'dat' | 'fasta' | 'gaf' | 'gds' | 'gtf' | 'obo' | 'owl' | 'PWM' | 'tar' | 'tsv' | 'txt' | 'vcf' | 'xml'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, sourceUrl?: Array<string>, sources?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "referenceFiles", "frame");
        }






















































        // Path Params
        const localVarPath = '/reference-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (anvilUrl !== undefined) {
            requestContext.setQueryParam("anvil_url", ObjectSerializer.serialize(anvilUrl, "Array<string>", ""));
        }

        // Query Params
        if (assembly !== undefined) {
            requestContext.setQueryParam("assembly", ObjectSerializer.serialize(assembly, "Array<'GRCh38' | 'hg19' | 'GRCm39' | 'mm10'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (controlledAccess !== undefined) {
            requestContext.setQueryParam("controlled_access", ObjectSerializer.serialize(controlledAccess, "Array<boolean>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (external !== undefined) {
            requestContext.setQueryParam("external", ObjectSerializer.serialize(external, "Array<boolean>", ""));
        }

        // Query Params
        if (externalId !== undefined) {
            requestContext.setQueryParam("external_id", ObjectSerializer.serialize(externalId, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'bed' | 'csv' | 'dat' | 'fasta' | 'gaf' | 'gds' | 'gtf' | 'obo' | 'owl' | 'PWM' | 'tar' | 'tsv' | 'txt' | 'vcf' | 'xml'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileFormatType !== undefined) {
            requestContext.setQueryParam("file_format_type", ObjectSerializer.serialize(fileFormatType, "Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (sourceUrl !== undefined) {
            requestContext.setQueryParam("source_url", ObjectSerializer.serialize(sourceUrl, "Array<string>", ""));
        }

        // Query Params
        if (sources !== undefined) {
            requestContext.setQueryParam("sources", ObjectSerializer.serialize(sources, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (transcriptomeAnnotation !== undefined) {
            requestContext.setQueryParam("transcriptome_annotation", ObjectSerializer.serialize(transcriptomeAnnotation, "Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async report(query?: string, type?: Array<string>, limit?: Limit, sort?: Array<string>, fieldFilters?: any, include_fields?: Array<string>, frame?: 'object' | 'embedded', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/multireport.tsv';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "Array<string>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (fieldFilters !== undefined) {
            requestContext.setQueryParam("field_filters", ObjectSerializer.serialize(fieldFilters, "any", ""));
        }

        // Query Params
        if (include_fields !== undefined) {
            requestContext.setQueryParam("field", ObjectSerializer.serialize(include_fields, "Array<string>", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object' | 'embedded'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async rodentDonors(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, genotype?: Array<string>, individualRodent?: Array<boolean>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, notes?: Array<string>, phenotypicFeaturesId?: Array<string>, phenotypicFeaturesFeatureId?: Array<string>, phenotypicFeaturesFeatureTermId?: Array<string>, phenotypicFeaturesFeatureTermName?: Array<string>, phenotypicFeaturesObservationDate?: Array<string>, phenotypicFeaturesQuantityUnits?: Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>, productId?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, rodentIdentifier?: Array<string>, sex?: Array<'male' | 'female' | 'unspecified'>, sourcesId?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, strain?: Array<string>, strainBackground?: Array<'A/J (AJ)' | 'C57BL/6J (B6)' | '129S1/SvImJ (129)' | 'NOD/ShiLtJ (NOD)' | 'NZO/H1LtJ (NZO)' | 'CAST/EiJ (CAST)' | 'PWK/PhJ (PWK)' | 'WSB/EiJ (WSB)' | 'CAST (M. m. castaneus)' | 'WSB (M. m. domesticus)' | 'PWK (M. m. musculus)'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Mus musculus'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "rodentDonors", "frame");
        }















































        // Path Params
        const localVarPath = '/rodent-donors/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (genotype !== undefined) {
            requestContext.setQueryParam("genotype", ObjectSerializer.serialize(genotype, "Array<string>", ""));
        }

        // Query Params
        if (individualRodent !== undefined) {
            requestContext.setQueryParam("individual_rodent", ObjectSerializer.serialize(individualRodent, "Array<boolean>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesId !== undefined) {
            requestContext.setQueryParam("phenotypic_features.@id", ObjectSerializer.serialize(phenotypicFeaturesId, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesFeatureId !== undefined) {
            requestContext.setQueryParam("phenotypic_features.feature.@id", ObjectSerializer.serialize(phenotypicFeaturesFeatureId, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesFeatureTermId !== undefined) {
            requestContext.setQueryParam("phenotypic_features.feature.term_id", ObjectSerializer.serialize(phenotypicFeaturesFeatureTermId, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesFeatureTermName !== undefined) {
            requestContext.setQueryParam("phenotypic_features.feature.term_name", ObjectSerializer.serialize(phenotypicFeaturesFeatureTermName, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesObservationDate !== undefined) {
            requestContext.setQueryParam("phenotypic_features.observation_date", ObjectSerializer.serialize(phenotypicFeaturesObservationDate, "Array<string>", ""));
        }

        // Query Params
        if (phenotypicFeaturesQuantityUnits !== undefined) {
            requestContext.setQueryParam("phenotypic_features.quantity_units", ObjectSerializer.serialize(phenotypicFeaturesQuantityUnits, "Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (rodentIdentifier !== undefined) {
            requestContext.setQueryParam("rodent_identifier", ObjectSerializer.serialize(rodentIdentifier, "Array<string>", ""));
        }

        // Query Params
        if (sex !== undefined) {
            requestContext.setQueryParam("sex", ObjectSerializer.serialize(sex, "Array<'male' | 'female' | 'unspecified'>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (strain !== undefined) {
            requestContext.setQueryParam("strain", ObjectSerializer.serialize(strain, "Array<string>", ""));
        }

        // Query Params
        if (strainBackground !== undefined) {
            requestContext.setQueryParam("strain_background", ObjectSerializer.serialize(strainBackground, "Array<'A/J (AJ)' | 'C57BL/6J (B6)' | '129S1/SvImJ (129)' | 'NOD/ShiLtJ (NOD)' | 'NZO/H1LtJ (NZO)' | 'CAST/EiJ (CAST)' | 'PWK/PhJ (PWK)' | 'WSB/EiJ (WSB)' | 'CAST (M. m. castaneus)' | 'WSB (M. m. domesticus)' | 'PWK (M. m. musculus)'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Mus musculus'>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async sampleTerms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, ancestors?: Array<string>, cellSlims?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, deprecatedNtrTerms?: Array<string>, description?: Array<string>, developmentalSlims?: Array<string>, isA?: Array<string>, name?: Array<string>, notes?: Array<string>, ontology?: Array<string>, organSlims?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, synonyms?: Array<string>, systemSlims?: Array<string>, termId?: Array<string>, termName?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "sampleTerms", "frame");
        }






























        // Path Params
        const localVarPath = '/sample-terms/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (ancestors !== undefined) {
            requestContext.setQueryParam("ancestors", ObjectSerializer.serialize(ancestors, "Array<string>", ""));
        }

        // Query Params
        if (cellSlims !== undefined) {
            requestContext.setQueryParam("cell_slims", ObjectSerializer.serialize(cellSlims, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (deprecatedNtrTerms !== undefined) {
            requestContext.setQueryParam("deprecated_ntr_terms", ObjectSerializer.serialize(deprecatedNtrTerms, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (developmentalSlims !== undefined) {
            requestContext.setQueryParam("developmental_slims", ObjectSerializer.serialize(developmentalSlims, "Array<string>", ""));
        }

        // Query Params
        if (isA !== undefined) {
            requestContext.setQueryParam("is_a", ObjectSerializer.serialize(isA, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (ontology !== undefined) {
            requestContext.setQueryParam("ontology", ObjectSerializer.serialize(ontology, "Array<string>", ""));
        }

        // Query Params
        if (organSlims !== undefined) {
            requestContext.setQueryParam("organ_slims", ObjectSerializer.serialize(organSlims, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (synonyms !== undefined) {
            requestContext.setQueryParam("synonyms", ObjectSerializer.serialize(synonyms, "Array<string>", ""));
        }

        // Query Params
        if (systemSlims !== undefined) {
            requestContext.setQueryParam("system_slims", ObjectSerializer.serialize(systemSlims, "Array<string>", ""));
        }

        // Query Params
        if (termId !== undefined) {
            requestContext.setQueryParam("term_id", ObjectSerializer.serialize(termId, "Array<string>", ""));
        }

        // Query Params
        if (termName !== undefined) {
            requestContext.setQueryParam("term_name", ObjectSerializer.serialize(termName, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schema for item type
     * @param itemType The name of the item type
     */
    public async schemaForItemType(itemType: ItemType, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemType' is not null or undefined
        if (itemType === null || itemType === undefined) {
            throw new RequiredError("IgvfApi", "schemaForItemType", "itemType");
        }


        // Path Params
        const localVarPath = '/profiles/{item_type}'
            .replace('{' + 'item_type' + '}', encodeURIComponent(String(itemType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns JSON schemas of all the item types defined in IGVF
     * Retrieve JSON schemas for all item types
     */
    public async schemas(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/profiles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async search(frame: 'object', query?: string, type?: Array<string>, limit?: Limit, sort?: Array<string>, fieldFilters?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "search", "frame");
        }







        // Path Params
        const localVarPath = '/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "Array<string>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (fieldFilters !== undefined) {
            requestContext.setQueryParam("field_filters", ObjectSerializer.serialize(fieldFilters, "any", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async sequenceFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bam' | 'fastq' | 'pod5'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, flowcellId?: Array<string>, geneListFor?: Array<string>, href?: Array<string>, illuminaReadType?: Array<'R1' | 'R2' | 'R3' | 'I1' | 'I2'>, index?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lane?: Array<number>, lociListFor?: Array<string>, maximumReadLength?: Array<number>, md5sum?: Array<string>, meanReadLength?: Array<number>, minimumReadLength?: Array<number>, notes?: Array<string>, readCount?: Array<number>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, seqspecs?: Array<string>, sequencingKit?: Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>, sequencingPlatform?: Array<string>, sequencingRun?: Array<number>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "sequenceFiles", "frame");
        }



























































        // Path Params
        const localVarPath = '/sequence-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (anvilUrl !== undefined) {
            requestContext.setQueryParam("anvil_url", ObjectSerializer.serialize(anvilUrl, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (controlledAccess !== undefined) {
            requestContext.setQueryParam("controlled_access", ObjectSerializer.serialize(controlledAccess, "Array<boolean>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'bam' | 'fastq' | 'pod5'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (flowcellId !== undefined) {
            requestContext.setQueryParam("flowcell_id", ObjectSerializer.serialize(flowcellId, "Array<string>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (illuminaReadType !== undefined) {
            requestContext.setQueryParam("illumina_read_type", ObjectSerializer.serialize(illuminaReadType, "Array<'R1' | 'R2' | 'R3' | 'I1' | 'I2'>", ""));
        }

        // Query Params
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lane !== undefined) {
            requestContext.setQueryParam("lane", ObjectSerializer.serialize(lane, "Array<number>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (maximumReadLength !== undefined) {
            requestContext.setQueryParam("maximum_read_length", ObjectSerializer.serialize(maximumReadLength, "Array<number>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (meanReadLength !== undefined) {
            requestContext.setQueryParam("mean_read_length", ObjectSerializer.serialize(meanReadLength, "Array<number>", ""));
        }

        // Query Params
        if (minimumReadLength !== undefined) {
            requestContext.setQueryParam("minimum_read_length", ObjectSerializer.serialize(minimumReadLength, "Array<number>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (readCount !== undefined) {
            requestContext.setQueryParam("read_count", ObjectSerializer.serialize(readCount, "Array<number>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (seqspecs !== undefined) {
            requestContext.setQueryParam("seqspecs", ObjectSerializer.serialize(seqspecs, "Array<string>", ""));
        }

        // Query Params
        if (sequencingKit !== undefined) {
            requestContext.setQueryParam("sequencing_kit", ObjectSerializer.serialize(sequencingKit, "Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'>", ""));
        }

        // Query Params
        if (sequencingPlatform !== undefined) {
            requestContext.setQueryParam("sequencing_platform", ObjectSerializer.serialize(sequencingPlatform, "Array<string>", ""));
        }

        // Query Params
        if (sequencingRun !== undefined) {
            requestContext.setQueryParam("sequencing_run", ObjectSerializer.serialize(sequencingRun, "Array<number>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async signalFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentSummary?: Array<string>, contentType?: Array<string>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bigWig'>, fileFormatSpecifications?: Array<string>, fileSet?: Array<string>, fileSize?: Array<number>, filtered?: Array<boolean>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, normalized?: Array<boolean>, notes?: Array<string>, referenceFiles?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, startViewPosition?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, strandSpecificity?: Array<'plus' | 'minus' | 'unstranded'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "signalFiles", "frame");
        }





















































        // Path Params
        const localVarPath = '/signal-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (assembly !== undefined) {
            requestContext.setQueryParam("assembly", ObjectSerializer.serialize(assembly, "Array<'GRCh38' | 'GRCm39'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentSummary !== undefined) {
            requestContext.setQueryParam("content_summary", ObjectSerializer.serialize(contentSummary, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'bigWig'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (filtered !== undefined) {
            requestContext.setQueryParam("filtered", ObjectSerializer.serialize(filtered, "Array<boolean>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (normalized !== undefined) {
            requestContext.setQueryParam("normalized", ObjectSerializer.serialize(normalized, "Array<boolean>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (referenceFiles !== undefined) {
            requestContext.setQueryParam("reference_files", ObjectSerializer.serialize(referenceFiles, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (startViewPosition !== undefined) {
            requestContext.setQueryParam("start_view_position", ObjectSerializer.serialize(startViewPosition, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (strandSpecificity !== undefined) {
            requestContext.setQueryParam("strand_specificity", ObjectSerializer.serialize(strandSpecificity, "Array<'plus' | 'minus' | 'unstranded'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (transcriptomeAnnotation !== undefined) {
            requestContext.setQueryParam("transcriptome_annotation", ObjectSerializer.serialize(transcriptomeAnnotation, "Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async software(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, sourceUrl?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, usedBy?: Array<'consortium analysis' | 'DACC' | 'processing pipelines'>, uuid?: Array<string>, versions?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "software", "frame");
        }




























        // Path Params
        const localVarPath = '/software/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (sourceUrl !== undefined) {
            requestContext.setQueryParam("source_url", ObjectSerializer.serialize(sourceUrl, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (usedBy !== undefined) {
            requestContext.setQueryParam("used_by", ObjectSerializer.serialize(usedBy, "Array<'consortium analysis' | 'DACC' | 'processing pipelines'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (versions !== undefined) {
            requestContext.setQueryParam("versions", ObjectSerializer.serialize(versions, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async softwareVersions(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, creationTimestamp?: Array<string>, description?: Array<string>, downloadId?: Array<string>, downloadedUrl?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, softwareId?: Array<string>, softwareTitle?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, version?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "softwareVersions", "frame");
        }





























        // Path Params
        const localVarPath = '/software-versions/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (downloadId !== undefined) {
            requestContext.setQueryParam("download_id", ObjectSerializer.serialize(downloadId, "Array<string>", ""));
        }

        // Query Params
        if (downloadedUrl !== undefined) {
            requestContext.setQueryParam("downloaded_url", ObjectSerializer.serialize(downloadedUrl, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (softwareId !== undefined) {
            requestContext.setQueryParam("software.@id", ObjectSerializer.serialize(softwareId, "Array<string>", ""));
        }

        // Query Params
        if (softwareTitle !== undefined) {
            requestContext.setQueryParam("software.title", ObjectSerializer.serialize(softwareTitle, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async sources(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, name?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, url?: Array<string>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "sources", "frame");
        }




















        // Path Params
        const localVarPath = '/sources/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async tabularFiles(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisStepVersion?: Array<string>, anvilUrl?: Array<string>, assembly?: Array<'GRCh38' | 'GRCm39'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, contentMd5sum?: Array<string>, contentType?: Array<string>, controlledAccess?: Array<boolean>, creationTimestamp?: Array<string>, dbxrefs?: Array<string>, derivedFrom?: Array<string>, description?: Array<string>, documents?: Array<string>, fileFormat?: Array<'bed' | 'csv' | 'gtf' | 'tsv' | 'txt' | 'vcf'>, fileFormatSpecifications?: Array<string>, fileFormatType?: Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>, fileSet?: Array<string>, fileSize?: Array<number>, geneListFor?: Array<string>, href?: Array<string>, inputFileFor?: Array<string>, integratedIn?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lociListFor?: Array<string>, md5sum?: Array<string>, notes?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, s3Uri?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submittedFileName?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, transcriptomeAnnotation?: Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>, uploadStatus?: Array<'pending' | 'file not found' | 'invalidated' | 'validated'>, uuid?: Array<string>, validationErrorDetail?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "tabularFiles", "frame");
        }


















































        // Path Params
        const localVarPath = '/tabular-files/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisStepVersion !== undefined) {
            requestContext.setQueryParam("analysis_step_version", ObjectSerializer.serialize(analysisStepVersion, "Array<string>", ""));
        }

        // Query Params
        if (anvilUrl !== undefined) {
            requestContext.setQueryParam("anvil_url", ObjectSerializer.serialize(anvilUrl, "Array<string>", ""));
        }

        // Query Params
        if (assembly !== undefined) {
            requestContext.setQueryParam("assembly", ObjectSerializer.serialize(assembly, "Array<'GRCh38' | 'GRCm39'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (contentMd5sum !== undefined) {
            requestContext.setQueryParam("content_md5sum", ObjectSerializer.serialize(contentMd5sum, "Array<string>", ""));
        }

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("content_type", ObjectSerializer.serialize(contentType, "Array<string>", ""));
        }

        // Query Params
        if (controlledAccess !== undefined) {
            requestContext.setQueryParam("controlled_access", ObjectSerializer.serialize(controlledAccess, "Array<boolean>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (derivedFrom !== undefined) {
            requestContext.setQueryParam("derived_from", ObjectSerializer.serialize(derivedFrom, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileFormat !== undefined) {
            requestContext.setQueryParam("file_format", ObjectSerializer.serialize(fileFormat, "Array<'bed' | 'csv' | 'gtf' | 'tsv' | 'txt' | 'vcf'>", ""));
        }

        // Query Params
        if (fileFormatSpecifications !== undefined) {
            requestContext.setQueryParam("file_format_specifications", ObjectSerializer.serialize(fileFormatSpecifications, "Array<string>", ""));
        }

        // Query Params
        if (fileFormatType !== undefined) {
            requestContext.setQueryParam("file_format_type", ObjectSerializer.serialize(fileFormatType, "Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'>", ""));
        }

        // Query Params
        if (fileSet !== undefined) {
            requestContext.setQueryParam("file_set", ObjectSerializer.serialize(fileSet, "Array<string>", ""));
        }

        // Query Params
        if (fileSize !== undefined) {
            requestContext.setQueryParam("file_size", ObjectSerializer.serialize(fileSize, "Array<number>", ""));
        }

        // Query Params
        if (geneListFor !== undefined) {
            requestContext.setQueryParam("gene_list_for", ObjectSerializer.serialize(geneListFor, "Array<string>", ""));
        }

        // Query Params
        if (href !== undefined) {
            requestContext.setQueryParam("href", ObjectSerializer.serialize(href, "Array<string>", ""));
        }

        // Query Params
        if (inputFileFor !== undefined) {
            requestContext.setQueryParam("input_file_for", ObjectSerializer.serialize(inputFileFor, "Array<string>", ""));
        }

        // Query Params
        if (integratedIn !== undefined) {
            requestContext.setQueryParam("integrated_in", ObjectSerializer.serialize(integratedIn, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lociListFor !== undefined) {
            requestContext.setQueryParam("loci_list_for", ObjectSerializer.serialize(lociListFor, "Array<string>", ""));
        }

        // Query Params
        if (md5sum !== undefined) {
            requestContext.setQueryParam("md5sum", ObjectSerializer.serialize(md5sum, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (s3Uri !== undefined) {
            requestContext.setQueryParam("s3_uri", ObjectSerializer.serialize(s3Uri, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submittedFileName !== undefined) {
            requestContext.setQueryParam("submitted_file_name", ObjectSerializer.serialize(submittedFileName, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (transcriptomeAnnotation !== undefined) {
            requestContext.setQueryParam("transcriptome_annotation", ObjectSerializer.serialize(transcriptomeAnnotation, "Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'>", ""));
        }

        // Query Params
        if (uploadStatus !== undefined) {
            requestContext.setQueryParam("upload_status", ObjectSerializer.serialize(uploadStatus, "Array<'pending' | 'file not found' | 'invalidated' | 'validated'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (validationErrorDetail !== undefined) {
            requestContext.setQueryParam("validation_error_detail", ObjectSerializer.serialize(validationErrorDetail, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async technicalSamples(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, documents?: Array<string>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificates?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleMaterial?: Array<'undefined' | 'inorganic' | 'synthetic' | 'organic'>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Saccharomyces cerevisiae' | 'Homo sapiens'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "technicalSamples", "frame");
        }































































        // Path Params
        const localVarPath = '/technical-samples/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (classifications !== undefined) {
            requestContext.setQueryParam("classifications", ObjectSerializer.serialize(classifications, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (constructLibrarySets !== undefined) {
            requestContext.setQueryParam("construct_library_sets", ObjectSerializer.serialize(constructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dateObtained !== undefined) {
            requestContext.setQueryParam("date_obtained", ObjectSerializer.serialize(dateObtained, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsId !== undefined) {
            requestContext.setQueryParam("file_sets.@id", ObjectSerializer.serialize(fileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAccession !== undefined) {
            requestContext.setQueryParam("file_sets.accession", ObjectSerializer.serialize(fileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAliases !== undefined) {
            requestContext.setQueryParam("file_sets.aliases", ObjectSerializer.serialize(fileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAssayTermTermName !== undefined) {
            requestContext.setQueryParam("file_sets.assay_term.term_name", ObjectSerializer.serialize(fileSetsAssayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsLabTitle !== undefined) {
            requestContext.setQueryParam("file_sets.lab.title", ObjectSerializer.serialize(fileSetsLabTitle, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsStatus !== undefined) {
            requestContext.setQueryParam("file_sets.status", ObjectSerializer.serialize(fileSetsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (fileSetsSummary !== undefined) {
            requestContext.setQueryParam("file_sets.summary", ObjectSerializer.serialize(fileSetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificates !== undefined) {
            requestContext.setQueryParam("institutional_certificates", ObjectSerializer.serialize(institutionalCertificates, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (moi !== undefined) {
            requestContext.setQueryParam("moi", ObjectSerializer.serialize(moi, "Array<number>", ""));
        }

        // Query Params
        if (multiplexedInId !== undefined) {
            requestContext.setQueryParam("multiplexed_in.@id", ObjectSerializer.serialize(multiplexedInId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedInAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_in.accession", ObjectSerializer.serialize(multiplexedInAccession, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (nucleicAcidDelivery !== undefined) {
            requestContext.setQueryParam("nucleic_acid_delivery", ObjectSerializer.serialize(nucleicAcidDelivery, "Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>", ""));
        }

        // Query Params
        if (originOf !== undefined) {
            requestContext.setQueryParam("origin_of", ObjectSerializer.serialize(originOf, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sampleMaterial !== undefined) {
            requestContext.setQueryParam("sample_material", ObjectSerializer.serialize(sampleMaterial, "Array<'undefined' | 'inorganic' | 'synthetic' | 'organic'>", ""));
        }

        // Query Params
        if (sampleTermsId !== undefined) {
            requestContext.setQueryParam("sample_terms.@id", ObjectSerializer.serialize(sampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsTermName !== undefined) {
            requestContext.setQueryParam("sample_terms.term_name", ObjectSerializer.serialize(sampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (sortedFractions !== undefined) {
            requestContext.setQueryParam("sorted_fractions", ObjectSerializer.serialize(sortedFractions, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromId !== undefined) {
            requestContext.setQueryParam("sorted_from.@id", ObjectSerializer.serialize(sortedFromId, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromAccession !== undefined) {
            requestContext.setQueryParam("sorted_from.accession", ObjectSerializer.serialize(sortedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromDetail !== undefined) {
            requestContext.setQueryParam("sorted_from_detail", ObjectSerializer.serialize(sortedFromDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (startingAmount !== undefined) {
            requestContext.setQueryParam("starting_amount", ObjectSerializer.serialize(startingAmount, "Array<number>", ""));
        }

        // Query Params
        if (startingAmountUnits !== undefined) {
            requestContext.setQueryParam("starting_amount_units", ObjectSerializer.serialize(startingAmountUnits, "Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Saccharomyces cerevisiae' | 'Homo sapiens'>", ""));
        }

        // Query Params
        if (timePostLibraryDelivery !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery", ObjectSerializer.serialize(timePostLibraryDelivery, "Array<number>", ""));
        }

        // Query Params
        if (timePostLibraryDeliveryUnits !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery_units", ObjectSerializer.serialize(timePostLibraryDeliveryUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async tissues(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, ccfId?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, pmi?: Array<number>, pmiUnits?: Array<'second' | 'minute' | 'hour' | 'day' | 'week'>, pooledFrom?: Array<string>, pooledIn?: Array<string>, preservationMethod?: Array<'cryopreservation' | 'flash-freezing'>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "tissues", "frame");
        }





























































































        // Path Params
        const localVarPath = '/tissues/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (age !== undefined) {
            requestContext.setQueryParam("age", ObjectSerializer.serialize(age, "Array<string>", ""));
        }

        // Query Params
        if (ageUnits !== undefined) {
            requestContext.setQueryParam("age_units", ObjectSerializer.serialize(ageUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biomarkers !== undefined) {
            requestContext.setQueryParam("biomarkers", ObjectSerializer.serialize(biomarkers, "Array<string>", ""));
        }

        // Query Params
        if (ccfId !== undefined) {
            requestContext.setQueryParam("ccf_id", ObjectSerializer.serialize(ccfId, "Array<string>", ""));
        }

        // Query Params
        if (cellularSubPool !== undefined) {
            requestContext.setQueryParam("cellular_sub_pool", ObjectSerializer.serialize(cellularSubPool, "Array<string>", ""));
        }

        // Query Params
        if (classifications !== undefined) {
            requestContext.setQueryParam("classifications", ObjectSerializer.serialize(classifications, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (constructLibrarySets !== undefined) {
            requestContext.setQueryParam("construct_library_sets", ObjectSerializer.serialize(constructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dateObtained !== undefined) {
            requestContext.setQueryParam("date_obtained", ObjectSerializer.serialize(dateObtained, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsId !== undefined) {
            requestContext.setQueryParam("disease_terms.@id", ObjectSerializer.serialize(diseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("disease_terms.term_name", ObjectSerializer.serialize(diseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donors !== undefined) {
            requestContext.setQueryParam("donors", ObjectSerializer.serialize(donors, "Array<string>", ""));
        }

        // Query Params
        if (embryonic !== undefined) {
            requestContext.setQueryParam("embryonic", ObjectSerializer.serialize(embryonic, "Array<boolean>", ""));
        }

        // Query Params
        if (fileSetsId !== undefined) {
            requestContext.setQueryParam("file_sets.@id", ObjectSerializer.serialize(fileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAccession !== undefined) {
            requestContext.setQueryParam("file_sets.accession", ObjectSerializer.serialize(fileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAliases !== undefined) {
            requestContext.setQueryParam("file_sets.aliases", ObjectSerializer.serialize(fileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAssayTermTermName !== undefined) {
            requestContext.setQueryParam("file_sets.assay_term.term_name", ObjectSerializer.serialize(fileSetsAssayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsLabTitle !== undefined) {
            requestContext.setQueryParam("file_sets.lab.title", ObjectSerializer.serialize(fileSetsLabTitle, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsStatus !== undefined) {
            requestContext.setQueryParam("file_sets.status", ObjectSerializer.serialize(fileSetsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (fileSetsSummary !== undefined) {
            requestContext.setQueryParam("file_sets.summary", ObjectSerializer.serialize(fileSetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesId !== undefined) {
            requestContext.setQueryParam("institutional_certificates.@id", ObjectSerializer.serialize(institutionalCertificatesId, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesCertificateIdentifier !== undefined) {
            requestContext.setQueryParam("institutional_certificates.certificate_identifier", ObjectSerializer.serialize(institutionalCertificatesCertificateIdentifier, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (lowerBoundAge !== undefined) {
            requestContext.setQueryParam("lower_bound_age", ObjectSerializer.serialize(lowerBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (lowerBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("lower_bound_age_in_hours", ObjectSerializer.serialize(lowerBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (modificationsId !== undefined) {
            requestContext.setQueryParam("modifications.@id", ObjectSerializer.serialize(modificationsId, "Array<string>", ""));
        }

        // Query Params
        if (modificationsStatus !== undefined) {
            requestContext.setQueryParam("modifications.status", ObjectSerializer.serialize(modificationsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (modificationsSummary !== undefined) {
            requestContext.setQueryParam("modifications.summary", ObjectSerializer.serialize(modificationsSummary, "Array<string>", ""));
        }

        // Query Params
        if (moi !== undefined) {
            requestContext.setQueryParam("moi", ObjectSerializer.serialize(moi, "Array<number>", ""));
        }

        // Query Params
        if (multiplexedInId !== undefined) {
            requestContext.setQueryParam("multiplexed_in.@id", ObjectSerializer.serialize(multiplexedInId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedInAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_in.accession", ObjectSerializer.serialize(multiplexedInAccession, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (nucleicAcidDelivery !== undefined) {
            requestContext.setQueryParam("nucleic_acid_delivery", ObjectSerializer.serialize(nucleicAcidDelivery, "Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>", ""));
        }

        // Query Params
        if (originOf !== undefined) {
            requestContext.setQueryParam("origin_of", ObjectSerializer.serialize(originOf, "Array<string>", ""));
        }

        // Query Params
        if (originatedFrom !== undefined) {
            requestContext.setQueryParam("originated_from", ObjectSerializer.serialize(originatedFrom, "Array<string>", ""));
        }

        // Query Params
        if (partOf !== undefined) {
            requestContext.setQueryParam("part_of", ObjectSerializer.serialize(partOf, "Array<string>", ""));
        }

        // Query Params
        if (parts !== undefined) {
            requestContext.setQueryParam("parts", ObjectSerializer.serialize(parts, "Array<string>", ""));
        }

        // Query Params
        if (pmi !== undefined) {
            requestContext.setQueryParam("pmi", ObjectSerializer.serialize(pmi, "Array<number>", ""));
        }

        // Query Params
        if (pmiUnits !== undefined) {
            requestContext.setQueryParam("pmi_units", ObjectSerializer.serialize(pmiUnits, "Array<'second' | 'minute' | 'hour' | 'day' | 'week'>", ""));
        }

        // Query Params
        if (pooledFrom !== undefined) {
            requestContext.setQueryParam("pooled_from", ObjectSerializer.serialize(pooledFrom, "Array<string>", ""));
        }

        // Query Params
        if (pooledIn !== undefined) {
            requestContext.setQueryParam("pooled_in", ObjectSerializer.serialize(pooledIn, "Array<string>", ""));
        }

        // Query Params
        if (preservationMethod !== undefined) {
            requestContext.setQueryParam("preservation_method", ObjectSerializer.serialize(preservationMethod, "Array<'cryopreservation' | 'flash-freezing'>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsId !== undefined) {
            requestContext.setQueryParam("sample_terms.@id", ObjectSerializer.serialize(sampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsTermName !== undefined) {
            requestContext.setQueryParam("sample_terms.term_name", ObjectSerializer.serialize(sampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (sex !== undefined) {
            requestContext.setQueryParam("sex", ObjectSerializer.serialize(sex, "Array<'female' | 'male' | 'mixed' | 'unspecified'>", ""));
        }

        // Query Params
        if (sortedFractions !== undefined) {
            requestContext.setQueryParam("sorted_fractions", ObjectSerializer.serialize(sortedFractions, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromId !== undefined) {
            requestContext.setQueryParam("sorted_from.@id", ObjectSerializer.serialize(sortedFromId, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromAccession !== undefined) {
            requestContext.setQueryParam("sorted_from.accession", ObjectSerializer.serialize(sortedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromDetail !== undefined) {
            requestContext.setQueryParam("sorted_from_detail", ObjectSerializer.serialize(sortedFromDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (startingAmount !== undefined) {
            requestContext.setQueryParam("starting_amount", ObjectSerializer.serialize(startingAmount, "Array<number>", ""));
        }

        // Query Params
        if (startingAmountUnits !== undefined) {
            requestContext.setQueryParam("starting_amount_units", ObjectSerializer.serialize(startingAmountUnits, "Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (timePostLibraryDelivery !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery", ObjectSerializer.serialize(timePostLibraryDelivery, "Array<number>", ""));
        }

        // Query Params
        if (timePostLibraryDeliveryUnits !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery_units", ObjectSerializer.serialize(timePostLibraryDeliveryUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (treatmentsId !== undefined) {
            requestContext.setQueryParam("treatments.@id", ObjectSerializer.serialize(treatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsPurpose !== undefined) {
            requestContext.setQueryParam("treatments.purpose", ObjectSerializer.serialize(treatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (treatmentsStatus !== undefined) {
            requestContext.setQueryParam("treatments.status", ObjectSerializer.serialize(treatmentsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (treatmentsSummary !== undefined) {
            requestContext.setQueryParam("treatments.summary", ObjectSerializer.serialize(treatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("treatments.treatment_type", ObjectSerializer.serialize(treatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (upperBoundAge !== undefined) {
            requestContext.setQueryParam("upper_bound_age", ObjectSerializer.serialize(upperBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (upperBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("upper_bound_age_in_hours", ObjectSerializer.serialize(upperBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async treatments(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, amount?: Array<number>, amountUnits?: Array<'mg/kg' | 'mg/mL' | 'mM' | 'ng/mL' | 'nM' | 'percent' | 'μg/kg' | 'μg/kg' | 'μg/mL' | 'μM' | 'kpa'>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biosamplesTreated?: Array<string>, creationTimestamp?: Array<string>, depletion?: Array<boolean>, description?: Array<string>, documents?: Array<string>, duration?: Array<number>, durationUnits?: Array<'second' | 'minute' | 'hour' | 'day'>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, notes?: Array<string>, pH?: Array<number>, postTreatmentTime?: Array<number>, postTreatmentTimeUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, productId?: Array<string>, purpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, releaseTimestamp?: Array<string>, sourcesId?: Array<string>, status?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, temperature?: Array<number>, temperatureUnits?: Array<'Celsius'>, treatmentTermId?: Array<string>, treatmentTermName?: Array<string>, treatmentType?: Array<'chemical' | 'protein' | 'environmental'>, uuid?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "treatments", "frame");
        }








































        // Path Params
        const localVarPath = '/treatments/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (amount !== undefined) {
            requestContext.setQueryParam("amount", ObjectSerializer.serialize(amount, "Array<number>", ""));
        }

        // Query Params
        if (amountUnits !== undefined) {
            requestContext.setQueryParam("amount_units", ObjectSerializer.serialize(amountUnits, "Array<'mg/kg' | 'mg/mL' | 'mM' | 'ng/mL' | 'nM' | 'percent' | 'μg/kg' | 'μg/kg' | 'μg/mL' | 'μM' | 'kpa'>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biosamplesTreated !== undefined) {
            requestContext.setQueryParam("biosamples_treated", ObjectSerializer.serialize(biosamplesTreated, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (depletion !== undefined) {
            requestContext.setQueryParam("depletion", ObjectSerializer.serialize(depletion, "Array<boolean>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (duration !== undefined) {
            requestContext.setQueryParam("duration", ObjectSerializer.serialize(duration, "Array<number>", ""));
        }

        // Query Params
        if (durationUnits !== undefined) {
            requestContext.setQueryParam("duration_units", ObjectSerializer.serialize(durationUnits, "Array<'second' | 'minute' | 'hour' | 'day'>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (pH !== undefined) {
            requestContext.setQueryParam("pH", ObjectSerializer.serialize(pH, "Array<number>", ""));
        }

        // Query Params
        if (postTreatmentTime !== undefined) {
            requestContext.setQueryParam("post_treatment_time", ObjectSerializer.serialize(postTreatmentTime, "Array<number>", ""));
        }

        // Query Params
        if (postTreatmentTimeUnits !== undefined) {
            requestContext.setQueryParam("post_treatment_time_units", ObjectSerializer.serialize(postTreatmentTimeUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (purpose !== undefined) {
            requestContext.setQueryParam("purpose", ObjectSerializer.serialize(purpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (temperature !== undefined) {
            requestContext.setQueryParam("temperature", ObjectSerializer.serialize(temperature, "Array<number>", ""));
        }

        // Query Params
        if (temperatureUnits !== undefined) {
            requestContext.setQueryParam("temperature_units", ObjectSerializer.serialize(temperatureUnits, "Array<'Celsius'>", ""));
        }

        // Query Params
        if (treatmentTermId !== undefined) {
            requestContext.setQueryParam("treatment_term_id", ObjectSerializer.serialize(treatmentTermId, "Array<string>", ""));
        }

        // Query Params
        if (treatmentTermName !== undefined) {
            requestContext.setQueryParam("treatment_term_name", ObjectSerializer.serialize(treatmentTermName, "Array<string>", ""));
        }

        // Query Params
        if (treatmentType !== undefined) {
            requestContext.setQueryParam("treatment_type", ObjectSerializer.serialize(treatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async users(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, aliases?: Array<string>, creationTimestamp?: Array<string>, description?: Array<string>, email?: Array<string>, firstName?: Array<string>, groups?: Array<'admin' | 'read-only-admin' | 'verified'>, jobTitle?: Array<'Principal Investigator' | 'Co-Investigator' | 'Project Manager' | 'Submitter' | 'Post Doc' | 'Data Wrangler' | 'Scientist' | 'Computational Scientist' | 'Software Developer' | 'NHGRI staff member' | 'Other'>, lab?: Array<string>, lastName?: Array<string>, notes?: Array<string>, status?: Array<'current' | 'deleted' | 'disabled'>, submitsFor?: Array<string>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, title?: Array<string>, uuid?: Array<string>, viewingGroups?: Array<'community' | 'IGVF'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "users", "frame");
        }

























        // Path Params
        const localVarPath = '/users/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "Array<string>", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("first_name", ObjectSerializer.serialize(firstName, "Array<string>", ""));
        }

        // Query Params
        if (groups !== undefined) {
            requestContext.setQueryParam("groups", ObjectSerializer.serialize(groups, "Array<'admin' | 'read-only-admin' | 'verified'>", ""));
        }

        // Query Params
        if (jobTitle !== undefined) {
            requestContext.setQueryParam("job_title", ObjectSerializer.serialize(jobTitle, "Array<'Principal Investigator' | 'Co-Investigator' | 'Project Manager' | 'Submitter' | 'Post Doc' | 'Data Wrangler' | 'Scientist' | 'Computational Scientist' | 'Software Developer' | 'NHGRI staff member' | 'Other'>", ""));
        }

        // Query Params
        if (lab !== undefined) {
            requestContext.setQueryParam("lab", ObjectSerializer.serialize(lab, "Array<string>", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("last_name", ObjectSerializer.serialize(lastName, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'current' | 'deleted' | 'disabled'>", ""));
        }

        // Query Params
        if (submitsFor !== undefined) {
            requestContext.setQueryParam("submits_for", ObjectSerializer.serialize(submitsFor, "Array<string>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (title !== undefined) {
            requestContext.setQueryParam("title", ObjectSerializer.serialize(title, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (viewingGroups !== undefined) {
            requestContext.setQueryParam("viewing_groups", ObjectSerializer.serialize(viewingGroups, "Array<'community' | 'IGVF'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async wholeOrganisms(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, age?: Array<string>, ageUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>, aliases?: Array<string>, alternateAccessions?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, biomarkers?: Array<string>, cellularSubPool?: Array<string>, classifications?: Array<string>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, constructLibrarySets?: Array<string>, creationTimestamp?: Array<string>, dateObtained?: Array<string>, dbxrefs?: Array<string>, description?: Array<string>, diseaseTermsId?: Array<string>, diseaseTermsTermName?: Array<string>, documents?: Array<string>, donors?: Array<string>, embryonic?: Array<boolean>, fileSetsId?: Array<string>, fileSetsAccession?: Array<string>, fileSetsAliases?: Array<string>, fileSetsAssayTermTermName?: Array<string>, fileSetsLabTitle?: Array<string>, fileSetsStatus?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, fileSetsSummary?: Array<string>, institutionalCertificatesId?: Array<string>, institutionalCertificatesCertificateIdentifier?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, lotId?: Array<string>, lowerBoundAge?: Array<number>, lowerBoundAgeInHours?: Array<number>, modificationsId?: Array<string>, modificationsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, modificationsSummary?: Array<string>, moi?: Array<number>, multiplexedInId?: Array<string>, multiplexedInAccession?: Array<string>, notes?: Array<string>, nucleicAcidDelivery?: Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>, originOf?: Array<string>, originatedFrom?: Array<string>, partOf?: Array<string>, parts?: Array<string>, pooledFrom?: Array<string>, pooledIn?: Array<string>, productId?: Array<string>, protocols?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sampleTermsId?: Array<string>, sampleTermsTermName?: Array<string>, sex?: Array<'female' | 'male' | 'mixed' | 'unspecified'>, sortedFractions?: Array<string>, sortedFromId?: Array<string>, sortedFromAccession?: Array<string>, sortedFromDetail?: Array<string>, sourcesId?: Array<string>, startingAmount?: Array<number>, startingAmountUnits?: Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, taxa?: Array<'Homo sapiens' | 'Mus musculus'>, timePostLibraryDelivery?: Array<number>, timePostLibraryDeliveryUnits?: Array<'minute' | 'hour' | 'day' | 'week' | 'month'>, treatmentsId?: Array<string>, treatmentsPurpose?: Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>, treatmentsStatus?: Array<'archived' | 'deleted' | 'in progress' | 'released'>, treatmentsSummary?: Array<string>, treatmentsTreatmentType?: Array<'chemical' | 'protein' | 'environmental'>, upperBoundAge?: Array<number>, upperBoundAgeInHours?: Array<number>, url?: Array<string>, uuid?: Array<string>, virtual?: Array<boolean>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "wholeOrganisms", "frame");
        }

























































































        // Path Params
        const localVarPath = '/whole-organisms/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (age !== undefined) {
            requestContext.setQueryParam("age", ObjectSerializer.serialize(age, "Array<string>", ""));
        }

        // Query Params
        if (ageUnits !== undefined) {
            requestContext.setQueryParam("age_units", ObjectSerializer.serialize(ageUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (biomarkers !== undefined) {
            requestContext.setQueryParam("biomarkers", ObjectSerializer.serialize(biomarkers, "Array<string>", ""));
        }

        // Query Params
        if (cellularSubPool !== undefined) {
            requestContext.setQueryParam("cellular_sub_pool", ObjectSerializer.serialize(cellularSubPool, "Array<string>", ""));
        }

        // Query Params
        if (classifications !== undefined) {
            requestContext.setQueryParam("classifications", ObjectSerializer.serialize(classifications, "Array<string>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (constructLibrarySets !== undefined) {
            requestContext.setQueryParam("construct_library_sets", ObjectSerializer.serialize(constructLibrarySets, "Array<string>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (dateObtained !== undefined) {
            requestContext.setQueryParam("date_obtained", ObjectSerializer.serialize(dateObtained, "Array<string>", ""));
        }

        // Query Params
        if (dbxrefs !== undefined) {
            requestContext.setQueryParam("dbxrefs", ObjectSerializer.serialize(dbxrefs, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsId !== undefined) {
            requestContext.setQueryParam("disease_terms.@id", ObjectSerializer.serialize(diseaseTermsId, "Array<string>", ""));
        }

        // Query Params
        if (diseaseTermsTermName !== undefined) {
            requestContext.setQueryParam("disease_terms.term_name", ObjectSerializer.serialize(diseaseTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (donors !== undefined) {
            requestContext.setQueryParam("donors", ObjectSerializer.serialize(donors, "Array<string>", ""));
        }

        // Query Params
        if (embryonic !== undefined) {
            requestContext.setQueryParam("embryonic", ObjectSerializer.serialize(embryonic, "Array<boolean>", ""));
        }

        // Query Params
        if (fileSetsId !== undefined) {
            requestContext.setQueryParam("file_sets.@id", ObjectSerializer.serialize(fileSetsId, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAccession !== undefined) {
            requestContext.setQueryParam("file_sets.accession", ObjectSerializer.serialize(fileSetsAccession, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAliases !== undefined) {
            requestContext.setQueryParam("file_sets.aliases", ObjectSerializer.serialize(fileSetsAliases, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsAssayTermTermName !== undefined) {
            requestContext.setQueryParam("file_sets.assay_term.term_name", ObjectSerializer.serialize(fileSetsAssayTermTermName, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsLabTitle !== undefined) {
            requestContext.setQueryParam("file_sets.lab.title", ObjectSerializer.serialize(fileSetsLabTitle, "Array<string>", ""));
        }

        // Query Params
        if (fileSetsStatus !== undefined) {
            requestContext.setQueryParam("file_sets.status", ObjectSerializer.serialize(fileSetsStatus, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (fileSetsSummary !== undefined) {
            requestContext.setQueryParam("file_sets.summary", ObjectSerializer.serialize(fileSetsSummary, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesId !== undefined) {
            requestContext.setQueryParam("institutional_certificates.@id", ObjectSerializer.serialize(institutionalCertificatesId, "Array<string>", ""));
        }

        // Query Params
        if (institutionalCertificatesCertificateIdentifier !== undefined) {
            requestContext.setQueryParam("institutional_certificates.certificate_identifier", ObjectSerializer.serialize(institutionalCertificatesCertificateIdentifier, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (lotId !== undefined) {
            requestContext.setQueryParam("lot_id", ObjectSerializer.serialize(lotId, "Array<string>", ""));
        }

        // Query Params
        if (lowerBoundAge !== undefined) {
            requestContext.setQueryParam("lower_bound_age", ObjectSerializer.serialize(lowerBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (lowerBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("lower_bound_age_in_hours", ObjectSerializer.serialize(lowerBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (modificationsId !== undefined) {
            requestContext.setQueryParam("modifications.@id", ObjectSerializer.serialize(modificationsId, "Array<string>", ""));
        }

        // Query Params
        if (modificationsStatus !== undefined) {
            requestContext.setQueryParam("modifications.status", ObjectSerializer.serialize(modificationsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (modificationsSummary !== undefined) {
            requestContext.setQueryParam("modifications.summary", ObjectSerializer.serialize(modificationsSummary, "Array<string>", ""));
        }

        // Query Params
        if (moi !== undefined) {
            requestContext.setQueryParam("moi", ObjectSerializer.serialize(moi, "Array<number>", ""));
        }

        // Query Params
        if (multiplexedInId !== undefined) {
            requestContext.setQueryParam("multiplexed_in.@id", ObjectSerializer.serialize(multiplexedInId, "Array<string>", ""));
        }

        // Query Params
        if (multiplexedInAccession !== undefined) {
            requestContext.setQueryParam("multiplexed_in.accession", ObjectSerializer.serialize(multiplexedInAccession, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (nucleicAcidDelivery !== undefined) {
            requestContext.setQueryParam("nucleic_acid_delivery", ObjectSerializer.serialize(nucleicAcidDelivery, "Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'>", ""));
        }

        // Query Params
        if (originOf !== undefined) {
            requestContext.setQueryParam("origin_of", ObjectSerializer.serialize(originOf, "Array<string>", ""));
        }

        // Query Params
        if (originatedFrom !== undefined) {
            requestContext.setQueryParam("originated_from", ObjectSerializer.serialize(originatedFrom, "Array<string>", ""));
        }

        // Query Params
        if (partOf !== undefined) {
            requestContext.setQueryParam("part_of", ObjectSerializer.serialize(partOf, "Array<string>", ""));
        }

        // Query Params
        if (parts !== undefined) {
            requestContext.setQueryParam("parts", ObjectSerializer.serialize(parts, "Array<string>", ""));
        }

        // Query Params
        if (pooledFrom !== undefined) {
            requestContext.setQueryParam("pooled_from", ObjectSerializer.serialize(pooledFrom, "Array<string>", ""));
        }

        // Query Params
        if (pooledIn !== undefined) {
            requestContext.setQueryParam("pooled_in", ObjectSerializer.serialize(pooledIn, "Array<string>", ""));
        }

        // Query Params
        if (productId !== undefined) {
            requestContext.setQueryParam("product_id", ObjectSerializer.serialize(productId, "Array<string>", ""));
        }

        // Query Params
        if (protocols !== undefined) {
            requestContext.setQueryParam("protocols", ObjectSerializer.serialize(protocols, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsId !== undefined) {
            requestContext.setQueryParam("sample_terms.@id", ObjectSerializer.serialize(sampleTermsId, "Array<string>", ""));
        }

        // Query Params
        if (sampleTermsTermName !== undefined) {
            requestContext.setQueryParam("sample_terms.term_name", ObjectSerializer.serialize(sampleTermsTermName, "Array<string>", ""));
        }

        // Query Params
        if (sex !== undefined) {
            requestContext.setQueryParam("sex", ObjectSerializer.serialize(sex, "Array<'female' | 'male' | 'mixed' | 'unspecified'>", ""));
        }

        // Query Params
        if (sortedFractions !== undefined) {
            requestContext.setQueryParam("sorted_fractions", ObjectSerializer.serialize(sortedFractions, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromId !== undefined) {
            requestContext.setQueryParam("sorted_from.@id", ObjectSerializer.serialize(sortedFromId, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromAccession !== undefined) {
            requestContext.setQueryParam("sorted_from.accession", ObjectSerializer.serialize(sortedFromAccession, "Array<string>", ""));
        }

        // Query Params
        if (sortedFromDetail !== undefined) {
            requestContext.setQueryParam("sorted_from_detail", ObjectSerializer.serialize(sortedFromDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourcesId !== undefined) {
            requestContext.setQueryParam("sources.@id", ObjectSerializer.serialize(sourcesId, "Array<string>", ""));
        }

        // Query Params
        if (startingAmount !== undefined) {
            requestContext.setQueryParam("starting_amount", ObjectSerializer.serialize(startingAmount, "Array<number>", ""));
        }

        // Query Params
        if (startingAmountUnits !== undefined) {
            requestContext.setQueryParam("starting_amount_units", ObjectSerializer.serialize(startingAmountUnits, "Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (taxa !== undefined) {
            requestContext.setQueryParam("taxa", ObjectSerializer.serialize(taxa, "Array<'Homo sapiens' | 'Mus musculus'>", ""));
        }

        // Query Params
        if (timePostLibraryDelivery !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery", ObjectSerializer.serialize(timePostLibraryDelivery, "Array<number>", ""));
        }

        // Query Params
        if (timePostLibraryDeliveryUnits !== undefined) {
            requestContext.setQueryParam("time_post_library_delivery_units", ObjectSerializer.serialize(timePostLibraryDeliveryUnits, "Array<'minute' | 'hour' | 'day' | 'week' | 'month'>", ""));
        }

        // Query Params
        if (treatmentsId !== undefined) {
            requestContext.setQueryParam("treatments.@id", ObjectSerializer.serialize(treatmentsId, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsPurpose !== undefined) {
            requestContext.setQueryParam("treatments.purpose", ObjectSerializer.serialize(treatmentsPurpose, "Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'>", ""));
        }

        // Query Params
        if (treatmentsStatus !== undefined) {
            requestContext.setQueryParam("treatments.status", ObjectSerializer.serialize(treatmentsStatus, "Array<'archived' | 'deleted' | 'in progress' | 'released'>", ""));
        }

        // Query Params
        if (treatmentsSummary !== undefined) {
            requestContext.setQueryParam("treatments.summary", ObjectSerializer.serialize(treatmentsSummary, "Array<string>", ""));
        }

        // Query Params
        if (treatmentsTreatmentType !== undefined) {
            requestContext.setQueryParam("treatments.treatment_type", ObjectSerializer.serialize(treatmentsTreatmentType, "Array<'chemical' | 'protein' | 'environmental'>", ""));
        }

        // Query Params
        if (upperBoundAge !== undefined) {
            requestContext.setQueryParam("upper_bound_age", ObjectSerializer.serialize(upperBoundAge, "Array<number>", ""));
        }

        // Query Params
        if (upperBoundAgeInHours !== undefined) {
            requestContext.setQueryParam("upper_bound_age_in_hours", ObjectSerializer.serialize(upperBoundAgeInHours, "Array<number>", ""));
        }

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (virtual !== undefined) {
            requestContext.setQueryParam("virtual", ObjectSerializer.serialize(virtual, "Array<boolean>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async workflows(frame: 'object', query?: string, limit?: Limit, sort?: Array<string>, id?: Array<string>, accession?: Array<string>, aliases?: Array<string>, alternateAccessions?: Array<string>, analysisSteps?: Array<string>, awardId?: Array<string>, awardComponent?: Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>, collections?: Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>, creationTimestamp?: Array<string>, description?: Array<string>, documents?: Array<string>, labId?: Array<string>, labTitle?: Array<string>, name?: Array<string>, notes?: Array<string>, publicationIdentifiers?: Array<string>, publications?: Array<string>, releaseTimestamp?: Array<string>, revokeDetail?: Array<string>, sourceUrl?: Array<string>, standardsPageId?: Array<string>, standardsPageTitle?: Array<string>, status?: Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>, submittedById?: Array<string>, submittedByTitle?: Array<string>, submitterComment?: Array<string>, summary?: Array<string>, uuid?: Array<string>, workflowRepositories?: Array<string>, workflowVersion?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'frame' is not null or undefined
        if (frame === null || frame === undefined) {
            throw new RequiredError("IgvfApi", "workflows", "frame");
        }



































        // Path Params
        const localVarPath = '/workflows/@@listing';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Query Params
        if (frame !== undefined) {
            requestContext.setQueryParam("frame", ObjectSerializer.serialize(frame, "'object'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "Limit", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("@id", ObjectSerializer.serialize(id, "Array<string>", ""));
        }

        // Query Params
        if (accession !== undefined) {
            requestContext.setQueryParam("accession", ObjectSerializer.serialize(accession, "Array<string>", ""));
        }

        // Query Params
        if (aliases !== undefined) {
            requestContext.setQueryParam("aliases", ObjectSerializer.serialize(aliases, "Array<string>", ""));
        }

        // Query Params
        if (alternateAccessions !== undefined) {
            requestContext.setQueryParam("alternate_accessions", ObjectSerializer.serialize(alternateAccessions, "Array<string>", ""));
        }

        // Query Params
        if (analysisSteps !== undefined) {
            requestContext.setQueryParam("analysis_steps", ObjectSerializer.serialize(analysisSteps, "Array<string>", ""));
        }

        // Query Params
        if (awardId !== undefined) {
            requestContext.setQueryParam("award.@id", ObjectSerializer.serialize(awardId, "Array<string>", ""));
        }

        // Query Params
        if (awardComponent !== undefined) {
            requestContext.setQueryParam("award.component", ObjectSerializer.serialize(awardComponent, "Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'>", ""));
        }

        // Query Params
        if (collections !== undefined) {
            requestContext.setQueryParam("collections", ObjectSerializer.serialize(collections, "Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'>", ""));
        }

        // Query Params
        if (creationTimestamp !== undefined) {
            requestContext.setQueryParam("creation_timestamp", ObjectSerializer.serialize(creationTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "Array<string>", ""));
        }

        // Query Params
        if (documents !== undefined) {
            requestContext.setQueryParam("documents", ObjectSerializer.serialize(documents, "Array<string>", ""));
        }

        // Query Params
        if (labId !== undefined) {
            requestContext.setQueryParam("lab.@id", ObjectSerializer.serialize(labId, "Array<string>", ""));
        }

        // Query Params
        if (labTitle !== undefined) {
            requestContext.setQueryParam("lab.title", ObjectSerializer.serialize(labTitle, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
        }

        // Query Params
        if (notes !== undefined) {
            requestContext.setQueryParam("notes", ObjectSerializer.serialize(notes, "Array<string>", ""));
        }

        // Query Params
        if (publicationIdentifiers !== undefined) {
            requestContext.setQueryParam("publication_identifiers", ObjectSerializer.serialize(publicationIdentifiers, "Array<string>", ""));
        }

        // Query Params
        if (publications !== undefined) {
            requestContext.setQueryParam("publications", ObjectSerializer.serialize(publications, "Array<string>", ""));
        }

        // Query Params
        if (releaseTimestamp !== undefined) {
            requestContext.setQueryParam("release_timestamp", ObjectSerializer.serialize(releaseTimestamp, "Array<string>", ""));
        }

        // Query Params
        if (revokeDetail !== undefined) {
            requestContext.setQueryParam("revoke_detail", ObjectSerializer.serialize(revokeDetail, "Array<string>", ""));
        }

        // Query Params
        if (sourceUrl !== undefined) {
            requestContext.setQueryParam("source_url", ObjectSerializer.serialize(sourceUrl, "Array<string>", ""));
        }

        // Query Params
        if (standardsPageId !== undefined) {
            requestContext.setQueryParam("standards_page.@id", ObjectSerializer.serialize(standardsPageId, "Array<string>", ""));
        }

        // Query Params
        if (standardsPageTitle !== undefined) {
            requestContext.setQueryParam("standards_page.title", ObjectSerializer.serialize(standardsPageTitle, "Array<string>", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'>", ""));
        }

        // Query Params
        if (submittedById !== undefined) {
            requestContext.setQueryParam("submitted_by.@id", ObjectSerializer.serialize(submittedById, "Array<string>", ""));
        }

        // Query Params
        if (submittedByTitle !== undefined) {
            requestContext.setQueryParam("submitted_by.title", ObjectSerializer.serialize(submittedByTitle, "Array<string>", ""));
        }

        // Query Params
        if (submitterComment !== undefined) {
            requestContext.setQueryParam("submitter_comment", ObjectSerializer.serialize(submitterComment, "Array<string>", ""));
        }

        // Query Params
        if (summary !== undefined) {
            requestContext.setQueryParam("summary", ObjectSerializer.serialize(summary, "Array<string>", ""));
        }

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "Array<string>", ""));
        }

        // Query Params
        if (workflowRepositories !== undefined) {
            requestContext.setQueryParam("workflow_repositories", ObjectSerializer.serialize(workflowRepositories, "Array<string>", ""));
        }

        // Query Params
        if (workflowVersion !== undefined) {
            requestContext.setQueryParam("workflow_version", ObjectSerializer.serialize(workflowVersion, "Array<number>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class IgvfApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessKeysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccessKeyResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessKeyResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessKeyResults", ""
            ) as AccessKeyResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessKeyResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessKeyResults", ""
            ) as AccessKeyResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alignmentFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alignmentFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlignmentFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AlignmentFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlignmentFileResults", ""
            ) as AlignmentFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlignmentFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlignmentFileResults", ""
            ) as AlignmentFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to analysisSets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async analysisSetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalysisSetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalysisSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisSetResults", ""
            ) as AnalysisSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalysisSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisSetResults", ""
            ) as AnalysisSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to analysisStepVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async analysisStepVersionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalysisStepVersionResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalysisStepVersionResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisStepVersionResults", ""
            ) as AnalysisStepVersionResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalysisStepVersionResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisStepVersionResults", ""
            ) as AnalysisStepVersionResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to analysisSteps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async analysisStepsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnalysisStepResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalysisStepResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisStepResults", ""
            ) as AnalysisStepResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalysisStepResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalysisStepResults", ""
            ) as AnalysisStepResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assayTerms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assayTermsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AssayTermResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssayTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssayTermResults", ""
            ) as AssayTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AssayTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssayTermResults", ""
            ) as AssayTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to auxiliarySets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async auxiliarySetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AuxiliarySetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuxiliarySetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuxiliarySetResults", ""
            ) as AuxiliarySetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AuxiliarySetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuxiliarySetResults", ""
            ) as AuxiliarySetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to awards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async awardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AwardResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AwardResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AwardResults", ""
            ) as AwardResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AwardResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AwardResults", ""
            ) as AwardResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchDownload
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchDownloadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to biomarkers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async biomarkersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BiomarkerResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BiomarkerResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BiomarkerResults", ""
            ) as BiomarkerResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BiomarkerResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BiomarkerResults", ""
            ) as BiomarkerResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to configurationFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async configurationFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConfigurationFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfigurationFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationFileResults", ""
            ) as ConfigurationFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConfigurationFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfigurationFileResults", ""
            ) as ConfigurationFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to constructLibrarySets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async constructLibrarySetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConstructLibrarySetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConstructLibrarySetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConstructLibrarySetResults", ""
            ) as ConstructLibrarySetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConstructLibrarySetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConstructLibrarySetResults", ""
            ) as ConstructLibrarySetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to crisprModifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async crisprModificationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CrisprModificationResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CrisprModificationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CrisprModificationResults", ""
            ) as CrisprModificationResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CrisprModificationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CrisprModificationResults", ""
            ) as CrisprModificationResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to curatedSets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async curatedSetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CuratedSetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CuratedSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CuratedSetResults", ""
            ) as CuratedSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CuratedSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CuratedSetResults", ""
            ) as CuratedSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to degronModifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async degronModificationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DegronModificationResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DegronModificationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DegronModificationResults", ""
            ) as DegronModificationResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DegronModificationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DegronModificationResults", ""
            ) as DegronModificationResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to documents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async documentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DocumentResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocumentResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentResults", ""
            ) as DocumentResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DocumentResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocumentResults", ""
            ) as DocumentResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to download
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to genes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async genesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GeneResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GeneResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GeneResults", ""
            ) as GeneResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GeneResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GeneResults", ""
            ) as GeneResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to genomeBrowserAnnotationFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async genomeBrowserAnnotationFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GenomeBrowserAnnotationFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenomeBrowserAnnotationFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenomeBrowserAnnotationFileResults", ""
            ) as GenomeBrowserAnnotationFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenomeBrowserAnnotationFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenomeBrowserAnnotationFileResults", ""
            ) as GenomeBrowserAnnotationFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Item >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Item = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Item", ""
            ) as Item;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Object not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Item = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Item", ""
            ) as Item;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to humanDonors
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async humanDonorsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HumanDonorResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HumanDonorResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HumanDonorResults", ""
            ) as HumanDonorResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HumanDonorResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HumanDonorResults", ""
            ) as HumanDonorResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ImageFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImageFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageFileResults", ""
            ) as ImageFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImageFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageFileResults", ""
            ) as ImageFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to images
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ImageResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImageResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageResults", ""
            ) as ImageResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImageResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageResults", ""
            ) as ImageResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inVitroSystems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inVitroSystemsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InVitroSystemResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InVitroSystemResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InVitroSystemResults", ""
            ) as InVitroSystemResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InVitroSystemResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InVitroSystemResults", ""
            ) as InVitroSystemResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to institutionalCertificates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async institutionalCertificatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InstitutionalCertificateResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InstitutionalCertificateResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InstitutionalCertificateResults", ""
            ) as InstitutionalCertificateResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InstitutionalCertificateResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InstitutionalCertificateResults", ""
            ) as InstitutionalCertificateResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to labs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async labsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LabResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LabResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LabResults", ""
            ) as LabResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LabResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LabResults", ""
            ) as LabResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to matrixFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async matrixFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MatrixFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MatrixFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MatrixFileResults", ""
            ) as MatrixFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MatrixFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MatrixFileResults", ""
            ) as MatrixFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to measurementSets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async measurementSetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MeasurementSetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MeasurementSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementSetResults", ""
            ) as MeasurementSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MeasurementSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MeasurementSetResults", ""
            ) as MeasurementSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to modelFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async modelFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelFileResults", ""
            ) as ModelFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelFileResults", ""
            ) as ModelFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to modelSets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async modelSetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ModelSetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ModelSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelSetResults", ""
            ) as ModelSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ModelSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ModelSetResults", ""
            ) as ModelSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to multiplexedSamples
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async multiplexedSamplesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MultiplexedSampleResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MultiplexedSampleResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultiplexedSampleResults", ""
            ) as MultiplexedSampleResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MultiplexedSampleResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MultiplexedSampleResults", ""
            ) as MultiplexedSampleResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to openReadingFrames
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async openReadingFramesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OpenReadingFrameResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OpenReadingFrameResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OpenReadingFrameResults", ""
            ) as OpenReadingFrameResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OpenReadingFrameResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OpenReadingFrameResults", ""
            ) as OpenReadingFrameResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PageResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageResults", ""
            ) as PageResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageResults", ""
            ) as PageResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phenotypeTerms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phenotypeTermsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhenotypeTermResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhenotypeTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhenotypeTermResults", ""
            ) as PhenotypeTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhenotypeTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhenotypeTermResults", ""
            ) as PhenotypeTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phenotypicFeatures
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phenotypicFeaturesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PhenotypicFeatureResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhenotypicFeatureResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhenotypicFeatureResults", ""
            ) as PhenotypicFeatureResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhenotypicFeatureResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhenotypicFeatureResults", ""
            ) as PhenotypicFeatureResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to platformTerms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async platformTermsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PlatformTermResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PlatformTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlatformTermResults", ""
            ) as PlatformTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PlatformTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PlatformTermResults", ""
            ) as PlatformTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to predictionSets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async predictionSetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PredictionSetResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PredictionSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PredictionSetResults", ""
            ) as PredictionSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PredictionSetResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PredictionSetResults", ""
            ) as PredictionSetResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to primaryCells
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async primaryCellsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PrimaryCellResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PrimaryCellResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrimaryCellResults", ""
            ) as PrimaryCellResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PrimaryCellResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PrimaryCellResults", ""
            ) as PrimaryCellResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async publicationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicationResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicationResults", ""
            ) as PublicationResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicationResults", ""
            ) as PublicationResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referenceFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referenceFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferenceFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferenceFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferenceFileResults", ""
            ) as ReferenceFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReferenceFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferenceFileResults", ""
            ) as ReferenceFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to report
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reportWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rodentDonors
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rodentDonorsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RodentDonorResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RodentDonorResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RodentDonorResults", ""
            ) as RodentDonorResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RodentDonorResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RodentDonorResults", ""
            ) as RodentDonorResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sampleTerms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sampleTermsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SampleTermResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SampleTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SampleTermResults", ""
            ) as SampleTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SampleTermResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SampleTermResults", ""
            ) as SampleTermResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to schemaForItemType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async schemaForItemTypeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to schemas
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async schemasWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to search
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResults", ""
            ) as SearchResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchResults", ""
            ) as SearchResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sequenceFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sequenceFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SequenceFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SequenceFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SequenceFileResults", ""
            ) as SequenceFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SequenceFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SequenceFileResults", ""
            ) as SequenceFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to signalFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async signalFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SignalFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SignalFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignalFileResults", ""
            ) as SignalFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SignalFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignalFileResults", ""
            ) as SignalFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to software
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async softwareWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SoftwareResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SoftwareResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SoftwareResults", ""
            ) as SoftwareResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SoftwareResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SoftwareResults", ""
            ) as SoftwareResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to softwareVersions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async softwareVersionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SoftwareVersionResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SoftwareVersionResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SoftwareVersionResults", ""
            ) as SoftwareVersionResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SoftwareVersionResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SoftwareVersionResults", ""
            ) as SoftwareVersionResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sources
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SourceResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SourceResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SourceResults", ""
            ) as SourceResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SourceResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SourceResults", ""
            ) as SourceResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tabularFiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tabularFilesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TabularFileResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TabularFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TabularFileResults", ""
            ) as TabularFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TabularFileResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TabularFileResults", ""
            ) as TabularFileResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to technicalSamples
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async technicalSamplesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TechnicalSampleResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TechnicalSampleResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TechnicalSampleResults", ""
            ) as TechnicalSampleResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TechnicalSampleResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TechnicalSampleResults", ""
            ) as TechnicalSampleResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tissues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tissuesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TissueResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TissueResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TissueResults", ""
            ) as TissueResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TissueResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TissueResults", ""
            ) as TissueResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to treatments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async treatmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TreatmentResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TreatmentResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TreatmentResults", ""
            ) as TreatmentResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TreatmentResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TreatmentResults", ""
            ) as TreatmentResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to users
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserResults", ""
            ) as UserResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserResults", ""
            ) as UserResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wholeOrganisms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wholeOrganismsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WholeOrganismResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WholeOrganismResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WholeOrganismResults", ""
            ) as WholeOrganismResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WholeOrganismResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WholeOrganismResults", ""
            ) as WholeOrganismResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to workflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WorkflowResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkflowResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkflowResults", ""
            ) as WorkflowResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            throw new ApiException<any>(response.httpStatusCode, "Bad request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: NoResultsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoResultsResponse", ""
            ) as NoResultsResponse;
            throw new ApiException<NoResultsResponse>(response.httpStatusCode, "No results found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkflowResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkflowResults", ""
            ) as WorkflowResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
