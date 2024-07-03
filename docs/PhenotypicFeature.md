# PhenotypicFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**Lab1**](Lab1.md) |  | 
**award** | [**Award1**](Award1.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '3']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy**](SubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**feature** | [**PhenotypicFeature2**](PhenotypicFeature2.md) |  | 
**quantity** | **float** | A quantity associated with the phenotypic feature, if applicable. | [optional] 
**quantity_units** | **str** | The unit of measurement for a quantity associated with the phenotypic feature. | [optional] 
**observation_date** | **date** | The date the feature was observed or measured. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.phenotypic_feature import PhenotypicFeature

# TODO update the JSON string below
json = "{}"
# create an instance of PhenotypicFeature from a JSON string
phenotypic_feature_instance = PhenotypicFeature.from_json(json)
# print the JSON string representation of the object
print(PhenotypicFeature.to_json())

# convert the object into a dict
phenotypic_feature_dict = phenotypic_feature_instance.to_dict()
# create an instance of PhenotypicFeature from a dict
phenotypic_feature_from_dict = PhenotypicFeature.from_dict(phenotypic_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


