/**
 * IGVF Project API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ItemType.
* @enum {}
* @readonly
*/
export default class ItemType {
    
        /**
         * value: "AccessKey"
         * @const
         */
        "AccessKey" = "AccessKey";

    
        /**
         * value: "AnalysisStep"
         * @const
         */
        "AnalysisStep" = "AnalysisStep";

    
        /**
         * value: "AnalysisStepVersion"
         * @const
         */
        "AnalysisStepVersion" = "AnalysisStepVersion";

    
        /**
         * value: "Award"
         * @const
         */
        "Award" = "Award";

    
        /**
         * value: "Biomarker"
         * @const
         */
        "Biomarker" = "Biomarker";

    
        /**
         * value: "Document"
         * @const
         */
        "Document" = "Document";

    
        /**
         * value: "HumanDonor"
         * @const
         */
        "HumanDonor" = "HumanDonor";

    
        /**
         * value: "RodentDonor"
         * @const
         */
        "RodentDonor" = "RodentDonor";

    
        /**
         * value: "AlignmentFile"
         * @const
         */
        "AlignmentFile" = "AlignmentFile";

    
        /**
         * value: "ConfigurationFile"
         * @const
         */
        "ConfigurationFile" = "ConfigurationFile";

    
        /**
         * value: "GenomeBrowserAnnotationFile"
         * @const
         */
        "GenomeBrowserAnnotationFile" = "GenomeBrowserAnnotationFile";

    
        /**
         * value: "ImageFile"
         * @const
         */
        "ImageFile" = "ImageFile";

    
        /**
         * value: "MatrixFile"
         * @const
         */
        "MatrixFile" = "MatrixFile";

    
        /**
         * value: "ModelFile"
         * @const
         */
        "ModelFile" = "ModelFile";

    
        /**
         * value: "ReferenceFile"
         * @const
         */
        "ReferenceFile" = "ReferenceFile";

    
        /**
         * value: "SequenceFile"
         * @const
         */
        "SequenceFile" = "SequenceFile";

    
        /**
         * value: "SignalFile"
         * @const
         */
        "SignalFile" = "SignalFile";

    
        /**
         * value: "TabularFile"
         * @const
         */
        "TabularFile" = "TabularFile";

    
        /**
         * value: "AnalysisSet"
         * @const
         */
        "AnalysisSet" = "AnalysisSet";

    
        /**
         * value: "AuxiliarySet"
         * @const
         */
        "AuxiliarySet" = "AuxiliarySet";

    
        /**
         * value: "ConstructLibrarySet"
         * @const
         */
        "ConstructLibrarySet" = "ConstructLibrarySet";

    
        /**
         * value: "CuratedSet"
         * @const
         */
        "CuratedSet" = "CuratedSet";

    
        /**
         * value: "MeasurementSet"
         * @const
         */
        "MeasurementSet" = "MeasurementSet";

    
        /**
         * value: "ModelSet"
         * @const
         */
        "ModelSet" = "ModelSet";

    
        /**
         * value: "PredictionSet"
         * @const
         */
        "PredictionSet" = "PredictionSet";

    
        /**
         * value: "Gene"
         * @const
         */
        "Gene" = "Gene";

    
        /**
         * value: "Image"
         * @const
         */
        "Image" = "Image";

    
        /**
         * value: "InstitutionalCertificate"
         * @const
         */
        "InstitutionalCertificate" = "InstitutionalCertificate";

    
        /**
         * value: "Lab"
         * @const
         */
        "Lab" = "Lab";

    
        /**
         * value: "CrisprModification"
         * @const
         */
        "CrisprModification" = "CrisprModification";

    
        /**
         * value: "DegronModification"
         * @const
         */
        "DegronModification" = "DegronModification";

    
        /**
         * value: "AssayTerm"
         * @const
         */
        "AssayTerm" = "AssayTerm";

    
        /**
         * value: "PhenotypeTerm"
         * @const
         */
        "PhenotypeTerm" = "PhenotypeTerm";

    
        /**
         * value: "PlatformTerm"
         * @const
         */
        "PlatformTerm" = "PlatformTerm";

    
        /**
         * value: "SampleTerm"
         * @const
         */
        "SampleTerm" = "SampleTerm";

    
        /**
         * value: "OpenReadingFrame"
         * @const
         */
        "OpenReadingFrame" = "OpenReadingFrame";

    
        /**
         * value: "Page"
         * @const
         */
        "Page" = "Page";

    
        /**
         * value: "PhenotypicFeature"
         * @const
         */
        "PhenotypicFeature" = "PhenotypicFeature";

    
        /**
         * value: "Publication"
         * @const
         */
        "Publication" = "Publication";

    
        /**
         * value: "InVitroSystem"
         * @const
         */
        "InVitroSystem" = "InVitroSystem";

    
        /**
         * value: "MultiplexedSample"
         * @const
         */
        "MultiplexedSample" = "MultiplexedSample";

    
        /**
         * value: "PrimaryCell"
         * @const
         */
        "PrimaryCell" = "PrimaryCell";

    
        /**
         * value: "TechnicalSample"
         * @const
         */
        "TechnicalSample" = "TechnicalSample";

    
        /**
         * value: "Tissue"
         * @const
         */
        "Tissue" = "Tissue";

    
        /**
         * value: "WholeOrganism"
         * @const
         */
        "WholeOrganism" = "WholeOrganism";

    
        /**
         * value: "Software"
         * @const
         */
        "Software" = "Software";

    
        /**
         * value: "SoftwareVersion"
         * @const
         */
        "SoftwareVersion" = "SoftwareVersion";

    
        /**
         * value: "Source"
         * @const
         */
        "Source" = "Source";

    
        /**
         * value: "Treatment"
         * @const
         */
        "Treatment" = "Treatment";

    
        /**
         * value: "User"
         * @const
         */
        "User" = "User";

    
        /**
         * value: "Workflow"
         * @const
         */
        "Workflow" = "Workflow";

    

    /**
    * Returns a <code>ItemType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ItemType} The enum <code>ItemType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

