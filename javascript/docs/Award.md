# IgvfProjectApi.Award

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the metadata object. | [optional] 
**url** | **String** | An external resource with additional information. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**title** | **String** | The grant name from the NIH database, if applicable. | [optional] 
**name** | **String** | The official grant number from the NIH database, if applicable | [optional] 
**startDate** | **String** | The date when the award begins. | [optional] 
**endDate** | **String** | The date when the award concludes. | [optional] 
**pis** | **[String]** | Principal Investigator(s) of the grant. | [optional] 
**contactPi** | **String** | The contact Principal Investigator of the grant. | [optional] 
**project** | **String** | The collection of biological data related to a single initiative, originating from a consortium. | [optional] 
**viewingGroup** | **String** | The group that determines which set of data the user has permission to view. | [optional] 
**component** | **String** | The project component the award is associated with. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the award. | [optional] 



## Enum: StatusEnum


* `current` (value: `"current"`)

* `deleted` (value: `"deleted"`)

* `disabled` (value: `"disabled"`)





## Enum: ProjectEnum


* `community` (value: `"community"`)

* `ENCODE` (value: `"ENCODE"`)

* `IGVF` (value: `"IGVF"`)





## Enum: ViewingGroupEnum


* `community` (value: `"community"`)

* `IGVF` (value: `"IGVF"`)





## Enum: ComponentEnum


* `affiliate` (value: `"affiliate"`)

* `data analysis` (value: `"data analysis"`)

* `data coordination` (value: `"data coordination"`)

* `functional characterization` (value: `"functional characterization"`)

* `mapping` (value: `"mapping"`)

* `networks` (value: `"networks"`)

* `predictive modeling` (value: `"predictive modeling"`)




