# IgvfProjectApi.PlatformTerm

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
**termId** | **String** | An ontology term identifier describing a platform. | [optional] 
**termName** | **String** | Ontology term describing a biological sample, assay, trait, or disease. | [optional] 
**deprecatedNtrTerms** | **[String]** | A list of deprecated NTR terms previously associated with this ontology term. | [optional] 
**isA** | **[String]** | A list of ontology terms which are the nearest ancestor to this ontology term. | [optional] 
**company** | **String** | The company that developed and sells the instrument. | [optional] 
**sequencingKits** | **[String]** | The available sequencing kits for this platform. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the ontology term. | [optional] 
**name** | **String** | A unique identifier for the ontology term, reformatted from the original term ID. | [optional] 
**synonyms** | **[String]** | Synonyms for the term that have been recorded in an ontology. | [optional] 
**ancestors** | **[String]** | List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified. | [optional] 
**ontology** | **String** | The ontology in which the term is recorded. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





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




