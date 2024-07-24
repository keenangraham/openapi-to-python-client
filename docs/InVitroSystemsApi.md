# igvf_client.InVitroSystemsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**in_vitro_systems**](InVitroSystemsApi.md#in_vitro_systems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.


# **in_vitro_systems**
> InVitroSystemResults in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_treatments=cell_fate_change_treatments, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to)

List items in the InVitroSystem collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.in_vitro_system_results import InVitroSystemResults
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
    api_instance = igvf_client.InVitroSystemsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
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
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    disease_terms = ['disease_terms_example'] # List[str] | Filter by disease_terms (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    treatments = ['treatments_example'] # List[str] | Filter by treatments (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    modifications = ['modifications_example'] # List[str] | Filter by modifications (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    time_post_change = 3.4 # float | Filter by time_post_change (optional)
    time_post_change_units = 'time_post_change_units_example' # str | Filter by time_post_change_units (optional)
    cell_fate_change_treatments = ['cell_fate_change_treatments_example'] # List[str] | Filter by cell_fate_change_treatments (optional)
    cell_fate_change_protocol = 'cell_fate_change_protocol_example' # str | Filter by cell_fate_change_protocol (optional)
    demultiplexed_from = 'demultiplexed_from_example' # str | Filter by demultiplexed_from (optional)
    passage_number = 56 # int | Filter by passage_number (optional)
    targeted_sample_term = 'targeted_sample_term_example' # str | Filter by targeted_sample_term (optional)
    growth_medium = 'growth_medium_example' # str | Filter by growth_medium (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    file_sets = None # List[object] | Filter by file_sets (optional)
    multiplexed_in = None # List[object] | Filter by multiplexed_in (optional)
    sorted_fractions = None # List[object] | Filter by sorted_fractions (optional)
    origin_of = None # List[object] | Filter by origin_of (optional)
    institutional_certificates = None # List[object] | Filter by institutional_certificates (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = None # List[object] | Filter by parts (optional)
    pooled_in = None # List[object] | Filter by pooled_in (optional)
    demultiplexed_to = None # List[object] | Filter by demultiplexed_to (optional)

    try:
        # List items in the InVitroSystem collection.
        api_response = api_instance.in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_treatments=cell_fate_change_treatments, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to)
        print("The response of InVitroSystemsApi->in_vitro_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InVitroSystemsApi->in_vitro_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
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
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **disease_terms** | [**List[str]**](List[str].md)| Filter by disease_terms | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **treatments** | [**List[str]**](List[str].md)| Filter by treatments | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **modifications** | [**List[str]**](List[str].md)| Filter by modifications | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **time_post_change** | **float**| Filter by time_post_change | [optional] 
 **time_post_change_units** | **str**| Filter by time_post_change_units | [optional] 
 **cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments | [optional] 
 **cell_fate_change_protocol** | **str**| Filter by cell_fate_change_protocol | [optional] 
 **demultiplexed_from** | **str**| Filter by demultiplexed_from | [optional] 
 **passage_number** | **int**| Filter by passage_number | [optional] 
 **targeted_sample_term** | **str**| Filter by targeted_sample_term | [optional] 
 **growth_medium** | **str**| Filter by growth_medium | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **file_sets** | [**List[object]**](List[object].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[object]**](List[object].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[object]**](List[object].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[object]**](List[object].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[object]**](List[object].md)| Filter by institutional_certificates | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[object]**](List[object].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[object]**](List[object].md)| Filter by pooled_in | [optional] 
 **demultiplexed_to** | [**List[object]**](List[object].md)| Filter by demultiplexed_to | [optional] 

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

