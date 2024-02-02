"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationDispenseStatus = void 0;
/** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown */
var MedicationDispenseStatus;
(function (MedicationDispenseStatus) {
    MedicationDispenseStatus["Cancelled"] = "cancelled";
    MedicationDispenseStatus["Preparation"] = "preparation";
    MedicationDispenseStatus["Unknown"] = "unknown";
    MedicationDispenseStatus["InProgress"] = "in-progress";
    MedicationDispenseStatus["EnteredInError"] = "entered-in-error";
    MedicationDispenseStatus["Declined"] = "declined";
    MedicationDispenseStatus["Stopped"] = "stopped";
    MedicationDispenseStatus["Completed"] = "completed";
    MedicationDispenseStatus["OnHold"] = "on-hold";
})(MedicationDispenseStatus = exports.MedicationDispenseStatus || (exports.MedicationDispenseStatus = {}));
