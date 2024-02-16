"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReconciliationStatus = exports.PaymentReconciliationOutcome = exports.PaymentReconciliationProcessnoteType = void 0;
/** display | print | printoper */
var PaymentReconciliationProcessnoteType;
(function (PaymentReconciliationProcessnoteType) {
    PaymentReconciliationProcessnoteType["Display"] = "display";
    PaymentReconciliationProcessnoteType["Print"] = "print";
    PaymentReconciliationProcessnoteType["Printoper"] = "printoper";
})(PaymentReconciliationProcessnoteType = exports.PaymentReconciliationProcessnoteType || (exports.PaymentReconciliationProcessnoteType = {}));
/** queued | complete | error | partial */
var PaymentReconciliationOutcome;
(function (PaymentReconciliationOutcome) {
    PaymentReconciliationOutcome["Complete"] = "complete";
    PaymentReconciliationOutcome["Error"] = "error";
    PaymentReconciliationOutcome["Partial"] = "partial";
    PaymentReconciliationOutcome["Queued"] = "queued";
})(PaymentReconciliationOutcome = exports.PaymentReconciliationOutcome || (exports.PaymentReconciliationOutcome = {}));
/** active | cancelled | draft | entered-in-error */
var PaymentReconciliationStatus;
(function (PaymentReconciliationStatus) {
    PaymentReconciliationStatus["Active"] = "active";
    PaymentReconciliationStatus["Cancelled"] = "cancelled";
    PaymentReconciliationStatus["Draft"] = "draft";
    PaymentReconciliationStatus["EnteredInError"] = "entered-in-error";
})(PaymentReconciliationStatus = exports.PaymentReconciliationStatus || (exports.PaymentReconciliationStatus = {}));
