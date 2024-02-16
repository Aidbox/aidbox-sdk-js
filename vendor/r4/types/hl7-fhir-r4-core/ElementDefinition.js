"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementDefinitionMappingLanguage = exports.ElementDefinitionBindingStrength = exports.ElementDefinitionTypeVersioning = exports.ElementDefinitionSlicingRules = exports.ElementDefinitionSlicingDiscriminatorType = exports.ElementDefinitionConstraintSeverity = void 0;
/** error | warning */
var ElementDefinitionConstraintSeverity;
(function (ElementDefinitionConstraintSeverity) {
    ElementDefinitionConstraintSeverity["Error"] = "error";
    ElementDefinitionConstraintSeverity["Warning"] = "warning";
})(ElementDefinitionConstraintSeverity = exports.ElementDefinitionConstraintSeverity || (exports.ElementDefinitionConstraintSeverity = {}));
/** value | exists | pattern | type | profile */
var ElementDefinitionSlicingDiscriminatorType;
(function (ElementDefinitionSlicingDiscriminatorType) {
    ElementDefinitionSlicingDiscriminatorType["Exists"] = "exists";
    ElementDefinitionSlicingDiscriminatorType["Pattern"] = "pattern";
    ElementDefinitionSlicingDiscriminatorType["Profile"] = "profile";
    ElementDefinitionSlicingDiscriminatorType["Type"] = "type";
    ElementDefinitionSlicingDiscriminatorType["Value"] = "value";
})(ElementDefinitionSlicingDiscriminatorType = exports.ElementDefinitionSlicingDiscriminatorType || (exports.ElementDefinitionSlicingDiscriminatorType = {}));
/** closed | open | openAtEnd */
var ElementDefinitionSlicingRules;
(function (ElementDefinitionSlicingRules) {
    ElementDefinitionSlicingRules["Closed"] = "closed";
    ElementDefinitionSlicingRules["Open"] = "open";
    ElementDefinitionSlicingRules["OpenAtEnd"] = "openAtEnd";
})(ElementDefinitionSlicingRules = exports.ElementDefinitionSlicingRules || (exports.ElementDefinitionSlicingRules = {}));
/** either | independent | specific */
var ElementDefinitionTypeVersioning;
(function (ElementDefinitionTypeVersioning) {
    ElementDefinitionTypeVersioning["Either"] = "either";
    ElementDefinitionTypeVersioning["Independent"] = "independent";
    ElementDefinitionTypeVersioning["Specific"] = "specific";
})(ElementDefinitionTypeVersioning = exports.ElementDefinitionTypeVersioning || (exports.ElementDefinitionTypeVersioning = {}));
/** required | extensible | preferred | example */
var ElementDefinitionBindingStrength;
(function (ElementDefinitionBindingStrength) {
    ElementDefinitionBindingStrength["Example"] = "example";
    ElementDefinitionBindingStrength["Extensible"] = "extensible";
    ElementDefinitionBindingStrength["Preferred"] = "preferred";
    ElementDefinitionBindingStrength["Required"] = "required";
})(ElementDefinitionBindingStrength = exports.ElementDefinitionBindingStrength || (exports.ElementDefinitionBindingStrength = {}));
/** Computable language of mapping */
var ElementDefinitionMappingLanguage;
(function (ElementDefinitionMappingLanguage) {
    ElementDefinitionMappingLanguage["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    ElementDefinitionMappingLanguage["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    ElementDefinitionMappingLanguage["Application/sql"] = "application/sql";
    ElementDefinitionMappingLanguage["Application/xquery"] = "application/xquery";
})(ElementDefinitionMappingLanguage = exports.ElementDefinitionMappingLanguage || (exports.ElementDefinitionMappingLanguage = {}));
