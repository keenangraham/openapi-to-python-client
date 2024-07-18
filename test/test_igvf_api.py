# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from igvf_client.api.igvf_api import IgvfApi


class TestIgvfApi(unittest.TestCase):
    """IgvfApi unit test stubs"""

    def setUp(self) -> None:
        self.api = IgvfApi()

    def tearDown(self) -> None:
        pass

    def test_download(self) -> None:
        """Test case for download

        Download file.
        """
        pass

    def test_get_by_id(self) -> None:
        """Test case for get_by_id

        Get item information
        """
        pass

    def test_report(self) -> None:
        """Test case for report

        Generate a report based on search query. All results are returned.
        """
        pass

    def test_schema_for_item_type(self) -> None:
        """Test case for schema_for_item_type

        Retrieve JSON schemas for all item types
        """
        pass

    def test_schemas(self) -> None:
        """Test case for schemas

        Retrieve JSON schemas for all item types
        """
        pass

    def test_search(self) -> None:
        """Test case for search

        Search for items in the IGVF Project
        """
        pass


if __name__ == '__main__':
    unittest.main()
