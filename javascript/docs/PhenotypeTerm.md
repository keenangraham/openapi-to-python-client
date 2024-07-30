# IgvfProjectApi.PhenotypeTerm

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
**termId** | **String** | An ontology term identifier describing a phenotype. | [optional] 
**termName** | **String** | Ontology term describing a biological sample, assay, trait, or disease. | [optional] 
**deprecatedNtrTerms** | **[String]** | A list of deprecated NTR terms previously associated with this ontology term. | [optional] 
**isA** | **[String]** | A list of ontology terms which are the nearest ancestor to this ontology term. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the ontology term. | [optional] 
**name** | **String** | A unique identifier for the ontology term, reformatted from the original term ID. | [optional] 
**synonyms** | **[String]** | Synonyms for the term that have been recorded in an ontology. | [optional] 
**ancestors** | **[String]** | List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified. | [optional] 
**ontology** | **String** | The ontology in which the term is recorded. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)




