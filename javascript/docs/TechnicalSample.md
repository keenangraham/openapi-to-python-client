# IgvfProjectApi.TechnicalSample

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
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
**startingAmount** | **Number** | The initial quantity of samples obtained. | [optional] 
**startingAmountUnits** | **String** | The units used to quantify the amount of samples obtained. | [optional] 
**dbxrefs** | **[String]** | Biosample identifiers from external resources, such as Biosample database or Cellosaurus. | [optional] 
**dateObtained** | **String** | The date the sample was harvested, dissected or created, depending on the type of the sample. | [optional] 
**sortedFrom** | **String** | Links to a larger sample from which this sample was obtained through sorting. | [optional] 
**sortedFromDetail** | **String** | Detail for sample sorted into fractions capturing information about sorting. | [optional] 
**virtual** | **Boolean** | Virtual samples are not representing actual physical entities from experiments, but rather capturing metadata about hypothetical samples that the reported analysis results are relevant for. | [optional] 
**constructLibrarySets** | **[String]** | The construct library sets of vectors introduced to this sample prior to performing an assay. | [optional] 
**moi** | **Number** | The actual multiplicity of infection (MOI) for vectors introduced to this sample. At least one construct library set must be specified in order to specify MOI. This property should capture the actual MOI, and not the targeted MOI. | [optional] 
**nucleicAcidDelivery** | **String** | Method of introduction of nucleic acid into the cell. | [optional] 
**timePostLibraryDelivery** | **Number** | The time that elapsed past the time-point when the construct library sets were introduced. | [optional] 
**timePostLibraryDeliveryUnits** | **String** | The units of time that elapsed past the point when the construct library sets were introduced. | [optional] 
**protocols** | **[String]** | Links to the protocol(s) for preparing the samples on Protocols.io. | [optional] 
**sampleMaterial** | **String** |  | [optional] 
**taxa** | **String** |  | [optional] 
**sampleTerms** | **[String]** | Ontology terms identifying a technical sample. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of this sample. | [optional] 
**fileSets** | **[String]** | The file sets linked to this sample. | [optional] 
**multiplexedIn** | **[String]** | The multiplexed samples in which this sample is included. | [optional] 
**sortedFractions** | **[String]** | The fractions into which this sample has been sorted. | [optional] 
**originOf** | **[String]** | The samples which originate from this sample, such as through a process of cell differentiation. | [optional] 
**institutionalCertificates** | **[String]** | The institutional certificates under which use of this sample is approved. | [optional] 
**classifications** | **[String]** | The general category of this type of sample. | [optional] 



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





## Enum: StartingAmountUnitsEnum


* `cells` (value: `"cells"`)

* `cells/ml` (value: `"cells/ml"`)

* `g` (value: `"g"`)

* `items` (value: `"items"`)

* `mg` (value: `"mg"`)

* `whole animals` (value: `"whole animals"`)

* `whole embryos` (value: `"whole embryos"`)

* `μg` (value: `"μg"`)

* `ng` (value: `"ng"`)





## Enum: NucleicAcidDeliveryEnum


* `transfection` (value: `"transfection"`)

* `adenoviral transduction` (value: `"adenoviral transduction"`)

* `lentiviral transduction` (value: `"lentiviral transduction"`)





## Enum: TimePostLibraryDeliveryUnitsEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)





## Enum: SampleMaterialEnum


* `undefined` (value: `"undefined"`)

* `inorganic` (value: `"inorganic"`)

* `synthetic` (value: `"synthetic"`)

* `organic` (value: `"organic"`)





## Enum: TaxaEnum


* `Saccharomyces cerevisiae` (value: `"Saccharomyces cerevisiae"`)

* `Homo sapiens` (value: `"Homo sapiens"`)




