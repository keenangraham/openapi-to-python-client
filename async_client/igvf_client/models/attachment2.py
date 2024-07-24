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

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class Attachment2(BaseModel):
    """
    The attached content.
    """ # noqa: E501
    download: Optional[StrictStr] = None
    href: Optional[StrictStr] = None
    type: Optional[StrictStr] = None
    md5sum: Optional[StrictStr] = None
    size: Optional[Annotated[int, Field(strict=True, ge=0)]] = None
    width: Optional[Annotated[int, Field(strict=True, ge=0)]] = None
    height: Optional[Annotated[int, Field(strict=True, ge=0)]] = None
    __properties: ClassVar[List[str]] = ["download", "href", "type", "md5sum", "size", "width", "height"]

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['application/json', 'application/pdf', 'image/gif', 'image/jpeg', 'image/png', 'image/svs', 'image/tiff', 'text/autosql', 'text/html', 'text/plain', 'text/tab-separated-values']):
            raise ValueError("must be one of enum values ('application/json', 'application/pdf', 'image/gif', 'image/jpeg', 'image/png', 'image/svs', 'image/tiff', 'text/autosql', 'text/html', 'text/plain', 'text/tab-separated-values')")
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
        """Create an instance of Attachment2 from a JSON string"""
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
        """Create an instance of Attachment2 from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "download": obj.get("download"),
            "href": obj.get("href"),
            "type": obj.get("type"),
            "md5sum": obj.get("md5sum"),
            "size": obj.get("size"),
            "width": obj.get("width"),
            "height": obj.get("height")
        })
        return _obj


