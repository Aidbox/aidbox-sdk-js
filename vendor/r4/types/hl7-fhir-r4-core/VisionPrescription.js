"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionPrescriptionBase = exports.VisionPrescriptionEye = exports.VisionPrescriptionStatus = void 0;
/** active | cancelled | draft | entered-in-error */
var VisionPrescriptionStatus;
(function (VisionPrescriptionStatus) {
    VisionPrescriptionStatus["Active"] = "active";
    VisionPrescriptionStatus["Cancelled"] = "cancelled";
    VisionPrescriptionStatus["Draft"] = "draft";
    VisionPrescriptionStatus["EnteredInError"] = "entered-in-error";
})(VisionPrescriptionStatus = exports.VisionPrescriptionStatus || (exports.VisionPrescriptionStatus = {}));
/** right | left */
var VisionPrescriptionEye;
(function (VisionPrescriptionEye) {
    VisionPrescriptionEye["Left"] = "left";
    VisionPrescriptionEye["Right"] = "right";
})(VisionPrescriptionEye = exports.VisionPrescriptionEye || (exports.VisionPrescriptionEye = {}));
/** up | down | in | out */
var VisionPrescriptionBase;
(function (VisionPrescriptionBase) {
    VisionPrescriptionBase["Down"] = "down";
    VisionPrescriptionBase["In"] = "in";
    VisionPrescriptionBase["Out"] = "out";
    VisionPrescriptionBase["Up"] = "up";
})(VisionPrescriptionBase = exports.VisionPrescriptionBase || (exports.VisionPrescriptionBase = {}));
