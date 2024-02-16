"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntoleranceReactionSeverity = exports.AllergyIntoleranceVerificationstatus = exports.AllergyIntoleranceType = exports.AllergyIntoleranceClinicalstatus = exports.AllergyIntoleranceCriticality = void 0;
/** low | high | unable-to-assess */
var AllergyIntoleranceCriticality;
(function (AllergyIntoleranceCriticality) {
    AllergyIntoleranceCriticality["High"] = "high";
    AllergyIntoleranceCriticality["Low"] = "low";
    AllergyIntoleranceCriticality["UnableToAssess"] = "unable-to-assess";
})(AllergyIntoleranceCriticality = exports.AllergyIntoleranceCriticality || (exports.AllergyIntoleranceCriticality = {}));
/** active | inactive | resolved */
var AllergyIntoleranceClinicalstatus;
(function (AllergyIntoleranceClinicalstatus) {
    AllergyIntoleranceClinicalstatus["Active"] = "active";
    AllergyIntoleranceClinicalstatus["Inactive"] = "inactive";
    AllergyIntoleranceClinicalstatus["Resolved"] = "resolved";
})(AllergyIntoleranceClinicalstatus = exports.AllergyIntoleranceClinicalstatus || (exports.AllergyIntoleranceClinicalstatus = {}));
/** allergy | intolerance - Underlying mechanism (if known) */
var AllergyIntoleranceType;
(function (AllergyIntoleranceType) {
    AllergyIntoleranceType["Allergy"] = "allergy";
    AllergyIntoleranceType["Intolerance"] = "intolerance";
})(AllergyIntoleranceType = exports.AllergyIntoleranceType || (exports.AllergyIntoleranceType = {}));
/** unconfirmed | confirmed | refuted | entered-in-error */
var AllergyIntoleranceVerificationstatus;
(function (AllergyIntoleranceVerificationstatus) {
    AllergyIntoleranceVerificationstatus["Confirmed"] = "confirmed";
    AllergyIntoleranceVerificationstatus["EnteredInError"] = "entered-in-error";
    AllergyIntoleranceVerificationstatus["Presumed"] = "presumed";
    AllergyIntoleranceVerificationstatus["Refuted"] = "refuted";
    AllergyIntoleranceVerificationstatus["Unconfirmed"] = "unconfirmed";
})(AllergyIntoleranceVerificationstatus = exports.AllergyIntoleranceVerificationstatus || (exports.AllergyIntoleranceVerificationstatus = {}));
/** mild | moderate | severe (of event as a whole) */
var AllergyIntoleranceReactionSeverity;
(function (AllergyIntoleranceReactionSeverity) {
    AllergyIntoleranceReactionSeverity["Mild"] = "mild";
    AllergyIntoleranceReactionSeverity["Moderate"] = "moderate";
    AllergyIntoleranceReactionSeverity["Severe"] = "severe";
})(AllergyIntoleranceReactionSeverity = exports.AllergyIntoleranceReactionSeverity || (exports.AllergyIntoleranceReactionSeverity = {}));
