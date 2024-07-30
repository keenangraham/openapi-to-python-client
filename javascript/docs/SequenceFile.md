# IgvfProjectApi.SequenceFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlledAccess** | **Boolean** | Boolean value, indicating the file being controlled access, if true. | [optional] 
**anvilUrl** | **String** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
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
**analysisStepVersion** | **String** | The analysis step version of the file. | [optional] 
**contentMd5sum** | **String** | The MD5sum of the uncompressed file. | [optional] 
**contentType** | **String** | The type of content in the file. | [optional] 
**dbxrefs** | **[String]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects. | [optional] 
**derivedFrom** | **[String]** | The files participating as inputs into software to produce this output file. | [optional] 
**fileFormat** | **String** | The file format or extension of the file. | [optional] 
**fileFormatSpecifications** | **[String]** | Document that further explains the file format. | [optional] 
**fileSet** | **String** | The file set that this file belongs to. | [optional] 
**fileSize** | **Number** | File size specified in bytes. | [optional] 
**md5sum** | **String** | The md5sum of the file being transferred. | [optional] 
**submittedFileName** | **String** | Original name of the file. | [optional] 
**uploadStatus** | **String** | The upload/validation status of the file. | [optional] 
**validationErrorDetail** | **String** | Explanation of why the file failed the automated content checks. | [optional] 
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
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the sequence file. | [optional] 
**integratedIn** | **[String]** | Construct library set(s) that this file was used for in insert design. | [optional] 
**inputFileFor** | **[String]** | The files which are derived from this file. | [optional] 
**geneListFor** | **[String]** | File Set(s) that this file is a gene list for. | [optional] 
**lociListFor** | **[String]** | File Set(s) that this file is a loci list for. | [optional] 
**href** | **String** | The download path to obtain file. | [optional] 
**s3Uri** | **String** | The S3 URI of public file object. | [optional] 
**uploadCredentials** | **Object** | The upload credentials for S3 to submit the file content. | [optional] 
**seqspecs** | **[String]** | Link(s) to the associated seqspec YAML configuration file(s). | [optional] 



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





## Enum: FileFormatEnum


* `bam` (value: `"bam"`)

* `fastq` (value: `"fastq"`)

* `pod5` (value: `"pod5"`)





## Enum: UploadStatusEnum


* `pending` (value: `"pending"`)

* `file not found` (value: `"file not found"`)

* `invalidated` (value: `"invalidated"`)

* `validated` (value: `"validated"`)





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




