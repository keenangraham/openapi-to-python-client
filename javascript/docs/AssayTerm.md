# IgvfProjectApi.AssayTerm

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
**termId** | **String** | An ontology term identifier describing an assay. | [optional] 
**termName** | **String** | Ontology term describing a biological sample, assay, trait, or disease. | [optional] 
**deprecatedNtrTerms** | **[String]** | A list of deprecated NTR terms previously associated with this ontology term. | [optional] 
**isA** | **[String]** | A list of ontology terms which are the nearest ancestor to this ontology term. | [optional] 
**preferredAssayTitles** | **[String]** | The custom lab preferred labels that this assay term may be associated with. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the ontology term. | [optional] 
**name** | **String** | A unique identifier for the ontology term, reformatted from the original term ID. | [optional] 
**synonyms** | **[String]** | Synonyms for the term that have been recorded in an ontology. | [optional] 
**ancestors** | **[String]** | List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified. | [optional] 
**ontology** | **String** | The ontology in which the term is recorded. | [optional] 
**assaySlims** | **[String]** | A broad categorization of the assay term. | [optional] 
**categorySlims** | **[String]** | The type of feature or interaction measured by the assay. | [optional] 
**objectiveSlims** | **[String]** | The purpose of the assay. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: [PreferredAssayTitlesEnum]


* `10x multiome` (value: `"10x multiome"`)

* `10x multiome with MULTI-seq` (value: `"10x multiome with MULTI-seq"`)

* `AAV-MPRA` (value: `"AAV-MPRA"`)

* `ATAC-seq` (value: `"ATAC-seq"`)

* `CERES-seq` (value: `"CERES-seq"`)

* `Cell painting` (value: `"Cell painting"`)

* `CRISPR FlowFISH` (value: `"CRISPR FlowFISH"`)

* `DOGMA-seq` (value: `"DOGMA-seq"`)

* `Histone ChIP-seq` (value: `"Histone ChIP-seq"`)

* `Hi-C` (value: `"Hi-C"`)

* `lentiMPRA` (value: `"lentiMPRA"`)

* `MERFISH` (value: `"MERFISH"`)

* `MIAA` (value: `"MIAA"`)

* `mN2H` (value: `"mN2H"`)

* `MPRA` (value: `"MPRA"`)

* `MPRA (scQer)` (value: `"MPRA (scQer)"`)

* `MULTI-seq` (value: `"MULTI-seq"`)

* `Parse SPLiT-seq` (value: `"Parse SPLiT-seq"`)

* `Perturb-seq` (value: `"Perturb-seq"`)

* `RNA-seq` (value: `"RNA-seq"`)

* `SGE` (value: `"SGE"`)

* `scATAC-seq` (value: `"scATAC-seq"`)

* `scNT-seq` (value: `"scNT-seq"`)

* `scNT-seq2` (value: `"scNT-seq2"`)

* `scRNA-seq` (value: `"scRNA-seq"`)

* `semi-qY2H` (value: `"semi-qY2H"`)

* `SHARE-seq` (value: `"SHARE-seq"`)

* `smFISH` (value: `"smFISH"`)

* `snATAC-seq` (value: `"snATAC-seq"`)

* `snmC-Seq2` (value: `"snmC-Seq2"`)

* `snMCT-seq` (value: `"snMCT-seq"`)

* `snM3C-seq` (value: `"snM3C-seq"`)

* `snRNA-seq` (value: `"snRNA-seq"`)

* `SUPERSTARR` (value: `"SUPERSTARR"`)

* `TAP-seq` (value: `"TAP-seq"`)

* `TF ChIP-seq` (value: `"TF ChIP-seq"`)

* `VAMP-seq` (value: `"VAMP-seq"`)

* `Variant FlowFISH` (value: `"Variant FlowFISH"`)

* `Variant painting` (value: `"Variant painting"`)

* `Y2H` (value: `"Y2H"`)

* `yN2H` (value: `"yN2H"`)




