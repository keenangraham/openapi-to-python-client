# IgvfProjectApi.PhenotypicFeature

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
**feature** | **String** | The phenotypic feature observed for the donor. | [optional] 
**quantity** | **Number** | A quantity associated with the phenotypic feature, if applicable. | [optional] 
**quantityUnits** | **String** | The unit of measurement for a quantity associated with the phenotypic feature. | [optional] 
**observationDate** | **String** | The date the feature was observed or measured. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: QuantityUnitsEnum


* `meter` (value: `"meter"`)

* `micromole` (value: `"micromole"`)

* `nanogram` (value: `"nanogram"`)

* `microgram` (value: `"microgram"`)

* `milligram` (value: `"milligram"`)

* `gram` (value: `"gram"`)

* `kilogram` (value: `"kilogram"`)

* `milli-International Unit per milliliter` (value: `"milli-International Unit per milliliter"`)

* `picogram per milliliter` (value: `"picogram per milliliter"`)

* `nanogram per milliliter` (value: `"nanogram per milliliter"`)

* `milligram per deciliter` (value: `"milligram per deciliter"`)




