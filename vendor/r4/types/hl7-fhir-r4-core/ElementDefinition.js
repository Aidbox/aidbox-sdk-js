"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementDefinitionRules = exports.ElementDefinitionStrength = exports.ElementDefinitionLanguage = exports.ElementDefinitionSeverity = exports.ElementDefinitionVersioning = exports.ElementDefinitionType = void 0;
/** value | exists | pattern | type | profile */
var ElementDefinitionType;
(function (ElementDefinitionType) {
    ElementDefinitionType["Exists"] = "exists";
    ElementDefinitionType["Pattern"] = "pattern";
    ElementDefinitionType["Profile"] = "profile";
    ElementDefinitionType["Type"] = "type";
    ElementDefinitionType["Value"] = "value";
})(ElementDefinitionType = exports.ElementDefinitionType || (exports.ElementDefinitionType = {}));
/** either | independent | specific */
var ElementDefinitionVersioning;
(function (ElementDefinitionVersioning) {
    ElementDefinitionVersioning["Either"] = "either";
    ElementDefinitionVersioning["Independent"] = "independent";
    ElementDefinitionVersioning["Specific"] = "specific";
})(ElementDefinitionVersioning = exports.ElementDefinitionVersioning || (exports.ElementDefinitionVersioning = {}));
/** error | warning */
var ElementDefinitionSeverity;
(function (ElementDefinitionSeverity) {
    ElementDefinitionSeverity["Error"] = "error";
    ElementDefinitionSeverity["Warning"] = "warning";
})(ElementDefinitionSeverity = exports.ElementDefinitionSeverity || (exports.ElementDefinitionSeverity = {}));
/** Computable language of mapping */
var ElementDefinitionLanguage;
(function (ElementDefinitionLanguage) {
    ElementDefinitionLanguage["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    ElementDefinitionLanguage["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    ElementDefinitionLanguage["Application/sql"] = "application/sql";
    ElementDefinitionLanguage["Application/xquery"] = "application/xquery";
})(ElementDefinitionLanguage = exports.ElementDefinitionLanguage || (exports.ElementDefinitionLanguage = {}));
/** required | extensible | preferred | example */
var ElementDefinitionStrength;
(function (ElementDefinitionStrength) {
    ElementDefinitionStrength["Example"] = "example";
    ElementDefinitionStrength["Extensible"] = "extensible";
    ElementDefinitionStrength["Preferred"] = "preferred";
    ElementDefinitionStrength["Required"] = "required";
})(ElementDefinitionStrength = exports.ElementDefinitionStrength || (exports.ElementDefinitionStrength = {}));
/** closed | open | openAtEnd */
var ElementDefinitionRules;
(function (ElementDefinitionRules) {
    ElementDefinitionRules["Closed"] = "closed";
    ElementDefinitionRules["Open"] = "open";
    ElementDefinitionRules["OpenAtEnd"] = "openAtEnd";
})(ElementDefinitionRules = exports.ElementDefinitionRules || (exports.ElementDefinitionRules = {}));
