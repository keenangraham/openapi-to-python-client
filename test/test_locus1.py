# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from igvf_client.models.locus1 import Locus1

class TestLocus1(unittest.TestCase):
    """Locus1 unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Locus1:
        """Test Locus1
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Locus1`
        """
        model = Locus1()
        if include_optional:
            return Locus1(
                assembly = 'GRCh38',
                chromosome = 'chrH',
                start = 1,
                end = 1
            )
        else:
            return Locus1(
                assembly = 'GRCh38',
                chromosome = 'chrH',
                start = 1,
                end = 1,
        )
        """

    def testLocus1(self):
        """Test Locus1"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
