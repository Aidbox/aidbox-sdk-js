"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMetricOperationalstatus = exports.DeviceMetricCalibrationState = exports.DeviceMetricCalibrationType = exports.DeviceMetricColor = exports.DeviceMetricCategory = void 0;
/** measurement | setting | calculation | unspecified */
var DeviceMetricCategory;
(function (DeviceMetricCategory) {
    DeviceMetricCategory["Calculation"] = "calculation";
    DeviceMetricCategory["Measurement"] = "measurement";
    DeviceMetricCategory["Setting"] = "setting";
    DeviceMetricCategory["Unspecified"] = "unspecified";
})(DeviceMetricCategory = exports.DeviceMetricCategory || (exports.DeviceMetricCategory = {}));
/** black | red | green | yellow | blue | magenta | cyan | white */
var DeviceMetricColor;
(function (DeviceMetricColor) {
    DeviceMetricColor["Black"] = "black";
    DeviceMetricColor["Blue"] = "blue";
    DeviceMetricColor["Cyan"] = "cyan";
    DeviceMetricColor["Green"] = "green";
    DeviceMetricColor["Magenta"] = "magenta";
    DeviceMetricColor["Red"] = "red";
    DeviceMetricColor["White"] = "white";
    DeviceMetricColor["Yellow"] = "yellow";
})(DeviceMetricColor = exports.DeviceMetricColor || (exports.DeviceMetricColor = {}));
/** unspecified | offset | gain | two-point */
var DeviceMetricCalibrationType;
(function (DeviceMetricCalibrationType) {
    DeviceMetricCalibrationType["Gain"] = "gain";
    DeviceMetricCalibrationType["Offset"] = "offset";
    DeviceMetricCalibrationType["TwoPoint"] = "two-point";
    DeviceMetricCalibrationType["Unspecified"] = "unspecified";
})(DeviceMetricCalibrationType = exports.DeviceMetricCalibrationType || (exports.DeviceMetricCalibrationType = {}));
/** not-calibrated | calibration-required | calibrated | unspecified */
var DeviceMetricCalibrationState;
(function (DeviceMetricCalibrationState) {
    DeviceMetricCalibrationState["Calibrated"] = "calibrated";
    DeviceMetricCalibrationState["CalibrationRequired"] = "calibration-required";
    DeviceMetricCalibrationState["NotCalibrated"] = "not-calibrated";
    DeviceMetricCalibrationState["Unspecified"] = "unspecified";
})(DeviceMetricCalibrationState = exports.DeviceMetricCalibrationState || (exports.DeviceMetricCalibrationState = {}));
/** on | off | standby | entered-in-error */
var DeviceMetricOperationalstatus;
(function (DeviceMetricOperationalstatus) {
    DeviceMetricOperationalstatus["EnteredInError"] = "entered-in-error";
    DeviceMetricOperationalstatus["Off"] = "off";
    DeviceMetricOperationalstatus["On"] = "on";
    DeviceMetricOperationalstatus["Standby"] = "standby";
})(DeviceMetricOperationalstatus = exports.DeviceMetricOperationalstatus || (exports.DeviceMetricOperationalstatus = {}));
