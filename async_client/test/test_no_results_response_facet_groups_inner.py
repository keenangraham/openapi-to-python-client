# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from async_igvf_client.models.no_results_response_facet_groups_inner import NoResultsResponseFacetGroupsInner

class TestNoResultsResponseFacetGroupsInner(unittest.TestCase):
    """NoResultsResponseFacetGroupsInner unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> NoResultsResponseFacetGroupsInner:
        """Test NoResultsResponseFacetGroupsInner
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `NoResultsResponseFacetGroupsInner`
        """
        model = NoResultsResponseFacetGroupsInner()
        if include_optional:
            return NoResultsResponseFacetGroupsInner(
                name = '',
                title = '',
                facet_fields = [
                    ''
                    ]
            )
        else:
            return NoResultsResponseFacetGroupsInner(
        )
        """

    def testNoResultsResponseFacetGroupsInner(self):
        """Test NoResultsResponseFacetGroupsInner"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
