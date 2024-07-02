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
from typing import Optional, Set
from typing_extensions import Self

class ModelSet(BaseModel):
    """
    ModelSet
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    publication_identifiers: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    documents: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Documents that provide additional information (not data file).")
    lab: Optional[StrictStr] = Field(default=None, description="Lab associated with the submission.")
    award: Optional[StrictStr] = Field(default=None, description="Grant associated with the submission.")
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    url: Optional[StrictStr] = Field(default=None, description="An external resource with additional information.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='3', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    dbxrefs: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets.")
    samples: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="The sample(s) associated with this file set.")
    donors: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="The donor(s) associated with this file set.")
    file_set_type: Optional[StrictStr] = Field(default=None, description="The category that best describes this predictive model set.")
    model_name: Optional[StrictStr] = Field(default=None, description="The custom lab name given to this predictive model set.")
    model_version: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The semantic version number for this predictive model set.")
    prediction_objects: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="The objects this predictive model set is targeting.")
    input_file_sets: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="The file set(s) that served as inputs for the derivation of this model set.")
    model_zoo_location: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The link to the model on the Kipoi repository.")
    software_version: Optional[StrictStr] = Field(default=None, description="Version of software used for the derivation of this model set.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    files: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The files associated with this file set.")
    control_for: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The file sets for which this file set is a control.")
    submitted_files_timestamp: Optional[datetime] = Field(default=None, description="The timestamp the first file object in the file_set or associated auxiliary sets was created.")
    input_file_set_for: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The Analysis Sets that use this File Set as an input.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "publication_identifiers", "documents", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "url", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "dbxrefs", "samples", "donors", "file_set_type", "model_name", "model_version", "prediction_objects", "input_file_sets", "model_zoo_location", "software_version", "@id", "@type", "summary", "files", "control_for", "submitted_files_timestamp", "input_file_set_for"]

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

    @field_validator('file_set_type')
    def file_set_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['neural network', 'random forest', 'decision tree', 'support vector machine']):
            raise ValueError("must be one of enum values ('neural network', 'random forest', 'decision tree', 'support vector machine')")
        return value

    @field_validator('model_version')
    def model_version_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^v(?!0\.0\.0$)[0-9]+\.[0-9]+\.[0-9]+$", value):
            raise ValueError(r"must validate the regular expression /^v(?!0\.0\.0$)[0-9]+\.[0-9]+\.[0-9]+$/")
        return value

    @field_validator('prediction_objects')
    def prediction_objects_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['coding variants', 'non-coding variants', 'all variants', 'regulatory elements', 'genes']):
                raise ValueError("each list item must be one of ('coding variants', 'non-coding variants', 'all variants', 'regulatory elements', 'genes')")
        return value

    @field_validator('model_zoo_location')
    def model_zoo_location_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^https?:\/\/kipoi\.org\/models\/(\S+)$", value):
            raise ValueError(r"must validate the regular expression /^https?:\/\/kipoi\.org\/models\/(\S+)$/")
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
        """Create an instance of ModelSet from a JSON string"""
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
        """Create an instance of ModelSet from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "documents": obj.get("documents"),
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "url": obj.get("url"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '3',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "dbxrefs": obj.get("dbxrefs"),
            "samples": obj.get("samples"),
            "donors": obj.get("donors"),
            "file_set_type": obj.get("file_set_type"),
            "model_name": obj.get("model_name"),
            "model_version": obj.get("model_version"),
            "prediction_objects": obj.get("prediction_objects"),
            "input_file_sets": obj.get("input_file_sets"),
            "model_zoo_location": obj.get("model_zoo_location"),
            "software_version": obj.get("software_version"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "files": obj.get("files"),
            "control_for": obj.get("control_for"),
            "submitted_files_timestamp": obj.get("submitted_files_timestamp"),
            "input_file_set_for": obj.get("input_file_set_for")
        })
        return _obj


