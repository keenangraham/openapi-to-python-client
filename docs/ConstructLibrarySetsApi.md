# igvf_client.ConstructLibrarySetsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**construct_library_sets**](ConstructLibrarySetsApi.md#construct_library_sets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.


# **construct_library_sets**
> ConstructLibrarySetResults construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, large_scale_loci_list=large_scale_loci_list, small_scale_gene_list=small_scale_gene_list, large_scale_gene_list=large_scale_gene_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, associated_phenotypes=associated_phenotypes, orf_list=orf_list, exon=exon, tile=tile, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples=applied_to_samples)

List items in the ConstructLibrarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.construct_library_set_results import ConstructLibrarySetResults
from igvf_client.models.locus import Locus
from igvf_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.igvf.org
# See configuration.py for a list of all supported configuration parameters.
configuration = igvf_client.Configuration(
    host = "https://api.data.igvf.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = igvf_client.Configuration(
    access_key = os.environ["IGVF_ACCESS_KEY"],
    secret_access_key = os.environ["IGVF_SECRET_ACCESS_KEY"]
)

# Enter a context with an instance of the API client
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.ConstructLibrarySetsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    small_scale_loci_list = [igvf_client.Locus()] # List[Locus] | Filter by small_scale_loci_list (optional)
    large_scale_loci_list = 'large_scale_loci_list_example' # str | Filter by large_scale_loci_list (optional)
    small_scale_gene_list = ['small_scale_gene_list_example'] # List[str] | Filter by small_scale_gene_list (optional)
    large_scale_gene_list = 'large_scale_gene_list_example' # str | Filter by large_scale_gene_list (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    scope = 'scope_example' # str | Filter by scope (optional)
    selection_criteria = ['selection_criteria_example'] # List[str] | Filter by selection_criteria (optional)
    integrated_content_files = ['integrated_content_files_example'] # List[str] | Filter by integrated_content_files (optional)
    associated_phenotypes = ['associated_phenotypes_example'] # List[str] | Filter by associated_phenotypes (optional)
    orf_list = ['orf_list_example'] # List[str] | Filter by orf_list (optional)
    exon = 'exon_example' # str | Filter by exon (optional)
    tile = {'key': igvf_client.Tile()} # Tile | Filter by tile (optional)
    guide_type = 'guide_type_example' # str | Filter by guide_type (optional)
    tiling_modality = 'tiling_modality_example' # str | Filter by tiling_modality (optional)
    average_guide_coverage = 3.4 # float | Filter by average_guide_coverage (optional)
    lower_bound_guide_coverage = 56 # int | Filter by lower_bound_guide_coverage (optional)
    upper_bound_guide_coverage = 56 # int | Filter by upper_bound_guide_coverage (optional)
    average_insert_size = 3.4 # float | Filter by average_insert_size (optional)
    lower_bound_insert_size = 56 # int | Filter by lower_bound_insert_size (optional)
    upper_bound_insert_size = 56 # int | Filter by upper_bound_insert_size (optional)
    targeton = 'targeton_example' # str | Filter by targeton (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = None # List[object] | Filter by files (optional)
    control_for = None # List[object] | Filter by control_for (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = None # List[object] | Filter by input_file_set_for (optional)
    applied_to_samples = None # List[object] | Filter by applied_to_samples (optional)

    try:
        # List items in the ConstructLibrarySet collection.
        api_response = api_instance.construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, large_scale_loci_list=large_scale_loci_list, small_scale_gene_list=small_scale_gene_list, large_scale_gene_list=large_scale_gene_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, associated_phenotypes=associated_phenotypes, orf_list=orf_list, exon=exon, tile=tile, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples=applied_to_samples)
        print("The response of ConstructLibrarySetsApi->construct_library_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConstructLibrarySetsApi->construct_library_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **large_scale_loci_list** | **str**| Filter by large_scale_loci_list | [optional] 
 **small_scale_gene_list** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list | [optional] 
 **large_scale_gene_list** | **str**| Filter by large_scale_gene_list | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **scope** | **str**| Filter by scope | [optional] 
 **selection_criteria** | [**List[str]**](List[str].md)| Filter by selection_criteria | [optional] 
 **integrated_content_files** | [**List[str]**](List[str].md)| Filter by integrated_content_files | [optional] 
 **associated_phenotypes** | [**List[str]**](List[str].md)| Filter by associated_phenotypes | [optional] 
 **orf_list** | [**List[str]**](List[str].md)| Filter by orf_list | [optional] 
 **exon** | **str**| Filter by exon | [optional] 
 **tile** | [**Tile**](Tile.md)| Filter by tile | [optional] 
 **guide_type** | **str**| Filter by guide_type | [optional] 
 **tiling_modality** | **str**| Filter by tiling_modality | [optional] 
 **average_guide_coverage** | **float**| Filter by average_guide_coverage | [optional] 
 **lower_bound_guide_coverage** | **int**| Filter by lower_bound_guide_coverage | [optional] 
 **upper_bound_guide_coverage** | **int**| Filter by upper_bound_guide_coverage | [optional] 
 **average_insert_size** | **float**| Filter by average_insert_size | [optional] 
 **lower_bound_insert_size** | **int**| Filter by lower_bound_insert_size | [optional] 
 **upper_bound_insert_size** | **int**| Filter by upper_bound_insert_size | [optional] 
 **targeton** | **str**| Filter by targeton | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[object]**](List[object].md)| Filter by files | [optional] 
 **control_for** | [**List[object]**](List[object].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[object]**](List[object].md)| Filter by input_file_set_for | [optional] 
 **applied_to_samples** | [**List[object]**](List[object].md)| Filter by applied_to_samples | [optional] 

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

