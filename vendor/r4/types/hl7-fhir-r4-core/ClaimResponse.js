"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimResponseProcessnoteType = exports.ClaimResponseOutcome = exports.ClaimResponseStatus = exports.ClaimResponseUse = void 0;
/** claim | preauthorization | predetermination */
var ClaimResponseUse;
(function (ClaimResponseUse) {
    ClaimResponseUse["Claim"] = "claim";
    ClaimResponseUse["Preauthorization"] = "preauthorization";
    ClaimResponseUse["Predetermination"] = "predetermination";
})(ClaimResponseUse = exports.ClaimResponseUse || (exports.ClaimResponseUse = {}));
/** active | cancelled | draft | entered-in-error */
var ClaimResponseStatus;
(function (ClaimResponseStatus) {
    ClaimResponseStatus["Active"] = "active";
    ClaimResponseStatus["Cancelled"] = "cancelled";
    ClaimResponseStatus["Draft"] = "draft";
    ClaimResponseStatus["EnteredInError"] = "entered-in-error";
})(ClaimResponseStatus = exports.ClaimResponseStatus || (exports.ClaimResponseStatus = {}));
/** queued | complete | error | partial */
var ClaimResponseOutcome;
(function (ClaimResponseOutcome) {
    ClaimResponseOutcome["Complete"] = "complete";
    ClaimResponseOutcome["Error"] = "error";
    ClaimResponseOutcome["Partial"] = "partial";
    ClaimResponseOutcome["Queued"] = "queued";
})(ClaimResponseOutcome = exports.ClaimResponseOutcome || (exports.ClaimResponseOutcome = {}));
/** display | print | printoper */
var ClaimResponseProcessnoteType;
(function (ClaimResponseProcessnoteType) {
    ClaimResponseProcessnoteType["Display"] = "display";
    ClaimResponseProcessnoteType["Print"] = "print";
    ClaimResponseProcessnoteType["Printoper"] = "printoper";
})(ClaimResponseProcessnoteType = exports.ClaimResponseProcessnoteType || (exports.ClaimResponseProcessnoteType = {}));
