"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminologyCapabilitiesStatus = exports.TerminologyCapabilitiesCodesearch = exports.TerminologyCapabilitiesKind = void 0;
/** instance | capability | requirements */
var TerminologyCapabilitiesKind;
(function (TerminologyCapabilitiesKind) {
    TerminologyCapabilitiesKind["Capability"] = "capability";
    TerminologyCapabilitiesKind["Instance"] = "instance";
    TerminologyCapabilitiesKind["Requirements"] = "requirements";
})(TerminologyCapabilitiesKind = exports.TerminologyCapabilitiesKind || (exports.TerminologyCapabilitiesKind = {}));
/** explicit | all */
var TerminologyCapabilitiesCodesearch;
(function (TerminologyCapabilitiesCodesearch) {
    TerminologyCapabilitiesCodesearch["All"] = "all";
    TerminologyCapabilitiesCodesearch["Explicit"] = "explicit";
})(TerminologyCapabilitiesCodesearch = exports.TerminologyCapabilitiesCodesearch || (exports.TerminologyCapabilitiesCodesearch = {}));
/** draft | active | retired | unknown */
var TerminologyCapabilitiesStatus;
(function (TerminologyCapabilitiesStatus) {
    TerminologyCapabilitiesStatus["Active"] = "active";
    TerminologyCapabilitiesStatus["Draft"] = "draft";
    TerminologyCapabilitiesStatus["Retired"] = "retired";
    TerminologyCapabilitiesStatus["Unknown"] = "unknown";
})(TerminologyCapabilitiesStatus = exports.TerminologyCapabilitiesStatus || (exports.TerminologyCapabilitiesStatus = {}));
