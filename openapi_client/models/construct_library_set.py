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
from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing_extensions import Annotated
from openapi_client.models.locus import Locus
from openapi_client.models.tile import Tile
from typing import Optional, Set
from typing_extensions import Self

class ConstructLibrarySet(BaseModel):
    """
    A file set containing raw data files resulting from sequencing of the library delivered to the sample. For example, a guide RNA library.
    """ # noqa: E501
    small_scale_loci_list: Optional[List[Locus]] = Field(default=None, description="A small scale (<=100) list of specific chromosomal region(s).")
    large_scale_loci_list: Optional[StrictStr] = Field(default=None, description="A large scale list (>100) of specific chromosomal regions.")
    small_scale_gene_list: Optional[List[StrictStr]] = Field(default=None, description="The specific, small scale list of (<=100) gene(s) this construct library was designed to target. This property differs from targeted_genes in Measurement Set, which describes genes targeted for binding sites or used for sorting by expression.")
    large_scale_gene_list: Optional[StrictStr] = Field(default=None, description="The large scale list of (>100 genes) this construct library was designed to target.")
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    publication_identifiers: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    documents: Optional[List[StrictStr]] = Field(default=None, description="Documents that provide additional information (not data file).")
    sources: Optional[List[StrictStr]] = Field(default=None, description="The originating lab(s) or vendor(s).")
    lot_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The lot identifier provided by the originating lab or vendor.")
    product_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The product or catalog identifier provided following deposition to addgene.org.")
    lab: Optional[StrictStr] = Field(default=None, description="Lab associated with the submission.")
    award: Optional[StrictStr] = Field(default=None, description="Grant associated with the submission.")
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[List[StrictStr]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[List[StrictStr]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='8', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[List[Annotated[str, Field(strict=True)]]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[StrictStr] = Field(default=None, description="The user who submitted the object.")
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    file_set_type: Optional[StrictStr] = Field(default=None, description="The type or category of this construct library set.")
    scope: Optional[StrictStr] = Field(default=None, description="The scope or scale that this construct library is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. If exon is specified, an exon identifier and the associated gene will need to be listed in exon and genes properties. If tile is specified, a tile identifier, start and stop coordinates, and the associated gene will need to be listed in tile and small_scale_gene_list or large_scale_gene_list properties.")
    selection_criteria: Optional[List[StrictStr]] = Field(default=None, description="The criteria used to select the sequence material cloned into the library.")
    integrated_content_files: Optional[List[StrictStr]] = Field(default=None, description="The files containing sequence material of interest either used for insert design or directly cloned into vectors in this library.")
    associated_phenotypes: Optional[List[StrictStr]] = Field(default=None, description="Ontological terms for diseases or phenotypes associated with the sequence material cloned in this construct library.")
    orf_list: Optional[List[StrictStr]] = Field(default=None, description="List of Open Reading Frame this construct library was designed to target.")
    exon: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="An identifier in plain text for the specific exon in an expression vector library. The associated gene must be listed in the small_scale_gene_list property.")
    tile: Optional[Tile] = None
    guide_type: Optional[StrictStr] = Field(default=None, description="The design of guides used in a CRISPR library, paired-guide (pgRNA) or single-guide (sgRNA).")
    tiling_modality: Optional[StrictStr] = Field(default=None, description="The tiling modality of guides across elements or loci in a CRISPR library.")
    average_guide_coverage: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The average number of guides targeting each element of interest in the library.")
    lower_bound_guide_coverage: Optional[StrictInt] = Field(default=None, description="Lower bound of the number of guides targeting each element of interest in the library.")
    upper_bound_guide_coverage: Optional[StrictInt] = Field(default=None, description="Upper bound of the number of guides targeting each element of interest in the library.")
    average_insert_size: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The average size of the inserts cloned into vectors in the library.")
    lower_bound_insert_size: Optional[StrictInt] = Field(default=None, description="Lower bound of the size of the inserts cloned in vectors in the library.")
    upper_bound_insert_size: Optional[StrictInt] = Field(default=None, description="Upper bound of the size of the inserts cloned in vectors in the library.")
    targeton: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="An identifier in plain text for the specific targeton in an editing template library. The associated gene must be listed in the small_scale_gene_list property.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = None
    files: Optional[List[Any]] = Field(default=None, description="The files associated with this file set.")
    control_for: Optional[List[Any]] = Field(default=None, description="The file sets for which this file set is a control.")
    submitted_files_timestamp: Optional[datetime] = Field(default=None, description="The timestamp the first file object in the file_set or associated auxiliary sets was created.")
    input_file_set_for: Optional[List[Any]] = Field(default=None, description="The file sets that use this file set as an input.")
    applied_to_samples: Optional[List[Any]] = Field(default=None, description="The samples that link to this construct library set.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["small_scale_loci_list", "large_scale_loci_list", "small_scale_gene_list", "large_scale_gene_list", "release_timestamp", "publication_identifiers", "documents", "sources", "lot_id", "product_id", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "file_set_type", "scope", "selection_criteria", "integrated_content_files", "associated_phenotypes", "orf_list", "exon", "tile", "guide_type", "tiling_modality", "average_guide_coverage", "lower_bound_guide_coverage", "upper_bound_guide_coverage", "average_insert_size", "lower_bound_insert_size", "upper_bound_insert_size", "targeton", "@id", "@type", "summary", "files", "control_for", "submitted_files_timestamp", "input_file_set_for", "applied_to_samples"]

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

        if value not in set(['guide library', 'reporter library', 'expression vector library', 'editing template library']):
            raise ValueError("must be one of enum values ('guide library', 'reporter library', 'expression vector library', 'editing template library')")
        return value

    @field_validator('scope')
    def scope_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['tile', 'exon', 'genes', 'loci', 'genome-wide', 'interactors', 'alleles', 'targeton']):
            raise ValueError("must be one of enum values ('tile', 'exon', 'genes', 'loci', 'genome-wide', 'interactors', 'alleles', 'targeton')")
        return value

    @field_validator('selection_criteria')
    def selection_criteria_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        for i in value:
            if i not in set(['accessible genome regions', 'candidate cis-regulatory elements', 'chromatin states', 'phenotype-associated variants', 'DNase hypersensitive sites', 'genes', 'histone modifications', 'protein interactors', 'sequence variants', 'synthetic elements', 'transcription start sites', 'TF binding sites']):
                raise ValueError("each list item must be one of ('accessible genome regions', 'candidate cis-regulatory elements', 'chromatin states', 'phenotype-associated variants', 'DNase hypersensitive sites', 'genes', 'histone modifications', 'protein interactors', 'sequence variants', 'synthetic elements', 'transcription start sites', 'TF binding sites')")
        return value

    @field_validator('exon')
    def exon_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
        return value

    @field_validator('guide_type')
    def guide_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['sgRNA', 'pgRNA']):
            raise ValueError("must be one of enum values ('sgRNA', 'pgRNA')")
        return value

    @field_validator('tiling_modality')
    def tiling_modality_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['peak tiling', 'full tiling', 'sparse peaks']):
            raise ValueError("must be one of enum values ('peak tiling', 'full tiling', 'sparse peaks')")
        return value

    @field_validator('targeton')
    def targeton_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^(\S+(\s|\S)*\S+|\S)$", value):
            raise ValueError(r"must validate the regular expression /^(\S+(\s|\S)*\S+|\S)$/")
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
        """Create an instance of ConstructLibrarySet from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in small_scale_loci_list (list)
        _items = []
        if self.small_scale_loci_list:
            for _item in self.small_scale_loci_list:
                if _item:
                    _items.append(_item.to_dict())
            _dict['small_scale_loci_list'] = _items
        # override the default output from pydantic by calling `to_dict()` of tile
        if self.tile:
            _dict['tile'] = self.tile.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ConstructLibrarySet from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "small_scale_loci_list": [Locus.from_dict(_item) for _item in obj["small_scale_loci_list"]] if obj.get("small_scale_loci_list") is not None else None,
            "large_scale_loci_list": obj.get("large_scale_loci_list"),
            "small_scale_gene_list": obj.get("small_scale_gene_list"),
            "large_scale_gene_list": obj.get("large_scale_gene_list"),
            "release_timestamp": obj.get("release_timestamp"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "documents": obj.get("documents"),
            "sources": obj.get("sources"),
            "lot_id": obj.get("lot_id"),
            "product_id": obj.get("product_id"),
            "lab": obj.get("lab"),
            "award": obj.get("award"),
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '8',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": obj.get("submitted_by"),
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "file_set_type": obj.get("file_set_type"),
            "scope": obj.get("scope"),
            "selection_criteria": obj.get("selection_criteria"),
            "integrated_content_files": obj.get("integrated_content_files"),
            "associated_phenotypes": obj.get("associated_phenotypes"),
            "orf_list": obj.get("orf_list"),
            "exon": obj.get("exon"),
            "tile": Tile.from_dict(obj["tile"]) if obj.get("tile") is not None else None,
            "guide_type": obj.get("guide_type"),
            "tiling_modality": obj.get("tiling_modality"),
            "average_guide_coverage": obj.get("average_guide_coverage"),
            "lower_bound_guide_coverage": obj.get("lower_bound_guide_coverage"),
            "upper_bound_guide_coverage": obj.get("upper_bound_guide_coverage"),
            "average_insert_size": obj.get("average_insert_size"),
            "lower_bound_insert_size": obj.get("lower_bound_insert_size"),
            "upper_bound_insert_size": obj.get("upper_bound_insert_size"),
            "targeton": obj.get("targeton"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "files": obj.get("files"),
            "control_for": obj.get("control_for"),
            "submitted_files_timestamp": obj.get("submitted_files_timestamp"),
            "input_file_set_for": obj.get("input_file_set_for"),
            "applied_to_samples": obj.get("applied_to_samples")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


