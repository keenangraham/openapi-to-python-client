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

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from igvf_client.models.attachment import Attachment
from typing import Optional, Set
from typing_extensions import Self

class Publication(BaseModel):
    """
    A publication related to IGVF.
    """ # noqa: E501
    release_timestamp: Optional[StrictStr] = Field(default=None, description="The date the object was released.")
    publication_identifiers: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    status: Optional[StrictStr] = Field(default=None, description="The status of the metadata object.")
    lab: Optional[StrictStr] = Field(default=None, description="Lab associated with the submission.")
    award: Optional[StrictStr] = Field(default=None, description="Grant associated with the submission.")
    attachment: Optional[Attachment] = None
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[StrictStr] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    title: Optional[StrictStr] = Field(default=None, description="Title of the publication or communication.")
    abstract: Optional[StrictStr] = Field(default=None, description="Abstract of the publication or communication.")
    authors: Optional[StrictStr] = Field(default=None, description="The authors of the publication.")
    date_published: Optional[StrictStr] = Field(default=None, description="The date the publication or communication was published; must be in YYYY-MM-DD format.")
    date_revised: Optional[StrictStr] = Field(default=None, description="The date the publication was revised.")
    issue: Optional[StrictStr] = Field(default=None, description="The issue of the publication.")
    page: Optional[StrictStr] = Field(default=None, description="Pagination of the reference")
    volume: Optional[StrictStr] = Field(default=None, description="The volume of the publication.")
    journal: Optional[StrictStr] = Field(default=None, description="The journal of the publication.")
    published_by: Optional[List[StrictStr]] = Field(default=None, description="The affiliation of the lab with a larger organization, such as IGVF.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the publication.")
    publication_year: Optional[StrictInt] = Field(default=None, description="The year the publication was published.")
    samples: Optional[List[StrictStr]] = Field(default=None, description="The samples associated with this publication.")
    donors: Optional[List[StrictStr]] = Field(default=None, description="The donors associated with this publication.")
    file_sets: Optional[List[StrictStr]] = Field(default=None, description="The file sets associated with this publication.")
    workflows: Optional[List[StrictStr]] = Field(default=None, description="The workflows associated with this publication.")
    software: Optional[List[StrictStr]] = Field(default=None, description="The software associated with this publication.")
    software_versions: Optional[List[StrictStr]] = Field(default=None, description="The software versions associated with this publication.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["release_timestamp", "publication_identifiers", "status", "lab", "award", "attachment", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "title", "abstract", "authors", "date_published", "date_revised", "issue", "page", "volume", "journal", "published_by", "@id", "@type", "summary", "publication_year", "samples", "donors", "file_sets", "workflows", "software", "software_versions"]

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['archived', 'deleted', 'in progress', 'released']):
            raise ValueError("must be one of enum values ('archived', 'deleted', 'in progress', 'released')")
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

    @field_validator('published_by')
    def published_by_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['community', 'IGVF', 'ENCODE']):
                raise ValueError("each list item must be one of ('community', 'IGVF', 'ENCODE')")
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
        """Create an instance of Publication from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of attachment
        if self.attachment:
            _dict['attachment'] = self.attachment.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Publication from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "status": obj.get("status"),
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "attachment": Attachment.from_dict(obj["attachment"]) if obj.get("attachment") is not None else None,
            "schema_version": obj.get("schema_version"),
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "title": obj.get("title"),
            "abstract": obj.get("abstract"),
            "authors": obj.get("authors"),
            "date_published": obj.get("date_published"),
            "date_revised": obj.get("date_revised"),
            "issue": obj.get("issue"),
            "page": obj.get("page"),
            "volume": obj.get("volume"),
            "journal": obj.get("journal"),
            "published_by": obj.get("published_by"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "publication_year": obj.get("publication_year"),
            "samples": obj.get("samples"),
            "donors": obj.get("donors"),
            "file_sets": obj.get("file_sets"),
            "workflows": obj.get("workflows"),
            "software": obj.get("software"),
            "software_versions": obj.get("software_versions")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


