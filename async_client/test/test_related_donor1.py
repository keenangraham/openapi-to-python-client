# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from async_igvf_client.models.related_donor1 import RelatedDonor1

class TestRelatedDonor1(unittest.TestCase):
    """RelatedDonor1 unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RelatedDonor1:
        """Test RelatedDonor1
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RelatedDonor1`
        """
        model = RelatedDonor1()
        if include_optional:
            return RelatedDonor1(
                donor = '',
                relationship_type = 'aunt'
            )
        else:
            return RelatedDonor1(
                donor = '',
                relationship_type = 'aunt',
        )
        """

    def testRelatedDonor1(self):
        """Test RelatedDonor1"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()