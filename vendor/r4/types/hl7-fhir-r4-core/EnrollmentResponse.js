"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentResponseStatus = exports.EnrollmentResponseOutcome = void 0;
/** queued | complete | error | partial */
var EnrollmentResponseOutcome;
(function (EnrollmentResponseOutcome) {
    EnrollmentResponseOutcome["Complete"] = "complete";
    EnrollmentResponseOutcome["Error"] = "error";
    EnrollmentResponseOutcome["Partial"] = "partial";
    EnrollmentResponseOutcome["Queued"] = "queued";
})(EnrollmentResponseOutcome = exports.EnrollmentResponseOutcome || (exports.EnrollmentResponseOutcome = {}));
/** active | cancelled | draft | entered-in-error */
var EnrollmentResponseStatus;
(function (EnrollmentResponseStatus) {
    EnrollmentResponseStatus["Active"] = "active";
    EnrollmentResponseStatus["Cancelled"] = "cancelled";
    EnrollmentResponseStatus["Draft"] = "draft";
    EnrollmentResponseStatus["EnteredInError"] = "entered-in-error";
})(EnrollmentResponseStatus = exports.EnrollmentResponseStatus || (exports.EnrollmentResponseStatus = {}));
