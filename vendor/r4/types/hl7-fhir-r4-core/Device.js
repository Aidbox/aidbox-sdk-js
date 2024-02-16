"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceUdicarrierEntrytype = exports.DeviceStatus = exports.DeviceDevicenameType = void 0;
/** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
var DeviceDevicenameType;
(function (DeviceDevicenameType) {
    DeviceDevicenameType["ManufacturerName"] = "manufacturer-name";
    DeviceDevicenameType["ModelName"] = "model-name";
    DeviceDevicenameType["Other"] = "other";
    DeviceDevicenameType["PatientReportedName"] = "patient-reported-name";
    DeviceDevicenameType["UdiLabelName"] = "udi-label-name";
    DeviceDevicenameType["UserFriendlyName"] = "user-friendly-name";
})(DeviceDevicenameType = exports.DeviceDevicenameType || (exports.DeviceDevicenameType = {}));
/** active | inactive | entered-in-error | unknown */
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["Active"] = "active";
    DeviceStatus["EnteredInError"] = "entered-in-error";
    DeviceStatus["Inactive"] = "inactive";
    DeviceStatus["Unknown"] = "unknown";
})(DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {}));
/** barcode | rfid | manual + */
var DeviceUdicarrierEntrytype;
(function (DeviceUdicarrierEntrytype) {
    DeviceUdicarrierEntrytype["Barcode"] = "barcode";
    DeviceUdicarrierEntrytype["Card"] = "card";
    DeviceUdicarrierEntrytype["Manual"] = "manual";
    DeviceUdicarrierEntrytype["Rfid"] = "rfid";
    DeviceUdicarrierEntrytype["SelfReported"] = "self-reported";
    DeviceUdicarrierEntrytype["Unknown"] = "unknown";
})(DeviceUdicarrierEntrytype = exports.DeviceUdicarrierEntrytype || (exports.DeviceUdicarrierEntrytype = {}));
