# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from igvf_client.api.batch_download_api import BatchDownloadApi


class TestBatchDownloadApi(unittest.TestCase):
    """BatchDownloadApi unit test stubs"""

    def setUp(self) -> None:
        self.api = BatchDownloadApi()

    def tearDown(self) -> None:
        pass

    def test_batch_download(self) -> None:
        """Test case for batch_download

        List files to download based on search query. All results are returned.
        """
        pass


if __name__ == '__main__':
    unittest.main()
