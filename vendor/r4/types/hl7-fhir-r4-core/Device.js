"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEntryType = exports.DeviceStatus = exports.DeviceType = void 0;
/** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
var DeviceType;
(function (DeviceType) {
    DeviceType["ManufacturerName"] = "manufacturer-name";
    DeviceType["ModelName"] = "model-name";
    DeviceType["Other"] = "other";
    DeviceType["PatientReportedName"] = "patient-reported-name";
    DeviceType["UdiLabelName"] = "udi-label-name";
    DeviceType["UserFriendlyName"] = "user-friendly-name";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
/** active | inactive | entered-in-error | unknown */
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["Active"] = "active";
    DeviceStatus["EnteredInError"] = "entered-in-error";
    DeviceStatus["Inactive"] = "inactive";
    DeviceStatus["Unknown"] = "unknown";
})(DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {}));
/** barcode | rfid | manual + */
var DeviceEntryType;
(function (DeviceEntryType) {
    DeviceEntryType["Barcode"] = "barcode";
    DeviceEntryType["Card"] = "card";
    DeviceEntryType["Manual"] = "manual";
    DeviceEntryType["Rfid"] = "rfid";
    DeviceEntryType["SelfReported"] = "self-reported";
    DeviceEntryType["Unknown"] = "unknown";
})(DeviceEntryType = exports.DeviceEntryType || (exports.DeviceEntryType = {}));
