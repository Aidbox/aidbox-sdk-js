"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsurancePlanStatus = exports.InsurancePlanPlanSpecificcostBenefitCostApplicability = void 0;
/** in-network | out-of-network | other */
var InsurancePlanPlanSpecificcostBenefitCostApplicability;
(function (InsurancePlanPlanSpecificcostBenefitCostApplicability) {
    InsurancePlanPlanSpecificcostBenefitCostApplicability["InNetwork"] = "in-network";
    InsurancePlanPlanSpecificcostBenefitCostApplicability["Other"] = "other";
    InsurancePlanPlanSpecificcostBenefitCostApplicability["OutOfNetwork"] = "out-of-network";
})(InsurancePlanPlanSpecificcostBenefitCostApplicability = exports.InsurancePlanPlanSpecificcostBenefitCostApplicability || (exports.InsurancePlanPlanSpecificcostBenefitCostApplicability = {}));
/** draft | active | retired | unknown */
var InsurancePlanStatus;
(function (InsurancePlanStatus) {
    InsurancePlanStatus["Active"] = "active";
    InsurancePlanStatus["Draft"] = "draft";
    InsurancePlanStatus["Retired"] = "retired";
    InsurancePlanStatus["Unknown"] = "unknown";
})(InsurancePlanStatus = exports.InsurancePlanStatus || (exports.InsurancePlanStatus = {}));
