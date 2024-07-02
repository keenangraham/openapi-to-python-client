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
from openapi_client.models.attachment import Attachment
from typing import Optional, Set
from typing_extensions import Self

class Document(BaseModel):
    """
    Document
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    lab: Optional[StrictStr] = Field(default=None, description="Lab associated with the submission.")
    award: Optional[StrictStr] = Field(default=None, description="Grant associated with the submission.")
    attachment: Optional[Attachment] = None
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='4', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    document_type: Optional[StrictStr] = Field(default=None, description="The category that best describes the document.")
    characterization_method: Optional[StrictStr] = Field(default=None, description="The method used for the characterization.")
    urls: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="External resources with additional information to the document.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "status", "lab", "award", "attachment", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "document_type", "characterization_method", "urls", "@id", "@type", "summary"]

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

    @field_validator('document_type')
    def document_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['cell fate change protocol', 'characterization', 'computational protocol', 'experimental protocol', 'file format specification', 'image', 'plate map', 'plasmid map', 'plasmid sequence', 'standards']):
            raise ValueError("must be one of enum values ('cell fate change protocol', 'characterization', 'computational protocol', 'experimental protocol', 'file format specification', 'image', 'plate map', 'plasmid map', 'plasmid sequence', 'standards')")
        return value

    @field_validator('characterization_method')
    def characterization_method_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['FACS', 'immunoblot', 'immunofluorescence', 'immunoprecipitation', 'mass spectrometry', 'PCR', 'restriction digest', 'RT-qPCR', 'sequencing']):
            raise ValueError("must be one of enum values ('FACS', 'immunoblot', 'immunofluorescence', 'immunoprecipitation', 'mass spectrometry', 'PCR', 'restriction digest', 'RT-qPCR', 'sequencing')")
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
        """Create an instance of Document from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of attachment
        if self.attachment:
            _dict['attachment'] = self.attachment.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Document from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "attachment": Attachment.from_dict(obj["attachment"]) if obj.get("attachment") is not None else None,
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '4',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "document_type": obj.get("document_type"),
            "characterization_method": obj.get("characterization_method"),
            "urls": obj.get("urls"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary")
        })
        return _obj


