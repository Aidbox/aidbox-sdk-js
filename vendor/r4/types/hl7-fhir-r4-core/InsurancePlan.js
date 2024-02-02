"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsurancePlanStatus = exports.InsurancePlanApplicability = void 0;
/** in-network | out-of-network | other */
var InsurancePlanApplicability;
(function (InsurancePlanApplicability) {
    InsurancePlanApplicability["InNetwork"] = "in-network";
    InsurancePlanApplicability["Other"] = "other";
    InsurancePlanApplicability["OutOfNetwork"] = "out-of-network";
})(InsurancePlanApplicability = exports.InsurancePlanApplicability || (exports.InsurancePlanApplicability = {}));
/** draft | active | retired | unknown */
var InsurancePlanStatus;
(function (InsurancePlanStatus) {
    InsurancePlanStatus["Active"] = "active";
    InsurancePlanStatus["Draft"] = "draft";
    InsurancePlanStatus["Retired"] = "retired";
    InsurancePlanStatus["Unknown"] = "unknown";
})(InsurancePlanStatus = exports.InsurancePlanStatus || (exports.InsurancePlanStatus = {}));
