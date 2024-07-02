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

from datetime import date, datetime
from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class Award(BaseModel):
    """
    Award
    """ # noqa: E501
    status: Optional[StrictStr] = Field(default='current', description="The status of the metadata object.")
    url: Optional[StrictStr] = Field(default=None, description="An external resource with additional information.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='5', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    title: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The grant name from the NIH database, if applicable.")
    name: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The official grant number from the NIH database, if applicable")
    start_date: Optional[date] = Field(default=None, description="The date when the award begins.")
    end_date: Optional[date] = Field(default=None, description="The date when the award concludes.")
    pis: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Principal Investigator(s) of the grant.")
    contact_pi: Optional[StrictStr] = Field(default=None, description="The contact Principal Investigator of the grant.")
    project: Optional[StrictStr] = Field(default=None, description="The collection of biological data related to a single initiative, originating from a consortium.")
    viewing_group: Optional[StrictStr] = Field(default=None, description="The group that determines which set of data the user has permission to view.")
    component: Optional[StrictStr] = Field(default=None, description="The project component the award is associated with.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    __properties: ClassVar[List[str]] = ["status", "url", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "title", "name", "start_date", "end_date", "pis", "contact_pi", "project", "viewing_group", "component", "@id", "@type", "summary"]

    @field_validator('status')
    def status_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['current', 'deleted', 'disabled']):
            raise ValueError("must be one of enum values ('current', 'deleted', 'disabled')")
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

    @field_validator('title')
    def title_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('name')
    def name_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^[A-Za-z0-9\-]+$", value):
            raise ValueError(r"must validate the regular expression /^[A-Za-z0-9\-]+$/")
        return value

    @field_validator('project')
    def project_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['community', 'ENCODE', 'IGVF']):
            raise ValueError("must be one of enum values ('community', 'ENCODE', 'IGVF')")
        return value

    @field_validator('viewing_group')
    def viewing_group_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['community', 'IGVF']):
            raise ValueError("must be one of enum values ('community', 'IGVF')")
        return value

    @field_validator('component')
    def component_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['affiliate', 'data analysis', 'data coordination', 'functional characterization', 'mapping', 'networks', 'predictive modeling']):
            raise ValueError("must be one of enum values ('affiliate', 'data analysis', 'data coordination', 'functional characterization', 'mapping', 'networks', 'predictive modeling')")
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
        """Create an instance of Award from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Award from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "status": obj.get("status") if obj.get("status") is not None else 'current',
            "url": obj.get("url"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '5',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "title": obj.get("title"),
            "name": obj.get("name"),
            "start_date": obj.get("start_date"),
            "end_date": obj.get("end_date"),
            "pis": obj.get("pis"),
            "contact_pi": obj.get("contact_pi"),
            "project": obj.get("project"),
            "viewing_group": obj.get("viewing_group"),
            "component": obj.get("component"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary")
        })
        return _obj


