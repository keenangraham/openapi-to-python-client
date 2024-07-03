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
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from openapi_client.models.award1 import Award1
from openapi_client.models.document2 import Document2
from openapi_client.models.lab1 import Lab1
from openapi_client.models.source1 import Source1
from openapi_client.models.submitted_by import SubmittedBy
from openapi_client.models.tagged_protein import TaggedProtein
from typing import Optional, Set
from typing_extensions import Self

class CrisprModification(BaseModel):
    """
    A CRISPR modification altering sample genomic material. For example, CRISPRi dCas9-KRAB modification.
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    sources: Optional[Annotated[List[Source1], Field(min_length=1, max_length=1)]] = Field(default=None, description="The originating lab(s) or vendor(s).")
    lot_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The lot identifier provided by the originating lab or vendor.")
    product_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The product or catalog identifier provided following deposition to addgene.org.")
    documents: Optional[Annotated[List[Document2], Field(min_length=1)]] = Field(default=None, description="Documents that provide additional information (not data file).")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    lab: Lab1
    award: Award1
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='2', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[SubmittedBy] = None
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    cas: StrictStr = Field(description="The name of the CRISPR associated protein used in the modification.")
    fused_domain: Optional[StrictStr] = Field(default=None, description="The name of the molecule fused to a Cas protein.")
    modality: StrictStr = Field(description="The purpose or intended effect of a CRISPR modification.")
    tagged_protein: Optional[TaggedProtein] = None
    cas_species: StrictStr = Field(description="The originating species of the Cas nuclease.")
    activated: Optional[StrictBool] = Field(default=None, description="A boolean indicating whether the modification has been activated by a chemical agent.")
    activating_agent_term_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The CHEBI identifier for the activating agent of the modification.")
    activating_agent_term_name: Optional[StrictStr] = Field(default=None, description="The CHEBI name for the activating agent of the modification.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = None
    __properties: ClassVar[List[str]] = ["release_timestamp", "sources", "lot_id", "product_id", "documents", "status", "lab", "award", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "cas", "fused_domain", "modality", "tagged_protein", "cas_species", "activated", "activating_agent_term_id", "activating_agent_term_name", "@id", "@type", "summary"]

    @field_validator('lot_id')
    def lot_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('product_id')
    def product_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^addgene:\d{5,6}$", value):
            raise ValueError(r"must validate the regular expression /^addgene:\d{5,6}$/")
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

    @field_validator('cas')
    def cas_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['Cas9', 'Cas12a', 'Cas13', 'dCas9', 'nCas9', 'SpG', 'SpRY']):
            raise ValueError("must be one of enum values ('Cas9', 'Cas12a', 'Cas13', 'dCas9', 'nCas9', 'SpG', 'SpRY')")
        return value

    @field_validator('fused_domain')
    def fused_domain_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['ABE8e', 'ABE8.20', 'BE4', 'BE4max', 'eA3A', 'eA3A-T31A', 'eA3A-T44D-S45A', 'ANTI-FLAG', 'M-MLV RT (PE2)', 'p300', 'TdCBE', 'TdCGBE', 'TdDE', 'VPH', 'VP64', 'VP64-p65-Rta (VPR)', '2xVP64', '3xVP64', 'ZIM3-KRAB']):
            raise ValueError("must be one of enum values ('ABE8e', 'ABE8.20', 'BE4', 'BE4max', 'eA3A', 'eA3A-T31A', 'eA3A-T44D-S45A', 'ANTI-FLAG', 'M-MLV RT (PE2)', 'p300', 'TdCBE', 'TdCGBE', 'TdDE', 'VPH', 'VP64', 'VP64-p65-Rta (VPR)', '2xVP64', '3xVP64', 'ZIM3-KRAB')")
        return value

    @field_validator('modality')
    def modality_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['activation', 'base editing', 'cutting', 'interference', 'knockout', 'localizing', 'prime editing']):
            raise ValueError("must be one of enum values ('activation', 'base editing', 'cutting', 'interference', 'knockout', 'localizing', 'prime editing')")
        return value

    @field_validator('cas_species')
    def cas_species_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['Streptococcus pyogenes (Sp)', 'Staphylococcus aureus (Sa)', 'Campylobacter jejuni (Cj)', 'Neisseria meningitidis (Nm)']):
            raise ValueError("must be one of enum values ('Streptococcus pyogenes (Sp)', 'Staphylococcus aureus (Sa)', 'Campylobacter jejuni (Cj)', 'Neisseria meningitidis (Nm)')")
        return value

    @field_validator('activating_agent_term_id')
    def activating_agent_term_id_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^CHEBI:[0-9]{1,7}$", value):
            raise ValueError(r"must validate the regular expression /^CHEBI:[0-9]{1,7}$/")
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
        """Create an instance of CrisprModification from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in sources (list)
        _items = []
        if self.sources:
            for _item in self.sources:
                if _item:
                    _items.append(_item.to_dict())
            _dict['sources'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in documents (list)
        _items = []
        if self.documents:
            for _item in self.documents:
                if _item:
                    _items.append(_item.to_dict())
            _dict['documents'] = _items
        # override the default output from pydantic by calling `to_dict()` of lab
        if self.lab:
            _dict['lab'] = self.lab.to_dict()
        # override the default output from pydantic by calling `to_dict()` of award
        if self.award:
            _dict['award'] = self.award.to_dict()
        # override the default output from pydantic by calling `to_dict()` of submitted_by
        if self.submitted_by:
            _dict['submitted_by'] = self.submitted_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of tagged_protein
        if self.tagged_protein:
            _dict['tagged_protein'] = self.tagged_protein.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CrisprModification from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "sources": [Source1.from_dict(_item) for _item in obj["sources"]] if obj.get("sources") is not None else None,
            "lot_id": obj.get("lot_id"),
            "product_id": obj.get("product_id"),
            "documents": [Document2.from_dict(_item) for _item in obj["documents"]] if obj.get("documents") is not None else None,
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "lab": Lab1.from_dict(obj["lab"]) if obj.get("lab") is not None else None,
            "award": Award1.from_dict(obj["award"]) if obj.get("award") is not None else None,
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '2',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": SubmittedBy.from_dict(obj["submitted_by"]) if obj.get("submitted_by") is not None else None,
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "cas": obj.get("cas"),
            "fused_domain": obj.get("fused_domain"),
            "modality": obj.get("modality"),
            "tagged_protein": TaggedProtein.from_dict(obj["tagged_protein"]) if obj.get("tagged_protein") is not None else None,
            "cas_species": obj.get("cas_species"),
            "activated": obj.get("activated"),
            "activating_agent_term_id": obj.get("activating_agent_term_id"),
            "activating_agent_term_name": obj.get("activating_agent_term_name"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary")
        })
        return _obj


