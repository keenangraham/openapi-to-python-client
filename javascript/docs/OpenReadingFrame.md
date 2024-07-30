# IgvfProjectApi.OpenReadingFrame

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**orfId** | **String** | Open reading frame ID. | [optional] 
**gene** | **[String]** | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | [optional] 
**proteinId** | **String** | ENSEMBL ProteinID of official nomenclature approved protein. The ProteinID does not include the current version number suffix. | [optional] 
**dbxrefs** | **[String]** | Unique identifiers from the hORFeome database | [optional] 
**pctIdenticalProtein** | **Number** | The percentage of identical matches to Ensembl protein. | [optional] 
**pctCoverageProtein** | **Number** | The percentage of ORF covered by Ensembl protein. | [optional] 
**pctCoverageOrf** | **Number** | The percentage of Ensembl protein covered by ORF. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)




