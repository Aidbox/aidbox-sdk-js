"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiologicallyDerivedProductProductcategory = exports.BiologicallyDerivedProductStorageScale = exports.BiologicallyDerivedProductStatus = void 0;
/** available | unavailable */
var BiologicallyDerivedProductStatus;
(function (BiologicallyDerivedProductStatus) {
    BiologicallyDerivedProductStatus["Available"] = "available";
    BiologicallyDerivedProductStatus["Unavailable"] = "unavailable";
})(BiologicallyDerivedProductStatus = exports.BiologicallyDerivedProductStatus || (exports.BiologicallyDerivedProductStatus = {}));
/** farenheit | celsius | kelvin */
var BiologicallyDerivedProductStorageScale;
(function (BiologicallyDerivedProductStorageScale) {
    BiologicallyDerivedProductStorageScale["Celsius"] = "celsius";
    BiologicallyDerivedProductStorageScale["Farenheit"] = "farenheit";
    BiologicallyDerivedProductStorageScale["Kelvin"] = "kelvin";
})(BiologicallyDerivedProductStorageScale = exports.BiologicallyDerivedProductStorageScale || (exports.BiologicallyDerivedProductStorageScale = {}));
/** organ | tissue | fluid | cells | biologicalAgent */
var BiologicallyDerivedProductProductcategory;
(function (BiologicallyDerivedProductProductcategory) {
    BiologicallyDerivedProductProductcategory["BiologicalAgent"] = "biologicalAgent";
    BiologicallyDerivedProductProductcategory["Cells"] = "cells";
    BiologicallyDerivedProductProductcategory["Fluid"] = "fluid";
    BiologicallyDerivedProductProductcategory["Organ"] = "organ";
    BiologicallyDerivedProductProductcategory["Tissue"] = "tissue";
})(BiologicallyDerivedProductProductcategory = exports.BiologicallyDerivedProductProductcategory || (exports.BiologicallyDerivedProductProductcategory = {}));
