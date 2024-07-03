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
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing_extensions import Annotated
from openapi_client.models.award1 import Award1
from openapi_client.models.biomarker1 import Biomarker1
from openapi_client.models.construct_library_set import ConstructLibrarySet
from openapi_client.models.disease_term import DiseaseTerm
from openapi_client.models.document2 import Document2
from openapi_client.models.donor import Donor
from openapi_client.models.lab1 import Lab1
from openapi_client.models.modification1 import Modification1
from openapi_client.models.sample_term import SampleTerm
from openapi_client.models.source1 import Source1
from openapi_client.models.submitted_by import SubmittedBy
from openapi_client.models.treatment1 import Treatment1
from typing import Optional, Set
from typing_extensions import Self

class PrimaryCell(BaseModel):
    """
    A biosample that is directly harvested from a donor as cells, such as fibroblasts or immune cells.
    """ # noqa: E501
    release_timestamp: Optional[datetime] = Field(default=None, description="The date the object was released.")
    publication_identifiers: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="The publication identifiers that provide more information about the object.")
    taxa: Optional[StrictStr] = Field(default=None, description="The species of the organism.")
    url: Optional[StrictStr] = Field(default=None, description="An external resource with additional information.")
    sources: Annotated[List[Source1], Field(min_length=1, max_length=1)] = Field(description="The originating lab(s) or vendor(s).")
    lot_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The lot identifier provided by the originating lab or vendor.")
    product_id: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="The product identifier provided by the originating lab or vendor.")
    documents: Optional[Annotated[List[Document2], Field(min_length=1)]] = Field(default=None, description="Documents that provide additional information (not data file).")
    lab: Lab1
    award: Award1
    accession: Optional[StrictStr] = Field(default=None, description="A unique identifier to be used to reference the object prefixed with IGVF.")
    alternate_accessions: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Accessions previously assigned to objects that have been merged with this object.")
    collections: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="Some samples are part of particular data collections.")
    status: Optional[StrictStr] = Field(default='in progress', description="The status of the metadata object.")
    revoke_detail: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Explanation of why an object was transitioned to the revoked status.")
    schema_version: Optional[Annotated[str, Field(strict=True)]] = Field(default='19', description="The version of the JSON schema that the server uses to validate the object.")
    uuid: Optional[StrictStr] = Field(default=None, description="The unique identifier associated with every object.")
    notes: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="DACC internal notes.")
    aliases: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Lab specific identifiers to reference an object.")
    creation_timestamp: Optional[datetime] = Field(default=None, description="The date the object was created.")
    submitted_by: Optional[SubmittedBy] = None
    submitter_comment: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Additional information specified by the submitter to be displayed as a comment on the portal.")
    description: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="A plain text description of the object.")
    lower_bound_age: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Lower bound of age of the organism at the time of collection of the sample.")
    upper_bound_age: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Upper bound of age of the organism at the time of collection of the sample.")
    age_units: Optional[StrictStr] = Field(default=None, description="The units of time associated with age of the biosample.")
    sample_terms: Annotated[List[SampleTerm], Field(min_length=1, max_length=1)] = Field(description="Ontology terms identifying a biosample.")
    disease_terms: Optional[Annotated[List[DiseaseTerm], Field(min_length=1)]] = Field(default=None, description="Ontology term of the disease associated with the biosample.")
    pooled_from: Optional[Annotated[List[PrimaryCellPooledFrom], Field(min_length=2)]] = Field(default=None, description="The biosamples this biosample is pooled from.")
    part_of: Optional[PartOfBiosample1] = None
    originated_from: Optional[OriginatedFrom] = None
    treatments: Optional[Annotated[List[Treatment1], Field(min_length=1)]] = Field(default=None, description="A list of treatments applied to the biosample with the purpose of perturbation.")
    donors: Annotated[List[Donor], Field(min_length=1)] = Field(description="Donor(s) the sample was derived from.")
    biomarkers: Optional[Annotated[List[Biomarker1], Field(min_length=1)]] = Field(default=None, description="Biological markers that are associated with this sample.")
    embryonic: Optional[StrictBool] = Field(default=None, description="Biosample is embryonic.")
    modifications: Optional[Annotated[List[Modification1], Field(min_length=1, max_length=2)]] = Field(default=None, description="Links to modifications applied to this biosample.")
    cellular_sub_pool: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Cellular sub-pool fraction of the sample. Also known as PKR and sub-library.")
    starting_amount: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="The initial quantity of samples obtained.")
    starting_amount_units: Optional[StrictStr] = Field(default=None, description="The units used to quantify the amount of samples obtained.")
    dbxrefs: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Biosample identifiers from external resources, such as Biosample database or Cellosaurus.")
    date_obtained: Optional[date] = Field(default=None, description="The date the sample was harvested, dissected or created, depending on the type of the sample.")
    sorted_from: Optional[SortedFrom] = None
    sorted_from_detail: Optional[StrictStr] = Field(default=None, description="Detail for sample sorted into fractions capturing information about sorting.")
    virtual: Optional[StrictBool] = Field(default=False, description="Virtual samples are not representing actual physical entities from experiments, but rather capturing metadata about hypothetical samples that the reported analysis results are relevant for.")
    construct_library_sets: Optional[Annotated[List[ConstructLibrarySet], Field(min_length=1)]] = Field(default=None, description="The construct library sets of vectors introduced to this sample prior to performing an assay.")
    moi: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The actual multiplicity of infection (MOI) for vectors introduced to this sample. At least one construct library set must be specified in order to specify MOI. This property should capture the actual MOI, and not the targeted MOI.")
    nucleic_acid_delivery: Optional[StrictStr] = Field(default=None, description="Method of introduction of nucleic acid into the cell.")
    time_post_library_delivery: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="The time that elapsed past the time-point when the construct library sets were introduced.")
    time_post_library_delivery_units: Optional[StrictStr] = Field(default=None, description="The units of time that elapsed past the point when the construct library sets were introduced.")
    protocols: Optional[Annotated[List[Annotated[str, Field(strict=True)]], Field(min_length=1)]] = Field(default=None, description="Links to the protocol(s) for preparing the samples on Protocols.io.")
    passage_number: Optional[Annotated[int, Field(strict=True, ge=0)]] = Field(default=None, description="Number of passages including the passages from the source.")
    id: Optional[StrictStr] = Field(default=None, alias="@id")
    type: Optional[List[StrictStr]] = Field(default=None, alias="@type")
    summary: Optional[StrictStr] = Field(default=None, description="A summary of the sample.")
    file_sets: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The file sets linked to this sample.")
    multiplexed_in: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The multiplexed samples in which this sample is included.")
    sorted_fractions: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The fractions into which this sample has been sorted.")
    origin_of: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The samples which originate from this sample, such as through a process of cell differentiation.")
    institutional_certificates: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The institutional certificates under which use of this sample is approved.")
    sex: Optional[StrictStr] = None
    age: Optional[Annotated[str, Field(strict=True)]] = Field(default=None, description="Age of organism at the time of collection of the sample.")
    upper_bound_age_in_hours: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Upper bound of age of organism in hours at the time of collection of the sample.")
    lower_bound_age_in_hours: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="Lower bound of age of organism in hours at the time of collection of the sample .")
    parts: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The parts into which this sample has been divided.")
    pooled_in: Optional[Annotated[List[Any], Field(min_length=1)]] = Field(default=None, description="The pooled samples in which this sample is included.")
    classifications: Optional[Annotated[List[StrictStr], Field(min_length=1)]] = Field(default=None, description="The general category of this type of sample.")
    __properties: ClassVar[List[str]] = ["release_timestamp", "publication_identifiers", "taxa", "url", "sources", "lot_id", "product_id", "documents", "lab", "award", "accession", "alternate_accessions", "collections", "status", "revoke_detail", "schema_version", "uuid", "notes", "aliases", "creation_timestamp", "submitted_by", "submitter_comment", "description", "lower_bound_age", "upper_bound_age", "age_units", "sample_terms", "disease_terms", "pooled_from", "part_of", "originated_from", "treatments", "donors", "biomarkers", "embryonic", "modifications", "cellular_sub_pool", "starting_amount", "starting_amount_units", "dbxrefs", "date_obtained", "sorted_from", "sorted_from_detail", "virtual", "construct_library_sets", "moi", "nucleic_acid_delivery", "time_post_library_delivery", "time_post_library_delivery_units", "protocols", "passage_number", "@id", "@type", "summary", "file_sets", "multiplexed_in", "sorted_fractions", "origin_of", "institutional_certificates", "sex", "age", "upper_bound_age_in_hours", "lower_bound_age_in_hours", "parts", "pooled_in", "classifications"]

    @field_validator('taxa')
    def taxa_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['Homo sapiens', 'Mus musculus']):
            raise ValueError("must be one of enum values ('Homo sapiens', 'Mus musculus')")
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

    @field_validator('age_units')
    def age_units_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['minute', 'hour', 'day', 'week', 'month', 'year']):
            raise ValueError("must be one of enum values ('minute', 'hour', 'day', 'week', 'month', 'year')")
        return value

    @field_validator('cellular_sub_pool')
    def cellular_sub_pool_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^[a-zA-Z\d_.()-]+(?:\s[a-zA-Z\d_.()-]+)*$", value):
            raise ValueError(r"must validate the regular expression /^[a-zA-Z\d_.()-]+(?:\s[a-zA-Z\d_.()-]+)*$/")
        return value

    @field_validator('starting_amount_units')
    def starting_amount_units_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['cells', 'cells/ml', 'g', 'items', 'mg', 'whole animals', 'whole embryos', 'μg', 'ng']):
            raise ValueError("must be one of enum values ('cells', 'cells/ml', 'g', 'items', 'mg', 'whole animals', 'whole embryos', 'μg', 'ng')")
        return value

    @field_validator('nucleic_acid_delivery')
    def nucleic_acid_delivery_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['transfection', 'adenoviral transduction', 'lentiviral transduction']):
            raise ValueError("must be one of enum values ('transfection', 'adenoviral transduction', 'lentiviral transduction')")
        return value

    @field_validator('time_post_library_delivery_units')
    def time_post_library_delivery_units_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['minute', 'hour', 'day', 'week', 'month']):
            raise ValueError("must be one of enum values ('minute', 'hour', 'day', 'week', 'month')")
        return value

    @field_validator('sex')
    def sex_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['female', 'male', 'mixed', 'unspecified']):
            raise ValueError("must be one of enum values ('female', 'male', 'mixed', 'unspecified')")
        return value

    @field_validator('age')
    def age_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^((\d+(\.[1-9])?(\-\d+(\.[1-9])?)?)|(unknown)|([1-8]?\d)|(90 or above))$", value):
            raise ValueError(r"must validate the regular expression /^((\d+(\.[1-9])?(\-\d+(\.[1-9])?)?)|(unknown)|([1-8]?\d)|(90 or above))$/")
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
        """Create an instance of PrimaryCell from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in sample_terms (list)
        _items = []
        if self.sample_terms:
            for _item in self.sample_terms:
                if _item:
                    _items.append(_item.to_dict())
            _dict['sample_terms'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in disease_terms (list)
        _items = []
        if self.disease_terms:
            for _item in self.disease_terms:
                if _item:
                    _items.append(_item.to_dict())
            _dict['disease_terms'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in pooled_from (list)
        _items = []
        if self.pooled_from:
            for _item in self.pooled_from:
                if _item:
                    _items.append(_item.to_dict())
            _dict['pooled_from'] = _items
        # override the default output from pydantic by calling `to_dict()` of part_of
        if self.part_of:
            _dict['part_of'] = self.part_of.to_dict()
        # override the default output from pydantic by calling `to_dict()` of originated_from
        if self.originated_from:
            _dict['originated_from'] = self.originated_from.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in treatments (list)
        _items = []
        if self.treatments:
            for _item in self.treatments:
                if _item:
                    _items.append(_item.to_dict())
            _dict['treatments'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in donors (list)
        _items = []
        if self.donors:
            for _item in self.donors:
                if _item:
                    _items.append(_item.to_dict())
            _dict['donors'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in biomarkers (list)
        _items = []
        if self.biomarkers:
            for _item in self.biomarkers:
                if _item:
                    _items.append(_item.to_dict())
            _dict['biomarkers'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in modifications (list)
        _items = []
        if self.modifications:
            for _item in self.modifications:
                if _item:
                    _items.append(_item.to_dict())
            _dict['modifications'] = _items
        # override the default output from pydantic by calling `to_dict()` of sorted_from
        if self.sorted_from:
            _dict['sorted_from'] = self.sorted_from.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in construct_library_sets (list)
        _items = []
        if self.construct_library_sets:
            for _item in self.construct_library_sets:
                if _item:
                    _items.append(_item.to_dict())
            _dict['construct_library_sets'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PrimaryCell from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "release_timestamp": obj.get("release_timestamp"),
            "publication_identifiers": obj.get("publication_identifiers"),
            "taxa": obj.get("taxa"),
            "url": obj.get("url"),
            "sources": [Source1.from_dict(_item) for _item in obj["sources"]] if obj.get("sources") is not None else None,
            "lot_id": obj.get("lot_id"),
            "product_id": obj.get("product_id"),
            "documents": [Document2.from_dict(_item) for _item in obj["documents"]] if obj.get("documents") is not None else None,
            "lab": Lab1.from_dict(obj["lab"]) if obj.get("lab") is not None else None,
            "award": Award1.from_dict(obj["award"]) if obj.get("award") is not None else None,
            "accession": obj.get("accession"),
            "alternate_accessions": obj.get("alternate_accessions"),
            "collections": obj.get("collections"),
            "status": obj.get("status") if obj.get("status") is not None else 'in progress',
            "revoke_detail": obj.get("revoke_detail"),
            "schema_version": obj.get("schema_version") if obj.get("schema_version") is not None else '19',
            "uuid": obj.get("uuid"),
            "notes": obj.get("notes"),
            "aliases": obj.get("aliases"),
            "creation_timestamp": obj.get("creation_timestamp"),
            "submitted_by": SubmittedBy.from_dict(obj["submitted_by"]) if obj.get("submitted_by") is not None else None,
            "submitter_comment": obj.get("submitter_comment"),
            "description": obj.get("description"),
            "lower_bound_age": obj.get("lower_bound_age"),
            "upper_bound_age": obj.get("upper_bound_age"),
            "age_units": obj.get("age_units"),
            "sample_terms": [SampleTerm.from_dict(_item) for _item in obj["sample_terms"]] if obj.get("sample_terms") is not None else None,
            "disease_terms": [DiseaseTerm.from_dict(_item) for _item in obj["disease_terms"]] if obj.get("disease_terms") is not None else None,
            "pooled_from": [PrimaryCellPooledFrom.from_dict(_item) for _item in obj["pooled_from"]] if obj.get("pooled_from") is not None else None,
            "part_of": PartOfBiosample1.from_dict(obj["part_of"]) if obj.get("part_of") is not None else None,
            "originated_from": OriginatedFrom.from_dict(obj["originated_from"]) if obj.get("originated_from") is not None else None,
            "treatments": [Treatment1.from_dict(_item) for _item in obj["treatments"]] if obj.get("treatments") is not None else None,
            "donors": [Donor.from_dict(_item) for _item in obj["donors"]] if obj.get("donors") is not None else None,
            "biomarkers": [Biomarker1.from_dict(_item) for _item in obj["biomarkers"]] if obj.get("biomarkers") is not None else None,
            "embryonic": obj.get("embryonic"),
            "modifications": [Modification1.from_dict(_item) for _item in obj["modifications"]] if obj.get("modifications") is not None else None,
            "cellular_sub_pool": obj.get("cellular_sub_pool"),
            "starting_amount": obj.get("starting_amount"),
            "starting_amount_units": obj.get("starting_amount_units"),
            "dbxrefs": obj.get("dbxrefs"),
            "date_obtained": obj.get("date_obtained"),
            "sorted_from": SortedFrom.from_dict(obj["sorted_from"]) if obj.get("sorted_from") is not None else None,
            "sorted_from_detail": obj.get("sorted_from_detail"),
            "virtual": obj.get("virtual") if obj.get("virtual") is not None else False,
            "construct_library_sets": [ConstructLibrarySet.from_dict(_item) for _item in obj["construct_library_sets"]] if obj.get("construct_library_sets") is not None else None,
            "moi": obj.get("moi"),
            "nucleic_acid_delivery": obj.get("nucleic_acid_delivery"),
            "time_post_library_delivery": obj.get("time_post_library_delivery"),
            "time_post_library_delivery_units": obj.get("time_post_library_delivery_units"),
            "protocols": obj.get("protocols"),
            "passage_number": obj.get("passage_number"),
            "@id": obj.get("@id"),
            "@type": obj.get("@type"),
            "summary": obj.get("summary"),
            "file_sets": obj.get("file_sets"),
            "multiplexed_in": obj.get("multiplexed_in"),
            "sorted_fractions": obj.get("sorted_fractions"),
            "origin_of": obj.get("origin_of"),
            "institutional_certificates": obj.get("institutional_certificates"),
            "sex": obj.get("sex"),
            "age": obj.get("age"),
            "upper_bound_age_in_hours": obj.get("upper_bound_age_in_hours"),
            "lower_bound_age_in_hours": obj.get("lower_bound_age_in_hours"),
            "parts": obj.get("parts"),
            "pooled_in": obj.get("pooled_in"),
            "classifications": obj.get("classifications")
        })
        return _obj

from openapi_client.models.originated_from import OriginatedFrom
from openapi_client.models.part_of_biosample1 import PartOfBiosample1
from openapi_client.models.primary_cell_pooled_from import PrimaryCellPooledFrom
from openapi_client.models.sorted_from import SortedFrom
# TODO: Rewrite to not use raise_errors
PrimaryCell.model_rebuild(raise_errors=False)

