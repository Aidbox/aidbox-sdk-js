"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceVariableStatus = exports.EvidenceVariableGroupMeasure = exports.EvidenceVariableType = void 0;
/** dichotomous | continuous | descriptive */
var EvidenceVariableType;
(function (EvidenceVariableType) {
    EvidenceVariableType["Continuous"] = "continuous";
    EvidenceVariableType["Descriptive"] = "descriptive";
    EvidenceVariableType["Dichotomous"] = "dichotomous";
})(EvidenceVariableType = exports.EvidenceVariableType || (exports.EvidenceVariableType = {}));
/** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
var EvidenceVariableGroupMeasure;
(function (EvidenceVariableGroupMeasure) {
    EvidenceVariableGroupMeasure["Mean"] = "mean";
    EvidenceVariableGroupMeasure["MeanOfMean"] = "mean-of-mean";
    EvidenceVariableGroupMeasure["MeanOfMedian"] = "mean-of-median";
    EvidenceVariableGroupMeasure["Median"] = "median";
    EvidenceVariableGroupMeasure["MedianOfMean"] = "median-of-mean";
    EvidenceVariableGroupMeasure["MedianOfMedian"] = "median-of-median";
})(EvidenceVariableGroupMeasure = exports.EvidenceVariableGroupMeasure || (exports.EvidenceVariableGroupMeasure = {}));
/** draft | active | retired | unknown */
var EvidenceVariableStatus;
(function (EvidenceVariableStatus) {
    EvidenceVariableStatus["Active"] = "active";
    EvidenceVariableStatus["Draft"] = "draft";
    EvidenceVariableStatus["Retired"] = "retired";
    EvidenceVariableStatus["Unknown"] = "unknown";
})(EvidenceVariableStatus = exports.EvidenceVariableStatus || (exports.EvidenceVariableStatus = {}));
