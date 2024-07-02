# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.gene_list_for import GeneListFor
from openapi_client.models.integrated_in import IntegratedIn
from openapi_client.models.loci_list_for import LociListFor
from typing import Optional, Set
from typing_extensions import Self

class ConfigurationFile(BaseModel):
    """
    A file containing configuration settings or information defining the structure of other data files' content.
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    documents: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Documents that provide additional information (not data file).")
    lab: StrictStr = Field(description="Lab associated with the submission.")
    award: StrictStr = Field(description="Grant associated with the submission.")
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='7', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    content_md5sum: Optional[Annotated[str, Field(strict=True, max_length=32)]] = Field(default=None, description="The MD5sum of the uncompressed file.")
    content_type: StrictStr = Field(description="The type of content in the file.")
    dbxrefs: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects.")
    derived_from: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="The files participating as inputs into software to produce this output file.")
    file_format: StrictStr = Field(description="The file format or extension of the file.")
    file_format_specifications: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Document that further explains the file format.")
    file_set: StrictStr = Field(description="The file set that this file belongs to.")
    file_size: Optional[Annotated[int, Field(strict=True, ge=0)]] = Field(default=None, description="File size specified in bytes.")
    md5sum: Annotated[str, Field(strict=True, max_length=32)] = Field(description="The md5sum of the file being transferred.")
    submitted_file_name: Optional[StrictStr] = Field(default=None, description="Original name of the file.")
    upload_status: Optional[StrictStr] = Field(default='pending', description="The upload/validation status of the file.")
    validation_error_detail: Optional[StrictStr] = Field(default=None, description="Explanation of why the file failed the automated content checks.")
    seqspec_of: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Sequence files this file is a seqspec of.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    integrated_in: Optional[Annotated[List[IntegratedIn], Field(min_length=1)]] = Field(default=None, description="Construct library set(s) that this file was used for in insert design.")
    gene_list_for: Optional[Annotated[List[GeneListFor], Field(min_length=1)]] = Field(default=None, description="File Set(s) that this file is a gene list for.")
    loci_list_for: Optional[Annotated[List[LociListFor], Field(min_length=1)]] = Field(default=None, description="File Set(s) that this file is a loci list for.")
    href: Optional[StrictStr] = Field(default=None, description="The download path to obtain file.")
    s3_uri: Optional[StrictStr] = Field(default=None, description="The S3 URI of public file object.")
    upload_credentials: Optional[Dict[str, Any]] = Field(default=None, description="The upload credentials for S3 to submit the file content.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "documents", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "content_md5sum", "content_type", "dbxrefs", "derived_from", "file_format", "file_format_specifications", "file_set", "file_size", "md5sum", "submitted_file_name", "upload_status", "validation_error_detail", "seqspec_of", "@id", "@type", "summary", "integrated_in", "gene_list_for", "loci_list_for", "href", "s3_uri", "upload_credentials"]

    @field_validator('collections')
    def collections_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['ClinGen', 'ENCODE', 'GREGoR', 'IGVF_catalog_beta_v0.1', 'IGVF_catalog_beta_v0.2', 'IGVF_catalog_beta_v0.3', 'IGVF_catalog_beta_v0.4', 'MaveDB', 'MPRAbase', 'Vista']):
                raise ValueError("each list item must be one of ('ClinGen', 'ENCODE', 'GREGoR', 'IGVF_catalog_beta_v0.1', 'IGVF_catalog_beta_v0.2', 'IGVF_catalog_beta_v0.3', 'IGVF_catalog_beta_v0.4', 'MaveDB', 'MPRAbase', 'Vista')")
        return value

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['in progress', 'released', 'deleted', 'replaced', 'revoked', 'archived']):
            raise ValueError("must be one of enum values ('in progress', 'released', 'deleted', 'replaced', 'revoked', 'archived')")
        return value

    @field_validator('revoke_detail')
    def revoke_detail_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('schema_version')
    def schema_version_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^\d+(\.\d+)*$", value):
            raise ValueError(r"must validate the regular expression /^\d+(\.\d+)*$/")
        return value

    @field_validator('notes')
    def notes_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('submitter_comment')
    def submitter_comment_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('description')
    def description_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('content_md5sum')
    def content_md5sum_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"[a-f\d]{32}|[A-F\d]{32}", value):
            raise ValueError(r"must validate the regular expression /[a-f\d]{32}|[A-F\d]{32}/")
        return value

    @field_validator('content_type')
    def content_type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['seqspec']):
            raise ValueError("must be one of enum values ('seqspec')")
        return value

    @field_validator('file_format')
    def file_format_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['yaml']):
            raise ValueError("must be one of enum values ('yaml')")
        return value

    @field_validator('md5sum')
    def md5sum_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"[a-f\d]{32}|[A-F\d]{32}", value):
            raise ValueError(r"must validate the regular expression /[a-f\d]{32}|[A-F\d]{32}/")
        return value

    @field_validator('upload_status')
    def upload_status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['pending', 'file not found', 'invalidated', 'validated']):
            raise ValueError("must be one of enum values ('pending', 'file not found', 'invalidated', 'validated')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ConfigurationFile from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in integrated_in (list)
        _items = []
        if self.integrated_in:
            for _item in self.integrated_in:
                if _item:
                    _items.append(_item.to_dict())
            _dict['integrated_in'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in gene_list_for (list)
        _items = []
        if self.gene_list_for:
            for _item in self.gene_list_for:
                if _item:
                    _items.append(_item.to_dict())
            _dict['gene_list_for'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in loci_list_for (list)
        _items = []
        if self.loci_list_for:
            for _item in self.loci_list_for:
                if _item:
                    _items.append(_item.to_dict())
            _dict['loci_list_for'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ConfigurationFile from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "documents": obj.get("documents"),
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '7',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "content_md5sum": obj.get("content_md5sum"),
            "content_type": obj.get("content_type"),
            "dbxrefs": obj.get("dbxrefs"),
            "derived_from": obj.get("derived_from"),
            "file_format": obj.get("file_format"),
            "file_format_specifications": obj.get("file_format_specifications"),
            "file_set": obj.get("file_set"),
            "file_size": obj.get("file_size"),
            "md5sum": obj.get("md5sum"),
            "submitted_file_name": obj.get("submitted_file_name"),
            "upload_status": obj.get("upload_status") if obj.get("upload_status") is not None else 'pending',
            "validation_error_detail": obj.get("validation_error_detail"),
            "seqspec_of": obj.get("seqspec_of"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "integrated_in": [IntegratedIn.from_dict(_item) for _item in obj["integrated_in"]] if obj.get("integrated_in") is not None else None,
            "gene_list_for": [GeneListFor.from_dict(_item) for _item in obj["gene_list_for"]] if obj.get("gene_list_for") is not None else None,
            "loci_list_for": [LociListFor.from_dict(_item) for _item in obj["loci_list_for"]] if obj.get("loci_list_for") is not None else None,
            "href": obj.get("href"),
            "s3_uri": obj.get("s3_uri"),
            "upload_credentials": obj.get("upload_credentials")
        })
        return _obj


