"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMetricOperationalStatus = exports.DeviceMetricState = exports.DeviceMetricType = exports.DeviceMetricColor = exports.DeviceMetricCategory = void 0;
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
var DeviceMetricType;
(function (DeviceMetricType) {
    DeviceMetricType["Gain"] = "gain";
    DeviceMetricType["Offset"] = "offset";
    DeviceMetricType["TwoPoint"] = "two-point";
    DeviceMetricType["Unspecified"] = "unspecified";
})(DeviceMetricType = exports.DeviceMetricType || (exports.DeviceMetricType = {}));
/** not-calibrated | calibration-required | calibrated | unspecified */
var DeviceMetricState;
(function (DeviceMetricState) {
    DeviceMetricState["Calibrated"] = "calibrated";
    DeviceMetricState["CalibrationRequired"] = "calibration-required";
    DeviceMetricState["NotCalibrated"] = "not-calibrated";
    DeviceMetricState["Unspecified"] = "unspecified";
})(DeviceMetricState = exports.DeviceMetricState || (exports.DeviceMetricState = {}));
/** on | off | standby | entered-in-error */
var DeviceMetricOperationalStatus;
(function (DeviceMetricOperationalStatus) {
    DeviceMetricOperationalStatus["EnteredInError"] = "entered-in-error";
    DeviceMetricOperationalStatus["Off"] = "off";
    DeviceMetricOperationalStatus["On"] = "on";
    DeviceMetricOperationalStatus["Standby"] = "standby";
})(DeviceMetricOperationalStatus = exports.DeviceMetricOperationalStatus || (exports.DeviceMetricOperationalStatus = {}));
