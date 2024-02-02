"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarePlanIntent = exports.CarePlanKind = exports.CarePlanStatus = void 0;
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
/** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription */
var CarePlanKind;
(function (CarePlanKind) {
    CarePlanKind["Appointment"] = "Appointment";
    CarePlanKind["NutritionOrder"] = "NutritionOrder";
    CarePlanKind["VisionPrescription"] = "VisionPrescription";
    CarePlanKind["MedicationRequest"] = "MedicationRequest";
    CarePlanKind["DeviceRequest"] = "DeviceRequest";
    CarePlanKind["ServiceRequest"] = "ServiceRequest";
    CarePlanKind["Task"] = "Task";
    CarePlanKind["CommunicationRequest"] = "CommunicationRequest";
})(CarePlanKind = exports.CarePlanKind || (exports.CarePlanKind = {}));
/** proposal | plan | order | option */
var CarePlanIntent;
(function (CarePlanIntent) {
    CarePlanIntent["Option"] = "option";
    CarePlanIntent["Order"] = "order";
    CarePlanIntent["Proposal"] = "proposal";
    CarePlanIntent["Plan"] = "plan";
})(CarePlanIntent = exports.CarePlanIntent || (exports.CarePlanIntent = {}));
