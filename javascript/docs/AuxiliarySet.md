# IgvfProjectApi.AuxiliarySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**publications** | **[String]** | The publications associated with this object. | [optional] 
**publicationIdentifiers** | **[String]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**accession** | **String** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternateAccessions** | **[String]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **[String]** | Some samples are part of particular data collections. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**revokeDetail** | **String** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**url** | **String** | An external resource with additional information. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**dbxrefs** | **[String]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets. | [optional] 
**samples** | **[String]** | The sample(s) associated with this file set. | [optional] 
**donors** | **[String]** | The donors of the samples associated with this auxiliary set. | [optional] 
**fileSetType** | **String** | The category that best describes this auxiliary file set. | [optional] 
**libraryConstructionPlatform** | **String** | The platform used to construct the library sequenced in this auxiliary set. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** |  | [optional] 
**files** | **[String]** | The files associated with this file set. | [optional] 
**controlFor** | **[String]** | The file sets for which this file set is a control. | [optional] 
**submittedFilesTimestamp** | **String** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**inputFileSetFor** | **[String]** | The file sets that use this file set as an input. | [optional] 
**measurementSets** | **[String]** | The measurement sets that link to this auxiliary set. | [optional] 



## Enum: [CollectionsEnum]


* `ClinGen` (value: `"ClinGen"`)

* `ENCODE` (value: `"ENCODE"`)

* `GREGoR` (value: `"GREGoR"`)

* `IGVF_catalog_beta_v0.1` (value: `"IGVF_catalog_beta_v0.1"`)

* `IGVF_catalog_beta_v0.2` (value: `"IGVF_catalog_beta_v0.2"`)

* `IGVF_catalog_beta_v0.3` (value: `"IGVF_catalog_beta_v0.3"`)

* `IGVF_catalog_beta_v0.4` (value: `"IGVF_catalog_beta_v0.4"`)

* `MaveDB` (value: `"MaveDB"`)

* `MPRAbase` (value: `"MPRAbase"`)

* `Vista` (value: `"Vista"`)





## Enum: StatusEnum


* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)

* `deleted` (value: `"deleted"`)

* `replaced` (value: `"replaced"`)

* `revoked` (value: `"revoked"`)

* `archived` (value: `"archived"`)





## Enum: FileSetTypeEnum


* `cell hashing` (value: `"cell hashing"`)

* `cell sorting` (value: `"cell sorting"`)

* `circularized RNA barcode detection` (value: `"circularized RNA barcode detection"`)

* `gRNA sequencing` (value: `"gRNA sequencing"`)

* `oligo-conjugated lipids` (value: `"oligo-conjugated lipids"`)

* `quantification DNA barcode sequencing` (value: `"quantification DNA barcode sequencing"`)

* `variant sequencing` (value: `"variant sequencing"`)




