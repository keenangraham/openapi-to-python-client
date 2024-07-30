# IgvfProjectApi.Biomarker

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**name** | **String** | The biomarker name. | [optional] 
**classification** | **String** | Sample specific biomarker. | [optional] 
**quantification** | **String** | The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity. | [optional] 
**synonyms** | **[String]** | Alternate names for this biomarker. | [optional] 
**gene** | **String** | Biomarker gene. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 
**nameQuantification** | **String** | A concatenation of the name and quantification of the biomarker. | [optional] 
**biomarkerFor** | **[String]** | The samples which have been confirmed to have this biomarker. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: ClassificationEnum


* `cell surface protein` (value: `"cell surface protein"`)

* `marker gene` (value: `"marker gene"`)





## Enum: QuantificationEnum


* `negative` (value: `"negative"`)

* `positive` (value: `"positive"`)

* `low` (value: `"low"`)

* `intermediate` (value: `"intermediate"`)

* `high` (value: `"high"`)




