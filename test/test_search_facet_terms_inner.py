# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.search_facet_terms_inner import SearchFacetTermsInner

class TestSearchFacetTermsInner(unittest.TestCase):
    """SearchFacetTermsInner unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SearchFacetTermsInner:
        """Test SearchFacetTermsInner
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SearchFacetTermsInner`
        """
        model = SearchFacetTermsInner()
        if include_optional:
            return SearchFacetTermsInner(
                key = '',
                doc_count = 56
            )
        else:
            return SearchFacetTermsInner(
        )
        """

    def testSearchFacetTermsInner(self):
        """Test SearchFacetTermsInner"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
