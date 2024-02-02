"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageEligibilityResponseStatus = exports.CoverageEligibilityResponseOutcome = void 0;
/** queued | complete | error | partial */
var CoverageEligibilityResponseOutcome;
(function (CoverageEligibilityResponseOutcome) {
    CoverageEligibilityResponseOutcome["Complete"] = "complete";
    CoverageEligibilityResponseOutcome["Error"] = "error";
    CoverageEligibilityResponseOutcome["Partial"] = "partial";
    CoverageEligibilityResponseOutcome["Queued"] = "queued";
})(CoverageEligibilityResponseOutcome = exports.CoverageEligibilityResponseOutcome || (exports.CoverageEligibilityResponseOutcome = {}));
/** active | cancelled | draft | entered-in-error */
var CoverageEligibilityResponseStatus;
(function (CoverageEligibilityResponseStatus) {
    CoverageEligibilityResponseStatus["Active"] = "active";
    CoverageEligibilityResponseStatus["Cancelled"] = "cancelled";
    CoverageEligibilityResponseStatus["Draft"] = "draft";
    CoverageEligibilityResponseStatus["EnteredInError"] = "entered-in-error";
})(CoverageEligibilityResponseStatus = exports.CoverageEligibilityResponseStatus || (exports.CoverageEligibilityResponseStatus = {}));
