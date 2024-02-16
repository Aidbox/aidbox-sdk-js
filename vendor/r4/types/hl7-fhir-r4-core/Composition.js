"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionRelatestoCode = exports.CompositionStatus = exports.CompositionAttesterMode = exports.CompositionConfidentiality = exports.CompositionSectionMode = void 0;
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
var CompositionAttesterMode;
(function (CompositionAttesterMode) {
    CompositionAttesterMode["Legal"] = "legal";
    CompositionAttesterMode["Official"] = "official";
    CompositionAttesterMode["Personal"] = "personal";
    CompositionAttesterMode["Professional"] = "professional";
})(CompositionAttesterMode = exports.CompositionAttesterMode || (exports.CompositionAttesterMode = {}));
/** preliminary | final | amended | entered-in-error */
var CompositionStatus;
(function (CompositionStatus) {
    CompositionStatus["Amended"] = "amended";
    CompositionStatus["EnteredInError"] = "entered-in-error";
    CompositionStatus["Final"] = "final";
    CompositionStatus["Preliminary"] = "preliminary";
})(CompositionStatus = exports.CompositionStatus || (exports.CompositionStatus = {}));
/** replaces | transforms | signs | appends */
var CompositionRelatestoCode;
(function (CompositionRelatestoCode) {
    CompositionRelatestoCode["Appends"] = "appends";
    CompositionRelatestoCode["Replaces"] = "replaces";
    CompositionRelatestoCode["Signs"] = "signs";
    CompositionRelatestoCode["Transforms"] = "transforms";
})(CompositionRelatestoCode = exports.CompositionRelatestoCode || (exports.CompositionRelatestoCode = {}));
