"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionVerificationStatus = exports.ConditionClinicalStatus = void 0;
/** active | recurrence | relapse | inactive | remission | resolved */
var ConditionClinicalStatus;
(function (ConditionClinicalStatus) {
    ConditionClinicalStatus["Active"] = "active";
    ConditionClinicalStatus["Inactive"] = "inactive";
    ConditionClinicalStatus["Recurrence"] = "recurrence";
    ConditionClinicalStatus["Relapse"] = "relapse";
    ConditionClinicalStatus["Remission"] = "remission";
    ConditionClinicalStatus["Resolved"] = "resolved";
    ConditionClinicalStatus["Unknown"] = "unknown";
})(ConditionClinicalStatus = exports.ConditionClinicalStatus || (exports.ConditionClinicalStatus = {}));
/** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
var ConditionVerificationStatus;
(function (ConditionVerificationStatus) {
    ConditionVerificationStatus["Confirmed"] = "confirmed";
    ConditionVerificationStatus["Differential"] = "differential";
    ConditionVerificationStatus["EnteredInError"] = "entered-in-error";
    ConditionVerificationStatus["Provisional"] = "provisional";
    ConditionVerificationStatus["Refuted"] = "refuted";
    ConditionVerificationStatus["Unconfirmed"] = "unconfirmed";
})(ConditionVerificationStatus = exports.ConditionVerificationStatus || (exports.ConditionVerificationStatus = {}));
