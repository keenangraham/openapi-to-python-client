# IgvfProjectApi.InstitutionalCertificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
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
**certificateIdentifier** | **String** | A unique identifier for the certificate. | [optional] 
**controlledAccess** | **Boolean** | Indicator of whether the samples are under controlled access. | [optional] 
**dataUseLimitation** | **String** | Code indicating the limitations on data use for data generated from the applicable samples. GRU (General research use): Use of the data is limited only by the terms of the Data Use Certification: these data will be added to the dbGaP Collection. HMB (Health/medical/biomedical): Use of the data is limited to health/medical/biomedical purposes, does not include the study of population origins or ancestry. DS (Disease specific): Use of the data must be related to the specified disease. Other: any other customized limitation. | [optional] 
**dataUseLimitationModifiers** | **[String]** | Code indicating a modifier on the limitations on data use for data generated from the applicable samples. COL: Requestor must provide a letter of collaboration with the primary study investigator(s). GSO: Use of the data is limited to genetic studies only. IRB: Approval Required IRB Requestor must provide documentation of local IRB approval. MDS: Use of the data includes methods development research (e.g., development and testing of software or algorithms). NPU: Use of the data is limited to not-for-profit organizations. PUB: Requestor agrees to make results of studies using the data available to the larger scientific community. | [optional] 
**samples** | **[String]** | Samples covered by this institutional certificate. | [optional] 
**urls** | **[String]** | Link to the institutional certification form. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





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




