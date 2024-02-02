"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientGender = exports.PatientType = void 0;
/** replaced-by | replaces | refer | seealso */
var PatientType;
(function (PatientType) {
    PatientType["Refer"] = "refer";
    PatientType["ReplacedBy"] = "replaced-by";
    PatientType["Replaces"] = "replaces";
    PatientType["Seealso"] = "seealso";
})(PatientType = exports.PatientType || (exports.PatientType = {}));
/** male | female | other | unknown */
var PatientGender;
(function (PatientGender) {
    PatientGender["Female"] = "female";
    PatientGender["Male"] = "male";
    PatientGender["Other"] = "other";
    PatientGender["Unknown"] = "unknown";
})(PatientGender = exports.PatientGender || (exports.PatientGender = {}));
