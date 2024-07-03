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
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

LINKTO25_ONE_OF_SCHEMAS = ["AlignmentFile", "ConfigurationFile", "GenomeBrowserAnnotationFile", "ImageFile", "MatrixFile", "ModelFile", "ReferenceFile", "SequenceFile", "SignalFile", "TabularFile", "str"]

class LINKTO25(BaseModel):
    """
    LINKTO25
    """
    # data type: AlignmentFile
    oneof_schema_1_validator: Optional[AlignmentFile] = None
    # data type: ConfigurationFile
    oneof_schema_2_validator: Optional[ConfigurationFile] = None
    # data type: GenomeBrowserAnnotationFile
    oneof_schema_3_validator: Optional[GenomeBrowserAnnotationFile] = None
    # data type: ImageFile
    oneof_schema_4_validator: Optional[ImageFile] = None
    # data type: MatrixFile
    oneof_schema_5_validator: Optional[MatrixFile] = None
    # data type: ModelFile
    oneof_schema_6_validator: Optional[ModelFile] = None
    # data type: ReferenceFile
    oneof_schema_7_validator: Optional[ReferenceFile] = None
    # data type: SequenceFile
    oneof_schema_8_validator: Optional[SequenceFile] = None
    # data type: SignalFile
    oneof_schema_9_validator: Optional[SignalFile] = None
    # data type: TabularFile
    oneof_schema_10_validator: Optional[TabularFile] = None
    # data type: str
    oneof_schema_11_validator: Optional[StrictStr] = None
    actual_instance: Optional[Union[AlignmentFile, ConfigurationFile, GenomeBrowserAnnotationFile, ImageFile, MatrixFile, ModelFile, ReferenceFile, SequenceFile, SignalFile, TabularFile, str]] = None
    one_of_schemas: Set[str] = { "AlignmentFile", "ConfigurationFile", "GenomeBrowserAnnotationFile", "ImageFile", "MatrixFile", "ModelFile", "ReferenceFile", "SequenceFile", "SignalFile", "TabularFile", "str" }

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
        instance = LINKTO25.model_construct()
        error_messages = []
        match = 0
        # validate data type: AlignmentFile
        if not isinstance(v, AlignmentFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `AlignmentFile`")
        else:
            match += 1
        # validate data type: ConfigurationFile
        if not isinstance(v, ConfigurationFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ConfigurationFile`")
        else:
            match += 1
        # validate data type: GenomeBrowserAnnotationFile
        if not isinstance(v, GenomeBrowserAnnotationFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `GenomeBrowserAnnotationFile`")
        else:
            match += 1
        # validate data type: ImageFile
        if not isinstance(v, ImageFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ImageFile`")
        else:
            match += 1
        # validate data type: MatrixFile
        if not isinstance(v, MatrixFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `MatrixFile`")
        else:
            match += 1
        # validate data type: ModelFile
        if not isinstance(v, ModelFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ModelFile`")
        else:
            match += 1
        # validate data type: ReferenceFile
        if not isinstance(v, ReferenceFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ReferenceFile`")
        else:
            match += 1
        # validate data type: SequenceFile
        if not isinstance(v, SequenceFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `SequenceFile`")
        else:
            match += 1
        # validate data type: SignalFile
        if not isinstance(v, SignalFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `SignalFile`")
        else:
            match += 1
        # validate data type: TabularFile
        if not isinstance(v, TabularFile):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TabularFile`")
        else:
            match += 1
        # validate data type: str
        try:
            instance.oneof_schema_11_validator = v
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in LINKTO25 with oneOf schemas: AlignmentFile, ConfigurationFile, GenomeBrowserAnnotationFile, ImageFile, MatrixFile, ModelFile, ReferenceFile, SequenceFile, SignalFile, TabularFile, str. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in LINKTO25 with oneOf schemas: AlignmentFile, ConfigurationFile, GenomeBrowserAnnotationFile, ImageFile, MatrixFile, ModelFile, ReferenceFile, SequenceFile, SignalFile, TabularFile, str. Details: " + ", ".join(error_messages))
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

        # deserialize data into AlignmentFile
        try:
            instance.actual_instance = AlignmentFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ConfigurationFile
        try:
            instance.actual_instance = ConfigurationFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into GenomeBrowserAnnotationFile
        try:
            instance.actual_instance = GenomeBrowserAnnotationFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ImageFile
        try:
            instance.actual_instance = ImageFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into MatrixFile
        try:
            instance.actual_instance = MatrixFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ModelFile
        try:
            instance.actual_instance = ModelFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ReferenceFile
        try:
            instance.actual_instance = ReferenceFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into SequenceFile
        try:
            instance.actual_instance = SequenceFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into SignalFile
        try:
            instance.actual_instance = SignalFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TabularFile
        try:
            instance.actual_instance = TabularFile.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into str
        try:
            # validation
            instance.oneof_schema_11_validator = json.loads(json_str)
            # assign value to actual_instance
            instance.actual_instance = instance.oneof_schema_11_validator
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into LINKTO25 with oneOf schemas: AlignmentFile, ConfigurationFile, GenomeBrowserAnnotationFile, ImageFile, MatrixFile, ModelFile, ReferenceFile, SequenceFile, SignalFile, TabularFile, str. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into LINKTO25 with oneOf schemas: AlignmentFile, ConfigurationFile, GenomeBrowserAnnotationFile, ImageFile, MatrixFile, ModelFile, ReferenceFile, SequenceFile, SignalFile, TabularFile, str. Details: " + ", ".join(error_messages))
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

    def to_dict(self) -> Optional[Union[Dict[str, Any], AlignmentFile, ConfigurationFile, GenomeBrowserAnnotationFile, ImageFile, MatrixFile, ModelFile, ReferenceFile, SequenceFile, SignalFile, TabularFile, str]]:
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

from openapi_client.models.alignment_file import AlignmentFile
from openapi_client.models.configuration_file import ConfigurationFile
from openapi_client.models.genome_browser_annotation_file import GenomeBrowserAnnotationFile
from openapi_client.models.image_file import ImageFile
from openapi_client.models.matrix_file import MatrixFile
from openapi_client.models.model_file import ModelFile
from openapi_client.models.reference_file import ReferenceFile
from openapi_client.models.sequence_file import SequenceFile
from openapi_client.models.signal_file import SignalFile
from openapi_client.models.tabular_file import TabularFile
# TODO: Rewrite to not use raise_errors
LINKTO25.model_rebuild(raise_errors=False)

