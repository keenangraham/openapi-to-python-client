# IgvfProjectApi.Treatment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**lotId** | **String** | The lot identifier provided by the originating lab or vendor. | [optional] 
**productId** | **String** | The product identifier provided by the originating lab or vendor. | [optional] 
**documents** | **[String]** | Documents that describe the treatment protocol details. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**amount** | **Number** | Specific quantity of the applied treatment (used in conjunction with amount_units). | [optional] 
**amountUnits** | **String** | A unit for an amount other than those for time or temperature. | [optional] 
**duration** | **Number** | Duration indicates the time elapsed between the start and end of the treatment. | [optional] 
**durationUnits** | **String** | A unit of time. | [optional] 
**pH** | **Number** | Final pH of the solution containing a chemical compound (if applicable) | [optional] 
**purpose** | **String** | The intended purpose for treating the samples; Activation: treatment is known to activate a pathway in the biosample; Agonist: a substance which is known to initiate a physiological response when combined with a receptor; Antagonist: a substance that is known to interfere with or inhibits the physiological action of another; Control: treatment applied to a sample for control purposes; Differentiation: treatment that is applied to convert a less specialized cell to a more specialized cell; De-differentiation: treatment used to reprogram differentiated cells back to less determined cell states; Perturbation: treatment applied to the sample in order to study the effect of its application; Selection: treatment used to affect biosample in a way that can be used to distinguish cells and select for in the downstream steps; Stimulation: treatment applied to stimulate a cellular pathway. | [optional] 
**postTreatmentTime** | **Number** | Post treatment time in conjunction with post treatment time units is used to specify the time that has passed between the point when biosamples were removed from the treatment solution before being sampled or treated with the next treatment. | [optional] 
**postTreatmentTimeUnits** | **String** | A unit of time. | [optional] 
**temperature** | **Number** | The temperature in Celsius to which the sample was exposed | [optional] 
**temperatureUnits** | **String** | A unit of temperature. | [optional] 
**treatmentType** | **String** | The classification of treatment agent that specifies its exact molecular nature. Chemical type refers to (natural or synthetic) organic/inorganic compounds and also includes drugs, while protein type is restricted to active protein biomolecules that are naturally or artifically synthesized via cellular translation mechanism of converting DNA into a protein. Environmental type referes to other external conditions that directly influence biological processes or reactions within a given environment. Example of chemical type: lactate, ethanol,hydrocortisone, LPS etc. Example of protein type: Interferons, interlukin, antibodies, etc. Example of chemical type: stiffness. | [optional] 
**treatmentTermId** | **String** | Ontology identifier describing a component in the treatment. | [optional] 
**treatmentTermName** | **String** | Ontology term describing a component in the treatment that is the principal component affecting the biosample being treated. Examples: interferon gamma, interleukin-4, Fibroblast growth factor 2, 20-hydroxyecdysone, 5-bromouridine etc. | [optional] 
**depletion** | **Boolean** | Treatment is depleted. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** |  | [optional] 
**biosamplesTreated** | **[String]** | The samples which have been treated using this treatment. | [optional] 



## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)





## Enum: AmountUnitsEnum


* `mg/kg` (value: `"mg/kg"`)

* `mg/mL` (value: `"mg/mL"`)

* `mM` (value: `"mM"`)

* `ng/mL` (value: `"ng/mL"`)

* `nM` (value: `"nM"`)

* `percent` (value: `"percent"`)

* `μg/kg` (value: `"μg/kg"`)

* `μg/kg2` (value: `"μg/kg"`)

* `μg/mL` (value: `"μg/mL"`)

* `μM` (value: `"μM"`)

* `kpa` (value: `"kpa"`)





## Enum: DurationUnitsEnum


* `second` (value: `"second"`)

* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)





## Enum: PurposeEnum


* `activation` (value: `"activation"`)

* `agonist` (value: `"agonist"`)

* `antagonist` (value: `"antagonist"`)

* `control` (value: `"control"`)

* `differentiation` (value: `"differentiation"`)

* `de-differentiation` (value: `"de-differentiation"`)

* `perturbation` (value: `"perturbation"`)

* `selection` (value: `"selection"`)

* `stimulation` (value: `"stimulation"`)





## Enum: PostTreatmentTimeUnitsEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)

* `week` (value: `"week"`)

* `month` (value: `"month"`)





## Enum: TemperatureUnitsEnum


* `Celsius` (value: `"Celsius"`)





## Enum: TreatmentTypeEnum


* `chemical` (value: `"chemical"`)

* `protein` (value: `"protein"`)

* `environmental` (value: `"environmental"`)




