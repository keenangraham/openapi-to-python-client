# IgvfProjectApi.DegronModification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**lotId** | **String** | The lot identifier provided by the originating lab or vendor. | [optional] 
**productId** | **String** | The product or catalog identifier provided following deposition to addgene.org. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
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
**activated** | **Boolean** | A boolean indicating whether the modification has been activated by a chemical agent. | [optional] 
**activatingAgentTermId** | **String** | The CHEBI identifier for the activating agent of the modification. | [optional] 
**activatingAgentTermName** | **String** | The CHEBI name for the activating agent of the modification. | [optional] 
**modality** | **String** | The purpose or intended effect of a modification. | [optional] 
**degronSystem** | **String** | The type of degron system implemented. | [optional] 
**taggedProteins** | **[String]** | The tagged proteins which are targeted for degradation. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** |  | [optional] 
**biosamplesModified** | **[String]** | The biosamples which have been modified with this modification. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: ModalityEnum


* `degradation` (value: `"degradation"`)





## Enum: DegronSystemEnum


* `AID` (value: `"AID"`)

* `AlissAid` (value: `"AlissAid"`)

* `ssAID` (value: `"ssAID"`)




