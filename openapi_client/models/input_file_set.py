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
from openapi_client.models.auxiliary_set import AuxiliarySet
from openapi_client.models.construct_library_set import ConstructLibrarySet
from openapi_client.models.curated_set import CuratedSet
from openapi_client.models.model_set import ModelSet
from openapi_client.models.prediction_set import PredictionSet
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

INPUTFILESET_ONE_OF_SCHEMAS = ["AnalysisSet", "AuxiliarySet", "ConstructLibrarySet", "CuratedSet", "MeasurementSet", "ModelSet", "PredictionSet", "str"]

class InputFileSet(BaseModel):
    """
    InputFileSet
    """
    # data type: AnalysisSet
    oneof_schema_1_validator: Optional[AnalysisSet] = None
    # data type: AuxiliarySet
    oneof_schema_2_validator: Optional[AuxiliarySet] = None
    # data type: ConstructLibrarySet
    oneof_schema_3_validator: Optional[ConstructLibrarySet] = None
    # data type: CuratedSet
    oneof_schema_4_validator: Optional[CuratedSet] = None
    # data type: MeasurementSet
    oneof_schema_5_validator: Optional[MeasurementSet] = None
    # data type: ModelSet
    oneof_schema_6_validator: Optional[ModelSet] = None
    # data type: PredictionSet
    oneof_schema_7_validator: Optional[PredictionSet] = None
    # data type: str
    oneof_schema_8_validator: Optional[StrictStr] = None
    actual_instance: Optional[Union[AnalysisSet, AuxiliarySet, ConstructLibrarySet, CuratedSet, MeasurementSet, ModelSet, PredictionSet, str]] = None
    one_of_schemas: Set[str] = { "AnalysisSet", "AuxiliarySet", "ConstructLibrarySet", "CuratedSet", "MeasurementSet", "ModelSet", "PredictionSet", "str" }

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
        instance = InputFileSet.model_construct()
        error_messages = []
        match = 0
        # validate data type: AnalysisSet
        if not isinstance(v, AnalysisSet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `AnalysisSet`")
        else:
            match += 1
        # validate data type: AuxiliarySet
        if not isinstance(v, AuxiliarySet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `AuxiliarySet`")
        else:
            match += 1
        # validate data type: ConstructLibrarySet
        if not isinstance(v, ConstructLibrarySet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ConstructLibrarySet`")
        else:
            match += 1
        # validate data type: CuratedSet
        if not isinstance(v, CuratedSet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `CuratedSet`")
        else:
            match += 1
        # validate data type: MeasurementSet
        if not isinstance(v, MeasurementSet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `MeasurementSet`")
        else:
            match += 1
        # validate data type: ModelSet
        if not isinstance(v, ModelSet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ModelSet`")
        else:
            match += 1
        # validate data type: PredictionSet
        if not isinstance(v, PredictionSet):
            error_messages.append(f"Error! Input type `{type(v)}` is not `PredictionSet`")
        else:
            match += 1
        # validate data type: str
        try:
            instance.oneof_schema_8_validator = v
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in InputFileSet with oneOf schemas: AnalysisSet, AuxiliarySet, ConstructLibrarySet, CuratedSet, MeasurementSet, ModelSet, PredictionSet, str. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in InputFileSet with oneOf schemas: AnalysisSet, AuxiliarySet, ConstructLibrarySet, CuratedSet, MeasurementSet, ModelSet, PredictionSet, str. Details: " + ", ".join(error_messages))
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

        # deserialize data into AnalysisSet
        try:
            instance.actual_instance = AnalysisSet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into AuxiliarySet
        try:
            instance.actual_instance = AuxiliarySet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ConstructLibrarySet
        try:
            instance.actual_instance = ConstructLibrarySet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into CuratedSet
        try:
            instance.actual_instance = CuratedSet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into MeasurementSet
        try:
            instance.actual_instance = MeasurementSet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ModelSet
        try:
            instance.actual_instance = ModelSet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into PredictionSet
        try:
            instance.actual_instance = PredictionSet.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into str
        try:
            # validation
            instance.oneof_schema_8_validator = json.loads(json_str)
            # assign value to actual_instance
            instance.actual_instance = instance.oneof_schema_8_validator
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into InputFileSet with oneOf schemas: AnalysisSet, AuxiliarySet, ConstructLibrarySet, CuratedSet, MeasurementSet, ModelSet, PredictionSet, str. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into InputFileSet with oneOf schemas: AnalysisSet, AuxiliarySet, ConstructLibrarySet, CuratedSet, MeasurementSet, ModelSet, PredictionSet, str. Details: " + ", ".join(error_messages))
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

    def to_dict(self) -> Optional[Union[Dict[str, Any], AnalysisSet, AuxiliarySet, ConstructLibrarySet, CuratedSet, MeasurementSet, ModelSet, PredictionSet, str]]:
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

from openapi_client.models.analysis_set import AnalysisSet
from openapi_client.models.measurement_set import MeasurementSet
# TODO: Rewrite to not use raise_errors
InputFileSet.model_rebuild(raise_errors=False)

