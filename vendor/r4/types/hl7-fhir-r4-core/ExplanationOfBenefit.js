"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplanationOfBenefitUse = exports.ExplanationOfBenefitType = exports.ExplanationOfBenefitStatus = exports.ExplanationOfBenefitOutcome = void 0;
/** queued | complete | error | partial */
var ExplanationOfBenefitOutcome;
(function (ExplanationOfBenefitOutcome) {
    ExplanationOfBenefitOutcome["Complete"] = "complete";
    ExplanationOfBenefitOutcome["Error"] = "error";
    ExplanationOfBenefitOutcome["Partial"] = "partial";
    ExplanationOfBenefitOutcome["Queued"] = "queued";
})(ExplanationOfBenefitOutcome = exports.ExplanationOfBenefitOutcome || (exports.ExplanationOfBenefitOutcome = {}));
/** active | cancelled | draft | entered-in-error */
var ExplanationOfBenefitStatus;
(function (ExplanationOfBenefitStatus) {
    ExplanationOfBenefitStatus["Active"] = "active";
    ExplanationOfBenefitStatus["Cancelled"] = "cancelled";
    ExplanationOfBenefitStatus["Draft"] = "draft";
    ExplanationOfBenefitStatus["EnteredInError"] = "entered-in-error";
})(ExplanationOfBenefitStatus = exports.ExplanationOfBenefitStatus || (exports.ExplanationOfBenefitStatus = {}));
/** display | print | printoper */
var ExplanationOfBenefitType;
(function (ExplanationOfBenefitType) {
    ExplanationOfBenefitType["Display"] = "display";
    ExplanationOfBenefitType["Print"] = "print";
    ExplanationOfBenefitType["Printoper"] = "printoper";
})(ExplanationOfBenefitType = exports.ExplanationOfBenefitType || (exports.ExplanationOfBenefitType = {}));
/** claim | preauthorization | predetermination */
var ExplanationOfBenefitUse;
(function (ExplanationOfBenefitUse) {
    ExplanationOfBenefitUse["Claim"] = "claim";
    ExplanationOfBenefitUse["Preauthorization"] = "preauthorization";
    ExplanationOfBenefitUse["Predetermination"] = "predetermination";
})(ExplanationOfBenefitUse = exports.ExplanationOfBenefitUse || (exports.ExplanationOfBenefitUse = {}));
