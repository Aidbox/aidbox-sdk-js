"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimResponseOutcome = exports.ClaimResponseStatus = exports.ClaimResponseType = exports.ClaimResponseUse = void 0;
/** claim | preauthorization | predetermination */
var ClaimResponseUse;
(function (ClaimResponseUse) {
    ClaimResponseUse["Claim"] = "claim";
    ClaimResponseUse["Preauthorization"] = "preauthorization";
    ClaimResponseUse["Predetermination"] = "predetermination";
})(ClaimResponseUse = exports.ClaimResponseUse || (exports.ClaimResponseUse = {}));
/** display | print | printoper */
var ClaimResponseType;
(function (ClaimResponseType) {
    ClaimResponseType["Display"] = "display";
    ClaimResponseType["Print"] = "print";
    ClaimResponseType["Printoper"] = "printoper";
})(ClaimResponseType = exports.ClaimResponseType || (exports.ClaimResponseType = {}));
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
