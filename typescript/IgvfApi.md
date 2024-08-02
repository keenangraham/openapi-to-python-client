# .IgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessKeys**](IgvfApi.md#accessKeys) | **GET** /access-keys/@@listing | List items in the AccessKey collection.
[**alignmentFiles**](IgvfApi.md#alignmentFiles) | **GET** /alignment-files/@@listing | List items in the AlignmentFile collection.
[**analysisSets**](IgvfApi.md#analysisSets) | **GET** /analysis-sets/@@listing | List items in the AnalysisSet collection.
[**analysisStepVersions**](IgvfApi.md#analysisStepVersions) | **GET** /analysis-step-versions/@@listing | List items in the AnalysisStepVersion collection.
[**analysisSteps**](IgvfApi.md#analysisSteps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.
[**assayTerms**](IgvfApi.md#assayTerms) | **GET** /assay-terms/@@listing | List items in the AssayTerm collection.
[**auxiliarySets**](IgvfApi.md#auxiliarySets) | **GET** /auxiliary-sets/@@listing | List items in the AuxiliarySet collection.
[**awards**](IgvfApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.
[**batchDownload**](IgvfApi.md#batchDownload) | **GET** /batch-download | List files to download based on search query. All results are returned.
[**biomarkers**](IgvfApi.md#biomarkers) | **GET** /biomarkers/@@listing | List items in the Biomarker collection.
[**configurationFiles**](IgvfApi.md#configurationFiles) | **GET** /configuration-files/@@listing | List items in the ConfigurationFile collection.
[**constructLibrarySets**](IgvfApi.md#constructLibrarySets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.
[**crisprModifications**](IgvfApi.md#crisprModifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.
[**curatedSets**](IgvfApi.md#curatedSets) | **GET** /curated-sets/@@listing | List items in the CuratedSet collection.
[**degronModifications**](IgvfApi.md#degronModifications) | **GET** /degron-modifications/@@listing | List items in the DegronModification collection.
[**documents**](IgvfApi.md#documents) | **GET** /documents/@@listing | List items in the Document collection.
[**download**](IgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
[**genes**](IgvfApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.
[**genomeBrowserAnnotationFiles**](IgvfApi.md#genomeBrowserAnnotationFiles) | **GET** /genome-browser-annotation-files/@@listing | List items in the GenomeBrowserAnnotationFile collection.
[**getById**](IgvfApi.md#getById) | **GET** /{resource_id} | Get item information
[**humanDonors**](IgvfApi.md#humanDonors) | **GET** /human-donors/@@listing | List items in the HumanDonor collection.
[**imageFiles**](IgvfApi.md#imageFiles) | **GET** /image-files/@@listing | List items in the ImageFile collection.
[**images**](IgvfApi.md#images) | **GET** /images/@@listing | List items in the Image collection.
[**inVitroSystems**](IgvfApi.md#inVitroSystems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.
[**institutionalCertificates**](IgvfApi.md#institutionalCertificates) | **GET** /institutional-certificates/@@listing | List items in the InstitutionalCertificate collection.
[**labs**](IgvfApi.md#labs) | **GET** /labs/@@listing | List items in the Lab collection.
[**matrixFiles**](IgvfApi.md#matrixFiles) | **GET** /matrix-files/@@listing | List items in the MatrixFile collection.
[**measurementSets**](IgvfApi.md#measurementSets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.
[**modelFiles**](IgvfApi.md#modelFiles) | **GET** /model-files/@@listing | List items in the ModelFile collection.
[**modelSets**](IgvfApi.md#modelSets) | **GET** /model-sets/@@listing | List items in the ModelSet collection.
[**multiplexedSamples**](IgvfApi.md#multiplexedSamples) | **GET** /multiplexed-samples/@@listing | List items in the MultiplexedSample collection.
[**openReadingFrames**](IgvfApi.md#openReadingFrames) | **GET** /open-reading-frames/@@listing | List items in the OpenReadingFrame collection.
[**pages**](IgvfApi.md#pages) | **GET** /pages/@@listing | List items in the Page collection.
[**phenotypeTerms**](IgvfApi.md#phenotypeTerms) | **GET** /phenotype-terms/@@listing | List items in the PhenotypeTerm collection.
[**phenotypicFeatures**](IgvfApi.md#phenotypicFeatures) | **GET** /phenotypic-features/@@listing | List items in the PhenotypicFeature collection.
[**platformTerms**](IgvfApi.md#platformTerms) | **GET** /platform-terms/@@listing | List items in the PlatformTerm collection.
[**predictionSets**](IgvfApi.md#predictionSets) | **GET** /prediction-sets/@@listing | List items in the PredictionSet collection.
[**primaryCells**](IgvfApi.md#primaryCells) | **GET** /primary-cells/@@listing | List items in the PrimaryCell collection.
[**publications**](IgvfApi.md#publications) | **GET** /publications/@@listing | List items in the Publication collection.
[**referenceFiles**](IgvfApi.md#referenceFiles) | **GET** /reference-files/@@listing | List items in the ReferenceFile collection.
[**report**](IgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
[**rodentDonors**](IgvfApi.md#rodentDonors) | **GET** /rodent-donors/@@listing | List items in the RodentDonor collection.
[**sampleTerms**](IgvfApi.md#sampleTerms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.
[**schemaForItemType**](IgvfApi.md#schemaForItemType) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
[**schemas**](IgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
[**search**](IgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project.
[**sequenceFiles**](IgvfApi.md#sequenceFiles) | **GET** /sequence-files/@@listing | List items in the SequenceFile collection.
[**signalFiles**](IgvfApi.md#signalFiles) | **GET** /signal-files/@@listing | List items in the SignalFile collection.
[**software**](IgvfApi.md#software) | **GET** /software/@@listing | List items in the Software collection.
[**softwareVersions**](IgvfApi.md#softwareVersions) | **GET** /software-versions/@@listing | List items in the SoftwareVersion collection.
[**sources**](IgvfApi.md#sources) | **GET** /sources/@@listing | List items in the Source collection.
[**tabularFiles**](IgvfApi.md#tabularFiles) | **GET** /tabular-files/@@listing | List items in the TabularFile collection.
[**technicalSamples**](IgvfApi.md#technicalSamples) | **GET** /technical-samples/@@listing | List items in the TechnicalSample collection.
[**tissues**](IgvfApi.md#tissues) | **GET** /tissues/@@listing | List items in the Tissue collection.
[**treatments**](IgvfApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.
[**users**](IgvfApi.md#users) | **GET** /users/@@listing | List items in the User collection.
[**wholeOrganisms**](IgvfApi.md#wholeOrganisms) | **GET** /whole-organisms/@@listing | List items in the WholeOrganism collection.
[**workflows**](IgvfApi.md#workflows) | **GET** /workflows/@@listing | List items in the Workflow collection.


# **accessKeys**
> AccessKeyResults accessKeys()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAccessKeysRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by access_key_id (optional)
  accessKeyId: [
    "access_key_id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by secret_access_key_hash (optional)
  secretAccessKeyHash: [
    "secret_access_key_hash_example",
  ],
  // Array<'current' | 'deleted'> | Filter by status (optional)
  status: [
    "current",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by user (optional)
  user: [
    "user_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.accessKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accessKeyId** | **Array&lt;string&gt;** | Filter by access_key_id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **secretAccessKeyHash** | **Array&lt;string&gt;** | Filter by secret_access_key_hash | (optional) defaults to undefined
 **status** | **Array<&#39;current&#39; &#124; &#39;deleted&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **user** | **Array&lt;string&gt;** | Filter by user | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**AccessKeyResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alignmentFiles**
> AlignmentFileResults alignmentFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAlignmentFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by anvil_url (optional)
  anvilUrl: [
    "anvil_url_example",
  ],
  // Array<'GRCh38' | 'GRCm39'> | Filter by assembly (optional)
  assembly: [
    "GRCh38",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_summary (optional)
  contentSummary: [
    "content_summary_example",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<boolean> | Filter by controlled_access (optional)
  controlledAccess: [
    true,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'bam'> | Filter by file_format (optional)
  fileFormat: [
    "bam",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<boolean> | Filter by filtered (optional)
  filtered: [
    true,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<boolean> | Filter by redacted (optional)
  redacted: [
    true,
  ],
  // Array<string> | Filter by reference_files (optional)
  referenceFiles: [
    "reference_files_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'> | Filter by transcriptome_annotation (optional)
  transcriptomeAnnotation: [
    "GENCODE 40",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.alignmentFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **anvilUrl** | **Array&lt;string&gt;** | Filter by anvil_url | (optional) defaults to undefined
 **assembly** | **Array<&#39;GRCh38&#39; &#124; &#39;GRCm39&#39;>** | Filter by assembly | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentSummary** | **Array&lt;string&gt;** | Filter by content_summary | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **controlledAccess** | **Array&lt;boolean&gt;** | Filter by controlled_access | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;bam&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **filtered** | **Array&lt;boolean&gt;** | Filter by filtered | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **redacted** | **Array&lt;boolean&gt;** | Filter by redacted | (optional) defaults to undefined
 **referenceFiles** | **Array&lt;string&gt;** | Filter by reference_files | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **transcriptomeAnnotation** | **Array<&#39;GENCODE 40&#39; &#124; &#39;GENCODE 41&#39; &#124; &#39;GENCODE 42&#39; &#124; &#39;GENCODE 43&#39; &#124; &#39;GENCODE 44&#39; &#124; &#39;GENCODE 45&#39; &#124; &#39;GENCODE M30&#39; &#124; &#39;GENCODE M31&#39; &#124; &#39;GENCODE M32&#39; &#124; &#39;GENCODE M33&#39; &#124; &#39;GENCODE M34&#39;>** | Filter by transcriptome_annotation | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**AlignmentFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analysisSets**
> AnalysisSetResults analysisSets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAnalysisSetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by assay_titles (optional)
  assayTitles: [
    "assay_titles_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.contact_pi.@id (optional)
  awardContactPiId: [
    "award.contact_pi.@id_example",
  ],
  // Array<string> | Filter by award.contact_pi.title (optional)
  awardContactPiTitle: [
    "award.contact_pi.title_example",
  ],
  // Array<string> | Filter by award.title (optional)
  awardTitle: [
    "k",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "GEO:GSE4",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors.@id (optional)
  donorsId: [
    "donors.@id_example",
  ],
  // Array<string> | Filter by donors.accession (optional)
  donorsAccession: [
    "donors.accession_example",
  ],
  // Array<string> | Filter by donors.aliases (optional)
  donorsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by donors.sex (optional)
  donorsSex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by donors.status (optional)
  donorsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by donors.taxa (optional)
  donorsTaxa: [
    "donors.taxa_example",
  ],
  // Array<'intermediate analysis' | 'principal analysis'> | Filter by file_set_type (optional)
  fileSetType: [
    "intermediate analysis",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.creation_timestamp (optional)
  filesCreationTimestamp: [
    "files.creation_timestamp_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<number> | Filter by files.file_size (optional)
  filesFileSize: [
    0,
  ],
  // Array<string> | Filter by files.href (optional)
  filesHref: [
    "files.href_example",
  ],
  // Array<string> | Filter by files.s3_uri (optional)
  filesS3Uri: [
    "files.s3_uri_example",
  ],
  // Array<string> | Filter by files.sequencing_platform (optional)
  filesSequencingPlatform: [
    "files.sequencing_platform_example",
  ],
  // Array<string> | Filter by files.submitted_file_name (optional)
  filesSubmittedFileName: [
    "files.submitted_file_name_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by input_file_sets.@id (optional)
  inputFileSetsId: [
    "input_file_sets.@id_example",
  ],
  // Array<string> | Filter by input_file_sets.accession (optional)
  inputFileSetsAccession: [
    "input_file_sets.accession_example",
  ],
  // Array<string> | Filter by input_file_sets.aliases (optional)
  inputFileSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'> | Filter by input_file_sets.file_set_type (optional)
  inputFileSetsFileSetType: [
    "pathogenicity",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by samples.@id (optional)
  samplesId: [
    "samples.@id_example",
  ],
  // Array<string> | Filter by samples.accession (optional)
  samplesAccession: [
    "samples.accession_example",
  ],
  // Array<string> | Filter by samples.aliases (optional)
  samplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments (optional)
  samplesCellFateChangeTreatments: [
    "samples.cell_fate_change_treatments_example",
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by samples.classifications (optional)
  samplesClassifications: [
    "organoid",
  ],
  // Array<string> | Filter by samples.construct_library_sets (optional)
  samplesConstructLibrarySets: [
    "samples.construct_library_sets_example",
  ],
  // Array<string> | Filter by samples.disease_terms.@id (optional)
  samplesDiseaseTermsId: [
    "samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by samples.disease_terms.term_name (optional)
  samplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by samples.modifications (optional)
  samplesModifications: [
    "samples.modifications_example",
  ],
  // Array<string> | Filter by samples.sample_terms.@id (optional)
  samplesSampleTermsId: [
    "samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.aliases (optional)
  samplesSampleTermsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by samples.sample_terms.status (optional)
  samplesSampleTermsStatus: [
    "archived",
  ],
  // Array<string> | Filter by samples.sample_terms.summary (optional)
  samplesSampleTermsSummary: [
    "samples.sample_terms.summary_example",
  ],
  // Array<string> | Filter by samples.sample_terms.term_name (optional)
  samplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by samples.status (optional)
  samplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by samples.summary (optional)
  samplesSummary: [
    "samples.summary_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.@id (optional)
  samplesTargetedSampleTermId: [
    "samples.targeted_sample_term.@id_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.term_name (optional)
  samplesTargetedSampleTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by samples.taxa (optional)
  samplesTaxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by samples.treatments (optional)
  samplesTreatments: [
    "samples.treatments_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.analysisSets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **assayTitles** | **Array&lt;string&gt;** | Filter by assay_titles | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardContactPiId** | **Array&lt;string&gt;** | Filter by award.contact_pi.@id | (optional) defaults to undefined
 **awardContactPiTitle** | **Array&lt;string&gt;** | Filter by award.contact_pi.title | (optional) defaults to undefined
 **awardTitle** | **Array&lt;string&gt;** | Filter by award.title | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donorsId** | **Array&lt;string&gt;** | Filter by donors.@id | (optional) defaults to undefined
 **donorsAccession** | **Array&lt;string&gt;** | Filter by donors.accession | (optional) defaults to undefined
 **donorsAliases** | **Array&lt;string&gt;** | Filter by donors.aliases | (optional) defaults to undefined
 **donorsSex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by donors.sex | (optional) defaults to undefined
 **donorsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by donors.status | (optional) defaults to undefined
 **donorsTaxa** | **Array&lt;string&gt;** | Filter by donors.taxa | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;intermediate analysis&#39; &#124; &#39;principal analysis&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesCreationTimestamp** | **Array&lt;string&gt;** | Filter by files.creation_timestamp | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesFileSize** | **Array&lt;number&gt;** | Filter by files.file_size | (optional) defaults to undefined
 **filesHref** | **Array&lt;string&gt;** | Filter by files.href | (optional) defaults to undefined
 **filesS3Uri** | **Array&lt;string&gt;** | Filter by files.s3_uri | (optional) defaults to undefined
 **filesSequencingPlatform** | **Array&lt;string&gt;** | Filter by files.sequencing_platform | (optional) defaults to undefined
 **filesSubmittedFileName** | **Array&lt;string&gt;** | Filter by files.submitted_file_name | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **inputFileSetsId** | **Array&lt;string&gt;** | Filter by input_file_sets.@id | (optional) defaults to undefined
 **inputFileSetsAccession** | **Array&lt;string&gt;** | Filter by input_file_sets.accession | (optional) defaults to undefined
 **inputFileSetsAliases** | **Array&lt;string&gt;** | Filter by input_file_sets.aliases | (optional) defaults to undefined
 **inputFileSetsFileSetType** | **Array<&#39;pathogenicity&#39; &#124; &#39;functional effect&#39; &#124; &#39;protein stability&#39; &#124; &#39;activity level&#39; &#124; &#39;binding effect&#39;>** | Filter by input_file_sets.file_set_type | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **samplesId** | **Array&lt;string&gt;** | Filter by samples.@id | (optional) defaults to undefined
 **samplesAccession** | **Array&lt;string&gt;** | Filter by samples.accession | (optional) defaults to undefined
 **samplesAliases** | **Array&lt;string&gt;** | Filter by samples.aliases | (optional) defaults to undefined
 **samplesCellFateChangeTreatments** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments | (optional) defaults to undefined
 **samplesClassifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by samples.classifications | (optional) defaults to undefined
 **samplesConstructLibrarySets** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets | (optional) defaults to undefined
 **samplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by samples.disease_terms.@id | (optional) defaults to undefined
 **samplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by samples.disease_terms.term_name | (optional) defaults to undefined
 **samplesModifications** | **Array&lt;string&gt;** | Filter by samples.modifications | (optional) defaults to undefined
 **samplesSampleTermsId** | **Array&lt;string&gt;** | Filter by samples.sample_terms.@id | (optional) defaults to undefined
 **samplesSampleTermsAliases** | **Array&lt;string&gt;** | Filter by samples.sample_terms.aliases | (optional) defaults to undefined
 **samplesSampleTermsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by samples.sample_terms.status | (optional) defaults to undefined
 **samplesSampleTermsSummary** | **Array&lt;string&gt;** | Filter by samples.sample_terms.summary | (optional) defaults to undefined
 **samplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by samples.sample_terms.term_name | (optional) defaults to undefined
 **samplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by samples.status | (optional) defaults to undefined
 **samplesSummary** | **Array&lt;string&gt;** | Filter by samples.summary | (optional) defaults to undefined
 **samplesTargetedSampleTermId** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.@id | (optional) defaults to undefined
 **samplesTargetedSampleTermTermName** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.term_name | (optional) defaults to undefined
 **samplesTaxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by samples.taxa | (optional) defaults to undefined
 **samplesTreatments** | **Array&lt;string&gt;** | Filter by samples.treatments | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**AnalysisSetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analysisStepVersions**
> AnalysisStepVersionResults analysisStepVersions()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAnalysisStepVersionsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by analysis_step.@id (optional)
  analysisStepId: [
    "analysis_step.@id_example",
  ],
  // Array<string> | Filter by analysis_step.name (optional)
  analysisStepName: [
    "analysis_step.name_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by software_versions.@id (optional)
  softwareVersionsId: [
    "software_versions.@id_example",
  ],
  // Array<string> | Filter by software_versions.name (optional)
  softwareVersionsName: [
    "software_versions.name_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.analysisStepVersions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **analysisStepId** | **Array&lt;string&gt;** | Filter by analysis_step.@id | (optional) defaults to undefined
 **analysisStepName** | **Array&lt;string&gt;** | Filter by analysis_step.name | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **softwareVersionsId** | **Array&lt;string&gt;** | Filter by software_versions.@id | (optional) defaults to undefined
 **softwareVersionsName** | **Array&lt;string&gt;** | Filter by software_versions.name | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**AnalysisStepVersionResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analysisSteps**
> AnalysisStepResults analysisSteps()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAnalysisStepsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'alignment' | 'file format conversion' | 'signal generation'> | Filter by analysis_step_types (optional)
  analysisStepTypes: [
    "alignment",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by input_content_types (optional)
  inputContentTypes: [
    "input_content_types_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by output_content_types (optional)
  outputContentTypes: [
    "output_content_types_example",
  ],
  // Array<string> | Filter by parents.@id (optional)
  parentsId: [
    "parents.@id_example",
  ],
  // Array<string> | Filter by parents.title (optional)
  parentsTitle: [
    `g	w7Va(BKfooZyIW0gBboqFUdLakQV
TH.Jq5YMt4-C)Wjn(C.FVGCdI_V,7M_,WxW4mKLIyEkkkl7usys5dLzA(
z6Oo.fjWIbVKv.S._yaPsaP.NWGo(vvNwHlUHdNpd26SlXk,zgfON)eY(xhzoSpwBDlZ46oVRC9NcRnUi3u	)7L2)MoUxikB2n4IQ.gk(BNBj,jAr)(4Yq0ktn2hMOooDRhO-bLfDzo8P11
L6m982If7KSO.wPzdjG(9P5yzrODrJa)iPZ,rcK8zMe7dXS86H-4zsFoBumpJBX8D0UdpMWh-(So.WIS-psYnR
JeFEmZYy-esm3XEeFt-34js-_4p9uR_E(8fHf8WMRq1rorzcjdr6.AogLD,dFeJbbtuuNiFttka5()_
hLGmNLis(,wtSMkokdnc0r)TSHV72XJlcnWRZ8dMgBcbQoJeCwSLQyfh.5S-w(Y27Kz5viZvCAv(Gb653_kzCsxcQlU6Jpi2w5(zwevNG2vZoi107zVSCn17ArKMT(WkEFD_DaIlRKJmrWLqJAM_0HZxS-3Vd0dvlcXAN4NVe5eIBahLKvcB_r(spBpcv_HOKjopu0ARN0bE9Z-qPG4tPIOusS_FJRHzLf0V9a01h40UO008F0eFDbZNWO)le2s-b7 rOm9L6RXIBsIo.YfGPsYBOt,lnplLOQr9pDc.iyrY_Ft.xe537yTtx8SBXVoZ3AJDL pkDop3.Dxm08eSqDY8LW2iuVyA8fvSvG9zNoimpvo8aG7TQycGq,UQ65,IRseO5AEB	aeUrfUbR0Tqf5Jn(MUv9SF7i-9KFJqeKFVpnUjjYX9QxrzVUAF0AUPWAN)B6AmR7
jGMQUhXr_Xkejz__O)usU.R020B7dILq.CCTbk4zKUoefxYnx7JbZ.p7HaRP(I7LdOZPTP(7Y_s4ppj-6x1E77EwAjQEzY.InVhVa7c04p8D	xaCiyDvdT(XU7NcITVjM8bSpn.EnbD6dJ5wSAzbUMtzY2RXOQcHYlA6d2f6q t(ZHFvDzfErbGMCk6Cb1fgk(.SvPVE.rWXXifwIaSzszwXh6
AyuPr1nB9(YL6c,_J2EAdN-lnB8TZUKfS8wolWxqqGa26Ei3MS2t7_iV(YIR,jA_zLUAI8aY1uw_z(n5cagT8sms 9fiaqy6lL53yqvu,p0.vAHpxSOF65)4w,K_moJqbuDKb
IipqMWflNx-yo2vURGVD84r7n(pa7k3sF3FnUnDzZFsi4NUgsCn3k.FsAETypHTv_zc.KANC--nboTrScOIKM4a6PC,jEUaRwhCHhP2CLD.I-9cGAZhdwj.NlbYrVx(RbzvddfzMS8LS,Y3JF_tMJh1HQOoMv pu3E6G3BCTP-knQPgL(GoL3NRfyCqzyTNh,wn9e6i6k5puuUviOo29kpkfLmxO)HdIBumQJIXKry6WOeVukZ.XtGCUQMTy3HyRe7wlB32OTy.ky71uNt0,y4Y(lJ7EdFJFIhQpGFZmiwr )uXiJEmoxlL93N(2q,dFMZHq0r(WIlkpd(KI1hdJ6pIu-a1w-hYh3GmD0gRnXgX.rK87JZ)lcHq8oQxny6M6cMwU.pPdHY)D3EEwT80(4OR,bQP9TOe_XJrp_rWyV1C9BzUZBrAaAYysTlv8nnJS0BkbX6WowpU_q8aqhEN_y0X1kN852gaMnVWBbc_fZdCCP-9T0I1TDHvF8MBpIOB0ViZfrZYye7Pstd25Rnzr8eV3xfFl	Z0,.d2AgggTl9TjJYBeKVzF6dThapGisdlxFIJSj-nAVOqaViAzvuYTyfyx9z5AOBA.0d6-DG_buzcw3eHeJcm
qb4,aEf4wK_I.zkC)nJS)sB_kXk(ps2)4MF5bsZZ5xP98oCRZKvAdwQDeJKjr5ICcXgqWqtVjUczNDHjkbodj.NP4XoIxHtgvmTgTPaau7Wk(cD45Z,puAlp3R97wC_m1UlX(._veEcShG(ATl
Vwtezc14qDOri2OKsq_dgbB.rj918sGMLk.m23ECBT1aI3pdNvh2sMUEKs9zcvP4I)hGSgqRxc0,DrGEj79HXFC0lX54Oc)L)
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by step_label (optional)
  stepLabel: [
    "p-step",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    `g	w7Va(BKfooZyIW0gBboqFUdLakQV
TH.Jq5YMt4-C)Wjn(C.FVGCdI_V,7M_,WxW4mKLIyEkkkl7usys5dLzA(
z6Oo.fjWIbVKv.S._yaPsaP.NWGo(vvNwHlUHdNpd26SlXk,zgfON)eY(xhzoSpwBDlZ46oVRC9NcRnUi3u	)7L2)MoUxikB2n4IQ.gk(BNBj,jAr)(4Yq0ktn2hMOooDRhO-bLfDzo8P11
L6m982If7KSO.wPzdjG(9P5yzrODrJa)iPZ,rcK8zMe7dXS86H-4zsFoBumpJBX8D0UdpMWh-(So.WIS-psYnR
JeFEmZYy-esm3XEeFt-34js-_4p9uR_E(8fHf8WMRq1rorzcjdr6.AogLD,dFeJbbtuuNiFttka5()_
hLGmNLis(,wtSMkokdnc0r)TSHV72XJlcnWRZ8dMgBcbQoJeCwSLQyfh.5S-w(Y27Kz5viZvCAv(Gb653_kzCsxcQlU6Jpi2w5(zwevNG2vZoi107zVSCn17ArKMT(WkEFD_DaIlRKJmrWLqJAM_0HZxS-3Vd0dvlcXAN4NVe5eIBahLKvcB_r(spBpcv_HOKjopu0ARN0bE9Z-qPG4tPIOusS_FJRHzLf0V9a01h40UO008F0eFDbZNWO)le2s-b7 rOm9L6RXIBsIo.YfGPsYBOt,lnplLOQr9pDc.iyrY_Ft.xe537yTtx8SBXVoZ3AJDL pkDop3.Dxm08eSqDY8LW2iuVyA8fvSvG9zNoimpvo8aG7TQycGq,UQ65,IRseO5AEB	aeUrfUbR0Tqf5Jn(MUv9SF7i-9KFJqeKFVpnUjjYX9QxrzVUAF0AUPWAN)B6AmR7
jGMQUhXr_Xkejz__O)usU.R020B7dILq.CCTbk4zKUoefxYnx7JbZ.p7HaRP(I7LdOZPTP(7Y_s4ppj-6x1E77EwAjQEzY.InVhVa7c04p8D	xaCiyDvdT(XU7NcITVjM8bSpn.EnbD6dJ5wSAzbUMtzY2RXOQcHYlA6d2f6q t(ZHFvDzfErbGMCk6Cb1fgk(.SvPVE.rWXXifwIaSzszwXh6
AyuPr1nB9(YL6c,_J2EAdN-lnB8TZUKfS8wolWxqqGa26Ei3MS2t7_iV(YIR,jA_zLUAI8aY1uw_z(n5cagT8sms 9fiaqy6lL53yqvu,p0.vAHpxSOF65)4w,K_moJqbuDKb
IipqMWflNx-yo2vURGVD84r7n(pa7k3sF3FnUnDzZFsi4NUgsCn3k.FsAETypHTv_zc.KANC--nboTrScOIKM4a6PC,jEUaRwhCHhP2CLD.I-9cGAZhdwj.NlbYrVx(RbzvddfzMS8LS,Y3JF_tMJh1HQOoMv pu3E6G3BCTP-knQPgL(GoL3NRfyCqzyTNh,wn9e6i6k5puuUviOo29kpkfLmxO)HdIBumQJIXKry6WOeVukZ.XtGCUQMTy3HyRe7wlB32OTy.ky71uNt0,y4Y(lJ7EdFJFIhQpGFZmiwr )uXiJEmoxlL93N(2q,dFMZHq0r(WIlkpd(KI1hdJ6pIu-a1w-hYh3GmD0gRnXgX.rK87JZ)lcHq8oQxny6M6cMwU.pPdHY)D3EEwT80(4OR,bQP9TOe_XJrp_rWyV1C9BzUZBrAaAYysTlv8nnJS0BkbX6WowpU_q8aqhEN_y0X1kN852gaMnVWBbc_fZdCCP-9T0I1TDHvF8MBpIOB0ViZfrZYye7Pstd25Rnzr8eV3xfFl	Z0,.d2AgggTl9TjJYBeKVzF6dThapGisdlxFIJSj-nAVOqaViAzvuYTyfyx9z5AOBA.0d6-DG_buzcw3eHeJcm
qb4,aEf4wK_I.zkC)nJS)sB_kXk(ps2)4MF5bsZZ5xP98oCRZKvAdwQDeJKjr5ICcXgqWqtVjUczNDHjkbodj.NP4XoIxHtgvmTgTPaau7Wk(cD45Z,puAlp3R97wC_m1UlX(._veEcShG(ATl
Vwtezc14qDOri2OKsq_dgbB.rj918sGMLk.m23ECBT1aI3pdNvh2sMUEKs9zcvP4I)hGSgqRxc0,DrGEj79HXFC0lX54Oc)L)
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by workflow.@id (optional)
  workflowId: [
    "workflow.@id_example",
  ],
  // Array<string> | Filter by workflow.accession (optional)
  workflowAccession: [
    "workflow.accession_example",
  ],
};

apiInstance.analysisSteps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **analysisStepTypes** | **Array<&#39;alignment&#39; &#124; &#39;file format conversion&#39; &#124; &#39;signal generation&#39;>** | Filter by analysis_step_types | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **inputContentTypes** | **Array&lt;string&gt;** | Filter by input_content_types | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **outputContentTypes** | **Array&lt;string&gt;** | Filter by output_content_types | (optional) defaults to undefined
 **parentsId** | **Array&lt;string&gt;** | Filter by parents.@id | (optional) defaults to undefined
 **parentsTitle** | **Array&lt;string&gt;** | Filter by parents.title | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **stepLabel** | **Array&lt;string&gt;** | Filter by step_label | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **title** | **Array&lt;string&gt;** | Filter by title | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **workflowId** | **Array&lt;string&gt;** | Filter by workflow.@id | (optional) defaults to undefined
 **workflowAccession** | **Array&lt;string&gt;** | Filter by workflow.accession | (optional) defaults to undefined


### Return type

**AnalysisStepResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assayTerms**
> AssayTermResults assayTerms()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAssayTermsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by ancestors (optional)
  ancestors: [
    "ancestors_example",
  ],
  // Array<string> | Filter by assay_slims (optional)
  assaySlims: [
    "assay_slims_example",
  ],
  // Array<string> | Filter by category_slims (optional)
  categorySlims: [
    "category_slims_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by deprecated_ntr_terms (optional)
  deprecatedNtrTerms: [
    "NTR:48072888",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by is_a (optional)
  isA: [
    "is_a_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by objective_slims (optional)
  objectiveSlims: [
    "objective_slims_example",
  ],
  // Array<string> | Filter by ontology (optional)
  ontology: [
    "ontology_example",
  ],
  // Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'> | Filter by preferred_assay_titles (optional)
  preferredAssayTitles: [
    "10x multiome",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by synonyms (optional)
  synonyms: [
    "synonyms_example",
  ],
  // Array<string> | Filter by term_id (optional)
  termId: [
    "NTR:80728",
  ],
  // Array<string> | Filter by term_name (optional)
  termName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.assayTerms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **ancestors** | **Array&lt;string&gt;** | Filter by ancestors | (optional) defaults to undefined
 **assaySlims** | **Array&lt;string&gt;** | Filter by assay_slims | (optional) defaults to undefined
 **categorySlims** | **Array&lt;string&gt;** | Filter by category_slims | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **deprecatedNtrTerms** | **Array&lt;string&gt;** | Filter by deprecated_ntr_terms | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **isA** | **Array&lt;string&gt;** | Filter by is_a | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **objectiveSlims** | **Array&lt;string&gt;** | Filter by objective_slims | (optional) defaults to undefined
 **ontology** | **Array&lt;string&gt;** | Filter by ontology | (optional) defaults to undefined
 **preferredAssayTitles** | **Array<&#39;10x multiome&#39; &#124; &#39;10x multiome with MULTI-seq&#39; &#124; &#39;AAV-MPRA&#39; &#124; &#39;ATAC-seq&#39; &#124; &#39;CERES-seq&#39; &#124; &#39;Cell painting&#39; &#124; &#39;CRISPR FlowFISH&#39; &#124; &#39;DOGMA-seq&#39; &#124; &#39;Histone ChIP-seq&#39; &#124; &#39;Hi-C&#39; &#124; &#39;lentiMPRA&#39; &#124; &#39;MERFISH&#39; &#124; &#39;MIAA&#39; &#124; &#39;mN2H&#39; &#124; &#39;MPRA&#39; &#124; &#39;MPRA (scQer)&#39; &#124; &#39;MULTI-seq&#39; &#124; &#39;Parse SPLiT-seq&#39; &#124; &#39;Perturb-seq&#39; &#124; &#39;RNA-seq&#39; &#124; &#39;SGE&#39; &#124; &#39;scATAC-seq&#39; &#124; &#39;scNT-seq&#39; &#124; &#39;scNT-seq2&#39; &#124; &#39;scRNA-seq&#39; &#124; &#39;semi-qY2H&#39; &#124; &#39;SHARE-seq&#39; &#124; &#39;smFISH&#39; &#124; &#39;snATAC-seq&#39; &#124; &#39;snmC-Seq2&#39; &#124; &#39;snMCT-seq&#39; &#124; &#39;snM3C-seq&#39; &#124; &#39;snRNA-seq&#39; &#124; &#39;SUPERSTARR&#39; &#124; &#39;TAP-seq&#39; &#124; &#39;TF ChIP-seq&#39; &#124; &#39;VAMP-seq&#39; &#124; &#39;Variant FlowFISH&#39; &#124; &#39;Variant painting&#39; &#124; &#39;Y2H&#39; &#124; &#39;yN2H&#39;>** | Filter by preferred_assay_titles | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **synonyms** | **Array&lt;string&gt;** | Filter by synonyms | (optional) defaults to undefined
 **termId** | **Array&lt;string&gt;** | Filter by term_id | (optional) defaults to undefined
 **termName** | **Array&lt;string&gt;** | Filter by term_name | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**AssayTermResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **auxiliarySets**
> AuxiliarySetResults auxiliarySets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAuxiliarySetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.contact_pi.@id (optional)
  awardContactPiId: [
    "award.contact_pi.@id_example",
  ],
  // Array<string> | Filter by award.contact_pi.title (optional)
  awardContactPiTitle: [
    "award.contact_pi.title_example",
  ],
  // Array<string> | Filter by award.title (optional)
  awardTitle: [
    "k",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "GEO:GSE4",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors.@id (optional)
  donorsId: [
    "donors.@id_example",
  ],
  // Array<string> | Filter by donors.accession (optional)
  donorsAccession: [
    "donors.accession_example",
  ],
  // Array<string> | Filter by donors.aliases (optional)
  donorsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by donors.sex (optional)
  donorsSex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by donors.status (optional)
  donorsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by donors.taxa (optional)
  donorsTaxa: [
    "donors.taxa_example",
  ],
  // Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'> | Filter by file_set_type (optional)
  fileSetType: [
    "cell hashing",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.creation_timestamp (optional)
  filesCreationTimestamp: [
    "files.creation_timestamp_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<number> | Filter by files.file_size (optional)
  filesFileSize: [
    0,
  ],
  // Array<string> | Filter by files.href (optional)
  filesHref: [
    "files.href_example",
  ],
  // Array<string> | Filter by files.s3_uri (optional)
  filesS3Uri: [
    "files.s3_uri_example",
  ],
  // Array<string> | Filter by files.sequencing_platform (optional)
  filesSequencingPlatform: [
    "files.sequencing_platform_example",
  ],
  // Array<string> | Filter by files.submitted_file_name (optional)
  filesSubmittedFileName: [
    "files.submitted_file_name_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by library_construction_platform (optional)
  libraryConstructionPlatform: [
    "library_construction_platform_example",
  ],
  // Array<string> | Filter by measurement_sets.@id (optional)
  measurementSetsId: [
    "measurement_sets.@id_example",
  ],
  // Array<string> | Filter by measurement_sets.accession (optional)
  measurementSetsAccession: [
    "measurement_sets.accession_example",
  ],
  // Array<string> | Filter by measurement_sets.aliases (optional)
  measurementSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'> | Filter by measurement_sets.preferred_assay_title (optional)
  measurementSetsPreferredAssayTitle: [
    "10x multiome",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by samples.@id (optional)
  samplesId: [
    "samples.@id_example",
  ],
  // Array<string> | Filter by samples.accession (optional)
  samplesAccession: [
    "samples.accession_example",
  ],
  // Array<string> | Filter by samples.aliases (optional)
  samplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments (optional)
  samplesCellFateChangeTreatments: [
    "samples.cell_fate_change_treatments_example",
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by samples.classifications (optional)
  samplesClassifications: [
    "organoid",
  ],
  // Array<string> | Filter by samples.construct_library_sets (optional)
  samplesConstructLibrarySets: [
    "samples.construct_library_sets_example",
  ],
  // Array<string> | Filter by samples.disease_terms.@id (optional)
  samplesDiseaseTermsId: [
    "samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by samples.disease_terms.term_name (optional)
  samplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by samples.modifications (optional)
  samplesModifications: [
    "samples.modifications_example",
  ],
  // Array<string> | Filter by samples.sample_terms.@id (optional)
  samplesSampleTermsId: [
    "samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.aliases (optional)
  samplesSampleTermsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by samples.sample_terms.status (optional)
  samplesSampleTermsStatus: [
    "archived",
  ],
  // Array<string> | Filter by samples.sample_terms.summary (optional)
  samplesSampleTermsSummary: [
    "samples.sample_terms.summary_example",
  ],
  // Array<string> | Filter by samples.sample_terms.term_name (optional)
  samplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by samples.status (optional)
  samplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by samples.summary (optional)
  samplesSummary: [
    "samples.summary_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.@id (optional)
  samplesTargetedSampleTermId: [
    "samples.targeted_sample_term.@id_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.term_name (optional)
  samplesTargetedSampleTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by samples.taxa (optional)
  samplesTaxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by samples.treatments (optional)
  samplesTreatments: [
    "samples.treatments_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.auxiliarySets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardContactPiId** | **Array&lt;string&gt;** | Filter by award.contact_pi.@id | (optional) defaults to undefined
 **awardContactPiTitle** | **Array&lt;string&gt;** | Filter by award.contact_pi.title | (optional) defaults to undefined
 **awardTitle** | **Array&lt;string&gt;** | Filter by award.title | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donorsId** | **Array&lt;string&gt;** | Filter by donors.@id | (optional) defaults to undefined
 **donorsAccession** | **Array&lt;string&gt;** | Filter by donors.accession | (optional) defaults to undefined
 **donorsAliases** | **Array&lt;string&gt;** | Filter by donors.aliases | (optional) defaults to undefined
 **donorsSex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by donors.sex | (optional) defaults to undefined
 **donorsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by donors.status | (optional) defaults to undefined
 **donorsTaxa** | **Array&lt;string&gt;** | Filter by donors.taxa | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;cell hashing&#39; &#124; &#39;cell sorting&#39; &#124; &#39;circularized RNA barcode detection&#39; &#124; &#39;gRNA sequencing&#39; &#124; &#39;oligo-conjugated lipids&#39; &#124; &#39;quantification DNA barcode sequencing&#39; &#124; &#39;variant sequencing&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesCreationTimestamp** | **Array&lt;string&gt;** | Filter by files.creation_timestamp | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesFileSize** | **Array&lt;number&gt;** | Filter by files.file_size | (optional) defaults to undefined
 **filesHref** | **Array&lt;string&gt;** | Filter by files.href | (optional) defaults to undefined
 **filesS3Uri** | **Array&lt;string&gt;** | Filter by files.s3_uri | (optional) defaults to undefined
 **filesSequencingPlatform** | **Array&lt;string&gt;** | Filter by files.sequencing_platform | (optional) defaults to undefined
 **filesSubmittedFileName** | **Array&lt;string&gt;** | Filter by files.submitted_file_name | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **libraryConstructionPlatform** | **Array&lt;string&gt;** | Filter by library_construction_platform | (optional) defaults to undefined
 **measurementSetsId** | **Array&lt;string&gt;** | Filter by measurement_sets.@id | (optional) defaults to undefined
 **measurementSetsAccession** | **Array&lt;string&gt;** | Filter by measurement_sets.accession | (optional) defaults to undefined
 **measurementSetsAliases** | **Array&lt;string&gt;** | Filter by measurement_sets.aliases | (optional) defaults to undefined
 **measurementSetsPreferredAssayTitle** | **Array<&#39;10x multiome&#39; &#124; &#39;10x multiome with MULTI-seq&#39; &#124; &#39;AAV-MPRA&#39; &#124; &#39;ATAC-seq&#39; &#124; &#39;CERES-seq&#39; &#124; &#39;Cell painting&#39; &#124; &#39;CRISPR FlowFISH&#39; &#124; &#39;DOGMA-seq&#39; &#124; &#39;Histone ChIP-seq&#39; &#124; &#39;Hi-C&#39; &#124; &#39;lentiMPRA&#39; &#124; &#39;MERFISH&#39; &#124; &#39;MIAA&#39; &#124; &#39;mN2H&#39; &#124; &#39;MPRA&#39; &#124; &#39;MPRA (scQer)&#39; &#124; &#39;MULTI-seq&#39; &#124; &#39;Parse SPLiT-seq&#39; &#124; &#39;Perturb-seq&#39; &#124; &#39;RNA-seq&#39; &#124; &#39;SGE&#39; &#124; &#39;scATAC-seq&#39; &#124; &#39;scNT-seq&#39; &#124; &#39;scNT-seq2&#39; &#124; &#39;scRNA-seq&#39; &#124; &#39;semi-qY2H&#39; &#124; &#39;SHARE-seq&#39; &#124; &#39;smFISH&#39; &#124; &#39;snATAC-seq&#39; &#124; &#39;snmC-Seq2&#39; &#124; &#39;snMCT-seq&#39; &#124; &#39;snM3C-seq&#39; &#124; &#39;snRNA-seq&#39; &#124; &#39;SUPERSTARR&#39; &#124; &#39;TAP-seq&#39; &#124; &#39;TF ChIP-seq&#39; &#124; &#39;VAMP-seq&#39; &#124; &#39;Variant FlowFISH&#39; &#124; &#39;Variant painting&#39; &#124; &#39;Y2H&#39; &#124; &#39;yN2H&#39;>** | Filter by measurement_sets.preferred_assay_title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **samplesId** | **Array&lt;string&gt;** | Filter by samples.@id | (optional) defaults to undefined
 **samplesAccession** | **Array&lt;string&gt;** | Filter by samples.accession | (optional) defaults to undefined
 **samplesAliases** | **Array&lt;string&gt;** | Filter by samples.aliases | (optional) defaults to undefined
 **samplesCellFateChangeTreatments** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments | (optional) defaults to undefined
 **samplesClassifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by samples.classifications | (optional) defaults to undefined
 **samplesConstructLibrarySets** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets | (optional) defaults to undefined
 **samplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by samples.disease_terms.@id | (optional) defaults to undefined
 **samplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by samples.disease_terms.term_name | (optional) defaults to undefined
 **samplesModifications** | **Array&lt;string&gt;** | Filter by samples.modifications | (optional) defaults to undefined
 **samplesSampleTermsId** | **Array&lt;string&gt;** | Filter by samples.sample_terms.@id | (optional) defaults to undefined
 **samplesSampleTermsAliases** | **Array&lt;string&gt;** | Filter by samples.sample_terms.aliases | (optional) defaults to undefined
 **samplesSampleTermsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by samples.sample_terms.status | (optional) defaults to undefined
 **samplesSampleTermsSummary** | **Array&lt;string&gt;** | Filter by samples.sample_terms.summary | (optional) defaults to undefined
 **samplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by samples.sample_terms.term_name | (optional) defaults to undefined
 **samplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by samples.status | (optional) defaults to undefined
 **samplesSummary** | **Array&lt;string&gt;** | Filter by samples.summary | (optional) defaults to undefined
 **samplesTargetedSampleTermId** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.@id | (optional) defaults to undefined
 **samplesTargetedSampleTermTermName** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.term_name | (optional) defaults to undefined
 **samplesTaxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by samples.taxa | (optional) defaults to undefined
 **samplesTreatments** | **Array&lt;string&gt;** | Filter by samples.treatments | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**AuxiliarySetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **awards**
> AwardResults awards()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiAwardsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by component (optional)
  component: [
    "affiliate",
  ],
  // Array<string> | Filter by contact_pi (optional)
  contactPi: [
    "contact_pi_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by end_date (optional)
  endDate: [
    "end_date_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "G",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by pis (optional)
  pis: [
    "pis_example",
  ],
  // Array<'community' | 'ENCODE' | 'IGVF'> | Filter by project (optional)
  project: [
    "community",
  ],
  // Array<string> | Filter by start_date (optional)
  startDate: [
    "start_date_example",
  ],
  // Array<'current' | 'deleted' | 'disabled'> | Filter by status (optional)
  status: [
    "current",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    "k",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<'community' | 'IGVF'> | Filter by viewing_group (optional)
  viewingGroup: [
    "community",
  ],
};

apiInstance.awards(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **component** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by component | (optional) defaults to undefined
 **contactPi** | **Array&lt;string&gt;** | Filter by contact_pi | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **endDate** | **Array&lt;string&gt;** | Filter by end_date | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **pis** | **Array&lt;string&gt;** | Filter by pis | (optional) defaults to undefined
 **project** | **Array<&#39;community&#39; &#124; &#39;ENCODE&#39; &#124; &#39;IGVF&#39;>** | Filter by project | (optional) defaults to undefined
 **startDate** | **Array&lt;string&gt;** | Filter by start_date | (optional) defaults to undefined
 **status** | **Array<&#39;current&#39; &#124; &#39;deleted&#39; &#124; &#39;disabled&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **title** | **Array&lt;string&gt;** | Filter by title | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **viewingGroup** | **Array<&#39;community&#39; &#124; &#39;IGVF&#39;>** | Filter by viewing_group | (optional) defaults to undefined


### Return type

**AwardResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchDownload**
> string batchDownload()

Generates TSV of files contained in FileSets in search results.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiBatchDownloadRequest = {
  // Array<string> | Type of objects to return. Can be repeated for multiple types.
  type: [
    "type_example",
  ],
  // string | Query string for searching. (optional)
  query: "query_example",
  // any | Any field from any object type can be used as a filter. Use \'!\' for negation, \'*\' as a wildcard, and \'lt:\', \'lte:\', \'gt:\', \'gte:\' for range queries on numeric fields. (optional)
  fieldFilters: {},
};

apiInstance.batchDownload(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **Array&lt;string&gt;** | Type of objects to return. Can be repeated for multiple types. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **fieldFilters** | **any** | Any field from any object type can be used as a filter. Use \&#39;!\&#39; for negation, \&#39;*\&#39; as a wildcard, and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; for range queries on numeric fields. | (optional) defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **biomarkers**
> BiomarkerResults biomarkers()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiBiomarkersRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.name (optional)
  awardName: [
    "G",
  ],
  // Array<string> | Filter by biomarker_for (optional)
  biomarkerFor: [
    "biomarker_for_example",
  ],
  // Array<'cell surface protein' | 'marker gene'> | Filter by classification (optional)
  classification: [
    "cell surface protein",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by gene (optional)
  gene: [
    "gene_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by name_quantification (optional)
  nameQuantification: [
    "name_quantification_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<'negative' | 'positive' | 'low' | 'intermediate' | 'high'> | Filter by quantification (optional)
  quantification: [
    "negative",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by synonyms (optional)
  synonyms: [
    "synonyms_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.biomarkers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardName** | **Array&lt;string&gt;** | Filter by award.name | (optional) defaults to undefined
 **biomarkerFor** | **Array&lt;string&gt;** | Filter by biomarker_for | (optional) defaults to undefined
 **classification** | **Array<&#39;cell surface protein&#39; &#124; &#39;marker gene&#39;>** | Filter by classification | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **gene** | **Array&lt;string&gt;** | Filter by gene | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **nameQuantification** | **Array&lt;string&gt;** | Filter by name_quantification | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **quantification** | **Array<&#39;negative&#39; &#124; &#39;positive&#39; &#124; &#39;low&#39; &#124; &#39;intermediate&#39; &#124; &#39;high&#39;>** | Filter by quantification | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **synonyms** | **Array&lt;string&gt;** | Filter by synonyms | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**BiomarkerResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configurationFiles**
> ConfigurationFileResults configurationFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiConfigurationFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'yaml'> | Filter by file_format (optional)
  fileFormat: [
    "yaml",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<string> | Filter by seqspec_of (optional)
  seqspecOf: [
    "seqspec_of_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.configurationFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;yaml&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **seqspecOf** | **Array&lt;string&gt;** | Filter by seqspec_of | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**ConfigurationFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **constructLibrarySets**
> ConstructLibrarySetResults constructLibrarySets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiConstructLibrarySetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by applied_to_samples.@id (optional)
  appliedToSamplesId: [
    "applied_to_samples.@id_example",
  ],
  // Array<string> | Filter by applied_to_samples.accession (optional)
  appliedToSamplesAccession: [
    "applied_to_samples.accession_example",
  ],
  // Array<string> | Filter by applied_to_samples.aliases (optional)
  appliedToSamplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by applied_to_samples.disease_terms.@id (optional)
  appliedToSamplesDiseaseTermsId: [
    "applied_to_samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by applied_to_samples.disease_terms.term_name (optional)
  appliedToSamplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by applied_to_samples.sample_terms.@id (optional)
  appliedToSamplesSampleTermsId: [
    "applied_to_samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by applied_to_samples.sample_terms.term_name (optional)
  appliedToSamplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by applied_to_samples.status (optional)
  appliedToSamplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by applied_to_samples.summary (optional)
  appliedToSamplesSummary: [
    "applied_to_samples.summary_example",
  ],
  // Array<string> | Filter by associated_phenotypes.@id (optional)
  associatedPhenotypesId: [
    "associated_phenotypes.@id_example",
  ],
  // Array<string> | Filter by associated_phenotypes.term_id (optional)
  associatedPhenotypesTermId: [
    "NCIT:C80728",
  ],
  // Array<string> | Filter by associated_phenotypes.term_name (optional)
  associatedPhenotypesTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<number> | Filter by average_guide_coverage (optional)
  averageGuideCoverage: [
    0,
  ],
  // Array<number> | Filter by average_insert_size (optional)
  averageInsertSize: [
    0,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by exon (optional)
  exon: [
    "k",
  ],
  // Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'> | Filter by file_set_type (optional)
  fileSetType: [
    "guide library",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<'sgRNA' | 'pgRNA'> | Filter by guide_type (optional)
  guideType: [
    "sgRNA",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by integrated_content_files (optional)
  integratedContentFiles: [
    "integrated_content_files_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by large_scale_gene_list.@id (optional)
  largeScaleGeneListId: [
    "large_scale_gene_list.@id_example",
  ],
  // Array<string> | Filter by large_scale_gene_list.accession (optional)
  largeScaleGeneListAccession: [
    "large_scale_gene_list.accession_example",
  ],
  // Array<string> | Filter by large_scale_gene_list.aliases (optional)
  largeScaleGeneListAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by large_scale_loci_list.@id (optional)
  largeScaleLociListId: [
    "large_scale_loci_list.@id_example",
  ],
  // Array<string> | Filter by large_scale_loci_list.accession (optional)
  largeScaleLociListAccession: [
    "large_scale_loci_list.accession_example",
  ],
  // Array<string> | Filter by large_scale_loci_list.aliases (optional)
  largeScaleLociListAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by lot_id (optional)
  lotId: [
    "k",
  ],
  // Array<number> | Filter by lower_bound_guide_coverage (optional)
  lowerBoundGuideCoverage: [
    1,
  ],
  // Array<number> | Filter by lower_bound_insert_size (optional)
  lowerBoundInsertSize: [
    1,
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by orf_list.@id (optional)
  orfListId: [
    "orf_list.@id_example",
  ],
  // Array<string> | Filter by orf_list.aliases (optional)
  orfListAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by orf_list.gene (optional)
  orfListGene: [
    "orf_list.gene_example",
  ],
  // Array<string> | Filter by orf_list.orf_id (optional)
  orfListOrfId: [
    "CCSBORF68072888001528021798096225500",
  ],
  // Array<string> | Filter by product_id (optional)
  productId: [
    "addgene:480728",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<'tile' | 'exon' | 'genes' | 'loci' | 'genome-wide' | 'interactors' | 'alleles' | 'targeton'> | Filter by scope (optional)
  scope: [
    "tile",
  ],
  // Array<'accessible genome regions' | 'candidate cis-regulatory elements' | 'chromatin states' | 'phenotype-associated variants' | 'DNase hypersensitive sites' | 'genes' | 'histone modifications' | 'protein interactors' | 'sequence variants' | 'synthetic elements' | 'transcription start sites' | 'TF binding sites'> | Filter by selection_criteria (optional)
  selectionCriteria: [
    "accessible genome regions",
  ],
  // Array<string> | Filter by small_scale_gene_list.@id (optional)
  smallScaleGeneListId: [
    "small_scale_gene_list.@id_example",
  ],
  // Array<string> | Filter by small_scale_gene_list.geneid (optional)
  smallScaleGeneListGeneid: [
    "ENSEIOTGSWWMEJTCMOSLLNYULG62255008507",
  ],
  // Array<string> | Filter by small_scale_gene_list.name (optional)
  smallScaleGeneListName: [
    "small_scale_gene_list.name_example",
  ],
  // Array<string> | Filter by small_scale_gene_list.symbol (optional)
  smallScaleGeneListSymbol: [
    "small_scale_gene_list.symbol_example",
  ],
  // Array<string> | Filter by small_scale_gene_list.synonyms (optional)
  smallScaleGeneListSynonyms: [
    "small_scale_gene_list.synonyms_example",
  ],
  // Array<Locus> | Filter by small_scale_loci_list (optional)
  smallScaleLociList: [
    {
      assembly: "GRCh38",
      chromosome: "chrH",
      start: 1,
      end: 1,
    },
  ],
  // Array<string> | Filter by sources (optional)
  sources: [
    "sources_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by targeton (optional)
  targeton: [
    "k",
  ],
  // Array<'peak tiling' | 'full tiling' | 'sparse peaks'> | Filter by tiling_modality (optional)
  tilingModality: [
    "peak tiling",
  ],
  // Array<number> | Filter by upper_bound_guide_coverage (optional)
  upperBoundGuideCoverage: [
    1,
  ],
  // Array<number> | Filter by upper_bound_insert_size (optional)
  upperBoundInsertSize: [
    1,
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.constructLibrarySets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **appliedToSamplesId** | **Array&lt;string&gt;** | Filter by applied_to_samples.@id | (optional) defaults to undefined
 **appliedToSamplesAccession** | **Array&lt;string&gt;** | Filter by applied_to_samples.accession | (optional) defaults to undefined
 **appliedToSamplesAliases** | **Array&lt;string&gt;** | Filter by applied_to_samples.aliases | (optional) defaults to undefined
 **appliedToSamplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by applied_to_samples.disease_terms.@id | (optional) defaults to undefined
 **appliedToSamplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by applied_to_samples.disease_terms.term_name | (optional) defaults to undefined
 **appliedToSamplesSampleTermsId** | **Array&lt;string&gt;** | Filter by applied_to_samples.sample_terms.@id | (optional) defaults to undefined
 **appliedToSamplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by applied_to_samples.sample_terms.term_name | (optional) defaults to undefined
 **appliedToSamplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by applied_to_samples.status | (optional) defaults to undefined
 **appliedToSamplesSummary** | **Array&lt;string&gt;** | Filter by applied_to_samples.summary | (optional) defaults to undefined
 **associatedPhenotypesId** | **Array&lt;string&gt;** | Filter by associated_phenotypes.@id | (optional) defaults to undefined
 **associatedPhenotypesTermId** | **Array&lt;string&gt;** | Filter by associated_phenotypes.term_id | (optional) defaults to undefined
 **associatedPhenotypesTermName** | **Array&lt;string&gt;** | Filter by associated_phenotypes.term_name | (optional) defaults to undefined
 **averageGuideCoverage** | **Array&lt;number&gt;** | Filter by average_guide_coverage | (optional) defaults to undefined
 **averageInsertSize** | **Array&lt;number&gt;** | Filter by average_insert_size | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **exon** | **Array&lt;string&gt;** | Filter by exon | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;guide library&#39; &#124; &#39;reporter library&#39; &#124; &#39;expression vector library&#39; &#124; &#39;editing template library&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **guideType** | **Array<&#39;sgRNA&#39; &#124; &#39;pgRNA&#39;>** | Filter by guide_type | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **integratedContentFiles** | **Array&lt;string&gt;** | Filter by integrated_content_files | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **largeScaleGeneListId** | **Array&lt;string&gt;** | Filter by large_scale_gene_list.@id | (optional) defaults to undefined
 **largeScaleGeneListAccession** | **Array&lt;string&gt;** | Filter by large_scale_gene_list.accession | (optional) defaults to undefined
 **largeScaleGeneListAliases** | **Array&lt;string&gt;** | Filter by large_scale_gene_list.aliases | (optional) defaults to undefined
 **largeScaleLociListId** | **Array&lt;string&gt;** | Filter by large_scale_loci_list.@id | (optional) defaults to undefined
 **largeScaleLociListAccession** | **Array&lt;string&gt;** | Filter by large_scale_loci_list.accession | (optional) defaults to undefined
 **largeScaleLociListAliases** | **Array&lt;string&gt;** | Filter by large_scale_loci_list.aliases | (optional) defaults to undefined
 **lotId** | **Array&lt;string&gt;** | Filter by lot_id | (optional) defaults to undefined
 **lowerBoundGuideCoverage** | **Array&lt;number&gt;** | Filter by lower_bound_guide_coverage | (optional) defaults to undefined
 **lowerBoundInsertSize** | **Array&lt;number&gt;** | Filter by lower_bound_insert_size | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **orfListId** | **Array&lt;string&gt;** | Filter by orf_list.@id | (optional) defaults to undefined
 **orfListAliases** | **Array&lt;string&gt;** | Filter by orf_list.aliases | (optional) defaults to undefined
 **orfListGene** | **Array&lt;string&gt;** | Filter by orf_list.gene | (optional) defaults to undefined
 **orfListOrfId** | **Array&lt;string&gt;** | Filter by orf_list.orf_id | (optional) defaults to undefined
 **productId** | **Array&lt;string&gt;** | Filter by product_id | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **scope** | **Array<&#39;tile&#39; &#124; &#39;exon&#39; &#124; &#39;genes&#39; &#124; &#39;loci&#39; &#124; &#39;genome-wide&#39; &#124; &#39;interactors&#39; &#124; &#39;alleles&#39; &#124; &#39;targeton&#39;>** | Filter by scope | (optional) defaults to undefined
 **selectionCriteria** | **Array<&#39;accessible genome regions&#39; &#124; &#39;candidate cis-regulatory elements&#39; &#124; &#39;chromatin states&#39; &#124; &#39;phenotype-associated variants&#39; &#124; &#39;DNase hypersensitive sites&#39; &#124; &#39;genes&#39; &#124; &#39;histone modifications&#39; &#124; &#39;protein interactors&#39; &#124; &#39;sequence variants&#39; &#124; &#39;synthetic elements&#39; &#124; &#39;transcription start sites&#39; &#124; &#39;TF binding sites&#39;>** | Filter by selection_criteria | (optional) defaults to undefined
 **smallScaleGeneListId** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.@id | (optional) defaults to undefined
 **smallScaleGeneListGeneid** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.geneid | (optional) defaults to undefined
 **smallScaleGeneListName** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.name | (optional) defaults to undefined
 **smallScaleGeneListSymbol** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.symbol | (optional) defaults to undefined
 **smallScaleGeneListSynonyms** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.synonyms | (optional) defaults to undefined
 **smallScaleLociList** | **Array&lt;Locus&gt;** | Filter by small_scale_loci_list | (optional) defaults to undefined
 **sources** | **Array&lt;string&gt;** | Filter by sources | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **targeton** | **Array&lt;string&gt;** | Filter by targeton | (optional) defaults to undefined
 **tilingModality** | **Array<&#39;peak tiling&#39; &#124; &#39;full tiling&#39; &#124; &#39;sparse peaks&#39;>** | Filter by tiling_modality | (optional) defaults to undefined
 **upperBoundGuideCoverage** | **Array&lt;number&gt;** | Filter by upper_bound_guide_coverage | (optional) defaults to undefined
 **upperBoundInsertSize** | **Array&lt;number&gt;** | Filter by upper_bound_insert_size | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**ConstructLibrarySetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **crisprModifications**
> CrisprModificationResults crisprModifications()

Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiCrisprModificationsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<boolean> | Filter by activated (optional)
  activated: [
    true,
  ],
  // Array<string> | Filter by activating_agent_term_id (optional)
  activatingAgentTermId: [
    "CHEBI:4807288",
  ],
  // Array<string> | Filter by activating_agent_term_name (optional)
  activatingAgentTermName: [
    "activating_agent_term_name_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by biosamples_modified (optional)
  biosamplesModified: [
    "biosamples_modified_example",
  ],
  // Array<'Cas9' | 'Cas12a' | 'Cas13' | 'dCas9' | 'nCas9' | 'SpG' | 'SpRY'> | Filter by cas (optional)
  cas: [
    "Cas9",
  ],
  // Array<'Streptococcus pyogenes (Sp)' | 'Staphylococcus aureus (Sa)' | 'Campylobacter jejuni (Cj)' | 'Neisseria meningitidis (Nm)'> | Filter by cas_species (optional)
  casSpecies: [
    "Streptococcus pyogenes (Sp)",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'2xVP64' | '3xVP64' | 'ABE8e' | 'ABE8.20' | 'ANTI-FLAG' | 'BE4' | 'BE4max' | 'eA3A' | 'eA3A-T31A' | 'eA3A-T44D-S45A' | 'KOX1-KRAB' | 'M-MLV RT (PE2)' | 'p300' | 'TdCBE' | 'TdCGBE' | 'TdDE' | 'VPH' | 'VP64' | 'VP64-p65-Rta (VPR)' | 'ZIM3-KRAB'> | Filter by fused_domain (optional)
  fusedDomain: [
    "2xVP64",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by lot_id (optional)
  lotId: [
    "k",
  ],
  // Array<'activation' | 'base editing' | 'cutting' | 'interference' | 'knockout' | 'localizing' | 'prime editing'> | Filter by modality (optional)
  modality: [
    "activation",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by product_id (optional)
  productId: [
    "addgene:480728",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by sources (optional)
  sources: [
    "sources_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by tagged_protein (optional)
  taggedProtein: [
    "tagged_protein_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.crisprModifications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **activated** | **Array&lt;boolean&gt;** | Filter by activated | (optional) defaults to undefined
 **activatingAgentTermId** | **Array&lt;string&gt;** | Filter by activating_agent_term_id | (optional) defaults to undefined
 **activatingAgentTermName** | **Array&lt;string&gt;** | Filter by activating_agent_term_name | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **biosamplesModified** | **Array&lt;string&gt;** | Filter by biosamples_modified | (optional) defaults to undefined
 **cas** | **Array<&#39;Cas9&#39; &#124; &#39;Cas12a&#39; &#124; &#39;Cas13&#39; &#124; &#39;dCas9&#39; &#124; &#39;nCas9&#39; &#124; &#39;SpG&#39; &#124; &#39;SpRY&#39;>** | Filter by cas | (optional) defaults to undefined
 **casSpecies** | **Array<&#39;Streptococcus pyogenes (Sp)&#39; &#124; &#39;Staphylococcus aureus (Sa)&#39; &#124; &#39;Campylobacter jejuni (Cj)&#39; &#124; &#39;Neisseria meningitidis (Nm)&#39;>** | Filter by cas_species | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fusedDomain** | **Array<&#39;2xVP64&#39; &#124; &#39;3xVP64&#39; &#124; &#39;ABE8e&#39; &#124; &#39;ABE8.20&#39; &#124; &#39;ANTI-FLAG&#39; &#124; &#39;BE4&#39; &#124; &#39;BE4max&#39; &#124; &#39;eA3A&#39; &#124; &#39;eA3A-T31A&#39; &#124; &#39;eA3A-T44D-S45A&#39; &#124; &#39;KOX1-KRAB&#39; &#124; &#39;M-MLV RT (PE2)&#39; &#124; &#39;p300&#39; &#124; &#39;TdCBE&#39; &#124; &#39;TdCGBE&#39; &#124; &#39;TdDE&#39; &#124; &#39;VPH&#39; &#124; &#39;VP64&#39; &#124; &#39;VP64-p65-Rta (VPR)&#39; &#124; &#39;ZIM3-KRAB&#39;>** | Filter by fused_domain | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lotId** | **Array&lt;string&gt;** | Filter by lot_id | (optional) defaults to undefined
 **modality** | **Array<&#39;activation&#39; &#124; &#39;base editing&#39; &#124; &#39;cutting&#39; &#124; &#39;interference&#39; &#124; &#39;knockout&#39; &#124; &#39;localizing&#39; &#124; &#39;prime editing&#39;>** | Filter by modality | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **productId** | **Array&lt;string&gt;** | Filter by product_id | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **sources** | **Array&lt;string&gt;** | Filter by sources | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **taggedProtein** | **Array&lt;string&gt;** | Filter by tagged_protein | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**CrisprModificationResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **curatedSets**
> CuratedSetResults curatedSets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiCuratedSetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by assemblies (optional)
  assemblies: [
    "assemblies_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.contact_pi.@id (optional)
  awardContactPiId: [
    "award.contact_pi.@id_example",
  ],
  // Array<string> | Filter by award.contact_pi.title (optional)
  awardContactPiTitle: [
    "award.contact_pi.title_example",
  ],
  // Array<string> | Filter by award.title (optional)
  awardTitle: [
    "k",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "GEO:GSE4",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors.@id (optional)
  donorsId: [
    "donors.@id_example",
  ],
  // Array<string> | Filter by donors.accession (optional)
  donorsAccession: [
    "donors.accession_example",
  ],
  // Array<string> | Filter by donors.aliases (optional)
  donorsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by donors.sex (optional)
  donorsSex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by donors.status (optional)
  donorsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by donors.taxa (optional)
  donorsTaxa: [
    "donors.taxa_example",
  ],
  // Array<'barcodes' | 'editing templates' | 'elements' | 'external data for catalog' | 'genome' | 'genes' | 'guide RNAs' | 'transcriptome' | 'variants'> | Filter by file_set_type (optional)
  fileSetType: [
    "barcodes",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.creation_timestamp (optional)
  filesCreationTimestamp: [
    "files.creation_timestamp_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<number> | Filter by files.file_size (optional)
  filesFileSize: [
    0,
  ],
  // Array<string> | Filter by files.href (optional)
  filesHref: [
    "files.href_example",
  ],
  // Array<string> | Filter by files.s3_uri (optional)
  filesS3Uri: [
    "files.s3_uri_example",
  ],
  // Array<string> | Filter by files.sequencing_platform (optional)
  filesSequencingPlatform: [
    "files.sequencing_platform_example",
  ],
  // Array<string> | Filter by files.submitted_file_name (optional)
  filesSubmittedFileName: [
    "files.submitted_file_name_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by samples.@id (optional)
  samplesId: [
    "samples.@id_example",
  ],
  // Array<string> | Filter by samples.accession (optional)
  samplesAccession: [
    "samples.accession_example",
  ],
  // Array<string> | Filter by samples.aliases (optional)
  samplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments (optional)
  samplesCellFateChangeTreatments: [
    "samples.cell_fate_change_treatments_example",
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by samples.classifications (optional)
  samplesClassifications: [
    "organoid",
  ],
  // Array<string> | Filter by samples.construct_library_sets (optional)
  samplesConstructLibrarySets: [
    "samples.construct_library_sets_example",
  ],
  // Array<string> | Filter by samples.disease_terms.@id (optional)
  samplesDiseaseTermsId: [
    "samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by samples.disease_terms.term_name (optional)
  samplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by samples.modifications (optional)
  samplesModifications: [
    "samples.modifications_example",
  ],
  // Array<string> | Filter by samples.sample_terms.@id (optional)
  samplesSampleTermsId: [
    "samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.aliases (optional)
  samplesSampleTermsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by samples.sample_terms.status (optional)
  samplesSampleTermsStatus: [
    "archived",
  ],
  // Array<string> | Filter by samples.sample_terms.summary (optional)
  samplesSampleTermsSummary: [
    "samples.sample_terms.summary_example",
  ],
  // Array<string> | Filter by samples.sample_terms.term_name (optional)
  samplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by samples.status (optional)
  samplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by samples.summary (optional)
  samplesSummary: [
    "samples.summary_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.@id (optional)
  samplesTargetedSampleTermId: [
    "samples.targeted_sample_term.@id_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.term_name (optional)
  samplesTargetedSampleTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by samples.taxa (optional)
  samplesTaxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by samples.treatments (optional)
  samplesTreatments: [
    "samples.treatments_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by taxa (optional)
  taxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by transcriptome_annotations (optional)
  transcriptomeAnnotations: [
    "transcriptome_annotations_example",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.curatedSets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **assemblies** | **Array&lt;string&gt;** | Filter by assemblies | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardContactPiId** | **Array&lt;string&gt;** | Filter by award.contact_pi.@id | (optional) defaults to undefined
 **awardContactPiTitle** | **Array&lt;string&gt;** | Filter by award.contact_pi.title | (optional) defaults to undefined
 **awardTitle** | **Array&lt;string&gt;** | Filter by award.title | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donorsId** | **Array&lt;string&gt;** | Filter by donors.@id | (optional) defaults to undefined
 **donorsAccession** | **Array&lt;string&gt;** | Filter by donors.accession | (optional) defaults to undefined
 **donorsAliases** | **Array&lt;string&gt;** | Filter by donors.aliases | (optional) defaults to undefined
 **donorsSex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by donors.sex | (optional) defaults to undefined
 **donorsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by donors.status | (optional) defaults to undefined
 **donorsTaxa** | **Array&lt;string&gt;** | Filter by donors.taxa | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;barcodes&#39; &#124; &#39;editing templates&#39; &#124; &#39;elements&#39; &#124; &#39;external data for catalog&#39; &#124; &#39;genome&#39; &#124; &#39;genes&#39; &#124; &#39;guide RNAs&#39; &#124; &#39;transcriptome&#39; &#124; &#39;variants&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesCreationTimestamp** | **Array&lt;string&gt;** | Filter by files.creation_timestamp | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesFileSize** | **Array&lt;number&gt;** | Filter by files.file_size | (optional) defaults to undefined
 **filesHref** | **Array&lt;string&gt;** | Filter by files.href | (optional) defaults to undefined
 **filesS3Uri** | **Array&lt;string&gt;** | Filter by files.s3_uri | (optional) defaults to undefined
 **filesSequencingPlatform** | **Array&lt;string&gt;** | Filter by files.sequencing_platform | (optional) defaults to undefined
 **filesSubmittedFileName** | **Array&lt;string&gt;** | Filter by files.submitted_file_name | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **samplesId** | **Array&lt;string&gt;** | Filter by samples.@id | (optional) defaults to undefined
 **samplesAccession** | **Array&lt;string&gt;** | Filter by samples.accession | (optional) defaults to undefined
 **samplesAliases** | **Array&lt;string&gt;** | Filter by samples.aliases | (optional) defaults to undefined
 **samplesCellFateChangeTreatments** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments | (optional) defaults to undefined
 **samplesClassifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by samples.classifications | (optional) defaults to undefined
 **samplesConstructLibrarySets** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets | (optional) defaults to undefined
 **samplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by samples.disease_terms.@id | (optional) defaults to undefined
 **samplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by samples.disease_terms.term_name | (optional) defaults to undefined
 **samplesModifications** | **Array&lt;string&gt;** | Filter by samples.modifications | (optional) defaults to undefined
 **samplesSampleTermsId** | **Array&lt;string&gt;** | Filter by samples.sample_terms.@id | (optional) defaults to undefined
 **samplesSampleTermsAliases** | **Array&lt;string&gt;** | Filter by samples.sample_terms.aliases | (optional) defaults to undefined
 **samplesSampleTermsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by samples.sample_terms.status | (optional) defaults to undefined
 **samplesSampleTermsSummary** | **Array&lt;string&gt;** | Filter by samples.sample_terms.summary | (optional) defaults to undefined
 **samplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by samples.sample_terms.term_name | (optional) defaults to undefined
 **samplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by samples.status | (optional) defaults to undefined
 **samplesSummary** | **Array&lt;string&gt;** | Filter by samples.summary | (optional) defaults to undefined
 **samplesTargetedSampleTermId** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.@id | (optional) defaults to undefined
 **samplesTargetedSampleTermTermName** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.term_name | (optional) defaults to undefined
 **samplesTaxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by samples.taxa | (optional) defaults to undefined
 **samplesTreatments** | **Array&lt;string&gt;** | Filter by samples.treatments | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **taxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by taxa | (optional) defaults to undefined
 **transcriptomeAnnotations** | **Array&lt;string&gt;** | Filter by transcriptome_annotations | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**CuratedSetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **degronModifications**
> DegronModificationResults degronModifications()

Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiDegronModificationsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<boolean> | Filter by activated (optional)
  activated: [
    true,
  ],
  // Array<string> | Filter by activating_agent_term_id (optional)
  activatingAgentTermId: [
    "CHEBI:4807288",
  ],
  // Array<string> | Filter by activating_agent_term_name (optional)
  activatingAgentTermName: [
    "activating_agent_term_name_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by biosamples_modified (optional)
  biosamplesModified: [
    "biosamples_modified_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<'AID' | 'AlissAid' | 'ssAID'> | Filter by degron_system (optional)
  degronSystem: [
    "AID",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by lot_id (optional)
  lotId: [
    "k",
  ],
  // Array<'degradation'> | Filter by modality (optional)
  modality: [
    "degradation",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by product_id (optional)
  productId: [
    "addgene:480728",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by sources (optional)
  sources: [
    "sources_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by tagged_proteins (optional)
  taggedProteins: [
    "tagged_proteins_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.degronModifications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **activated** | **Array&lt;boolean&gt;** | Filter by activated | (optional) defaults to undefined
 **activatingAgentTermId** | **Array&lt;string&gt;** | Filter by activating_agent_term_id | (optional) defaults to undefined
 **activatingAgentTermName** | **Array&lt;string&gt;** | Filter by activating_agent_term_name | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **biosamplesModified** | **Array&lt;string&gt;** | Filter by biosamples_modified | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **degronSystem** | **Array<&#39;AID&#39; &#124; &#39;AlissAid&#39; &#124; &#39;ssAID&#39;>** | Filter by degron_system | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lotId** | **Array&lt;string&gt;** | Filter by lot_id | (optional) defaults to undefined
 **modality** | **Array<&#39;degradation&#39;>** | Filter by modality | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **productId** | **Array&lt;string&gt;** | Filter by product_id | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **sources** | **Array&lt;string&gt;** | Filter by sources | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **taggedProteins** | **Array&lt;string&gt;** | Filter by tagged_proteins | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**DegronModificationResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **documents**
> DocumentResults documents()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiDocumentsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'FACS' | 'immunoblot' | 'immunofluorescence' | 'immunoprecipitation' | 'mass spectrometry' | 'PCR' | 'restriction digest' | 'RT-qPCR' | 'sequencing'> | Filter by characterization_method (optional)
  characterizationMethod: [
    "FACS",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<'cell fate change protocol' | 'characterization' | 'computational protocol' | 'experimental protocol' | 'file format specification' | 'image' | 'model source data' | 'plate map' | 'plasmid map' | 'plasmid sequence' | 'standards'> | Filter by document_type (optional)
  documentType: [
    "cell fate change protocol",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by urls (optional)
  urls: [
    "urls_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.documents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **characterizationMethod** | **Array<&#39;FACS&#39; &#124; &#39;immunoblot&#39; &#124; &#39;immunofluorescence&#39; &#124; &#39;immunoprecipitation&#39; &#124; &#39;mass spectrometry&#39; &#124; &#39;PCR&#39; &#124; &#39;restriction digest&#39; &#124; &#39;RT-qPCR&#39; &#124; &#39;sequencing&#39;>** | Filter by characterization_method | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documentType** | **Array<&#39;cell fate change protocol&#39; &#124; &#39;characterization&#39; &#124; &#39;computational protocol&#39; &#124; &#39;experimental protocol&#39; &#124; &#39;file format specification&#39; &#124; &#39;image&#39; &#124; &#39;model source data&#39; &#124; &#39;plate map&#39; &#124; &#39;plasmid map&#39; &#124; &#39;plasmid sequence&#39; &#124; &#39;standards&#39;>** | Filter by document_type | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **urls** | **Array&lt;string&gt;** | Filter by urls | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**DocumentResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **download**
> HttpFile download()

Returns underlying file associated with file metadata

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiDownloadRequest = {
  // string | The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03).
  fileId: "file_id_example",
};

apiInstance.download(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03). | defaults to undefined


### Return type

**HttpFile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Item not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **genes**
> GeneResults genes()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiGenesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENTREZ:9072888001528021798096225500850762068629339333975650685139102691291",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by geneid (optional)
  geneid: [
    "ENSEIOTGSWWMEJTCMOSLLNYULG62255008507",
  ],
  // Array<string> | Filter by geneid_with_version (optional)
  geneidWithVersion: [
    "geneid_with_version_example",
  ],
  // Array<GeneLocation> | Filter by locations (optional)
  locations: [
    {
      assembly: "GRCh38",
      chromosome: "chrC",
      start: 0,
      end: 0,
    },
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by symbol (optional)
  symbol: [
    "symbol_example",
  ],
  // Array<string> | Filter by synonyms (optional)
  synonyms: [
    "synonyms_example",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by taxa (optional)
  taxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    "title_example",
  ],
  // Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'> | Filter by transcriptome_annotation (optional)
  transcriptomeAnnotation: [
    "GENCODE 40",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by version_number (optional)
  versionNumber: [
    "80728",
  ],
};

apiInstance.genes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **geneid** | **Array&lt;string&gt;** | Filter by geneid | (optional) defaults to undefined
 **geneidWithVersion** | **Array&lt;string&gt;** | Filter by geneid_with_version | (optional) defaults to undefined
 **locations** | **Array&lt;GeneLocation&gt;** | Filter by locations | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **symbol** | **Array&lt;string&gt;** | Filter by symbol | (optional) defaults to undefined
 **synonyms** | **Array&lt;string&gt;** | Filter by synonyms | (optional) defaults to undefined
 **taxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by taxa | (optional) defaults to undefined
 **title** | **Array&lt;string&gt;** | Filter by title | (optional) defaults to undefined
 **transcriptomeAnnotation** | **Array<&#39;GENCODE 40&#39; &#124; &#39;GENCODE 41&#39; &#124; &#39;GENCODE 42&#39; &#124; &#39;GENCODE 43&#39; &#124; &#39;GENCODE 44&#39; &#124; &#39;GENCODE 45&#39; &#124; &#39;GENCODE M30&#39; &#124; &#39;GENCODE M31&#39; &#124; &#39;GENCODE M32&#39; &#124; &#39;GENCODE M33&#39; &#124; &#39;GENCODE M34&#39;>** | Filter by transcriptome_annotation | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **versionNumber** | **Array&lt;string&gt;** | Filter by version_number | (optional) defaults to undefined


### Return type

**GeneResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **genomeBrowserAnnotationFiles**
> GenomeBrowserAnnotationFileResults genomeBrowserAnnotationFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiGenomeBrowserAnnotationFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<'GRCh38' | 'GRCm39'> | Filter by assembly (optional)
  assembly: [
    "GRCh38",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'bigBed' | 'tabix'> | Filter by file_format (optional)
  fileFormat: [
    "bigBed",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'> | Filter by file_format_type (optional)
  fileFormatType: [
    "bed12",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'> | Filter by transcriptome_annotation (optional)
  transcriptomeAnnotation: [
    "GENCODE 40",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.genomeBrowserAnnotationFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **assembly** | **Array<&#39;GRCh38&#39; &#124; &#39;GRCm39&#39;>** | Filter by assembly | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;bigBed&#39; &#124; &#39;tabix&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileFormatType** | **Array<&#39;bed12&#39; &#124; &#39;bed3&#39; &#124; &#39;bed3+&#39; &#124; &#39;bed5&#39; &#124; &#39;bed6&#39; &#124; &#39;bed6+&#39; &#124; &#39;bed9&#39; &#124; &#39;bed9+&#39; &#124; &#39;mpra_starr&#39;>** | Filter by file_format_type | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **transcriptomeAnnotation** | **Array<&#39;GENCODE 40&#39; &#124; &#39;GENCODE 41&#39; &#124; &#39;GENCODE 42&#39; &#124; &#39;GENCODE 43&#39; &#124; &#39;GENCODE 44&#39; &#124; &#39;GENCODE 45&#39; &#124; &#39;GENCODE M30&#39; &#124; &#39;GENCODE M31&#39; &#124; &#39;GENCODE M32&#39; &#124; &#39;GENCODE M33&#39; &#124; &#39;GENCODE M34&#39;>** | Filter by transcriptome_annotation | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**GenomeBrowserAnnotationFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getById**
> Item getById()

Retrieve detailed information about a specific item using its @id or uuid.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiGetByIdRequest = {
  // string | The unique identifier for the resource i.e. @id (`/sequence-files/IGVFFI1165AJSO/`), accession (`IGVFFI1165AJSO`) or UUID (`fffcd64e-af02-4675-8953-7352459ee06a`).
  resourceId: "/sequence-files/IGVFFI1165AJSO/",
  // 'object' | Constant value. Do not set.
  frame: "object",
};

apiInstance.getById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | [**string**] | The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;). | defaults to undefined
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined


### Return type

**Item**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **humanDonors**
> HumanDonorResults humanDonors()

Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiHumanDonorsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENCODE:ENCDO480TGS",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'African American' | 'African Caribbean' | 'Arab' | 'Asian' | 'Black' | 'Black African' | 'Chinese' | 'Colombian' | 'Dai Chinese' | 'Esan' | 'Eskimo' | 'European' | 'Gambian' | 'Han Chinese' | 'Hispanic' | 'Indian' | 'Japanese' | 'Kinh Vietnamese' | 'Luhya' | 'Maasai' | 'Mende' | 'Native Hawaiian' | 'Pacific Islander' | 'Puerto Rican' | 'Yoruba'> | Filter by ethnicities (optional)
  ethnicities: [
    "African American",
  ],
  // Array<string> | Filter by human_donor_identifiers (optional)
  humanDonorIdentifiers: [
    "human_donor_identifiers_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by phenotypic_features.@id (optional)
  phenotypicFeaturesId: [
    "phenotypic_features.@id_example",
  ],
  // Array<string> | Filter by phenotypic_features.feature.@id (optional)
  phenotypicFeaturesFeatureId: [
    "phenotypic_features.feature.@id_example",
  ],
  // Array<string> | Filter by phenotypic_features.feature.term_id (optional)
  phenotypicFeaturesFeatureTermId: [
    "NCIT:C80728",
  ],
  // Array<string> | Filter by phenotypic_features.feature.term_name (optional)
  phenotypicFeaturesFeatureTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by phenotypic_features.observation_date (optional)
  phenotypicFeaturesObservationDate: [
    "phenotypic_features.observation_date_example",
  ],
  // Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'> | Filter by phenotypic_features.quantity_units (optional)
  phenotypicFeaturesQuantityUnits: [
    "meter",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by related_donors.donor.@id (optional)
  relatedDonorsDonorId: [
    "related_donors.donor.@id_example",
  ],
  // Array<string> | Filter by related_donors.donor.accession (optional)
  relatedDonorsDonorAccession: [
    "related_donors.donor.accession_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by sex (optional)
  sex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'Homo sapiens'> | Filter by taxa (optional)
  taxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<boolean> | Filter by virtual (optional)
  virtual: [
    true,
  ],
};

apiInstance.humanDonors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **ethnicities** | **Array<&#39;African American&#39; &#124; &#39;African Caribbean&#39; &#124; &#39;Arab&#39; &#124; &#39;Asian&#39; &#124; &#39;Black&#39; &#124; &#39;Black African&#39; &#124; &#39;Chinese&#39; &#124; &#39;Colombian&#39; &#124; &#39;Dai Chinese&#39; &#124; &#39;Esan&#39; &#124; &#39;Eskimo&#39; &#124; &#39;European&#39; &#124; &#39;Gambian&#39; &#124; &#39;Han Chinese&#39; &#124; &#39;Hispanic&#39; &#124; &#39;Indian&#39; &#124; &#39;Japanese&#39; &#124; &#39;Kinh Vietnamese&#39; &#124; &#39;Luhya&#39; &#124; &#39;Maasai&#39; &#124; &#39;Mende&#39; &#124; &#39;Native Hawaiian&#39; &#124; &#39;Pacific Islander&#39; &#124; &#39;Puerto Rican&#39; &#124; &#39;Yoruba&#39;>** | Filter by ethnicities | (optional) defaults to undefined
 **humanDonorIdentifiers** | **Array&lt;string&gt;** | Filter by human_donor_identifiers | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **phenotypicFeaturesId** | **Array&lt;string&gt;** | Filter by phenotypic_features.@id | (optional) defaults to undefined
 **phenotypicFeaturesFeatureId** | **Array&lt;string&gt;** | Filter by phenotypic_features.feature.@id | (optional) defaults to undefined
 **phenotypicFeaturesFeatureTermId** | **Array&lt;string&gt;** | Filter by phenotypic_features.feature.term_id | (optional) defaults to undefined
 **phenotypicFeaturesFeatureTermName** | **Array&lt;string&gt;** | Filter by phenotypic_features.feature.term_name | (optional) defaults to undefined
 **phenotypicFeaturesObservationDate** | **Array&lt;string&gt;** | Filter by phenotypic_features.observation_date | (optional) defaults to undefined
 **phenotypicFeaturesQuantityUnits** | **Array<&#39;meter&#39; &#124; &#39;micromole&#39; &#124; &#39;nanogram&#39; &#124; &#39;microgram&#39; &#124; &#39;milligram&#39; &#124; &#39;gram&#39; &#124; &#39;kilogram&#39; &#124; &#39;milli-International Unit per milliliter&#39; &#124; &#39;picogram per milliliter&#39; &#124; &#39;nanogram per milliliter&#39; &#124; &#39;milligram per deciliter&#39;>** | Filter by phenotypic_features.quantity_units | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **relatedDonorsDonorId** | **Array&lt;string&gt;** | Filter by related_donors.donor.@id | (optional) defaults to undefined
 **relatedDonorsDonorAccession** | **Array&lt;string&gt;** | Filter by related_donors.donor.accession | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **sex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by sex | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **taxa** | **Array<&#39;Homo sapiens&#39;>** | Filter by taxa | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **virtual** | **Array&lt;boolean&gt;** | Filter by virtual | (optional) defaults to undefined


### Return type

**HumanDonorResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageFiles**
> ImageFileResults imageFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiImageFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'jpg' | 'png'> | Filter by file_format (optional)
  fileFormat: [
    "jpg",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.imageFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;jpg&#39; &#124; &#39;png&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**ImageFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **images**
> ImageResults images()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiImagesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by caption (optional)
  caption: [
    "caption_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by download_url (optional)
  downloadUrl: [
    "download_url_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by thumb_nail (optional)
  thumbNail: [
    "thumb_nail_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.images(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **caption** | **Array&lt;string&gt;** | Filter by caption | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **downloadUrl** | **Array&lt;string&gt;** | Filter by download_url | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **thumbNail** | **Array&lt;string&gt;** | Filter by thumb_nail | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**ImageResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inVitroSystems**
> InVitroSystemResults inVitroSystems()

Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiInVitroSystemsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by age (optional)
  age: [
    "20",
  ],
  // Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'> | Filter by age_units (optional)
  ageUnits: [
    "minute",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by biomarkers (optional)
  biomarkers: [
    "biomarkers_example",
  ],
  // Array<string> | Filter by cell_fate_change_protocol (optional)
  cellFateChangeProtocol: [
    "cell_fate_change_protocol_example",
  ],
  // Array<string> | Filter by cell_fate_change_treatments.@id (optional)
  cellFateChangeTreatmentsId: [
    "cell_fate_change_treatments.@id_example",
  ],
  // Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'> | Filter by cell_fate_change_treatments.purpose (optional)
  cellFateChangeTreatmentsPurpose: [
    "activation",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by cell_fate_change_treatments.status (optional)
  cellFateChangeTreatmentsStatus: [
    "archived",
  ],
  // Array<string> | Filter by cell_fate_change_treatments.summary (optional)
  cellFateChangeTreatmentsSummary: [
    "cell_fate_change_treatments.summary_example",
  ],
  // Array<'chemical' | 'protein' | 'environmental'> | Filter by cell_fate_change_treatments.treatment_type (optional)
  cellFateChangeTreatmentsTreatmentType: [
    "chemical",
  ],
  // Array<string> | Filter by cellular_sub_pool (optional)
  cellularSubPool: [
    `A	PSSEW9gFbDSx8mxCScjDL(CXm8G5
8cfa8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-L
wL3CTLxzWhej1zFvhjFRboDzLsp6gf0OAK-kCSql(uFEEYdpfNsNsac1)SIo6lS-8RLNCj.vwl1j7t1vuHb	KU.InXclZXDvTILOlNXObqOhIxyXMA.LlW(Yib4.A5LmHAyFXUBTqfd(i3I
HO3NkWS6xtW2w5xnZwtXEesNYvTjpOQf.NcVPpV9BD04SJp5J46_3dkkS8NUjdcuy-m-_tfX3utne7fNJhTEEe
UBwaE8H52.b.mwvBdD-3IxHaS__(IgtBQhxiSednf7s3up4IuPu9pHas7RMR69K_R1SH.IDdd2iwO4O
DNwoIBii58AlzvjXkzL1cFtU(wGJsBpEWN4X007jy4ne8B9viHCfRSt.zM)AzqND3VbSpzu2rt3e5m6oyHHFRQa)Q_aoGdVD(L5EG(9z2JfhY(Fl6D--BFq9uvJ)z1.gmLbf9eAlVc3GFPfzIBbiFI0WqfuzQxA20tAzyVT.SCqdFXiTxklrT0n9Ju8nF5H1Xl45CTMi9yNVBoMWen(Yz(PfKgRQB(8t-DSgxDf5tssxRltnj0J7BUY8hLcGaAEm7R s(eP5SikNzvvGcEMzAva2(Tu3L4c5avQxR(XXYqFxVO-l.-ux9CWV6X3Vf8HpUDuxM V-2RsXzBpac-BwWuqaL6xt5VAr.nNYs8k8XUUTDwo0v.V.LbXyer5yR6rmwayWFaFu	AxAnVYxdkoZwLN(1Su-5YxiA..BXKnjtWjQv9CVA5r4bWdS4lm)IqDEH2wPKRRON
LL66f3bvB45gABxGG4cumOhUPoyiBvyEEGncakfEuYH3dxfN_BsVNj6sxxi56dDz.7cr7IixoI02k7uqhs1f5RRCQ_qoss7VBNec)D4oYkNz	f5lpC5-CasX2FJdtRCcC(5MvL-NZXkUml6eucdU94qxl.3L(lkU.7(lM4h(K nA4KOWnh4E)2CzvswM7)Evgpp-fMCbKcrYpAs_4V(fyBlEA7
dbTOTAa5U5y9.iob6cXxY7OnDddCo-Nz)BiQy.nkvhyI.Q7KRN_5vWmQQ.ZW3LZlLBPNr0Mjh1D8LLb0VnGd0fKz S)NfCdFJzT_l(hxwOekxQ(ZhpU4VZH5I.e7KcbAp3XhW
.7YqB4bMaJBkMUeU-Rv_8GLP8GcqU0n9hcZKfi_uj)KjfrcwdAasf)E.bvj912vcZWsf3rchvLpSn-9VrP7a8r(OC0RB3LzrKhzZbAVhx-xzK(o).XAfTkYB)inFbQh..c0)ZFSteTJF2vIMs7HbcUDl3gxIn HSEaxqbRaj(9MHdOLxnocPBF_ySwwT8PZ587pcMrlOpivpmtX.UBdGWmCD32JDXCLsZIfKYtQMcEgNCQkDzSPidOOUiPZTQ_GK.RiXQ)6MdiKIHcdnw1gIDvxACrn(_bXO0nT0BtRC9jW R-qIEA9-6cOLJARGmkX0NeIe64sJ9bPmMstkBzRt-1a.QwQ5ihe0DwVLLxanL8CkS-qlZLExxdBys7iu-bG2TK(KrgjCh0Xc.tZ147sk36zHs75uM(xWURvNJSewADuGA)uGSQTn_AmjaP.-9_8Rcwx.5UOn8eyMR3dUxdf9ygTiLSA)TPWaAv2xygDaWvo05E193n1beIeqZz7qRNxQGWq6vvG6zsGL(qMOuGg(ppWj_.Y4	VhdoXJKc6E4lO1VNaWu)UISeMawY_IDQZT.lYZ(.PEUKHy7FMs8GI2zhYVhI_uYQU-e)W6FFc9ITUSp(uVja)p
PLnP8JBPrUjICUC5tv4Mt8j_dli.gACX_rj_yZ.e)x6(URuAUAuEFms47lNT)zmH.FZVTdYzmq2adekYUmXkgB8lQ)inJuuzJ.tcRyHkA1Y6DiOKTtUUjqRAiuocFpH4LWUDa2Cd)dPlRZFp2r
LKl2mfdTjaPE1xNaMvBtqhDijc_wK_LCbWnjOY4l6k(H4L561wdoQZ7_Tw7im0mroVfkOW7)U6aItgWDGRMes8Xqg0F3pr6iH
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by classifications (optional)
  classifications: [
    "organoid",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by construct_library_sets (optional)
  constructLibrarySets: [
    "construct_library_sets_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by date_obtained (optional)
  dateObtained: [
    "date_obtained_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENCODE:ENCBS480TGS",
  ],
  // Array<string> | Filter by demultiplexed_from (optional)
  demultiplexedFrom: [
    "demultiplexed_from_example",
  ],
  // Array<string> | Filter by demultiplexed_to (optional)
  demultiplexedTo: [
    "demultiplexed_to_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by disease_terms.@id (optional)
  diseaseTermsId: [
    "disease_terms.@id_example",
  ],
  // Array<string> | Filter by disease_terms.term_name (optional)
  diseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors (optional)
  donors: [
    "donors_example",
  ],
  // Array<boolean> | Filter by embryonic (optional)
  embryonic: [
    true,
  ],
  // Array<string> | Filter by file_sets.@id (optional)
  fileSetsId: [
    "file_sets.@id_example",
  ],
  // Array<string> | Filter by file_sets.accession (optional)
  fileSetsAccession: [
    "file_sets.accession_example",
  ],
  // Array<string> | Filter by file_sets.aliases (optional)
  fileSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by file_sets.assay_term.term_name (optional)
  fileSetsAssayTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by file_sets.lab.title (optional)
  fileSetsLabTitle: [
    "file_sets.lab.title_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by file_sets.status (optional)
  fileSetsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by file_sets.summary (optional)
  fileSetsSummary: [
    "file_sets.summary_example",
  ],
  // Array<'DMEM with serum' | 'DMEM without serum' | 'SMBM with serum' | 'SMBM without serum'> | Filter by growth_medium (optional)
  growthMedium: [
    "DMEM with serum",
  ],
  // Array<string> | Filter by institutional_certificates.@id (optional)
  institutionalCertificatesId: [
    "institutional_certificates.@id_example",
  ],
  // Array<string> | Filter by institutional_certificates.certificate_identifier (optional)
  institutionalCertificatesCertificateIdentifier: [
    "IP048-07",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by lot_id (optional)
  lotId: [
    "k",
  ],
  // Array<number> | Filter by lower_bound_age (optional)
  lowerBoundAge: [
    3.14,
  ],
  // Array<number> | Filter by lower_bound_age_in_hours (optional)
  lowerBoundAgeInHours: [
    3.14,
  ],
  // Array<string> | Filter by modifications.@id (optional)
  modificationsId: [
    "modifications.@id_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by modifications.status (optional)
  modificationsStatus: [
    "archived",
  ],
  // Array<string> | Filter by modifications.summary (optional)
  modificationsSummary: [
    "modifications.summary_example",
  ],
  // Array<number> | Filter by moi (optional)
  moi: [
    0,
  ],
  // Array<string> | Filter by multiplexed_in.@id (optional)
  multiplexedInId: [
    "multiplexed_in.@id_example",
  ],
  // Array<string> | Filter by multiplexed_in.accession (optional)
  multiplexedInAccession: [
    "multiplexed_in.accession_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'> | Filter by nucleic_acid_delivery (optional)
  nucleicAcidDelivery: [
    "transfection",
  ],
  // Array<string> | Filter by origin_of (optional)
  originOf: [
    "origin_of_example",
  ],
  // Array<string> | Filter by originated_from.@id (optional)
  originatedFromId: [
    "originated_from.@id_example",
  ],
  // Array<string> | Filter by originated_from.accession (optional)
  originatedFromAccession: [
    "originated_from.accession_example",
  ],
  // Array<string> | Filter by part_of (optional)
  partOf: [
    "part_of_example",
  ],
  // Array<string> | Filter by parts (optional)
  parts: [
    "parts_example",
  ],
  // Array<number> | Filter by passage_number (optional)
  passageNumber: [
    0,
  ],
  // Array<string> | Filter by pooled_from (optional)
  pooledFrom: [
    "pooled_from_example",
  ],
  // Array<string> | Filter by pooled_in (optional)
  pooledIn: [
    "pooled_in_example",
  ],
  // Array<string> | Filter by product_id (optional)
  productId: [
    "k",
  ],
  // Array<string> | Filter by protocols (optional)
  protocols: [
    "https://www.protocols.io/k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by sample_terms.@id (optional)
  sampleTermsId: [
    "sample_terms.@id_example",
  ],
  // Array<string> | Filter by sample_terms.term_name (optional)
  sampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'female' | 'male' | 'mixed' | 'unspecified'> | Filter by sex (optional)
  sex: [
    "female",
  ],
  // Array<string> | Filter by sorted_fractions (optional)
  sortedFractions: [
    "sorted_fractions_example",
  ],
  // Array<string> | Filter by sorted_from.@id (optional)
  sortedFromId: [
    "sorted_from.@id_example",
  ],
  // Array<string> | Filter by sorted_from.accession (optional)
  sortedFromAccession: [
    "sorted_from.accession_example",
  ],
  // Array<string> | Filter by sorted_from_detail (optional)
  sortedFromDetail: [
    "sorted_from_detail_example",
  ],
  // Array<string> | Filter by sources.@id (optional)
  sourcesId: [
    "sources.@id_example",
  ],
  // Array<number> | Filter by starting_amount (optional)
  startingAmount: [
    3.14,
  ],
  // Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'> | Filter by starting_amount_units (optional)
  startingAmountUnits: [
    "cells",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by targeted_sample_term (optional)
  targetedSampleTerm: [
    "targeted_sample_term_example",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by taxa (optional)
  taxa: [
    "Homo sapiens",
  ],
  // Array<number> | Filter by time_post_change (optional)
  timePostChange: [
    3.14,
  ],
  // Array<'minute' | 'hour' | 'day' | 'week' | 'month'> | Filter by time_post_change_units (optional)
  timePostChangeUnits: [
    "minute",
  ],
  // Array<number> | Filter by time_post_library_delivery (optional)
  timePostLibraryDelivery: [
    3.14,
  ],
  // Array<'minute' | 'hour' | 'day' | 'week' | 'month'> | Filter by time_post_library_delivery_units (optional)
  timePostLibraryDeliveryUnits: [
    "minute",
  ],
  // Array<string> | Filter by treatments.@id (optional)
  treatmentsId: [
    "treatments.@id_example",
  ],
  // Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'> | Filter by treatments.purpose (optional)
  treatmentsPurpose: [
    "activation",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by treatments.status (optional)
  treatmentsStatus: [
    "archived",
  ],
  // Array<string> | Filter by treatments.summary (optional)
  treatmentsSummary: [
    "treatments.summary_example",
  ],
  // Array<'chemical' | 'protein' | 'environmental'> | Filter by treatments.treatment_type (optional)
  treatmentsTreatmentType: [
    "chemical",
  ],
  // Array<number> | Filter by upper_bound_age (optional)
  upperBoundAge: [
    3.14,
  ],
  // Array<number> | Filter by upper_bound_age_in_hours (optional)
  upperBoundAgeInHours: [
    3.14,
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<boolean> | Filter by virtual (optional)
  virtual: [
    true,
  ],
};

apiInstance.inVitroSystems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **age** | **Array&lt;string&gt;** | Filter by age | (optional) defaults to undefined
 **ageUnits** | **Array<&#39;minute&#39; &#124; &#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39; &#124; &#39;year&#39;>** | Filter by age_units | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **biomarkers** | **Array&lt;string&gt;** | Filter by biomarkers | (optional) defaults to undefined
 **cellFateChangeProtocol** | **Array&lt;string&gt;** | Filter by cell_fate_change_protocol | (optional) defaults to undefined
 **cellFateChangeTreatmentsId** | **Array&lt;string&gt;** | Filter by cell_fate_change_treatments.@id | (optional) defaults to undefined
 **cellFateChangeTreatmentsPurpose** | **Array<&#39;activation&#39; &#124; &#39;agonist&#39; &#124; &#39;antagonist&#39; &#124; &#39;control&#39; &#124; &#39;differentiation&#39; &#124; &#39;de-differentiation&#39; &#124; &#39;perturbation&#39; &#124; &#39;selection&#39; &#124; &#39;stimulation&#39;>** | Filter by cell_fate_change_treatments.purpose | (optional) defaults to undefined
 **cellFateChangeTreatmentsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by cell_fate_change_treatments.status | (optional) defaults to undefined
 **cellFateChangeTreatmentsSummary** | **Array&lt;string&gt;** | Filter by cell_fate_change_treatments.summary | (optional) defaults to undefined
 **cellFateChangeTreatmentsTreatmentType** | **Array<&#39;chemical&#39; &#124; &#39;protein&#39; &#124; &#39;environmental&#39;>** | Filter by cell_fate_change_treatments.treatment_type | (optional) defaults to undefined
 **cellularSubPool** | **Array&lt;string&gt;** | Filter by cellular_sub_pool | (optional) defaults to undefined
 **classifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by classifications | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **constructLibrarySets** | **Array&lt;string&gt;** | Filter by construct_library_sets | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dateObtained** | **Array&lt;string&gt;** | Filter by date_obtained | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **demultiplexedFrom** | **Array&lt;string&gt;** | Filter by demultiplexed_from | (optional) defaults to undefined
 **demultiplexedTo** | **Array&lt;string&gt;** | Filter by demultiplexed_to | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **diseaseTermsId** | **Array&lt;string&gt;** | Filter by disease_terms.@id | (optional) defaults to undefined
 **diseaseTermsTermName** | **Array&lt;string&gt;** | Filter by disease_terms.term_name | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donors** | **Array&lt;string&gt;** | Filter by donors | (optional) defaults to undefined
 **embryonic** | **Array&lt;boolean&gt;** | Filter by embryonic | (optional) defaults to undefined
 **fileSetsId** | **Array&lt;string&gt;** | Filter by file_sets.@id | (optional) defaults to undefined
 **fileSetsAccession** | **Array&lt;string&gt;** | Filter by file_sets.accession | (optional) defaults to undefined
 **fileSetsAliases** | **Array&lt;string&gt;** | Filter by file_sets.aliases | (optional) defaults to undefined
 **fileSetsAssayTermTermName** | **Array&lt;string&gt;** | Filter by file_sets.assay_term.term_name | (optional) defaults to undefined
 **fileSetsLabTitle** | **Array&lt;string&gt;** | Filter by file_sets.lab.title | (optional) defaults to undefined
 **fileSetsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by file_sets.status | (optional) defaults to undefined
 **fileSetsSummary** | **Array&lt;string&gt;** | Filter by file_sets.summary | (optional) defaults to undefined
 **growthMedium** | **Array<&#39;DMEM with serum&#39; &#124; &#39;DMEM without serum&#39; &#124; &#39;SMBM with serum&#39; &#124; &#39;SMBM without serum&#39;>** | Filter by growth_medium | (optional) defaults to undefined
 **institutionalCertificatesId** | **Array&lt;string&gt;** | Filter by institutional_certificates.@id | (optional) defaults to undefined
 **institutionalCertificatesCertificateIdentifier** | **Array&lt;string&gt;** | Filter by institutional_certificates.certificate_identifier | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lotId** | **Array&lt;string&gt;** | Filter by lot_id | (optional) defaults to undefined
 **lowerBoundAge** | **Array&lt;number&gt;** | Filter by lower_bound_age | (optional) defaults to undefined
 **lowerBoundAgeInHours** | **Array&lt;number&gt;** | Filter by lower_bound_age_in_hours | (optional) defaults to undefined
 **modificationsId** | **Array&lt;string&gt;** | Filter by modifications.@id | (optional) defaults to undefined
 **modificationsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by modifications.status | (optional) defaults to undefined
 **modificationsSummary** | **Array&lt;string&gt;** | Filter by modifications.summary | (optional) defaults to undefined
 **moi** | **Array&lt;number&gt;** | Filter by moi | (optional) defaults to undefined
 **multiplexedInId** | **Array&lt;string&gt;** | Filter by multiplexed_in.@id | (optional) defaults to undefined
 **multiplexedInAccession** | **Array&lt;string&gt;** | Filter by multiplexed_in.accession | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **nucleicAcidDelivery** | **Array<&#39;transfection&#39; &#124; &#39;adenoviral transduction&#39; &#124; &#39;lentiviral transduction&#39;>** | Filter by nucleic_acid_delivery | (optional) defaults to undefined
 **originOf** | **Array&lt;string&gt;** | Filter by origin_of | (optional) defaults to undefined
 **originatedFromId** | **Array&lt;string&gt;** | Filter by originated_from.@id | (optional) defaults to undefined
 **originatedFromAccession** | **Array&lt;string&gt;** | Filter by originated_from.accession | (optional) defaults to undefined
 **partOf** | **Array&lt;string&gt;** | Filter by part_of | (optional) defaults to undefined
 **parts** | **Array&lt;string&gt;** | Filter by parts | (optional) defaults to undefined
 **passageNumber** | **Array&lt;number&gt;** | Filter by passage_number | (optional) defaults to undefined
 **pooledFrom** | **Array&lt;string&gt;** | Filter by pooled_from | (optional) defaults to undefined
 **pooledIn** | **Array&lt;string&gt;** | Filter by pooled_in | (optional) defaults to undefined
 **productId** | **Array&lt;string&gt;** | Filter by product_id | (optional) defaults to undefined
 **protocols** | **Array&lt;string&gt;** | Filter by protocols | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **sampleTermsId** | **Array&lt;string&gt;** | Filter by sample_terms.@id | (optional) defaults to undefined
 **sampleTermsTermName** | **Array&lt;string&gt;** | Filter by sample_terms.term_name | (optional) defaults to undefined
 **sex** | **Array<&#39;female&#39; &#124; &#39;male&#39; &#124; &#39;mixed&#39; &#124; &#39;unspecified&#39;>** | Filter by sex | (optional) defaults to undefined
 **sortedFractions** | **Array&lt;string&gt;** | Filter by sorted_fractions | (optional) defaults to undefined
 **sortedFromId** | **Array&lt;string&gt;** | Filter by sorted_from.@id | (optional) defaults to undefined
 **sortedFromAccession** | **Array&lt;string&gt;** | Filter by sorted_from.accession | (optional) defaults to undefined
 **sortedFromDetail** | **Array&lt;string&gt;** | Filter by sorted_from_detail | (optional) defaults to undefined
 **sourcesId** | **Array&lt;string&gt;** | Filter by sources.@id | (optional) defaults to undefined
 **startingAmount** | **Array&lt;number&gt;** | Filter by starting_amount | (optional) defaults to undefined
 **startingAmountUnits** | **Array<&#39;cells&#39; &#124; &#39;cells/ml&#39; &#124; &#39;g&#39; &#124; &#39;items&#39; &#124; &#39;mg&#39; &#124; &#39;whole animals&#39; &#124; &#39;whole embryos&#39; &#124; &#39;μg&#39; &#124; &#39;ng&#39;>** | Filter by starting_amount_units | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **targetedSampleTerm** | **Array&lt;string&gt;** | Filter by targeted_sample_term | (optional) defaults to undefined
 **taxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by taxa | (optional) defaults to undefined
 **timePostChange** | **Array&lt;number&gt;** | Filter by time_post_change | (optional) defaults to undefined
 **timePostChangeUnits** | **Array<&#39;minute&#39; &#124; &#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** | Filter by time_post_change_units | (optional) defaults to undefined
 **timePostLibraryDelivery** | **Array&lt;number&gt;** | Filter by time_post_library_delivery | (optional) defaults to undefined
 **timePostLibraryDeliveryUnits** | **Array<&#39;minute&#39; &#124; &#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** | Filter by time_post_library_delivery_units | (optional) defaults to undefined
 **treatmentsId** | **Array&lt;string&gt;** | Filter by treatments.@id | (optional) defaults to undefined
 **treatmentsPurpose** | **Array<&#39;activation&#39; &#124; &#39;agonist&#39; &#124; &#39;antagonist&#39; &#124; &#39;control&#39; &#124; &#39;differentiation&#39; &#124; &#39;de-differentiation&#39; &#124; &#39;perturbation&#39; &#124; &#39;selection&#39; &#124; &#39;stimulation&#39;>** | Filter by treatments.purpose | (optional) defaults to undefined
 **treatmentsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by treatments.status | (optional) defaults to undefined
 **treatmentsSummary** | **Array&lt;string&gt;** | Filter by treatments.summary | (optional) defaults to undefined
 **treatmentsTreatmentType** | **Array<&#39;chemical&#39; &#124; &#39;protein&#39; &#124; &#39;environmental&#39;>** | Filter by treatments.treatment_type | (optional) defaults to undefined
 **upperBoundAge** | **Array&lt;number&gt;** | Filter by upper_bound_age | (optional) defaults to undefined
 **upperBoundAgeInHours** | **Array&lt;number&gt;** | Filter by upper_bound_age_in_hours | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **virtual** | **Array&lt;boolean&gt;** | Filter by virtual | (optional) defaults to undefined


### Return type

**InVitroSystemResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **institutionalCertificates**
> InstitutionalCertificateResults institutionalCertificates()

Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiInstitutionalCertificatesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by certificate_identifier (optional)
  certificateIdentifier: [
    "IP048-07",
  ],
  // Array<boolean> | Filter by controlled_access (optional)
  controlledAccess: [
    true,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<'DS' | 'GRU' | 'HMB' | 'other'> | Filter by data_use_limitation (optional)
  dataUseLimitation: [
    "DS",
  ],
  // Array<'COL' | 'GSO' | 'IRB' | 'MDS' | 'NPU' | 'PUB'> | Filter by data_use_limitation_modifiers (optional)
  dataUseLimitationModifiers: [
    "COL",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by samples (optional)
  samples: [
    "samples_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by urls (optional)
  urls: [
    "urls_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.institutionalCertificates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **certificateIdentifier** | **Array&lt;string&gt;** | Filter by certificate_identifier | (optional) defaults to undefined
 **controlledAccess** | **Array&lt;boolean&gt;** | Filter by controlled_access | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dataUseLimitation** | **Array<&#39;DS&#39; &#124; &#39;GRU&#39; &#124; &#39;HMB&#39; &#124; &#39;other&#39;>** | Filter by data_use_limitation | (optional) defaults to undefined
 **dataUseLimitationModifiers** | **Array<&#39;COL&#39; &#124; &#39;GSO&#39; &#124; &#39;IRB&#39; &#124; &#39;MDS&#39; &#124; &#39;NPU&#39; &#124; &#39;PUB&#39;>** | Filter by data_use_limitation_modifiers | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **samples** | **Array&lt;string&gt;** | Filter by samples | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **urls** | **Array&lt;string&gt;** | Filter by urls | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**InstitutionalCertificateResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **labs**
> LabResults labs()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiLabsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by awards.@id (optional)
  awardsId: [
    "awards.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by awards.component (optional)
  awardsComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by awards.name (optional)
  awardsName: [
    "G",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by institute_label (optional)
  instituteLabel: [
    "",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "p",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by pi (optional)
  pi: [
    "pi_example",
  ],
  // Array<'current' | 'deleted' | 'disabled'> | Filter by status (optional)
  status: [
    "current",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    "title_example",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.labs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardsId** | **Array&lt;string&gt;** | Filter by awards.@id | (optional) defaults to undefined
 **awardsComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by awards.component | (optional) defaults to undefined
 **awardsName** | **Array&lt;string&gt;** | Filter by awards.name | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **instituteLabel** | **Array&lt;string&gt;** | Filter by institute_label | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **pi** | **Array&lt;string&gt;** | Filter by pi | (optional) defaults to undefined
 **status** | **Array<&#39;current&#39; &#124; &#39;deleted&#39; &#124; &#39;disabled&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **title** | **Array&lt;string&gt;** | Filter by title | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**LabResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **matrixFiles**
> MatrixFileResults matrixFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiMatrixFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_summary (optional)
  contentSummary: [
    "content_summary_example",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'> | Filter by dimension1 (optional)
  dimension1: [
    "cell",
  ],
  // Array<'cell' | 'fragment' | 'gene' | 'time' | 'treatment' | 'variant' | 'genomic position'> | Filter by dimension2 (optional)
  dimension2: [
    "cell",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'h5ad' | 'hdf5' | 'mtx' | 'tar' | 'hic'> | Filter by file_format (optional)
  fileFormat: [
    "h5ad",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by reference_files (optional)
  referenceFiles: [
    "reference_files_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.matrixFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentSummary** | **Array&lt;string&gt;** | Filter by content_summary | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **dimension1** | **Array<&#39;cell&#39; &#124; &#39;fragment&#39; &#124; &#39;gene&#39; &#124; &#39;time&#39; &#124; &#39;treatment&#39; &#124; &#39;variant&#39; &#124; &#39;genomic position&#39;>** | Filter by dimension1 | (optional) defaults to undefined
 **dimension2** | **Array<&#39;cell&#39; &#124; &#39;fragment&#39; &#124; &#39;gene&#39; &#124; &#39;time&#39; &#124; &#39;treatment&#39; &#124; &#39;variant&#39; &#124; &#39;genomic position&#39;>** | Filter by dimension2 | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;h5ad&#39; &#124; &#39;hdf5&#39; &#124; &#39;mtx&#39; &#124; &#39;tar&#39; &#124; &#39;hic&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **referenceFiles** | **Array&lt;string&gt;** | Filter by reference_files | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**MatrixFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **measurementSets**
> MeasurementSetResults measurementSets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiMeasurementSetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by assay_term.@id (optional)
  assayTermId: [
    "assay_term.@id_example",
  ],
  // Array<string> | Filter by assay_term.term_name (optional)
  assayTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by auxiliary_sets.@id (optional)
  auxiliarySetsId: [
    "auxiliary_sets.@id_example",
  ],
  // Array<string> | Filter by auxiliary_sets.accession (optional)
  auxiliarySetsAccession: [
    "auxiliary_sets.accession_example",
  ],
  // Array<string> | Filter by auxiliary_sets.aliases (optional)
  auxiliarySetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'cell hashing' | 'cell sorting' | 'circularized RNA barcode detection' | 'gRNA sequencing' | 'oligo-conjugated lipids' | 'quantification DNA barcode sequencing' | 'variant sequencing'> | Filter by auxiliary_sets.file_set_type (optional)
  auxiliarySetsFileSetType: [
    "cell hashing",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.contact_pi.@id (optional)
  awardContactPiId: [
    "award.contact_pi.@id_example",
  ],
  // Array<string> | Filter by award.contact_pi.title (optional)
  awardContactPiTitle: [
    "award.contact_pi.title_example",
  ],
  // Array<string> | Filter by award.title (optional)
  awardTitle: [
    "k",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_file_sets.@id (optional)
  controlFileSetsId: [
    "control_file_sets.@id_example",
  ],
  // Array<string> | Filter by control_file_sets.accession (optional)
  controlFileSetsAccession: [
    "control_file_sets.accession_example",
  ],
  // Array<string> | Filter by control_file_sets.aliases (optional)
  controlFileSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "GEO:GSE4",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors.@id (optional)
  donorsId: [
    "donors.@id_example",
  ],
  // Array<string> | Filter by donors.accession (optional)
  donorsAccession: [
    "donors.accession_example",
  ],
  // Array<string> | Filter by donors.aliases (optional)
  donorsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by donors.sex (optional)
  donorsSex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by donors.status (optional)
  donorsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by donors.taxa (optional)
  donorsTaxa: [
    "donors.taxa_example",
  ],
  // Array<string> | Filter by external_image_url (optional)
  externalImageUrl: [
    "https://cellpainting-gallery.s3.amazonaws.comk",
  ],
  // Array<'experimental data'> | Filter by file_set_type (optional)
  fileSetType: [
    "experimental data",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.creation_timestamp (optional)
  filesCreationTimestamp: [
    "files.creation_timestamp_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<number> | Filter by files.file_size (optional)
  filesFileSize: [
    0,
  ],
  // Array<string> | Filter by files.href (optional)
  filesHref: [
    "files.href_example",
  ],
  // Array<string> | Filter by files.s3_uri (optional)
  filesS3Uri: [
    "files.s3_uri_example",
  ],
  // Array<string> | Filter by files.sequencing_platform.@id (optional)
  filesSequencingPlatformId: [
    "files.sequencing_platform.@id_example",
  ],
  // Array<string> | Filter by files.sequencing_platform.term_name (optional)
  filesSequencingPlatformTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by files.submitted_file_name (optional)
  filesSubmittedFileName: [
    "files.submitted_file_name_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by library_construction_platform.@id (optional)
  libraryConstructionPlatformId: [
    "library_construction_platform.@id_example",
  ],
  // Array<string> | Filter by library_construction_platform.term_name (optional)
  libraryConstructionPlatformTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<number> | Filter by multiome_size (optional)
  multiomeSize: [
    2,
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<'10x multiome' | '10x multiome with MULTI-seq' | 'AAV-MPRA' | 'ATAC-seq' | 'CERES-seq' | 'Cell painting' | 'CRISPR FlowFISH' | 'DOGMA-seq' | 'Histone ChIP-seq' | 'Hi-C' | 'lentiMPRA' | 'MERFISH' | 'MIAA' | 'mN2H' | 'MPRA' | 'MPRA (scQer)' | 'MULTI-seq' | 'Parse SPLiT-seq' | 'Perturb-seq' | 'RNA-seq' | 'SGE' | 'scATAC-seq' | 'scNT-seq' | 'scNT-seq2' | 'scRNA-seq' | 'semi-qY2H' | 'SHARE-seq' | 'smFISH' | 'snATAC-seq' | 'snmC-Seq2' | 'snMCT-seq' | 'snM3C-seq' | 'snRNA-seq' | 'SUPERSTARR' | 'TAP-seq' | 'TF ChIP-seq' | 'VAMP-seq' | 'Variant FlowFISH' | 'Variant painting' | 'Y2H' | 'yN2H'> | Filter by preferred_assay_title (optional)
  preferredAssayTitle: [
    "10x multiome",
  ],
  // Array<string> | Filter by protocols (optional)
  protocols: [
    "https://www.protocols.io/k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by related_multiome_datasets.@id (optional)
  relatedMultiomeDatasetsId: [
    "related_multiome_datasets.@id_example",
  ],
  // Array<string> | Filter by related_multiome_datasets.accession (optional)
  relatedMultiomeDatasetsAccession: [
    "related_multiome_datasets.accession_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by samples.@id (optional)
  samplesId: [
    "samples.@id_example",
  ],
  // Array<string> | Filter by samples.accession (optional)
  samplesAccession: [
    "samples.accession_example",
  ],
  // Array<string> | Filter by samples.aliases (optional)
  samplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments.@id (optional)
  samplesCellFateChangeTreatmentsId: [
    "samples.cell_fate_change_treatments.@id_example",
  ],
  // Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'> | Filter by samples.cell_fate_change_treatments.purpose (optional)
  samplesCellFateChangeTreatmentsPurpose: [
    "activation",
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments.summary (optional)
  samplesCellFateChangeTreatmentsSummary: [
    "samples.cell_fate_change_treatments.summary_example",
  ],
  // Array<'chemical' | 'protein' | 'environmental'> | Filter by samples.cell_fate_change_treatments.treatment_type (optional)
  samplesCellFateChangeTreatmentsTreatmentType: [
    "chemical",
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by samples.classifications (optional)
  samplesClassifications: [
    "organoid",
  ],
  // Array<string> | Filter by samples.construct_library_sets.@id (optional)
  samplesConstructLibrarySetsId: [
    "samples.construct_library_sets.@id_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.accession (optional)
  samplesConstructLibrarySetsAccession: [
    "samples.construct_library_sets.accession_example",
  ],
  // Array<'guide library' | 'reporter library' | 'expression vector library' | 'editing template library'> | Filter by samples.construct_library_sets.file_set_type (optional)
  samplesConstructLibrarySetsFileSetType: [
    "guide library",
  ],
  // Array<string> | Filter by samples.construct_library_sets.small_scale_gene_list.@id (optional)
  samplesConstructLibrarySetsSmallScaleGeneListId: [
    "samples.construct_library_sets.small_scale_gene_list.@id_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.small_scale_gene_list.geneid (optional)
  samplesConstructLibrarySetsSmallScaleGeneListGeneid: [
    "ENSEIOTGSWWMEJTCMOSLLNYULG62255008507",
  ],
  // Array<string> | Filter by samples.construct_library_sets.small_scale_gene_list.name (optional)
  samplesConstructLibrarySetsSmallScaleGeneListName: [
    "samples.construct_library_sets.small_scale_gene_list.name_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.small_scale_gene_list.summary (optional)
  samplesConstructLibrarySetsSmallScaleGeneListSummary: [
    "samples.construct_library_sets.small_scale_gene_list.summary_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.small_scale_gene_list.symbol (optional)
  samplesConstructLibrarySetsSmallScaleGeneListSymbol: [
    "samples.construct_library_sets.small_scale_gene_list.symbol_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.summary (optional)
  samplesConstructLibrarySetsSummary: [
    "samples.construct_library_sets.summary_example",
  ],
  // Array<string> | Filter by samples.disease_terms.@id (optional)
  samplesDiseaseTermsId: [
    "samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by samples.disease_terms.term_name (optional)
  samplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by samples.modifications.@id (optional)
  samplesModificationsId: [
    "samples.modifications.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.@id (optional)
  samplesSampleTermsId: [
    "samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.aliases (optional)
  samplesSampleTermsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by samples.sample_terms.status (optional)
  samplesSampleTermsStatus: [
    "archived",
  ],
  // Array<string> | Filter by samples.sample_terms.summary (optional)
  samplesSampleTermsSummary: [
    "samples.sample_terms.summary_example",
  ],
  // Array<string> | Filter by samples.sample_terms.term_name (optional)
  samplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by samples.status (optional)
  samplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by samples.summary (optional)
  samplesSummary: [
    "samples.summary_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.@id (optional)
  samplesTargetedSampleTermId: [
    "samples.targeted_sample_term.@id_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.term_name (optional)
  samplesTargetedSampleTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by samples.taxa (optional)
  samplesTaxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by samples.treatments.@id (optional)
  samplesTreatmentsId: [
    "samples.treatments.@id_example",
  ],
  // Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'> | Filter by samples.treatments.purpose (optional)
  samplesTreatmentsPurpose: [
    "activation",
  ],
  // Array<string> | Filter by samples.treatments.summary (optional)
  samplesTreatmentsSummary: [
    "samples.treatments.summary_example",
  ],
  // Array<'chemical' | 'protein' | 'environmental'> | Filter by samples.treatments.treatment_type (optional)
  samplesTreatmentsTreatmentType: [
    "chemical",
  ],
  // Array<'direct RNA' | 'exome capture' | 'mRNA enriched' | 'rRNA depleted' | 'polyA depleted' | 'polyA enriched'> | Filter by sequencing_library_types (optional)
  sequencingLibraryTypes: [
    "direct RNA",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by targeted_genes.@id (optional)
  targetedGenesId: [
    "targeted_genes.@id_example",
  ],
  // Array<string> | Filter by targeted_genes.geneid (optional)
  targetedGenesGeneid: [
    "ENSEIOTGSWWMEJTCMOSLLNYULG62255008507",
  ],
  // Array<string> | Filter by targeted_genes.name (optional)
  targetedGenesName: [
    "targeted_genes.name_example",
  ],
  // Array<string> | Filter by targeted_genes.symbol (optional)
  targetedGenesSymbol: [
    "targeted_genes.symbol_example",
  ],
  // Array<string> | Filter by targeted_genes.synonyms (optional)
  targetedGenesSynonyms: [
    "targeted_genes.synonyms_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.measurementSets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **assayTermId** | **Array&lt;string&gt;** | Filter by assay_term.@id | (optional) defaults to undefined
 **assayTermTermName** | **Array&lt;string&gt;** | Filter by assay_term.term_name | (optional) defaults to undefined
 **auxiliarySetsId** | **Array&lt;string&gt;** | Filter by auxiliary_sets.@id | (optional) defaults to undefined
 **auxiliarySetsAccession** | **Array&lt;string&gt;** | Filter by auxiliary_sets.accession | (optional) defaults to undefined
 **auxiliarySetsAliases** | **Array&lt;string&gt;** | Filter by auxiliary_sets.aliases | (optional) defaults to undefined
 **auxiliarySetsFileSetType** | **Array<&#39;cell hashing&#39; &#124; &#39;cell sorting&#39; &#124; &#39;circularized RNA barcode detection&#39; &#124; &#39;gRNA sequencing&#39; &#124; &#39;oligo-conjugated lipids&#39; &#124; &#39;quantification DNA barcode sequencing&#39; &#124; &#39;variant sequencing&#39;>** | Filter by auxiliary_sets.file_set_type | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardContactPiId** | **Array&lt;string&gt;** | Filter by award.contact_pi.@id | (optional) defaults to undefined
 **awardContactPiTitle** | **Array&lt;string&gt;** | Filter by award.contact_pi.title | (optional) defaults to undefined
 **awardTitle** | **Array&lt;string&gt;** | Filter by award.title | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlFileSetsId** | **Array&lt;string&gt;** | Filter by control_file_sets.@id | (optional) defaults to undefined
 **controlFileSetsAccession** | **Array&lt;string&gt;** | Filter by control_file_sets.accession | (optional) defaults to undefined
 **controlFileSetsAliases** | **Array&lt;string&gt;** | Filter by control_file_sets.aliases | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donorsId** | **Array&lt;string&gt;** | Filter by donors.@id | (optional) defaults to undefined
 **donorsAccession** | **Array&lt;string&gt;** | Filter by donors.accession | (optional) defaults to undefined
 **donorsAliases** | **Array&lt;string&gt;** | Filter by donors.aliases | (optional) defaults to undefined
 **donorsSex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by donors.sex | (optional) defaults to undefined
 **donorsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by donors.status | (optional) defaults to undefined
 **donorsTaxa** | **Array&lt;string&gt;** | Filter by donors.taxa | (optional) defaults to undefined
 **externalImageUrl** | **Array&lt;string&gt;** | Filter by external_image_url | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;experimental data&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesCreationTimestamp** | **Array&lt;string&gt;** | Filter by files.creation_timestamp | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesFileSize** | **Array&lt;number&gt;** | Filter by files.file_size | (optional) defaults to undefined
 **filesHref** | **Array&lt;string&gt;** | Filter by files.href | (optional) defaults to undefined
 **filesS3Uri** | **Array&lt;string&gt;** | Filter by files.s3_uri | (optional) defaults to undefined
 **filesSequencingPlatformId** | **Array&lt;string&gt;** | Filter by files.sequencing_platform.@id | (optional) defaults to undefined
 **filesSequencingPlatformTermName** | **Array&lt;string&gt;** | Filter by files.sequencing_platform.term_name | (optional) defaults to undefined
 **filesSubmittedFileName** | **Array&lt;string&gt;** | Filter by files.submitted_file_name | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **libraryConstructionPlatformId** | **Array&lt;string&gt;** | Filter by library_construction_platform.@id | (optional) defaults to undefined
 **libraryConstructionPlatformTermName** | **Array&lt;string&gt;** | Filter by library_construction_platform.term_name | (optional) defaults to undefined
 **multiomeSize** | **Array&lt;number&gt;** | Filter by multiome_size | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **preferredAssayTitle** | **Array<&#39;10x multiome&#39; &#124; &#39;10x multiome with MULTI-seq&#39; &#124; &#39;AAV-MPRA&#39; &#124; &#39;ATAC-seq&#39; &#124; &#39;CERES-seq&#39; &#124; &#39;Cell painting&#39; &#124; &#39;CRISPR FlowFISH&#39; &#124; &#39;DOGMA-seq&#39; &#124; &#39;Histone ChIP-seq&#39; &#124; &#39;Hi-C&#39; &#124; &#39;lentiMPRA&#39; &#124; &#39;MERFISH&#39; &#124; &#39;MIAA&#39; &#124; &#39;mN2H&#39; &#124; &#39;MPRA&#39; &#124; &#39;MPRA (scQer)&#39; &#124; &#39;MULTI-seq&#39; &#124; &#39;Parse SPLiT-seq&#39; &#124; &#39;Perturb-seq&#39; &#124; &#39;RNA-seq&#39; &#124; &#39;SGE&#39; &#124; &#39;scATAC-seq&#39; &#124; &#39;scNT-seq&#39; &#124; &#39;scNT-seq2&#39; &#124; &#39;scRNA-seq&#39; &#124; &#39;semi-qY2H&#39; &#124; &#39;SHARE-seq&#39; &#124; &#39;smFISH&#39; &#124; &#39;snATAC-seq&#39; &#124; &#39;snmC-Seq2&#39; &#124; &#39;snMCT-seq&#39; &#124; &#39;snM3C-seq&#39; &#124; &#39;snRNA-seq&#39; &#124; &#39;SUPERSTARR&#39; &#124; &#39;TAP-seq&#39; &#124; &#39;TF ChIP-seq&#39; &#124; &#39;VAMP-seq&#39; &#124; &#39;Variant FlowFISH&#39; &#124; &#39;Variant painting&#39; &#124; &#39;Y2H&#39; &#124; &#39;yN2H&#39;>** | Filter by preferred_assay_title | (optional) defaults to undefined
 **protocols** | **Array&lt;string&gt;** | Filter by protocols | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **relatedMultiomeDatasetsId** | **Array&lt;string&gt;** | Filter by related_multiome_datasets.@id | (optional) defaults to undefined
 **relatedMultiomeDatasetsAccession** | **Array&lt;string&gt;** | Filter by related_multiome_datasets.accession | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **samplesId** | **Array&lt;string&gt;** | Filter by samples.@id | (optional) defaults to undefined
 **samplesAccession** | **Array&lt;string&gt;** | Filter by samples.accession | (optional) defaults to undefined
 **samplesAliases** | **Array&lt;string&gt;** | Filter by samples.aliases | (optional) defaults to undefined
 **samplesCellFateChangeTreatmentsId** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments.@id | (optional) defaults to undefined
 **samplesCellFateChangeTreatmentsPurpose** | **Array<&#39;activation&#39; &#124; &#39;agonist&#39; &#124; &#39;antagonist&#39; &#124; &#39;control&#39; &#124; &#39;differentiation&#39; &#124; &#39;de-differentiation&#39; &#124; &#39;perturbation&#39; &#124; &#39;selection&#39; &#124; &#39;stimulation&#39;>** | Filter by samples.cell_fate_change_treatments.purpose | (optional) defaults to undefined
 **samplesCellFateChangeTreatmentsSummary** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments.summary | (optional) defaults to undefined
 **samplesCellFateChangeTreatmentsTreatmentType** | **Array<&#39;chemical&#39; &#124; &#39;protein&#39; &#124; &#39;environmental&#39;>** | Filter by samples.cell_fate_change_treatments.treatment_type | (optional) defaults to undefined
 **samplesClassifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by samples.classifications | (optional) defaults to undefined
 **samplesConstructLibrarySetsId** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.@id | (optional) defaults to undefined
 **samplesConstructLibrarySetsAccession** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.accession | (optional) defaults to undefined
 **samplesConstructLibrarySetsFileSetType** | **Array<&#39;guide library&#39; &#124; &#39;reporter library&#39; &#124; &#39;expression vector library&#39; &#124; &#39;editing template library&#39;>** | Filter by samples.construct_library_sets.file_set_type | (optional) defaults to undefined
 **samplesConstructLibrarySetsSmallScaleGeneListId** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.small_scale_gene_list.@id | (optional) defaults to undefined
 **samplesConstructLibrarySetsSmallScaleGeneListGeneid** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.small_scale_gene_list.geneid | (optional) defaults to undefined
 **samplesConstructLibrarySetsSmallScaleGeneListName** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.small_scale_gene_list.name | (optional) defaults to undefined
 **samplesConstructLibrarySetsSmallScaleGeneListSummary** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.small_scale_gene_list.summary | (optional) defaults to undefined
 **samplesConstructLibrarySetsSmallScaleGeneListSymbol** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.small_scale_gene_list.symbol | (optional) defaults to undefined
 **samplesConstructLibrarySetsSummary** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.summary | (optional) defaults to undefined
 **samplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by samples.disease_terms.@id | (optional) defaults to undefined
 **samplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by samples.disease_terms.term_name | (optional) defaults to undefined
 **samplesModificationsId** | **Array&lt;string&gt;** | Filter by samples.modifications.@id | (optional) defaults to undefined
 **samplesSampleTermsId** | **Array&lt;string&gt;** | Filter by samples.sample_terms.@id | (optional) defaults to undefined
 **samplesSampleTermsAliases** | **Array&lt;string&gt;** | Filter by samples.sample_terms.aliases | (optional) defaults to undefined
 **samplesSampleTermsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by samples.sample_terms.status | (optional) defaults to undefined
 **samplesSampleTermsSummary** | **Array&lt;string&gt;** | Filter by samples.sample_terms.summary | (optional) defaults to undefined
 **samplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by samples.sample_terms.term_name | (optional) defaults to undefined
 **samplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by samples.status | (optional) defaults to undefined
 **samplesSummary** | **Array&lt;string&gt;** | Filter by samples.summary | (optional) defaults to undefined
 **samplesTargetedSampleTermId** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.@id | (optional) defaults to undefined
 **samplesTargetedSampleTermTermName** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.term_name | (optional) defaults to undefined
 **samplesTaxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by samples.taxa | (optional) defaults to undefined
 **samplesTreatmentsId** | **Array&lt;string&gt;** | Filter by samples.treatments.@id | (optional) defaults to undefined
 **samplesTreatmentsPurpose** | **Array<&#39;activation&#39; &#124; &#39;agonist&#39; &#124; &#39;antagonist&#39; &#124; &#39;control&#39; &#124; &#39;differentiation&#39; &#124; &#39;de-differentiation&#39; &#124; &#39;perturbation&#39; &#124; &#39;selection&#39; &#124; &#39;stimulation&#39;>** | Filter by samples.treatments.purpose | (optional) defaults to undefined
 **samplesTreatmentsSummary** | **Array&lt;string&gt;** | Filter by samples.treatments.summary | (optional) defaults to undefined
 **samplesTreatmentsTreatmentType** | **Array<&#39;chemical&#39; &#124; &#39;protein&#39; &#124; &#39;environmental&#39;>** | Filter by samples.treatments.treatment_type | (optional) defaults to undefined
 **sequencingLibraryTypes** | **Array<&#39;direct RNA&#39; &#124; &#39;exome capture&#39; &#124; &#39;mRNA enriched&#39; &#124; &#39;rRNA depleted&#39; &#124; &#39;polyA depleted&#39; &#124; &#39;polyA enriched&#39;>** | Filter by sequencing_library_types | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **targetedGenesId** | **Array&lt;string&gt;** | Filter by targeted_genes.@id | (optional) defaults to undefined
 **targetedGenesGeneid** | **Array&lt;string&gt;** | Filter by targeted_genes.geneid | (optional) defaults to undefined
 **targetedGenesName** | **Array&lt;string&gt;** | Filter by targeted_genes.name | (optional) defaults to undefined
 **targetedGenesSymbol** | **Array&lt;string&gt;** | Filter by targeted_genes.symbol | (optional) defaults to undefined
 **targetedGenesSynonyms** | **Array&lt;string&gt;** | Filter by targeted_genes.synonyms | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**MeasurementSetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **modelFiles**
> ModelFileResults modelFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiModelFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by anvil_url (optional)
  anvilUrl: [
    "anvil_url_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<boolean> | Filter by controlled_access (optional)
  controlledAccess: [
    true,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'hdf5' | 'json' | 'tar' | 'tsv'> | Filter by file_format (optional)
  fileFormat: [
    "hdf5",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.modelFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **anvilUrl** | **Array&lt;string&gt;** | Filter by anvil_url | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **controlledAccess** | **Array&lt;boolean&gt;** | Filter by controlled_access | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;hdf5&#39; &#124; &#39;json&#39; &#124; &#39;tar&#39; &#124; &#39;tsv&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**ModelFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **modelSets**
> ModelSetResults modelSets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiModelSetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by assessed_genes (optional)
  assessedGenes: [
    "assessed_genes_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.contact_pi.@id (optional)
  awardContactPiId: [
    "award.contact_pi.@id_example",
  ],
  // Array<string> | Filter by award.contact_pi.title (optional)
  awardContactPiTitle: [
    "award.contact_pi.title_example",
  ],
  // Array<string> | Filter by award.title (optional)
  awardTitle: [
    "k",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "GEO:GSE4",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors.@id (optional)
  donorsId: [
    "donors.@id_example",
  ],
  // Array<string> | Filter by donors.accession (optional)
  donorsAccession: [
    "donors.accession_example",
  ],
  // Array<string> | Filter by donors.aliases (optional)
  donorsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by donors.sex (optional)
  donorsSex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by donors.status (optional)
  donorsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by donors.taxa (optional)
  donorsTaxa: [
    "donors.taxa_example",
  ],
  // Array<'neural network' | 'random forest' | 'decision tree' | 'support vector machine' | 'variant binding effect'> | Filter by file_set_type (optional)
  fileSetType: [
    "neural network",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.creation_timestamp (optional)
  filesCreationTimestamp: [
    "files.creation_timestamp_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<number> | Filter by files.file_size (optional)
  filesFileSize: [
    0,
  ],
  // Array<string> | Filter by files.href (optional)
  filesHref: [
    "files.href_example",
  ],
  // Array<string> | Filter by files.s3_uri (optional)
  filesS3Uri: [
    "files.s3_uri_example",
  ],
  // Array<string> | Filter by files.sequencing_platform (optional)
  filesSequencingPlatform: [
    "files.sequencing_platform_example",
  ],
  // Array<string> | Filter by files.submitted_file_name (optional)
  filesSubmittedFileName: [
    "files.submitted_file_name_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by input_file_sets.@id (optional)
  inputFileSetsId: [
    "input_file_sets.@id_example",
  ],
  // Array<string> | Filter by input_file_sets.accession (optional)
  inputFileSetsAccession: [
    "input_file_sets.accession_example",
  ],
  // Array<string> | Filter by input_file_sets.aliases (optional)
  inputFileSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by model_name (optional)
  modelName: [
    "model_name_example",
  ],
  // Array<string> | Filter by model_version (optional)
  modelVersion: [
    "v/jUR,888001528021798096225500850762068629339333975650685139102691291732729478601482026509127275504.757701929816286488291663322877052191911664783785638755659868361524878442.528468720999697682157936442848967131",
  ],
  // Array<string> | Filter by model_zoo_location (optional)
  modelZooLocation: [
    "https://kipoi.org/models/%?x!u",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<'coding variants' | 'non-coding variants' | 'all variants' | 'regulatory elements' | 'genes'> | Filter by prediction_objects (optional)
  predictionObjects: [
    "coding variants",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by samples.@id (optional)
  samplesId: [
    "samples.@id_example",
  ],
  // Array<string> | Filter by samples.accession (optional)
  samplesAccession: [
    "samples.accession_example",
  ],
  // Array<string> | Filter by samples.aliases (optional)
  samplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments (optional)
  samplesCellFateChangeTreatments: [
    "samples.cell_fate_change_treatments_example",
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by samples.classifications (optional)
  samplesClassifications: [
    "organoid",
  ],
  // Array<string> | Filter by samples.construct_library_sets (optional)
  samplesConstructLibrarySets: [
    "samples.construct_library_sets_example",
  ],
  // Array<string> | Filter by samples.disease_terms.@id (optional)
  samplesDiseaseTermsId: [
    "samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by samples.disease_terms.term_name (optional)
  samplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by samples.modifications (optional)
  samplesModifications: [
    "samples.modifications_example",
  ],
  // Array<string> | Filter by samples.sample_terms.@id (optional)
  samplesSampleTermsId: [
    "samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.aliases (optional)
  samplesSampleTermsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by samples.sample_terms.status (optional)
  samplesSampleTermsStatus: [
    "archived",
  ],
  // Array<string> | Filter by samples.sample_terms.summary (optional)
  samplesSampleTermsSummary: [
    "samples.sample_terms.summary_example",
  ],
  // Array<string> | Filter by samples.sample_terms.term_name (optional)
  samplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by samples.status (optional)
  samplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by samples.summary (optional)
  samplesSummary: [
    "samples.summary_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.@id (optional)
  samplesTargetedSampleTermId: [
    "samples.targeted_sample_term.@id_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.term_name (optional)
  samplesTargetedSampleTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by samples.taxa (optional)
  samplesTaxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by samples.treatments (optional)
  samplesTreatments: [
    "samples.treatments_example",
  ],
  // Array<string> | Filter by software_version (optional)
  softwareVersion: [
    "software_version_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.modelSets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **assessedGenes** | **Array&lt;string&gt;** | Filter by assessed_genes | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardContactPiId** | **Array&lt;string&gt;** | Filter by award.contact_pi.@id | (optional) defaults to undefined
 **awardContactPiTitle** | **Array&lt;string&gt;** | Filter by award.contact_pi.title | (optional) defaults to undefined
 **awardTitle** | **Array&lt;string&gt;** | Filter by award.title | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donorsId** | **Array&lt;string&gt;** | Filter by donors.@id | (optional) defaults to undefined
 **donorsAccession** | **Array&lt;string&gt;** | Filter by donors.accession | (optional) defaults to undefined
 **donorsAliases** | **Array&lt;string&gt;** | Filter by donors.aliases | (optional) defaults to undefined
 **donorsSex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by donors.sex | (optional) defaults to undefined
 **donorsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by donors.status | (optional) defaults to undefined
 **donorsTaxa** | **Array&lt;string&gt;** | Filter by donors.taxa | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;neural network&#39; &#124; &#39;random forest&#39; &#124; &#39;decision tree&#39; &#124; &#39;support vector machine&#39; &#124; &#39;variant binding effect&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesCreationTimestamp** | **Array&lt;string&gt;** | Filter by files.creation_timestamp | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesFileSize** | **Array&lt;number&gt;** | Filter by files.file_size | (optional) defaults to undefined
 **filesHref** | **Array&lt;string&gt;** | Filter by files.href | (optional) defaults to undefined
 **filesS3Uri** | **Array&lt;string&gt;** | Filter by files.s3_uri | (optional) defaults to undefined
 **filesSequencingPlatform** | **Array&lt;string&gt;** | Filter by files.sequencing_platform | (optional) defaults to undefined
 **filesSubmittedFileName** | **Array&lt;string&gt;** | Filter by files.submitted_file_name | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **inputFileSetsId** | **Array&lt;string&gt;** | Filter by input_file_sets.@id | (optional) defaults to undefined
 **inputFileSetsAccession** | **Array&lt;string&gt;** | Filter by input_file_sets.accession | (optional) defaults to undefined
 **inputFileSetsAliases** | **Array&lt;string&gt;** | Filter by input_file_sets.aliases | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **modelName** | **Array&lt;string&gt;** | Filter by model_name | (optional) defaults to undefined
 **modelVersion** | **Array&lt;string&gt;** | Filter by model_version | (optional) defaults to undefined
 **modelZooLocation** | **Array&lt;string&gt;** | Filter by model_zoo_location | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **predictionObjects** | **Array<&#39;coding variants&#39; &#124; &#39;non-coding variants&#39; &#124; &#39;all variants&#39; &#124; &#39;regulatory elements&#39; &#124; &#39;genes&#39;>** | Filter by prediction_objects | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **samplesId** | **Array&lt;string&gt;** | Filter by samples.@id | (optional) defaults to undefined
 **samplesAccession** | **Array&lt;string&gt;** | Filter by samples.accession | (optional) defaults to undefined
 **samplesAliases** | **Array&lt;string&gt;** | Filter by samples.aliases | (optional) defaults to undefined
 **samplesCellFateChangeTreatments** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments | (optional) defaults to undefined
 **samplesClassifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by samples.classifications | (optional) defaults to undefined
 **samplesConstructLibrarySets** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets | (optional) defaults to undefined
 **samplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by samples.disease_terms.@id | (optional) defaults to undefined
 **samplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by samples.disease_terms.term_name | (optional) defaults to undefined
 **samplesModifications** | **Array&lt;string&gt;** | Filter by samples.modifications | (optional) defaults to undefined
 **samplesSampleTermsId** | **Array&lt;string&gt;** | Filter by samples.sample_terms.@id | (optional) defaults to undefined
 **samplesSampleTermsAliases** | **Array&lt;string&gt;** | Filter by samples.sample_terms.aliases | (optional) defaults to undefined
 **samplesSampleTermsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by samples.sample_terms.status | (optional) defaults to undefined
 **samplesSampleTermsSummary** | **Array&lt;string&gt;** | Filter by samples.sample_terms.summary | (optional) defaults to undefined
 **samplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by samples.sample_terms.term_name | (optional) defaults to undefined
 **samplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by samples.status | (optional) defaults to undefined
 **samplesSummary** | **Array&lt;string&gt;** | Filter by samples.summary | (optional) defaults to undefined
 **samplesTargetedSampleTermId** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.@id | (optional) defaults to undefined
 **samplesTargetedSampleTermTermName** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.term_name | (optional) defaults to undefined
 **samplesTaxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by samples.taxa | (optional) defaults to undefined
 **samplesTreatments** | **Array&lt;string&gt;** | Filter by samples.treatments | (optional) defaults to undefined
 **softwareVersion** | **Array&lt;string&gt;** | Filter by software_version | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**ModelSetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **multiplexedSamples**
> MultiplexedSampleResults multiplexedSamples()

Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiMultiplexedSamplesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by barcode_sample_map (optional)
  barcodeSampleMap: [
    "barcode_sample_map_example",
  ],
  // Array<string> | Filter by biomarkers (optional)
  biomarkers: [
    "biomarkers_example",
  ],
  // Array<string> | Filter by cellular_sub_pool (optional)
  cellularSubPool: [
    `A	PSSEW9gFbDSx8mxCScjDL(CXm8G5
8cfa8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-L
wL3CTLxzWhej1zFvhjFRboDzLsp6gf0OAK-kCSql(uFEEYdpfNsNsac1)SIo6lS-8RLNCj.vwl1j7t1vuHb	KU.InXclZXDvTILOlNXObqOhIxyXMA.LlW(Yib4.A5LmHAyFXUBTqfd(i3I
HO3NkWS6xtW2w5xnZwtXEesNYvTjpOQf.NcVPpV9BD04SJp5J46_3dkkS8NUjdcuy-m-_tfX3utne7fNJhTEEe
UBwaE8H52.b.mwvBdD-3IxHaS__(IgtBQhxiSednf7s3up4IuPu9pHas7RMR69K_R1SH.IDdd2iwO4O
DNwoIBii58AlzvjXkzL1cFtU(wGJsBpEWN4X007jy4ne8B9viHCfRSt.zM)AzqND3VbSpzu2rt3e5m6oyHHFRQa)Q_aoGdVD(L5EG(9z2JfhY(Fl6D--BFq9uvJ)z1.gmLbf9eAlVc3GFPfzIBbiFI0WqfuzQxA20tAzyVT.SCqdFXiTxklrT0n9Ju8nF5H1Xl45CTMi9yNVBoMWen(Yz(PfKgRQB(8t-DSgxDf5tssxRltnj0J7BUY8hLcGaAEm7R s(eP5SikNzvvGcEMzAva2(Tu3L4c5avQxR(XXYqFxVO-l.-ux9CWV6X3Vf8HpUDuxM V-2RsXzBpac-BwWuqaL6xt5VAr.nNYs8k8XUUTDwo0v.V.LbXyer5yR6rmwayWFaFu	AxAnVYxdkoZwLN(1Su-5YxiA..BXKnjtWjQv9CVA5r4bWdS4lm)IqDEH2wPKRRON
LL66f3bvB45gABxGG4cumOhUPoyiBvyEEGncakfEuYH3dxfN_BsVNj6sxxi56dDz.7cr7IixoI02k7uqhs1f5RRCQ_qoss7VBNec)D4oYkNz	f5lpC5-CasX2FJdtRCcC(5MvL-NZXkUml6eucdU94qxl.3L(lkU.7(lM4h(K nA4KOWnh4E)2CzvswM7)Evgpp-fMCbKcrYpAs_4V(fyBlEA7
dbTOTAa5U5y9.iob6cXxY7OnDddCo-Nz)BiQy.nkvhyI.Q7KRN_5vWmQQ.ZW3LZlLBPNr0Mjh1D8LLb0VnGd0fKz S)NfCdFJzT_l(hxwOekxQ(ZhpU4VZH5I.e7KcbAp3XhW
.7YqB4bMaJBkMUeU-Rv_8GLP8GcqU0n9hcZKfi_uj)KjfrcwdAasf)E.bvj912vcZWsf3rchvLpSn-9VrP7a8r(OC0RB3LzrKhzZbAVhx-xzK(o).XAfTkYB)inFbQh..c0)ZFSteTJF2vIMs7HbcUDl3gxIn HSEaxqbRaj(9MHdOLxnocPBF_ySwwT8PZ587pcMrlOpivpmtX.UBdGWmCD32JDXCLsZIfKYtQMcEgNCQkDzSPidOOUiPZTQ_GK.RiXQ)6MdiKIHcdnw1gIDvxACrn(_bXO0nT0BtRC9jW R-qIEA9-6cOLJARGmkX0NeIe64sJ9bPmMstkBzRt-1a.QwQ5ihe0DwVLLxanL8CkS-qlZLExxdBys7iu-bG2TK(KrgjCh0Xc.tZ147sk36zHs75uM(xWURvNJSewADuGA)uGSQTn_AmjaP.-9_8Rcwx.5UOn8eyMR3dUxdf9ygTiLSA)TPWaAv2xygDaWvo05E193n1beIeqZz7qRNxQGWq6vvG6zsGL(qMOuGg(ppWj_.Y4	VhdoXJKc6E4lO1VNaWu)UISeMawY_IDQZT.lYZ(.PEUKHy7FMs8GI2zhYVhI_uYQU-e)W6FFc9ITUSp(uVja)p
PLnP8JBPrUjICUC5tv4Mt8j_dli.gACX_rj_yZ.e)x6(URuAUAuEFms47lNT)zmH.FZVTdYzmq2adekYUmXkgB8lQ)inJuuzJ.tcRyHkA1Y6DiOKTtUUjqRAiuocFpH4LWUDa2Cd)dPlRZFp2r
LKl2mfdTjaPE1xNaMvBtqhDijc_wK_LCbWnjOY4l6k(H4L561wdoQZ7_Tw7im0mroVfkOW7)U6aItgWDGRMes8Xqg0F3pr6iH
  ],
  // Array<string> | Filter by classifications (optional)
  classifications: [
    "classifications_example",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by construct_library_sets.@id (optional)
  constructLibrarySetsId: [
    "construct_library_sets.@id_example",
  ],
  // Array<string> | Filter by construct_library_sets.accession (optional)
  constructLibrarySetsAccession: [
    "construct_library_sets.accession_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by date_obtained (optional)
  dateObtained: [
    "date_obtained_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENCODE:ENCBS480TGS",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by disease_terms.@id (optional)
  diseaseTermsId: [
    "disease_terms.@id_example",
  ],
  // Array<string> | Filter by disease_terms.term_name (optional)
  diseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors (optional)
  donors: [
    "donors_example",
  ],
  // Array<string> | Filter by file_sets.@id (optional)
  fileSetsId: [
    "file_sets.@id_example",
  ],
  // Array<string> | Filter by file_sets.accession (optional)
  fileSetsAccession: [
    "file_sets.accession_example",
  ],
  // Array<string> | Filter by file_sets.aliases (optional)
  fileSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by file_sets.assay_term.term_name (optional)
  fileSetsAssayTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by file_sets.lab.title (optional)
  fileSetsLabTitle: [
    "file_sets.lab.title_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by file_sets.status (optional)
  fileSetsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by file_sets.summary (optional)
  fileSetsSummary: [
    "file_sets.summary_example",
  ],
  // Array<string> | Filter by institutional_certificates (optional)
  institutionalCertificates: [
    "institutional_certificates_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by modifications.@id (optional)
  modificationsId: [
    "modifications.@id_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by modifications.status (optional)
  modificationsStatus: [
    "archived",
  ],
  // Array<string> | Filter by modifications.summary (optional)
  modificationsSummary: [
    "modifications.summary_example",
  ],
  // Array<number> | Filter by moi (optional)
  moi: [
    0,
  ],
  // Array<string> | Filter by multiplexed_in.@id (optional)
  multiplexedInId: [
    "multiplexed_in.@id_example",
  ],
  // Array<string> | Filter by multiplexed_in.accession (optional)
  multiplexedInAccession: [
    "multiplexed_in.accession_example",
  ],
  // Array<string> | Filter by multiplexed_samples.@id (optional)
  multiplexedSamplesId: [
    "multiplexed_samples.@id_example",
  ],
  // Array<string> | Filter by multiplexed_samples.accession (optional)
  multiplexedSamplesAccession: [
    "multiplexed_samples.accession_example",
  ],
  // Array<string> | Filter by multiplexed_samples.construct_library_sets (optional)
  multiplexedSamplesConstructLibrarySets: [
    "multiplexed_samples.construct_library_sets_example",
  ],
  // Array<string> | Filter by multiplexed_samples.disease_terms.@id (optional)
  multiplexedSamplesDiseaseTermsId: [
    "multiplexed_samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by multiplexed_samples.disease_terms.term_name (optional)
  multiplexedSamplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by multiplexed_samples.donors.@id (optional)
  multiplexedSamplesDonorsId: [
    "multiplexed_samples.donors.@id_example",
  ],
  // Array<string> | Filter by multiplexed_samples.donors.accession (optional)
  multiplexedSamplesDonorsAccession: [
    "multiplexed_samples.donors.accession_example",
  ],
  // Array<string> | Filter by multiplexed_samples.sample_terms.@id (optional)
  multiplexedSamplesSampleTermsId: [
    "multiplexed_samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by multiplexed_samples.sample_terms.term_name (optional)
  multiplexedSamplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by multiplexed_samples.status (optional)
  multiplexedSamplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by multiplexed_samples.summary (optional)
  multiplexedSamplesSummary: [
    "multiplexed_samples.summary_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'> | Filter by nucleic_acid_delivery (optional)
  nucleicAcidDelivery: [
    "transfection",
  ],
  // Array<string> | Filter by origin_of (optional)
  originOf: [
    "origin_of_example",
  ],
  // Array<string> | Filter by protocols (optional)
  protocols: [
    "https://www.protocols.io/k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by sample_terms.@id (optional)
  sampleTermsId: [
    "sample_terms.@id_example",
  ],
  // Array<string> | Filter by sample_terms.term_name (optional)
  sampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by sorted_fractions (optional)
  sortedFractions: [
    "sorted_fractions_example",
  ],
  // Array<string> | Filter by sorted_from.@id (optional)
  sortedFromId: [
    "sorted_from.@id_example",
  ],
  // Array<string> | Filter by sorted_from.accession (optional)
  sortedFromAccession: [
    "sorted_from.accession_example",
  ],
  // Array<string> | Filter by sorted_from_detail (optional)
  sortedFromDetail: [
    "sorted_from_detail_example",
  ],
  // Array<string> | Filter by sources.@id (optional)
  sourcesId: [
    "sources.@id_example",
  ],
  // Array<number> | Filter by starting_amount (optional)
  startingAmount: [
    3.14,
  ],
  // Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'> | Filter by starting_amount_units (optional)
  startingAmountUnits: [
    "cells",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<number> | Filter by time_post_library_delivery (optional)
  timePostLibraryDelivery: [
    3.14,
  ],
  // Array<'minute' | 'hour' | 'day' | 'week' | 'month'> | Filter by time_post_library_delivery_units (optional)
  timePostLibraryDeliveryUnits: [
    "minute",
  ],
  // Array<string> | Filter by treatments.@id (optional)
  treatmentsId: [
    "treatments.@id_example",
  ],
  // Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'> | Filter by treatments.purpose (optional)
  treatmentsPurpose: [
    "activation",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by treatments.status (optional)
  treatmentsStatus: [
    "archived",
  ],
  // Array<string> | Filter by treatments.summary (optional)
  treatmentsSummary: [
    "treatments.summary_example",
  ],
  // Array<'chemical' | 'protein' | 'environmental'> | Filter by treatments.treatment_type (optional)
  treatmentsTreatmentType: [
    "chemical",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<boolean> | Filter by virtual (optional)
  virtual: [
    true,
  ],
};

apiInstance.multiplexedSamples(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **barcodeSampleMap** | **Array&lt;string&gt;** | Filter by barcode_sample_map | (optional) defaults to undefined
 **biomarkers** | **Array&lt;string&gt;** | Filter by biomarkers | (optional) defaults to undefined
 **cellularSubPool** | **Array&lt;string&gt;** | Filter by cellular_sub_pool | (optional) defaults to undefined
 **classifications** | **Array&lt;string&gt;** | Filter by classifications | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **constructLibrarySetsId** | **Array&lt;string&gt;** | Filter by construct_library_sets.@id | (optional) defaults to undefined
 **constructLibrarySetsAccession** | **Array&lt;string&gt;** | Filter by construct_library_sets.accession | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dateObtained** | **Array&lt;string&gt;** | Filter by date_obtained | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **diseaseTermsId** | **Array&lt;string&gt;** | Filter by disease_terms.@id | (optional) defaults to undefined
 **diseaseTermsTermName** | **Array&lt;string&gt;** | Filter by disease_terms.term_name | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donors** | **Array&lt;string&gt;** | Filter by donors | (optional) defaults to undefined
 **fileSetsId** | **Array&lt;string&gt;** | Filter by file_sets.@id | (optional) defaults to undefined
 **fileSetsAccession** | **Array&lt;string&gt;** | Filter by file_sets.accession | (optional) defaults to undefined
 **fileSetsAliases** | **Array&lt;string&gt;** | Filter by file_sets.aliases | (optional) defaults to undefined
 **fileSetsAssayTermTermName** | **Array&lt;string&gt;** | Filter by file_sets.assay_term.term_name | (optional) defaults to undefined
 **fileSetsLabTitle** | **Array&lt;string&gt;** | Filter by file_sets.lab.title | (optional) defaults to undefined
 **fileSetsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by file_sets.status | (optional) defaults to undefined
 **fileSetsSummary** | **Array&lt;string&gt;** | Filter by file_sets.summary | (optional) defaults to undefined
 **institutionalCertificates** | **Array&lt;string&gt;** | Filter by institutional_certificates | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **modificationsId** | **Array&lt;string&gt;** | Filter by modifications.@id | (optional) defaults to undefined
 **modificationsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by modifications.status | (optional) defaults to undefined
 **modificationsSummary** | **Array&lt;string&gt;** | Filter by modifications.summary | (optional) defaults to undefined
 **moi** | **Array&lt;number&gt;** | Filter by moi | (optional) defaults to undefined
 **multiplexedInId** | **Array&lt;string&gt;** | Filter by multiplexed_in.@id | (optional) defaults to undefined
 **multiplexedInAccession** | **Array&lt;string&gt;** | Filter by multiplexed_in.accession | (optional) defaults to undefined
 **multiplexedSamplesId** | **Array&lt;string&gt;** | Filter by multiplexed_samples.@id | (optional) defaults to undefined
 **multiplexedSamplesAccession** | **Array&lt;string&gt;** | Filter by multiplexed_samples.accession | (optional) defaults to undefined
 **multiplexedSamplesConstructLibrarySets** | **Array&lt;string&gt;** | Filter by multiplexed_samples.construct_library_sets | (optional) defaults to undefined
 **multiplexedSamplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by multiplexed_samples.disease_terms.@id | (optional) defaults to undefined
 **multiplexedSamplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by multiplexed_samples.disease_terms.term_name | (optional) defaults to undefined
 **multiplexedSamplesDonorsId** | **Array&lt;string&gt;** | Filter by multiplexed_samples.donors.@id | (optional) defaults to undefined
 **multiplexedSamplesDonorsAccession** | **Array&lt;string&gt;** | Filter by multiplexed_samples.donors.accession | (optional) defaults to undefined
 **multiplexedSamplesSampleTermsId** | **Array&lt;string&gt;** | Filter by multiplexed_samples.sample_terms.@id | (optional) defaults to undefined
 **multiplexedSamplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by multiplexed_samples.sample_terms.term_name | (optional) defaults to undefined
 **multiplexedSamplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by multiplexed_samples.status | (optional) defaults to undefined
 **multiplexedSamplesSummary** | **Array&lt;string&gt;** | Filter by multiplexed_samples.summary | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **nucleicAcidDelivery** | **Array<&#39;transfection&#39; &#124; &#39;adenoviral transduction&#39; &#124; &#39;lentiviral transduction&#39;>** | Filter by nucleic_acid_delivery | (optional) defaults to undefined
 **originOf** | **Array&lt;string&gt;** | Filter by origin_of | (optional) defaults to undefined
 **protocols** | **Array&lt;string&gt;** | Filter by protocols | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **sampleTermsId** | **Array&lt;string&gt;** | Filter by sample_terms.@id | (optional) defaults to undefined
 **sampleTermsTermName** | **Array&lt;string&gt;** | Filter by sample_terms.term_name | (optional) defaults to undefined
 **sortedFractions** | **Array&lt;string&gt;** | Filter by sorted_fractions | (optional) defaults to undefined
 **sortedFromId** | **Array&lt;string&gt;** | Filter by sorted_from.@id | (optional) defaults to undefined
 **sortedFromAccession** | **Array&lt;string&gt;** | Filter by sorted_from.accession | (optional) defaults to undefined
 **sortedFromDetail** | **Array&lt;string&gt;** | Filter by sorted_from_detail | (optional) defaults to undefined
 **sourcesId** | **Array&lt;string&gt;** | Filter by sources.@id | (optional) defaults to undefined
 **startingAmount** | **Array&lt;number&gt;** | Filter by starting_amount | (optional) defaults to undefined
 **startingAmountUnits** | **Array<&#39;cells&#39; &#124; &#39;cells/ml&#39; &#124; &#39;g&#39; &#124; &#39;items&#39; &#124; &#39;mg&#39; &#124; &#39;whole animals&#39; &#124; &#39;whole embryos&#39; &#124; &#39;μg&#39; &#124; &#39;ng&#39;>** | Filter by starting_amount_units | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **timePostLibraryDelivery** | **Array&lt;number&gt;** | Filter by time_post_library_delivery | (optional) defaults to undefined
 **timePostLibraryDeliveryUnits** | **Array<&#39;minute&#39; &#124; &#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** | Filter by time_post_library_delivery_units | (optional) defaults to undefined
 **treatmentsId** | **Array&lt;string&gt;** | Filter by treatments.@id | (optional) defaults to undefined
 **treatmentsPurpose** | **Array<&#39;activation&#39; &#124; &#39;agonist&#39; &#124; &#39;antagonist&#39; &#124; &#39;control&#39; &#124; &#39;differentiation&#39; &#124; &#39;de-differentiation&#39; &#124; &#39;perturbation&#39; &#124; &#39;selection&#39; &#124; &#39;stimulation&#39;>** | Filter by treatments.purpose | (optional) defaults to undefined
 **treatmentsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by treatments.status | (optional) defaults to undefined
 **treatmentsSummary** | **Array&lt;string&gt;** | Filter by treatments.summary | (optional) defaults to undefined
 **treatmentsTreatmentType** | **Array<&#39;chemical&#39; &#124; &#39;protein&#39; &#124; &#39;environmental&#39;>** | Filter by treatments.treatment_type | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **virtual** | **Array&lt;boolean&gt;** | Filter by virtual | (optional) defaults to undefined


### Return type

**MultiplexedSampleResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **openReadingFrames**
> OpenReadingFrameResults openReadingFrames()

Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiOpenReadingFramesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award (optional)
  award: [
    "award_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "hORFeome:68072888001528021798096225500",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by gene.@id (optional)
  geneId: [
    "gene.@id_example",
  ],
  // Array<string> | Filter by gene.geneid (optional)
  geneGeneid: [
    "ENSEIOTGSWWMEJTCMOSLLNYULG62255008507",
  ],
  // Array<string> | Filter by gene.symbol (optional)
  geneSymbol: [
    "gene.symbol_example",
  ],
  // Array<string> | Filter by lab (optional)
  lab: [
    "lab_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by orf_id (optional)
  orfId: [
    "CCSBORF68072888001528021798096225500",
  ],
  // Array<number> | Filter by pct_coverage_orf (optional)
  pctCoverageOrf: [
    0,
  ],
  // Array<number> | Filter by pct_coverage_protein (optional)
  pctCoverageProtein: [
    0,
  ],
  // Array<number> | Filter by pct_identical_protein (optional)
  pctIdenticalProtein: [
    0,
  ],
  // Array<string> | Filter by protein_id (optional)
  proteinId: [
    "ENSP048072888008021798096225500850762",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by (optional)
  submittedBy: [
    "submitted_by_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.openReadingFrames(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **award** | **Array&lt;string&gt;** | Filter by award | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **geneId** | **Array&lt;string&gt;** | Filter by gene.@id | (optional) defaults to undefined
 **geneGeneid** | **Array&lt;string&gt;** | Filter by gene.geneid | (optional) defaults to undefined
 **geneSymbol** | **Array&lt;string&gt;** | Filter by gene.symbol | (optional) defaults to undefined
 **lab** | **Array&lt;string&gt;** | Filter by lab | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **orfId** | **Array&lt;string&gt;** | Filter by orf_id | (optional) defaults to undefined
 **pctCoverageOrf** | **Array&lt;number&gt;** | Filter by pct_coverage_orf | (optional) defaults to undefined
 **pctCoverageProtein** | **Array&lt;number&gt;** | Filter by pct_coverage_protein | (optional) defaults to undefined
 **pctIdenticalProtein** | **Array&lt;number&gt;** | Filter by pct_identical_protein | (optional) defaults to undefined
 **proteinId** | **Array&lt;string&gt;** | Filter by protein_id | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedBy** | **Array&lt;string&gt;** | Filter by submitted_by | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**OpenReadingFrameResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pages**
> PageResults pages()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPagesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award (optional)
  award: [
    "award_example",
  ],
  // Array<string> | Filter by canonical_uri (optional)
  canonicalUri: [
    "canonical_uri_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by lab (optional)
  lab: [
    "lab_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "y",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by parent (optional)
  parent: [
    "parent_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    "title_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.pages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **award** | **Array&lt;string&gt;** | Filter by award | (optional) defaults to undefined
 **canonicalUri** | **Array&lt;string&gt;** | Filter by canonical_uri | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **lab** | **Array&lt;string&gt;** | Filter by lab | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **parent** | **Array&lt;string&gt;** | Filter by parent | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **title** | **Array&lt;string&gt;** | Filter by title | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**PageResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phenotypeTerms**
> PhenotypeTermResults phenotypeTerms()

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPhenotypeTermsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by ancestors (optional)
  ancestors: [
    "ancestors_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by deprecated_ntr_terms (optional)
  deprecatedNtrTerms: [
    "NTR:48072888",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by is_a (optional)
  isA: [
    "is_a_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by ontology (optional)
  ontology: [
    "ontology_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by synonyms (optional)
  synonyms: [
    "synonyms_example",
  ],
  // Array<string> | Filter by term_id (optional)
  termId: [
    "NCIT:C80728",
  ],
  // Array<string> | Filter by term_name (optional)
  termName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.phenotypeTerms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **ancestors** | **Array&lt;string&gt;** | Filter by ancestors | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **deprecatedNtrTerms** | **Array&lt;string&gt;** | Filter by deprecated_ntr_terms | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **isA** | **Array&lt;string&gt;** | Filter by is_a | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **ontology** | **Array&lt;string&gt;** | Filter by ontology | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **synonyms** | **Array&lt;string&gt;** | Filter by synonyms | (optional) defaults to undefined
 **termId** | **Array&lt;string&gt;** | Filter by term_id | (optional) defaults to undefined
 **termName** | **Array&lt;string&gt;** | Filter by term_name | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**PhenotypeTermResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phenotypicFeatures**
> PhenotypicFeatureResults phenotypicFeatures()

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPhenotypicFeaturesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by feature.@id (optional)
  featureId: [
    "feature.@id_example",
  ],
  // Array<string> | Filter by feature.term_id (optional)
  featureTermId: [
    "NCIT:C80728",
  ],
  // Array<string> | Filter by feature.term_name (optional)
  featureTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by observation_date (optional)
  observationDate: [
    "observation_date_example",
  ],
  // Array<number> | Filter by quantity (optional)
  quantity: [
    3.14,
  ],
  // Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'> | Filter by quantity_units (optional)
  quantityUnits: [
    "meter",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.phenotypicFeatures(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **featureId** | **Array&lt;string&gt;** | Filter by feature.@id | (optional) defaults to undefined
 **featureTermId** | **Array&lt;string&gt;** | Filter by feature.term_id | (optional) defaults to undefined
 **featureTermName** | **Array&lt;string&gt;** | Filter by feature.term_name | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **observationDate** | **Array&lt;string&gt;** | Filter by observation_date | (optional) defaults to undefined
 **quantity** | **Array&lt;number&gt;** | Filter by quantity | (optional) defaults to undefined
 **quantityUnits** | **Array<&#39;meter&#39; &#124; &#39;micromole&#39; &#124; &#39;nanogram&#39; &#124; &#39;microgram&#39; &#124; &#39;milligram&#39; &#124; &#39;gram&#39; &#124; &#39;kilogram&#39; &#124; &#39;milli-International Unit per milliliter&#39; &#124; &#39;picogram per milliliter&#39; &#124; &#39;nanogram per milliliter&#39; &#124; &#39;milligram per deciliter&#39;>** | Filter by quantity_units | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**PhenotypicFeatureResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **platformTerms**
> PlatformTermResults platformTerms()

Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPlatformTermsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by ancestors (optional)
  ancestors: [
    "ancestors_example",
  ],
  // Array<'10X Genomics' | 'Illumina' | 'Life Technologies' | 'Oxford Nanopore Technologies' | 'Pacific Biosciences' | 'Parse Biosciences' | 'Roche'> | Filter by company (optional)
  company: [
    "10X Genomics",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by deprecated_ntr_terms (optional)
  deprecatedNtrTerms: [
    "NTR:48072888",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by is_a (optional)
  isA: [
    "is_a_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by ontology (optional)
  ontology: [
    "ontology_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'> | Filter by sequencing_kits (optional)
  sequencingKits: [
    "HiSeq SBS Kit v4",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by synonyms (optional)
  synonyms: [
    "synonyms_example",
  ],
  // Array<string> | Filter by term_id (optional)
  termId: [
    "NTR:80728",
  ],
  // Array<string> | Filter by term_name (optional)
  termName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.platformTerms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **ancestors** | **Array&lt;string&gt;** | Filter by ancestors | (optional) defaults to undefined
 **company** | **Array<&#39;10X Genomics&#39; &#124; &#39;Illumina&#39; &#124; &#39;Life Technologies&#39; &#124; &#39;Oxford Nanopore Technologies&#39; &#124; &#39;Pacific Biosciences&#39; &#124; &#39;Parse Biosciences&#39; &#124; &#39;Roche&#39;>** | Filter by company | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **deprecatedNtrTerms** | **Array&lt;string&gt;** | Filter by deprecated_ntr_terms | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **isA** | **Array&lt;string&gt;** | Filter by is_a | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **ontology** | **Array&lt;string&gt;** | Filter by ontology | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **sequencingKits** | **Array<&#39;HiSeq SBS Kit v4&#39; &#124; &#39;HiSeq SR Cluster Kit v4-cBot-HS&#39; &#124; &#39;HiSeq PE Cluster Kit v4-cBot-HS&#39; &#124; &#39;HiSeq SR Rapid Cluster Kit v2&#39; &#124; &#39;HiSeq PE Rapid Cluster Kit v2&#39; &#124; &#39;HiSeq Rapid SBS Kit v2&#39; &#124; &#39;HiSeq 3000/4000 SBS Kit&#39; &#124; &#39;HiSeq 3000/4000 SR Cluster Kit&#39; &#124; &#39;HiSeq 3000/4000 PE Cluster Kit&#39; &#124; &#39;MiSeq Reagent Kit v2&#39; &#124; &#39;NextSeq 500 Mid Output Kit&#39; &#124; &#39;NextSeq 500 High Output Kit&#39; &#124; &#39;NextSeq 500 Mid Output v2 Kit&#39; &#124; &#39;NextSeq 500 High Output v2 Kit&#39; &#124; &#39;NextSeq 500/550 Mid-Output v2.5 Kit&#39; &#124; &#39;NextSeq 500/550 High-Output v2.5 Kit&#39; &#124; &#39;TG NextSeq 500/550 Mid-Output Kit v2.5&#39; &#124; &#39;TG NextSeq 500/550 High-Output Kit v2.5&#39; &#124; &#39;NextSeq 1000/2000 P1 Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P2 Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P3 Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NextSeq 2000 P3 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NextSeq 2000 P4 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NovaSeq 6000 SP Reagent Kit v1.5&#39; &#124; &#39;NovaSeq 6000 S1 Reagent Kit v1.5&#39; &#124; &#39;NovaSeq 6000 S2 Reagent Kit v1.5&#39; &#124; &#39;NovaSeq 6000 S4 Reagent Kit v1.5&#39; &#124; &#39;NovaSeq X Series 10B Reagent Kit&#39; &#124; &#39;ONT Ligation Sequencing Kit V14&#39; &#124; &#39;Sequel sequencing kit 3.0&#39; &#124; &#39;Sequel II sequencing kit 2.0&#39;>** | Filter by sequencing_kits | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **synonyms** | **Array&lt;string&gt;** | Filter by synonyms | (optional) defaults to undefined
 **termId** | **Array&lt;string&gt;** | Filter by term_id | (optional) defaults to undefined
 **termName** | **Array&lt;string&gt;** | Filter by term_name | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**PlatformTermResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **predictionSets**
> PredictionSetResults predictionSets()

Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPredictionSetsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by award.contact_pi.@id (optional)
  awardContactPiId: [
    "award.contact_pi.@id_example",
  ],
  // Array<string> | Filter by award.contact_pi.title (optional)
  awardContactPiTitle: [
    "award.contact_pi.title_example",
  ],
  // Array<string> | Filter by award.title (optional)
  awardTitle: [
    "k",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by control_for.@id (optional)
  controlForId: [
    "control_for.@id_example",
  ],
  // Array<string> | Filter by control_for.accession (optional)
  controlForAccession: [
    "control_for.accession_example",
  ],
  // Array<string> | Filter by control_for.aliases (optional)
  controlForAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "GEO:GSE4",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors.@id (optional)
  donorsId: [
    "donors.@id_example",
  ],
  // Array<string> | Filter by donors.accession (optional)
  donorsAccession: [
    "donors.accession_example",
  ],
  // Array<string> | Filter by donors.aliases (optional)
  donorsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by donors.sex (optional)
  donorsSex: [
    "male",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by donors.status (optional)
  donorsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by donors.taxa (optional)
  donorsTaxa: [
    "donors.taxa_example",
  ],
  // Array<'pathogenicity' | 'functional effect' | 'protein stability' | 'activity level' | 'binding effect'> | Filter by file_set_type (optional)
  fileSetType: [
    "pathogenicity",
  ],
  // Array<string> | Filter by files.@id (optional)
  filesId: [
    "files.@id_example",
  ],
  // Array<string> | Filter by files.accession (optional)
  filesAccession: [
    "files.accession_example",
  ],
  // Array<string> | Filter by files.aliases (optional)
  filesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by files.content_type (optional)
  filesContentType: [
    "files.content_type_example",
  ],
  // Array<string> | Filter by files.creation_timestamp (optional)
  filesCreationTimestamp: [
    "files.creation_timestamp_example",
  ],
  // Array<string> | Filter by files.file_format (optional)
  filesFileFormat: [
    "files.file_format_example",
  ],
  // Array<number> | Filter by files.file_size (optional)
  filesFileSize: [
    0,
  ],
  // Array<string> | Filter by files.href (optional)
  filesHref: [
    "files.href_example",
  ],
  // Array<string> | Filter by files.s3_uri (optional)
  filesS3Uri: [
    "files.s3_uri_example",
  ],
  // Array<string> | Filter by files.sequencing_platform (optional)
  filesSequencingPlatform: [
    "files.sequencing_platform_example",
  ],
  // Array<string> | Filter by files.submitted_file_name (optional)
  filesSubmittedFileName: [
    "files.submitted_file_name_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by files.upload_status (optional)
  filesUploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by input_file_set_for (optional)
  inputFileSetFor: [
    "input_file_set_for_example",
  ],
  // Array<string> | Filter by input_file_sets (optional)
  inputFileSets: [
    "input_file_sets_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by large_scale_gene_list.@id (optional)
  largeScaleGeneListId: [
    "large_scale_gene_list.@id_example",
  ],
  // Array<string> | Filter by large_scale_gene_list.accession (optional)
  largeScaleGeneListAccession: [
    "large_scale_gene_list.accession_example",
  ],
  // Array<string> | Filter by large_scale_gene_list.aliases (optional)
  largeScaleGeneListAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by large_scale_loci_list.@id (optional)
  largeScaleLociListId: [
    "large_scale_loci_list.@id_example",
  ],
  // Array<string> | Filter by large_scale_loci_list.accession (optional)
  largeScaleLociListAccession: [
    "large_scale_loci_list.accession_example",
  ],
  // Array<string> | Filter by large_scale_loci_list.aliases (optional)
  largeScaleLociListAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by samples.@id (optional)
  samplesId: [
    "samples.@id_example",
  ],
  // Array<string> | Filter by samples.accession (optional)
  samplesAccession: [
    "samples.accession_example",
  ],
  // Array<string> | Filter by samples.aliases (optional)
  samplesAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by samples.cell_fate_change_treatments (optional)
  samplesCellFateChangeTreatments: [
    "samples.cell_fate_change_treatments_example",
  ],
  // Array<'organoid' | 'gastruloid' | 'embryoid' | 'cell line' | 'differentiated cell specimen' | 'reprogrammed cell specimen' | 'pooled cell specimen'> | Filter by samples.classifications (optional)
  samplesClassifications: [
    "organoid",
  ],
  // Array<string> | Filter by samples.construct_library_sets.@id (optional)
  samplesConstructLibrarySetsId: [
    "samples.construct_library_sets.@id_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.accession (optional)
  samplesConstructLibrarySetsAccession: [
    "samples.construct_library_sets.accession_example",
  ],
  // Array<string> | Filter by samples.construct_library_sets.summary (optional)
  samplesConstructLibrarySetsSummary: [
    "samples.construct_library_sets.summary_example",
  ],
  // Array<string> | Filter by samples.disease_terms.@id (optional)
  samplesDiseaseTermsId: [
    "samples.disease_terms.@id_example",
  ],
  // Array<string> | Filter by samples.disease_terms.term_name (optional)
  samplesDiseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by samples.modifications (optional)
  samplesModifications: [
    "samples.modifications_example",
  ],
  // Array<string> | Filter by samples.sample_terms.@id (optional)
  samplesSampleTermsId: [
    "samples.sample_terms.@id_example",
  ],
  // Array<string> | Filter by samples.sample_terms.aliases (optional)
  samplesSampleTermsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by samples.sample_terms.status (optional)
  samplesSampleTermsStatus: [
    "archived",
  ],
  // Array<string> | Filter by samples.sample_terms.summary (optional)
  samplesSampleTermsSummary: [
    "samples.sample_terms.summary_example",
  ],
  // Array<string> | Filter by samples.sample_terms.term_name (optional)
  samplesSampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by samples.status (optional)
  samplesStatus: [
    "in progress",
  ],
  // Array<string> | Filter by samples.summary (optional)
  samplesSummary: [
    "samples.summary_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.@id (optional)
  samplesTargetedSampleTermId: [
    "samples.targeted_sample_term.@id_example",
  ],
  // Array<string> | Filter by samples.targeted_sample_term.term_name (optional)
  samplesTargetedSampleTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by samples.taxa (optional)
  samplesTaxa: [
    "Homo sapiens",
  ],
  // Array<string> | Filter by samples.treatments (optional)
  samplesTreatments: [
    "samples.treatments_example",
  ],
  // Array<'genes' | 'loci' | 'genome-wide'> | Filter by scope (optional)
  scope: [
    "genes",
  ],
  // Array<string> | Filter by small_scale_gene_list.@id (optional)
  smallScaleGeneListId: [
    "small_scale_gene_list.@id_example",
  ],
  // Array<string> | Filter by small_scale_gene_list.geneid (optional)
  smallScaleGeneListGeneid: [
    "ENSEIOTGSWWMEJTCMOSLLNYULG62255008507",
  ],
  // Array<string> | Filter by small_scale_gene_list.name (optional)
  smallScaleGeneListName: [
    "small_scale_gene_list.name_example",
  ],
  // Array<string> | Filter by small_scale_gene_list.symbol (optional)
  smallScaleGeneListSymbol: [
    "small_scale_gene_list.symbol_example",
  ],
  // Array<string> | Filter by small_scale_gene_list.synonyms (optional)
  smallScaleGeneListSynonyms: [
    "small_scale_gene_list.synonyms_example",
  ],
  // Array<Locus> | Filter by small_scale_loci_list (optional)
  smallScaleLociList: [
    {
      assembly: "GRCh38",
      chromosome: "chrH",
      start: 1,
      end: 1,
    },
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_files_timestamp (optional)
  submittedFilesTimestamp: [
    "submitted_files_timestamp_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.predictionSets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **awardContactPiId** | **Array&lt;string&gt;** | Filter by award.contact_pi.@id | (optional) defaults to undefined
 **awardContactPiTitle** | **Array&lt;string&gt;** | Filter by award.contact_pi.title | (optional) defaults to undefined
 **awardTitle** | **Array&lt;string&gt;** | Filter by award.title | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **controlForId** | **Array&lt;string&gt;** | Filter by control_for.@id | (optional) defaults to undefined
 **controlForAccession** | **Array&lt;string&gt;** | Filter by control_for.accession | (optional) defaults to undefined
 **controlForAliases** | **Array&lt;string&gt;** | Filter by control_for.aliases | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donorsId** | **Array&lt;string&gt;** | Filter by donors.@id | (optional) defaults to undefined
 **donorsAccession** | **Array&lt;string&gt;** | Filter by donors.accession | (optional) defaults to undefined
 **donorsAliases** | **Array&lt;string&gt;** | Filter by donors.aliases | (optional) defaults to undefined
 **donorsSex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by donors.sex | (optional) defaults to undefined
 **donorsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by donors.status | (optional) defaults to undefined
 **donorsTaxa** | **Array&lt;string&gt;** | Filter by donors.taxa | (optional) defaults to undefined
 **fileSetType** | **Array<&#39;pathogenicity&#39; &#124; &#39;functional effect&#39; &#124; &#39;protein stability&#39; &#124; &#39;activity level&#39; &#124; &#39;binding effect&#39;>** | Filter by file_set_type | (optional) defaults to undefined
 **filesId** | **Array&lt;string&gt;** | Filter by files.@id | (optional) defaults to undefined
 **filesAccession** | **Array&lt;string&gt;** | Filter by files.accession | (optional) defaults to undefined
 **filesAliases** | **Array&lt;string&gt;** | Filter by files.aliases | (optional) defaults to undefined
 **filesContentType** | **Array&lt;string&gt;** | Filter by files.content_type | (optional) defaults to undefined
 **filesCreationTimestamp** | **Array&lt;string&gt;** | Filter by files.creation_timestamp | (optional) defaults to undefined
 **filesFileFormat** | **Array&lt;string&gt;** | Filter by files.file_format | (optional) defaults to undefined
 **filesFileSize** | **Array&lt;number&gt;** | Filter by files.file_size | (optional) defaults to undefined
 **filesHref** | **Array&lt;string&gt;** | Filter by files.href | (optional) defaults to undefined
 **filesS3Uri** | **Array&lt;string&gt;** | Filter by files.s3_uri | (optional) defaults to undefined
 **filesSequencingPlatform** | **Array&lt;string&gt;** | Filter by files.sequencing_platform | (optional) defaults to undefined
 **filesSubmittedFileName** | **Array&lt;string&gt;** | Filter by files.submitted_file_name | (optional) defaults to undefined
 **filesUploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by files.upload_status | (optional) defaults to undefined
 **inputFileSetFor** | **Array&lt;string&gt;** | Filter by input_file_set_for | (optional) defaults to undefined
 **inputFileSets** | **Array&lt;string&gt;** | Filter by input_file_sets | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **largeScaleGeneListId** | **Array&lt;string&gt;** | Filter by large_scale_gene_list.@id | (optional) defaults to undefined
 **largeScaleGeneListAccession** | **Array&lt;string&gt;** | Filter by large_scale_gene_list.accession | (optional) defaults to undefined
 **largeScaleGeneListAliases** | **Array&lt;string&gt;** | Filter by large_scale_gene_list.aliases | (optional) defaults to undefined
 **largeScaleLociListId** | **Array&lt;string&gt;** | Filter by large_scale_loci_list.@id | (optional) defaults to undefined
 **largeScaleLociListAccession** | **Array&lt;string&gt;** | Filter by large_scale_loci_list.accession | (optional) defaults to undefined
 **largeScaleLociListAliases** | **Array&lt;string&gt;** | Filter by large_scale_loci_list.aliases | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **samplesId** | **Array&lt;string&gt;** | Filter by samples.@id | (optional) defaults to undefined
 **samplesAccession** | **Array&lt;string&gt;** | Filter by samples.accession | (optional) defaults to undefined
 **samplesAliases** | **Array&lt;string&gt;** | Filter by samples.aliases | (optional) defaults to undefined
 **samplesCellFateChangeTreatments** | **Array&lt;string&gt;** | Filter by samples.cell_fate_change_treatments | (optional) defaults to undefined
 **samplesClassifications** | **Array<&#39;organoid&#39; &#124; &#39;gastruloid&#39; &#124; &#39;embryoid&#39; &#124; &#39;cell line&#39; &#124; &#39;differentiated cell specimen&#39; &#124; &#39;reprogrammed cell specimen&#39; &#124; &#39;pooled cell specimen&#39;>** | Filter by samples.classifications | (optional) defaults to undefined
 **samplesConstructLibrarySetsId** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.@id | (optional) defaults to undefined
 **samplesConstructLibrarySetsAccession** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.accession | (optional) defaults to undefined
 **samplesConstructLibrarySetsSummary** | **Array&lt;string&gt;** | Filter by samples.construct_library_sets.summary | (optional) defaults to undefined
 **samplesDiseaseTermsId** | **Array&lt;string&gt;** | Filter by samples.disease_terms.@id | (optional) defaults to undefined
 **samplesDiseaseTermsTermName** | **Array&lt;string&gt;** | Filter by samples.disease_terms.term_name | (optional) defaults to undefined
 **samplesModifications** | **Array&lt;string&gt;** | Filter by samples.modifications | (optional) defaults to undefined
 **samplesSampleTermsId** | **Array&lt;string&gt;** | Filter by samples.sample_terms.@id | (optional) defaults to undefined
 **samplesSampleTermsAliases** | **Array&lt;string&gt;** | Filter by samples.sample_terms.aliases | (optional) defaults to undefined
 **samplesSampleTermsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by samples.sample_terms.status | (optional) defaults to undefined
 **samplesSampleTermsSummary** | **Array&lt;string&gt;** | Filter by samples.sample_terms.summary | (optional) defaults to undefined
 **samplesSampleTermsTermName** | **Array&lt;string&gt;** | Filter by samples.sample_terms.term_name | (optional) defaults to undefined
 **samplesStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by samples.status | (optional) defaults to undefined
 **samplesSummary** | **Array&lt;string&gt;** | Filter by samples.summary | (optional) defaults to undefined
 **samplesTargetedSampleTermId** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.@id | (optional) defaults to undefined
 **samplesTargetedSampleTermTermName** | **Array&lt;string&gt;** | Filter by samples.targeted_sample_term.term_name | (optional) defaults to undefined
 **samplesTaxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by samples.taxa | (optional) defaults to undefined
 **samplesTreatments** | **Array&lt;string&gt;** | Filter by samples.treatments | (optional) defaults to undefined
 **scope** | **Array<&#39;genes&#39; &#124; &#39;loci&#39; &#124; &#39;genome-wide&#39;>** | Filter by scope | (optional) defaults to undefined
 **smallScaleGeneListId** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.@id | (optional) defaults to undefined
 **smallScaleGeneListGeneid** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.geneid | (optional) defaults to undefined
 **smallScaleGeneListName** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.name | (optional) defaults to undefined
 **smallScaleGeneListSymbol** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.symbol | (optional) defaults to undefined
 **smallScaleGeneListSynonyms** | **Array&lt;string&gt;** | Filter by small_scale_gene_list.synonyms | (optional) defaults to undefined
 **smallScaleLociList** | **Array&lt;Locus&gt;** | Filter by small_scale_loci_list | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFilesTimestamp** | **Array&lt;string&gt;** | Filter by submitted_files_timestamp | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**PredictionSetResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **primaryCells**
> PrimaryCellResults primaryCells()

Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPrimaryCellsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by age (optional)
  age: [
    "20",
  ],
  // Array<'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'> | Filter by age_units (optional)
  ageUnits: [
    "minute",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by biomarkers (optional)
  biomarkers: [
    "biomarkers_example",
  ],
  // Array<string> | Filter by cellular_sub_pool (optional)
  cellularSubPool: [
    `A	PSSEW9gFbDSx8mxCScjDL(CXm8G5
8cfa8KoK01UH0)8)kQEFkLkvyHfCdEAAg8zj4gGu)(shjbE0Eva55tk-L
wL3CTLxzWhej1zFvhjFRboDzLsp6gf0OAK-kCSql(uFEEYdpfNsNsac1)SIo6lS-8RLNCj.vwl1j7t1vuHb	KU.InXclZXDvTILOlNXObqOhIxyXMA.LlW(Yib4.A5LmHAyFXUBTqfd(i3I
HO3NkWS6xtW2w5xnZwtXEesNYvTjpOQf.NcVPpV9BD04SJp5J46_3dkkS8NUjdcuy-m-_tfX3utne7fNJhTEEe
UBwaE8H52.b.mwvBdD-3IxHaS__(IgtBQhxiSednf7s3up4IuPu9pHas7RMR69K_R1SH.IDdd2iwO4O
DNwoIBii58AlzvjXkzL1cFtU(wGJsBpEWN4X007jy4ne8B9viHCfRSt.zM)AzqND3VbSpzu2rt3e5m6oyHHFRQa)Q_aoGdVD(L5EG(9z2JfhY(Fl6D--BFq9uvJ)z1.gmLbf9eAlVc3GFPfzIBbiFI0WqfuzQxA20tAzyVT.SCqdFXiTxklrT0n9Ju8nF5H1Xl45CTMi9yNVBoMWen(Yz(PfKgRQB(8t-DSgxDf5tssxRltnj0J7BUY8hLcGaAEm7R s(eP5SikNzvvGcEMzAva2(Tu3L4c5avQxR(XXYqFxVO-l.-ux9CWV6X3Vf8HpUDuxM V-2RsXzBpac-BwWuqaL6xt5VAr.nNYs8k8XUUTDwo0v.V.LbXyer5yR6rmwayWFaFu	AxAnVYxdkoZwLN(1Su-5YxiA..BXKnjtWjQv9CVA5r4bWdS4lm)IqDEH2wPKRRON
LL66f3bvB45gABxGG4cumOhUPoyiBvyEEGncakfEuYH3dxfN_BsVNj6sxxi56dDz.7cr7IixoI02k7uqhs1f5RRCQ_qoss7VBNec)D4oYkNz	f5lpC5-CasX2FJdtRCcC(5MvL-NZXkUml6eucdU94qxl.3L(lkU.7(lM4h(K nA4KOWnh4E)2CzvswM7)Evgpp-fMCbKcrYpAs_4V(fyBlEA7
dbTOTAa5U5y9.iob6cXxY7OnDddCo-Nz)BiQy.nkvhyI.Q7KRN_5vWmQQ.ZW3LZlLBPNr0Mjh1D8LLb0VnGd0fKz S)NfCdFJzT_l(hxwOekxQ(ZhpU4VZH5I.e7KcbAp3XhW
.7YqB4bMaJBkMUeU-Rv_8GLP8GcqU0n9hcZKfi_uj)KjfrcwdAasf)E.bvj912vcZWsf3rchvLpSn-9VrP7a8r(OC0RB3LzrKhzZbAVhx-xzK(o).XAfTkYB)inFbQh..c0)ZFSteTJF2vIMs7HbcUDl3gxIn HSEaxqbRaj(9MHdOLxnocPBF_ySwwT8PZ587pcMrlOpivpmtX.UBdGWmCD32JDXCLsZIfKYtQMcEgNCQkDzSPidOOUiPZTQ_GK.RiXQ)6MdiKIHcdnw1gIDvxACrn(_bXO0nT0BtRC9jW R-qIEA9-6cOLJARGmkX0NeIe64sJ9bPmMstkBzRt-1a.QwQ5ihe0DwVLLxanL8CkS-qlZLExxdBys7iu-bG2TK(KrgjCh0Xc.tZ147sk36zHs75uM(xWURvNJSewADuGA)uGSQTn_AmjaP.-9_8Rcwx.5UOn8eyMR3dUxdf9ygTiLSA)TPWaAv2xygDaWvo05E193n1beIeqZz7qRNxQGWq6vvG6zsGL(qMOuGg(ppWj_.Y4	VhdoXJKc6E4lO1VNaWu)UISeMawY_IDQZT.lYZ(.PEUKHy7FMs8GI2zhYVhI_uYQU-e)W6FFc9ITUSp(uVja)p
PLnP8JBPrUjICUC5tv4Mt8j_dli.gACX_rj_yZ.e)x6(URuAUAuEFms47lNT)zmH.FZVTdYzmq2adekYUmXkgB8lQ)inJuuzJ.tcRyHkA1Y6DiOKTtUUjqRAiuocFpH4LWUDa2Cd)dPlRZFp2r
LKl2mfdTjaPE1xNaMvBtqhDijc_wK_LCbWnjOY4l6k(H4L561wdoQZ7_Tw7im0mroVfkOW7)U6aItgWDGRMes8Xqg0F3pr6iH
  ],
  // Array<string> | Filter by classifications (optional)
  classifications: [
    "classifications_example",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by construct_library_sets (optional)
  constructLibrarySets: [
    "construct_library_sets_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by date_obtained (optional)
  dateObtained: [
    "date_obtained_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENCODE:ENCBS480TGS",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by disease_terms.@id (optional)
  diseaseTermsId: [
    "disease_terms.@id_example",
  ],
  // Array<string> | Filter by disease_terms.term_name (optional)
  diseaseTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by donors (optional)
  donors: [
    "donors_example",
  ],
  // Array<boolean> | Filter by embryonic (optional)
  embryonic: [
    true,
  ],
  // Array<string> | Filter by file_sets.@id (optional)
  fileSetsId: [
    "file_sets.@id_example",
  ],
  // Array<string> | Filter by file_sets.accession (optional)
  fileSetsAccession: [
    "file_sets.accession_example",
  ],
  // Array<string> | Filter by file_sets.aliases (optional)
  fileSetsAliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by file_sets.assay_term.term_name (optional)
  fileSetsAssayTermTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by file_sets.lab.title (optional)
  fileSetsLabTitle: [
    "file_sets.lab.title_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by file_sets.status (optional)
  fileSetsStatus: [
    "in progress",
  ],
  // Array<string> | Filter by file_sets.summary (optional)
  fileSetsSummary: [
    "file_sets.summary_example",
  ],
  // Array<string> | Filter by institutional_certificates.@id (optional)
  institutionalCertificatesId: [
    "institutional_certificates.@id_example",
  ],
  // Array<string> | Filter by institutional_certificates.certificate_identifier (optional)
  institutionalCertificatesCertificateIdentifier: [
    "IP048-07",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by lot_id (optional)
  lotId: [
    "k",
  ],
  // Array<number> | Filter by lower_bound_age (optional)
  lowerBoundAge: [
    3.14,
  ],
  // Array<number> | Filter by lower_bound_age_in_hours (optional)
  lowerBoundAgeInHours: [
    3.14,
  ],
  // Array<string> | Filter by modifications.@id (optional)
  modificationsId: [
    "modifications.@id_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by modifications.status (optional)
  modificationsStatus: [
    "archived",
  ],
  // Array<string> | Filter by modifications.summary (optional)
  modificationsSummary: [
    "modifications.summary_example",
  ],
  // Array<number> | Filter by moi (optional)
  moi: [
    0,
  ],
  // Array<string> | Filter by multiplexed_in.@id (optional)
  multiplexedInId: [
    "multiplexed_in.@id_example",
  ],
  // Array<string> | Filter by multiplexed_in.accession (optional)
  multiplexedInAccession: [
    "multiplexed_in.accession_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<'transfection' | 'adenoviral transduction' | 'lentiviral transduction'> | Filter by nucleic_acid_delivery (optional)
  nucleicAcidDelivery: [
    "transfection",
  ],
  // Array<string> | Filter by origin_of (optional)
  originOf: [
    "origin_of_example",
  ],
  // Array<string> | Filter by originated_from (optional)
  originatedFrom: [
    "originated_from_example",
  ],
  // Array<string> | Filter by part_of (optional)
  partOf: [
    "part_of_example",
  ],
  // Array<string> | Filter by parts (optional)
  parts: [
    "parts_example",
  ],
  // Array<number> | Filter by passage_number (optional)
  passageNumber: [
    0,
  ],
  // Array<string> | Filter by pooled_from (optional)
  pooledFrom: [
    "pooled_from_example",
  ],
  // Array<string> | Filter by pooled_in (optional)
  pooledIn: [
    "pooled_in_example",
  ],
  // Array<string> | Filter by product_id (optional)
  productId: [
    "k",
  ],
  // Array<string> | Filter by protocols (optional)
  protocols: [
    "https://www.protocols.io/k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by sample_terms.@id (optional)
  sampleTermsId: [
    "sample_terms.@id_example",
  ],
  // Array<string> | Filter by sample_terms.term_name (optional)
  sampleTermsTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<'female' | 'male' | 'mixed' | 'unspecified'> | Filter by sex (optional)
  sex: [
    "female",
  ],
  // Array<string> | Filter by sorted_fractions (optional)
  sortedFractions: [
    "sorted_fractions_example",
  ],
  // Array<string> | Filter by sorted_from.@id (optional)
  sortedFromId: [
    "sorted_from.@id_example",
  ],
  // Array<string> | Filter by sorted_from.accession (optional)
  sortedFromAccession: [
    "sorted_from.accession_example",
  ],
  // Array<string> | Filter by sorted_from_detail (optional)
  sortedFromDetail: [
    "sorted_from_detail_example",
  ],
  // Array<string> | Filter by sources.@id (optional)
  sourcesId: [
    "sources.@id_example",
  ],
  // Array<number> | Filter by starting_amount (optional)
  startingAmount: [
    3.14,
  ],
  // Array<'cells' | 'cells/ml' | 'g' | 'items' | 'mg' | 'whole animals' | 'whole embryos' | 'μg' | 'ng'> | Filter by starting_amount_units (optional)
  startingAmountUnits: [
    "cells",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'Homo sapiens' | 'Mus musculus'> | Filter by taxa (optional)
  taxa: [
    "Homo sapiens",
  ],
  // Array<number> | Filter by time_post_library_delivery (optional)
  timePostLibraryDelivery: [
    3.14,
  ],
  // Array<'minute' | 'hour' | 'day' | 'week' | 'month'> | Filter by time_post_library_delivery_units (optional)
  timePostLibraryDeliveryUnits: [
    "minute",
  ],
  // Array<string> | Filter by treatments.@id (optional)
  treatmentsId: [
    "treatments.@id_example",
  ],
  // Array<'activation' | 'agonist' | 'antagonist' | 'control' | 'differentiation' | 'de-differentiation' | 'perturbation' | 'selection' | 'stimulation'> | Filter by treatments.purpose (optional)
  treatmentsPurpose: [
    "activation",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by treatments.status (optional)
  treatmentsStatus: [
    "archived",
  ],
  // Array<string> | Filter by treatments.summary (optional)
  treatmentsSummary: [
    "treatments.summary_example",
  ],
  // Array<'chemical' | 'protein' | 'environmental'> | Filter by treatments.treatment_type (optional)
  treatmentsTreatmentType: [
    "chemical",
  ],
  // Array<number> | Filter by upper_bound_age (optional)
  upperBoundAge: [
    3.14,
  ],
  // Array<number> | Filter by upper_bound_age_in_hours (optional)
  upperBoundAgeInHours: [
    3.14,
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<boolean> | Filter by virtual (optional)
  virtual: [
    true,
  ],
};

apiInstance.primaryCells(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **age** | **Array&lt;string&gt;** | Filter by age | (optional) defaults to undefined
 **ageUnits** | **Array<&#39;minute&#39; &#124; &#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39; &#124; &#39;year&#39;>** | Filter by age_units | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **biomarkers** | **Array&lt;string&gt;** | Filter by biomarkers | (optional) defaults to undefined
 **cellularSubPool** | **Array&lt;string&gt;** | Filter by cellular_sub_pool | (optional) defaults to undefined
 **classifications** | **Array&lt;string&gt;** | Filter by classifications | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **constructLibrarySets** | **Array&lt;string&gt;** | Filter by construct_library_sets | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dateObtained** | **Array&lt;string&gt;** | Filter by date_obtained | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **diseaseTermsId** | **Array&lt;string&gt;** | Filter by disease_terms.@id | (optional) defaults to undefined
 **diseaseTermsTermName** | **Array&lt;string&gt;** | Filter by disease_terms.term_name | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **donors** | **Array&lt;string&gt;** | Filter by donors | (optional) defaults to undefined
 **embryonic** | **Array&lt;boolean&gt;** | Filter by embryonic | (optional) defaults to undefined
 **fileSetsId** | **Array&lt;string&gt;** | Filter by file_sets.@id | (optional) defaults to undefined
 **fileSetsAccession** | **Array&lt;string&gt;** | Filter by file_sets.accession | (optional) defaults to undefined
 **fileSetsAliases** | **Array&lt;string&gt;** | Filter by file_sets.aliases | (optional) defaults to undefined
 **fileSetsAssayTermTermName** | **Array&lt;string&gt;** | Filter by file_sets.assay_term.term_name | (optional) defaults to undefined
 **fileSetsLabTitle** | **Array&lt;string&gt;** | Filter by file_sets.lab.title | (optional) defaults to undefined
 **fileSetsStatus** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by file_sets.status | (optional) defaults to undefined
 **fileSetsSummary** | **Array&lt;string&gt;** | Filter by file_sets.summary | (optional) defaults to undefined
 **institutionalCertificatesId** | **Array&lt;string&gt;** | Filter by institutional_certificates.@id | (optional) defaults to undefined
 **institutionalCertificatesCertificateIdentifier** | **Array&lt;string&gt;** | Filter by institutional_certificates.certificate_identifier | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lotId** | **Array&lt;string&gt;** | Filter by lot_id | (optional) defaults to undefined
 **lowerBoundAge** | **Array&lt;number&gt;** | Filter by lower_bound_age | (optional) defaults to undefined
 **lowerBoundAgeInHours** | **Array&lt;number&gt;** | Filter by lower_bound_age_in_hours | (optional) defaults to undefined
 **modificationsId** | **Array&lt;string&gt;** | Filter by modifications.@id | (optional) defaults to undefined
 **modificationsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by modifications.status | (optional) defaults to undefined
 **modificationsSummary** | **Array&lt;string&gt;** | Filter by modifications.summary | (optional) defaults to undefined
 **moi** | **Array&lt;number&gt;** | Filter by moi | (optional) defaults to undefined
 **multiplexedInId** | **Array&lt;string&gt;** | Filter by multiplexed_in.@id | (optional) defaults to undefined
 **multiplexedInAccession** | **Array&lt;string&gt;** | Filter by multiplexed_in.accession | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **nucleicAcidDelivery** | **Array<&#39;transfection&#39; &#124; &#39;adenoviral transduction&#39; &#124; &#39;lentiviral transduction&#39;>** | Filter by nucleic_acid_delivery | (optional) defaults to undefined
 **originOf** | **Array&lt;string&gt;** | Filter by origin_of | (optional) defaults to undefined
 **originatedFrom** | **Array&lt;string&gt;** | Filter by originated_from | (optional) defaults to undefined
 **partOf** | **Array&lt;string&gt;** | Filter by part_of | (optional) defaults to undefined
 **parts** | **Array&lt;string&gt;** | Filter by parts | (optional) defaults to undefined
 **passageNumber** | **Array&lt;number&gt;** | Filter by passage_number | (optional) defaults to undefined
 **pooledFrom** | **Array&lt;string&gt;** | Filter by pooled_from | (optional) defaults to undefined
 **pooledIn** | **Array&lt;string&gt;** | Filter by pooled_in | (optional) defaults to undefined
 **productId** | **Array&lt;string&gt;** | Filter by product_id | (optional) defaults to undefined
 **protocols** | **Array&lt;string&gt;** | Filter by protocols | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **sampleTermsId** | **Array&lt;string&gt;** | Filter by sample_terms.@id | (optional) defaults to undefined
 **sampleTermsTermName** | **Array&lt;string&gt;** | Filter by sample_terms.term_name | (optional) defaults to undefined
 **sex** | **Array<&#39;female&#39; &#124; &#39;male&#39; &#124; &#39;mixed&#39; &#124; &#39;unspecified&#39;>** | Filter by sex | (optional) defaults to undefined
 **sortedFractions** | **Array&lt;string&gt;** | Filter by sorted_fractions | (optional) defaults to undefined
 **sortedFromId** | **Array&lt;string&gt;** | Filter by sorted_from.@id | (optional) defaults to undefined
 **sortedFromAccession** | **Array&lt;string&gt;** | Filter by sorted_from.accession | (optional) defaults to undefined
 **sortedFromDetail** | **Array&lt;string&gt;** | Filter by sorted_from_detail | (optional) defaults to undefined
 **sourcesId** | **Array&lt;string&gt;** | Filter by sources.@id | (optional) defaults to undefined
 **startingAmount** | **Array&lt;number&gt;** | Filter by starting_amount | (optional) defaults to undefined
 **startingAmountUnits** | **Array<&#39;cells&#39; &#124; &#39;cells/ml&#39; &#124; &#39;g&#39; &#124; &#39;items&#39; &#124; &#39;mg&#39; &#124; &#39;whole animals&#39; &#124; &#39;whole embryos&#39; &#124; &#39;μg&#39; &#124; &#39;ng&#39;>** | Filter by starting_amount_units | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **taxa** | **Array<&#39;Homo sapiens&#39; &#124; &#39;Mus musculus&#39;>** | Filter by taxa | (optional) defaults to undefined
 **timePostLibraryDelivery** | **Array&lt;number&gt;** | Filter by time_post_library_delivery | (optional) defaults to undefined
 **timePostLibraryDeliveryUnits** | **Array<&#39;minute&#39; &#124; &#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** | Filter by time_post_library_delivery_units | (optional) defaults to undefined
 **treatmentsId** | **Array&lt;string&gt;** | Filter by treatments.@id | (optional) defaults to undefined
 **treatmentsPurpose** | **Array<&#39;activation&#39; &#124; &#39;agonist&#39; &#124; &#39;antagonist&#39; &#124; &#39;control&#39; &#124; &#39;differentiation&#39; &#124; &#39;de-differentiation&#39; &#124; &#39;perturbation&#39; &#124; &#39;selection&#39; &#124; &#39;stimulation&#39;>** | Filter by treatments.purpose | (optional) defaults to undefined
 **treatmentsStatus** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by treatments.status | (optional) defaults to undefined
 **treatmentsSummary** | **Array&lt;string&gt;** | Filter by treatments.summary | (optional) defaults to undefined
 **treatmentsTreatmentType** | **Array<&#39;chemical&#39; &#124; &#39;protein&#39; &#124; &#39;environmental&#39;>** | Filter by treatments.treatment_type | (optional) defaults to undefined
 **upperBoundAge** | **Array&lt;number&gt;** | Filter by upper_bound_age | (optional) defaults to undefined
 **upperBoundAgeInHours** | **Array&lt;number&gt;** | Filter by upper_bound_age_in_hours | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **virtual** | **Array&lt;boolean&gt;** | Filter by virtual | (optional) defaults to undefined


### Return type

**PrimaryCellResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **publications**
> PublicationResults publications()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiPublicationsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by abstract (optional)
  _abstract: [
    "abstract_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by authors (optional)
  authors: [
    "authors_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by date_published (optional)
  datePublished: [
    "date_published_example",
  ],
  // Array<string> | Filter by date_revised (optional)
  dateRevised: [
    "date_revised_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by donors (optional)
  donors: [
    "donors_example",
  ],
  // Array<string> | Filter by file_sets (optional)
  fileSets: [
    "file_sets_example",
  ],
  // Array<string> | Filter by issue (optional)
  issue: [
    "issue_example",
  ],
  // Array<string> | Filter by journal (optional)
  journal: [
    "journal_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by page (optional)
  page: [
    "page_example",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<number> | Filter by publication_year (optional)
  publicationYear: [
    1,
  ],
  // Array<'community' | 'IGVF' | 'ENCODE'> | Filter by published_by (optional)
  publishedBy: [
    "community",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by samples (optional)
  samples: [
    "samples_example",
  ],
  // Array<string> | Filter by software (optional)
  software: [
    "software_example",
  ],
  // Array<string> | Filter by software_versions (optional)
  softwareVersions: [
    "software_versions_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    "title_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by volume (optional)
  volume: [
    "volume_example",
  ],
  // Array<string> | Filter by workflows (optional)
  workflows: [
    "workflows_example",
  ],
};

apiInstance.publications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **_abstract** | **Array&lt;string&gt;** | Filter by abstract | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **authors** | **Array&lt;string&gt;** | Filter by authors | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **datePublished** | **Array&lt;string&gt;** | Filter by date_published | (optional) defaults to undefined
 **dateRevised** | **Array&lt;string&gt;** | Filter by date_revised | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **donors** | **Array&lt;string&gt;** | Filter by donors | (optional) defaults to undefined
 **fileSets** | **Array&lt;string&gt;** | Filter by file_sets | (optional) defaults to undefined
 **issue** | **Array&lt;string&gt;** | Filter by issue | (optional) defaults to undefined
 **journal** | **Array&lt;string&gt;** | Filter by journal | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **page** | **Array&lt;string&gt;** | Filter by page | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publicationYear** | **Array&lt;number&gt;** | Filter by publication_year | (optional) defaults to undefined
 **publishedBy** | **Array<&#39;community&#39; &#124; &#39;IGVF&#39; &#124; &#39;ENCODE&#39;>** | Filter by published_by | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **samples** | **Array&lt;string&gt;** | Filter by samples | (optional) defaults to undefined
 **software** | **Array&lt;string&gt;** | Filter by software | (optional) defaults to undefined
 **softwareVersions** | **Array&lt;string&gt;** | Filter by software_versions | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **title** | **Array&lt;string&gt;** | Filter by title | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **volume** | **Array&lt;string&gt;** | Filter by volume | (optional) defaults to undefined
 **workflows** | **Array&lt;string&gt;** | Filter by workflows | (optional) defaults to undefined


### Return type

**PublicationResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **referenceFiles**
> ReferenceFileResults referenceFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiReferenceFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by anvil_url (optional)
  anvilUrl: [
    "anvil_url_example",
  ],
  // Array<'GRCh38' | 'hg19' | 'GRCm39' | 'mm10'> | Filter by assembly (optional)
  assembly: [
    "GRCh38",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<boolean> | Filter by controlled_access (optional)
  controlledAccess: [
    true,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENSEMBL:UR,rZ",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<boolean> | Filter by external (optional)
  external: [
    true,
  ],
  // Array<string> | Filter by external_id (optional)
  externalId: [
    "external_id_example",
  ],
  // Array<'bed' | 'csv' | 'dat' | 'fasta' | 'gaf' | 'gds' | 'gtf' | 'obo' | 'owl' | 'PWM' | 'tar' | 'tsv' | 'txt' | 'vcf' | 'xml'> | Filter by file_format (optional)
  fileFormat: [
    "bed",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<'bed12' | 'bed3' | 'bed3+' | 'bed5' | 'bed6' | 'bed6+' | 'bed9' | 'bed9+' | 'mpra_starr'> | Filter by file_format_type (optional)
  fileFormatType: [
    "bed12",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<string> | Filter by source_url (optional)
  sourceUrl: [
    "source_url_example",
  ],
  // Array<string> | Filter by sources (optional)
  sources: [
    "sources_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'> | Filter by transcriptome_annotation (optional)
  transcriptomeAnnotation: [
    "GENCODE 40",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.referenceFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **anvilUrl** | **Array&lt;string&gt;** | Filter by anvil_url | (optional) defaults to undefined
 **assembly** | **Array<&#39;GRCh38&#39; &#124; &#39;hg19&#39; &#124; &#39;GRCm39&#39; &#124; &#39;mm10&#39;>** | Filter by assembly | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **controlledAccess** | **Array&lt;boolean&gt;** | Filter by controlled_access | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **external** | **Array&lt;boolean&gt;** | Filter by external | (optional) defaults to undefined
 **externalId** | **Array&lt;string&gt;** | Filter by external_id | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;bed&#39; &#124; &#39;csv&#39; &#124; &#39;dat&#39; &#124; &#39;fasta&#39; &#124; &#39;gaf&#39; &#124; &#39;gds&#39; &#124; &#39;gtf&#39; &#124; &#39;obo&#39; &#124; &#39;owl&#39; &#124; &#39;PWM&#39; &#124; &#39;tar&#39; &#124; &#39;tsv&#39; &#124; &#39;txt&#39; &#124; &#39;vcf&#39; &#124; &#39;xml&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileFormatType** | **Array<&#39;bed12&#39; &#124; &#39;bed3&#39; &#124; &#39;bed3+&#39; &#124; &#39;bed5&#39; &#124; &#39;bed6&#39; &#124; &#39;bed6+&#39; &#124; &#39;bed9&#39; &#124; &#39;bed9+&#39; &#124; &#39;mpra_starr&#39;>** | Filter by file_format_type | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **sourceUrl** | **Array&lt;string&gt;** | Filter by source_url | (optional) defaults to undefined
 **sources** | **Array&lt;string&gt;** | Filter by sources | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **transcriptomeAnnotation** | **Array<&#39;GENCODE 40&#39; &#124; &#39;GENCODE 41&#39; &#124; &#39;GENCODE 42&#39; &#124; &#39;GENCODE 43&#39; &#124; &#39;GENCODE 44&#39; &#124; &#39;GENCODE 45&#39; &#124; &#39;GENCODE M30&#39; &#124; &#39;GENCODE M31&#39; &#124; &#39;GENCODE M32&#39; &#124; &#39;GENCODE M33&#39; &#124; &#39;GENCODE M34&#39;>** | Filter by transcriptome_annotation | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**ReferenceFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **report**
> string report()

Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiReportRequest = {
  // string | Query string for searching. (optional)
  query: "query_example",
  // Array<string> | Filter by item type. (optional)
  type: [
    "type_example",
  ],
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Does not work with limit=all. (optional)
  sort: [
    "sort_example",
  ],
  // any | Any field from any item type can be used as a filter. Use \'!\' at end of field name for negation and \'lt:\', \'lte:\', \'gt:\', \'gte:\' with value for range queries on numeric fields. Examples: {\'status!\': \'in progress\', \'file_size\': \'gte:30000\'} (optional)
  fieldFilters: {},
  // Array<string> | Fields to include in the response. Can be repeated for multiple fields. (optional)
  include_fields: [
    "field_example",
  ],
  // 'object' | 'embedded' | Object with links, or object with some links embedded. (optional)
  frame: "object",
};

apiInstance.report(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **type** | **Array&lt;string&gt;** | Filter by item type. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **fieldFilters** | **any** | Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;} | (optional) defaults to undefined
 **include_fields** | **Array&lt;string&gt;** | Fields to include in the response. Can be repeated for multiple fields. | (optional) defaults to undefined
 **frame** | [**&#39;object&#39; | &#39;embedded&#39;**]**Array<&#39;object&#39; &#124; &#39;embedded&#39;>** | Object with links, or object with some links embedded. | (optional) defaults to undefined


### Return type

**string**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rodentDonors**
> RodentDonorResults rodentDonors()

Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiRodentDonorsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "ENCODE:ENCDO480TGS",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<string> | Filter by genotype (optional)
  genotype: [
    "genotype_example",
  ],
  // Array<boolean> | Filter by individual_rodent (optional)
  individualRodent: [
    true,
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by lot_id (optional)
  lotId: [
    "k",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by phenotypic_features.@id (optional)
  phenotypicFeaturesId: [
    "phenotypic_features.@id_example",
  ],
  // Array<string> | Filter by phenotypic_features.feature.@id (optional)
  phenotypicFeaturesFeatureId: [
    "phenotypic_features.feature.@id_example",
  ],
  // Array<string> | Filter by phenotypic_features.feature.term_id (optional)
  phenotypicFeaturesFeatureTermId: [
    "NCIT:C80728",
  ],
  // Array<string> | Filter by phenotypic_features.feature.term_name (optional)
  phenotypicFeaturesFeatureTermName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by phenotypic_features.observation_date (optional)
  phenotypicFeaturesObservationDate: [
    "phenotypic_features.observation_date_example",
  ],
  // Array<'meter' | 'micromole' | 'nanogram' | 'microgram' | 'milligram' | 'gram' | 'kilogram' | 'milli-International Unit per milliliter' | 'picogram per milliliter' | 'nanogram per milliliter' | 'milligram per deciliter'> | Filter by phenotypic_features.quantity_units (optional)
  phenotypicFeaturesQuantityUnits: [
    "meter",
  ],
  // Array<string> | Filter by product_id (optional)
  productId: [
    "k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by rodent_identifier (optional)
  rodentIdentifier: [
    "rodent_identifier_example",
  ],
  // Array<'male' | 'female' | 'unspecified'> | Filter by sex (optional)
  sex: [
    "male",
  ],
  // Array<string> | Filter by sources.@id (optional)
  sourcesId: [
    "sources.@id_example",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by strain (optional)
  strain: [
    "strain_example",
  ],
  // Array<'A/J (AJ)' | 'C57BL/6J (B6)' | '129S1/SvImJ (129)' | 'NOD/ShiLtJ (NOD)' | 'NZO/H1LtJ (NZO)' | 'CAST/EiJ (CAST)' | 'PWK/PhJ (PWK)' | 'WSB/EiJ (WSB)' | 'CAST (M. m. castaneus)' | 'WSB (M. m. domesticus)' | 'PWK (M. m. musculus)'> | Filter by strain_background (optional)
  strainBackground: [
    "A/J (AJ)",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'Mus musculus'> | Filter by taxa (optional)
  taxa: [
    "Mus musculus",
  ],
  // Array<string> | Filter by url (optional)
  url: [
    "url_example",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<boolean> | Filter by virtual (optional)
  virtual: [
    true,
  ],
};

apiInstance.rodentDonors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **genotype** | **Array&lt;string&gt;** | Filter by genotype | (optional) defaults to undefined
 **individualRodent** | **Array&lt;boolean&gt;** | Filter by individual_rodent | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lotId** | **Array&lt;string&gt;** | Filter by lot_id | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **phenotypicFeaturesId** | **Array&lt;string&gt;** | Filter by phenotypic_features.@id | (optional) defaults to undefined
 **phenotypicFeaturesFeatureId** | **Array&lt;string&gt;** | Filter by phenotypic_features.feature.@id | (optional) defaults to undefined
 **phenotypicFeaturesFeatureTermId** | **Array&lt;string&gt;** | Filter by phenotypic_features.feature.term_id | (optional) defaults to undefined
 **phenotypicFeaturesFeatureTermName** | **Array&lt;string&gt;** | Filter by phenotypic_features.feature.term_name | (optional) defaults to undefined
 **phenotypicFeaturesObservationDate** | **Array&lt;string&gt;** | Filter by phenotypic_features.observation_date | (optional) defaults to undefined
 **phenotypicFeaturesQuantityUnits** | **Array<&#39;meter&#39; &#124; &#39;micromole&#39; &#124; &#39;nanogram&#39; &#124; &#39;microgram&#39; &#124; &#39;milligram&#39; &#124; &#39;gram&#39; &#124; &#39;kilogram&#39; &#124; &#39;milli-International Unit per milliliter&#39; &#124; &#39;picogram per milliliter&#39; &#124; &#39;nanogram per milliliter&#39; &#124; &#39;milligram per deciliter&#39;>** | Filter by phenotypic_features.quantity_units | (optional) defaults to undefined
 **productId** | **Array&lt;string&gt;** | Filter by product_id | (optional) defaults to undefined
 **publicationIdentifiers** | **Array&lt;string&gt;** | Filter by publication_identifiers | (optional) defaults to undefined
 **publications** | **Array&lt;string&gt;** | Filter by publications | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **rodentIdentifier** | **Array&lt;string&gt;** | Filter by rodent_identifier | (optional) defaults to undefined
 **sex** | **Array<&#39;male&#39; &#124; &#39;female&#39; &#124; &#39;unspecified&#39;>** | Filter by sex | (optional) defaults to undefined
 **sourcesId** | **Array&lt;string&gt;** | Filter by sources.@id | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **strain** | **Array&lt;string&gt;** | Filter by strain | (optional) defaults to undefined
 **strainBackground** | **Array<&#39;A/J (AJ)&#39; &#124; &#39;C57BL/6J (B6)&#39; &#124; &#39;129S1/SvImJ (129)&#39; &#124; &#39;NOD/ShiLtJ (NOD)&#39; &#124; &#39;NZO/H1LtJ (NZO)&#39; &#124; &#39;CAST/EiJ (CAST)&#39; &#124; &#39;PWK/PhJ (PWK)&#39; &#124; &#39;WSB/EiJ (WSB)&#39; &#124; &#39;CAST (M. m. castaneus)&#39; &#124; &#39;WSB (M. m. domesticus)&#39; &#124; &#39;PWK (M. m. musculus)&#39;>** | Filter by strain_background | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **taxa** | **Array<&#39;Mus musculus&#39;>** | Filter by taxa | (optional) defaults to undefined
 **url** | **Array&lt;string&gt;** | Filter by url | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **virtual** | **Array&lt;boolean&gt;** | Filter by virtual | (optional) defaults to undefined


### Return type

**RodentDonorResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sampleTerms**
> SampleTermResults sampleTerms()

Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiSampleTermsRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by ancestors (optional)
  ancestors: [
    "ancestors_example",
  ],
  // Array<string> | Filter by cell_slims (optional)
  cellSlims: [
    "cell_slims_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "DepMap:ACH-480728",
  ],
  // Array<string> | Filter by deprecated_ntr_terms (optional)
  deprecatedNtrTerms: [
    "NTR:48072888",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by developmental_slims (optional)
  developmentalSlims: [
    "developmental_slims_example",
  ],
  // Array<string> | Filter by is_a (optional)
  isA: [
    "is_a_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "name_example",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by ontology (optional)
  ontology: [
    "ontology_example",
  ],
  // Array<string> | Filter by organ_slims (optional)
  organSlims: [
    "organ_slims_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by synonyms (optional)
  synonyms: [
    "synonyms_example",
  ],
  // Array<string> | Filter by system_slims (optional)
  systemSlims: [
    "system_slims_example",
  ],
  // Array<string> | Filter by term_id (optional)
  termId: [
    "UBERON:80728",
  ],
  // Array<string> | Filter by term_name (optional)
  termName: [
    "WAa6w77ikCX*cKCmv|`K/V+w>\uu!",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
};

apiInstance.sampleTerms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **ancestors** | **Array&lt;string&gt;** | Filter by ancestors | (optional) defaults to undefined
 **cellSlims** | **Array&lt;string&gt;** | Filter by cell_slims | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **deprecatedNtrTerms** | **Array&lt;string&gt;** | Filter by deprecated_ntr_terms | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **developmentalSlims** | **Array&lt;string&gt;** | Filter by developmental_slims | (optional) defaults to undefined
 **isA** | **Array&lt;string&gt;** | Filter by is_a | (optional) defaults to undefined
 **name** | **Array&lt;string&gt;** | Filter by name | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **ontology** | **Array&lt;string&gt;** | Filter by ontology | (optional) defaults to undefined
 **organSlims** | **Array&lt;string&gt;** | Filter by organ_slims | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **status** | **Array<&#39;archived&#39; &#124; &#39;deleted&#39; &#124; &#39;in progress&#39; &#124; &#39;released&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **synonyms** | **Array&lt;string&gt;** | Filter by synonyms | (optional) defaults to undefined
 **systemSlims** | **Array&lt;string&gt;** | Filter by system_slims | (optional) defaults to undefined
 **termId** | **Array&lt;string&gt;** | Filter by term_id | (optional) defaults to undefined
 **termName** | **Array&lt;string&gt;** | Filter by term_name | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined


### Return type

**SampleTermResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **schemaForItemType**
> any schemaForItemType()

Returns JSON schemas of all the item types defined in IGVF

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiSchemaForItemTypeRequest = {
  // ItemType | The name of the item type
  itemType: "AccessKey",
};

apiInstance.schemaForItemType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemType** | **ItemType** | The name of the item type | defaults to undefined


### Return type

**any**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **schemas**
> any schemas()

Returns JSON schemas of all the item types defined in IGVF

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:any = {};

apiInstance.schemas(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **search**
> SearchResults search()

Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiSearchRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "query_example",
  // Array<string> | Filter by item type. (optional)
  type: [
    "type_example",
  ],
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Does not work with limit=all. (optional)
  sort: [
    "sort_example",
  ],
  // any | Any field from any item type can be used as a filter. Use \'!\' at end of field name for negation and \'lt:\', \'lte:\', \'gt:\', \'gte:\' with value for range queries on numeric fields. Examples: {\'status!\': \'in progress\', \'file_size\': \'gte:30000\'} (optional)
  fieldFilters: {},
};

apiInstance.search(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **type** | **Array&lt;string&gt;** | Filter by item type. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **fieldFilters** | **any** | Any field from any item type can be used as a filter. Use \&#39;!\&#39; at end of field name for negation and \&#39;lt:\&#39;, \&#39;lte:\&#39;, \&#39;gt:\&#39;, \&#39;gte:\&#39; with value for range queries on numeric fields. Examples: {\&#39;status!\&#39;: \&#39;in progress\&#39;, \&#39;file_size\&#39;: \&#39;gte:30000\&#39;} | (optional) defaults to undefined


### Return type

**SearchResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | No results found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sequenceFiles**
> SequenceFileResults sequenceFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiSequenceFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<string> | Filter by anvil_url (optional)
  anvilUrl: [
    "anvil_url_example",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<boolean> | Filter by controlled_access (optional)
  controlledAccess: [
    true,
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "SRA:SRX80728",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'bam' | 'fastq' | 'pod5'> | Filter by file_format (optional)
  fileFormat: [
    "bam",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<string> | Filter by flowcell_id (optional)
  flowcellId: [
    "G",
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<'R1' | 'R2' | 'R3' | 'I1' | 'I2'> | Filter by illumina_read_type (optional)
  illuminaReadType: [
    "R1",
  ],
  // Array<string> | Filter by index (optional)
  index: [
    "index_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<number> | Filter by lane (optional)
  lane: [
    1,
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<number> | Filter by maximum_read_length (optional)
  maximumReadLength: [
    0,
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<number> | Filter by mean_read_length (optional)
  meanReadLength: [
    0,
  ],
  // Array<number> | Filter by minimum_read_length (optional)
  minimumReadLength: [
    0,
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<number> | Filter by read_count (optional)
  readCount: [
    0,
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<string> | Filter by seqspecs (optional)
  seqspecs: [
    "seqspecs_example",
  ],
  // Array<'HiSeq SBS Kit v4' | 'HiSeq SR Cluster Kit v4-cBot-HS' | 'HiSeq PE Cluster Kit v4-cBot-HS' | 'HiSeq SR Rapid Cluster Kit v2' | 'HiSeq PE Rapid Cluster Kit v2' | 'HiSeq Rapid SBS Kit v2' | 'HiSeq 3000/4000 SBS Kit' | 'HiSeq 3000/4000 SR Cluster Kit' | 'HiSeq 3000/4000 PE Cluster Kit' | 'MiSeq Reagent Kit v2' | 'NextSeq 500 Mid Output Kit' | 'NextSeq 500 High Output Kit' | 'NextSeq 500 Mid Output v2 Kit' | 'NextSeq 500 High Output v2 Kit' | 'NextSeq 500/550 Mid-Output v2.5 Kit' | 'NextSeq 500/550 High-Output v2.5 Kit' | 'TG NextSeq 500/550 Mid-Output Kit v2.5' | 'TG NextSeq 500/550 High-Output Kit v2.5' | 'NextSeq 1000/2000 P1 Reagent Kit' | 'NextSeq 1000/2000 P2 Reagent Kit' | 'NextSeq 1000/2000 P3 Reagent Kit' | 'NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit' | 'NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P3 XLEAP-SBS Reagent Kit' | 'NextSeq 2000 P4 XLEAP-SBS Reagent Kit' | 'NovaSeq 6000 SP Reagent Kit v1.5' | 'NovaSeq 6000 S1 Reagent Kit v1.5' | 'NovaSeq 6000 S2 Reagent Kit v1.5' | 'NovaSeq 6000 S4 Reagent Kit v1.5' | 'NovaSeq X Series 10B Reagent Kit' | 'ONT Ligation Sequencing Kit V14' | 'Sequel sequencing kit 3.0' | 'Sequel II sequencing kit 2.0'> | Filter by sequencing_kit (optional)
  sequencingKit: [
    "HiSeq SBS Kit v4",
  ],
  // Array<string> | Filter by sequencing_platform (optional)
  sequencingPlatform: [
    "sequencing_platform_example",
  ],
  // Array<number> | Filter by sequencing_run (optional)
  sequencingRun: [
    1,
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.sequenceFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **anvilUrl** | **Array&lt;string&gt;** | Filter by anvil_url | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **controlledAccess** | **Array&lt;boolean&gt;** | Filter by controlled_access | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;bam&#39; &#124; &#39;fastq&#39; &#124; &#39;pod5&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **flowcellId** | **Array&lt;string&gt;** | Filter by flowcell_id | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **illuminaReadType** | **Array<&#39;R1&#39; &#124; &#39;R2&#39; &#124; &#39;R3&#39; &#124; &#39;I1&#39; &#124; &#39;I2&#39;>** | Filter by illumina_read_type | (optional) defaults to undefined
 **index** | **Array&lt;string&gt;** | Filter by index | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lane** | **Array&lt;number&gt;** | Filter by lane | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **maximumReadLength** | **Array&lt;number&gt;** | Filter by maximum_read_length | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **meanReadLength** | **Array&lt;number&gt;** | Filter by mean_read_length | (optional) defaults to undefined
 **minimumReadLength** | **Array&lt;number&gt;** | Filter by minimum_read_length | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **readCount** | **Array&lt;number&gt;** | Filter by read_count | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **seqspecs** | **Array&lt;string&gt;** | Filter by seqspecs | (optional) defaults to undefined
 **sequencingKit** | **Array<&#39;HiSeq SBS Kit v4&#39; &#124; &#39;HiSeq SR Cluster Kit v4-cBot-HS&#39; &#124; &#39;HiSeq PE Cluster Kit v4-cBot-HS&#39; &#124; &#39;HiSeq SR Rapid Cluster Kit v2&#39; &#124; &#39;HiSeq PE Rapid Cluster Kit v2&#39; &#124; &#39;HiSeq Rapid SBS Kit v2&#39; &#124; &#39;HiSeq 3000/4000 SBS Kit&#39; &#124; &#39;HiSeq 3000/4000 SR Cluster Kit&#39; &#124; &#39;HiSeq 3000/4000 PE Cluster Kit&#39; &#124; &#39;MiSeq Reagent Kit v2&#39; &#124; &#39;NextSeq 500 Mid Output Kit&#39; &#124; &#39;NextSeq 500 High Output Kit&#39; &#124; &#39;NextSeq 500 Mid Output v2 Kit&#39; &#124; &#39;NextSeq 500 High Output v2 Kit&#39; &#124; &#39;NextSeq 500/550 Mid-Output v2.5 Kit&#39; &#124; &#39;NextSeq 500/550 High-Output v2.5 Kit&#39; &#124; &#39;TG NextSeq 500/550 Mid-Output Kit v2.5&#39; &#124; &#39;TG NextSeq 500/550 High-Output Kit v2.5&#39; &#124; &#39;NextSeq 1000/2000 P1 Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P2 Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P3 Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P1 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NextSeq 1000/2000 P2 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NextSeq 2000 P3 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NextSeq 2000 P4 XLEAP-SBS Reagent Kit&#39; &#124; &#39;NovaSeq 6000 SP Reagent Kit v1.5&#39; &#124; &#39;NovaSeq 6000 S1 Reagent Kit v1.5&#39; &#124; &#39;NovaSeq 6000 S2 Reagent Kit v1.5&#39; &#124; &#39;NovaSeq 6000 S4 Reagent Kit v1.5&#39; &#124; &#39;NovaSeq X Series 10B Reagent Kit&#39; &#124; &#39;ONT Ligation Sequencing Kit V14&#39; &#124; &#39;Sequel sequencing kit 3.0&#39; &#124; &#39;Sequel II sequencing kit 2.0&#39;>** | Filter by sequencing_kit | (optional) defaults to undefined
 **sequencingPlatform** | **Array&lt;string&gt;** | Filter by sequencing_platform | (optional) defaults to undefined
 **sequencingRun** | **Array&lt;number&gt;** | Filter by sequencing_run | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**SequenceFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signalFiles**
> SignalFileResults signalFiles()

Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiSignalFilesRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by accession (optional)
  accession: [
    "accession_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by alternate_accessions (optional)
  alternateAccessions: [
    "alternate_accessions_example",
  ],
  // Array<string> | Filter by analysis_step_version (optional)
  analysisStepVersion: [
    "analysis_step_version_example",
  ],
  // Array<'GRCh38' | 'GRCm39'> | Filter by assembly (optional)
  assembly: [
    "GRCh38",
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<'ClinGen' | 'ENCODE' | 'GREGoR' | 'IGVF_catalog_beta_v0.1' | 'IGVF_catalog_beta_v0.2' | 'IGVF_catalog_beta_v0.3' | 'IGVF_catalog_beta_v0.4' | 'MaveDB' | 'MPRAbase' | 'Vista'> | Filter by collections (optional)
  collections: [
    "ClinGen",
  ],
  // Array<string> | Filter by content_md5sum (optional)
  contentMd5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<string> | Filter by content_summary (optional)
  contentSummary: [
    "content_summary_example",
  ],
  // Array<string> | Filter by content_type (optional)
  contentType: [
    "content_type_example",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by dbxrefs (optional)
  dbxrefs: [
    "/",
  ],
  // Array<string> | Filter by derived_from (optional)
  derivedFrom: [
    "derived_from_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by documents (optional)
  documents: [
    "documents_example",
  ],
  // Array<'bigWig'> | Filter by file_format (optional)
  fileFormat: [
    "bigWig",
  ],
  // Array<string> | Filter by file_format_specifications (optional)
  fileFormatSpecifications: [
    "file_format_specifications_example",
  ],
  // Array<string> | Filter by file_set (optional)
  fileSet: [
    "file_set_example",
  ],
  // Array<number> | Filter by file_size (optional)
  fileSize: [
    0,
  ],
  // Array<boolean> | Filter by filtered (optional)
  filtered: [
    true,
  ],
  // Array<string> | Filter by gene_list_for (optional)
  geneListFor: [
    "gene_list_for_example",
  ],
  // Array<string> | Filter by href (optional)
  href: [
    "href_example",
  ],
  // Array<string> | Filter by input_file_for (optional)
  inputFileFor: [
    "input_file_for_example",
  ],
  // Array<string> | Filter by integrated_in (optional)
  integratedIn: [
    "integrated_in_example",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by loci_list_for (optional)
  lociListFor: [
    "loci_list_for_example",
  ],
  // Array<string> | Filter by md5sum (optional)
  md5sum: [
    "F325375E030FCCBA00917317C5747731",
  ],
  // Array<boolean> | Filter by normalized (optional)
  normalized: [
    true,
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by reference_files (optional)
  referenceFiles: [
    "reference_files_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by revoke_detail (optional)
  revokeDetail: [
    "k",
  ],
  // Array<string> | Filter by s3_uri (optional)
  s3Uri: [
    "s3_uri_example",
  ],
  // Array<string> | Filter by start_view_position (optional)
  startViewPosition: [
    "chrM:80728",
  ],
  // Array<'in progress' | 'released' | 'deleted' | 'replaced' | 'revoked' | 'archived'> | Filter by status (optional)
  status: [
    "in progress",
  ],
  // Array<'plus' | 'minus' | 'unstranded'> | Filter by strand_specificity (optional)
  strandSpecificity: [
    "plus",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitted_file_name (optional)
  submittedFileName: [
    "submitted_file_name_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<'GENCODE 40' | 'GENCODE 41' | 'GENCODE 42' | 'GENCODE 43' | 'GENCODE 44' | 'GENCODE 45' | 'GENCODE M30' | 'GENCODE M31' | 'GENCODE M32' | 'GENCODE M33' | 'GENCODE M34'> | Filter by transcriptome_annotation (optional)
  transcriptomeAnnotation: [
    "GENCODE 40",
  ],
  // Array<'pending' | 'file not found' | 'invalidated' | 'validated'> | Filter by upload_status (optional)
  uploadStatus: [
    "pending",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by validation_error_detail (optional)
  validationErrorDetail: [
    "validation_error_detail_example",
  ],
};

apiInstance.signalFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **accession** | **Array&lt;string&gt;** | Filter by accession | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **alternateAccessions** | **Array&lt;string&gt;** | Filter by alternate_accessions | (optional) defaults to undefined
 **analysisStepVersion** | **Array&lt;string&gt;** | Filter by analysis_step_version | (optional) defaults to undefined
 **assembly** | **Array<&#39;GRCh38&#39; &#124; &#39;GRCm39&#39;>** | Filter by assembly | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined
 **collections** | **Array<&#39;ClinGen&#39; &#124; &#39;ENCODE&#39; &#124; &#39;GREGoR&#39; &#124; &#39;IGVF_catalog_beta_v0.1&#39; &#124; &#39;IGVF_catalog_beta_v0.2&#39; &#124; &#39;IGVF_catalog_beta_v0.3&#39; &#124; &#39;IGVF_catalog_beta_v0.4&#39; &#124; &#39;MaveDB&#39; &#124; &#39;MPRAbase&#39; &#124; &#39;Vista&#39;>** | Filter by collections | (optional) defaults to undefined
 **contentMd5sum** | **Array&lt;string&gt;** | Filter by content_md5sum | (optional) defaults to undefined
 **contentSummary** | **Array&lt;string&gt;** | Filter by content_summary | (optional) defaults to undefined
 **contentType** | **Array&lt;string&gt;** | Filter by content_type | (optional) defaults to undefined
 **creationTimestamp** | **Array&lt;string&gt;** | Filter by creation_timestamp | (optional) defaults to undefined
 **dbxrefs** | **Array&lt;string&gt;** | Filter by dbxrefs | (optional) defaults to undefined
 **derivedFrom** | **Array&lt;string&gt;** | Filter by derived_from | (optional) defaults to undefined
 **description** | **Array&lt;string&gt;** | Filter by description | (optional) defaults to undefined
 **documents** | **Array&lt;string&gt;** | Filter by documents | (optional) defaults to undefined
 **fileFormat** | **Array<&#39;bigWig&#39;>** | Filter by file_format | (optional) defaults to undefined
 **fileFormatSpecifications** | **Array&lt;string&gt;** | Filter by file_format_specifications | (optional) defaults to undefined
 **fileSet** | **Array&lt;string&gt;** | Filter by file_set | (optional) defaults to undefined
 **fileSize** | **Array&lt;number&gt;** | Filter by file_size | (optional) defaults to undefined
 **filtered** | **Array&lt;boolean&gt;** | Filter by filtered | (optional) defaults to undefined
 **geneListFor** | **Array&lt;string&gt;** | Filter by gene_list_for | (optional) defaults to undefined
 **href** | **Array&lt;string&gt;** | Filter by href | (optional) defaults to undefined
 **inputFileFor** | **Array&lt;string&gt;** | Filter by input_file_for | (optional) defaults to undefined
 **integratedIn** | **Array&lt;string&gt;** | Filter by integrated_in | (optional) defaults to undefined
 **labId** | **Array&lt;string&gt;** | Filter by lab.@id | (optional) defaults to undefined
 **labTitle** | **Array&lt;string&gt;** | Filter by lab.title | (optional) defaults to undefined
 **lociListFor** | **Array&lt;string&gt;** | Filter by loci_list_for | (optional) defaults to undefined
 **md5sum** | **Array&lt;string&gt;** | Filter by md5sum | (optional) defaults to undefined
 **normalized** | **Array&lt;boolean&gt;** | Filter by normalized | (optional) defaults to undefined
 **notes** | **Array&lt;string&gt;** | Filter by notes | (optional) defaults to undefined
 **referenceFiles** | **Array&lt;string&gt;** | Filter by reference_files | (optional) defaults to undefined
 **releaseTimestamp** | **Array&lt;string&gt;** | Filter by release_timestamp | (optional) defaults to undefined
 **revokeDetail** | **Array&lt;string&gt;** | Filter by revoke_detail | (optional) defaults to undefined
 **s3Uri** | **Array&lt;string&gt;** | Filter by s3_uri | (optional) defaults to undefined
 **startViewPosition** | **Array&lt;string&gt;** | Filter by start_view_position | (optional) defaults to undefined
 **status** | **Array<&#39;in progress&#39; &#124; &#39;released&#39; &#124; &#39;deleted&#39; &#124; &#39;replaced&#39; &#124; &#39;revoked&#39; &#124; &#39;archived&#39;>** | Filter by status | (optional) defaults to undefined
 **strandSpecificity** | **Array<&#39;plus&#39; &#124; &#39;minus&#39; &#124; &#39;unstranded&#39;>** | Filter by strand_specificity | (optional) defaults to undefined
 **submittedById** | **Array&lt;string&gt;** | Filter by submitted_by.@id | (optional) defaults to undefined
 **submittedByTitle** | **Array&lt;string&gt;** | Filter by submitted_by.title | (optional) defaults to undefined
 **submittedFileName** | **Array&lt;string&gt;** | Filter by submitted_file_name | (optional) defaults to undefined
 **submitterComment** | **Array&lt;string&gt;** | Filter by submitter_comment | (optional) defaults to undefined
 **summary** | **Array&lt;string&gt;** | Filter by summary | (optional) defaults to undefined
 **transcriptomeAnnotation** | **Array<&#39;GENCODE 40&#39; &#124; &#39;GENCODE 41&#39; &#124; &#39;GENCODE 42&#39; &#124; &#39;GENCODE 43&#39; &#124; &#39;GENCODE 44&#39; &#124; &#39;GENCODE 45&#39; &#124; &#39;GENCODE M30&#39; &#124; &#39;GENCODE M31&#39; &#124; &#39;GENCODE M32&#39; &#124; &#39;GENCODE M33&#39; &#124; &#39;GENCODE M34&#39;>** | Filter by transcriptome_annotation | (optional) defaults to undefined
 **uploadStatus** | **Array<&#39;pending&#39; &#124; &#39;file not found&#39; &#124; &#39;invalidated&#39; &#124; &#39;validated&#39;>** | Filter by upload_status | (optional) defaults to undefined
 **uuid** | **Array&lt;string&gt;** | Filter by uuid | (optional) defaults to undefined
 **validationErrorDetail** | **Array&lt;string&gt;** | Filter by validation_error_detail | (optional) defaults to undefined


### Return type

**SignalFileResults**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **software**
> SoftwareResults software()

Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IgvfApi(configuration);

let body:.IgvfApiSoftwareRequest = {
  // 'object' | Constant value. Do not set.
  frame: "object",
  // string | Query string for searching. (optional)
  query: "variant flowfish jurkat",
  // Limit | Maximum number of results to return. Default is 25. Use \'all\' for all results. (optional)
  limit: null,
  // Array<string> | Fields to sort results by. Prefix with \'-\' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
  sort: [
    "-file_size",
  ],
  // Array<string> | Filter by @id (optional)
  id: [
    "@id_example",
  ],
  // Array<string> | Filter by aliases (optional)
  aliases: [
    `nidhi-sahni:((UOqK2jZXw(V3+YZbwvAhY!HBhHC0DKh1sYnTbNtnG9q-YP'*v*,6_IDjr'DxlMtH+lgSTBT+QD9M9g-t0oSv	SZZQOrz2lpDeYZ.RpDtXVbQhtECh93,s1bA6OCNOr8cL3drw	+*Su$14UL+K.,QAE$JEfz0IM33uwFNK_bqhCAtL3LQNx*FKc$uTSpjgm5XfXyvYogie,GaqnIhD_zfpfFrEampVQ
SafHj+SnG9sb8U3D
j(3*x7O5n0Cu(K.j,k9McFNSuqT7U8fyRftqz4et)Bt_nPCNbBHVfpKrlL-06Cm(F_4'c+0vNm'V.3T
AYuKt2y),426a-Qf7Mj-lvlAMpdNlxWhoszbP_uA24,Rgsph,U(7i-S3)_8Uq$+Q*sknZwZ497VJbO0i.x38tBJaPER_Z__Ui6w6*gT1$zfVy5q20pN'rGHv!b7J4)X4rm.lWhKu!.hjpmgsopOR39jKvQY0)ZZZT6Q7uP*mCpQGaGJ_cQp.a_EQfVFptpNBhkwkYAsjBKxt8fkKIV*CG'9M+RV3PtBe01zOIdN(KBkWqiMQeB!kTi$iT0BnHvW8lv ,nG9j$5Zp8y7H6)'h587()mj)15$j8Plz*k)ilffwJPKVJZjd2!o$OxBvR0N3bDkKj 8dK.F0ocUYsE,LrZ.0V3cXRCz,P!.+B-8cA))rRV...uJea8yx6Qu-0-5y'2ft'GBz	JkMFcg8LnBt0uOuYlkgm3(!SF5yNLWF9v1x(DLPQ*oy(rm$bali$2I,(GkDKuv7c
F(Ws+gRX.EF0T_x*R7p66Z7OAN'xT)_6ynz56*dqTFZTQMWb).6GZqzQk6-T7kWq(,PU'VpSWz$,t5UY'mDwve1Dr_H96'NuPq(dMCDwJv.+	LN''IPh)Pjk(C*r52J.Anij*ZT7326.0Xr0K2ihcjW8rzW,+aBM('e-FqT-a JrORRRLS)2sIj.Ns4xrK72uiYoVL37cRZkD4k.nL-q1LQzSQ
CmuYSafBl_Z(xgOwK9(qHquzFBL3E9oIzZ+q,KPRQRnR2fZF9vHT4pe4c4lWcZ..29QV37DdK+0tGQlclV)W$jri TM5_bGd22UoJy7u(YxIFnNO+O7Ea,0)zlEo93WMMEx4$
!aP0wG*AlZ+8HO'OqnTV7U1_*qMyE8HS4icbyS*sV1(Tbv*b22Pdf'o!YSc$!og0(7fl9DEd,qAUQK1GKK97DR,nn+HSgDMfrO0e.2CSouDLlMme.QSw!F1pg!u0WtM!ISwh!oY_DXTq4uOoA$IEaYjxpCv*z FMhg_*Bpts83,4+LWy4zSuaRKHr7ON'd,pR5gNNbDx_e+hkzJ!60TaZo(O,MHEPwf_iJNYOq_i.0Slne3.*.PAwyyw3v'jG3POh_KO5T7tHTh.Bgs)e4KNg-qNZDwrOHUOB5I4yn*BCp6 _cDZtP4dz'mo)S+j'(vcumBtw$*2R+_GqExz78u.GsHiOReryK)ffL7bLKpe3Ahe1clDyZzoUAF!'j1ji$kk3.dd7*!tqjdIx6DA90P(a3H__88buxkay*VJ0-'uAEVSIRvDWF.RYjOs,hasdi_$.2ii+JcJF4H*u)JF(.7SYUg,zlFXzoK(C2)R(oMTsWg+xowRwu*4bNI4s$IA6M2MZj3_xFpfebFRR1!9(zl.h4KJ-S(9	T_B1Ll*S-7wtDSc4KirxQfWh3kacO8OfR4hvLfB1X0A.f6+'Z)0wSY.(4ZOyNLFA5uq8GO-pQ)VlOMEkJLiN5K
rJ*qQUWb14Z(el!nZsCwGN0AMC7F+K6C4O1NaIpEVu5CcCmtK'qU)H)neM)NupPsU8Hxf_h07!-JSa)khGpCImLigDa'eQXwER03azh1qGHowEj!p8jTSB*nKmv+$jdolj(LbeUMbtzIe-60Wq
2tcWr(bOcL(yaD)bcFf2R6cKH-ok,HlBmZzBK.5-EU(2lXvHX'fxOLVrG_eBJ+lRhALLNTzy)!T.3x_oLqU'rpXufRyJgk9Jt
*td2Mt$BblS+SOyi4$9FC7-'zUX211myv9,XL71,qT)qhutEgghWS(k7fHvt,S_7k1PCYG+FsPNcDQ.(*!,e9isR6
vDBl5H5D8yeyw.(0B6p*
02IfZdN-M9cLju$)6Y_3s2sjCTPC8U4KZFr4j(C
8P-oSx'KIuHd+fjifM63Q0)d2NVDOkg6lHkqWD13T70r.6XgZkCHKrP2kx,a(rC*Vmp
GfK0G(0PafoXj9TkwAAPysX5uKjubgjpVBl1gtYxH7(!NYb0-q8So3Aw0Fiin0pi`,
  ],
  // Array<string> | Filter by award.@id (optional)
  awardId: [
    "award.@id_example",
  ],
  // Array<'affiliate' | 'data analysis' | 'data coordination' | 'functional characterization' | 'mapping' | 'networks' | 'predictive modeling'> | Filter by award.component (optional)
  awardComponent: [
    "affiliate",
  ],
  // Array<string> | Filter by creation_timestamp (optional)
  creationTimestamp: [
    "creation_timestamp_example",
  ],
  // Array<string> | Filter by description (optional)
  description: [
    "k",
  ],
  // Array<string> | Filter by lab.@id (optional)
  labId: [
    "lab.@id_example",
  ],
  // Array<string> | Filter by lab.title (optional)
  labTitle: [
    "lab.title_example",
  ],
  // Array<string> | Filter by name (optional)
  name: [
    "y",
  ],
  // Array<string> | Filter by notes (optional)
  notes: [
    "k",
  ],
  // Array<string> | Filter by publication_identifiers (optional)
  publicationIdentifiers: [
    "PMCID:PMC80728",
  ],
  // Array<string> | Filter by publications (optional)
  publications: [
    "publications_example",
  ],
  // Array<string> | Filter by release_timestamp (optional)
  releaseTimestamp: [
    "release_timestamp_example",
  ],
  // Array<string> | Filter by source_url (optional)
  sourceUrl: [
    "source_url_example",
  ],
  // Array<'archived' | 'deleted' | 'in progress' | 'released'> | Filter by status (optional)
  status: [
    "archived",
  ],
  // Array<string> | Filter by submitted_by.@id (optional)
  submittedById: [
    "submitted_by.@id_example",
  ],
  // Array<string> | Filter by submitted_by.title (optional)
  submittedByTitle: [
    "submitted_by.title_example",
  ],
  // Array<string> | Filter by submitter_comment (optional)
  submitterComment: [
    "k",
  ],
  // Array<string> | Filter by summary (optional)
  summary: [
    "summary_example",
  ],
  // Array<string> | Filter by title (optional)
  title: [
    "k",
  ],
  // Array<'consortium analysis' | 'DACC' | 'processing pipelines'> | Filter by used_by (optional)
  usedBy: [
    "consortium analysis",
  ],
  // Array<string> | Filter by uuid (optional)
  uuid: [
    "uuid_example",
  ],
  // Array<string> | Filter by versions (optional)
  versions: [
    "versions_example",
  ],
};

apiInstance.software(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | [**&#39;object&#39;**]**Array<&#39;object&#39;>** | Constant value. Do not set. | defaults to undefined
 **query** | [**string**] | Query string for searching. | (optional) defaults to undefined
 **limit** | **Limit** | Maximum number of results to return. Default is 25. Use \&#39;all\&#39; for all results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Fields to sort results by. Prefix with \&#39;-\&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | (optional) defaults to undefined
 **id** | **Array&lt;string&gt;** | Filter by @id | (optional) defaults to undefined
 **aliases** | **Array&lt;string&gt;** | Filter by aliases | (optional) defaults to undefined
 **awardId** | **Array&lt;string&gt;** | Filter by award.@id | (optional) defaults to undefined
 **awardComponent** | **Array<&#39;affiliate&#39; &#124; &#39;data analysis&#39; &#124; &#39;data coordination&#39; &#124; &#39;functional characterization&#39; &#124; &#39;mapping&#39; &#124; &#39;networks&#39; &#124; &#39;predictive modeling&#39;>** | Filter by award.component | (optional) defaults to undefined


### Return type

**SoftwareResults**



