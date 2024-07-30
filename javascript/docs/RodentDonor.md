# IgvfProjectApi.RodentDonor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**taxa** | **String** | The species of the organism. | [optional] 
**publications** | **[String]** | The publications associated with this object. | [optional] 
**publicationIdentifiers** | **[String]** | The publication identifiers that provide more information about the object. | [optional] 
**url** | **String** | An external resource with additional information. | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**lotId** | **String** | The lot identifier provided by the originating lab or vendor. | [optional] 
**productId** | **String** | The product identifier provided by the originating lab or vendor. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**accession** | **String** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternateAccessions** | **[String]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **[String]** | Some samples are part of particular data collections. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**revokeDetail** | **String** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**dbxrefs** | **[String]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF donors. | [optional] 
**sex** | **String** | Sex of the donor. | [optional] 
**phenotypicFeatures** | **[String]** | A list of associated phenotypic features of the donor. | [optional] 
**virtual** | **Boolean** | Virtual donors are not representing actual human or model organism donors, samples coming from which were used in experiments, but rather capturing metadata about hypothetical donors that the reported analysis results are relevant for. | [optional] 
**strainBackground** | **String** | The specific parent strain designation of a non-human donor. | [optional] 
**strain** | **String** | The specific strain designation of a non-human donor. | [optional] 
**genotype** | **String** | The genotype of the strain according to accepted nomenclature conventions. | [optional] 
**individualRodent** | **Boolean** | This rodent donor represents an individual rodent. | [optional] 
**rodentIdentifier** | **String** | The identifier for this individual rodent donor. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the rodent donor. | [optional] 



## Enum: TaxaEnum


* `Mus musculus` (value: `"Mus musculus"`)





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





## Enum: SexEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)

* `unspecified` (value: `"unspecified"`)





## Enum: StrainBackgroundEnum


* `A/J (AJ)` (value: `"A/J (AJ)"`)

* `C57BL/6J (B6)` (value: `"C57BL/6J (B6)"`)

* `129S1/SvImJ (129)` (value: `"129S1/SvImJ (129)"`)

* `NOD/ShiLtJ (NOD)` (value: `"NOD/ShiLtJ (NOD)"`)

* `NZO/H1LtJ (NZO)` (value: `"NZO/H1LtJ (NZO)"`)

* `CAST/EiJ (CAST)` (value: `"CAST/EiJ (CAST)"`)

* `PWK/PhJ (PWK)` (value: `"PWK/PhJ (PWK)"`)

* `WSB/EiJ (WSB)` (value: `"WSB/EiJ (WSB)"`)

* `CAST (M. m. castaneus)` (value: `"CAST (M. m. castaneus)"`)

* `WSB (M. m. domesticus)` (value: `"WSB (M. m. domesticus)"`)

* `PWK (M. m. musculus)` (value: `"PWK (M. m. musculus)"`)




