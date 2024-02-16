"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientContactGender = exports.PatientGender = exports.PatientLinkType = void 0;
/** replaced-by | replaces | refer | seealso */
var PatientLinkType;
(function (PatientLinkType) {
    PatientLinkType["Refer"] = "refer";
    PatientLinkType["ReplacedBy"] = "replaced-by";
    PatientLinkType["Replaces"] = "replaces";
    PatientLinkType["Seealso"] = "seealso";
})(PatientLinkType = exports.PatientLinkType || (exports.PatientLinkType = {}));
/** male | female | other | unknown */
var PatientGender;
(function (PatientGender) {
    PatientGender["Female"] = "female";
    PatientGender["Male"] = "male";
    PatientGender["Other"] = "other";
    PatientGender["Unknown"] = "unknown";
})(PatientGender = exports.PatientGender || (exports.PatientGender = {}));
/** male | female | other | unknown */
var PatientContactGender;
(function (PatientContactGender) {
    PatientContactGender["Female"] = "female";
    PatientContactGender["Male"] = "male";
    PatientContactGender["Other"] = "other";
    PatientContactGender["Unknown"] = "unknown";
})(PatientContactGender = exports.PatientContactGender || (exports.PatientContactGender = {}));
