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
from openapi_client.models.assay_term import AssayTerm
from openapi_client.models.auxiliary_set import AuxiliarySet
from openapi_client.models.award1 import Award1
from openapi_client.models.document2 import Document2
from openapi_client.models.donor import Donor
from openapi_client.models.lab1 import Lab1
from openapi_client.models.library_construction_platform import LibraryConstructionPlatform
from openapi_client.models.sample import Sample
from openapi_client.models.submitted_by import SubmittedBy
from typing import Optional, Set
from typing_extensions import Self

class MeasurementSet(BaseModel):
    """
    A file set for a distinct measurement, such as the sequencing of a genomic library generated by an experiment performed on a cell line. A measurement set contains the raw data files generated by the measurement.
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    publication_identifiers: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    documents: Optional[Annotated[List[Document2], Field(min_length=1)]] = Field(default=None, description="Documents that provide additional information (not data file).")
    lab: Lab1
    award: Award1
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='17', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[SubmittedBy] = None
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    dbxrefs: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets.")
    samples: Annotated[List[Sample], Field(min_length=1, max_length=1)] = Field(description="The sample(s) associated with this file set.")
    donors: Optional[Annotated[List[Donor], Field(min_length=1)]] = Field(default=None, description="The donors of the samples associated with this measurement set.")
    file_set_type: StrictStr = Field(description="The category that best describes this measurement set.")
    assay_term: AssayTerm
    library_construction_platform: Optional[LibraryConstructionPlatform] = None
    protocols: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Links to the protocol(s) for conducting the assay on Protocols.io.")
    preferred_assay_title: Optional[StrictStr] = Field(default=None, description="The custom lab preferred label for the experiment performed in this measurement set.")
    multiome_size: Optional[Annotated[int, Field(strict=True, ge=2)]] = Field(default=None, description="The number of datasets included in the multiome experiment this measurement set is a part of.")
    control_file_sets: Optional[Annotated[List[Control], Field(min_length=1)]] = Field(default=None, description="File sets that can serve as scientific controls for this measurement_set.")
    sequencing_library_types: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Description of the libraries sequenced in this measurement set.")
    auxiliary_sets: Optional[Annotated[List[AuxiliarySet], Field(min_length=1)]] = Field(default=None, description="The auxiliary sets of files produced alongside raw data from this measurement set.")
    external_image_url: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Links to the external site where images produced by this measurement are stored.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = None
    files: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The files associated with this file set.")
    control_for: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The file sets for which this file set is a control.")
    submitted_files_timestamp: Optional[datetime] = Field(default=None, description="The timestamp the first file object in the file_set or associated auxiliary sets was created.")
    input_file_set_for: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The Analysis Sets that use this File Set as an input.")
    related_multiome_datasets: Optional[Annotated[List[RelatedMultiomeDataset], Field(min_length=1)]] = Field(default=None, description="Related datasets included in the multiome experiment this measurement set is a part of.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "publication_identifiers", "documents", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "dbxrefs", "samples", "donors", "file_set_type", "assay_term", "library_construction_platform", "protocols", "preferred_assay_title", "multiome_size", "control_file_sets", "sequencing_library_types", "auxiliary_sets", "external_image_url", "@id", "@type", "summary", "files", "control_for", "submitted_files_timestamp", "input_file_set_for", "related_multiome_datasets"]

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
        if value not in set(['experimental data']):
            raise ValueError("must be one of enum values ('experimental data')")
        return value

    @field_validator('preferred_assay_title')
    def preferred_assay_title_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['10x multiome', '10x multiome with MULTI-seq', 'AAV-MPRA', 'ATAC-seq', 'CERES-seq', 'Cell painting', 'CRISPR FlowFISH', 'DOGMA-seq', 'Histone ChIP-seq', 'lentiMPRA', 'MERFISH', 'MIAA', 'mN2H', 'MPRA', 'MPRA (scQer)', 'MULTI-seq', 'Parse SPLiT-seq', 'Perturb-seq', 'RNA-seq', 'SGE', 'scATAC-seq', 'scNT-seq', 'scNT-seq2', 'scRNA-seq', 'semi-qY2H', 'SHARE-seq', 'smFISH', 'snATAC-seq', 'snmC-Seq2', 'snMCT-seq', 'snM3C-seq', 'snRNA-seq', 'SUPERSTARR', 'TAP-seq', 'TF ChIP-seq', 'VAMP-seq', 'Variant FlowFISH', 'Variant painting', 'Y2H', 'yN2H']):
            raise ValueError("must be one of enum values ('10x multiome', '10x multiome with MULTI-seq', 'AAV-MPRA', 'ATAC-seq', 'CERES-seq', 'Cell painting', 'CRISPR FlowFISH', 'DOGMA-seq', 'Histone ChIP-seq', 'lentiMPRA', 'MERFISH', 'MIAA', 'mN2H', 'MPRA', 'MPRA (scQer)', 'MULTI-seq', 'Parse SPLiT-seq', 'Perturb-seq', 'RNA-seq', 'SGE', 'scATAC-seq', 'scNT-seq', 'scNT-seq2', 'scRNA-seq', 'semi-qY2H', 'SHARE-seq', 'smFISH', 'snATAC-seq', 'snmC-Seq2', 'snMCT-seq', 'snM3C-seq', 'snRNA-seq', 'SUPERSTARR', 'TAP-seq', 'TF ChIP-seq', 'VAMP-seq', 'Variant FlowFISH', 'Variant painting', 'Y2H', 'yN2H')")
        return value

    @field_validator('sequencing_library_types')
    def sequencing_library_types_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['direct RNA', 'exome capture', 'mRNA enriched', 'rRNA depleted', 'polyA depleted', 'polyA enriched']):
                raise ValueError("each list item must be one of ('direct RNA', 'exome capture', 'mRNA enriched', 'rRNA depleted', 'polyA depleted', 'polyA enriched')")
        return value

    @field_validator('external_image_url')
    def external_image_url_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^https:\/\/cellpainting-gallery\.s3\.amazonaws\.com(\S+)$", value):
            raise ValueError(r"must validate the regular expression /^https:\/\/cellpainting-gallery\.s3\.amazonaws\.com(\S+)$/")
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
        """Create an instance of MeasurementSet from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in samples (list)
        _items = []
        if self.samples:
            for _item in self.samples:
                if _item:
                    _items.append(_item.to_dict())
            _dict['samples'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in donors (list)
        _items = []
        if self.donors:
            for _item in self.donors:
                if _item:
                    _items.append(_item.to_dict())
            _dict['donors'] = _items
        # override the default output from pydantic by calling `to_dict()` of assay_term
        if self.assay_term:
            _dict['assay_term'] = self.assay_term.to_dict()
        # override the default output from pydantic by calling `to_dict()` of library_construction_platform
        if self.library_construction_platform:
            _dict['library_construction_platform'] = self.library_construction_platform.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in control_file_sets (list)
        _items = []
        if self.control_file_sets:
            for _item in self.control_file_sets:
                if _item:
                    _items.append(_item.to_dict())
            _dict['control_file_sets'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in auxiliary_sets (list)
        _items = []
        if self.auxiliary_sets:
            for _item in self.auxiliary_sets:
                if _item:
                    _items.append(_item.to_dict())
            _dict['auxiliary_sets'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in related_multiome_datasets (list)
        _items = []
        if self.related_multiome_datasets:
            for _item in self.related_multiome_datasets:
                if _item:
                    _items.append(_item.to_dict())
            _dict['related_multiome_datasets'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of MeasurementSet from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "documents": [Document2.from_dict(_item) for _item in obj["documents"]] if obj.get("documents") is not None else None,
            "lab": Lab1.from_dict(obj["lab"]) if obj.get("lab") is not None else None,
            "award": Award1.from_dict(obj["award"]) if obj.get("award") is not None else None,
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '17',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": SubmittedBy.from_dict(obj["submitted_by"]) if obj.get("submitted_by") is not None else None,
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "dbxrefs": obj.get("dbxrefs"),
            "samples": [Sample.from_dict(_item) for _item in obj["samples"]] if obj.get("samples") is not None else None,
            "donors": [Donor.from_dict(_item) for _item in obj["donors"]] if obj.get("donors") is not None else None,
            "file_set_type": obj.get("file_set_type") if obj.get("file_set_type") is not None else 'experimental data',
            "assay_term": AssayTerm.from_dict(obj["assay_term"]) if obj.get("assay_term") is not None else None,
            "library_construction_platform": LibraryConstructionPlatform.from_dict(obj["library_construction_platform"]) if obj.get("library_construction_platform") is not None else None,
            "protocols": obj.get("protocols"),
            "preferred_assay_title": obj.get("preferred_assay_title"),
            "multiome_size": obj.get("multiome_size"),
            "control_file_sets": [Control.from_dict(_item) for _item in obj["control_file_sets"]] if obj.get("control_file_sets") is not None else None,
            "sequencing_library_types": obj.get("sequencing_library_types"),
            "auxiliary_sets": [AuxiliarySet.from_dict(_item) for _item in obj["auxiliary_sets"]] if obj.get("auxiliary_sets") is not None else None,
            "external_image_url": obj.get("external_image_url"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "files": obj.get("files"),
            "control_for": obj.get("control_for"),
            "submitted_files_timestamp": obj.get("submitted_files_timestamp"),
            "input_file_set_for": obj.get("input_file_set_for"),
            "related_multiome_datasets": [RelatedMultiomeDataset.from_dict(_item) for _item in obj["related_multiome_datasets"]] if obj.get("related_multiome_datasets") is not None else None
        })
        return _obj

from openapi_client.models.control import Control
from openapi_client.models.related_multiome_dataset import RelatedMultiomeDataset
# TODO: Rewrite to not use raise_errors
MeasurementSet.model_rebuild(raise_errors=False)

