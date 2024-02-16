"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionVerificationstatus = exports.ConditionClinicalstatus = void 0;
/** active | recurrence | relapse | inactive | remission | resolved */
var ConditionClinicalstatus;
(function (ConditionClinicalstatus) {
    ConditionClinicalstatus["Active"] = "active";
    ConditionClinicalstatus["Inactive"] = "inactive";
    ConditionClinicalstatus["Recurrence"] = "recurrence";
    ConditionClinicalstatus["Relapse"] = "relapse";
    ConditionClinicalstatus["Remission"] = "remission";
    ConditionClinicalstatus["Resolved"] = "resolved";
    ConditionClinicalstatus["Unknown"] = "unknown";
})(ConditionClinicalstatus = exports.ConditionClinicalstatus || (exports.ConditionClinicalstatus = {}));
/** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
var ConditionVerificationstatus;
(function (ConditionVerificationstatus) {
    ConditionVerificationstatus["Confirmed"] = "confirmed";
    ConditionVerificationstatus["Differential"] = "differential";
    ConditionVerificationstatus["EnteredInError"] = "entered-in-error";
    ConditionVerificationstatus["Provisional"] = "provisional";
    ConditionVerificationstatus["Refuted"] = "refuted";
    ConditionVerificationstatus["Unconfirmed"] = "unconfirmed";
})(ConditionVerificationstatus = exports.ConditionVerificationstatus || (exports.ConditionVerificationstatus = {}));
