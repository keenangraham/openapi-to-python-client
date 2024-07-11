# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from igvf_client.models.construct_library_set import ConstructLibrarySet

class TestConstructLibrarySet(unittest.TestCase):
    """ConstructLibrarySet unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ConstructLibrarySet:
        """Test ConstructLibrarySet
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ConstructLibrarySet`
        """
        model = ConstructLibrarySet()
        if include_optional:
            return ConstructLibrarySet(
                small_scale_loci_list = [
                    igvf_client.models.locus.Locus(
                        assembly = 'GRCh38', 
                        chromosome = 'chrH', 
                        start = 1, 
                        end = 1, )
                    ],
                large_scale_loci_list = '',
                small_scale_gene_list = [
                    ''
                    ],
                large_scale_gene_list = '',
                release_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                publication_identifiers = [
                    'PMCID:PMC80728'
                    ],
                documents = [
                    ''
                    ],
                sources = [
                    ''
                    ],
                lot_id = 'k',
                product_id = 'addgene:480728',
                lab = '',
                award = '',
                accession = '',
                alternate_accessions = [
                    ''
                    ],
                collections = [
                    'ClinGen'
                    ],
                status = 'in progress',
                revoke_detail = 'k',
                schema_version = '8',
                uuid = '',
                notes = 'k',
                aliases = [
                    'nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw +*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ Jt.I$3Ih*tp,+NY'Z!dpyJezM+mP1,sRwZHPZ+8lAcyyo7d,FVji*!c3BMjbR,51AFs2 aX'*Z)YN$d$Q7-*ibL44UvPD1rJt0*QP( SafHj+SnG9sb8U3D j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T A9L6Cr,Eg0f(7s0t5yeFXWKZ($CkIgSIxhUhQUf)zn+rM3.Bik4tmQLvw(F+*rFEzz6YxF13O)oyzg3Q 3NNI2,A!*DA1rqauOwpA'*P)7i+tYU5hMuO6+41FlE8sC5xy.5EJVp!otZoGU5g,NBVZ!oxH,wlSS.rvuz6sDO zkf_,S(O)B4$Jqvfp'!4_KOGJyGxk2q.oTB$a*jf9Vl2tO+,JLseh4hP ,7mmX.YZG)*a*CWbHGGK!D7fenk8T,rtN2UVGoI5dJxYeg bB-HN4)jP-k8S-U,EyR_nRGRONJh,6*$)*D*J- YxVgxze8VjfgpZ_ibyOs4z+tpW9Q1B_g+F46)kH+SNxwZMQ9fT+h$lf-eA'2NTxfx3e*5dp7tvOJoclH*k AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c bh*neDuK8AFin,gNV3vPK)Z3h)C)HoZ)6RIA(7.P6Oo1PGY$G0sQO9)Ww+.XNEt9Vu(Nqx)dhp0bB)5,L-k$8nv F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+ LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$ YQGA'm$8p7y*-VrC5,fA(_fMJJfrS2G5K.v.$I5QlF_oh*xguIdV'LlbGdmtG_ZjyEui3XQZB4tcxYMU,PV8) iAkV_ODQg'w-04,(KHDyMY87mzgfSRE3.pV7*L-'fTKE+y9*'39DoFZG 948iQULO'lrDpJYSpljENZocydML21_2E1I-nYQNqCofA0eUV,ev3CL*BkavNpq9xN)DH,R!_WH)'wf*2LJBrjrL9!0iNLNhd.d+rRh9zu_Pksl,RKIILX5JYC*YgD!Nt2GcV!W95nM7esQTfUbG$pyysYsHbzkSFD1UWXbI4C41s(8.MtvHDqCPR!0k1ohaHJFrP-T*eSDn3'w$nrsOK7IHZXQXdn2bvYLl-1hR)NVTS_Ik+HQkK5kOLFDhKCHQd0V NmCxikoqVz,$93y9ppTX4GAjP9eNDb_CFMkkxDdmZ*V4(AlL.uY1'baV9jrJfjP0Ait+OkqQ- JL1oVzyp6_2HprCDQYql_Qh_rNu-C'q6BT-iNrVm1J09vEykv+napXJ.pokFRqdQj3 6gEbwQMH)pT$))eYoJvREwP-IoScK(E gBw)bGoUOg!Kjs'+uhDFK!f(N5)0ye,)gC9Gzpiuk)w9ZEx6lEJJVke$w,dHJkU9MiRbo9g*-(dAu(JM4_Tm5,hc_yAYvpo)QjcDy'j,)UOkYnZdaW8rPYx(W*!H8dXe3h4M0GMfPaC6SCWqtT'PG54QI'V,vL.d1* zUc4lb9c$ADog55+4k3*SUx+5NDO.$lw98b8bx)Rse4Y0,'qaJ(oTXYw6pbSKM'Ec G)-TD8AeE8h9-mOk2negcnBuwn)+9G0vTSu9$9 v*8deLwQqUpDS)_X_tBe3Bxcv(xK4y.F1(oH,f2OvvmL0+SHPXf'2Ln*a)2Y1-G(1E,-hK*oZP)kt,2+1zJgJhsqSbvHG'u oY(5X96uJ0vB73dwy*JUR'A*MRo0MOD.SkJ+fMi)SLYrAYBDDsQN7rKyfz)qeFdewH_tnyXPxAYn6KJFpr4IBPG.dQEI)oG(02mu0TN**u'8r*qTXRIlx74W2um(7Bag(5tk4If,o,-1Md)wCYOsxIC8'v !aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9 T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq G6uL 2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt KLrHOhzQ$(4FB8,Y61YXkax+U96$68E39_CO)U*S3+W8BS5ccxb58vvYN!-BEFqdE!z)4)oV-oIEhub3.$a'iYqVdumpMCMe)_Dt_ViM*Dr5gZydZRbV64mEtq9aBR$3pXm0eQup+y7aC'H9S0MC_ x*stOihrCQCFSzRpl1pSXgX.Z$vGZ$YiFIiQDK3w5njnq3ij(IWVIdC5xw$LjdHB.a2MEaJ1xW,'GlzsgtL$BaClPpVtG'6IOmX*GKzZCAHWWgLkUhV_*bDlEuk+ $GFpTLsrF,d4Uv-RrG_f5d+),OU1XhS_)afBA2fVgcrsB*7c,BiAEfP1H43mf+iSH9n19mZrXZ+3ivvqq6gEKCye+'qRaPZxUdIYZinZ z6(J0iI,_B4sKmFdWw!PL-aeiK*EfFA,sVE6foPRHjEkr E9)!1Sa7L7mB4Xx$DkLGqJ2yY*uecLjd0_0 SHH.gg3g$H9NhvR!_l*jLjt-(.(RnOGOFiQ(GLahdd6j7a!pTy5LHaxOd+Psp_zG7_Jn.nO4'IeHS1!p(UTBnax0R0ym,L!CBGg+J)+1EiB2)szv(k)nP HHzb6J('mpbceG0_)h.OJsd0h6X,pDsg6V)Dpvp-5k9t8v,JUJD)qUX3ome. XOk*XAAIQ$5)iAy(Ix9QP5QWU(Ol9f)o'c(RczCDlLGz0eEuI9cHSPp.hDij,l0BM-k96B!_5VFT GWh)dHzx5p2xRGFeJ9EchG *td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6 XxtHeMQ lIF6WaYJWTM1t)pn4'xj0Awu!*)+cjM38rPMv02o,7!HLeYHnC D_NE48l'TN3jh5WGH4yff7X4eSDAsyXJ4C$(2$+E+6Mj1GKxThG_Vvb*Kc0u2qB'tfn(!(oH OIpadFXdSV,Ep+OcOEhK2,AsLG!qI)ZH80 vDBl5H5D8yeyw.(0B6p* 02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C TN.x'EQS1BM-aWjOEhWa8zAz2NIH_D6JDe(l,HU*tz_,Qfk0kkiFejyx*4B+PmJ1Q(c 8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi'
                    ],
                creation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                submitted_by = '',
                submitter_comment = 'k',
                description = 'k',
                file_set_type = 'guide library',
                scope = 'tile',
                selection_criteria = [
                    'accessible genome regions'
                    ],
                integrated_content_files = [
                    ''
                    ],
                associated_phenotypes = [
                    ''
                    ],
                orf_list = [
                    ''
                    ],
                exon = 'k',
                tile = igvf_client.models.tile.Tile(
                    tile_id = 'k', 
                    tile_start = 1, 
                    tile_end = 1, ),
                guide_type = 'sgRNA',
                tiling_modality = 'peak tiling',
                average_guide_coverage = 0,
                lower_bound_guide_coverage = 56,
                upper_bound_guide_coverage = 56,
                average_insert_size = 0,
                lower_bound_insert_size = 56,
                upper_bound_insert_size = 56,
                targeton = 'k',
                id = '',
                type = [
                    ''
                    ],
                summary = '',
                files = [
                    null
                    ],
                control_for = [
                    null
                    ],
                submitted_files_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                input_file_set_for = [
                    null
                    ],
                applied_to_samples = [
                    null
                    ]
            )
        else:
            return ConstructLibrarySet(
        )
        """

    def testConstructLibrarySet(self):
        """Test ConstructLibrarySet"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
