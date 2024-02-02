"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompartmentDefinitionCode = exports.CompartmentDefinitionStatus = void 0;
/** draft | active | retired | unknown */
var CompartmentDefinitionStatus;
(function (CompartmentDefinitionStatus) {
    CompartmentDefinitionStatus["Active"] = "active";
    CompartmentDefinitionStatus["Draft"] = "draft";
    CompartmentDefinitionStatus["Retired"] = "retired";
    CompartmentDefinitionStatus["Unknown"] = "unknown";
})(CompartmentDefinitionStatus = exports.CompartmentDefinitionStatus || (exports.CompartmentDefinitionStatus = {}));
/** Patient | Encounter | RelatedPerson | Practitioner | Device */
var CompartmentDefinitionCode;
(function (CompartmentDefinitionCode) {
    CompartmentDefinitionCode["Device"] = "Device";
    CompartmentDefinitionCode["Encounter"] = "Encounter";
    CompartmentDefinitionCode["Patient"] = "Patient";
    CompartmentDefinitionCode["Practitioner"] = "Practitioner";
    CompartmentDefinitionCode["RelatedPerson"] = "RelatedPerson";
})(CompartmentDefinitionCode = exports.CompartmentDefinitionCode || (exports.CompartmentDefinitionCode = {}));
