# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from datetime import datetime
from pydantic import Field, StrictBool, StrictStr, field_validator
from typing import Any, List, Optional
from typing_extensions import Annotated
from igvf_client.models.degron_modification_results import DegronModificationResults

from igvf_client.api_client import ApiClient, RequestSerialized
from igvf_client.api_response import ApiResponse
from igvf_client.rest import RESTResponseType


class DegronModificationsApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def degron_modifications(
        self,
        query: Annotated[Optional[StrictStr], Field(description="Query string for searching.")] = None,
        limit: Annotated[Optional[Any], Field(description="Maximum number of results to return. Use 'all' for all results.")] = None,
        sort: Annotated[Optional[List[StrictStr]], Field(description="Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.")] = None,
        release_timestamp: Annotated[Optional[datetime], Field(description="Filter by release_timestamp")] = None,
        sources: Annotated[Optional[List[StrictStr]], Field(description="Filter by sources")] = None,
        lot_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by lot_id")] = None,
        product_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by product_id")] = None,
        documents: Annotated[Optional[List[StrictStr]], Field(description="Filter by documents")] = None,
        status: Annotated[Optional[StrictStr], Field(description="Filter by status")] = None,
        lab: Annotated[Optional[StrictStr], Field(description="Filter by lab")] = None,
        award: Annotated[Optional[StrictStr], Field(description="Filter by award")] = None,
        schema_version: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by schema_version")] = None,
        uuid: Annotated[Optional[StrictStr], Field(description="Filter by uuid")] = None,
        notes: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by notes")] = None,
        aliases: Annotated[Optional[List[Annotated[str, Field(strict=True)]]], Field(description="Filter by aliases")] = None,
        creation_timestamp: Annotated[Optional[datetime], Field(description="Filter by creation_timestamp")] = None,
        submitted_by: Annotated[Optional[StrictStr], Field(description="Filter by submitted_by")] = None,
        submitter_comment: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by submitter_comment")] = None,
        description: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by description")] = None,
        activated: Annotated[Optional[StrictBool], Field(description="Filter by activated")] = None,
        activating_agent_term_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by activating_agent_term_id")] = None,
        activating_agent_term_name: Annotated[Optional[StrictStr], Field(description="Filter by activating_agent_term_name")] = None,
        modality: Annotated[Optional[StrictStr], Field(description="Filter by modality")] = None,
        degron_system: Annotated[Optional[StrictStr], Field(description="Filter by degron_system")] = None,
        tagged_proteins: Annotated[Optional[List[StrictStr]], Field(description="Filter by tagged_proteins")] = None,
        id: Annotated[Optional[StrictStr], Field(description="Filter by @id")] = None,
        summary: Annotated[Optional[StrictStr], Field(description="Filter by summary")] = None,
        biosamples_modified: Annotated[Optional[List[Any]], Field(description="Filter by biosamples_modified")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> DegronModificationResults:
        """List items in the DegronModification collection.

        Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

        :param query: Query string for searching.
        :type query: str
        :param limit: Maximum number of results to return. Use 'all' for all results.
        :type limit: SearchLimitParameter
        :param sort: Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
        :type sort: List[str]
        :param release_timestamp: Filter by release_timestamp
        :type release_timestamp: datetime
        :param sources: Filter by sources
        :type sources: List[str]
        :param lot_id: Filter by lot_id
        :type lot_id: str
        :param product_id: Filter by product_id
        :type product_id: str
        :param documents: Filter by documents
        :type documents: List[str]
        :param status: Filter by status
        :type status: str
        :param lab: Filter by lab
        :type lab: str
        :param award: Filter by award
        :type award: str
        :param schema_version: Filter by schema_version
        :type schema_version: str
        :param uuid: Filter by uuid
        :type uuid: str
        :param notes: Filter by notes
        :type notes: str
        :param aliases: Filter by aliases
        :type aliases: List[str]
        :param creation_timestamp: Filter by creation_timestamp
        :type creation_timestamp: datetime
        :param submitted_by: Filter by submitted_by
        :type submitted_by: str
        :param submitter_comment: Filter by submitter_comment
        :type submitter_comment: str
        :param description: Filter by description
        :type description: str
        :param activated: Filter by activated
        :type activated: bool
        :param activating_agent_term_id: Filter by activating_agent_term_id
        :type activating_agent_term_id: str
        :param activating_agent_term_name: Filter by activating_agent_term_name
        :type activating_agent_term_name: str
        :param modality: Filter by modality
        :type modality: str
        :param degron_system: Filter by degron_system
        :type degron_system: str
        :param tagged_proteins: Filter by tagged_proteins
        :type tagged_proteins: List[str]
        :param id: Filter by @id
        :type id: str
        :param summary: Filter by summary
        :type summary: str
        :param biosamples_modified: Filter by biosamples_modified
        :type biosamples_modified: List[object]
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._degron_modifications_serialize(
            query=query,
            limit=limit,
            sort=sort,
            release_timestamp=release_timestamp,
            sources=sources,
            lot_id=lot_id,
            product_id=product_id,
            documents=documents,
            status=status,
            lab=lab,
            award=award,
            schema_version=schema_version,
            uuid=uuid,
            notes=notes,
            aliases=aliases,
            creation_timestamp=creation_timestamp,
            submitted_by=submitted_by,
            submitter_comment=submitter_comment,
            description=description,
            activated=activated,
            activating_agent_term_id=activating_agent_term_id,
            activating_agent_term_name=activating_agent_term_name,
            modality=modality,
            degron_system=degron_system,
            tagged_proteins=tagged_proteins,
            id=id,
            summary=summary,
            biosamples_modified=biosamples_modified,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DegronModificationResults",
            '400': "object",
            '404': "NoResultsResponse",
            '500': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def degron_modifications_with_http_info(
        self,
        query: Annotated[Optional[StrictStr], Field(description="Query string for searching.")] = None,
        limit: Annotated[Optional[Any], Field(description="Maximum number of results to return. Use 'all' for all results.")] = None,
        sort: Annotated[Optional[List[StrictStr]], Field(description="Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.")] = None,
        release_timestamp: Annotated[Optional[datetime], Field(description="Filter by release_timestamp")] = None,
        sources: Annotated[Optional[List[StrictStr]], Field(description="Filter by sources")] = None,
        lot_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by lot_id")] = None,
        product_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by product_id")] = None,
        documents: Annotated[Optional[List[StrictStr]], Field(description="Filter by documents")] = None,
        status: Annotated[Optional[StrictStr], Field(description="Filter by status")] = None,
        lab: Annotated[Optional[StrictStr], Field(description="Filter by lab")] = None,
        award: Annotated[Optional[StrictStr], Field(description="Filter by award")] = None,
        schema_version: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by schema_version")] = None,
        uuid: Annotated[Optional[StrictStr], Field(description="Filter by uuid")] = None,
        notes: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by notes")] = None,
        aliases: Annotated[Optional[List[Annotated[str, Field(strict=True)]]], Field(description="Filter by aliases")] = None,
        creation_timestamp: Annotated[Optional[datetime], Field(description="Filter by creation_timestamp")] = None,
        submitted_by: Annotated[Optional[StrictStr], Field(description="Filter by submitted_by")] = None,
        submitter_comment: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by submitter_comment")] = None,
        description: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by description")] = None,
        activated: Annotated[Optional[StrictBool], Field(description="Filter by activated")] = None,
        activating_agent_term_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by activating_agent_term_id")] = None,
        activating_agent_term_name: Annotated[Optional[StrictStr], Field(description="Filter by activating_agent_term_name")] = None,
        modality: Annotated[Optional[StrictStr], Field(description="Filter by modality")] = None,
        degron_system: Annotated[Optional[StrictStr], Field(description="Filter by degron_system")] = None,
        tagged_proteins: Annotated[Optional[List[StrictStr]], Field(description="Filter by tagged_proteins")] = None,
        id: Annotated[Optional[StrictStr], Field(description="Filter by @id")] = None,
        summary: Annotated[Optional[StrictStr], Field(description="Filter by summary")] = None,
        biosamples_modified: Annotated[Optional[List[Any]], Field(description="Filter by biosamples_modified")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[DegronModificationResults]:
        """List items in the DegronModification collection.

        Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

        :param query: Query string for searching.
        :type query: str
        :param limit: Maximum number of results to return. Use 'all' for all results.
        :type limit: SearchLimitParameter
        :param sort: Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
        :type sort: List[str]
        :param release_timestamp: Filter by release_timestamp
        :type release_timestamp: datetime
        :param sources: Filter by sources
        :type sources: List[str]
        :param lot_id: Filter by lot_id
        :type lot_id: str
        :param product_id: Filter by product_id
        :type product_id: str
        :param documents: Filter by documents
        :type documents: List[str]
        :param status: Filter by status
        :type status: str
        :param lab: Filter by lab
        :type lab: str
        :param award: Filter by award
        :type award: str
        :param schema_version: Filter by schema_version
        :type schema_version: str
        :param uuid: Filter by uuid
        :type uuid: str
        :param notes: Filter by notes
        :type notes: str
        :param aliases: Filter by aliases
        :type aliases: List[str]
        :param creation_timestamp: Filter by creation_timestamp
        :type creation_timestamp: datetime
        :param submitted_by: Filter by submitted_by
        :type submitted_by: str
        :param submitter_comment: Filter by submitter_comment
        :type submitter_comment: str
        :param description: Filter by description
        :type description: str
        :param activated: Filter by activated
        :type activated: bool
        :param activating_agent_term_id: Filter by activating_agent_term_id
        :type activating_agent_term_id: str
        :param activating_agent_term_name: Filter by activating_agent_term_name
        :type activating_agent_term_name: str
        :param modality: Filter by modality
        :type modality: str
        :param degron_system: Filter by degron_system
        :type degron_system: str
        :param tagged_proteins: Filter by tagged_proteins
        :type tagged_proteins: List[str]
        :param id: Filter by @id
        :type id: str
        :param summary: Filter by summary
        :type summary: str
        :param biosamples_modified: Filter by biosamples_modified
        :type biosamples_modified: List[object]
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._degron_modifications_serialize(
            query=query,
            limit=limit,
            sort=sort,
            release_timestamp=release_timestamp,
            sources=sources,
            lot_id=lot_id,
            product_id=product_id,
            documents=documents,
            status=status,
            lab=lab,
            award=award,
            schema_version=schema_version,
            uuid=uuid,
            notes=notes,
            aliases=aliases,
            creation_timestamp=creation_timestamp,
            submitted_by=submitted_by,
            submitter_comment=submitter_comment,
            description=description,
            activated=activated,
            activating_agent_term_id=activating_agent_term_id,
            activating_agent_term_name=activating_agent_term_name,
            modality=modality,
            degron_system=degron_system,
            tagged_proteins=tagged_proteins,
            id=id,
            summary=summary,
            biosamples_modified=biosamples_modified,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DegronModificationResults",
            '400': "object",
            '404': "NoResultsResponse",
            '500': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def degron_modifications_without_preload_content(
        self,
        query: Annotated[Optional[StrictStr], Field(description="Query string for searching.")] = None,
        limit: Annotated[Optional[Any], Field(description="Maximum number of results to return. Use 'all' for all results.")] = None,
        sort: Annotated[Optional[List[StrictStr]], Field(description="Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.")] = None,
        release_timestamp: Annotated[Optional[datetime], Field(description="Filter by release_timestamp")] = None,
        sources: Annotated[Optional[List[StrictStr]], Field(description="Filter by sources")] = None,
        lot_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by lot_id")] = None,
        product_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by product_id")] = None,
        documents: Annotated[Optional[List[StrictStr]], Field(description="Filter by documents")] = None,
        status: Annotated[Optional[StrictStr], Field(description="Filter by status")] = None,
        lab: Annotated[Optional[StrictStr], Field(description="Filter by lab")] = None,
        award: Annotated[Optional[StrictStr], Field(description="Filter by award")] = None,
        schema_version: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by schema_version")] = None,
        uuid: Annotated[Optional[StrictStr], Field(description="Filter by uuid")] = None,
        notes: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by notes")] = None,
        aliases: Annotated[Optional[List[Annotated[str, Field(strict=True)]]], Field(description="Filter by aliases")] = None,
        creation_timestamp: Annotated[Optional[datetime], Field(description="Filter by creation_timestamp")] = None,
        submitted_by: Annotated[Optional[StrictStr], Field(description="Filter by submitted_by")] = None,
        submitter_comment: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by submitter_comment")] = None,
        description: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by description")] = None,
        activated: Annotated[Optional[StrictBool], Field(description="Filter by activated")] = None,
        activating_agent_term_id: Annotated[Optional[Annotated[str, Field(strict=True)]], Field(description="Filter by activating_agent_term_id")] = None,
        activating_agent_term_name: Annotated[Optional[StrictStr], Field(description="Filter by activating_agent_term_name")] = None,
        modality: Annotated[Optional[StrictStr], Field(description="Filter by modality")] = None,
        degron_system: Annotated[Optional[StrictStr], Field(description="Filter by degron_system")] = None,
        tagged_proteins: Annotated[Optional[List[StrictStr]], Field(description="Filter by tagged_proteins")] = None,
        id: Annotated[Optional[StrictStr], Field(description="Filter by @id")] = None,
        summary: Annotated[Optional[StrictStr], Field(description="Filter by summary")] = None,
        biosamples_modified: Annotated[Optional[List[Any]], Field(description="Filter by biosamples_modified")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """List items in the DegronModification collection.

        Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

        :param query: Query string for searching.
        :type query: str
        :param limit: Maximum number of results to return. Use 'all' for all results.
        :type limit: SearchLimitParameter
        :param sort: Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
        :type sort: List[str]
        :param release_timestamp: Filter by release_timestamp
        :type release_timestamp: datetime
        :param sources: Filter by sources
        :type sources: List[str]
        :param lot_id: Filter by lot_id
        :type lot_id: str
        :param product_id: Filter by product_id
        :type product_id: str
        :param documents: Filter by documents
        :type documents: List[str]
        :param status: Filter by status
        :type status: str
        :param lab: Filter by lab
        :type lab: str
        :param award: Filter by award
        :type award: str
        :param schema_version: Filter by schema_version
        :type schema_version: str
        :param uuid: Filter by uuid
        :type uuid: str
        :param notes: Filter by notes
        :type notes: str
        :param aliases: Filter by aliases
        :type aliases: List[str]
        :param creation_timestamp: Filter by creation_timestamp
        :type creation_timestamp: datetime
        :param submitted_by: Filter by submitted_by
        :type submitted_by: str
        :param submitter_comment: Filter by submitter_comment
        :type submitter_comment: str
        :param description: Filter by description
        :type description: str
        :param activated: Filter by activated
        :type activated: bool
        :param activating_agent_term_id: Filter by activating_agent_term_id
        :type activating_agent_term_id: str
        :param activating_agent_term_name: Filter by activating_agent_term_name
        :type activating_agent_term_name: str
        :param modality: Filter by modality
        :type modality: str
        :param degron_system: Filter by degron_system
        :type degron_system: str
        :param tagged_proteins: Filter by tagged_proteins
        :type tagged_proteins: List[str]
        :param id: Filter by @id
        :type id: str
        :param summary: Filter by summary
        :type summary: str
        :param biosamples_modified: Filter by biosamples_modified
        :type biosamples_modified: List[object]
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._degron_modifications_serialize(
            query=query,
            limit=limit,
            sort=sort,
            release_timestamp=release_timestamp,
            sources=sources,
            lot_id=lot_id,
            product_id=product_id,
            documents=documents,
            status=status,
            lab=lab,
            award=award,
            schema_version=schema_version,
            uuid=uuid,
            notes=notes,
            aliases=aliases,
            creation_timestamp=creation_timestamp,
            submitted_by=submitted_by,
            submitter_comment=submitter_comment,
            description=description,
            activated=activated,
            activating_agent_term_id=activating_agent_term_id,
            activating_agent_term_name=activating_agent_term_name,
            modality=modality,
            degron_system=degron_system,
            tagged_proteins=tagged_proteins,
            id=id,
            summary=summary,
            biosamples_modified=biosamples_modified,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "DegronModificationResults",
            '400': "object",
            '404': "NoResultsResponse",
            '500': None,
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _degron_modifications_serialize(
        self,
        query,
        limit,
        sort,
        release_timestamp,
        sources,
        lot_id,
        product_id,
        documents,
        status,
        lab,
        award,
        schema_version,
        uuid,
        notes,
        aliases,
        creation_timestamp,
        submitted_by,
        submitter_comment,
        description,
        activated,
        activating_agent_term_id,
        activating_agent_term_name,
        modality,
        degron_system,
        tagged_proteins,
        id,
        summary,
        biosamples_modified,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
            'sort': 'multi',
            'sources': 'multi',
            'documents': 'multi',
            'aliases': 'multi',
            'tagged_proteins': 'multi',
            'biosamples_modified': 'multi',
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[str, Union[str, bytes]] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if query is not None:
            
            _query_params.append(('query', query))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if sort is not None:
            
            _query_params.append(('sort', sort))
            
        if release_timestamp is not None:
            if isinstance(release_timestamp, datetime):
                _query_params.append(
                    (
                        'release_timestamp',
                        release_timestamp.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('release_timestamp', release_timestamp))
            
        if sources is not None:
            
            _query_params.append(('sources', sources))
            
        if lot_id is not None:
            
            _query_params.append(('lot_id', lot_id))
            
        if product_id is not None:
            
            _query_params.append(('product_id', product_id))
            
        if documents is not None:
            
            _query_params.append(('documents', documents))
            
        if status is not None:
            
            _query_params.append(('status', status))
            
        if lab is not None:
            
            _query_params.append(('lab', lab))
            
        if award is not None:
            
            _query_params.append(('award', award))
            
        if schema_version is not None:
            
            _query_params.append(('schema_version', schema_version))
            
        if uuid is not None:
            
            _query_params.append(('uuid', uuid))
            
        if notes is not None:
            
            _query_params.append(('notes', notes))
            
        if aliases is not None:
            
            _query_params.append(('aliases', aliases))
            
        if creation_timestamp is not None:
            if isinstance(creation_timestamp, datetime):
                _query_params.append(
                    (
                        'creation_timestamp',
                        creation_timestamp.strftime(
                            self.api_client.configuration.datetime_format
                        )
                    )
                )
            else:
                _query_params.append(('creation_timestamp', creation_timestamp))
            
        if submitted_by is not None:
            
            _query_params.append(('submitted_by', submitted_by))
            
        if submitter_comment is not None:
            
            _query_params.append(('submitter_comment', submitter_comment))
            
        if description is not None:
            
            _query_params.append(('description', description))
            
        if activated is not None:
            
            _query_params.append(('activated', activated))
            
        if activating_agent_term_id is not None:
            
            _query_params.append(('activating_agent_term_id', activating_agent_term_id))
            
        if activating_agent_term_name is not None:
            
            _query_params.append(('activating_agent_term_name', activating_agent_term_name))
            
        if modality is not None:
            
            _query_params.append(('modality', modality))
            
        if degron_system is not None:
            
            _query_params.append(('degron_system', degron_system))
            
        if tagged_proteins is not None:
            
            _query_params.append(('tagged_proteins', tagged_proteins))
            
        if id is not None:
            
            _query_params.append(('@id', id))
            
        if summary is not None:
            
            _query_params.append(('summary', summary))
            
        if biosamples_modified is not None:
            
            _query_params.append(('biosamples_modified', biosamples_modified))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter

        # Set client side default value of Query Param "frame".
        _query_params.append(('frame', 'object'))

        # set the HTTP header `Accept`
        _header_params['Accept'] = self.api_client.select_header_accept(
            [
                'application/json'
            ]
        )


        # authentication setting
        _auth_settings: List[str] = [
            'basicAuth'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/degron-modifications/@@listing',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )


