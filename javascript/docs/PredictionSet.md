# IgvfProjectApi.PredictionSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputFileSets** | **[String]** | The file set(s) required for this prediction set. | [optional] 
**smallScaleLociList** | **[Object]** | A small scale (&lt;&#x3D;100) list of specific chromosomal region(s). | [optional] 
**largeScaleLociList** | **String** | A large scale list (&gt;100) of specific chromosomal regions. | [optional] 
**smallScaleGeneList** | **[String]** | The specific, small scale list of (&lt;&#x3D;100) gene(s) this prediction set targets. | [optional] 
**largeScaleGeneList** | **String** | The large scale list of (&gt;100 genes) this this prediction set targets. | [optional] 
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
**donors** | **[String]** | The donor(s) associated with this file set. | [optional] 
**fileSetType** | **String** | The category that best describes this prediction set. | [optional] 
**scope** | **String** | The scope or scale that this prediction set is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the prediction set. | [optional] 
**files** | **[String]** | The files associated with this file set. | [optional] 
**controlFor** | **[String]** | The file sets for which this file set is a control. | [optional] 
**submittedFilesTimestamp** | **String** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**inputFileSetFor** | **[String]** | The file sets that use this file set as an input. | [optional] 



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


* `pathogenicity` (value: `"pathogenicity"`)

* `functional effect` (value: `"functional effect"`)

* `protein stability` (value: `"protein stability"`)

* `activity level` (value: `"activity level"`)

* `binding effect` (value: `"binding effect"`)





## Enum: ScopeEnum


* `genes` (value: `"genes"`)

* `loci` (value: `"loci"`)

* `genome-wide` (value: `"genome-wide"`)




