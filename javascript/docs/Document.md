# IgvfProjectApi.Document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**attachment** | [**Attachment**](Attachment.md) |  | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**documentType** | **String** | The category that best describes the document. | [optional] 
**characterizationMethod** | **String** | The method used for the characterization. | [optional] 
**urls** | **[String]** | External resources with additional information to the document. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the document. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: DocumentTypeEnum


* `cell fate change protocol` (value: `"cell fate change protocol"`)

* `characterization` (value: `"characterization"`)

* `computational protocol` (value: `"computational protocol"`)

* `experimental protocol` (value: `"experimental protocol"`)

* `file format specification` (value: `"file format specification"`)

* `image` (value: `"image"`)

* `model source data` (value: `"model source data"`)

* `plate map` (value: `"plate map"`)

* `plasmid map` (value: `"plasmid map"`)

* `plasmid sequence` (value: `"plasmid sequence"`)

* `standards` (value: `"standards"`)





## Enum: CharacterizationMethodEnum


* `FACS` (value: `"FACS"`)

* `immunoblot` (value: `"immunoblot"`)

* `immunofluorescence` (value: `"immunofluorescence"`)

* `immunoprecipitation` (value: `"immunoprecipitation"`)

* `mass spectrometry` (value: `"mass spectrometry"`)

* `PCR` (value: `"PCR"`)

* `restriction digest` (value: `"restriction digest"`)

* `RT-qPCR` (value: `"RT-qPCR"`)

* `sequencing` (value: `"sequencing"`)




