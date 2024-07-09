# openapi-client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 1.0.0
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.igvf.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.data.igvf.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types. (optional)
    var_field = ['var_field_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = 56 # int | Maximum number of results to return. Use 'all' for all results. (optional)
    debug = True # bool | Enables debug mode for the search. (optional)
    frame = 'frame_example' # str | Specifies the format of the returned objects. (optional)
    var_from = 56 # int | Starting index for pagination. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. (optional)
    config = 'config_example' # str | Configuration options for the search. (optional)
    advanced_query = 'advanced_query_example' # str | Advanced query string for complex searches. (optional)
    field_filters = {'key': {"status":"released"}} # Dict[str, object] | Any field from any object type can be used as a filter. Use '!=' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)

    try:
        # Search for objects in the IGVF Project
        api_response = api_instance.search(type=type, var_field=var_field, query=query, limit=limit, debug=debug, frame=frame, var_from=var_from, sort=sort, config=config, advanced_query=advanced_query, field_filters=field_filters)
        print("The response of DefaultApi->search:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DefaultApi->search: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.data.igvf.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**search**](docs/DefaultApi.md#search) | **GET** /search | Search for objects in the IGVF Project


## Documentation For Models

 - [AccessKey](docs/AccessKey.md)
 - [AlignmentFile](docs/AlignmentFile.md)
 - [AnalysisSet](docs/AnalysisSet.md)
 - [AnalysisStep](docs/AnalysisStep.md)
 - [AnalysisStepVersion](docs/AnalysisStepVersion.md)
 - [AssayTerm](docs/AssayTerm.md)
 - [Attachment](docs/Attachment.md)
 - [Attachment1](docs/Attachment1.md)
 - [AuxiliarySet](docs/AuxiliarySet.md)
 - [Award](docs/Award.md)
 - [Biomarker](docs/Biomarker.md)
 - [ConfigurationFile](docs/ConfigurationFile.md)
 - [ConstructLibrarySet](docs/ConstructLibrarySet.md)
 - [ContentType](docs/ContentType.md)
 - [ContentType1](docs/ContentType1.md)
 - [CrisprModification](docs/CrisprModification.md)
 - [CuratedSet](docs/CuratedSet.md)
 - [Document](docs/Document.md)
 - [Gene](docs/Gene.md)
 - [GeneLocation](docs/GeneLocation.md)
 - [GenomeBrowserAnnotationFile](docs/GenomeBrowserAnnotationFile.md)
 - [HumanDonor](docs/HumanDonor.md)
 - [Image](docs/Image.md)
 - [ImageFile](docs/ImageFile.md)
 - [InVitroSystem](docs/InVitroSystem.md)
 - [InputContentType](docs/InputContentType.md)
 - [InputContentTypeAnyOf](docs/InputContentTypeAnyOf.md)
 - [InstitutionalCertificate](docs/InstitutionalCertificate.md)
 - [Lab](docs/Lab.md)
 - [Locus](docs/Locus.md)
 - [MatrixFile](docs/MatrixFile.md)
 - [MeasurementSet](docs/MeasurementSet.md)
 - [ModelFile](docs/ModelFile.md)
 - [ModelSet](docs/ModelSet.md)
 - [Modification](docs/Modification.md)
 - [MultiplexedSample](docs/MultiplexedSample.md)
 - [NoResultsResponse](docs/NoResultsResponse.md)
 - [OpenReadingFrame](docs/OpenReadingFrame.md)
 - [OutputContentType](docs/OutputContentType.md)
 - [Page](docs/Page.md)
 - [PageLayout](docs/PageLayout.md)
 - [PageLayoutComponents](docs/PageLayoutComponents.md)
 - [PhenotypeTerm](docs/PhenotypeTerm.md)
 - [PhenotypicFeature](docs/PhenotypicFeature.md)
 - [PlatformTerm](docs/PlatformTerm.md)
 - [PredictionSet](docs/PredictionSet.md)
 - [PrimaryCell](docs/PrimaryCell.md)
 - [Publication](docs/Publication.md)
 - [ReferenceFile](docs/ReferenceFile.md)
 - [RelatedDonor](docs/RelatedDonor.md)
 - [RodentDonor](docs/RodentDonor.md)
 - [SampleTerm](docs/SampleTerm.md)
 - [SearchFacet](docs/SearchFacet.md)
 - [SearchFacetTermValue](docs/SearchFacetTermValue.md)
 - [SearchResultItem](docs/SearchResultItem.md)
 - [SearchResults](docs/SearchResults.md)
 - [SequenceFile](docs/SequenceFile.md)
 - [SignalFile](docs/SignalFile.md)
 - [Software](docs/Software.md)
 - [SoftwareVersion](docs/SoftwareVersion.md)
 - [Source](docs/Source.md)
 - [TabularFile](docs/TabularFile.md)
 - [TechnicalSample](docs/TechnicalSample.md)
 - [Tile](docs/Tile.md)
 - [Tissue](docs/Tissue.md)
 - [Treatment](docs/Treatment.md)
 - [User](docs/User.md)
 - [WholeOrganism](docs/WholeOrganism.md)
 - [Workflow](docs/Workflow.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication


## Author




