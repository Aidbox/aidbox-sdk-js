"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeItemDefinitionStatus = exports.ChargeItemDefinitionType = void 0;
/** base | surcharge | deduction | discount | tax | informational */
var ChargeItemDefinitionType;
(function (ChargeItemDefinitionType) {
    ChargeItemDefinitionType["Base"] = "base";
    ChargeItemDefinitionType["Deduction"] = "deduction";
    ChargeItemDefinitionType["Discount"] = "discount";
    ChargeItemDefinitionType["Informational"] = "informational";
    ChargeItemDefinitionType["Surcharge"] = "surcharge";
    ChargeItemDefinitionType["Tax"] = "tax";
})(ChargeItemDefinitionType = exports.ChargeItemDefinitionType || (exports.ChargeItemDefinitionType = {}));
/** draft | active | retired | unknown */
var ChargeItemDefinitionStatus;
(function (ChargeItemDefinitionStatus) {
    ChargeItemDefinitionStatus["Active"] = "active";
    ChargeItemDefinitionStatus["Draft"] = "draft";
    ChargeItemDefinitionStatus["Retired"] = "retired";
    ChargeItemDefinitionStatus["Unknown"] = "unknown";
})(ChargeItemDefinitionStatus = exports.ChargeItemDefinitionStatus || (exports.ChargeItemDefinitionStatus = {}));
