"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationRequestStatus = exports.CommunicationRequestPriority = void 0;
/** routine | urgent | asap | stat */
var CommunicationRequestPriority;
(function (CommunicationRequestPriority) {
    CommunicationRequestPriority["Asap"] = "asap";
    CommunicationRequestPriority["Routine"] = "routine";
    CommunicationRequestPriority["Stat"] = "stat";
    CommunicationRequestPriority["Urgent"] = "urgent";
})(CommunicationRequestPriority = exports.CommunicationRequestPriority || (exports.CommunicationRequestPriority = {}));
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
var CommunicationRequestStatus;
(function (CommunicationRequestStatus) {
    CommunicationRequestStatus["Active"] = "active";
    CommunicationRequestStatus["Completed"] = "completed";
    CommunicationRequestStatus["Draft"] = "draft";
    CommunicationRequestStatus["EnteredInError"] = "entered-in-error";
    CommunicationRequestStatus["OnHold"] = "on-hold";
    CommunicationRequestStatus["Revoked"] = "revoked";
    CommunicationRequestStatus["Unknown"] = "unknown";
})(CommunicationRequestStatus = exports.CommunicationRequestStatus || (exports.CommunicationRequestStatus = {}));
