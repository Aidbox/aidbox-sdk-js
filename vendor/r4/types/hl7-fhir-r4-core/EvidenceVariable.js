"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceVariableStatus = exports.EvidenceVariableCharacteristicGroupmeasure = exports.EvidenceVariableType = void 0;
/** dichotomous | continuous | descriptive */
var EvidenceVariableType;
(function (EvidenceVariableType) {
    EvidenceVariableType["Continuous"] = "continuous";
    EvidenceVariableType["Descriptive"] = "descriptive";
    EvidenceVariableType["Dichotomous"] = "dichotomous";
})(EvidenceVariableType = exports.EvidenceVariableType || (exports.EvidenceVariableType = {}));
/** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
var EvidenceVariableCharacteristicGroupmeasure;
(function (EvidenceVariableCharacteristicGroupmeasure) {
    EvidenceVariableCharacteristicGroupmeasure["Mean"] = "mean";
    EvidenceVariableCharacteristicGroupmeasure["MeanOfMean"] = "mean-of-mean";
    EvidenceVariableCharacteristicGroupmeasure["MeanOfMedian"] = "mean-of-median";
    EvidenceVariableCharacteristicGroupmeasure["Median"] = "median";
    EvidenceVariableCharacteristicGroupmeasure["MedianOfMean"] = "median-of-mean";
    EvidenceVariableCharacteristicGroupmeasure["MedianOfMedian"] = "median-of-median";
})(EvidenceVariableCharacteristicGroupmeasure = exports.EvidenceVariableCharacteristicGroupmeasure || (exports.EvidenceVariableCharacteristicGroupmeasure = {}));
/** draft | active | retired | unknown */
var EvidenceVariableStatus;
(function (EvidenceVariableStatus) {
    EvidenceVariableStatus["Active"] = "active";
    EvidenceVariableStatus["Draft"] = "draft";
    EvidenceVariableStatus["Retired"] = "retired";
    EvidenceVariableStatus["Unknown"] = "unknown";
})(EvidenceVariableStatus = exports.EvidenceVariableStatus || (exports.EvidenceVariableStatus = {}));
