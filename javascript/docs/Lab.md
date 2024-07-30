# IgvfProjectApi.Lab

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the metadata object. | [optional] 
**url** | **String** | An external resource with additional information. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**name** | **String** | A short unique name for the lab, current convention is lower cased and hyphen delimited of PI&#39;s first and last name (e.g. john-doe). | [optional] 
**pi** | **String** | Principle Investigator of the lab. | [optional] 
**awards** | **[String]** | Grants associated with the lab. | [optional] 
**instituteLabel** | **String** | An abbreviation for the institute the lab is associated with. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the lab. | [optional] 
**title** | **String** |  | [optional] 



## Enum: StatusEnum


* `current` (value: `"current"`)

* `deleted` (value: `"deleted"`)

* `disabled` (value: `"disabled"`)




