# IgvfProjectApi.AnalysisStep

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
**analysisStepTypes** | **[String]** | The classification of the software. | [optional] 
**stepLabel** | **String** | Unique lowercased label of the analysis step that includes the relevant assays, the software used, and the purpose of the step, e.g. rampage-grit-peak-calling-step | [optional] 
**title** | **String** | The preferred viewable name of the analysis step, likely the same as the step label. | [optional] 
**workflow** | **String** | The computational workflow in which this analysis step belongs. | [optional] 
**parents** | **[String]** | The precursor steps. | [optional] 
**inputContentTypes** | **[String]** | The content types used as input for the analysis step. | [optional] 
**outputContentTypes** | **[String]** | The content types produced as output by the analysis step. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 
**name** | **String** | Full name of the analysis step. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: [AnalysisStepTypesEnum]


* `alignment` (value: `"alignment"`)

* `file format conversion` (value: `"file format conversion"`)

* `signal generation` (value: `"signal generation"`)




