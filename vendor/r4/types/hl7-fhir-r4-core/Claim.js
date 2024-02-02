"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimStatus = exports.ClaimUse = void 0;
/** claim | preauthorization | predetermination */
var ClaimUse;
(function (ClaimUse) {
    ClaimUse["Claim"] = "claim";
    ClaimUse["Preauthorization"] = "preauthorization";
    ClaimUse["Predetermination"] = "predetermination";
})(ClaimUse = exports.ClaimUse || (exports.ClaimUse = {}));
/** active | cancelled | draft | entered-in-error */
var ClaimStatus;
(function (ClaimStatus) {
    ClaimStatus["Active"] = "active";
    ClaimStatus["Cancelled"] = "cancelled";
    ClaimStatus["Draft"] = "draft";
    ClaimStatus["EnteredInError"] = "entered-in-error";
})(ClaimStatus = exports.ClaimStatus || (exports.ClaimStatus = {}));
