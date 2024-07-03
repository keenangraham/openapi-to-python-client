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
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing_extensions import Annotated
from openapi_client.models.access_key_submitted_by import AccessKeySubmittedBy
from openapi_client.models.analysis_step_award import AnalysisStepAward
from openapi_client.models.analysis_step_lab import AnalysisStepLab
from openapi_client.models.biomarker_gene import BiomarkerGene
from typing import Optional, Set
from typing_extensions import Self

class OpenReadingFrame(BaseModel):
    """
    Protein-encoding open reading frames (ORF)
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='2', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[AccessKeySubmittedBy] = None
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    lab: AnalysisStepLab
    award: AnalysisStepAward
    orf_id: Annotated[str, Field(strict=True)] = Field(description="Open reading frame ID.")
    gene: Annotated[List[BiomarkerGene], Field(min_length=1)] = Field(description="ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix.")
    protein_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="ENSEMBL ProteinID of official nomenclature approved protein. The ProteinID does not include the current version number suffix.")
    dbxrefs: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Unique identifiers from the hORFeome database")
    pct_identical_protein: Optional[Union[Annotated[float, Field(le=100, strict=True, ge=0)], Annotated[int, Field(le=100, strict=True, ge=0)]]] = Field(default=None, description="The percentage of identical matches to Ensembl protein.")
    pct_coverage_protein: Optional[Union[Annotated[float, Field(le=100, strict=True, ge=0)], Annotated[int, Field(le=100, strict=True, ge=0)]]] = Field(default=None, description="The percentage of ORF covered by Ensembl protein.")
    pct_coverage_orf: Optional[Union[Annotated[float, Field(le=100, strict=True, ge=0)], Annotated[int, Field(le=100, strict=True, ge=0)]]] = Field(default=None, description="The percentage of Ensembl protein covered by ORF.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "status", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "lab", "award", "orf_id", "gene", "protein_id", "dbxrefs", "pct_identical_protein", "pct_coverage_protein", "pct_coverage_orf", "@id", "@type", "summary"]

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

    @field_validator('orf_id')
    def orf_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"^CCSBORF[1-9][0-9]*$", value):
            raise ValueError(r"must validate the regular expression /^CCSBORF[1-9][0-9]*$/")
        return value

    @field_validator('protein_id')
    def protein_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^ENSP\d{11}.?\d*?$", value):
            raise ValueError(r"must validate the regular expression /^ENSP\d{11}.?\d*?$/")
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
        """Create an instance of OpenReadingFrame from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of submitted_by
        if self.submitted_by:
            _dict['submitted_by'] = self.submitted_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of lab
        if self.lab:
            _dict['lab'] = self.lab.to_dict()
        # override the default output from pydantic by calling `to_dict()` of award
        if self.award:
            _dict['award'] = self.award.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in gene (list)
        _items = []
        if self.gene:
            for _item in self.gene:
                if _item:
                    _items.append(_item.to_dict())
            _dict['gene'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of OpenReadingFrame from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '2',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": AccessKeySubmittedBy.from_dict(obj["submitted_by"]) if obj.get("submitted_by") is not None else None,
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "lab": AnalysisStepLab.from_dict(obj["lab"]) if obj.get("lab") is not None else None,
            "award": AnalysisStepAward.from_dict(obj["award"]) if obj.get("award") is not None else None,
            "orf_id": obj.get("orf_id"),
            "gene": [BiomarkerGene.from_dict(_item) for _item in obj["gene"]] if obj.get("gene") is not None else None,
            "protein_id": obj.get("protein_id"),
            "dbxrefs": obj.get("dbxrefs"),
            "pct_identical_protein": obj.get("pct_identical_protein"),
            "pct_coverage_protein": obj.get("pct_coverage_protein"),
            "pct_coverage_orf": obj.get("pct_coverage_orf"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary")
        })
        return _obj


