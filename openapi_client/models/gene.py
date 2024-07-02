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
from openapi_client.models.gene_location import GeneLocation
from typing import Optional, Set
from typing_extensions import Self

class Gene(BaseModel):
    """
    A gene in the human or mouse genomes. The genes objects in IGVF are imported from GENCODE.
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    transcriptome_annotation: StrictStr = Field(description="The annotation and version of the reference resource.")
    taxa: StrictStr = Field(description="The species of the organism.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='9', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    geneid: Annotated[str, Field(strict=True)] = Field(description="ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix.")
    symbol: StrictStr = Field(description="Gene symbol approved by the official nomenclature.")
    name: Optional[StrictStr] = Field(default=None, description="The full gene name preferably approved by the official nomenclature.")
    synonyms: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Alternative symbols that have been used to refer to the gene.")
    dbxrefs: Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)] = Field(description="Unique identifiers from external resources.")
    locations: Optional[Annotated[List[GeneLocation], Field(min_length=1)]] = Field(default=None, description="Gene locations specified using 1-based, closed coordinates for different versions of reference genome assemblies.")
    version_number: Annotated[str, Field(strict=True)] = Field(description="Current ENSEMBL GeneID version number of the gene.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    title: Optional[StrictStr] = None
    geneid_with_version: Optional[StrictStr] = Field(default=None, description="The ENSEMBL GeneID concatenated with its version number.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["release_timestamp", "transcriptome_annotation", "taxa", "status", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "geneid", "symbol", "name", "synonyms", "dbxrefs", "locations", "version_number", "@id", "@type", "summary", "title", "geneid_with_version"]

    @field_validator('transcriptome_annotation')
    def transcriptome_annotation_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['GENCODE 40', 'GENCODE 41', 'GENCODE 42', 'GENCODE 43', 'GENCODE 44', 'GENCODE 45', 'GENCODE M30', 'GENCODE M31', 'GENCODE M32', 'GENCODE M33', 'GENCODE M34']):
            raise ValueError("must be one of enum values ('GENCODE 40', 'GENCODE 41', 'GENCODE 42', 'GENCODE 43', 'GENCODE 44', 'GENCODE 45', 'GENCODE M30', 'GENCODE M31', 'GENCODE M32', 'GENCODE M33', 'GENCODE M34')")
        return value

    @field_validator('taxa')
    def taxa_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['Homo sapiens', 'Mus musculus']):
            raise ValueError("must be one of enum values ('Homo sapiens', 'Mus musculus')")
        return value

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

    @field_validator('geneid')
    def geneid_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"^ENS[A-Z]*G\d{11}(_PAR_Y)?$", value):
            raise ValueError(r"must validate the regular expression /^ENS[A-Z]*G\d{11}(_PAR_Y)?$/")
        return value

    @field_validator('version_number')
    def version_number_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"^\d+?", value):
            raise ValueError(r"must validate the regular expression /^\d+?/")
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
        """Create an instance of Gene from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in locations (list)
        _items = []
        if self.locations:
            for _item in self.locations:
                if _item:
                    _items.append(_item.to_dict())
            _dict['locations'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Gene from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "transcriptome_annotation": obj.get("transcriptome_annotation"),
            "taxa": obj.get("taxa"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '9',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "geneid": obj.get("geneid"),
            "symbol": obj.get("symbol"),
            "name": obj.get("name"),
            "synonyms": obj.get("synonyms"),
            "dbxrefs": obj.get("dbxrefs"),
            "locations": [GeneLocation.from_dict(_item) for _item in obj["locations"]] if obj.get("locations") is not None else None,
            "version_number": obj.get("version_number"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "title": obj.get("title"),
            "geneid_with_version": obj.get("geneid_with_version")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


