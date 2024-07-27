# igvf_client.IgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_keys**](IgvfApi.md#access_keys) | **GET** /access-keys/@@listing | List items in the AccessKey collection.
[**alignment_files**](IgvfApi.md#alignment_files) | **GET** /alignment-files/@@listing | List items in the AlignmentFile collection.
[**analysis_sets**](IgvfApi.md#analysis_sets) | **GET** /analysis-sets/@@listing | List items in the AnalysisSet collection.
[**analysis_step_versions**](IgvfApi.md#analysis_step_versions) | **GET** /analysis-step-versions/@@listing | List items in the AnalysisStepVersion collection.
[**analysis_steps**](IgvfApi.md#analysis_steps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.
[**assay_terms**](IgvfApi.md#assay_terms) | **GET** /assay-terms/@@listing | List items in the AssayTerm collection.
[**auxiliary_sets**](IgvfApi.md#auxiliary_sets) | **GET** /auxiliary-sets/@@listing | List items in the AuxiliarySet collection.
[**awards**](IgvfApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.
[**batch_download**](IgvfApi.md#batch_download) | **GET** /batch-download | List files to download based on search query. All results are returned.
[**biomarkers**](IgvfApi.md#biomarkers) | **GET** /biomarkers/@@listing | List items in the Biomarker collection.
[**configuration_files**](IgvfApi.md#configuration_files) | **GET** /configuration-files/@@listing | List items in the ConfigurationFile collection.
[**construct_library_sets**](IgvfApi.md#construct_library_sets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.
[**crispr_modifications**](IgvfApi.md#crispr_modifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.
[**curated_sets**](IgvfApi.md#curated_sets) | **GET** /curated-sets/@@listing | List items in the CuratedSet collection.
[**degron_modifications**](IgvfApi.md#degron_modifications) | **GET** /degron-modifications/@@listing | List items in the DegronModification collection.
[**documents**](IgvfApi.md#documents) | **GET** /documents/@@listing | List items in the Document collection.
[**download**](IgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
[**genes**](IgvfApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.
[**genome_browser_annotation_files**](IgvfApi.md#genome_browser_annotation_files) | **GET** /genome-browser-annotation-files/@@listing | List items in the GenomeBrowserAnnotationFile collection.
[**get_by_id**](IgvfApi.md#get_by_id) | **GET** /{resource_id} | Get item information
[**human_donors**](IgvfApi.md#human_donors) | **GET** /human-donors/@@listing | List items in the HumanDonor collection.
[**image_files**](IgvfApi.md#image_files) | **GET** /image-files/@@listing | List items in the ImageFile collection.
[**images**](IgvfApi.md#images) | **GET** /images/@@listing | List items in the Image collection.
[**in_vitro_systems**](IgvfApi.md#in_vitro_systems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.
[**institutional_certificates**](IgvfApi.md#institutional_certificates) | **GET** /institutional-certificates/@@listing | List items in the InstitutionalCertificate collection.
[**labs**](IgvfApi.md#labs) | **GET** /labs/@@listing | List items in the Lab collection.
[**matrix_files**](IgvfApi.md#matrix_files) | **GET** /matrix-files/@@listing | List items in the MatrixFile collection.
[**measurement_sets**](IgvfApi.md#measurement_sets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.
[**model_files**](IgvfApi.md#model_files) | **GET** /model-files/@@listing | List items in the ModelFile collection.
[**model_sets**](IgvfApi.md#model_sets) | **GET** /model-sets/@@listing | List items in the ModelSet collection.
[**multiplexed_samples**](IgvfApi.md#multiplexed_samples) | **GET** /multiplexed-samples/@@listing | List items in the MultiplexedSample collection.
[**open_reading_frames**](IgvfApi.md#open_reading_frames) | **GET** /open-reading-frames/@@listing | List items in the OpenReadingFrame collection.
[**pages**](IgvfApi.md#pages) | **GET** /pages/@@listing | List items in the Page collection.
[**phenotype_terms**](IgvfApi.md#phenotype_terms) | **GET** /phenotype-terms/@@listing | List items in the PhenotypeTerm collection.
[**phenotypic_features**](IgvfApi.md#phenotypic_features) | **GET** /phenotypic-features/@@listing | List items in the PhenotypicFeature collection.
[**platform_terms**](IgvfApi.md#platform_terms) | **GET** /platform-terms/@@listing | List items in the PlatformTerm collection.
[**prediction_sets**](IgvfApi.md#prediction_sets) | **GET** /prediction-sets/@@listing | List items in the PredictionSet collection.
[**primary_cells**](IgvfApi.md#primary_cells) | **GET** /primary-cells/@@listing | List items in the PrimaryCell collection.
[**publications**](IgvfApi.md#publications) | **GET** /publications/@@listing | List items in the Publication collection.
[**reference_files**](IgvfApi.md#reference_files) | **GET** /reference-files/@@listing | List items in the ReferenceFile collection.
[**report**](IgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
[**rodent_donors**](IgvfApi.md#rodent_donors) | **GET** /rodent-donors/@@listing | List items in the RodentDonor collection.
[**sample_terms**](IgvfApi.md#sample_terms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.
[**schema_for_item_type**](IgvfApi.md#schema_for_item_type) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
[**schemas**](IgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
[**search**](IgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project
[**sequence_files**](IgvfApi.md#sequence_files) | **GET** /sequence-files/@@listing | List items in the SequenceFile collection.
[**signal_files**](IgvfApi.md#signal_files) | **GET** /signal-files/@@listing | List items in the SignalFile collection.
[**software**](IgvfApi.md#software) | **GET** /software/@@listing | List items in the Software collection.
[**software_versions**](IgvfApi.md#software_versions) | **GET** /software-versions/@@listing | List items in the SoftwareVersion collection.
[**sources**](IgvfApi.md#sources) | **GET** /sources/@@listing | List items in the Source collection.
[**tabular_files**](IgvfApi.md#tabular_files) | **GET** /tabular-files/@@listing | List items in the TabularFile collection.
[**technical_samples**](IgvfApi.md#technical_samples) | **GET** /technical-samples/@@listing | List items in the TechnicalSample collection.
[**tissues**](IgvfApi.md#tissues) | **GET** /tissues/@@listing | List items in the Tissue collection.
[**treatments**](IgvfApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.
[**users**](IgvfApi.md#users) | **GET** /users/@@listing | List items in the User collection.
[**whole_organisms**](IgvfApi.md#whole_organisms) | **GET** /whole-organisms/@@listing | List items in the WholeOrganism collection.
[**workflows**](IgvfApi.md#workflows) | **GET** /workflows/@@listing | List items in the Workflow collection.


# **access_keys**
> AccessKeyResults access_keys(query=query, limit=limit, sort=sort, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, status=status, user=user, access_key_id=access_key_id, secret_access_key_hash=secret_access_key_hash, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the AccessKey collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.access_keys(**parameters) # List items in the AccessKey collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **user** | [**List[str]**](List[str].md)| Filter by user | [optional] 
 **access_key_id** | [**List[str]**](List[str].md)| Filter by access_key_id | [optional] 
 **secret_access_key_hash** | [**List[str]**](List[str].md)| Filter by secret_access_key_hash | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AccessKeyResults**](AccessKeyResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alignment_files**
> AlignmentFileResults alignment_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, redacted=redacted, filtered=filtered, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the AlignmentFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.alignment_files(**parameters) # List items in the AlignmentFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | [**List[bool]**](List[bool].md)| Filter by controlled_access | [optional] 
 **anvil_url** | [**List[str]**](List[str].md)| Filter by anvil_url | [optional] 
 **transcriptome_annotation** | [**List[str]**](List[str].md)| Filter by transcriptome_annotation | [optional] 
 **assembly** | [**List[str]**](List[str].md)| Filter by assembly | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **redacted** | [**List[bool]**](List[bool].md)| Filter by redacted | [optional] 
 **filtered** | [**List[bool]**](List[bool].md)| Filter by filtered | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **content_summary** | [**List[str]**](List[str].md)| Filter by content_summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AlignmentFileResults**](AlignmentFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_sets**
> AnalysisSetResults analysis_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_titles=assay_titles, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, input_file_sets_id=input_file_sets_id, input_file_sets_accession=input_file_sets_accession, input_file_sets_aliases=input_file_sets_aliases, input_file_sets_file_set_type=input_file_sets_file_set_type, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the AnalysisSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.analysis_sets(**parameters) # List items in the AnalysisSet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assay_titles** | [**List[str]**](List[str].md)| Filter by assay_titles | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_contact_pi_id** | [**List[str]**](List[str].md)| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | [**List[str]**](List[str].md)| Filter by award.contact_pi.title | [optional] 
 **award_title** | [**List[str]**](List[str].md)| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **input_file_sets_id** | [**List[str]**](List[str].md)| Filter by input_file_sets.@id | [optional] 
 **input_file_sets_accession** | [**List[str]**](List[str].md)| Filter by input_file_sets.accession | [optional] 
 **input_file_sets_aliases** | [**List[str]**](List[str].md)| Filter by input_file_sets.aliases | [optional] 
 **input_file_sets_file_set_type** | [**List[str]**](List[str].md)| Filter by input_file_sets.file_set_type | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AnalysisSetResults**](AnalysisSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_step_versions**
> AnalysisStepVersionResults analysis_step_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, id=id, summary=summary, analysis_step_id=analysis_step_id, analysis_step_name=analysis_step_name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, software_versions_id=software_versions_id, software_versions_name=software_versions_name, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the AnalysisStepVersion collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.analysis_step_versions(**parameters) # List items in the AnalysisStepVersion collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **analysis_step_id** | [**List[str]**](List[str].md)| Filter by analysis_step.@id | [optional] 
 **analysis_step_name** | [**List[str]**](List[str].md)| Filter by analysis_step.name | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **software_versions_id** | [**List[str]**](List[str].md)| Filter by software_versions.@id | [optional] 
 **software_versions_name** | [**List[str]**](List[str].md)| Filter by software_versions.name | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AnalysisStepVersionResults**](AnalysisStepVersionResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_steps**
> AnalysisStepResults analysis_steps(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_types=analysis_step_types, step_label=step_label, title=title, input_content_types=input_content_types, output_content_types=output_content_types, id=id, summary=summary, name=name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, parents_id=parents_id, parents_title=parents_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, workflow_id=workflow_id, workflow_accession=workflow_accession, additional_field_filters=additional_field_filters)

List items in the AnalysisStep collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.analysis_steps(**parameters) # List items in the AnalysisStep collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_types** | [**List[str]**](List[str].md)| Filter by analysis_step_types | [optional] 
 **step_label** | [**List[str]**](List[str].md)| Filter by step_label | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **input_content_types** | [**List[str]**](List[str].md)| Filter by input_content_types | [optional] 
 **output_content_types** | [**List[str]**](List[str].md)| Filter by output_content_types | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **parents_id** | [**List[str]**](List[str].md)| Filter by parents.@id | [optional] 
 **parents_title** | [**List[str]**](List[str].md)| Filter by parents.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **workflow_id** | [**List[str]**](List[str].md)| Filter by workflow.@id | [optional] 
 **workflow_accession** | [**List[str]**](List[str].md)| Filter by workflow.accession | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AnalysisStepResults**](AnalysisStepResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assay_terms**
> AssayTermResults assay_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, preferred_assay_titles=preferred_assay_titles, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, assay_slims=assay_slims, category_slims=category_slims, objective_slims=objective_slims, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the AssayTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.assay_terms(**parameters) # List items in the AssayTerm collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **term_id** | [**List[str]**](List[str].md)| Filter by term_id | [optional] 
 **term_name** | [**List[str]**](List[str].md)| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **preferred_assay_titles** | [**List[str]**](List[str].md)| Filter by preferred_assay_titles | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | [**List[str]**](List[str].md)| Filter by ontology | [optional] 
 **assay_slims** | [**List[str]**](List[str].md)| Filter by assay_slims | [optional] 
 **category_slims** | [**List[str]**](List[str].md)| Filter by category_slims | [optional] 
 **objective_slims** | [**List[str]**](List[str].md)| Filter by objective_slims | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AssayTermResults**](AssayTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auxiliary_sets**
> AuxiliarySetResults auxiliary_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, library_construction_platform=library_construction_platform, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, measurement_sets_id=measurement_sets_id, measurement_sets_accession=measurement_sets_accession, measurement_sets_aliases=measurement_sets_aliases, measurement_sets_preferred_assay_title=measurement_sets_preferred_assay_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the AuxiliarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.auxiliary_sets(**parameters) # List items in the AuxiliarySet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **library_construction_platform** | [**List[str]**](List[str].md)| Filter by library_construction_platform | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_contact_pi_id** | [**List[str]**](List[str].md)| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | [**List[str]**](List[str].md)| Filter by award.contact_pi.title | [optional] 
 **award_title** | [**List[str]**](List[str].md)| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **measurement_sets_id** | [**List[str]**](List[str].md)| Filter by measurement_sets.@id | [optional] 
 **measurement_sets_accession** | [**List[str]**](List[str].md)| Filter by measurement_sets.accession | [optional] 
 **measurement_sets_aliases** | [**List[str]**](List[str].md)| Filter by measurement_sets.aliases | [optional] 
 **measurement_sets_preferred_assay_title** | [**List[str]**](List[str].md)| Filter by measurement_sets.preferred_assay_title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AuxiliarySetResults**](AuxiliarySetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **awards**
> AwardResults awards(query=query, limit=limit, sort=sort, status=status, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, name=name, start_date=start_date, end_date=end_date, pis=pis, contact_pi=contact_pi, project=project, viewing_group=viewing_group, component=component, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Award collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.awards(**parameters) # List items in the Award collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **start_date** | [**List[str]**](List[str].md)| Filter by start_date | [optional] 
 **end_date** | [**List[str]**](List[str].md)| Filter by end_date | [optional] 
 **pis** | [**List[str]**](List[str].md)| Filter by pis | [optional] 
 **contact_pi** | [**List[str]**](List[str].md)| Filter by contact_pi | [optional] 
 **project** | [**List[str]**](List[str].md)| Filter by project | [optional] 
 **viewing_group** | [**List[str]**](List[str].md)| Filter by viewing_group | [optional] 
 **component** | [**List[str]**](List[str].md)| Filter by component | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**AwardResults**](AwardResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_download**
> str batch_download(type, query=query, field_filters=field_filters)

List files to download based on search query. All results are returned.

Generates TSV of files contained in FileSets in search results.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.batch_download(**parameters) # List files to download based on search query. All results are returned. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **biomarkers**
> BiomarkerResults biomarkers(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, classification=classification, quantification=quantification, synonyms=synonyms, gene=gene, id=id, summary=summary, name_quantification=name_quantification, biomarker_for=biomarker_for, award_id=award_id, award_component=award_component, award_name=award_name, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Biomarker collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.biomarkers(**parameters) # List items in the Biomarker collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **classification** | [**List[str]**](List[str].md)| Filter by classification | [optional] 
 **quantification** | [**List[str]**](List[str].md)| Filter by quantification | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **gene** | [**List[str]**](List[str].md)| Filter by gene | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name_quantification** | [**List[str]**](List[str].md)| Filter by name_quantification | [optional] 
 **biomarker_for** | [**List[str]**](List[str].md)| Filter by biomarker_for | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_name** | [**List[str]**](List[str].md)| Filter by award.name | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**BiomarkerResults**](BiomarkerResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_files**
> ConfigurationFileResults configuration_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, seqspec_of=seqspec_of, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the ConfigurationFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.configuration_files(**parameters) # List items in the ConfigurationFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **seqspec_of** | [**List[str]**](List[str].md)| Filter by seqspec_of | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ConfigurationFileResults**](ConfigurationFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **construct_library_sets**
> ConstructLibrarySetResults construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, exon=exon, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples_id=applied_to_samples_id, applied_to_samples_accession=applied_to_samples_accession, applied_to_samples_aliases=applied_to_samples_aliases, applied_to_samples_disease_terms_id=applied_to_samples_disease_terms_id, applied_to_samples_disease_terms_term_name=applied_to_samples_disease_terms_term_name, applied_to_samples_sample_terms_id=applied_to_samples_sample_terms_id, applied_to_samples_sample_terms_term_name=applied_to_samples_sample_terms_term_name, applied_to_samples_status=applied_to_samples_status, applied_to_samples_summary=applied_to_samples_summary, associated_phenotypes_id=associated_phenotypes_id, associated_phenotypes_term_id=associated_phenotypes_term_id, associated_phenotypes_term_name=associated_phenotypes_term_name, award_id=award_id, award_component=award_component, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_file_format=files_file_format, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, large_scale_gene_list_id=large_scale_gene_list_id, large_scale_gene_list_accession=large_scale_gene_list_accession, large_scale_gene_list_aliases=large_scale_gene_list_aliases, large_scale_loci_list_id=large_scale_loci_list_id, large_scale_loci_list_accession=large_scale_loci_list_accession, large_scale_loci_list_aliases=large_scale_loci_list_aliases, orf_list_id=orf_list_id, orf_list_aliases=orf_list_aliases, orf_list_gene=orf_list_gene, orf_list_orf_id=orf_list_orf_id, small_scale_gene_list_id=small_scale_gene_list_id, small_scale_gene_list_geneid=small_scale_gene_list_geneid, small_scale_gene_list_name=small_scale_gene_list_name, small_scale_gene_list_symbol=small_scale_gene_list_symbol, small_scale_gene_list_synonyms=small_scale_gene_list_synonyms, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the ConstructLibrarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.construct_library_sets(**parameters) # List items in the ConstructLibrarySet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **scope** | [**List[str]**](List[str].md)| Filter by scope | [optional] 
 **selection_criteria** | [**List[str]**](List[str].md)| Filter by selection_criteria | [optional] 
 **integrated_content_files** | [**List[str]**](List[str].md)| Filter by integrated_content_files | [optional] 
 **exon** | [**List[str]**](List[str].md)| Filter by exon | [optional] 
 **guide_type** | [**List[str]**](List[str].md)| Filter by guide_type | [optional] 
 **tiling_modality** | [**List[str]**](List[str].md)| Filter by tiling_modality | [optional] 
 **average_guide_coverage** | [**List[float]**](List[float].md)| Filter by average_guide_coverage | [optional] 
 **lower_bound_guide_coverage** | [**List[int]**](List[int].md)| Filter by lower_bound_guide_coverage | [optional] 
 **upper_bound_guide_coverage** | [**List[int]**](List[int].md)| Filter by upper_bound_guide_coverage | [optional] 
 **average_insert_size** | [**List[float]**](List[float].md)| Filter by average_insert_size | [optional] 
 **lower_bound_insert_size** | [**List[int]**](List[int].md)| Filter by lower_bound_insert_size | [optional] 
 **upper_bound_insert_size** | [**List[int]**](List[int].md)| Filter by upper_bound_insert_size | [optional] 
 **targeton** | [**List[str]**](List[str].md)| Filter by targeton | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **applied_to_samples_id** | [**List[str]**](List[str].md)| Filter by applied_to_samples.@id | [optional] 
 **applied_to_samples_accession** | [**List[str]**](List[str].md)| Filter by applied_to_samples.accession | [optional] 
 **applied_to_samples_aliases** | [**List[str]**](List[str].md)| Filter by applied_to_samples.aliases | [optional] 
 **applied_to_samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by applied_to_samples.disease_terms.@id | [optional] 
 **applied_to_samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by applied_to_samples.disease_terms.term_name | [optional] 
 **applied_to_samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by applied_to_samples.sample_terms.@id | [optional] 
 **applied_to_samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by applied_to_samples.sample_terms.term_name | [optional] 
 **applied_to_samples_status** | [**List[str]**](List[str].md)| Filter by applied_to_samples.status | [optional] 
 **applied_to_samples_summary** | [**List[str]**](List[str].md)| Filter by applied_to_samples.summary | [optional] 
 **associated_phenotypes_id** | [**List[str]**](List[str].md)| Filter by associated_phenotypes.@id | [optional] 
 **associated_phenotypes_term_id** | [**List[str]**](List[str].md)| Filter by associated_phenotypes.term_id | [optional] 
 **associated_phenotypes_term_name** | [**List[str]**](List[str].md)| Filter by associated_phenotypes.term_name | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **large_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.@id | [optional] 
 **large_scale_gene_list_accession** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.accession | [optional] 
 **large_scale_gene_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.aliases | [optional] 
 **large_scale_loci_list_id** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.@id | [optional] 
 **large_scale_loci_list_accession** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.accession | [optional] 
 **large_scale_loci_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.aliases | [optional] 
 **orf_list_id** | [**List[str]**](List[str].md)| Filter by orf_list.@id | [optional] 
 **orf_list_aliases** | [**List[str]**](List[str].md)| Filter by orf_list.aliases | [optional] 
 **orf_list_gene** | [**List[str]**](List[str].md)| Filter by orf_list.gene | [optional] 
 **orf_list_orf_id** | [**List[str]**](List[str].md)| Filter by orf_list.orf_id | [optional] 
 **small_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.@id | [optional] 
 **small_scale_gene_list_geneid** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.geneid | [optional] 
 **small_scale_gene_list_name** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.name | [optional] 
 **small_scale_gene_list_symbol** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.symbol | [optional] 
 **small_scale_gene_list_synonyms** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.synonyms | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ConstructLibrarySetResults**](ConstructLibrarySetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crispr_modifications**
> CrisprModificationResults crispr_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, cas=cas, fused_domain=fused_domain, tagged_protein=tagged_protein, cas_species=cas_species, id=id, summary=summary, biosamples_modified=biosamples_modified, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the CrisprModification collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.crispr_modifications(**parameters) # List items in the CrisprModification collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **activated** | [**List[bool]**](List[bool].md)| Filter by activated | [optional] 
 **activating_agent_term_id** | [**List[str]**](List[str].md)| Filter by activating_agent_term_id | [optional] 
 **activating_agent_term_name** | [**List[str]**](List[str].md)| Filter by activating_agent_term_name | [optional] 
 **modality** | [**List[str]**](List[str].md)| Filter by modality | [optional] 
 **cas** | [**List[str]**](List[str].md)| Filter by cas | [optional] 
 **fused_domain** | [**List[str]**](List[str].md)| Filter by fused_domain | [optional] 
 **tagged_protein** | [**List[str]**](List[str].md)| Filter by tagged_protein | [optional] 
 **cas_species** | [**List[str]**](List[str].md)| Filter by cas_species | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **biosamples_modified** | [**List[str]**](List[str].md)| Filter by biosamples_modified | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**CrisprModificationResults**](CrisprModificationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **curated_sets**
> CuratedSetResults curated_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assemblies=assemblies, transcriptome_annotations=transcriptome_annotations, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the CuratedSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.curated_sets(**parameters) # List items in the CuratedSet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assemblies** | [**List[str]**](List[str].md)| Filter by assemblies | [optional] 
 **transcriptome_annotations** | [**List[str]**](List[str].md)| Filter by transcriptome_annotations | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_contact_pi_id** | [**List[str]**](List[str].md)| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | [**List[str]**](List[str].md)| Filter by award.contact_pi.title | [optional] 
 **award_title** | [**List[str]**](List[str].md)| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**CuratedSetResults**](CuratedSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **degron_modifications**
> DegronModificationResults degron_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, degron_system=degron_system, tagged_proteins=tagged_proteins, id=id, summary=summary, biosamples_modified=biosamples_modified, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the DegronModification collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.degron_modifications(**parameters) # List items in the DegronModification collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **activated** | [**List[bool]**](List[bool].md)| Filter by activated | [optional] 
 **activating_agent_term_id** | [**List[str]**](List[str].md)| Filter by activating_agent_term_id | [optional] 
 **activating_agent_term_name** | [**List[str]**](List[str].md)| Filter by activating_agent_term_name | [optional] 
 **modality** | [**List[str]**](List[str].md)| Filter by modality | [optional] 
 **degron_system** | [**List[str]**](List[str].md)| Filter by degron_system | [optional] 
 **tagged_proteins** | [**List[str]**](List[str].md)| Filter by tagged_proteins | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **biosamples_modified** | [**List[str]**](List[str].md)| Filter by biosamples_modified | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**DegronModificationResults**](DegronModificationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents**
> DocumentResults documents(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, document_type=document_type, characterization_method=characterization_method, urls=urls, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Document collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.documents(**parameters) # List items in the Document collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **document_type** | [**List[str]**](List[str].md)| Filter by document_type | [optional] 
 **characterization_method** | [**List[str]**](List[str].md)| Filter by characterization_method | [optional] 
 **urls** | [**List[str]**](List[str].md)| Filter by urls | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**DocumentResults**](DocumentResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download**
> bytearray download(file_id)

Download file.

Returns underlying file associated with file metadata

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.download(**parameters) # Download file. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The unique identifier for the file to download, i.e. @id (&#x60;/tabular-files/IGVFFI8092FZKL/&#x60;), accession (&#x60;IGVFFI8092FZKL&#x60;), or UUID (&#x60;fdbdc159-e5b9-40a8-b788-3f72c9886b03&#x60;). | 

### Return type

**bytearray**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Item not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **genes**
> GeneResults genes(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, transcriptome_annotation=transcriptome_annotation, taxa=taxa, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, geneid=geneid, symbol=symbol, name=name, synonyms=synonyms, dbxrefs=dbxrefs, locations=locations, version_number=version_number, id=id, summary=summary, title=title, geneid_with_version=geneid_with_version, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Gene collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.genes(**parameters) # List items in the Gene collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **transcriptome_annotation** | [**List[str]**](List[str].md)| Filter by transcriptome_annotation | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **geneid** | [**List[str]**](List[str].md)| Filter by geneid | [optional] 
 **symbol** | [**List[str]**](List[str].md)| Filter by symbol | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **locations** | [**List[GeneLocation]**](List[GeneLocation].md)| Filter by locations | [optional] 
 **version_number** | [**List[str]**](List[str].md)| Filter by version_number | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **geneid_with_version** | [**List[str]**](List[str].md)| Filter by geneid_with_version | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**GeneResults**](GeneResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **genome_browser_annotation_files**
> GenomeBrowserAnnotationFileResults genome_browser_annotation_files(query=query, limit=limit, sort=sort, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the GenomeBrowserAnnotationFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.genome_browser_annotation_files(**parameters) # List items in the GenomeBrowserAnnotationFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **assembly** | [**List[str]**](List[str].md)| Filter by assembly | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **file_format_type** | [**List[str]**](List[str].md)| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | [**List[str]**](List[str].md)| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**GenomeBrowserAnnotationFileResults**](GenomeBrowserAnnotationFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_by_id**
> Item get_by_id(resource_id)

Get item information

Retrieve detailed information about a specific item using its @id or uuid.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.get_by_id(**parameters) # Get item information 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;). | 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **human_donors**
> HumanDonorResults human_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, virtual=virtual, ethnicities=ethnicities, human_donor_identifiers=human_donor_identifiers, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, phenotypic_features_id=phenotypic_features_id, phenotypic_features_feature_id=phenotypic_features_feature_id, phenotypic_features_feature_term_id=phenotypic_features_feature_term_id, phenotypic_features_feature_term_name=phenotypic_features_feature_term_name, phenotypic_features_observation_date=phenotypic_features_observation_date, phenotypic_features_quantity_units=phenotypic_features_quantity_units, related_donors_donor_id=related_donors_donor_id, related_donors_donor_accession=related_donors_donor_accession, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the HumanDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.human_donors(**parameters) # List items in the HumanDonor collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **sex** | [**List[str]**](List[str].md)| Filter by sex | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **ethnicities** | [**List[str]**](List[str].md)| Filter by ethnicities | [optional] 
 **human_donor_identifiers** | [**List[str]**](List[str].md)| Filter by human_donor_identifiers | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **phenotypic_features_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.@id | [optional] 
 **phenotypic_features_feature_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.@id | [optional] 
 **phenotypic_features_feature_term_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_id | [optional] 
 **phenotypic_features_feature_term_name** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_name | [optional] 
 **phenotypic_features_observation_date** | [**List[str]**](List[str].md)| Filter by phenotypic_features.observation_date | [optional] 
 **phenotypic_features_quantity_units** | [**List[str]**](List[str].md)| Filter by phenotypic_features.quantity_units | [optional] 
 **related_donors_donor_id** | [**List[str]**](List[str].md)| Filter by related_donors.donor.@id | [optional] 
 **related_donors_donor_accession** | [**List[str]**](List[str].md)| Filter by related_donors.donor.accession | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**HumanDonorResults**](HumanDonorResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_files**
> ImageFileResults image_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the ImageFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.image_files(**parameters) # List items in the ImageFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ImageFileResults**](ImageFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images**
> ImageResults images(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, caption=caption, id=id, summary=summary, thumb_nail=thumb_nail, download_url=download_url, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Image collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.images(**parameters) # List items in the Image collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **caption** | [**List[str]**](List[str].md)| Filter by caption | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **thumb_nail** | [**List[str]**](List[str].md)| Filter by thumb_nail | [optional] 
 **download_url** | [**List[str]**](List[str].md)| Filter by download_url | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ImageResults**](ImageResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **in_vitro_systems**
> InVitroSystemResults in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to, award_id=award_id, award_component=award_component, cell_fate_change_treatments_id=cell_fate_change_treatments_id, cell_fate_change_treatments_purpose=cell_fate_change_treatments_purpose, cell_fate_change_treatments_status=cell_fate_change_treatments_status, cell_fate_change_treatments_summary=cell_fate_change_treatments_summary, cell_fate_change_treatments_treatment_type=cell_fate_change_treatments_treatment_type, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, originated_from_id=originated_from_id, originated_from_accession=originated_from_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type, additional_field_filters=additional_field_filters)

List items in the InVitroSystem collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.in_vitro_systems(**parameters) # List items in the InVitroSystem collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **lower_bound_age** | [**List[float]**](List[float].md)| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | [**List[float]**](List[float].md)| Filter by upper_bound_age | [optional] 
 **age_units** | [**List[str]**](List[str].md)| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | [**List[str]**](List[str].md)| Filter by part_of | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | [**List[bool]**](List[bool].md)| Filter by embryonic | [optional] 
 **cellular_sub_pool** | [**List[str]**](List[str].md)| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | [**List[float]**](List[float].md)| Filter by starting_amount | [optional] 
 **starting_amount_units** | [**List[str]**](List[str].md)| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | [**List[str]**](List[str].md)| Filter by date_obtained | [optional] 
 **sorted_from_detail** | [**List[str]**](List[str].md)| Filter by sorted_from_detail | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | [**List[float]**](List[float].md)| Filter by moi | [optional] 
 **nucleic_acid_delivery** | [**List[str]**](List[str].md)| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | [**List[float]**](List[float].md)| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | [**List[str]**](List[str].md)| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **time_post_change** | [**List[float]**](List[float].md)| Filter by time_post_change | [optional] 
 **time_post_change_units** | [**List[str]**](List[str].md)| Filter by time_post_change_units | [optional] 
 **cell_fate_change_protocol** | [**List[str]**](List[str].md)| Filter by cell_fate_change_protocol | [optional] 
 **demultiplexed_from** | [**List[str]**](List[str].md)| Filter by demultiplexed_from | [optional] 
 **passage_number** | [**List[int]**](List[int].md)| Filter by passage_number | [optional] 
 **targeted_sample_term** | [**List[str]**](List[str].md)| Filter by targeted_sample_term | [optional] 
 **growth_medium** | [**List[str]**](List[str].md)| Filter by growth_medium | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | [**List[str]**](List[str].md)| Filter by sex | [optional] 
 **age** | [**List[str]**](List[str].md)| Filter by age | [optional] 
 **upper_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **demultiplexed_to** | [**List[str]**](List[str].md)| Filter by demultiplexed_to | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **cell_fate_change_treatments_id** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.@id | [optional] 
 **cell_fate_change_treatments_purpose** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.purpose | [optional] 
 **cell_fate_change_treatments_status** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.status | [optional] 
 **cell_fate_change_treatments_summary** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.summary | [optional] 
 **cell_fate_change_treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.treatment_type | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **originated_from_id** | [**List[str]**](List[str].md)| Filter by originated_from.@id | [optional] 
 **originated_from_accession** | [**List[str]**](List[str].md)| Filter by originated_from.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | [**List[str]**](List[str].md)| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | [**List[str]**](List[str].md)| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**InVitroSystemResults**](InVitroSystemResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **institutional_certificates**
> InstitutionalCertificateResults institutional_certificates(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, certificate_identifier=certificate_identifier, controlled_access=controlled_access, data_use_limitation=data_use_limitation, data_use_limitation_modifiers=data_use_limitation_modifiers, samples=samples, urls=urls, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the InstitutionalCertificate collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.institutional_certificates(**parameters) # List items in the InstitutionalCertificate collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **certificate_identifier** | [**List[str]**](List[str].md)| Filter by certificate_identifier | [optional] 
 **controlled_access** | [**List[bool]**](List[bool].md)| Filter by controlled_access | [optional] 
 **data_use_limitation** | [**List[str]**](List[str].md)| Filter by data_use_limitation | [optional] 
 **data_use_limitation_modifiers** | [**List[str]**](List[str].md)| Filter by data_use_limitation_modifiers | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **urls** | [**List[str]**](List[str].md)| Filter by urls | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**InstitutionalCertificateResults**](InstitutionalCertificateResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs**
> LabResults labs(query=query, limit=limit, sort=sort, status=status, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, pi=pi, institute_label=institute_label, id=id, summary=summary, title=title, awards_id=awards_id, awards_component=awards_component, awards_name=awards_name, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Lab collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.labs(**parameters) # List items in the Lab collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **pi** | [**List[str]**](List[str].md)| Filter by pi | [optional] 
 **institute_label** | [**List[str]**](List[str].md)| Filter by institute_label | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **awards_id** | [**List[str]**](List[str].md)| Filter by awards.@id | [optional] 
 **awards_component** | [**List[str]**](List[str].md)| Filter by awards.component | [optional] 
 **awards_name** | [**List[str]**](List[str].md)| Filter by awards.name | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**LabResults**](LabResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **matrix_files**
> MatrixFileResults matrix_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, dimension1=dimension1, dimension2=dimension2, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the MatrixFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.matrix_files(**parameters) # List items in the MatrixFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **dimension1** | [**List[str]**](List[str].md)| Filter by dimension1 | [optional] 
 **dimension2** | [**List[str]**](List[str].md)| Filter by dimension2 | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **content_summary** | [**List[str]**](List[str].md)| Filter by content_summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**MatrixFileResults**](MatrixFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **measurement_sets**
> MeasurementSetResults measurement_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, protocols=protocols, preferred_assay_title=preferred_assay_title, multiome_size=multiome_size, sequencing_library_types=sequencing_library_types, external_image_url=external_image_url, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_term_id=assay_term_id, assay_term_term_name=assay_term_term_name, auxiliary_sets_id=auxiliary_sets_id, auxiliary_sets_accession=auxiliary_sets_accession, auxiliary_sets_aliases=auxiliary_sets_aliases, auxiliary_sets_file_set_type=auxiliary_sets_file_set_type, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_file_sets_id=control_file_sets_id, control_file_sets_accession=control_file_sets_accession, control_file_sets_aliases=control_file_sets_aliases, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform_id=files_sequencing_platform_id, files_sequencing_platform_term_name=files_sequencing_platform_term_name, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, library_construction_platform_id=library_construction_platform_id, library_construction_platform_term_name=library_construction_platform_term_name, related_multiome_datasets_id=related_multiome_datasets_id, related_multiome_datasets_accession=related_multiome_datasets_accession, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments_id=samples_cell_fate_change_treatments_id, samples_cell_fate_change_treatments_purpose=samples_cell_fate_change_treatments_purpose, samples_cell_fate_change_treatments_summary=samples_cell_fate_change_treatments_summary, samples_cell_fate_change_treatments_treatment_type=samples_cell_fate_change_treatments_treatment_type, samples_classifications=samples_classifications, samples_construct_library_sets_id=samples_construct_library_sets_id, samples_construct_library_sets_accession=samples_construct_library_sets_accession, samples_construct_library_sets_file_set_type=samples_construct_library_sets_file_set_type, samples_construct_library_sets_small_scale_gene_list_id=samples_construct_library_sets_small_scale_gene_list_id, samples_construct_library_sets_small_scale_gene_list_geneid=samples_construct_library_sets_small_scale_gene_list_geneid, samples_construct_library_sets_small_scale_gene_list_name=samples_construct_library_sets_small_scale_gene_list_name, samples_construct_library_sets_small_scale_gene_list_summary=samples_construct_library_sets_small_scale_gene_list_summary, samples_construct_library_sets_small_scale_gene_list_symbol=samples_construct_library_sets_small_scale_gene_list_symbol, samples_construct_library_sets_summary=samples_construct_library_sets_summary, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications_id=samples_modifications_id, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments_id=samples_treatments_id, samples_treatments_purpose=samples_treatments_purpose, samples_treatments_summary=samples_treatments_summary, samples_treatments_treatment_type=samples_treatments_treatment_type, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, targeted_genes_id=targeted_genes_id, targeted_genes_geneid=targeted_genes_geneid, targeted_genes_name=targeted_genes_name, targeted_genes_symbol=targeted_genes_symbol, targeted_genes_synonyms=targeted_genes_synonyms, additional_field_filters=additional_field_filters)

List items in the MeasurementSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.measurement_sets(**parameters) # List items in the MeasurementSet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **preferred_assay_title** | [**List[str]**](List[str].md)| Filter by preferred_assay_title | [optional] 
 **multiome_size** | [**List[int]**](List[int].md)| Filter by multiome_size | [optional] 
 **sequencing_library_types** | [**List[str]**](List[str].md)| Filter by sequencing_library_types | [optional] 
 **external_image_url** | [**List[str]**](List[str].md)| Filter by external_image_url | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assay_term_id** | [**List[str]**](List[str].md)| Filter by assay_term.@id | [optional] 
 **assay_term_term_name** | [**List[str]**](List[str].md)| Filter by assay_term.term_name | [optional] 
 **auxiliary_sets_id** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.@id | [optional] 
 **auxiliary_sets_accession** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.accession | [optional] 
 **auxiliary_sets_aliases** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.aliases | [optional] 
 **auxiliary_sets_file_set_type** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.file_set_type | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_contact_pi_id** | [**List[str]**](List[str].md)| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | [**List[str]**](List[str].md)| Filter by award.contact_pi.title | [optional] 
 **award_title** | [**List[str]**](List[str].md)| Filter by award.title | [optional] 
 **control_file_sets_id** | [**List[str]**](List[str].md)| Filter by control_file_sets.@id | [optional] 
 **control_file_sets_accession** | [**List[str]**](List[str].md)| Filter by control_file_sets.accession | [optional] 
 **control_file_sets_aliases** | [**List[str]**](List[str].md)| Filter by control_file_sets.aliases | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform_id** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform.@id | [optional] 
 **files_sequencing_platform_term_name** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform.term_name | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **library_construction_platform_id** | [**List[str]**](List[str].md)| Filter by library_construction_platform.@id | [optional] 
 **library_construction_platform_term_name** | [**List[str]**](List[str].md)| Filter by library_construction_platform.term_name | [optional] 
 **related_multiome_datasets_id** | [**List[str]**](List[str].md)| Filter by related_multiome_datasets.@id | [optional] 
 **related_multiome_datasets_accession** | [**List[str]**](List[str].md)| Filter by related_multiome_datasets.accession | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments_id** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.@id | [optional] 
 **samples_cell_fate_change_treatments_purpose** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.purpose | [optional] 
 **samples_cell_fate_change_treatments_summary** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.summary | [optional] 
 **samples_cell_fate_change_treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.treatment_type | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets_id** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.@id | [optional] 
 **samples_construct_library_sets_accession** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.accession | [optional] 
 **samples_construct_library_sets_file_set_type** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.file_set_type | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.@id | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_geneid** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.geneid | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_name** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.name | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_summary** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.summary | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_symbol** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.symbol | [optional] 
 **samples_construct_library_sets_summary** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.summary | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications_id** | [**List[str]**](List[str].md)| Filter by samples.modifications.@id | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments_id** | [**List[str]**](List[str].md)| Filter by samples.treatments.@id | [optional] 
 **samples_treatments_purpose** | [**List[str]**](List[str].md)| Filter by samples.treatments.purpose | [optional] 
 **samples_treatments_summary** | [**List[str]**](List[str].md)| Filter by samples.treatments.summary | [optional] 
 **samples_treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by samples.treatments.treatment_type | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **targeted_genes_id** | [**List[str]**](List[str].md)| Filter by targeted_genes.@id | [optional] 
 **targeted_genes_geneid** | [**List[str]**](List[str].md)| Filter by targeted_genes.geneid | [optional] 
 **targeted_genes_name** | [**List[str]**](List[str].md)| Filter by targeted_genes.name | [optional] 
 **targeted_genes_symbol** | [**List[str]**](List[str].md)| Filter by targeted_genes.symbol | [optional] 
 **targeted_genes_synonyms** | [**List[str]**](List[str].md)| Filter by targeted_genes.synonyms | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**MeasurementSetResults**](MeasurementSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_files**
> ModelFileResults model_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the ModelFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.model_files(**parameters) # List items in the ModelFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | [**List[bool]**](List[bool].md)| Filter by controlled_access | [optional] 
 **anvil_url** | [**List[str]**](List[str].md)| Filter by anvil_url | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ModelFileResults**](ModelFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_sets**
> ModelSetResults model_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, model_name=model_name, model_version=model_version, prediction_objects=prediction_objects, model_zoo_location=model_zoo_location, software_version=software_version, assessed_genes=assessed_genes, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, input_file_sets_id=input_file_sets_id, input_file_sets_accession=input_file_sets_accession, input_file_sets_aliases=input_file_sets_aliases, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the ModelSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.model_sets(**parameters) # List items in the ModelSet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **model_name** | [**List[str]**](List[str].md)| Filter by model_name | [optional] 
 **model_version** | [**List[str]**](List[str].md)| Filter by model_version | [optional] 
 **prediction_objects** | [**List[str]**](List[str].md)| Filter by prediction_objects | [optional] 
 **model_zoo_location** | [**List[str]**](List[str].md)| Filter by model_zoo_location | [optional] 
 **software_version** | [**List[str]**](List[str].md)| Filter by software_version | [optional] 
 **assessed_genes** | [**List[str]**](List[str].md)| Filter by assessed_genes | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_contact_pi_id** | [**List[str]**](List[str].md)| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | [**List[str]**](List[str].md)| Filter by award.contact_pi.title | [optional] 
 **award_title** | [**List[str]**](List[str].md)| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **input_file_sets_id** | [**List[str]**](List[str].md)| Filter by input_file_sets.@id | [optional] 
 **input_file_sets_accession** | [**List[str]**](List[str].md)| Filter by input_file_sets.accession | [optional] 
 **input_file_sets_aliases** | [**List[str]**](List[str].md)| Filter by input_file_sets.aliases | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ModelSetResults**](ModelSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiplexed_samples**
> MultiplexedSampleResults multiplexed_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, cellular_sub_pool=cellular_sub_pool, barcode_sample_map=barcode_sample_map, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, donors=donors, biomarkers=biomarkers, classifications=classifications, award_id=award_id, award_component=award_component, construct_library_sets_id=construct_library_sets_id, construct_library_sets_accession=construct_library_sets_accession, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, multiplexed_samples_id=multiplexed_samples_id, multiplexed_samples_accession=multiplexed_samples_accession, multiplexed_samples_construct_library_sets=multiplexed_samples_construct_library_sets, multiplexed_samples_disease_terms_id=multiplexed_samples_disease_terms_id, multiplexed_samples_disease_terms_term_name=multiplexed_samples_disease_terms_term_name, multiplexed_samples_donors_id=multiplexed_samples_donors_id, multiplexed_samples_donors_accession=multiplexed_samples_donors_accession, multiplexed_samples_sample_terms_id=multiplexed_samples_sample_terms_id, multiplexed_samples_sample_terms_term_name=multiplexed_samples_sample_terms_term_name, multiplexed_samples_status=multiplexed_samples_status, multiplexed_samples_summary=multiplexed_samples_summary, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type, additional_field_filters=additional_field_filters)

List items in the MultiplexedSample collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.multiplexed_samples(**parameters) # List items in the MultiplexedSample collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **starting_amount** | [**List[float]**](List[float].md)| Filter by starting_amount | [optional] 
 **starting_amount_units** | [**List[str]**](List[str].md)| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | [**List[str]**](List[str].md)| Filter by date_obtained | [optional] 
 **sorted_from_detail** | [**List[str]**](List[str].md)| Filter by sorted_from_detail | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **moi** | [**List[float]**](List[float].md)| Filter by moi | [optional] 
 **nucleic_acid_delivery** | [**List[str]**](List[str].md)| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | [**List[float]**](List[float].md)| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | [**List[str]**](List[str].md)| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **cellular_sub_pool** | [**List[str]**](List[str].md)| Filter by cellular_sub_pool | [optional] 
 **barcode_sample_map** | [**List[str]**](List[str].md)| Filter by barcode_sample_map | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **construct_library_sets_id** | [**List[str]**](List[str].md)| Filter by construct_library_sets.@id | [optional] 
 **construct_library_sets_accession** | [**List[str]**](List[str].md)| Filter by construct_library_sets.accession | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **multiplexed_samples_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.@id | [optional] 
 **multiplexed_samples_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.accession | [optional] 
 **multiplexed_samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.construct_library_sets | [optional] 
 **multiplexed_samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.disease_terms.@id | [optional] 
 **multiplexed_samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.disease_terms.term_name | [optional] 
 **multiplexed_samples_donors_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.donors.@id | [optional] 
 **multiplexed_samples_donors_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.donors.accession | [optional] 
 **multiplexed_samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.sample_terms.@id | [optional] 
 **multiplexed_samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.sample_terms.term_name | [optional] 
 **multiplexed_samples_status** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.status | [optional] 
 **multiplexed_samples_summary** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.summary | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | [**List[str]**](List[str].md)| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | [**List[str]**](List[str].md)| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**MultiplexedSampleResults**](MultiplexedSampleResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **open_reading_frames**
> OpenReadingFrameResults open_reading_frames(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lab=lab, award=award, orf_id=orf_id, protein_id=protein_id, dbxrefs=dbxrefs, pct_identical_protein=pct_identical_protein, pct_coverage_protein=pct_coverage_protein, pct_coverage_orf=pct_coverage_orf, id=id, summary=summary, gene_id=gene_id, gene_geneid=gene_geneid, gene_symbol=gene_symbol, additional_field_filters=additional_field_filters)

List items in the OpenReadingFrame collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.open_reading_frames(**parameters) # List items in the OpenReadingFrame collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitted_by** | [**List[str]**](List[str].md)| Filter by submitted_by | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **lab** | [**List[str]**](List[str].md)| Filter by lab | [optional] 
 **award** | [**List[str]**](List[str].md)| Filter by award | [optional] 
 **orf_id** | [**List[str]**](List[str].md)| Filter by orf_id | [optional] 
 **protein_id** | [**List[str]**](List[str].md)| Filter by protein_id | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **pct_identical_protein** | [**List[float]**](List[float].md)| Filter by pct_identical_protein | [optional] 
 **pct_coverage_protein** | [**List[float]**](List[float].md)| Filter by pct_coverage_protein | [optional] 
 **pct_coverage_orf** | [**List[float]**](List[float].md)| Filter by pct_coverage_orf | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **gene_id** | [**List[str]**](List[str].md)| Filter by gene.@id | [optional] 
 **gene_geneid** | [**List[str]**](List[str].md)| Filter by gene.geneid | [optional] 
 **gene_symbol** | [**List[str]**](List[str].md)| Filter by gene.symbol | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**OpenReadingFrameResults**](OpenReadingFrameResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pages**
> PageResults pages(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, parent=parent, name=name, title=title, id=id, summary=summary, canonical_uri=canonical_uri, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Page collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.pages(**parameters) # List items in the Page collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **lab** | [**List[str]**](List[str].md)| Filter by lab | [optional] 
 **award** | [**List[str]**](List[str].md)| Filter by award | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **parent** | [**List[str]**](List[str].md)| Filter by parent | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **canonical_uri** | [**List[str]**](List[str].md)| Filter by canonical_uri | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PageResults**](PageResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phenotype_terms**
> PhenotypeTermResults phenotype_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the PhenotypeTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.phenotype_terms(**parameters) # List items in the PhenotypeTerm collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **term_id** | [**List[str]**](List[str].md)| Filter by term_id | [optional] 
 **term_name** | [**List[str]**](List[str].md)| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | [**List[str]**](List[str].md)| Filter by ontology | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PhenotypeTermResults**](PhenotypeTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phenotypic_features**
> PhenotypicFeatureResults phenotypic_features(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, quantity=quantity, quantity_units=quantity_units, observation_date=observation_date, id=id, summary=summary, award_id=award_id, award_component=award_component, feature_id=feature_id, feature_term_id=feature_term_id, feature_term_name=feature_term_name, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the PhenotypicFeature collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.phenotypic_features(**parameters) # List items in the PhenotypicFeature collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **quantity** | [**List[float]**](List[float].md)| Filter by quantity | [optional] 
 **quantity_units** | [**List[str]**](List[str].md)| Filter by quantity_units | [optional] 
 **observation_date** | [**List[str]**](List[str].md)| Filter by observation_date | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **feature_id** | [**List[str]**](List[str].md)| Filter by feature.@id | [optional] 
 **feature_term_id** | [**List[str]**](List[str].md)| Filter by feature.term_id | [optional] 
 **feature_term_name** | [**List[str]**](List[str].md)| Filter by feature.term_name | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PhenotypicFeatureResults**](PhenotypicFeatureResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platform_terms**
> PlatformTermResults platform_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, company=company, sequencing_kits=sequencing_kits, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the PlatformTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.platform_terms(**parameters) # List items in the PlatformTerm collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **term_id** | [**List[str]**](List[str].md)| Filter by term_id | [optional] 
 **term_name** | [**List[str]**](List[str].md)| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **company** | [**List[str]**](List[str].md)| Filter by company | [optional] 
 **sequencing_kits** | [**List[str]**](List[str].md)| Filter by sequencing_kits | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | [**List[str]**](List[str].md)| Filter by ontology | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PlatformTermResults**](PlatformTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prediction_sets**
> PredictionSetResults prediction_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, small_scale_loci_list=small_scale_loci_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, scope=scope, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, large_scale_gene_list_id=large_scale_gene_list_id, large_scale_gene_list_accession=large_scale_gene_list_accession, large_scale_gene_list_aliases=large_scale_gene_list_aliases, large_scale_loci_list_id=large_scale_loci_list_id, large_scale_loci_list_accession=large_scale_loci_list_accession, large_scale_loci_list_aliases=large_scale_loci_list_aliases, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets_id=samples_construct_library_sets_id, samples_construct_library_sets_accession=samples_construct_library_sets_accession, samples_construct_library_sets_summary=samples_construct_library_sets_summary, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, small_scale_gene_list_id=small_scale_gene_list_id, small_scale_gene_list_geneid=small_scale_gene_list_geneid, small_scale_gene_list_name=small_scale_gene_list_name, small_scale_gene_list_symbol=small_scale_gene_list_symbol, small_scale_gene_list_synonyms=small_scale_gene_list_synonyms, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the PredictionSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.prediction_sets(**parameters) # List items in the PredictionSet collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **input_file_sets** | [**List[str]**](List[str].md)| Filter by input_file_sets | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | [**List[str]**](List[str].md)| Filter by file_set_type | [optional] 
 **scope** | [**List[str]**](List[str].md)| Filter by scope | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_files_timestamp** | [**List[str]**](List[str].md)| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **award_contact_pi_id** | [**List[str]**](List[str].md)| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | [**List[str]**](List[str].md)| Filter by award.contact_pi.title | [optional] 
 **award_title** | [**List[str]**](List[str].md)| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **large_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.@id | [optional] 
 **large_scale_gene_list_accession** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.accession | [optional] 
 **large_scale_gene_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.aliases | [optional] 
 **large_scale_loci_list_id** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.@id | [optional] 
 **large_scale_loci_list_accession** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.accession | [optional] 
 **large_scale_loci_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.aliases | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets_id** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.@id | [optional] 
 **samples_construct_library_sets_accession** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.accession | [optional] 
 **samples_construct_library_sets_summary** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.summary | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **small_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.@id | [optional] 
 **small_scale_gene_list_geneid** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.geneid | [optional] 
 **small_scale_gene_list_name** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.name | [optional] 
 **small_scale_gene_list_symbol** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.symbol | [optional] 
 **small_scale_gene_list_synonyms** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.synonyms | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PredictionSetResults**](PredictionSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **primary_cells**
> PrimaryCellResults primary_cells(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, passage_number=passage_number, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type, additional_field_filters=additional_field_filters)

List items in the PrimaryCell collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.primary_cells(**parameters) # List items in the PrimaryCell collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **lower_bound_age** | [**List[float]**](List[float].md)| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | [**List[float]**](List[float].md)| Filter by upper_bound_age | [optional] 
 **age_units** | [**List[str]**](List[str].md)| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | [**List[str]**](List[str].md)| Filter by part_of | [optional] 
 **originated_from** | [**List[str]**](List[str].md)| Filter by originated_from | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | [**List[bool]**](List[bool].md)| Filter by embryonic | [optional] 
 **cellular_sub_pool** | [**List[str]**](List[str].md)| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | [**List[float]**](List[float].md)| Filter by starting_amount | [optional] 
 **starting_amount_units** | [**List[str]**](List[str].md)| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | [**List[str]**](List[str].md)| Filter by date_obtained | [optional] 
 **sorted_from_detail** | [**List[str]**](List[str].md)| Filter by sorted_from_detail | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | [**List[float]**](List[float].md)| Filter by moi | [optional] 
 **nucleic_acid_delivery** | [**List[str]**](List[str].md)| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | [**List[float]**](List[float].md)| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | [**List[str]**](List[str].md)| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **passage_number** | [**List[int]**](List[int].md)| Filter by passage_number | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | [**List[str]**](List[str].md)| Filter by sex | [optional] 
 **age** | [**List[str]**](List[str].md)| Filter by age | [optional] 
 **upper_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | [**List[str]**](List[str].md)| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | [**List[str]**](List[str].md)| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PrimaryCellResults**](PrimaryCellResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publications**
> PublicationResults publications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publication_identifiers=publication_identifiers, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, abstract=abstract, authors=authors, date_published=date_published, date_revised=date_revised, issue=issue, page=page, volume=volume, journal=journal, published_by=published_by, id=id, summary=summary, publication_year=publication_year, samples=samples, donors=donors, file_sets=file_sets, workflows=workflows, software=software, software_versions=software_versions, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Publication collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.publications(**parameters) # List items in the Publication collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **abstract** | [**List[str]**](List[str].md)| Filter by abstract | [optional] 
 **authors** | [**List[str]**](List[str].md)| Filter by authors | [optional] 
 **date_published** | [**List[str]**](List[str].md)| Filter by date_published | [optional] 
 **date_revised** | [**List[str]**](List[str].md)| Filter by date_revised | [optional] 
 **issue** | [**List[str]**](List[str].md)| Filter by issue | [optional] 
 **page** | [**List[str]**](List[str].md)| Filter by page | [optional] 
 **volume** | [**List[str]**](List[str].md)| Filter by volume | [optional] 
 **journal** | [**List[str]**](List[str].md)| Filter by journal | [optional] 
 **published_by** | [**List[str]**](List[str].md)| Filter by published_by | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **publication_year** | [**List[int]**](List[int].md)| Filter by publication_year | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **workflows** | [**List[str]**](List[str].md)| Filter by workflows | [optional] 
 **software** | [**List[str]**](List[str].md)| Filter by software | [optional] 
 **software_versions** | [**List[str]**](List[str].md)| Filter by software_versions | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**PublicationResults**](PublicationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reference_files**
> ReferenceFileResults reference_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, source_url=source_url, sources=sources, external=external, external_id=external_id, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the ReferenceFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.reference_files(**parameters) # List items in the ReferenceFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | [**List[bool]**](List[bool].md)| Filter by controlled_access | [optional] 
 **anvil_url** | [**List[str]**](List[str].md)| Filter by anvil_url | [optional] 
 **assembly** | [**List[str]**](List[str].md)| Filter by assembly | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **file_format_type** | [**List[str]**](List[str].md)| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | [**List[str]**](List[str].md)| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **source_url** | [**List[str]**](List[str].md)| Filter by source_url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **external** | [**List[bool]**](List[bool].md)| Filter by external | [optional] 
 **external_id** | [**List[str]**](List[str].md)| Filter by external_id | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**ReferenceFileResults**](ReferenceFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report**
> str report(type, query=query, field_filters=field_filters, include_fields=include_fields, frame=frame)

Generate a report based on search query. All results are returned.

Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.report(**parameters) # Generate a report based on search query. All results are returned. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of items to return. Can be repeated for multiple types. | 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 
 **include_fields** | [**List[str]**](List[str].md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 
 **frame** | **str**| Object with links, or object with some links embedded. | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rodent_donors**
> RodentDonorResults rodent_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, virtual=virtual, strain_background=strain_background, strain=strain, genotype=genotype, individual_rodent=individual_rodent, rodent_identifier=rodent_identifier, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, phenotypic_features_id=phenotypic_features_id, phenotypic_features_feature_id=phenotypic_features_feature_id, phenotypic_features_feature_term_id=phenotypic_features_feature_term_id, phenotypic_features_feature_term_name=phenotypic_features_feature_term_name, phenotypic_features_observation_date=phenotypic_features_observation_date, phenotypic_features_quantity_units=phenotypic_features_quantity_units, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the RodentDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.rodent_donors(**parameters) # List items in the RodentDonor collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **sex** | [**List[str]**](List[str].md)| Filter by sex | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **strain_background** | [**List[str]**](List[str].md)| Filter by strain_background | [optional] 
 **strain** | [**List[str]**](List[str].md)| Filter by strain | [optional] 
 **genotype** | [**List[str]**](List[str].md)| Filter by genotype | [optional] 
 **individual_rodent** | [**List[bool]**](List[bool].md)| Filter by individual_rodent | [optional] 
 **rodent_identifier** | [**List[str]**](List[str].md)| Filter by rodent_identifier | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **phenotypic_features_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.@id | [optional] 
 **phenotypic_features_feature_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.@id | [optional] 
 **phenotypic_features_feature_term_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_id | [optional] 
 **phenotypic_features_feature_term_name** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_name | [optional] 
 **phenotypic_features_observation_date** | [**List[str]**](List[str].md)| Filter by phenotypic_features.observation_date | [optional] 
 **phenotypic_features_quantity_units** | [**List[str]**](List[str].md)| Filter by phenotypic_features.quantity_units | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**RodentDonorResults**](RodentDonorResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sample_terms**
> SampleTermResults sample_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, dbxrefs=dbxrefs, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, organ_slims=organ_slims, cell_slims=cell_slims, developmental_slims=developmental_slims, system_slims=system_slims, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the SampleTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.sample_terms(**parameters) # List items in the SampleTerm collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **term_id** | [**List[str]**](List[str].md)| Filter by term_id | [optional] 
 **term_name** | [**List[str]**](List[str].md)| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | [**List[str]**](List[str].md)| Filter by ontology | [optional] 
 **organ_slims** | [**List[str]**](List[str].md)| Filter by organ_slims | [optional] 
 **cell_slims** | [**List[str]**](List[str].md)| Filter by cell_slims | [optional] 
 **developmental_slims** | [**List[str]**](List[str].md)| Filter by developmental_slims | [optional] 
 **system_slims** | [**List[str]**](List[str].md)| Filter by system_slims | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SampleTermResults**](SampleTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schema_for_item_type**
> object schema_for_item_type(item_type)

Retrieve JSON schema for item type

Returns JSON schemas of all the item types defined in IGVF

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.schema_for_item_type(**parameters) # Retrieve JSON schema for item type 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_type** | [**ItemType**](ItemType.md)| The name of the item type | 

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schemas**
> object schemas()

Retrieve JSON schemas for all item types

Returns JSON schemas of all the item types defined in IGVF

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.schemas(**parameters) # Retrieve JSON schemas for all item types 
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> SearchResults search(type=type, query=query, field_filters=field_filters, limit=limit, sort=sort, include_fields=include_fields)

Search for items in the IGVF Project

Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.search(**parameters) # Search for items in the IGVF Project 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | [optional] 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **include_fields** | [**List[str]**](List[str].md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | No results found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sequence_files**
> SequenceFileResults sequence_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, flowcell_id=flowcell_id, lane=lane, read_count=read_count, minimum_read_length=minimum_read_length, maximum_read_length=maximum_read_length, mean_read_length=mean_read_length, sequencing_platform=sequencing_platform, sequencing_kit=sequencing_kit, sequencing_run=sequencing_run, illumina_read_type=illumina_read_type, index=index, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, seqspecs=seqspecs, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the SequenceFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.sequence_files(**parameters) # List items in the SequenceFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | [**List[bool]**](List[bool].md)| Filter by controlled_access | [optional] 
 **anvil_url** | [**List[str]**](List[str].md)| Filter by anvil_url | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **flowcell_id** | [**List[str]**](List[str].md)| Filter by flowcell_id | [optional] 
 **lane** | [**List[int]**](List[int].md)| Filter by lane | [optional] 
 **read_count** | [**List[int]**](List[int].md)| Filter by read_count | [optional] 
 **minimum_read_length** | [**List[int]**](List[int].md)| Filter by minimum_read_length | [optional] 
 **maximum_read_length** | [**List[int]**](List[int].md)| Filter by maximum_read_length | [optional] 
 **mean_read_length** | [**List[float]**](List[float].md)| Filter by mean_read_length | [optional] 
 **sequencing_platform** | [**List[str]**](List[str].md)| Filter by sequencing_platform | [optional] 
 **sequencing_kit** | [**List[str]**](List[str].md)| Filter by sequencing_kit | [optional] 
 **sequencing_run** | [**List[int]**](List[int].md)| Filter by sequencing_run | [optional] 
 **illumina_read_type** | [**List[str]**](List[str].md)| Filter by illumina_read_type | [optional] 
 **index** | [**List[str]**](List[str].md)| Filter by index | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **seqspecs** | [**List[str]**](List[str].md)| Filter by seqspecs | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SequenceFileResults**](SequenceFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_files**
> SignalFileResults signal_files(query=query, limit=limit, sort=sort, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, strand_specificity=strand_specificity, filtered=filtered, normalized=normalized, start_view_position=start_view_position, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the SignalFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.signal_files(**parameters) # List items in the SignalFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **transcriptome_annotation** | [**List[str]**](List[str].md)| Filter by transcriptome_annotation | [optional] 
 **assembly** | [**List[str]**](List[str].md)| Filter by assembly | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **strand_specificity** | [**List[str]**](List[str].md)| Filter by strand_specificity | [optional] 
 **filtered** | [**List[bool]**](List[bool].md)| Filter by filtered | [optional] 
 **normalized** | [**List[bool]**](List[bool].md)| Filter by normalized | [optional] 
 **start_view_position** | [**List[str]**](List[str].md)| Filter by start_view_position | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **content_summary** | [**List[str]**](List[str].md)| Filter by content_summary | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SignalFileResults**](SignalFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software**
> SoftwareResults software(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, title=title, source_url=source_url, used_by=used_by, id=id, summary=summary, versions=versions, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Software collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.software(**parameters) # List items in the Software collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **source_url** | [**List[str]**](List[str].md)| Filter by source_url | [optional] 
 **used_by** | [**List[str]**](List[str].md)| Filter by used_by | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **versions** | [**List[str]**](List[str].md)| Filter by versions | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SoftwareResults**](SoftwareResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_versions**
> SoftwareVersionResults software_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, version=version, download_id=download_id, downloaded_url=downloaded_url, id=id, summary=summary, name=name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, software_id=software_id, software_title=software_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the SoftwareVersion collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.software_versions(**parameters) # List items in the SoftwareVersion collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **version** | [**List[str]**](List[str].md)| Filter by version | [optional] 
 **download_id** | [**List[str]**](List[str].md)| Filter by download_id | [optional] 
 **downloaded_url** | [**List[str]**](List[str].md)| Filter by downloaded_url | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **software_id** | [**List[str]**](List[str].md)| Filter by software.@id | [optional] 
 **software_title** | [**List[str]**](List[str].md)| Filter by software.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SoftwareVersionResults**](SoftwareVersionResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sources**
> SourceResults sources(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, url=url, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, name=name, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Source collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.sources(**parameters) # List items in the Source collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SourceResults**](SourceResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tabular_files**
> TabularFileResults tabular_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the TabularFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.tabular_files(**parameters) # List items in the TabularFile collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | [**List[bool]**](List[bool].md)| Filter by controlled_access | [optional] 
 **anvil_url** | [**List[str]**](List[str].md)| Filter by anvil_url | [optional] 
 **assembly** | [**List[str]**](List[str].md)| Filter by assembly | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **file_format_type** | [**List[str]**](List[str].md)| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | [**List[str]**](List[str].md)| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **analysis_step_version** | [**List[str]**](List[str].md)| Filter by analysis_step_version | [optional] 
 **content_md5sum** | [**List[str]**](List[str].md)| Filter by content_md5sum | [optional] 
 **content_type** | [**List[str]**](List[str].md)| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | [**List[str]**](List[str].md)| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | [**List[str]**](List[str].md)| Filter by file_set | [optional] 
 **file_size** | [**List[int]**](List[int].md)| Filter by file_size | [optional] 
 **md5sum** | [**List[str]**](List[str].md)| Filter by md5sum | [optional] 
 **submitted_file_name** | [**List[str]**](List[str].md)| Filter by submitted_file_name | [optional] 
 **upload_status** | [**List[str]**](List[str].md)| Filter by upload_status | [optional] 
 **validation_error_detail** | [**List[str]**](List[str].md)| Filter by validation_error_detail | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | [**List[str]**](List[str].md)| Filter by href | [optional] 
 **s3_uri** | [**List[str]**](List[str].md)| Filter by s3_uri | [optional] 
 **upload_credentials** | [**List[object]**](List[object].md)| Filter by upload_credentials | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**TabularFileResults**](TabularFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **technical_samples**
> TechnicalSampleResults technical_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, sample_material=sample_material, taxa=taxa, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, classifications=classifications, award_id=award_id, award_component=award_component, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, lab_id=lab_id, lab_title=lab_title, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the TechnicalSample collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.technical_samples(**parameters) # List items in the TechnicalSample collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **starting_amount** | [**List[float]**](List[float].md)| Filter by starting_amount | [optional] 
 **starting_amount_units** | [**List[str]**](List[str].md)| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | [**List[str]**](List[str].md)| Filter by date_obtained | [optional] 
 **sorted_from_detail** | [**List[str]**](List[str].md)| Filter by sorted_from_detail | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | [**List[float]**](List[float].md)| Filter by moi | [optional] 
 **nucleic_acid_delivery** | [**List[str]**](List[str].md)| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | [**List[float]**](List[float].md)| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | [**List[str]**](List[str].md)| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **sample_material** | [**List[str]**](List[str].md)| Filter by sample_material | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | [**List[str]**](List[str].md)| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | [**List[str]**](List[str].md)| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**TechnicalSampleResults**](TechnicalSampleResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tissues**
> TissueResults tissues(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, pmi=pmi, pmi_units=pmi_units, ccf_id=ccf_id, preservation_method=preservation_method, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type, additional_field_filters=additional_field_filters)

List items in the Tissue collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.tissues(**parameters) # List items in the Tissue collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **lower_bound_age** | [**List[float]**](List[float].md)| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | [**List[float]**](List[float].md)| Filter by upper_bound_age | [optional] 
 **age_units** | [**List[str]**](List[str].md)| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | [**List[str]**](List[str].md)| Filter by part_of | [optional] 
 **originated_from** | [**List[str]**](List[str].md)| Filter by originated_from | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | [**List[bool]**](List[bool].md)| Filter by embryonic | [optional] 
 **cellular_sub_pool** | [**List[str]**](List[str].md)| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | [**List[float]**](List[float].md)| Filter by starting_amount | [optional] 
 **starting_amount_units** | [**List[str]**](List[str].md)| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | [**List[str]**](List[str].md)| Filter by date_obtained | [optional] 
 **sorted_from_detail** | [**List[str]**](List[str].md)| Filter by sorted_from_detail | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | [**List[float]**](List[float].md)| Filter by moi | [optional] 
 **nucleic_acid_delivery** | [**List[str]**](List[str].md)| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | [**List[float]**](List[float].md)| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | [**List[str]**](List[str].md)| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **pmi** | [**List[int]**](List[int].md)| Filter by pmi | [optional] 
 **pmi_units** | [**List[str]**](List[str].md)| Filter by pmi_units | [optional] 
 **ccf_id** | [**List[str]**](List[str].md)| Filter by ccf_id | [optional] 
 **preservation_method** | [**List[str]**](List[str].md)| Filter by preservation_method | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | [**List[str]**](List[str].md)| Filter by sex | [optional] 
 **age** | [**List[str]**](List[str].md)| Filter by age | [optional] 
 **upper_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | [**List[str]**](List[str].md)| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | [**List[str]**](List[str].md)| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**TissueResults**](TissueResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **treatments**
> TreatmentResults treatments(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lot_id=lot_id, product_id=product_id, documents=documents, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, amount=amount, amount_units=amount_units, duration=duration, duration_units=duration_units, p_h=p_h, purpose=purpose, post_treatment_time=post_treatment_time, post_treatment_time_units=post_treatment_time_units, temperature=temperature, temperature_units=temperature_units, treatment_type=treatment_type, treatment_term_id=treatment_term_id, treatment_term_name=treatment_term_name, depletion=depletion, id=id, summary=summary, biosamples_treated=biosamples_treated, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Treatment collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.treatments(**parameters) # List items in the Treatment collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **amount** | [**List[float]**](List[float].md)| Filter by amount | [optional] 
 **amount_units** | [**List[str]**](List[str].md)| Filter by amount_units | [optional] 
 **duration** | [**List[float]**](List[float].md)| Filter by duration | [optional] 
 **duration_units** | [**List[str]**](List[str].md)| Filter by duration_units | [optional] 
 **p_h** | [**List[float]**](List[float].md)| Filter by pH | [optional] 
 **purpose** | [**List[str]**](List[str].md)| Filter by purpose | [optional] 
 **post_treatment_time** | [**List[float]**](List[float].md)| Filter by post_treatment_time | [optional] 
 **post_treatment_time_units** | [**List[str]**](List[str].md)| Filter by post_treatment_time_units | [optional] 
 **temperature** | [**List[float]**](List[float].md)| Filter by temperature | [optional] 
 **temperature_units** | [**List[str]**](List[str].md)| Filter by temperature_units | [optional] 
 **treatment_type** | [**List[str]**](List[str].md)| Filter by treatment_type | [optional] 
 **treatment_term_id** | [**List[str]**](List[str].md)| Filter by treatment_term_id | [optional] 
 **treatment_term_name** | [**List[str]**](List[str].md)| Filter by treatment_term_name | [optional] 
 **depletion** | [**List[bool]**](List[bool].md)| Filter by depletion | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **biosamples_treated** | [**List[str]**](List[str].md)| Filter by biosamples_treated | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**TreatmentResults**](TreatmentResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users**
> UserResults users(query=query, limit=limit, sort=sort, status=status, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, email=email, first_name=first_name, last_name=last_name, lab=lab, submits_for=submits_for, groups=groups, viewing_groups=viewing_groups, job_title=job_title, id=id, summary=summary, title=title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the User collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.users(**parameters) # List items in the User collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **email** | [**List[str]**](List[str].md)| Filter by email | [optional] 
 **first_name** | [**List[str]**](List[str].md)| Filter by first_name | [optional] 
 **last_name** | [**List[str]**](List[str].md)| Filter by last_name | [optional] 
 **lab** | [**List[str]**](List[str].md)| Filter by lab | [optional] 
 **submits_for** | [**List[str]**](List[str].md)| Filter by submits_for | [optional] 
 **groups** | [**List[str]**](List[str].md)| Filter by groups | [optional] 
 **viewing_groups** | [**List[str]**](List[str].md)| Filter by viewing_groups | [optional] 
 **job_title** | [**List[str]**](List[str].md)| Filter by job_title | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **title** | [**List[str]**](List[str].md)| Filter by title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**UserResults**](UserResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **whole_organisms**
> WholeOrganismResults whole_organisms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type, additional_field_filters=additional_field_filters)

List items in the WholeOrganism collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.whole_organisms(**parameters) # List items in the WholeOrganism collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **taxa** | [**List[str]**](List[str].md)| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | [**List[str]**](List[str].md)| Filter by url | [optional] 
 **lot_id** | [**List[str]**](List[str].md)| Filter by lot_id | [optional] 
 **product_id** | [**List[str]**](List[str].md)| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **lower_bound_age** | [**List[float]**](List[float].md)| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | [**List[float]**](List[float].md)| Filter by upper_bound_age | [optional] 
 **age_units** | [**List[str]**](List[str].md)| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | [**List[str]**](List[str].md)| Filter by part_of | [optional] 
 **originated_from** | [**List[str]**](List[str].md)| Filter by originated_from | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | [**List[bool]**](List[bool].md)| Filter by embryonic | [optional] 
 **cellular_sub_pool** | [**List[str]**](List[str].md)| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | [**List[float]**](List[float].md)| Filter by starting_amount | [optional] 
 **starting_amount_units** | [**List[str]**](List[str].md)| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | [**List[str]**](List[str].md)| Filter by date_obtained | [optional] 
 **sorted_from_detail** | [**List[str]**](List[str].md)| Filter by sorted_from_detail | [optional] 
 **virtual** | [**List[bool]**](List[bool].md)| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | [**List[float]**](List[float].md)| Filter by moi | [optional] 
 **nucleic_acid_delivery** | [**List[str]**](List[str].md)| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | [**List[float]**](List[float].md)| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | [**List[str]**](List[str].md)| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | [**List[str]**](List[str].md)| Filter by sex | [optional] 
 **age** | [**List[str]**](List[str].md)| Filter by age | [optional] 
 **upper_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | [**List[float]**](List[float].md)| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | [**List[str]**](List[str].md)| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | [**List[str]**](List[str].md)| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**WholeOrganismResults**](WholeOrganismResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows**
> WorkflowResults workflows(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, source_url=source_url, workflow_repositories=workflow_repositories, workflow_version=workflow_version, id=id, summary=summary, analysis_steps=analysis_steps, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, standards_page_id=standards_page_id, standards_page_title=standards_page_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, additional_field_filters=additional_field_filters)

List items in the Workflow collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.

### Example

* Basic Authentication (basicAuth):

```python
from igvf_client import IgvfApi


api = IgvfApi()

api.workflows(**parameters) # List items in the Workflow collection. 
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | [**List[str]**](List[str].md)| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | [**List[str]**](List[str].md)| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | [**List[str]**](List[str].md)| Filter by status | [optional] 
 **revoke_detail** | [**List[str]**](List[str].md)| Filter by revoke_detail | [optional] 
 **uuid** | [**List[str]**](List[str].md)| Filter by uuid | [optional] 
 **notes** | [**List[str]**](List[str].md)| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | [**List[str]**](List[str].md)| Filter by creation_timestamp | [optional] 
 **submitter_comment** | [**List[str]**](List[str].md)| Filter by submitter_comment | [optional] 
 **description** | [**List[str]**](List[str].md)| Filter by description | [optional] 
 **name** | [**List[str]**](List[str].md)| Filter by name | [optional] 
 **source_url** | [**List[str]**](List[str].md)| Filter by source_url | [optional] 
 **workflow_repositories** | [**List[str]**](List[str].md)| Filter by workflow_repositories | [optional] 
 **workflow_version** | [**List[int]**](List[int].md)| Filter by workflow_version | [optional] 
 **id** | [**List[str]**](List[str].md)| Filter by @id | [optional] 
 **summary** | [**List[str]**](List[str].md)| Filter by summary | [optional] 
 **analysis_steps** | [**List[str]**](List[str].md)| Filter by analysis_steps | [optional] 
 **award_id** | [**List[str]**](List[str].md)| Filter by award.@id | [optional] 
 **award_component** | [**List[str]**](List[str].md)| Filter by award.component | [optional] 
 **lab_id** | [**List[str]**](List[str].md)| Filter by lab.@id | [optional] 
 **lab_title** | [**List[str]**](List[str].md)| Filter by lab.title | [optional] 
 **standards_page_id** | [**List[str]**](List[str].md)| Filter by standards_page.@id | [optional] 
 **standards_page_title** | [**List[str]**](List[str].md)| Filter by standards_page.title | [optional] 
 **submitted_by_id** | [**List[str]**](List[str].md)| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | [**List[str]**](List[str].md)| Filter by submitted_by.title | [optional] 
 **additional_field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**WorkflowResults**](WorkflowResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

