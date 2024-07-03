# RodentDonorPhenotypicFeaturesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | [optional] 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '3']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**feature** | [**PhenotypicFeatureFeature**](PhenotypicFeatureFeature.md) |  | [optional] 
**quantity** | **float** | A quantity associated with the phenotypic feature, if applicable. | [optional] 
**quantity_units** | **str** | The unit of measurement for a quantity associated with the phenotypic feature. | [optional] 
**observation_date** | **date** | The date the feature was observed or measured. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.rodent_donor_phenotypic_features_inner import RodentDonorPhenotypicFeaturesInner

# TODO update the JSON string below
json = "{}"
# create an instance of RodentDonorPhenotypicFeaturesInner from a JSON string
rodent_donor_phenotypic_features_inner_instance = RodentDonorPhenotypicFeaturesInner.from_json(json)
# print the JSON string representation of the object
print(RodentDonorPhenotypicFeaturesInner.to_json())

# convert the object into a dict
rodent_donor_phenotypic_features_inner_dict = rodent_donor_phenotypic_features_inner_instance.to_dict()
# create an instance of RodentDonorPhenotypicFeaturesInner from a dict
rodent_donor_phenotypic_features_inner_from_dict = RodentDonorPhenotypicFeaturesInner.from_dict(rodent_donor_phenotypic_features_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


