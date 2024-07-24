# RelatedDonor1

Familial relation of this donor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**donor** | **str** | An identifier for the related donor. | 
**relationship_type** | **str** | A descriptive term for the related donor’s relationship to this donor. | 

## Example

```python
from igvf_client.models.related_donor1 import RelatedDonor1

# TODO update the JSON string below
json = "{}"
# create an instance of RelatedDonor1 from a JSON string
related_donor1_instance = RelatedDonor1.from_json(json)
# print the JSON string representation of the object
print(RelatedDonor1.to_json())

# convert the object into a dict
related_donor1_dict = related_donor1_instance.to_dict()
# create an instance of RelatedDonor1 from a dict
related_donor1_from_dict = RelatedDonor1.from_dict(related_donor1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


