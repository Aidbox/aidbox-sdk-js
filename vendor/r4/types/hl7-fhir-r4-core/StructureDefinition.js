"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureDefinitionStatus = exports.StructureDefinitionFhirversion = exports.StructureDefinitionContextType = exports.StructureDefinitionKind = exports.StructureDefinitionDerivation = void 0;
/** specialization | constraint - How relates to base definition */
var StructureDefinitionDerivation;
(function (StructureDefinitionDerivation) {
    StructureDefinitionDerivation["Constraint"] = "constraint";
    StructureDefinitionDerivation["Specialization"] = "specialization";
})(StructureDefinitionDerivation = exports.StructureDefinitionDerivation || (exports.StructureDefinitionDerivation = {}));
/** primitive-type | complex-type | resource | logical */
var StructureDefinitionKind;
(function (StructureDefinitionKind) {
    StructureDefinitionKind["ComplexType"] = "complex-type";
    StructureDefinitionKind["Logical"] = "logical";
    StructureDefinitionKind["PrimitiveType"] = "primitive-type";
    StructureDefinitionKind["Resource"] = "resource";
})(StructureDefinitionKind = exports.StructureDefinitionKind || (exports.StructureDefinitionKind = {}));
/** fhirpath | element | extension */
var StructureDefinitionContextType;
(function (StructureDefinitionContextType) {
    StructureDefinitionContextType["Element"] = "element";
    StructureDefinitionContextType["Extension"] = "extension";
    StructureDefinitionContextType["Fhirpath"] = "fhirpath";
})(StructureDefinitionContextType = exports.StructureDefinitionContextType || (exports.StructureDefinitionContextType = {}));
/** FHIR Version this StructureDefinition targets */
var StructureDefinitionFhirversion;
(function (StructureDefinitionFhirversion) {
    StructureDefinitionFhirversion["Num1.8.0"] = "1.8.0";
    StructureDefinitionFhirversion["Num0.05"] = "0.05";
    StructureDefinitionFhirversion["Num0.01"] = "0.01";
    StructureDefinitionFhirversion["Num3.0.1"] = "3.0.1";
    StructureDefinitionFhirversion["Num1.0.0"] = "1.0.0";
    StructureDefinitionFhirversion["Num3.3.0"] = "3.3.0";
    StructureDefinitionFhirversion["Num0.0.82"] = "0.0.82";
    StructureDefinitionFhirversion["Num1.6.0"] = "1.6.0";
    StructureDefinitionFhirversion["Num1.4.0"] = "1.4.0";
    StructureDefinitionFhirversion["Num3.0.0"] = "3.0.0";
    StructureDefinitionFhirversion["Num0.0.80"] = "0.0.80";
    StructureDefinitionFhirversion["Num4.0.0"] = "4.0.0";
    StructureDefinitionFhirversion["Num0.11"] = "0.11";
    StructureDefinitionFhirversion["Num0.06"] = "0.06";
    StructureDefinitionFhirversion["Num1.0.2"] = "1.0.2";
    StructureDefinitionFhirversion["Num1.0.1"] = "1.0.1";
    StructureDefinitionFhirversion["Num0.4.0"] = "0.4.0";
    StructureDefinitionFhirversion["Num4.0.1"] = "4.0.1";
    StructureDefinitionFhirversion["Num3.5.0"] = "3.5.0";
    StructureDefinitionFhirversion["Num0.5.0"] = "0.5.0";
    StructureDefinitionFhirversion["Num1.1.0"] = "1.1.0";
    StructureDefinitionFhirversion["Num0.0.81"] = "0.0.81";
})(StructureDefinitionFhirversion = exports.StructureDefinitionFhirversion || (exports.StructureDefinitionFhirversion = {}));
/** draft | active | retired | unknown */
var StructureDefinitionStatus;
(function (StructureDefinitionStatus) {
    StructureDefinitionStatus["Active"] = "active";
    StructureDefinitionStatus["Draft"] = "draft";
    StructureDefinitionStatus["Retired"] = "retired";
    StructureDefinitionStatus["Unknown"] = "unknown";
})(StructureDefinitionStatus = exports.StructureDefinitionStatus || (exports.StructureDefinitionStatus = {}));
