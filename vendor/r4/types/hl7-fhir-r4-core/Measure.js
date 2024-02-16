"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureImprovementnotation = exports.MeasureStatus = void 0;
/** draft | active | retired | unknown */
var MeasureStatus;
(function (MeasureStatus) {
    MeasureStatus["Active"] = "active";
    MeasureStatus["Draft"] = "draft";
    MeasureStatus["Retired"] = "retired";
    MeasureStatus["Unknown"] = "unknown";
})(MeasureStatus = exports.MeasureStatus || (exports.MeasureStatus = {}));
/** increase | decrease */
var MeasureImprovementnotation;
(function (MeasureImprovementnotation) {
    MeasureImprovementnotation["Decrease"] = "decrease";
    MeasureImprovementnotation["Increase"] = "increase";
})(MeasureImprovementnotation = exports.MeasureImprovementnotation || (exports.MeasureImprovementnotation = {}));
