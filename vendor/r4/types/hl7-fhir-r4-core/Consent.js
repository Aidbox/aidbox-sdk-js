"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentProvisionDataMeaning = exports.ConsentProvisionType = exports.ConsentStatus = void 0;
/** draft | proposed | active | rejected | inactive | entered-in-error */
var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus["Active"] = "active";
    ConsentStatus["Draft"] = "draft";
    ConsentStatus["EnteredInError"] = "entered-in-error";
    ConsentStatus["Inactive"] = "inactive";
    ConsentStatus["Proposed"] = "proposed";
    ConsentStatus["Rejected"] = "rejected";
})(ConsentStatus = exports.ConsentStatus || (exports.ConsentStatus = {}));
/** deny | permit */
var ConsentProvisionType;
(function (ConsentProvisionType) {
    ConsentProvisionType["Deny"] = "deny";
    ConsentProvisionType["Permit"] = "permit";
})(ConsentProvisionType = exports.ConsentProvisionType || (exports.ConsentProvisionType = {}));
/** instance | related | dependents | authoredby */
var ConsentProvisionDataMeaning;
(function (ConsentProvisionDataMeaning) {
    ConsentProvisionDataMeaning["Authoredby"] = "authoredby";
    ConsentProvisionDataMeaning["Dependents"] = "dependents";
    ConsentProvisionDataMeaning["Instance"] = "instance";
    ConsentProvisionDataMeaning["Related"] = "related";
})(ConsentProvisionDataMeaning = exports.ConsentProvisionDataMeaning || (exports.ConsentProvisionDataMeaning = {}));
