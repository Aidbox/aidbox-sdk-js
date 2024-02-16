"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionPrescriptionLensspecificationPrismBase = exports.VisionPrescriptionLensspecificationEye = exports.VisionPrescriptionStatus = void 0;
/** active | cancelled | draft | entered-in-error */
var VisionPrescriptionStatus;
(function (VisionPrescriptionStatus) {
    VisionPrescriptionStatus["Active"] = "active";
    VisionPrescriptionStatus["Cancelled"] = "cancelled";
    VisionPrescriptionStatus["Draft"] = "draft";
    VisionPrescriptionStatus["EnteredInError"] = "entered-in-error";
})(VisionPrescriptionStatus = exports.VisionPrescriptionStatus || (exports.VisionPrescriptionStatus = {}));
/** right | left */
var VisionPrescriptionLensspecificationEye;
(function (VisionPrescriptionLensspecificationEye) {
    VisionPrescriptionLensspecificationEye["Left"] = "left";
    VisionPrescriptionLensspecificationEye["Right"] = "right";
})(VisionPrescriptionLensspecificationEye = exports.VisionPrescriptionLensspecificationEye || (exports.VisionPrescriptionLensspecificationEye = {}));
/** up | down | in | out */
var VisionPrescriptionLensspecificationPrismBase;
(function (VisionPrescriptionLensspecificationPrismBase) {
    VisionPrescriptionLensspecificationPrismBase["Down"] = "down";
    VisionPrescriptionLensspecificationPrismBase["In"] = "in";
    VisionPrescriptionLensspecificationPrismBase["Out"] = "out";
    VisionPrescriptionLensspecificationPrismBase["Up"] = "up";
})(VisionPrescriptionLensspecificationPrismBase = exports.VisionPrescriptionLensspecificationPrismBase || (exports.VisionPrescriptionLensspecificationPrismBase = {}));
