# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from igvf_client.api.labs_api import LabsApi


class TestLabsApi(unittest.TestCase):
    """LabsApi unit test stubs"""

    def setUp(self) -> None:
        self.api = LabsApi()

    def tearDown(self) -> None:
        pass

    def test_labs(self) -> None:
        """Test case for labs

        List items in the Lab collection.
        """
        pass


if __name__ == '__main__':
    unittest.main()
