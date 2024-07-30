# IgvfProjectApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the metadata object. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**email** | **String** | The email associated with the user&#39;s account. | [optional] 
**firstName** | **String** | The user&#39;s first (given) name. | [optional] 
**lastName** | **String** | The user&#39;s last (family) name. | [optional] 
**lab** | **String** | Lab user is primarily associated with. | [optional] 
**submitsFor** | **[String]** | Labs user is authorized to submit data for. | [optional] 
**groups** | **[String]** | Additional access control groups | [optional] 
**viewingGroups** | **[String]** | The group that determines which set of data the user has permission to view. | [optional] 
**jobTitle** | **String** | The role of the user in their lab or organization. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 
**title** | **String** | The full name of the user. | [optional] 



## Enum: StatusEnum


* `current` (value: `"current"`)

* `deleted` (value: `"deleted"`)

* `disabled` (value: `"disabled"`)





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




