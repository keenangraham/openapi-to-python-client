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
from typing import Optional, Set
from typing_extensions import Self

class RodentDonor(BaseModel):
    """
    A rodent donor of a biosample. Submission of any sample originating from a rodent donor requires submission of information about the relevant donor. The rodent donor can be a generic representative of an inbred strain, or a unique, individual mouse. For example, submission of a B6 mouse donor is a prerequisite for submission of any B6 mouse samples.
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    taxa: Optional[StrictStr] = Field(default=None, description="The species of the organism.")
    publication_identifiers: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    url: Optional[StrictStr] = Field(default=None, description="An external resource with additional information.")
    sources: Optional[Annotated[List[StrictStr], Field(min_length=1, max_length=1)]] = Field(default=None, description="The originating lab(s) or vendor(s).")
    lot_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The lot identifier provided by the originating lab or vendor.")
    product_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The product identifier provided by the originating lab or vendor.")
    documents: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Documents that provide additional information (not data file).")
    lab: Optional[StrictStr] = Field(default=None, description="Lab associated with the submission.")
    award: Optional[StrictStr] = Field(default=None, description="Grant associated with the submission.")
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='12', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    dbxrefs: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF donors.")
    sex: Optional[StrictStr] = Field(default='unspecified', description="Sex of the donor.")
    phenotypic_features: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="A list of associated phenotypic features of the donor.")
    virtual: Optional[StrictBool] = Field(default=False, description="Virtual donors are not representing actual human or model organism donors, samples coming from which were used in experiments, but rather capturing metadata about hypothetical donors that the reported analysis results are relevant for.")
    strain_background: Optional[StrictStr] = Field(default=None, description="The specific parent strain designation of a non-human donor.")
    strain: Optional[StrictStr] = Field(default=None, description="The specific strain designation of a non-human donor.")
    genotype: Optional[StrictStr] = Field(default=None, description="The genotype of the strain according to accepted nomenclature conventions.")
    individual_rodent: Optional[StrictBool] = Field(default=False, description="This rodent donor represents an individual rodent.")
    rodent_identifier: Optional[StrictStr] = Field(default=None, description="The identifier for this individual rodent donor.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the object.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "taxa", "publication_identifiers", "url", "sources", "lot_id", "product_id", "documents", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "dbxrefs", "sex", "phenotypic_features", "virtual", "strain_background", "strain", "genotype", "individual_rodent", "rodent_identifier", "@id", "@type", "summary"]

    @field_validator('taxa')
    def taxa_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['Mus musculus']):
            raise ValueError("must be one of enum values ('Mus musculus')")
        return value

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

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
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

    @field_validator('strain_background')
    def strain_background_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['A/J (AJ)', 'C57BL/6J (B6)', '129S1/SvImJ (129)', 'NOD/ShiLtJ (NOD)', 'NZO/H1LtJ (NZO)', 'CAST/EiJ (CAST)', 'PWK/PhJ (PWK)', 'WSB/EiJ (WSB)', 'CAST (M. m. castaneus)', 'WSB (M. m. domesticus)', 'PWK (M. m. musculus)']):
            raise ValueError("must be one of enum values ('A/J (AJ)', 'C57BL/6J (B6)', '129S1/SvImJ (129)', 'NOD/ShiLtJ (NOD)', 'NZO/H1LtJ (NZO)', 'CAST/EiJ (CAST)', 'PWK/PhJ (PWK)', 'WSB/EiJ (WSB)', 'CAST (M. m. castaneus)', 'WSB (M. m. domesticus)', 'PWK (M. m. musculus)')")
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
        """Create an instance of RodentDonor from a JSON string"""
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
        """Create an instance of RodentDonor from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "taxa": obj.get("taxa"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "url": obj.get("url"),
            "sources": obj.get("sources"),
            "lot_id": obj.get("lot_id"),
            "product_id": obj.get("product_id"),
            "documents": obj.get("documents"),
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '12',
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
            "strain_background": obj.get("strain_background"),
            "strain": obj.get("strain"),
            "genotype": obj.get("genotype"),
            "individual_rodent": obj.get("individual_rodent") if obj.get("individual_rodent") is not None else False,
            "rodent_identifier": obj.get("rodent_identifier"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary")
        })
        return _obj


