"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureImprovementNotation = exports.MeasureStatus = void 0;
/** draft | active | retired | unknown */
var MeasureStatus;
(function (MeasureStatus) {
    MeasureStatus["Active"] = "active";
    MeasureStatus["Draft"] = "draft";
    MeasureStatus["Retired"] = "retired";
    MeasureStatus["Unknown"] = "unknown";
})(MeasureStatus = exports.MeasureStatus || (exports.MeasureStatus = {}));
/** increase | decrease */
var MeasureImprovementNotation;
(function (MeasureImprovementNotation) {
    MeasureImprovementNotation["Decrease"] = "decrease";
    MeasureImprovementNotation["Increase"] = "increase";
})(MeasureImprovementNotation = exports.MeasureImprovementNotation || (exports.MeasureImprovementNotation = {}));
