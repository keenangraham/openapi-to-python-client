# Search200ResponseGraphInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**user** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**access_key_id** | **str** | An access key. | [optional] 
**secret_access_key_hash** | **str** | A secret access key. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | 
**analysis_step_types** | **List[str]** | The classification of the software. | 
**step_label** | **str** | Unique lowercased label of the analysis step that includes the relevant assays, the software used, and the purpose of the step, e.g. rampage-grit-peak-calling-step | 
**title** | **str** | The full name of the user. | 
**workflow** | [**AnalysisStepWorkflow**](AnalysisStepWorkflow.md) |  | 
**parents** | [**List[AnalysisStepParentsInner]**](AnalysisStepParentsInner.md) | The precursor steps. | [optional] 
**input_content_types** | [**List[InputContentType]**](InputContentType.md) | The content types used as input for the analysis step. | 
**output_content_types** | [**List[OutputContentType]**](OutputContentType.md) | The content types produced as output by the analysis step. | 
**name** | **str** | The preferred viewable name of the workflow. | 
**url** | **str** | An external resource with additional information. | [optional] 
**start_date** | **date** | The date when the award begins. | [optional] 
**end_date** | **date** | The date when the award concludes. | [optional] 
**pis** | [**List[AccessKeySubmittedBy]**](AccessKeySubmittedBy.md) | Principal Investigator(s) of the grant. | [optional] 
**contact_pi** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**project** | **str** | The collection of biological data related to a single initiative, originating from a consortium. | 
**viewing_group** | **str** | The group that determines which set of data the user has permission to view. | [optional] 
**component** | **str** | The project component the award is associated with. | [optional] 
**classification** | **str** | Sample specific biomarker. | [optional] 
**quantification** | **str** | The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity. | 
**synonyms** | **List[str]** | Synonyms for the term that have been recorded in an ontology. | [optional] 
**gene** | [**List[BiomarkerGene]**](BiomarkerGene.md) | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | 
**name_quantification** | **str** | A concatenation of the name and quantification of the biomarker. | [optional] 
**attachment** | [**Attachment**](Attachment.md) |  | 
**document_type** | **str** | The category that best describes the document. | 
**characterization_method** | **str** | The method used for the characterization. | [optional] 
**urls** | **List[str]** | Link to the institutional certification form. | 
**taxa** | **str** | The species of the organism. | 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | 
**documents** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**dbxrefs** | **List[str]** | Biosample identifiers from external resources, such as Biosample database or Cellosaurus. | 
**sex** | **str** |  | 
**phenotypic_features** | [**List[RodentDonorPhenotypicFeaturesInner]**](RodentDonorPhenotypicFeaturesInner.md) | A list of associated phenotypic features of the donor. | [optional] 
**virtual** | **bool** | Virtual samples are not representing actual physical entities from experiments, but rather capturing metadata about hypothetical samples that the reported analysis results are relevant for. | [optional] [default to False]
**related_donors** | [**List[RelatedDonor]**](RelatedDonor.md) | Familial relations of this donor. | [optional] 
**ethnicities** | **List[str]** | Ethnicity of the donor. | [optional] 
**human_donor_identifiers** | **List[str]** | Identifiers of this human donor. | [optional] 
**sources** | [**List[RodentDonorSourcesInner]**](RodentDonorSourcesInner.md) | The originating lab(s) or vendor(s). | 
**lot_id** | **str** | The lot identifier provided by the originating lab or vendor. | [optional] 
**product_id** | **str** | The product identifier provided by the originating lab or vendor. | [optional] 
**strain_background** | **str** | The specific parent strain designation of a non-human donor. | [optional] 
**strain** | **str** | The specific strain designation of a non-human donor. | 
**genotype** | **str** | The genotype of the strain according to accepted nomenclature conventions. | [optional] 
**individual_rodent** | **bool** | This rodent donor represents an individual rodent. | [optional] [default to False]
**rodent_identifier** | **str** | The identifier for this individual rodent donor. | [optional] 
**controlled_access** | **bool** | Indicator of whether the samples are under controlled access. | 
**anvil_url** | **str** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**transcriptome_annotation** | **str** | The annotation and version of the reference resource. | 
**assembly** | **str** | Genome assembly applicable for the tabular data. | [optional] 
**reference_files** | [**List[AlignmentFileReferenceFilesInner]**](AlignmentFileReferenceFilesInner.md) | Link to the reference files used to generate this file. | 
**content_md5sum** | **str** | The MD5sum of the uncompressed file. | [optional] 
**content_type** | **str** | The type of content in the file. | 
**derived_from** | [**List[AlignmentFileDerivedFromInner]**](AlignmentFileDerivedFromInner.md) | The files participating as inputs into software to produce this output file. | 
**file_format** | **str** | The file format or extension of the file. | 
**file_format_specifications** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Document that further explains the file format. | [optional] 
**file_set** | [**AlignmentFileFileSet**](AlignmentFileFileSet.md) |  | 
**file_size** | **int** | File size specified in bytes. | [optional] 
**md5sum** | **str** | The md5sum of the file being transferred. | 
**submitted_file_name** | **str** | Original name of the file. | [optional] 
**upload_status** | **str** | The upload/validation status of the file. | [optional] [default to 'pending']
**validation_error_detail** | **str** | Explanation of why the file failed the automated content checks. | [optional] 
**redacted** | **bool** | Indicates whether the alignments data have been sanitized (redacted) to prevent leakage of private and potentially identifying genomic information. | 
**filtered** | **bool** | Indicates if the signal file is filtered. | 
**integrated_in** | **List[object]** | Construct library set(s) that this file was used for in insert design. | [optional] 
**gene_list_for** | **List[object]** | File Set(s) that this file is a gene list for. | [optional] 
**loci_list_for** | **List[object]** | File Set(s) that this file is a loci list for. | [optional] 
**href** | **str** | The download path to obtain file. | [optional] 
**s3_uri** | **str** | The S3 URI of public file object. | [optional] 
**upload_credentials** | **object** | The upload credentials for S3 to submit the file content. | [optional] 
**content_summary** | **str** | A summary of the data in the signal file. | [optional] 
**seqspec_of** | [**List[ConfigurationFileSeqspecOfInner]**](ConfigurationFileSeqspecOfInner.md) | Sequence files this file is a seqspec of. | [optional] 
**file_format_type** | **str** | The subtype of bed files. | [optional] 
**dimension1** | **str** | First dimension of the matrix. | 
**dimension2** | **str** | Second dimension of the matrix. | 
**source_url** | **str** | An external resource to the code base of the workflow in github. | 
**external** | **bool** | Indicates whether the file was obtained from an external, non-IGVF source. | [optional] [default to False]
**external_id** | **str** | A unique identifier for the file at its original source. | [optional] 
**flowcell_id** | **str** | The alphanumeric identifier for the flowcell of a sequencing machine. | [optional] 
**lane** | **int** | An integer identifying the lane of a sequencing machine. | [optional] 
**read_count** | **int** | Number of reads in a fastq file. | [optional] 
**minimum_read_length** | **int** | For high-throughput sequencing, the minimum number of contiguous nucleotides determined by sequencing. | [optional] 
**maximum_read_length** | **int** | For high-throughput sequencing, the maximum number of contiguous nucleotides determined by sequencing. | [optional] 
**mean_read_length** | **float** | For high-throughput sequencing, the mean number of contiguous nucleotides determined by sequencing. | [optional] 
**sequencing_platform** | [**SequenceFileSequencingPlatform**](SequenceFileSequencingPlatform.md) |  | 
**sequencing_kit** | **str** | A reagent kit used with a library to prepare it for sequencing. | [optional] 
**sequencing_run** | **int** | An ordinal number indicating which sequencing run of the associated library that the file belongs to. | 
**illumina_read_type** | **str** | The read type of the file. Relevant only for files produced using an Illumina sequencing platform. | [optional] 
**index** | **str** | An Illumina index associated with the file. | [optional] 
**seqspecs** | **List[object]** | Link(s) to the associated seqspec YAML configuration file(s). | [optional] 
**strand_specificity** | **str** | The strandedness of the signal file: plus, minus, or unstranded. | 
**normalized** | **bool** | Indicates if the signal file is normalized. | [optional] 
**start_view_position** | **str** | The 0-based coordinate for the default starting position when viewing the signal in a genome browser. | [optional] 
**samples** | [**List[AnalysisSetSamplesInner]**](AnalysisSetSamplesInner.md) | Samples covered by this institutional certificate. | 
**donors** | [**List[AnalysisSetDonorsInner]**](AnalysisSetDonorsInner.md) | Donor(s) the sample was derived from. | 
**file_set_type** | **str** | The category that best describes this prediction set. | 
**input_file_sets** | [**List[AlignmentFileFileSet]**](AlignmentFileFileSet.md) | The file set(s) that served as inputs for the derivation of this model set. | [optional] 
**files** | **List[object]** | The files associated with this file set. | [optional] 
**control_for** | **List[object]** | The file sets for which this file set is a control. | [optional] 
**submitted_files_timestamp** | **datetime** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**input_file_set_for** | **List[object]** | The Analysis Sets that use this File Set as an input. | [optional] 
**assay_titles** | **List[str]** | Title(s) of assays that produced data analyzed in the analysis set. | [optional] 
**library_construction_platform** | [**SequenceFileSequencingPlatform**](SequenceFileSequencingPlatform.md) |  | [optional] 
**measurement_sets** | **List[object]** | The measurement sets that link to this auxiliary set. | [optional] 
**small_scale_loci_list** | **List[object]** | A small scale (&lt;&#x3D;100) list of specific chromosomal region(s). | [optional] 
**large_scale_loci_list** | [**OneOfReferenceFileTabularFilestring**](OneOfReferenceFileTabularFilestring.md) |  | [optional] 
**small_scale_gene_list** | [**List[OneOfGenestring]**](OneOfGenestring.md) | The specific, small scale list of (&lt;&#x3D;100) gene(s) this prediction set targets. | [optional] 
**large_scale_gene_list** | [**OneOfReferenceFileTabularFilestring**](OneOfReferenceFileTabularFilestring.md) |  | [optional] 
**scope** | **str** | The scope or scale that this prediction set is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. | 
**selection_criteria** | **List[str]** | The criteria used to select the sequence material cloned into the library. | 
**integrated_content_files** | [**List[IntegratedContentFilesInner]**](IntegratedContentFilesInner.md) | The files containing sequence material of interest either used for insert design or directly cloned into vectors in this library. | [optional] 
**associated_phenotypes** | [**List[AssociatedPhenotypesInner]**](AssociatedPhenotypesInner.md) | Ontological terms for diseases or phenotypes associated with the sequence material cloned in this construct library. | [optional] 
**orf_list** | [**List[ListOfOpenReadingFramesORFInner]**](ListOfOpenReadingFramesORFInner.md) | List of Open Reading Frame this construct library was designed to target. | [optional] 
**exon** | **str** | An identifier in plain text for the specific exon in an expression vector library. The associated gene must be listed in the small_scale_gene_list property. | [optional] 
**tile** | [**Tile**](Tile.md) |  | [optional] 
**guide_type** | **str** | The design of guides used in a CRISPR library, paired-guide (pgRNA) or single-guide (sgRNA). | [optional] 
**tiling_modality** | **str** | The tiling modality of guides across elements or loci in a CRISPR library. | [optional] 
**average_guide_coverage** | **float** | The average number of guides targeting each element of interest in the library. | [optional] 
**lower_bound_guide_coverage** | **int** | Lower bound of the number of guides targeting each element of interest in the library. | [optional] 
**upper_bound_guide_coverage** | **int** | Upper bound of the number of guides targeting each element of interest in the library. | [optional] 
**average_insert_size** | **float** | The average size of the inserts cloned into vectors in the library. | [optional] 
**lower_bound_insert_size** | **int** | Lower bound of the size of the inserts cloned in vectors in the library. | [optional] 
**upper_bound_insert_size** | **int** | Upper bound of the size of the inserts cloned in vectors in the library. | [optional] 
**applied_to_samples** | **List[object]** | The samples that link to this construct library set. | [optional] 
**assemblies** | **List[str]** | The genome assemblies to which the referencing files in the file set are utilizing (e.g., GRCh38). | [optional] 
**transcriptome_annotations** | **List[str]** | The annotation versions of the reference resource. | [optional] 
**assay_term** | [**MeasurementSetAssayTerm**](MeasurementSetAssayTerm.md) |  | 
**protocols** | **List[str]** | Links to the protocol(s) for preparing the samples on Protocols.io. | [optional] 
**preferred_assay_title** | **str** | The custom lab preferred label for the experiment performed in this measurement set. | [optional] 
**multiome_size** | **int** | The number of datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**control_file_sets** | [**List[AlignmentFileFileSet]**](AlignmentFileFileSet.md) | File sets that can serve as scientific controls for this measurement_set. | [optional] 
**sequencing_library_types** | **List[str]** | Description of the libraries sequenced in this measurement set. | [optional] 
**auxiliary_sets** | [**List[MeasurementSetAuxiliarySetsInner]**](MeasurementSetAuxiliarySetsInner.md) | The auxiliary sets of files produced alongside raw data from this measurement set. | [optional] 
**external_image_url** | **str** | Links to the external site where images produced by this measurement are stored. | [optional] 
**related_multiome_datasets** | [**List[MeasurementSetRelatedMultiomeDatasetsInner]**](MeasurementSetRelatedMultiomeDatasetsInner.md) | Related datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**model_name** | **str** | The custom lab name given to this predictive model set. | 
**model_version** | **str** | The semantic version number for this predictive model set. | 
**prediction_objects** | **List[str]** | The objects this predictive model set is targeting. | 
**model_zoo_location** | **str** | The link to the model on the Kipoi repository. | [optional] 
**software_version** | [**ModelSetSoftwareVersion**](ModelSetSoftwareVersion.md) |  | 
**geneid** | **str** | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | 
**symbol** | **str** | Gene symbol approved by the official nomenclature. | 
**locations** | [**List[GeneLocation]**](GeneLocation.md) | Gene locations specified using 1-based, closed coordinates for different versions of reference genome assemblies. | [optional] 
**version_number** | **str** | Current ENSEMBL GeneID version number of the gene. | 
**geneid_with_version** | **str** | The ENSEMBL GeneID concatenated with its version number. | [optional] 
**caption** | **str** | The caption of the image. | [optional] 
**thumb_nail** | **str** | Image url | [optional] 
**download_url** | **str** | Download Url | [optional] 
**certificate_identifier** | **str** | A unique identifier for the certificate. | 
**data_use_limitation** | **str** | Code indicating the limitations on data use for data generated from the applicable samples. GRU (General research use): Use of the data is limited only by the terms of the Data Use Certification: these data will be added to the dbGaP Collection. HMB (Health/medical/biomedical): Use of the data is limited to health/medical/biomedical purposes, does not include the study of population origins or ancestry. DS (Disease specific): Use of the data must be related to the specified disease. Other: any other customized limitation. | [optional] 
**data_use_limitation_modifiers** | **List[str]** | Code indicating a modifier on the limitations on data use for data generated from the applicable samples. COL: Requestor must provide a letter of collaboration with the primary study investigator(s). GSO: Use of the data is limited to genetic studies only. IRB: Approval Required IRB Requestor must provide documentation of local IRB approval. MDS: Use of the data includes methods development research (e.g., development and testing of software or algorithms). NPU: Use of the data is limited to not-for-profit organizations. PUB: Requestor agrees to make results of studies using the data available to the larger scientific community. | [optional] 
**pi** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | 
**awards** | [**List[AnalysisStepAward]**](AnalysisStepAward.md) | Grants associated with the lab. | [optional] 
**institute_label** | **str** | An abbreviation for the institute the lab is associated with. | [default to '']
**cas** | **str** | The name of the CRISPR associated protein used in the modification. | 
**fused_domain** | **str** | The name of the molecule fused to a Cas protein. | [optional] 
**modality** | **str** | The purpose or intended effect of a CRISPR modification. | 
**tagged_protein** | [**BiomarkerGene**](BiomarkerGene.md) |  | [optional] 
**cas_species** | **str** | The originating species of the Cas nuclease. | 
**activated** | **bool** | A boolean indicating whether the modification has been activated by a chemical agent. | [optional] 
**activating_agent_term_id** | **str** | The CHEBI identifier for the activating agent of the modification. | [optional] 
**activating_agent_term_name** | **str** | The CHEBI name for the activating agent of the modification. | [optional] 
**term_id** | **str** | An ontology identifier describing a biological sample | 
**term_name** | **str** | Ontology term describing a biological sample, assay, trait, or disease. | 
**deprecated_ntr_terms** | **List[str]** | A list of deprecated NTR terms previously associated with this ontology term. | [optional] 
**is_a** | [**List[AssayTermIsAInner]**](AssayTermIsAInner.md) | A list of ontology terms which are the nearest ancestor to this ontology term. | [optional] 
**preferred_assay_titles** | **List[str]** | The custom lab preferred labels that this assay term may be associated with. | [optional] 
**ancestors** | **List[str]** | List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified. | [optional] 
**ontology** | **str** | The ontology in which the term is recorded. | [optional] 
**assay_slims** | **List[str]** | A broad categorization of the assay term. | [optional] 
**category_slims** | **List[str]** | The type of feature or interaction measured by the assay. | [optional] 
**objective_slims** | **List[str]** | The purpose of the assay. | [optional] 
**company** | **str** | The company that developed and sells the instrument. | [optional] 
**sequencing_kits** | **List[str]** | The available sequencing kits for this platform. | [optional] 
**organ_slims** | **List[str]** | Organs associated with the sample term. | [optional] 
**cell_slims** | **List[str]** | Cells associated with the sample term. | [optional] 
**developmental_slims** | **List[str]** | Developmental stages associated with the sample term. | [optional] 
**system_slims** | **List[str]** | Organ systems associated with the sample term. | [optional] 
**orf_id** | **str** | Open reading frame ID. | 
**protein_id** | **str** | ENSEMBL ProteinID of official nomenclature approved protein. The ProteinID does not include the current version number suffix. | [optional] 
**pct_identical_protein** | **float** | The percentage of identical matches to Ensembl protein. | [optional] 
**pct_coverage_protein** | **float** | The percentage of ORF covered by Ensembl protein. | [optional] 
**pct_coverage_orf** | **float** | The percentage of Ensembl protein covered by ORF. | [optional] 
**parent** | [**PageParent**](PageParent.md) |  | [optional] 
**layout** | [**PageLayout**](PageLayout.md) |  | [optional] 
**canonical_uri** | **str** | The path of the page. | [optional] 
**feature** | [**PhenotypicFeatureFeature**](PhenotypicFeatureFeature.md) |  | 
**quantity** | **float** | A quantity associated with the phenotypic feature, if applicable. | [optional] 
**quantity_units** | **str** | The unit of measurement for a quantity associated with the phenotypic feature. | [optional] 
**observation_date** | **date** | The date the feature was observed or measured. | [optional] 
**abstract** | **str** | Abstract of the publication or communication. | [optional] 
**authors** | **str** | The authors of the publication. | [optional] 
**date_published** | **date** | The date the publication or communication was published; must be in YYYY-MM-DD format. | [optional] 
**date_revised** | **date** | The date the publication was revised. | [optional] 
**issue** | **str** | The issue of the publication. | [optional] 
**page** | **str** | Pagination of the reference | [optional] 
**volume** | **str** | The volume of the publication. | [optional] 
**journal** | **str** | The journal of the publication. | [optional] 
**published_by** | **List[str]** | The affiliation of the lab with a larger organization, such as IGVF. | [optional] [default to [IGVF]]
**publication_year** | **int** | The year the publication was published. | [optional] 
**lower_bound_age** | **float** | Lower bound of age of the organism at the time of collection of the sample. | [optional] 
**upper_bound_age** | **float** | Upper bound of age of the organism at the time of collection of the sample. | [optional] 
**age_units** | **str** | The units of time associated with age of the biosample. | [optional] 
**sample_terms** | [**List[InVitroSystemSampleTermsInner]**](InVitroSystemSampleTermsInner.md) | Ontology terms identifying a biosample. | [default to [25d5ad53-15fd-4a44-878a-ece2f7e86509]]
**disease_terms** | [**List[PhenotypicFeatureFeature]**](PhenotypicFeatureFeature.md) | Ontology term of the disease associated with the biosample. | [optional] 
**pooled_from** | [**List[InVitroSystemPooledFromInner]**](InVitroSystemPooledFromInner.md) | The biosamples this biosample is pooled from. | [optional] 
**part_of** | [**InVitroSystemPooledFromInner**](InVitroSystemPooledFromInner.md) |  | [optional] 
**originated_from** | [**InVitroSystemPooledFromInner**](InVitroSystemPooledFromInner.md) |  | [optional] 
**treatments** | [**List[InVitroSystemTreatmentsInner]**](InVitroSystemTreatmentsInner.md) | A list of treatments applied to the biosample with the purpose of perturbation. | [optional] 
**biomarkers** | [**List[InVitroSystemBiomarkersInner]**](InVitroSystemBiomarkersInner.md) | Biological markers that are associated with this sample. | [optional] 
**embryonic** | **bool** | Biosample is embryonic. | [optional] 
**modifications** | [**List[InVitroSystemModificationsInner]**](InVitroSystemModificationsInner.md) | Links to modifications applied to this biosample. | [optional] 
**cellular_sub_pool** | **str** | Cellular sub-pool fraction of the sample. Also known as PKR and sub-library. | [optional] 
**starting_amount** | **float** | The initial quantity of samples obtained. | [optional] 
**starting_amount_units** | **str** | The units used to quantify the amount of samples obtained. | [optional] 
**date_obtained** | **date** | The date the sample was harvested, dissected or created, depending on the type of the sample. | [optional] 
**sorted_from** | [**AnalysisSetSamplesInner**](AnalysisSetSamplesInner.md) |  | [optional] 
**sorted_from_detail** | **str** | Detail for sample sorted into fractions capturing information about sorting. | [optional] 
**construct_library_sets** | [**List[InVitroSystemConstructLibrarySetsInner]**](InVitroSystemConstructLibrarySetsInner.md) | The construct library sets of vectors introduced to this sample prior to performing an assay. | [optional] 
**moi** | **float** | The actual multiplicity of infection (MOI) for vectors introduced to this sample. At least one construct library set must be specified in order to specify MOI. This property should capture the actual MOI, and not the targeted MOI. | [optional] 
**nucleic_acid_delivery** | **str** | Method of introduction of nucleic acid into the cell. | [optional] 
**time_post_library_delivery** | **float** | The time that elapsed past the time-point when the construct library sets were introduced. | [optional] 
**time_post_library_delivery_units** | **str** | The units of time that elapsed past the point when the construct library sets were introduced. | [optional] 
**classifications** | **List[str]** | The general category of this type of sample. | 
**time_post_change** | **float** | The time that elapsed past the time-point when the cell fate change treatments were introduced. | [optional] 
**time_post_change_units** | **str** | The units of time that elapsed past the point when the cell fate change treatments were introduced. | [optional] 
**cell_fate_change_treatments** | [**List[InVitroSystemTreatmentsInner]**](InVitroSystemTreatmentsInner.md) | A list of treatments applied to the biosample with the purpose of differentiation, dedifferentiation, or reprogramming. | [optional] 
**cell_fate_change_protocol** | [**RodentDonorDocumentsInner**](RodentDonorDocumentsInner.md) |  | [optional] 
**demultiplexed_from** | [**InVitroSystemDemultiplexedFrom**](InVitroSystemDemultiplexedFrom.md) |  | [optional] 
**passage_number** | **int** | Number of passages including the passages from the source. | [optional] 
**targeted_sample_term** | [**InVitroSystemSampleTermsInner**](InVitroSystemSampleTermsInner.md) |  | [optional] 
**growth_medium** | **str** | A growth medium of the in vitro system. | [optional] 
**file_sets** | **List[object]** | The file sets linked to this sample. | [optional] 
**multiplexed_in** | **List[object]** | The multiplexed samples in which this sample is included. | [optional] 
**sorted_fractions** | **List[object]** | The fractions into which this sample has been sorted. | [optional] 
**origin_of** | **List[object]** | The samples which originate from this sample, such as through a process of cell differentiation. | [optional] 
**institutional_certificates** | **List[object]** | The institutional certificates under which use of this sample is approved. | [optional] 
**age** | **str** | Age of organism at the time of collection of the sample. | [optional] 
**upper_bound_age_in_hours** | **float** | Upper bound of age of organism in hours at the time of collection of the sample. | [optional] 
**lower_bound_age_in_hours** | **float** | Lower bound of age of organism in hours at the time of collection of the sample . | [optional] 
**parts** | **List[object]** | The parts into which this sample has been divided. | [optional] 
**pooled_in** | **List[object]** | The pooled samples in which this sample is included. | [optional] 
**demultiplexed_to** | **List[object]** | The parts into which this sample has been demultiplexed. | [optional] 
**multiplexed_samples** | [**List[AnalysisSetSamplesInner]**](AnalysisSetSamplesInner.md) | The samples multiplexed together to produce this sample. | 
**barcode_sample_map** | [**MultiplexedSampleBarcodeSampleMap**](MultiplexedSampleBarcodeSampleMap.md) |  | [optional] 
**sample_material** | **str** |  | [default to 'undefined']
**pmi** | **int** | The amount of time elapsed since death. | [optional] 
**pmi_units** | **str** | The unit in which the PMI time was reported. | [optional] 
**ccf_id** | **str** | HubMap Common Coordinate Framework unique identifier corresponding to the organ, biological structure, and spatial location of the tissue specimen. | [optional] 
**preservation_method** | **str** | The method by which the tissue was preserved: cryopreservation (slow-freeze) or flash-freezing. | [optional] 
**used_by** | **List[str]** | The component(s) of the IGVF consortium that utilize this software. | [optional] 
**versions** | [**List[ModelSetSoftwareVersion]**](ModelSetSoftwareVersion.md) | A list of versions that have been released for this software. | [optional] 
**software** | [**OneOfSoftwarestring**](OneOfSoftwarestring.md) |  | [optional] 
**version** | **str** | The version of a particular software. | [optional] 
**download_id** | **str** | The MD5 checksum, SHA-1 commit ID, image hash, or similar permanent identifier of the particular version of software used. | [optional] 
**downloaded_url** | **str** | An external resource to track the version of the software downloaded. | [optional] 
**amount** | **float** | Specific quantity of the applied treatment (used in conjunction with amount_units). | [optional] 
**amount_units** | **str** | A unit for an amount other than those for time or temperature. | [optional] 
**duration** | **float** | Duration indicates the time elapsed between the start and end of the treatment. | [optional] 
**duration_units** | **str** | A unit of time. | [optional] 
**p_h** | **float** | Final pH of the solution containing a chemical compound (if applicable) | [optional] 
**purpose** | **str** | The intended purpose for treating the samples; Activation: treatment is known to activate a pathway in the biosample; Agonist: a substance which is known to initiate a physiological response when combined with a receptor; Antagonist: a substance that is known to interfere with or inhibits the physiological action of another; Control: treatment applied to a sample for control purposes; Differentiation: treatment that is applied to convert a less specialized cell to a more specialized cell; De-differentiation: treatment used to reprogram differentiated cells back to less determined cell states; Perturbation: treatment applied to the sample in order to study the effect of its application; Selection: treatment used to affect biosample in a way that can be used to distinguish cells and select for in the downstream steps; Stimulation: treatment applied to stimulate a cellular pathway. | 
**post_treatment_time** | **float** | Post treatment time in conjunction with post treatment time units is used to specify the time that has passed between the point when biosamples were removed from the treatment solution before being sampled or treated with the next treatment. | [optional] 
**post_treatment_time_units** | **str** | A unit of time. | [optional] 
**temperature** | **float** | The temperature in Celsius to which the sample was exposed | [optional] 
**temperature_units** | **str** | A unit of temperature. | [optional] 
**treatment_type** | **str** | The classification of treatment agent that specifies its exact molecular nature. Chemical type refers to (natural or synthetic) organic/inorganic compounds and also includes drugs, while protein type is restricted to active protein biomolecules that are naturally or artifically synthesized via cellular translation mechanism of converting DNA into a protein. Environmental type referes to other external conditions that directly influence biological processes or reactions within a given environment. Example of chemical type: lactate, ethanol,hydrocortisone, LPS etc. Example of protein type: Interferons, interlukin, antibodies, etc. Example of chemical type: stiffness. | 
**treatment_term_id** | **str** | Ontology identifier describing a component in the treatment. | [optional] 
**treatment_term_name** | **str** | Ontology term describing a component in the treatment that is the principal component affecting the biosample being treated. Examples: interferon gamma, interleukin-4, Fibroblast growth factor 2, 20-hydroxyecdysone, 5-bromouridine etc. | 
**depletion** | **bool** | Treatment is depleted. | 
**email** | **str** | The email associated with the user&#39;s account. | 
**first_name** | **str** | The user&#39;s first (given) name. | 
**last_name** | **str** | The user&#39;s last (family) name. | 
**submits_for** | [**List[AnalysisStepLab]**](AnalysisStepLab.md) | Labs user is authorized to submit data for. | [optional] 
**groups** | **List[str]** | Additional access control groups | [optional] 
**viewing_groups** | **List[str]** | The group that determines which set of data the user has permission to view. | [optional] 
**job_title** | **str** | The role of the user in their lab or organization. | [optional] 
**workflow_repositories** | **List[str]** | Resources hosting the workflow. | [optional] 
**standards_page** | [**WorkflowStandardsPage**](WorkflowStandardsPage.md) |  | [optional] 
**analysis_steps** | **List[object]** | The analysis steps which are part of this workflow. | [optional] 

## Example

```python
from openapi_client.models.search200_response_graph_inner import Search200ResponseGraphInner

# TODO update the JSON string below
json = "{}"
# create an instance of Search200ResponseGraphInner from a JSON string
search200_response_graph_inner_instance = Search200ResponseGraphInner.from_json(json)
# print the JSON string representation of the object
print(Search200ResponseGraphInner.to_json())

# convert the object into a dict
search200_response_graph_inner_dict = search200_response_graph_inner_instance.to_dict()
# create an instance of Search200ResponseGraphInner from a dict
search200_response_graph_inner_from_dict = Search200ResponseGraphInner.from_dict(search200_response_graph_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

