# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from igvf_client.models.page_layout_components import PageLayoutComponents

class TestPageLayoutComponents(unittest.TestCase):
    """PageLayoutComponents unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PageLayoutComponents:
        """Test PageLayoutComponents
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PageLayoutComponents`
        """
        model = PageLayoutComponents()
        if include_optional:
            return PageLayoutComponents(
                id = '',
                type = '',
                body = '',
                direction = ''
            )
        else:
            return PageLayoutComponents(
        )
        """

    def testPageLayoutComponents(self):
        """Test PageLayoutComponents"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
