"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiologicallyDerivedProductProductCategory = exports.BiologicallyDerivedProductScale = exports.BiologicallyDerivedProductStatus = void 0;
/** available | unavailable */
var BiologicallyDerivedProductStatus;
(function (BiologicallyDerivedProductStatus) {
    BiologicallyDerivedProductStatus["Available"] = "available";
    BiologicallyDerivedProductStatus["Unavailable"] = "unavailable";
})(BiologicallyDerivedProductStatus = exports.BiologicallyDerivedProductStatus || (exports.BiologicallyDerivedProductStatus = {}));
/** farenheit | celsius | kelvin */
var BiologicallyDerivedProductScale;
(function (BiologicallyDerivedProductScale) {
    BiologicallyDerivedProductScale["Celsius"] = "celsius";
    BiologicallyDerivedProductScale["Farenheit"] = "farenheit";
    BiologicallyDerivedProductScale["Kelvin"] = "kelvin";
})(BiologicallyDerivedProductScale = exports.BiologicallyDerivedProductScale || (exports.BiologicallyDerivedProductScale = {}));
/** organ | tissue | fluid | cells | biologicalAgent */
var BiologicallyDerivedProductProductCategory;
(function (BiologicallyDerivedProductProductCategory) {
    BiologicallyDerivedProductProductCategory["BiologicalAgent"] = "biologicalAgent";
    BiologicallyDerivedProductProductCategory["Cells"] = "cells";
    BiologicallyDerivedProductProductCategory["Fluid"] = "fluid";
    BiologicallyDerivedProductProductCategory["Organ"] = "organ";
    BiologicallyDerivedProductProductCategory["Tissue"] = "tissue";
})(BiologicallyDerivedProductProductCategory = exports.BiologicallyDerivedProductProductCategory || (exports.BiologicallyDerivedProductProductCategory = {}));
