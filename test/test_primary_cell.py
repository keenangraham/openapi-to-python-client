# coding: utf-8

"""
    IGVF Project API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.primary_cell import PrimaryCell

class TestPrimaryCell(unittest.TestCase):
    """PrimaryCell unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PrimaryCell:
        """Test PrimaryCell
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PrimaryCell`
        """
        model = PrimaryCell()
        if include_optional:
            return PrimaryCell(
                release_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                publication_identifiers = [
                    'PMCID:PMC80728'
                    ],
                taxa = 'Homo sapiens',
                url = '',
                sources = [
                    null
                    ],
                lot_id = 'k',
                product_id = 'k',
                documents = [
                    null
                    ],
                lab = None,
                award = None,
                accession = '',
                alternate_accessions = [
                    ''
                    ],
                collections = [
                    'ClinGen'
                    ],
                status = 'in progress',
                revoke_detail = 'k',
                schema_version = '19',
                uuid = '',
                notes = 'k',
                aliases = [
                    'nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw +*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ Jt.I$3Ih*tp,+NY'Z!dpyJezM+mP1,sRwZHPZ+8lAcyyo7d,FVji*!c3BMjbR,51AFs2 aX'*Z)YN$d$Q7-*ibL44UvPD1rJt0*QP( SafHj+SnG9sb8U3D j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T A9L6Cr,Eg0f(7s0t5yeFXWKZ($CkIgSIxhUhQUf)zn+rM3.Bik4tmQLvw(F+*rFEzz6YxF13O)oyzg3Q 3NNI2,A!*DA1rqauOwpA'*P)7i+tYU5hMuO6+41FlE8sC5xy.5EJVp!otZoGU5g,NBVZ!oxH,wlSS.rvuz6sDO zkf_,S(O)B4$Jqvfp'!4_KOGJyGxk2q.oTB$a*jf9Vl2tO+,JLseh4hP ,7mmX.YZG)*a*CWbHGGK!D7fenk8T,rtN2UVGoI5dJxYeg bB-HN4)jP-k8S-U,EyR_nRGRONJh,6*$)*D*J- YxVgxze8VjfgpZ_ibyOs4z+tpW9Q1B_g+F46)kH+SNxwZMQ9fT+h$lf-eA'2NTxfx3e*5dp7tvOJoclH*k AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c bh*neDuK8AFin,gNV3vPK)Z3h)C)HoZ)6RIA(7.P6Oo1PGY$G0sQO9)Ww+.XNEt9Vu(Nqx)dhp0bB)5,L-k$8nv F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+ LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$ YQGA'm$8p7y*-VrC5,fA(_fMJJfrS2G5K.v.$I5QlF_oh*xguIdV'LlbGdmtG_ZjyEui3XQZB4tcxYMU,PV8) iAkV_ODQg'w-04,(KHDyMY87mzgfSRE3.pV7*L-'fTKE+y9*'39DoFZG 948iQULO'lrDpJYSpljENZocydML21_2E1I-nYQNqCofA0eUV,ev3CL*BkavNpq9xN)DH,R!_WH)'wf*2LJBrjrL9!0iNLNhd.d+rRh9zu_Pksl,RKIILX5JYC*YgD!Nt2GcV!W95nM7esQTfUbG$pyysYsHbzkSFD1UWXbI4C41s(8.MtvHDqCPR!0k1ohaHJFrP-T*eSDn3'w$nrsOK7IHZXQXdn2bvYLl-1hR)NVTS_Ik+HQkK5kOLFDhKCHQd0V NmCxikoqVz,$93y9ppTX4GAjP9eNDb_CFMkkxDdmZ*V4(AlL.uY1'baV9jrJfjP0Ait+OkqQ- JL1oVzyp6_2HprCDQYql_Qh_rNu-C'q6BT-iNrVm1J09vEykv+napXJ.pokFRqdQj3 6gEbwQMH)pT$))eYoJvREwP-IoScK(E gBw)bGoUOg!Kjs'+uhDFK!f(N5)0ye,)gC9Gzpiuk)w9ZEx6lEJJVke$w,dHJkU9MiRbo9g*-(dAu(JM4_Tm5,hc_yAYvpo)QjcDy'j,)UOkYnZdaW8rPYx(W*!H8dXe3h4M0GMfPaC6SCWqtT'PG54QI'V,vL.d1* zUc4lb9c$ADog55+4k3*SUx+5NDO.$lw98b8bx)Rse4Y0,'qaJ(oTXYw6pbSKM'Ec G)-TD8AeE8h9-mOk2negcnBuwn)+9G0vTSu9$9 v*8deLwQqUpDS)_X_tBe3Bxcv(xK4y.F1(oH,f2OvvmL0+SHPXf'2Ln*a)2Y1-G(1E,-hK*oZP)kt,2+1zJgJhsqSbvHG'u oY(5X96uJ0vB73dwy*JUR'A*MRo0MOD.SkJ+fMi)SLYrAYBDDsQN7rKyfz)qeFdewH_tnyXPxAYn6KJFpr4IBPG.dQEI)oG(02mu0TN**u'8r*qTXRIlx74W2um(7Bag(5tk4If,o,-1Md)wCYOsxIC8'v !aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9 T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq G6uL 2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt KLrHOhzQ$(4FB8,Y61YXkax+U96$68E39_CO)U*S3+W8BS5ccxb58vvYN!-BEFqdE!z)4)oV-oIEhub3.$a'iYqVdumpMCMe)_Dt_ViM*Dr5gZydZRbV64mEtq9aBR$3pXm0eQup+y7aC'H9S0MC_ x*stOihrCQCFSzRpl1pSXgX.Z$vGZ$YiFIiQDK3w5njnq3ij(IWVIdC5xw$LjdHB.a2MEaJ1xW,'GlzsgtL$BaClPpVtG'6IOmX*GKzZCAHWWgLkUhV_*bDlEuk+ $GFpTLsrF,d4Uv-RrG_f5d+),OU1XhS_)afBA2fVgcrsB*7c,BiAEfP1H43mf+iSH9n19mZrXZ+3ivvqq6gEKCye+'qRaPZxUdIYZinZ z6(J0iI,_B4sKmFdWw!PL-aeiK*EfFA,sVE6foPRHjEkr E9)!1Sa7L7mB4Xx$DkLGqJ2yY*uecLjd0_0 SHH.gg3g$H9NhvR!_l*jLjt-(.(RnOGOFiQ(GLahdd6j7a!pTy5LHaxOd+Psp_zG7_Jn.nO4'IeHS1!p(UTBnax0R0ym,L!CBGg+J)+1EiB2)szv(k)nP HHzb6J('mpbceG0_)h.OJsd0h6X,pDsg6V)Dpvp-5k9t8v,JUJD)qUX3ome. XOk*XAAIQ$5)iAy(Ix9QP5QWU(Ol9f)o'c(RczCDlLGz0eEuI9cHSPp.hDij,l0BM-k96B!_5VFT GWh)dHzx5p2xRGFeJ9EchG *td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6 XxtHeMQ lIF6WaYJWTM1t)pn4'xj0Awu!*)+cjM38rPMv02o,7!HLeYHnC D_NE48l'TN3jh5WGH4yff7X4eSDAsyXJ4C$(2$+E+6Mj1GKxThG_Vvb*Kc0u2qB'tfn(!(oH OIpadFXdSV,Ep+OcOEhK2,AsLG!qI)ZH80 vDBl5H5D8yeyw.(0B6p* 02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C TN.x'EQS1BM-aWjOEhWa8zAz2NIH_D6JDe(l,HU*tz_,Qfk0kkiFejyx*4B+PmJ1Q(c 8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi'
                    ],
                creation_timestamp = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                submitted_by = None,
                submitter_comment = 'k',
                description = 'k',
                lower_bound_age = 1.337,
                upper_bound_age = 1.337,
                age_units = 'minute',
                sample_terms = [
                    null
                    ],
                disease_terms = [
                    null
                    ],
                pooled_from = [
                    null
                    ],
                part_of = None,
                originated_from = None,
                treatments = [
                    null
                    ],
                donors = [
                    null
                    ],
                biomarkers = [
                    null
                    ],
                embryonic = True,
                modifications = [
                    null
                    ],
                cellular_sub_pool = 'A PSSEW9gFbDSx8mxCScjDL(CXm8G5 8cfa8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-L wL3CTLxzWhej1zFvhjFRboDzLsp6gf0OAK-kCSql(uFEEYdpfNsNsac1)SIo6lS-8RLNCj.vwl1j7t1vuHb KU.InXclZXDvTILOlNXObqOhIxyXMA.LlW(Yib4.A5LmHAyFXUBTqfd(i3I GV8aagY1hbQonvyyoBvs_)9tea HO3NkWS6xtW2w5xnZwtXEesNYvTjpOQf.NcVPpV9BD04SJp5J46_3dkkS8NUjdcuy-m-_tfX3utne7fNJhTEEe UBwaE8H52.b.mwvBdD-3IxHaS__(IgtBQhxiSednf7s3up4IuPu9pHas7RMR69K_R1SH.IDdd2iwO4O OUkfamo2BQ6mmxM.Nhs0-LdfFeoq5iddFY-1APkqwq-ASJ)-iccbFD0JZlRhF1S)waJliCBEzAsFhZay WXKiMhvWmPxcvBvPeVZ7DZC1UToKSbByTBBJeAk0tA(UZgmKwTe0hS9E2ubKl5qTugFgPqWAqzz.L(hBtzDN1n 7Il9k490OEOd3MT6CK3qatZsZcognF.4hwvchiWkmSyJ11MpvShnAsjW eZK9OAN9Yhyx8YTAcErh7ujSIrDnXyvg)c-8de7ZD1luKr ZgFby74540_uSkwfGLw6Zaj43Ffu5jdnHjM7_l kO.fEAlFLXZS4VcZcagaglWuUFFZ6UAcsO)5J-JpWK7.xiESKImLdxtxTMOgJp8kMc9pbca.gKpX5XtBbk DNwoIBii58AlzvjXkzL1cFtU(wGJsBpEWN4X007jy4ne8B9viHCfRSt.zM)AzqND3VbSpzu2rt3e5m6oyHHFRQa)Q_aoGdVD(L5EG(9z2JfhY(Fl6D--BFq9uvJ)z1.gmLbf9eAlVc3GFPfzIBbiFI0WqfuzQxA20tAzyVT.SCqdFXiTxklrT0n9Ju8nF5H1Xl45CTMi9yNVBoMWen(Yz(PfKgRQB(8t-DSgxDf5tssxRltnj0J7BUY8hLcGaAEm7R s(eP5SikNzvvGcEMzAva2(Tu3L4c5avQxR(XXYqFxVO-l.-ux9CWV6X3Vf8HpUDuxM V-2RsXzBpac-BwWuqaL6xt5VAr.nNYs8k8XUUTDwo0v.V.LbXyer5yR6rmwayWFaFu AxAnVYxdkoZwLN(1Su-5YxiA..BXKnjtWjQv9CVA5r4bWdS4lm)IqDEH2wPKRRON 6p8r(c7gwOVFZt4(NYhH.djg_pvlNjlz0qT(-Xt-5ZlU2QDQCTl_E_3yqEU8)gEdHPMV.myd6_tlp-K1La(pgcn LL66f3bvB45gABxGG4cumOhUPoyiBvyEEGncakfEuYH3dxfN_BsVNj6sxxi56dDz.7cr7IixoI02k7uqhs1f5RRCQ_qoss7VBNec)D4oYkNz f5lpC5-CasX2FJdtRCcC(5MvL-NZXkUml6eucdU94qxl.3L(lkU.7(lM4h(K nA4KOWnh4E)2CzvswM7)Evgpp-fMCbKcrYpAs_4V(fyBlEA7 dbTOTAa5U5y9.iob6cXxY7OnDddCo-Nz)BiQy.nkvhyI.Q7KRN_5vWmQQ.ZW3LZlLBPNr0Mjh1D8LLb0VnGd0fKz S)NfCdFJzT_l(hxwOekxQ(ZhpU4VZH5I.e7KcbAp3XhW 2EplcVYQ4Q7rrr(9URhIQzfZQnCi1u3t7lpIqU(Ykq)MoiH816.g.zI8WGpZ5b.HoBsKh_U68H.ko-qrg)kto cY.xWJUQC-kJgGA_f9h_mmndd-a6gZGSU0ZfTRnSamnltSK_I6SuyfiK i9Bp7x2BFwtzNG2Lj2eFA3vfLs(H_MJmS95Uwm8ayZTBikb_ff)YZmp_FwXXyzWQmf4msgcMeHmnXXWLsBk1Ra0VdMgYeeKqMl4shcOzJNkLurZVF_stf6m5e1raZXj7cvvjGK3zbdzcJPnR0Ax)CC7g5CxQIG.GNtK-gK.((4t9Z8OmSrCr)-SLBVr3QQvG.jUsHfLlzyNPilPIlIdFjwwf7_wPUrIg)AyAyj26(WubQl4o_R0D5B2r4aEswn4SmLN EQW7z_eC99o9q8LjUsSpJ5z2nw3OUtFT5hEnF5OUdZo9kCvlR_Y0vX(_ObpSmWTL_F-v9jVZf MmVlyywIup0M1D6VA3N_W8)Jl3EsRRaLvN7ErJd3roqf(c)tPxe9aIpZxR7-I0B)d. k.uoX_2JztyvPKxhzz6ol8SYuoNuWuO )uMXJN0GK1ZJA30o(z_2KhTfE()wfW6ldEcCVZZ)(9adbgDQwh.leRMlEzuPsKQ6P.)_)cp)yUDbTIYWT2BuKjyzpxgAjJ-IsFm-bn(Md2Pim.aAxmYpbLXR)WcKqcy4_Zb8A5s.k(9TKjAV2Lax0TzGPWN9DVDKXs Oh))upy1M5PFX-DD8pCk9eQ3UvdM9h3SP9ZsrE)Wt5MDktnTvb8.nAsVNP4DYk4Du AW7lbTR0LQaK4hMSpTt4mZ.Yj(jX65fy9UDYI4 p.JDJNgDAlWddy7r566v7tACi8AXZ-zVUu_xM55Cypwo)Ja6DeBL_7V5q6Pg0ZLIsK025.bSQmzGpsVCzajVR1Yz5GwZzwq JnbHI8J1a8WSUyFTWNFCC9M9GpV0JR9x7ERaFWA3-dJYLZROq_ed05CpUB3b1Gdv04fq4phHSsZ(Ozk96ww9Un4I6eQIxg6lwIhlV18OxFA0zS(NKlMKbPLyY60pyUnV1bFaFGUR8qQI0IDxZNhYKKas(r .7YqB4bMaJBkMUeU-Rv_8GLP8GcqU0n9hcZKfi_uj)KjfrcwdAasf)E.bvj912vcZWsf3rchvLpSn-9VrP7a8r(OC0RB3LzrKhzZbAVhx-xzK(o).XAfTkYB)inFbQh..c0)ZFSteTJF2vIMs7HbcUDl3gxIn HSEaxqbRaj(9MHdOLxnocPBF_ySwwT8PZ587pcMrlOpivpmtX.UBdGWmCD32JDXCLsZIfKYtQMcEgNCQkDzSPidOOUiPZTQ_GK.RiXQ)6MdiKIHcdnw1gIDvxACrn(_bXO0nT0BtRC9jW R-qIEA9-6cOLJARGmkX0NeIe64sJ9bPmMstkBzRt-1a.QwQ5ihe0DwVLLxanL8CkS-qlZLExxdBys7iu-bG2TK(KrgjCh0Xc.tZ147sk36zHs75uM(xWURvNJSewADuGA)uGSQTn_AmjaP.-9_8Rcwx.5UOn8eyMR3dUxdf9ygTiLSA)TPWaAv2xygDaWvo05E193n1beIeqZz7qRNxQGWq6vvG6zsGL(qMOuGg(ppWj_.Y4 VhdoXJKc6E4lO1VNaWu)UISeMawY_IDQZT.lYZ(.PEUKHy7FMs8GI2zhYVhI_uYQU-e)W6FFc9ITUSp(uVja)p PLnP8JBPrUjICUC5tv4Mt8j_dli.gACX_rj_yZ.e)x6(URuAUAuEFms47lNT)zmH.FZVTdYzmq2adekYUmXkgB8lQ)inJuuzJ.tcRyHkA1Y6DiOKTtUUjqRAiuocFpH4LWUDa2Cd)dPlRZFp2r 3Dm3 LKl2mfdTjaPE1xNaMvBtqhDijc_wK_LCbWnjOY4l6k(H4L561wdoQZ7_Tw7im0mroVfkOW7)U6aItgWDGRMes8Xqg0F3pr6iH k8byDtbK7UNkmByUwfj.1hPlW7q7Qud.rv60LSQUOsP_4_nQAKR91EQOoVxFhoG__WxD',
                starting_amount = 1.337,
                starting_amount_units = 'cells',
                dbxrefs = [
                    'ENCODE:ENCBS480TGS'
                    ],
                date_obtained = datetime.datetime.strptime('1975-12-30', '%Y-%m-%d').date(),
                sorted_from = None,
                sorted_from_detail = '',
                virtual = True,
                construct_library_sets = [
                    null
                    ],
                moi = 0,
                nucleic_acid_delivery = 'transfection',
                time_post_library_delivery = 1.337,
                time_post_library_delivery_units = 'minute',
                protocols = [
                    'https://www.protocols.io/k'
                    ],
                passage_number = 0,
                id = '',
                type = [
                    ''
                    ],
                summary = '',
                file_sets = [
                    null
                    ],
                multiplexed_in = [
                    null
                    ],
                sorted_fractions = [
                    null
                    ],
                origin_of = [
                    null
                    ],
                institutional_certificates = [
                    null
                    ],
                sex = 'female',
                age = '20',
                upper_bound_age_in_hours = 1.337,
                lower_bound_age_in_hours = 1.337,
                parts = [
                    null
                    ],
                pooled_in = [
                    null
                    ],
                classifications = [
                    ''
                    ]
            )
        else:
            return PrimaryCell(
                sources = [
                    null
                    ],
                lab = None,
                award = None,
                sample_terms = [
                    null
                    ],
                donors = [
                    null
                    ],
        )
        """

    def testPrimaryCell(self):
        """Test PrimaryCell"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
