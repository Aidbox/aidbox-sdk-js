"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminologyCapabilitiesStatus = exports.TerminologyCapabilitiesKind = exports.TerminologyCapabilitiesCodeSearch = void 0;
/** explicit | all */
var TerminologyCapabilitiesCodeSearch;
(function (TerminologyCapabilitiesCodeSearch) {
    TerminologyCapabilitiesCodeSearch["All"] = "all";
    TerminologyCapabilitiesCodeSearch["Explicit"] = "explicit";
})(TerminologyCapabilitiesCodeSearch = exports.TerminologyCapabilitiesCodeSearch || (exports.TerminologyCapabilitiesCodeSearch = {}));
/** instance | capability | requirements */
var TerminologyCapabilitiesKind;
(function (TerminologyCapabilitiesKind) {
    TerminologyCapabilitiesKind["Capability"] = "capability";
    TerminologyCapabilitiesKind["Instance"] = "instance";
    TerminologyCapabilitiesKind["Requirements"] = "requirements";
})(TerminologyCapabilitiesKind = exports.TerminologyCapabilitiesKind || (exports.TerminologyCapabilitiesKind = {}));
/** draft | active | retired | unknown */
var TerminologyCapabilitiesStatus;
(function (TerminologyCapabilitiesStatus) {
    TerminologyCapabilitiesStatus["Active"] = "active";
    TerminologyCapabilitiesStatus["Draft"] = "draft";
    TerminologyCapabilitiesStatus["Retired"] = "retired";
    TerminologyCapabilitiesStatus["Unknown"] = "unknown";
})(TerminologyCapabilitiesStatus = exports.TerminologyCapabilitiesStatus || (exports.TerminologyCapabilitiesStatus = {}));
