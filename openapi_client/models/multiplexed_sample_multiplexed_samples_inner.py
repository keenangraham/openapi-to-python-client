# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import json
import pprint
from pydantic import BaseModel, ConfigDict, Field, StrictStr, ValidationError, field_validator
from typing import Any, List, Optional
from openapi_client.models.in_vitro_system import InVitroSystem
from openapi_client.models.multiplexed_sample import MultiplexedSample
from openapi_client.models.primary_cell import PrimaryCell
from openapi_client.models.technical_sample import TechnicalSample
from openapi_client.models.tissue import Tissue
from openapi_client.models.whole_organism import WholeOrganism
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

MULTIPLEXEDSAMPLEMULTIPLEXEDSAMPLESINNER_ONE_OF_SCHEMAS = ["InVitroSystem", "MultiplexedSample", "PrimaryCell", "TechnicalSample", "Tissue", "WholeOrganism", "str"]

class MultiplexedSampleMultiplexedSamplesInner(BaseModel):
    """
    MultiplexedSampleMultiplexedSamplesInner
    """
    # data type: InVitroSystem
    oneof_schema_1_validator: Optional[InVitroSystem] = None
    # data type: MultiplexedSample
    oneof_schema_2_validator: Optional[MultiplexedSample] = None
    # data type: PrimaryCell
    oneof_schema_3_validator: Optional[PrimaryCell] = None
    # data type: TechnicalSample
    oneof_schema_4_validator: Optional[TechnicalSample] = None
    # data type: Tissue
    oneof_schema_5_validator: Optional[Tissue] = None
    # data type: WholeOrganism
    oneof_schema_6_validator: Optional[WholeOrganism] = None
    # data type: str
    oneof_schema_7_validator: Optional[StrictStr] = None
    actual_instance: Optional[Union[InVitroSystem, MultiplexedSample, PrimaryCell, TechnicalSample, Tissue, WholeOrganism, str]] = None
    one_of_schemas: Set[str] = { "InVitroSystem", "MultiplexedSample", "PrimaryCell", "TechnicalSample", "Tissue", "WholeOrganism", "str" }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError("If a position argument is used, only 1 is allowed to set `actual_instance`")
            if kwargs:
                raise ValueError("If a position argument is used, keyword arguments cannot be used.")
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @field_validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = MultiplexedSampleMultiplexedSamplesInner.model_construct()
        error_messages = []
        match = 0
        # validate data type: InVitroSystem
        if not isinstance(v, InVitroSystem):
            error_messages.append(f"Error! Input type `{type(v)}` is not `InVitroSystem`")
        else:
            match += 1
        # validate data type: MultiplexedSample
        if not isinstance(v, MultiplexedSample):
            error_messages.append(f"Error! Input type `{type(v)}` is not `MultiplexedSample`")
        else:
            match += 1
        # validate data type: PrimaryCell
        if not isinstance(v, PrimaryCell):
            error_messages.append(f"Error! Input type `{type(v)}` is not `PrimaryCell`")
        else:
            match += 1
        # validate data type: TechnicalSample
        if not isinstance(v, TechnicalSample):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TechnicalSample`")
        else:
            match += 1
        # validate data type: Tissue
        if not isinstance(v, Tissue):
            error_messages.append(f"Error! Input type `{type(v)}` is not `Tissue`")
        else:
            match += 1
        # validate data type: WholeOrganism
        if not isinstance(v, WholeOrganism):
            error_messages.append(f"Error! Input type `{type(v)}` is not `WholeOrganism`")
        else:
            match += 1
        # validate data type: str
        try:
            instance.oneof_schema_7_validator = v
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in MultiplexedSampleMultiplexedSamplesInner with oneOf schemas: InVitroSystem, MultiplexedSample, PrimaryCell, TechnicalSample, Tissue, WholeOrganism, str. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in MultiplexedSampleMultiplexedSamplesInner with oneOf schemas: InVitroSystem, MultiplexedSample, PrimaryCell, TechnicalSample, Tissue, WholeOrganism, str. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        match = 0

        # deserialize data into InVitroSystem
        try:
            instance.actual_instance = InVitroSystem.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into MultiplexedSample
        try:
            instance.actual_instance = MultiplexedSample.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into PrimaryCell
        try:
            instance.actual_instance = PrimaryCell.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TechnicalSample
        try:
            instance.actual_instance = TechnicalSample.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into Tissue
        try:
            instance.actual_instance = Tissue.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into WholeOrganism
        try:
            instance.actual_instance = WholeOrganism.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into str
        try:
            # validation
            instance.oneof_schema_7_validator = json.loads(json_str)
            # assign value to actual_instance
            instance.actual_instance = instance.oneof_schema_7_validator
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into MultiplexedSampleMultiplexedSamplesInner with oneOf schemas: InVitroSystem, MultiplexedSample, PrimaryCell, TechnicalSample, Tissue, WholeOrganism, str. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into MultiplexedSampleMultiplexedSamplesInner with oneOf schemas: InVitroSystem, MultiplexedSample, PrimaryCell, TechnicalSample, Tissue, WholeOrganism, str. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(self.actual_instance.to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> Optional[Union[Dict[str, Any], InVitroSystem, MultiplexedSample, PrimaryCell, TechnicalSample, Tissue, WholeOrganism, str]]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(self.actual_instance.to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())


