# PageParent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**lab** | [**DocumentLab**](DocumentLab.md) |  | [optional] 
**award** | [**DocumentAward**](DocumentAward.md) |  | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**DocumentSubmittedBy**](DocumentSubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**parent** | [**PageParent**](PageParent.md) |  | [optional] 
**name** | **str** | The name shown in this page&#39;s URL. | 
**title** | **str** | The name shown in the browser&#39;s title bar and tabs. | 
**layout** | [**PageLayout**](PageLayout.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**canonical_uri** | **str** | The path of the page. | [optional] 

## Example

```python
from openapi_client.models.page_parent import PageParent

# TODO update the JSON string below
json = "{}"
# create an instance of PageParent from a JSON string
page_parent_instance = PageParent.from_json(json)
# print the JSON string representation of the object
print(PageParent.to_json())

# convert the object into a dict
page_parent_dict = page_parent_instance.to_dict()
# create an instance of PageParent from a dict
page_parent_from_dict = PageParent.from_dict(page_parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

