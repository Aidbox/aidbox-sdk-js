"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationStatementStatus = void 0;
/** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
var MedicationStatementStatus;
(function (MedicationStatementStatus) {
    MedicationStatementStatus["Active"] = "active";
    MedicationStatementStatus["Completed"] = "completed";
    MedicationStatementStatus["EnteredInError"] = "entered-in-error";
    MedicationStatementStatus["Intended"] = "intended";
    MedicationStatementStatus["NotTaken"] = "not-taken";
    MedicationStatementStatus["OnHold"] = "on-hold";
    MedicationStatementStatus["Stopped"] = "stopped";
    MedicationStatementStatus["Unknown"] = "unknown";
})(MedicationStatementStatus = exports.MedicationStatementStatus || (exports.MedicationStatementStatus = {}));
