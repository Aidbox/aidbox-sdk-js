"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarePlanIntent = exports.CarePlanStatus = exports.CarePlanActivityDetailKind = exports.CarePlanActivityDetailStatus = void 0;
/** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
var CarePlanActivityDetailStatus;
(function (CarePlanActivityDetailStatus) {
    CarePlanActivityDetailStatus["Cancelled"] = "cancelled";
    CarePlanActivityDetailStatus["NotStarted"] = "not-started";
    CarePlanActivityDetailStatus["Unknown"] = "unknown";
    CarePlanActivityDetailStatus["Scheduled"] = "scheduled";
    CarePlanActivityDetailStatus["InProgress"] = "in-progress";
    CarePlanActivityDetailStatus["EnteredInError"] = "entered-in-error";
    CarePlanActivityDetailStatus["Stopped"] = "stopped";
    CarePlanActivityDetailStatus["Completed"] = "completed";
    CarePlanActivityDetailStatus["OnHold"] = "on-hold";
})(CarePlanActivityDetailStatus = exports.CarePlanActivityDetailStatus || (exports.CarePlanActivityDetailStatus = {}));
/** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription */
var CarePlanActivityDetailKind;
(function (CarePlanActivityDetailKind) {
    CarePlanActivityDetailKind["Appointment"] = "Appointment";
    CarePlanActivityDetailKind["NutritionOrder"] = "NutritionOrder";
    CarePlanActivityDetailKind["VisionPrescription"] = "VisionPrescription";
    CarePlanActivityDetailKind["MedicationRequest"] = "MedicationRequest";
    CarePlanActivityDetailKind["DeviceRequest"] = "DeviceRequest";
    CarePlanActivityDetailKind["ServiceRequest"] = "ServiceRequest";
    CarePlanActivityDetailKind["Task"] = "Task";
    CarePlanActivityDetailKind["CommunicationRequest"] = "CommunicationRequest";
})(CarePlanActivityDetailKind = exports.CarePlanActivityDetailKind || (exports.CarePlanActivityDetailKind = {}));
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
var CarePlanStatus;
(function (CarePlanStatus) {
    CarePlanStatus["Active"] = "active";
    CarePlanStatus["Completed"] = "completed";
    CarePlanStatus["Draft"] = "draft";
    CarePlanStatus["EnteredInError"] = "entered-in-error";
    CarePlanStatus["OnHold"] = "on-hold";
    CarePlanStatus["Revoked"] = "revoked";
    CarePlanStatus["Unknown"] = "unknown";
})(CarePlanStatus = exports.CarePlanStatus || (exports.CarePlanStatus = {}));
/** proposal | plan | order | option */
var CarePlanIntent;
(function (CarePlanIntent) {
    CarePlanIntent["Option"] = "option";
    CarePlanIntent["Order"] = "order";
    CarePlanIntent["Proposal"] = "proposal";
    CarePlanIntent["Plan"] = "plan";
})(CarePlanIntent = exports.CarePlanIntent || (exports.CarePlanIntent = {}));
