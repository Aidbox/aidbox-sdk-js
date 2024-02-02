"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionOrderIntent = exports.NutritionOrderStatus = void 0;
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
var NutritionOrderStatus;
(function (NutritionOrderStatus) {
    NutritionOrderStatus["Active"] = "active";
    NutritionOrderStatus["Completed"] = "completed";
    NutritionOrderStatus["Draft"] = "draft";
    NutritionOrderStatus["EnteredInError"] = "entered-in-error";
    NutritionOrderStatus["OnHold"] = "on-hold";
    NutritionOrderStatus["Revoked"] = "revoked";
    NutritionOrderStatus["Unknown"] = "unknown";
})(NutritionOrderStatus = exports.NutritionOrderStatus || (exports.NutritionOrderStatus = {}));
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
var NutritionOrderIntent;
(function (NutritionOrderIntent) {
    NutritionOrderIntent["Order"] = "order";
    NutritionOrderIntent["FillerOrder"] = "filler-order";
    NutritionOrderIntent["Option"] = "option";
    NutritionOrderIntent["Directive"] = "directive";
    NutritionOrderIntent["Proposal"] = "proposal";
    NutritionOrderIntent["ReflexOrder"] = "reflex-order";
    NutritionOrderIntent["Plan"] = "plan";
    NutritionOrderIntent["InstanceOrder"] = "instance-order";
    NutritionOrderIntent["OriginalOrder"] = "original-order";
})(NutritionOrderIntent = exports.NutritionOrderIntent || (exports.NutritionOrderIntent = {}));
