"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionStatus = exports.CompositionCode = exports.CompositionMode = exports.CompositionConfidentiality = exports.CompositionSectionMode = void 0;
/** working | snapshot | changes */
var CompositionSectionMode;
(function (CompositionSectionMode) {
    CompositionSectionMode["Changes"] = "changes";
    CompositionSectionMode["Snapshot"] = "snapshot";
    CompositionSectionMode["Working"] = "working";
})(CompositionSectionMode = exports.CompositionSectionMode || (exports.CompositionSectionMode = {}));
/** As defined by affinity domain */
var CompositionConfidentiality;
(function (CompositionConfidentiality) {
    CompositionConfidentiality["L"] = "L";
    CompositionConfidentiality["M"] = "M";
    CompositionConfidentiality["R"] = "R";
    CompositionConfidentiality["V"] = "V";
    CompositionConfidentiality["U"] = "U";
    CompositionConfidentiality["N"] = "N";
})(CompositionConfidentiality = exports.CompositionConfidentiality || (exports.CompositionConfidentiality = {}));
/** personal | professional | legal | official */
var CompositionMode;
(function (CompositionMode) {
    CompositionMode["Legal"] = "legal";
    CompositionMode["Official"] = "official";
    CompositionMode["Personal"] = "personal";
    CompositionMode["Professional"] = "professional";
})(CompositionMode = exports.CompositionMode || (exports.CompositionMode = {}));
/** replaces | transforms | signs | appends */
var CompositionCode;
(function (CompositionCode) {
    CompositionCode["Appends"] = "appends";
    CompositionCode["Replaces"] = "replaces";
    CompositionCode["Signs"] = "signs";
    CompositionCode["Transforms"] = "transforms";
})(CompositionCode = exports.CompositionCode || (exports.CompositionCode = {}));
/** preliminary | final | amended | entered-in-error */
var CompositionStatus;
(function (CompositionStatus) {
    CompositionStatus["Amended"] = "amended";
    CompositionStatus["EnteredInError"] = "entered-in-error";
    CompositionStatus["Final"] = "final";
    CompositionStatus["Preliminary"] = "preliminary";
})(CompositionStatus = exports.CompositionStatus || (exports.CompositionStatus = {}));
