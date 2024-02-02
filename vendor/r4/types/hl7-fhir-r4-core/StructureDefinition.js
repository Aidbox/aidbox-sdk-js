"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureDefinitionStatus = exports.StructureDefinitionType = exports.StructureDefinitionFhirVersion = exports.StructureDefinitionKind = exports.StructureDefinitionDerivation = void 0;
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
/** FHIR Version this StructureDefinition targets */
var StructureDefinitionFhirVersion;
(function (StructureDefinitionFhirVersion) {
    StructureDefinitionFhirVersion["Num1.8.0"] = "1.8.0";
    StructureDefinitionFhirVersion["Num0.05"] = "0.05";
    StructureDefinitionFhirVersion["Num0.01"] = "0.01";
    StructureDefinitionFhirVersion["Num3.0.1"] = "3.0.1";
    StructureDefinitionFhirVersion["Num1.0.0"] = "1.0.0";
    StructureDefinitionFhirVersion["Num3.3.0"] = "3.3.0";
    StructureDefinitionFhirVersion["Num0.0.82"] = "0.0.82";
    StructureDefinitionFhirVersion["Num1.6.0"] = "1.6.0";
    StructureDefinitionFhirVersion["Num1.4.0"] = "1.4.0";
    StructureDefinitionFhirVersion["Num3.0.0"] = "3.0.0";
    StructureDefinitionFhirVersion["Num0.0.80"] = "0.0.80";
    StructureDefinitionFhirVersion["Num4.0.0"] = "4.0.0";
    StructureDefinitionFhirVersion["Num0.11"] = "0.11";
    StructureDefinitionFhirVersion["Num0.06"] = "0.06";
    StructureDefinitionFhirVersion["Num1.0.2"] = "1.0.2";
    StructureDefinitionFhirVersion["Num1.0.1"] = "1.0.1";
    StructureDefinitionFhirVersion["Num0.4.0"] = "0.4.0";
    StructureDefinitionFhirVersion["Num4.0.1"] = "4.0.1";
    StructureDefinitionFhirVersion["Num3.5.0"] = "3.5.0";
    StructureDefinitionFhirVersion["Num0.5.0"] = "0.5.0";
    StructureDefinitionFhirVersion["Num1.1.0"] = "1.1.0";
    StructureDefinitionFhirVersion["Num0.0.81"] = "0.0.81";
})(StructureDefinitionFhirVersion = exports.StructureDefinitionFhirVersion || (exports.StructureDefinitionFhirVersion = {}));
/** fhirpath | element | extension */
var StructureDefinitionType;
(function (StructureDefinitionType) {
    StructureDefinitionType["Element"] = "element";
    StructureDefinitionType["Extension"] = "extension";
    StructureDefinitionType["Fhirpath"] = "fhirpath";
})(StructureDefinitionType = exports.StructureDefinitionType || (exports.StructureDefinitionType = {}));
/** draft | active | retired | unknown */
var StructureDefinitionStatus;
(function (StructureDefinitionStatus) {
    StructureDefinitionStatus["Active"] = "active";
    StructureDefinitionStatus["Draft"] = "draft";
    StructureDefinitionStatus["Retired"] = "retired";
    StructureDefinitionStatus["Unknown"] = "unknown";
})(StructureDefinitionStatus = exports.StructureDefinitionStatus || (exports.StructureDefinitionStatus = {}));
