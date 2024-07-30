# IgvfProjectApi.InVitroSystem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**publications** | **[String]** | The publications associated with this object. | [optional] 
**publicationIdentifiers** | **[String]** | The publication identifiers that provide more information about the object. | [optional] 
**taxa** | **String** | The species of the organism. | [optional] 
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
**lowerBoundAge** | **Number** | Lower bound of age of the organism at the time of collection of the sample. | [optional] 
**upperBoundAge** | **Number** | Upper bound of age of the organism at the time of collection of the sample. | [optional] 
**ageUnits** | **String** | The units of time associated with age of the biosample. | [optional] 
**sampleTerms** | **[String]** | Ontology terms identifying a biosample. | [optional] 
**diseaseTerms** | **[String]** | Ontology term of the disease associated with the biosample. | [optional] 
**pooledFrom** | **[String]** | The biosamples this biosample is pooled from. | [optional] 
**partOf** | **String** | Links to a biosample which represents a larger sample from which this sample was taken regardless of whether it is a tissue taken from an organism or smaller slices of a piece of tissue or aliquots of a cell growth. | [optional] 
**originatedFrom** | **String** | Links to a biosample that was originated from due to differentiation, dedifferentiation, reprogramming, or the introduction of a genetic modification. | [optional] 
**treatments** | **[String]** | A list of treatments applied to the biosample with the purpose of perturbation. | [optional] 
**donors** | **[String]** | Donor(s) the sample was derived from. | [optional] 
**biomarkers** | **[String]** | Biological markers that are associated with this sample. | [optional] 
**embryonic** | **Boolean** | Biosample is embryonic. | [optional] 
**modifications** | **[String]** | Links to modifications applied to this biosample. | [optional] 
**cellularSubPool** | **String** | Cellular sub-pool fraction of the sample. Also known as PKR and sub-library. | [optional] 
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
**classifications** | **[String]** | The general category of this type of in vitro system. | [optional] 
**timePostChange** | **Number** | The time that elapsed past the time-point when the cell fate change treatments were introduced. | [optional] 
**timePostChangeUnits** | **String** | The units of time that elapsed past the point when the cell fate change treatments were introduced. | [optional] 
**cellFateChangeTreatments** | **[String]** | A list of treatments applied to the biosample with the purpose of differentiation, dedifferentiation, or reprogramming. | [optional] 
**cellFateChangeProtocol** | **String** | A protocol applied to the biosample with the purpose of differentiation, dedifferentiation, or reprogramming. | [optional] 
**demultiplexedFrom** | **String** | The biosample this in vitro system sample was demultiplexed from using computational methods. | [optional] 
**passageNumber** | **Number** | Number of passages including the passages from the source. | [optional] 
**targetedSampleTerm** | **String** | Ontology term identifying the targeted endpoint biosample resulting from differentation or reprogramming. | [optional] 
**growthMedium** | **String** | A growth medium of the in vitro system. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the sample. | [optional] 
**fileSets** | **[String]** | The file sets linked to this sample. | [optional] 
**multiplexedIn** | **[String]** | The multiplexed samples in which this sample is included. | [optional] 
**sortedFractions** | **[String]** | The fractions into which this sample has been sorted. | [optional] 
**originOf** | **[String]** | The samples which originate from this sample, such as through a process of cell differentiation. | [optional] 
**institutionalCertificates** | **[String]** | The institutional certificates under which use of this sample is approved. | [optional] 
**sex** | **String** |  | [optional] 
**age** | **String** | Age of organism at the time of collection of the sample. | [optional] 
**upperBoundAgeInHours** | **Number** | Upper bound of age of organism in hours at the time of collection of the sample. | [optional] 
**lowerBoundAgeInHours** | **Number** | Lower bound of age of organism in hours at the time of collection of the sample . | [optional] 
**parts** | **[String]** | The parts into which this sample has been divided. | [optional] 
**pooledIn** | **[String]** | The pooled samples in which this sample is included. | [optional] 
**demultiplexedTo** | **[String]** | The parts into which this sample has been demultiplexed. | [optional] 



## Enum: TaxaEnum


* `Homo sapiens` (value: `"Homo sapiens"`)

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





## Enum: AgeUnitsEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)

* `year` (value: `"year"`)





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





## Enum: [ClassificationsEnum]


* `organoid` (value: `"organoid"`)

* `gastruloid` (value: `"gastruloid"`)

* `embryoid` (value: `"embryoid"`)

* `cell line` (value: `"cell line"`)

* `differentiated cell specimen` (value: `"differentiated cell specimen"`)

* `reprogrammed cell specimen` (value: `"reprogrammed cell specimen"`)

* `pooled cell specimen` (value: `"pooled cell specimen"`)





## Enum: TimePostChangeUnitsEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)





## Enum: GrowthMediumEnum


* `DMEM with serum` (value: `"DMEM with serum"`)

* `DMEM without serum` (value: `"DMEM without serum"`)

* `SMBM with serum` (value: `"SMBM with serum"`)

* `SMBM without serum` (value: `"SMBM without serum"`)





## Enum: SexEnum


* `female` (value: `"female"`)

* `male` (value: `"male"`)

* `mixed` (value: `"mixed"`)

* `unspecified` (value: `"unspecified"`)




