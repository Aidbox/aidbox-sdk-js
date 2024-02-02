"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationStatus = exports.CommunicationPriority = void 0;
/** routine | urgent | asap | stat */
var CommunicationPriority;
(function (CommunicationPriority) {
    CommunicationPriority["Asap"] = "asap";
    CommunicationPriority["Routine"] = "routine";
    CommunicationPriority["Stat"] = "stat";
    CommunicationPriority["Urgent"] = "urgent";
})(CommunicationPriority = exports.CommunicationPriority || (exports.CommunicationPriority = {}));
/** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
var CommunicationStatus;
(function (CommunicationStatus) {
    CommunicationStatus["Completed"] = "completed";
    CommunicationStatus["EnteredInError"] = "entered-in-error";
    CommunicationStatus["InProgress"] = "in-progress";
    CommunicationStatus["NotDone"] = "not-done";
    CommunicationStatus["OnHold"] = "on-hold";
    CommunicationStatus["Preparation"] = "preparation";
    CommunicationStatus["Stopped"] = "stopped";
    CommunicationStatus["Unknown"] = "unknown";
})(CommunicationStatus = exports.CommunicationStatus || (exports.CommunicationStatus = {}));
