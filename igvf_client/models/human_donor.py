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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from igvf_client.models.related_donor import RelatedDonor
from typing import Optional, Set
from typing_extensions import Self

class HumanDonor(BaseModel):
    """
    A human donor of any biosample, including cell lines. Submission of any sample originating from a human donor requires submission of information about the relevant donor. For example, submission of the donor of K562 is a prerequisite for submission of any K562 cell line samples.
    """ # noqa: E501
    release_timestamp: Optional[StrictStr] = Field(default=None, description="The date the object was released.")
    taxa: Optional[StrictStr] = Field(default=None, description="The species of the organism.")
    publications: Optional[List[StrictStr]] = Field(default=None, description="The publications associated with this object.")
    publication_identifiers: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    url: Optional[StrictStr] = Field(default=None, description="An external resource with additional information.")
    documents: Optional[List[StrictStr]] = Field(default=None, description="Documents that provide additional information (not data file).")
    lab: Optional[StrictStr] = Field(default=None, description="Lab associated with the submission.")
    award: Optional[StrictStr] = Field(default=None, description="Grant associated with the submission.")
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[List[StrictStr]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[List[StrictStr]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='13', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[StrictStr] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    dbxrefs: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF donors.")
    sex: Optional[StrictStr] = Field(default='unspecified', description="Sex of the donor.")
    phenotypic_features: Optional[List[StrictStr]] = Field(default=None, description="A list of associated phenotypic features of the donor.")
    virtual: Optional[StrictBool] = Field(default=False, description="Virtual donors are not representing actual human or model organism donors, samples coming from which were used in experiments, but rather capturing metadata about hypothetical donors that the reported analysis results are relevant for.")
    related_donors: Optional[List[RelatedDonor]] = Field(default=None, description="Familial relations of this donor.")
    ethnicities: Optional[List[StrictStr]] = Field(default=None, description="Ethnicity of the donor.")
    human_donor_identifiers: Optional[List[StrictStr]] = Field(default=None, description="Identifiers of this human donor.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the human donor.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["release_timestamp", "taxa", "publications", "publication_identifiers", "url", "documents", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "dbxrefs", "sex", "phenotypic_features", "virtual", "related_donors", "ethnicities", "human_donor_identifiers", "@id", "@type", "summary"]

    @field_validator('taxa')
    def taxa_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['Homo sapiens']):
            raise ValueError("must be one of enum values ('Homo sapiens')")
        return value

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

    @field_validator('sex')
    def sex_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['male', 'female', 'unspecified']):
            raise ValueError("must be one of enum values ('male', 'female', 'unspecified')")
        return value

    @field_validator('ethnicities')
    def ethnicities_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['African American', 'African Caribbean', 'Arab', 'Asian', 'Black', 'Black African', 'Chinese', 'Colombian', 'Dai Chinese', 'Esan', 'Eskimo', 'European', 'Gambian', 'Han Chinese', 'Hispanic', 'Indian', 'Japanese', 'Kinh Vietnamese', 'Luhya', 'Maasai', 'Mende', 'Native Hawaiian', 'Pacific Islander', 'Puerto Rican', 'Yoruba']):
                raise ValueError("each list item must be one of ('African American', 'African Caribbean', 'Arab', 'Asian', 'Black', 'Black African', 'Chinese', 'Colombian', 'Dai Chinese', 'Esan', 'Eskimo', 'European', 'Gambian', 'Han Chinese', 'Hispanic', 'Indian', 'Japanese', 'Kinh Vietnamese', 'Luhya', 'Maasai', 'Mende', 'Native Hawaiian', 'Pacific Islander', 'Puerto Rican', 'Yoruba')")
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
        """Create an instance of HumanDonor from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in related_donors (list)
        _items = []
        if self.related_donors:
            for _item in self.related_donors:
                if _item:
                    _items.append(_item.to_dict())
            _dict['related_donors'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of HumanDonor from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "taxa": obj.get("taxa"),
            "publications": obj.get("publications"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "url": obj.get("url"),
            "documents": obj.get("documents"),
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '13',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "dbxrefs": obj.get("dbxrefs"),
            "sex": obj.get("sex") if obj.get("sex") is not None else 'unspecified',
            "phenotypic_features": obj.get("phenotypic_features"),
            "virtual": obj.get("virtual") if obj.get("virtual") is not None else False,
            "related_donors": [RelatedDonor.from_dict(_item) for _item in obj["related_donors"]] if obj.get("related_donors") is not None else None,
            "ethnicities": obj.get("ethnicities"),
            "human_donor_identifiers": obj.get("human_donor_identifiers"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


