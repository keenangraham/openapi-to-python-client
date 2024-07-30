# IgvfProjectApi.CrisprModification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**lotId** | **String** | The lot identifier provided by the originating lab or vendor. | [optional] 
**productId** | **String** | The product or catalog identifier provided following deposition to addgene.org. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**activated** | **Boolean** | A boolean indicating whether the modification has been activated by a chemical agent. | [optional] 
**activatingAgentTermId** | **String** | The CHEBI identifier for the activating agent of the modification. | [optional] 
**activatingAgentTermName** | **String** | The CHEBI name for the activating agent of the modification. | [optional] 
**modality** | **String** | The purpose or intended effect of a modification. | [optional] 
**cas** | **String** | The name of the CRISPR associated protein used in the modification. | [optional] 
**fusedDomain** | **String** | The name of the molecule fused to a Cas protein. | [optional] 
**taggedProtein** | **String** | The tagged protein in modifications in which the Cas nuclease is fused to an antibody. | [optional] 
**casSpecies** | **String** | The originating species of the Cas nuclease. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** |  | [optional] 
**biosamplesModified** | **[String]** | The biosamples which have been modified with this modification. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: ModalityEnum


* `activation` (value: `"activation"`)

* `base editing` (value: `"base editing"`)

* `cutting` (value: `"cutting"`)

* `interference` (value: `"interference"`)

* `knockout` (value: `"knockout"`)

* `localizing` (value: `"localizing"`)

* `prime editing` (value: `"prime editing"`)





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




