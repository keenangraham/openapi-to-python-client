# IgvfProjectApi.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**user** | **String** | The user that is assigned to this access key. | [optional] 
**accessKeyId** | **String** | An access key. | [optional] 
**secretAccessKeyHash** | **String** | A secret access key. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**lab** | **String** | Lab associated with the submission. | 
**award** | **String** | Grant associated with the submission. | 
**analysisStepTypes** | **[String]** | The classification of the software. | [optional] 
**stepLabel** | **String** | Unique lowercased label of the analysis step that includes the relevant assays, the software used, and the purpose of the step, e.g. rampage-grit-peak-calling-step | [optional] 
**title** | **String** | The full name of the user. | [optional] 
**workflow** | **String** | The computational workflow in which this analysis step belongs. | [optional] 
**parents** | **[String]** | The precursor steps. | [optional] 
**inputContentTypes** | **[String]** | The content types used as input for the analysis step. | [optional] 
**outputContentTypes** | **[String]** | The content types produced as output by the analysis step. | [optional] 
**name** | **String** | The preferred viewable name of the workflow. | [optional] 
**analysisStep** | **String** | The analysis step which this version belongs to. | [optional] 
**softwareVersions** | **[String]** | The software versions associated with this publication. | [optional] 
**url** | **String** | An external resource with additional information. | [optional] 
**startDate** | **String** | The date when the award begins. | [optional] 
**endDate** | **String** | The date when the award concludes. | [optional] 
**pis** | **[String]** | Principal Investigator(s) of the grant. | [optional] 
**contactPi** | **String** | The contact Principal Investigator of the grant. | [optional] 
**project** | **String** | The collection of biological data related to a single initiative, originating from a consortium. | [optional] 
**viewingGroup** | **String** | The group that determines which set of data the user has permission to view. | [optional] 
**component** | **String** | The project component the award is associated with. | [optional] 
**classification** | **String** | Sample specific biomarker. | [optional] 
**quantification** | **String** | The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity. | [optional] 
**synonyms** | **[String]** | Synonyms for the term that have been recorded in an ontology. | [optional] 
**gene** | **[String]** | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | [optional] 
**nameQuantification** | **String** | A concatenation of the name and quantification of the biomarker. | [optional] 
**biomarkerFor** | **[String]** | The samples which have been confirmed to have this biomarker. | [optional] 
**attachment** | [**Attachment**](Attachment.md) |  | [optional] 
**documentType** | **String** | The category that best describes the document. | [optional] 
**characterizationMethod** | **String** | The method used for the characterization. | [optional] 
**urls** | **[String]** | Link to the institutional certification form. | [optional] 
**taxa** | **String** | The species of the organism. | [optional] 
**publications** | **[String]** | The publications associated with this object. | [optional] 
**publicationIdentifiers** | **[String]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
**accession** | **String** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternateAccessions** | **[String]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **[String]** | Some samples are part of particular data collections. | [optional] 
**revokeDetail** | **String** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**dbxrefs** | **[String]** | Biosample identifiers from external resources, such as Biosample database or Cellosaurus. | [optional] 
**sex** | **String** |  | [optional] 
**phenotypicFeatures** | **[String]** | A list of associated phenotypic features of the donor. | [optional] 
**virtual** | **Boolean** | Virtual samples are not representing actual physical entities from experiments, but rather capturing metadata about hypothetical samples that the reported analysis results are relevant for. | [optional] 
**relatedDonors** | [**[RelatedDonor]**](RelatedDonor.md) | Familial relations of this donor. | [optional] 
**ethnicities** | **[String]** | Ethnicity of the donor. | [optional] 
**humanDonorIdentifiers** | **[String]** | Identifiers of this human donor. | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**lotId** | **String** | The lot identifier provided by the originating lab or vendor. | [optional] 
**productId** | **String** | The product identifier provided by the originating lab or vendor. | [optional] 
**strainBackground** | **String** | The specific parent strain designation of a non-human donor. | [optional] 
**strain** | **String** | The specific strain designation of a non-human donor. | [optional] 
**genotype** | **String** | The genotype of the strain according to accepted nomenclature conventions. | [optional] 
**individualRodent** | **Boolean** | This rodent donor represents an individual rodent. | [optional] 
**rodentIdentifier** | **String** | The identifier for this individual rodent donor. | [optional] 
**controlledAccess** | **Boolean** | Indicator of whether the samples are under controlled access. | [optional] 
**anvilUrl** | **String** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**transcriptomeAnnotation** | **String** | The annotation and version of the reference resource. | [optional] 
**assembly** | **String** | Genome assembly applicable for the tabular data. | [optional] 
**referenceFiles** | **[String]** | Link to the reference files used to generate this file. | [optional] 
**analysisStepVersion** | **String** | The analysis step version of the file. | [optional] 
**contentMd5sum** | **String** | The MD5sum of the uncompressed file. | [optional] 
**contentType** | **String** | The type of content in the file. | [optional] 
**derivedFrom** | **[String]** | The files participating as inputs into software to produce this output file. | [optional] 
**fileFormat** | **String** | The file format or extension of the file. | [optional] 
**fileFormatSpecifications** | **[String]** | Document that further explains the file format. | [optional] 
**fileSet** | **String** | The file set that this file belongs to. | [optional] 
**fileSize** | **Number** | File size specified in bytes. | [optional] 
**md5sum** | **String** | The md5sum of the file being transferred. | [optional] 
**submittedFileName** | **String** | Original name of the file. | [optional] 
**uploadStatus** | **String** | The upload/validation status of the file. | [optional] 
**validationErrorDetail** | **String** | Explanation of why the file failed the automated content checks. | [optional] 
**redacted** | **Boolean** | Indicates whether the alignments data have been sanitized (redacted) to prevent leakage of private and potentially identifying genomic information. | [optional] 
**filtered** | **Boolean** | Indicates if the signal file is filtered. | [optional] 
**integratedIn** | **[String]** | Construct library set(s) that this file was used for in insert design. | [optional] 
**inputFileFor** | **[String]** | The files which are derived from this file. | [optional] 
**geneListFor** | **[String]** | File Set(s) that this file is a gene list for. | [optional] 
**lociListFor** | **[String]** | File Set(s) that this file is a loci list for. | [optional] 
**href** | **String** | The download path to obtain file. | [optional] 
**s3Uri** | **String** | The S3 URI of public file object. | [optional] 
**uploadCredentials** | **Object** | The upload credentials for S3 to submit the file content. | [optional] 
**contentSummary** | **String** | A summary of the data in the signal file. | [optional] 
**seqspecOf** | **[String]** | Sequence files this file is a seqspec of. | [optional] 
**fileFormatType** | **String** | The subtype of bed files. | [optional] 
**dimension1** | **String** | First dimension of the matrix. | [optional] 
**dimension2** | **String** | Second dimension of the matrix. | [optional] 
**sourceUrl** | **String** | An external resource to the code base of the workflow in github. | [optional] 
**external** | **Boolean** | Indicates whether the file was obtained from an external, non-IGVF source. | [optional] 
**externalId** | **String** | A unique identifier for the file at its original source. | [optional] 
**flowcellId** | **String** | The alphanumeric identifier for the flowcell of a sequencing machine. | [optional] 
**lane** | **Number** | An integer identifying the lane of a sequencing machine. | [optional] 
**readCount** | **Number** | Number of reads in a fastq file. | [optional] 
**minimumReadLength** | **Number** | For high-throughput sequencing, the minimum number of contiguous nucleotides determined by sequencing. | [optional] 
**maximumReadLength** | **Number** | For high-throughput sequencing, the maximum number of contiguous nucleotides determined by sequencing. | [optional] 
**meanReadLength** | **Number** | For high-throughput sequencing, the mean number of contiguous nucleotides determined by sequencing. | [optional] 
**sequencingPlatform** | **String** | The measurement device used to produce sequencing data. | [optional] 
**sequencingKit** | **String** | A reagent kit used with a library to prepare it for sequencing. | [optional] 
**sequencingRun** | **Number** | An ordinal number indicating which sequencing run of the associated library that the file belongs to. | [optional] 
**illuminaReadType** | **String** | The read type of the file. Relevant only for files produced using an Illumina sequencing platform. | [optional] 
**index** | **String** | An Illumina index associated with the file. | [optional] 
**seqspecs** | **[String]** | Link(s) to the associated seqspec YAML configuration file(s). | [optional] 
**strandSpecificity** | **String** | The strandedness of the signal file: plus, minus, or unstranded. | [optional] 
**normalized** | **Boolean** | Indicates if the signal file is normalized. | [optional] 
**startViewPosition** | **String** | The 0-based coordinate for the default starting position when viewing the signal in a genome browser. | [optional] 
**inputFileSets** | **[String]** | The file set(s) required for this prediction set. | [optional] 
**samples** | **[String]** | The samples associated with this publication. | 
**donors** | **[String]** | Donor(s) the sample was derived from. | 
**fileSetType** | **String** | The category that best describes this prediction set. | 
**files** | **[String]** | The files associated with this file set. | [optional] 
**controlFor** | **[String]** | The file sets for which this file set is a control. | [optional] 
**submittedFilesTimestamp** | **String** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**inputFileSetFor** | **[String]** | The file sets that use this file set as an input. | [optional] 
**assayTitles** | **[String]** | Title(s) of assays that produced data analyzed in the analysis set. | [optional] 
**libraryConstructionPlatform** | **String** | The platform used to construct the library sequenced in this measurement set. | [optional] 
**measurementSets** | **[String]** | The measurement sets that link to this auxiliary set. | [optional] 
**smallScaleLociList** | **[Object]** | A small scale (&lt;&#x3D;100) list of specific chromosomal region(s). | [optional] 
**largeScaleLociList** | **String** | A large scale list (&gt;100) of specific chromosomal regions. | [optional] 
**smallScaleGeneList** | **[String]** | The specific, small scale list of (&lt;&#x3D;100) gene(s) this prediction set targets. | [optional] 
**largeScaleGeneList** | **String** | The large scale list of (&gt;100 genes) this this prediction set targets. | [optional] 
**scope** | **String** | The scope or scale that this prediction set is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. | [optional] 
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
**appliedToSamples** | **[String]** | The samples that link to this construct library set. | [optional] 
**assemblies** | **[String]** | The genome assemblies to which the referencing files in the file set are utilizing (e.g., GRCh38). | [optional] 
**transcriptomeAnnotations** | **[String]** | The annotation versions of the reference resource. | [optional] 
**assayTerm** | **String** | The assay used to produce data in this measurement set. | [optional] 
**protocols** | **[String]** | Links to the protocol(s) for preparing the samples on Protocols.io. | [optional] 
**preferredAssayTitle** | **String** | The custom lab preferred label for the experiment performed in this measurement set. | [optional] 
**multiomeSize** | **Number** | The number of datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**controlFileSets** | **[String]** | File sets that can serve as scientific controls for this measurement_set. | [optional] 
**sequencingLibraryTypes** | **[String]** | Description of the libraries sequenced in this measurement set. | [optional] 
**auxiliarySets** | **[String]** | The auxiliary sets of files produced alongside raw data from this measurement set. | [optional] 
**externalImageUrl** | **String** | Links to the external site where images produced by this measurement are stored. | [optional] 
**targetedGenes** | **[String]** | A list of genes targeted in this assay. For example, TF ChIP-seq attempts to identify binding sites of a protein encoded by a specific gene. In CRISPR FlowFISH, the modified samples are sorted based on expression of a specific gene. This property differs from small_scale_gene_list in Construct Library Set, which describes genes targeted by the content integrated in the constructs (such as guide RNAs.) | [optional] 
**relatedMultiomeDatasets** | **[String]** | Related datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**modelName** | **String** | The custom lab name given to this predictive model set. | [optional] 
**modelVersion** | **String** | The semantic version number for this predictive model set. | [optional] 
**predictionObjects** | **[String]** | The objects this predictive model set is targeting. | [optional] 
**modelZooLocation** | **String** | The link to the model on the Kipoi repository. | [optional] 
**softwareVersion** | **String** | Version of software used for the derivation of this model set. | [optional] 
**assessedGenes** | **[String]** | A list of genes assessed in this model set. | [optional] 
**geneid** | **String** | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | [optional] 
**symbol** | **String** | Gene symbol approved by the official nomenclature. | [optional] 
**locations** | [**[GeneLocation1]**](GeneLocation1.md) | Gene locations specified using 1-based, closed coordinates for different versions of reference genome assemblies. | [optional] 
**versionNumber** | **String** | Current ENSEMBL GeneID version number of the gene. | [optional] 
**geneidWithVersion** | **String** | The ENSEMBL GeneID concatenated with its version number. | [optional] 
**caption** | **String** | The caption of the image. | [optional] 
**thumbNail** | **String** | Image url | [optional] 
**downloadUrl** | **String** | Download Url | [optional] 
**certificateIdentifier** | **String** | A unique identifier for the certificate. | [optional] 
**dataUseLimitation** | **String** | Code indicating the limitations on data use for data generated from the applicable samples. GRU (General research use): Use of the data is limited only by the terms of the Data Use Certification: these data will be added to the dbGaP Collection. HMB (Health/medical/biomedical): Use of the data is limited to health/medical/biomedical purposes, does not include the study of population origins or ancestry. DS (Disease specific): Use of the data must be related to the specified disease. Other: any other customized limitation. | [optional] 
**dataUseLimitationModifiers** | **[String]** | Code indicating a modifier on the limitations on data use for data generated from the applicable samples. COL: Requestor must provide a letter of collaboration with the primary study investigator(s). GSO: Use of the data is limited to genetic studies only. IRB: Approval Required IRB Requestor must provide documentation of local IRB approval. MDS: Use of the data includes methods development research (e.g., development and testing of software or algorithms). NPU: Use of the data is limited to not-for-profit organizations. PUB: Requestor agrees to make results of studies using the data available to the larger scientific community. | [optional] 
**pi** | **String** | Principle Investigator of the lab. | [optional] 
**awards** | **[String]** | Grants associated with the lab. | [optional] 
**instituteLabel** | **String** | An abbreviation for the institute the lab is associated with. | [optional] 
**activated** | **Boolean** | A boolean indicating whether the modification has been activated by a chemical agent. | [optional] 
**activatingAgentTermId** | **String** | The CHEBI identifier for the activating agent of the modification. | [optional] 
**activatingAgentTermName** | **String** | The CHEBI name for the activating agent of the modification. | [optional] 
**modality** | **String** | The purpose or intended effect of a modification. | [optional] 
**cas** | **String** | The name of the CRISPR associated protein used in the modification. | [optional] 
**fusedDomain** | **String** | The name of the molecule fused to a Cas protein. | [optional] 
**taggedProtein** | **String** | The tagged protein in modifications in which the Cas nuclease is fused to an antibody. | [optional] 
**casSpecies** | **String** | The originating species of the Cas nuclease. | [optional] 
**biosamplesModified** | **[String]** | The biosamples which have been modified with this modification. | [optional] 
**degronSystem** | **String** | The type of degron system implemented. | [optional] 
**taggedProteins** | **[String]** | The tagged proteins which are targeted for degradation. | [optional] 
**termId** | **String** | An ontology identifier describing a biological sample | [optional] 
**termName** | **String** | Ontology term describing a biological sample, assay, trait, or disease. | [optional] 
**deprecatedNtrTerms** | **[String]** | A list of deprecated NTR terms previously associated with this ontology term. | [optional] 
**isA** | **[String]** | A list of ontology terms which are the nearest ancestor to this ontology term. | [optional] 
**preferredAssayTitles** | **[String]** | The custom lab preferred labels that this assay term may be associated with. | [optional] 
**ancestors** | **[String]** | List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified. | [optional] 
**ontology** | **String** | The ontology in which the term is recorded. | [optional] 
**assaySlims** | **[String]** | A broad categorization of the assay term. | [optional] 
**categorySlims** | **[String]** | The type of feature or interaction measured by the assay. | [optional] 
**objectiveSlims** | **[String]** | The purpose of the assay. | [optional] 
**company** | **String** | The company that developed and sells the instrument. | [optional] 
**sequencingKits** | **[String]** | The available sequencing kits for this platform. | [optional] 
**organSlims** | **[String]** | Organs associated with the sample term. | [optional] 
**cellSlims** | **[String]** | Cells associated with the sample term. | [optional] 
**developmentalSlims** | **[String]** | Developmental stages associated with the sample term. | [optional] 
**systemSlims** | **[String]** | Organ systems associated with the sample term. | [optional] 
**orfId** | **String** | Open reading frame ID. | [optional] 
**proteinId** | **String** | ENSEMBL ProteinID of official nomenclature approved protein. The ProteinID does not include the current version number suffix. | [optional] 
**pctIdenticalProtein** | **Number** | The percentage of identical matches to Ensembl protein. | [optional] 
**pctCoverageProtein** | **Number** | The percentage of ORF covered by Ensembl protein. | [optional] 
**pctCoverageOrf** | **Number** | The percentage of Ensembl protein covered by ORF. | [optional] 
**parent** | **String** | The parent page associated with this page. | [optional] 
**layout** | [**PageLayout**](PageLayout.md) |  | [optional] 
**canonicalUri** | **String** | The path of the page. | [optional] 
**feature** | **String** | The phenotypic feature observed for the donor. | [optional] 
**quantity** | **Number** | A quantity associated with the phenotypic feature, if applicable. | [optional] 
**quantityUnits** | **String** | The unit of measurement for a quantity associated with the phenotypic feature. | [optional] 
**observationDate** | **String** | The date the feature was observed or measured. | [optional] 
**_abstract** | **String** | Abstract of the publication or communication. | [optional] 
**authors** | **String** | The authors of the publication. | [optional] 
**datePublished** | **String** | The date the publication or communication was published; must be in YYYY-MM-DD format. | [optional] 
**dateRevised** | **String** | The date the publication was revised. | [optional] 
**issue** | **String** | The issue of the publication. | [optional] 
**page** | **String** | Pagination of the reference | [optional] 
**volume** | **String** | The volume of the publication. | [optional] 
**journal** | **String** | The journal of the publication. | [optional] 
**publishedBy** | **[String]** | The affiliation of the lab with a larger organization, such as IGVF. | [optional] 
**publicationYear** | **Number** | The year the publication was published. | [optional] 
**fileSets** | **[String]** | The file sets linked to this sample. | [optional] 
**workflows** | **[String]** | The workflows associated with this publication. | [optional] 
**software** | **String** | Unique name of the software package. | [optional] 
**lowerBoundAge** | **Number** | Lower bound of age of the organism at the time of collection of the sample. | [optional] 
**upperBoundAge** | **Number** | Upper bound of age of the organism at the time of collection of the sample. | [optional] 
**ageUnits** | **String** | The units of time associated with age of the biosample. | [optional] 
**sampleTerms** | **[String]** | Ontology terms identifying a biosample. | [optional] 
**diseaseTerms** | **[String]** | Ontology term of the disease associated with the biosample. | [optional] 
**pooledFrom** | **[String]** | The biosamples this biosample is pooled from. | [optional] 
**partOf** | **String** | Links to a biosample which represents a larger sample from which this sample was taken regardless of whether it is a tissue taken from an organism or smaller slices of a piece of tissue or aliquots of a cell growth. | [optional] 
**originatedFrom** | **String** | Links to a biosample that was originated from due to differentiation, dedifferentiation, reprogramming, or the introduction of a genetic modification. | [optional] 
**treatments** | **[String]** | A list of treatments applied to the biosample with the purpose of perturbation. | [optional] 
**biomarkers** | **[String]** | Biological markers that are associated with this sample. | [optional] 
**embryonic** | **Boolean** | Biosample is embryonic. | [optional] 
**modifications** | **[String]** | Links to modifications applied to this biosample. | [optional] 
**cellularSubPool** | **String** | Cellular sub-pool fraction of the sample. Also known as PKR and sub-library. | [optional] 
**startingAmount** | **Number** | The initial quantity of samples obtained. | [optional] 
**startingAmountUnits** | **String** | The units used to quantify the amount of samples obtained. | [optional] 
**dateObtained** | **String** | The date the sample was harvested, dissected or created, depending on the type of the sample. | [optional] 
**sortedFrom** | **String** | Links to a larger sample from which this sample was obtained through sorting. | [optional] 
**sortedFromDetail** | **String** | Detail for sample sorted into fractions capturing information about sorting. | [optional] 
**constructLibrarySets** | **[String]** | The construct library sets of vectors introduced to this sample prior to performing an assay. | [optional] 
**moi** | **Number** | The actual multiplicity of infection (MOI) for vectors introduced to this sample. At least one construct library set must be specified in order to specify MOI. This property should capture the actual MOI, and not the targeted MOI. | [optional] 
**nucleicAcidDelivery** | **String** | Method of introduction of nucleic acid into the cell. | [optional] 
**timePostLibraryDelivery** | **Number** | The time that elapsed past the time-point when the construct library sets were introduced. | [optional] 
**timePostLibraryDeliveryUnits** | **String** | The units of time that elapsed past the point when the construct library sets were introduced. | [optional] 
**classifications** | **[String]** | The general category of this type of sample. | [optional] 
**timePostChange** | **Number** | The time that elapsed past the time-point when the cell fate change treatments were introduced. | [optional] 
**timePostChangeUnits** | **String** | The units of time that elapsed past the point when the cell fate change treatments were introduced. | [optional] 
**cellFateChangeTreatments** | **[String]** | A list of treatments applied to the biosample with the purpose of differentiation, dedifferentiation, or reprogramming. | [optional] 
**cellFateChangeProtocol** | **String** | A protocol applied to the biosample with the purpose of differentiation, dedifferentiation, or reprogramming. | [optional] 
**demultiplexedFrom** | **String** | The biosample this in vitro system sample was demultiplexed from using computational methods. | [optional] 
**passageNumber** | **Number** | Number of passages including the passages from the source. | [optional] 
**targetedSampleTerm** | **String** | Ontology term identifying the targeted endpoint biosample resulting from differentation or reprogramming. | [optional] 
**growthMedium** | **String** | A growth medium of the in vitro system. | [optional] 
**multiplexedIn** | **[String]** | The multiplexed samples in which this sample is included. | [optional] 
**sortedFractions** | **[String]** | The fractions into which this sample has been sorted. | [optional] 
**originOf** | **[String]** | The samples which originate from this sample, such as through a process of cell differentiation. | [optional] 
**institutionalCertificates** | **[String]** | The institutional certificates under which use of this sample is approved. | [optional] 
**age** | **String** | Age of organism at the time of collection of the sample. | [optional] 
**upperBoundAgeInHours** | **Number** | Upper bound of age of organism in hours at the time of collection of the sample. | [optional] 
**lowerBoundAgeInHours** | **Number** | Lower bound of age of organism in hours at the time of collection of the sample . | [optional] 
**parts** | **[String]** | The parts into which this sample has been divided. | [optional] 
**pooledIn** | **[String]** | The pooled samples in which this sample is included. | [optional] 
**demultiplexedTo** | **[String]** | The parts into which this sample has been demultiplexed. | [optional] 
**multiplexedSamples** | **[String]** | The samples multiplexed together to produce this sample. | [optional] 
**barcodeSampleMap** | **String** | The link to the barcode to sample mapping tabular file. | [optional] 
**sampleMaterial** | **String** |  | [optional] 
**pmi** | **Number** | The amount of time elapsed since death. | [optional] 
**pmiUnits** | **String** | The unit in which the PMI time was reported. | [optional] 
**ccfId** | **String** | HubMap Common Coordinate Framework unique identifier corresponding to the organ, biological structure, and spatial location of the tissue specimen. | [optional] 
**preservationMethod** | **String** | The method by which the tissue was preserved: cryopreservation (slow-freeze) or flash-freezing. | [optional] 
**usedBy** | **[String]** | The component(s) of the IGVF consortium that utilize this software. | [optional] 
**versions** | **[String]** | A list of versions that have been released for this software. | [optional] 
**version** | **String** | The version of a particular software. | [optional] 
**downloadId** | **String** | The MD5 checksum, SHA-1 commit ID, image hash, or similar permanent identifier of the particular version of software used. | [optional] 
**downloadedUrl** | **String** | An external resource to track the version of the software downloaded. | [optional] 
**amount** | **Number** | Specific quantity of the applied treatment (used in conjunction with amount_units). | [optional] 
**amountUnits** | **String** | A unit for an amount other than those for time or temperature. | [optional] 
**duration** | **Number** | Duration indicates the time elapsed between the start and end of the treatment. | [optional] 
**durationUnits** | **String** | A unit of time. | [optional] 
**pH** | **Number** | Final pH of the solution containing a chemical compound (if applicable) | [optional] 
**purpose** | **String** | The intended purpose for treating the samples; Activation: treatment is known to activate a pathway in the biosample; Agonist: a substance which is known to initiate a physiological response when combined with a receptor; Antagonist: a substance that is known to interfere with or inhibits the physiological action of another; Control: treatment applied to a sample for control purposes; Differentiation: treatment that is applied to convert a less specialized cell to a more specialized cell; De-differentiation: treatment used to reprogram differentiated cells back to less determined cell states; Perturbation: treatment applied to the sample in order to study the effect of its application; Selection: treatment used to affect biosample in a way that can be used to distinguish cells and select for in the downstream steps; Stimulation: treatment applied to stimulate a cellular pathway. | [optional] 
**postTreatmentTime** | **Number** | Post treatment time in conjunction with post treatment time units is used to specify the time that has passed between the point when biosamples were removed from the treatment solution before being sampled or treated with the next treatment. | [optional] 
**postTreatmentTimeUnits** | **String** | A unit of time. | [optional] 
**temperature** | **Number** | The temperature in Celsius to which the sample was exposed | [optional] 
**temperatureUnits** | **String** | A unit of temperature. | [optional] 
**treatmentType** | **String** | The classification of treatment agent that specifies its exact molecular nature. Chemical type refers to (natural or synthetic) organic/inorganic compounds and also includes drugs, while protein type is restricted to active protein biomolecules that are naturally or artifically synthesized via cellular translation mechanism of converting DNA into a protein. Environmental type referes to other external conditions that directly influence biological processes or reactions within a given environment. Example of chemical type: lactate, ethanol,hydrocortisone, LPS etc. Example of protein type: Interferons, interlukin, antibodies, etc. Example of chemical type: stiffness. | [optional] 
**treatmentTermId** | **String** | Ontology identifier describing a component in the treatment. | [optional] 
**treatmentTermName** | **String** | Ontology term describing a component in the treatment that is the principal component affecting the biosample being treated. Examples: interferon gamma, interleukin-4, Fibroblast growth factor 2, 20-hydroxyecdysone, 5-bromouridine etc. | [optional] 
**depletion** | **Boolean** | Treatment is depleted. | [optional] 
**biosamplesTreated** | **[String]** | The samples which have been treated using this treatment. | [optional] 
**email** | **String** | The email associated with the user&#39;s account. | [optional] 
**firstName** | **String** | The user&#39;s first (given) name. | [optional] 
**lastName** | **String** | The user&#39;s last (family) name. | [optional] 
**submitsFor** | **[String]** | Labs user is authorized to submit data for. | [optional] 
**groups** | **[String]** | Additional access control groups | [optional] 
**viewingGroups** | **[String]** | The group that determines which set of data the user has permission to view. | [optional] 
**jobTitle** | **String** | The role of the user in their lab or organization. | [optional] 
**workflowRepositories** | **[String]** | Resources hosting the workflow. | [optional] 
**standardsPage** | **String** | A link to a page describing the standards for this workflow. | [optional] 
**workflowVersion** | **Number** | The version of this workflow. | [optional] 
**analysisSteps** | **[String]** | The analysis steps which are part of this workflow. | [optional] 



## Enum: StatusEnum


* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)

* `deleted` (value: `"deleted"`)

* `replaced` (value: `"replaced"`)

* `revoked` (value: `"revoked"`)

* `archived` (value: `"archived"`)





## Enum: [AnalysisStepTypesEnum]


* `alignment` (value: `"alignment"`)

* `file format conversion` (value: `"file format conversion"`)

* `signal generation` (value: `"signal generation"`)





## Enum: ProjectEnum


* `community` (value: `"community"`)

* `ENCODE` (value: `"ENCODE"`)

* `IGVF` (value: `"IGVF"`)





## Enum: ViewingGroupEnum


* `community` (value: `"community"`)

* `IGVF` (value: `"IGVF"`)





## Enum: ComponentEnum


* `affiliate` (value: `"affiliate"`)

* `data analysis` (value: `"data analysis"`)

* `data coordination` (value: `"data coordination"`)

* `functional characterization` (value: `"functional characterization"`)

* `mapping` (value: `"mapping"`)

* `networks` (value: `"networks"`)

* `predictive modeling` (value: `"predictive modeling"`)





## Enum: ClassificationEnum


* `cell surface protein` (value: `"cell surface protein"`)

* `marker gene` (value: `"marker gene"`)





## Enum: QuantificationEnum


* `negative` (value: `"negative"`)

* `positive` (value: `"positive"`)

* `low` (value: `"low"`)

* `intermediate` (value: `"intermediate"`)

* `high` (value: `"high"`)





## Enum: DocumentTypeEnum


* `cell fate change protocol` (value: `"cell fate change protocol"`)

* `characterization` (value: `"characterization"`)

* `computational protocol` (value: `"computational protocol"`)

* `experimental protocol` (value: `"experimental protocol"`)

* `file format specification` (value: `"file format specification"`)

* `image` (value: `"image"`)

* `model source data` (value: `"model source data"`)

* `plate map` (value: `"plate map"`)

* `plasmid map` (value: `"plasmid map"`)

* `plasmid sequence` (value: `"plasmid sequence"`)

* `standards` (value: `"standards"`)





## Enum: CharacterizationMethodEnum


* `FACS` (value: `"FACS"`)

* `immunoblot` (value: `"immunoblot"`)

* `immunofluorescence` (value: `"immunofluorescence"`)

* `immunoprecipitation` (value: `"immunoprecipitation"`)

* `mass spectrometry` (value: `"mass spectrometry"`)

* `PCR` (value: `"PCR"`)

* `restriction digest` (value: `"restriction digest"`)

* `RT-qPCR` (value: `"RT-qPCR"`)

* `sequencing` (value: `"sequencing"`)





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





## Enum: SexEnum


* `female` (value: `"female"`)

* `male` (value: `"male"`)

* `mixed` (value: `"mixed"`)

* `unspecified` (value: `"unspecified"`)





## Enum: [EthnicitiesEnum]


* `African American` (value: `"African American"`)

* `African Caribbean` (value: `"African Caribbean"`)

* `Arab` (value: `"Arab"`)

* `Asian` (value: `"Asian"`)

* `Black` (value: `"Black"`)

* `Black African` (value: `"Black African"`)

* `Chinese` (value: `"Chinese"`)

* `Colombian` (value: `"Colombian"`)

* `Dai Chinese` (value: `"Dai Chinese"`)

* `Esan` (value: `"Esan"`)

* `Eskimo` (value: `"Eskimo"`)

* `European` (value: `"European"`)

* `Gambian` (value: `"Gambian"`)

* `Han Chinese` (value: `"Han Chinese"`)

* `Hispanic` (value: `"Hispanic"`)

* `Indian` (value: `"Indian"`)

* `Japanese` (value: `"Japanese"`)

* `Kinh Vietnamese` (value: `"Kinh Vietnamese"`)

* `Luhya` (value: `"Luhya"`)

* `Maasai` (value: `"Maasai"`)

* `Mende` (value: `"Mende"`)

* `Native Hawaiian` (value: `"Native Hawaiian"`)

* `Pacific Islander` (value: `"Pacific Islander"`)

* `Puerto Rican` (value: `"Puerto Rican"`)

* `Yoruba` (value: `"Yoruba"`)





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





## Enum: TranscriptomeAnnotationEnum


* `40` (value: `"GENCODE 40"`)

* `41` (value: `"GENCODE 41"`)

* `42` (value: `"GENCODE 42"`)

* `43` (value: `"GENCODE 43"`)

* `44` (value: `"GENCODE 44"`)

* `45` (value: `"GENCODE 45"`)

* `M30` (value: `"GENCODE M30"`)

* `M31` (value: `"GENCODE M31"`)

* `M32` (value: `"GENCODE M32"`)

* `M33` (value: `"GENCODE M33"`)

* `M34` (value: `"GENCODE M34"`)





## Enum: AssemblyEnum


* `GRCh38` (value: `"GRCh38"`)

* `GRCm39` (value: `"GRCm39"`)





## Enum: FileFormatEnum


* `bed` (value: `"bed"`)

* `csv` (value: `"csv"`)

* `gtf` (value: `"gtf"`)

* `tsv` (value: `"tsv"`)

* `txt` (value: `"txt"`)

* `vcf` (value: `"vcf"`)





## Enum: UploadStatusEnum


* `pending` (value: `"pending"`)

* `file not found` (value: `"file not found"`)

* `invalidated` (value: `"invalidated"`)

* `validated` (value: `"validated"`)





## Enum: FileFormatTypeEnum


* `bed12` (value: `"bed12"`)

* `bed3` (value: `"bed3"`)

* `bed3+` (value: `"bed3+"`)

* `bed5` (value: `"bed5"`)

* `bed6` (value: `"bed6"`)

* `bed6+` (value: `"bed6+"`)

* `bed9` (value: `"bed9"`)

* `bed9+` (value: `"bed9+"`)

* `mpra_starr` (value: `"mpra_starr"`)





## Enum: Dimension1Enum


* `cell` (value: `"cell"`)

* `fragment` (value: `"fragment"`)

* `gene` (value: `"gene"`)

* `time` (value: `"time"`)

* `treatment` (value: `"treatment"`)

* `variant` (value: `"variant"`)

* `genomic position` (value: `"genomic position"`)





## Enum: Dimension2Enum


* `cell` (value: `"cell"`)

* `fragment` (value: `"fragment"`)

* `gene` (value: `"gene"`)

* `time` (value: `"time"`)

* `treatment` (value: `"treatment"`)

* `variant` (value: `"variant"`)

* `genomic position` (value: `"genomic position"`)





## Enum: SequencingKitEnum


* `HiSeq SBS Kit v4` (value: `"HiSeq SBS Kit v4"`)

* `HiSeq SR Cluster Kit v4-cBot-HS` (value: `"HiSeq SR Cluster Kit v4-cBot-HS"`)

* `HiSeq PE Cluster Kit v4-cBot-HS` (value: `"HiSeq PE Cluster Kit v4-cBot-HS"`)

* `HiSeq SR Rapid Cluster Kit v2` (value: `"HiSeq SR Rapid Cluster Kit v2"`)

* `HiSeq PE Rapid Cluster Kit v2` (value: `"HiSeq PE Rapid Cluster Kit v2"`)

* `HiSeq Rapid SBS Kit v2` (value: `"HiSeq Rapid SBS Kit v2"`)

* `HiSeq 3000/4000 SBS Kit` (value: `"HiSeq 3000/4000 SBS Kit"`)

* `HiSeq 3000/4000 SR Cluster Kit` (value: `"HiSeq 3000/4000 SR Cluster Kit"`)

* `HiSeq 3000/4000 PE Cluster Kit` (value: `"HiSeq 3000/4000 PE Cluster Kit"`)

* `MiSeq Reagent Kit v2` (value: `"MiSeq Reagent Kit v2"`)

* `NextSeq 500 Mid Output Kit` (value: `"NextSeq 500 Mid Output Kit"`)

* `NextSeq 500 High Output Kit` (value: `"NextSeq 500 High Output Kit"`)

* `NextSeq 500 Mid Output v2 Kit` (value: `"NextSeq 500 Mid Output v2 Kit"`)

* `NextSeq 500 High Output v2 Kit` (value: `"NextSeq 500 High Output v2 Kit"`)

* `NextSeq 500/550 Mid-Output v2.5 Kit` (value: `"NextSeq 500/550 Mid-Output v2.5 Kit"`)

* `NextSeq 500/550 High-Output v2.5 Kit` (value: `"NextSeq 500/550 High-Output v2.5 Kit"`)

* `TG NextSeq 500/550 Mid-Output Kit v2.5` (value: `"TG NextSeq 500/550 Mid-Output Kit v2.5"`)

* `TG NextSeq 500/550 High-Output Kit v2.5` (value: `"TG NextSeq 500/550 High-Output Kit v2.5"`)

* `NextSeq 1000/2000 P1 Reagent Kit` (value: `"NextSeq 1000/2000 P1 Reagent Kit"`)

* `NextSeq 1000/2000 P2 Reagent Kit` (value: `"NextSeq 1000/2000 P2 Reagent Kit"`)

* `NextSeq 1000/2000 P3 Reagent Kit` (value: `"NextSeq 1000/2000 P3 Reagent Kit"`)

* `NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit` (value: `"NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit"`)

* `NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit` (value: `"NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit"`)

* `NextSeq 2000 P3 XLEAP-SBS Reagent Kit` (value: `"NextSeq 2000 P3 XLEAP-SBS Reagent Kit"`)

* `NextSeq 2000 P4 XLEAP-SBS Reagent Kit` (value: `"NextSeq 2000 P4 XLEAP-SBS Reagent Kit"`)

* `NovaSeq 6000 SP Reagent Kit v1.5` (value: `"NovaSeq 6000 SP Reagent Kit v1.5"`)

* `NovaSeq 6000 S1 Reagent Kit v1.5` (value: `"NovaSeq 6000 S1 Reagent Kit v1.5"`)

* `NovaSeq 6000 S2 Reagent Kit v1.5` (value: `"NovaSeq 6000 S2 Reagent Kit v1.5"`)

* `NovaSeq 6000 S4 Reagent Kit v1.5` (value: `"NovaSeq 6000 S4 Reagent Kit v1.5"`)

* `NovaSeq X Series 10B Reagent Kit` (value: `"NovaSeq X Series 10B Reagent Kit"`)

* `ONT Ligation Sequencing Kit V14` (value: `"ONT Ligation Sequencing Kit V14"`)

* `Sequel sequencing kit 3.0` (value: `"Sequel sequencing kit 3.0"`)

* `Sequel II sequencing kit 2.0` (value: `"Sequel II sequencing kit 2.0"`)





## Enum: IlluminaReadTypeEnum


* `R1` (value: `"R1"`)

* `R2` (value: `"R2"`)

* `R3` (value: `"R3"`)

* `I1` (value: `"I1"`)

* `I2` (value: `"I2"`)





## Enum: StrandSpecificityEnum


* `plus` (value: `"plus"`)

* `minus` (value: `"minus"`)

* `unstranded` (value: `"unstranded"`)





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





## Enum: [PredictionObjectsEnum]


* `coding variants` (value: `"coding variants"`)

* `non-coding variants` (value: `"non-coding variants"`)

* `all variants` (value: `"all variants"`)

* `regulatory elements` (value: `"regulatory elements"`)

* `genes` (value: `"genes"`)





## Enum: DataUseLimitationEnum


* `DS` (value: `"DS"`)

* `GRU` (value: `"GRU"`)

* `HMB` (value: `"HMB"`)

* `other` (value: `"other"`)





## Enum: [DataUseLimitationModifiersEnum]


* `COL` (value: `"COL"`)

* `GSO` (value: `"GSO"`)

* `IRB` (value: `"IRB"`)

* `MDS` (value: `"MDS"`)

* `NPU` (value: `"NPU"`)

* `PUB` (value: `"PUB"`)





## Enum: ModalityEnum


* `degradation` (value: `"degradation"`)





## Enum: CasEnum


* `Cas9` (value: `"Cas9"`)

* `Cas12a` (value: `"Cas12a"`)

* `Cas13` (value: `"Cas13"`)

* `dCas9` (value: `"dCas9"`)

* `nCas9` (value: `"nCas9"`)

* `SpG` (value: `"SpG"`)

* `SpRY` (value: `"SpRY"`)





## Enum: FusedDomainEnum


* `2xVP64` (value: `"2xVP64"`)

* `3xVP64` (value: `"3xVP64"`)

* `ABE8e` (value: `"ABE8e"`)

* `ABE8.20` (value: `"ABE8.20"`)

* `ANTI-FLAG` (value: `"ANTI-FLAG"`)

* `BE4` (value: `"BE4"`)

* `BE4max` (value: `"BE4max"`)

* `eA3A` (value: `"eA3A"`)

* `eA3A-T31A` (value: `"eA3A-T31A"`)

* `eA3A-T44D-S45A` (value: `"eA3A-T44D-S45A"`)

* `KOX1-KRAB` (value: `"KOX1-KRAB"`)

* `M-MLV RT (PE2)` (value: `"M-MLV RT (PE2)"`)

* `p300` (value: `"p300"`)

* `TdCBE` (value: `"TdCBE"`)

* `TdCGBE` (value: `"TdCGBE"`)

* `TdDE` (value: `"TdDE"`)

* `VPH` (value: `"VPH"`)

* `VP64` (value: `"VP64"`)

* `VP64-p65-Rta (VPR)` (value: `"VP64-p65-Rta (VPR)"`)

* `ZIM3-KRAB` (value: `"ZIM3-KRAB"`)





## Enum: CasSpeciesEnum


* `Streptococcus pyogenes (Sp)` (value: `"Streptococcus pyogenes (Sp)"`)

* `Staphylococcus aureus (Sa)` (value: `"Staphylococcus aureus (Sa)"`)

* `Campylobacter jejuni (Cj)` (value: `"Campylobacter jejuni (Cj)"`)

* `Neisseria meningitidis (Nm)` (value: `"Neisseria meningitidis (Nm)"`)





## Enum: DegronSystemEnum


* `AID` (value: `"AID"`)

* `AlissAid` (value: `"AlissAid"`)

* `ssAID` (value: `"ssAID"`)





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





## Enum: CompanyEnum


* `10X Genomics` (value: `"10X Genomics"`)

* `Illumina` (value: `"Illumina"`)

* `Life Technologies` (value: `"Life Technologies"`)

* `Oxford Nanopore Technologies` (value: `"Oxford Nanopore Technologies"`)

* `Pacific Biosciences` (value: `"Pacific Biosciences"`)

* `Parse Biosciences` (value: `"Parse Biosciences"`)

* `Roche` (value: `"Roche"`)





## Enum: [SequencingKitsEnum]


* `HiSeq SBS Kit v4` (value: `"HiSeq SBS Kit v4"`)

* `HiSeq SR Cluster Kit v4-cBot-HS` (value: `"HiSeq SR Cluster Kit v4-cBot-HS"`)

* `HiSeq PE Cluster Kit v4-cBot-HS` (value: `"HiSeq PE Cluster Kit v4-cBot-HS"`)

* `HiSeq SR Rapid Cluster Kit v2` (value: `"HiSeq SR Rapid Cluster Kit v2"`)

* `HiSeq PE Rapid Cluster Kit v2` (value: `"HiSeq PE Rapid Cluster Kit v2"`)

* `HiSeq Rapid SBS Kit v2` (value: `"HiSeq Rapid SBS Kit v2"`)

* `HiSeq 3000/4000 SBS Kit` (value: `"HiSeq 3000/4000 SBS Kit"`)

* `HiSeq 3000/4000 SR Cluster Kit` (value: `"HiSeq 3000/4000 SR Cluster Kit"`)

* `HiSeq 3000/4000 PE Cluster Kit` (value: `"HiSeq 3000/4000 PE Cluster Kit"`)

* `MiSeq Reagent Kit v2` (value: `"MiSeq Reagent Kit v2"`)

* `NextSeq 500 Mid Output Kit` (value: `"NextSeq 500 Mid Output Kit"`)

* `NextSeq 500 High Output Kit` (value: `"NextSeq 500 High Output Kit"`)

* `NextSeq 500 Mid Output v2 Kit` (value: `"NextSeq 500 Mid Output v2 Kit"`)

* `NextSeq 500 High Output v2 Kit` (value: `"NextSeq 500 High Output v2 Kit"`)

* `NextSeq 500/550 Mid-Output v2.5 Kit` (value: `"NextSeq 500/550 Mid-Output v2.5 Kit"`)

* `NextSeq 500/550 High-Output v2.5 Kit` (value: `"NextSeq 500/550 High-Output v2.5 Kit"`)

* `TG NextSeq 500/550 Mid-Output Kit v2.5` (value: `"TG NextSeq 500/550 Mid-Output Kit v2.5"`)

* `TG NextSeq 500/550 High-Output Kit v2.5` (value: `"TG NextSeq 500/550 High-Output Kit v2.5"`)

* `NextSeq 1000/2000 P1 Reagent Kit` (value: `"NextSeq 1000/2000 P1 Reagent Kit"`)

* `NextSeq 1000/2000 P2 Reagent Kit` (value: `"NextSeq 1000/2000 P2 Reagent Kit"`)

* `NextSeq 1000/2000 P3 Reagent Kit` (value: `"NextSeq 1000/2000 P3 Reagent Kit"`)

* `NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit` (value: `"NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit"`)

* `NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit` (value: `"NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit"`)

* `NextSeq 2000 P3 XLEAP-SBS Reagent Kit` (value: `"NextSeq 2000 P3 XLEAP-SBS Reagent Kit"`)

* `NextSeq 2000 P4 XLEAP-SBS Reagent Kit` (value: `"NextSeq 2000 P4 XLEAP-SBS Reagent Kit"`)

* `NovaSeq 6000 SP Reagent Kit v1.5` (value: `"NovaSeq 6000 SP Reagent Kit v1.5"`)

* `NovaSeq 6000 S1 Reagent Kit v1.5` (value: `"NovaSeq 6000 S1 Reagent Kit v1.5"`)

* `NovaSeq 6000 S2 Reagent Kit v1.5` (value: `"NovaSeq 6000 S2 Reagent Kit v1.5"`)

* `NovaSeq 6000 S4 Reagent Kit v1.5` (value: `"NovaSeq 6000 S4 Reagent Kit v1.5"`)

* `NovaSeq X Series 10B Reagent Kit` (value: `"NovaSeq X Series 10B Reagent Kit"`)

* `ONT Ligation Sequencing Kit V14` (value: `"ONT Ligation Sequencing Kit V14"`)

* `Sequel sequencing kit 3.0` (value: `"Sequel sequencing kit 3.0"`)

* `Sequel II sequencing kit 2.0` (value: `"Sequel II sequencing kit 2.0"`)





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





## Enum: [PublishedByEnum]


* `community` (value: `"community"`)

* `IGVF` (value: `"IGVF"`)

* `ENCODE` (value: `"ENCODE"`)





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





## Enum: SampleMaterialEnum


* `undefined` (value: `"undefined"`)

* `inorganic` (value: `"inorganic"`)

* `synthetic` (value: `"synthetic"`)

* `organic` (value: `"organic"`)





## Enum: PmiUnitsEnum


* `second` (value: `"second"`)

* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)





## Enum: PreservationMethodEnum


* `cryopreservation` (value: `"cryopreservation"`)

* `flash-freezing` (value: `"flash-freezing"`)





## Enum: [UsedByEnum]


* `consortium analysis` (value: `"consortium analysis"`)

* `DACC` (value: `"DACC"`)

* `processing pipelines` (value: `"processing pipelines"`)





## Enum: AmountUnitsEnum


* `mg/kg` (value: `"mg/kg"`)

* `mg/mL` (value: `"mg/mL"`)

* `mM` (value: `"mM"`)

* `ng/mL` (value: `"ng/mL"`)

* `nM` (value: `"nM"`)

* `percent` (value: `"percent"`)

* `μg/kg` (value: `"μg/kg"`)

* `μg/kg2` (value: `"μg/kg"`)

* `μg/mL` (value: `"μg/mL"`)

* `μM` (value: `"μM"`)

* `kpa` (value: `"kpa"`)





## Enum: DurationUnitsEnum


* `second` (value: `"second"`)

* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)





## Enum: PurposeEnum


* `activation` (value: `"activation"`)

* `agonist` (value: `"agonist"`)

* `antagonist` (value: `"antagonist"`)

* `control` (value: `"control"`)

* `differentiation` (value: `"differentiation"`)

* `de-differentiation` (value: `"de-differentiation"`)

* `perturbation` (value: `"perturbation"`)

* `selection` (value: `"selection"`)

* `stimulation` (value: `"stimulation"`)





## Enum: PostTreatmentTimeUnitsEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)





## Enum: TemperatureUnitsEnum


* `Celsius` (value: `"Celsius"`)





## Enum: TreatmentTypeEnum


* `chemical` (value: `"chemical"`)

* `protein` (value: `"protein"`)

* `environmental` (value: `"environmental"`)





## Enum: [GroupsEnum]


* `admin` (value: `"admin"`)

* `read-only-admin` (value: `"read-only-admin"`)

* `verified` (value: `"verified"`)





## Enum: [ViewingGroupsEnum]


* `community` (value: `"community"`)

* `IGVF` (value: `"IGVF"`)





## Enum: JobTitleEnum


* `Principal Investigator` (value: `"Principal Investigator"`)

* `Co-Investigator` (value: `"Co-Investigator"`)

* `Project Manager` (value: `"Project Manager"`)

* `Submitter` (value: `"Submitter"`)

* `Post Doc` (value: `"Post Doc"`)

* `Data Wrangler` (value: `"Data Wrangler"`)

* `Scientist` (value: `"Scientist"`)

* `Computational Scientist` (value: `"Computational Scientist"`)

* `Software Developer` (value: `"Software Developer"`)

* `NHGRI staff member` (value: `"NHGRI staff member"`)

* `Other` (value: `"Other"`)




