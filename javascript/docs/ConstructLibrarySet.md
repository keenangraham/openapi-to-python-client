# IgvfProjectApi.ConstructLibrarySet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**smallScaleLociList** | [**[Locus1]**](Locus1.md) | A small scale (&lt;&#x3D;100) list of specific chromosomal region(s). | [optional] 
**largeScaleLociList** | **String** | A large scale list (&gt;100) of specific chromosomal regions. | [optional] 
**smallScaleGeneList** | **[String]** | The specific, small scale list of (&lt;&#x3D;100) gene(s) this construct library was designed to target. This property differs from targeted_genes in Measurement Set, which describes genes targeted for binding sites or used for sorting by expression. | [optional] 
**largeScaleGeneList** | **String** | The large scale list of (&gt;100 genes) this construct library was designed to target. | [optional] 
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**publications** | **[String]** | The publications associated with this object. | [optional] 
**publicationIdentifiers** | **[String]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**lotId** | **String** | The lot identifier provided by the originating lab or vendor. | [optional] 
**productId** | **String** | The product or catalog identifier provided following deposition to addgene.org. | [optional] 
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
**fileSetType** | **String** | The type or category of this construct library set. | [optional] 
**scope** | **String** | The scope or scale that this construct library is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. If exon is specified, an exon identifier and the associated gene will need to be listed in exon and genes properties. If tile is specified, a tile identifier, start and stop coordinates, and the associated gene will need to be listed in tile and small_scale_gene_list or large_scale_gene_list properties. | [optional] 
**selectionCriteria** | **[String]** | The criteria used to select the sequence material cloned into the library. | [optional] 
**integratedContentFiles** | **[String]** | The files containing sequence material of interest either used for insert design or directly cloned into vectors in this library. | [optional] 
**associatedPhenotypes** | **[String]** | Ontological terms for diseases or phenotypes associated with the sequence material cloned in this construct library. | [optional] 
**orfList** | **[String]** | List of Open Reading Frame this construct library was designed to target. | [optional] 
**exon** | **String** | An identifier in plain text for the specific exon in an expression vector library. The associated gene must be listed in the small_scale_gene_list property. | [optional] 
**tile** | [**Tile**](Tile.md) |  | [optional] 
**guideType** | **String** | The design of guides used in a CRISPR library, paired-guide (pgRNA) or single-guide (sgRNA). | [optional] 
**tilingModality** | **String** | The tiling modality of guides across elements or loci in a CRISPR library. | [optional] 
**averageGuideCoverage** | **Number** | The average number of guides targeting each element of interest in the library. | [optional] 
**lowerBoundGuideCoverage** | **Number** | Lower bound of the number of guides targeting each element of interest in the library. | [optional] 
**upperBoundGuideCoverage** | **Number** | Upper bound of the number of guides targeting each element of interest in the library. | [optional] 
**averageInsertSize** | **Number** | The average size of the inserts cloned into vectors in the library. | [optional] 
**lowerBoundInsertSize** | **Number** | Lower bound of the size of the inserts cloned in vectors in the library. | [optional] 
**upperBoundInsertSize** | **Number** | Upper bound of the size of the inserts cloned in vectors in the library. | [optional] 
**targeton** | **String** | An identifier in plain text for the specific targeton in an editing template library. The associated gene must be listed in the small_scale_gene_list property. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** |  | [optional] 
**files** | **[String]** | The files associated with this file set. | [optional] 
**controlFor** | **[String]** | The file sets for which this file set is a control. | [optional] 
**submittedFilesTimestamp** | **String** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**inputFileSetFor** | **[String]** | The file sets that use this file set as an input. | [optional] 
**appliedToSamples** | **[String]** | The samples that link to this construct library set. | [optional] 



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


* `guide library` (value: `"guide library"`)

* `reporter library` (value: `"reporter library"`)

* `expression vector library` (value: `"expression vector library"`)

* `editing template library` (value: `"editing template library"`)





## Enum: ScopeEnum


* `tile` (value: `"tile"`)

* `exon` (value: `"exon"`)

* `genes` (value: `"genes"`)

* `loci` (value: `"loci"`)

* `genome-wide` (value: `"genome-wide"`)

* `interactors` (value: `"interactors"`)

* `alleles` (value: `"alleles"`)

* `targeton` (value: `"targeton"`)





## Enum: [SelectionCriteriaEnum]


* `accessible genome regions` (value: `"accessible genome regions"`)

* `candidate cis-regulatory elements` (value: `"candidate cis-regulatory elements"`)

* `chromatin states` (value: `"chromatin states"`)

* `phenotype-associated variants` (value: `"phenotype-associated variants"`)

* `DNase hypersensitive sites` (value: `"DNase hypersensitive sites"`)

* `genes` (value: `"genes"`)

* `histone modifications` (value: `"histone modifications"`)

* `protein interactors` (value: `"protein interactors"`)

* `sequence variants` (value: `"sequence variants"`)

* `synthetic elements` (value: `"synthetic elements"`)

* `transcription start sites` (value: `"transcription start sites"`)

* `TF binding sites` (value: `"TF binding sites"`)





## Enum: GuideTypeEnum


* `sgRNA` (value: `"sgRNA"`)

* `pgRNA` (value: `"pgRNA"`)





## Enum: TilingModalityEnum


* `peak tiling` (value: `"peak tiling"`)

* `full tiling` (value: `"full tiling"`)

* `sparse peaks` (value: `"sparse peaks"`)




