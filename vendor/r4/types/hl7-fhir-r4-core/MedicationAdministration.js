"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationAdministrationStatus = void 0;
/** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
var MedicationAdministrationStatus;
(function (MedicationAdministrationStatus) {
    MedicationAdministrationStatus["Completed"] = "completed";
    MedicationAdministrationStatus["EnteredInError"] = "entered-in-error";
    MedicationAdministrationStatus["InProgress"] = "in-progress";
    MedicationAdministrationStatus["NotDone"] = "not-done";
    MedicationAdministrationStatus["OnHold"] = "on-hold";
    MedicationAdministrationStatus["Stopped"] = "stopped";
    MedicationAdministrationStatus["Unknown"] = "unknown";
})(MedicationAdministrationStatus = exports.MedicationAdministrationStatus || (exports.MedicationAdministrationStatus = {}));
