# IgvfProjectApi.MeasurementSet

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
**donors** | **[String]** | The donors of the samples associated with this measurement set. | [optional] 
**fileSetType** | **String** | The category that best describes this measurement set. | [optional] 
**assayTerm** | **String** | The assay used to produce data in this measurement set. | [optional] 
**libraryConstructionPlatform** | **String** | The platform used to construct the library sequenced in this measurement set. | [optional] 
**protocols** | **[String]** | Links to the protocol(s) for conducting the assay on Protocols.io. | [optional] 
**preferredAssayTitle** | **String** | The custom lab preferred label for the experiment performed in this measurement set. | [optional] 
**multiomeSize** | **Number** | The number of datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**controlFileSets** | **[String]** | File sets that can serve as scientific controls for this measurement_set. | [optional] 
**sequencingLibraryTypes** | **[String]** | Description of the libraries sequenced in this measurement set. | [optional] 
**auxiliarySets** | **[String]** | The auxiliary sets of files produced alongside raw data from this measurement set. | [optional] 
**externalImageUrl** | **String** | Links to the external site where images produced by this measurement are stored. | [optional] 
**targetedGenes** | **[String]** | A list of genes targeted in this assay. For example, TF ChIP-seq attempts to identify binding sites of a protein encoded by a specific gene. In CRISPR FlowFISH, the modified samples are sorted based on expression of a specific gene. This property differs from small_scale_gene_list in Construct Library Set, which describes genes targeted by the content integrated in the constructs (such as guide RNAs.) | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** |  | [optional] 
**files** | **[String]** | The files associated with this file set. | [optional] 
**controlFor** | **[String]** | The file sets for which this file set is a control. | [optional] 
**submittedFilesTimestamp** | **String** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**inputFileSetFor** | **[String]** | The file sets that use this file set as an input. | [optional] 
**relatedMultiomeDatasets** | **[String]** | Related datasets included in the multiome experiment this measurement set is a part of. | [optional] 



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


* `experimental data` (value: `"experimental data"`)





## Enum: PreferredAssayTitleEnum


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





## Enum: [SequencingLibraryTypesEnum]


* `direct RNA` (value: `"direct RNA"`)

* `exome capture` (value: `"exome capture"`)

* `mRNA enriched` (value: `"mRNA enriched"`)

* `rRNA depleted` (value: `"rRNA depleted"`)

* `polyA depleted` (value: `"polyA depleted"`)

* `polyA enriched` (value: `"polyA enriched"`)




