"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntoleranceSeverity = exports.AllergyIntoleranceVerificationStatus = exports.AllergyIntoleranceType = exports.AllergyIntoleranceClinicalStatus = exports.AllergyIntoleranceCriticality = void 0;
/** low | high | unable-to-assess */
var AllergyIntoleranceCriticality;
(function (AllergyIntoleranceCriticality) {
    AllergyIntoleranceCriticality["High"] = "high";
    AllergyIntoleranceCriticality["Low"] = "low";
    AllergyIntoleranceCriticality["UnableToAssess"] = "unable-to-assess";
})(AllergyIntoleranceCriticality = exports.AllergyIntoleranceCriticality || (exports.AllergyIntoleranceCriticality = {}));
/** active | inactive | resolved */
var AllergyIntoleranceClinicalStatus;
(function (AllergyIntoleranceClinicalStatus) {
    AllergyIntoleranceClinicalStatus["Active"] = "active";
    AllergyIntoleranceClinicalStatus["Inactive"] = "inactive";
    AllergyIntoleranceClinicalStatus["Resolved"] = "resolved";
})(AllergyIntoleranceClinicalStatus = exports.AllergyIntoleranceClinicalStatus || (exports.AllergyIntoleranceClinicalStatus = {}));
/** allergy | intolerance - Underlying mechanism (if known) */
var AllergyIntoleranceType;
(function (AllergyIntoleranceType) {
    AllergyIntoleranceType["Allergy"] = "allergy";
    AllergyIntoleranceType["Intolerance"] = "intolerance";
})(AllergyIntoleranceType = exports.AllergyIntoleranceType || (exports.AllergyIntoleranceType = {}));
/** unconfirmed | confirmed | refuted | entered-in-error */
var AllergyIntoleranceVerificationStatus;
(function (AllergyIntoleranceVerificationStatus) {
    AllergyIntoleranceVerificationStatus["Confirmed"] = "confirmed";
    AllergyIntoleranceVerificationStatus["EnteredInError"] = "entered-in-error";
    AllergyIntoleranceVerificationStatus["Presumed"] = "presumed";
    AllergyIntoleranceVerificationStatus["Refuted"] = "refuted";
    AllergyIntoleranceVerificationStatus["Unconfirmed"] = "unconfirmed";
})(AllergyIntoleranceVerificationStatus = exports.AllergyIntoleranceVerificationStatus || (exports.AllergyIntoleranceVerificationStatus = {}));
/** mild | moderate | severe (of event as a whole) */
var AllergyIntoleranceSeverity;
(function (AllergyIntoleranceSeverity) {
    AllergyIntoleranceSeverity["Mild"] = "mild";
    AllergyIntoleranceSeverity["Moderate"] = "moderate";
    AllergyIntoleranceSeverity["Severe"] = "severe";
})(AllergyIntoleranceSeverity = exports.AllergyIntoleranceSeverity || (exports.AllergyIntoleranceSeverity = {}));
