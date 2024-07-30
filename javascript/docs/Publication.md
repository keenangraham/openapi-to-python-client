# IgvfProjectApi.Publication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**publicationIdentifiers** | **[String]** | The publication identifiers that provide more information about the object. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**attachment** | [**Attachment**](Attachment.md) |  | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**title** | **String** | Title of the publication or communication. | [optional] 
**_abstract** | **String** | Abstract of the publication or communication. | [optional] 
**authors** | **String** | The authors of the publication. | [optional] 
**datePublished** | **String** | The date the publication or communication was published; must be in YYYY-MM-DD format. | [optional] 
**dateRevised** | **String** | The date the publication was revised. | [optional] 
**issue** | **String** | The issue of the publication. | [optional] 
**page** | **String** | Pagination of the reference | [optional] 
**volume** | **String** | The volume of the publication. | [optional] 
**journal** | **String** | The journal of the publication. | [optional] 
**publishedBy** | **[String]** | The affiliation of the lab with a larger organization, such as IGVF. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the publication. | [optional] 
**publicationYear** | **Number** | The year the publication was published. | [optional] 
**samples** | **[String]** | The samples associated with this publication. | [optional] 
**donors** | **[String]** | The donors associated with this publication. | [optional] 
**fileSets** | **[String]** | The file sets associated with this publication. | [optional] 
**workflows** | **[String]** | The workflows associated with this publication. | [optional] 
**software** | **[String]** | The software associated with this publication. | [optional] 
**softwareVersions** | **[String]** | The software versions associated with this publication. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: [PublishedByEnum]


* `community` (value: `"community"`)

* `IGVF` (value: `"IGVF"`)

* `ENCODE` (value: `"ENCODE"`)




