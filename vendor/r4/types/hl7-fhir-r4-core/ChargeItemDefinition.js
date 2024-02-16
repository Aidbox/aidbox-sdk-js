"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeItemDefinitionStatus = exports.ChargeItemDefinitionPropertygroupPricecomponentType = void 0;
/** base | surcharge | deduction | discount | tax | informational */
var ChargeItemDefinitionPropertygroupPricecomponentType;
(function (ChargeItemDefinitionPropertygroupPricecomponentType) {
    ChargeItemDefinitionPropertygroupPricecomponentType["Base"] = "base";
    ChargeItemDefinitionPropertygroupPricecomponentType["Deduction"] = "deduction";
    ChargeItemDefinitionPropertygroupPricecomponentType["Discount"] = "discount";
    ChargeItemDefinitionPropertygroupPricecomponentType["Informational"] = "informational";
    ChargeItemDefinitionPropertygroupPricecomponentType["Surcharge"] = "surcharge";
    ChargeItemDefinitionPropertygroupPricecomponentType["Tax"] = "tax";
})(ChargeItemDefinitionPropertygroupPricecomponentType = exports.ChargeItemDefinitionPropertygroupPricecomponentType || (exports.ChargeItemDefinitionPropertygroupPricecomponentType = {}));
/** draft | active | retired | unknown */
var ChargeItemDefinitionStatus;
(function (ChargeItemDefinitionStatus) {
    ChargeItemDefinitionStatus["Active"] = "active";
    ChargeItemDefinitionStatus["Draft"] = "draft";
    ChargeItemDefinitionStatus["Retired"] = "retired";
    ChargeItemDefinitionStatus["Unknown"] = "unknown";
})(ChargeItemDefinitionStatus = exports.ChargeItemDefinitionStatus || (exports.ChargeItemDefinitionStatus = {}));
