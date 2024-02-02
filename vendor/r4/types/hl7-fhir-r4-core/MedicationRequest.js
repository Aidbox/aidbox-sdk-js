"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationRequestIntent = exports.MedicationRequestStatus = exports.MedicationRequestPriority = void 0;
/** routine | urgent | asap | stat */
var MedicationRequestPriority;
(function (MedicationRequestPriority) {
    MedicationRequestPriority["Asap"] = "asap";
    MedicationRequestPriority["Routine"] = "routine";
    MedicationRequestPriority["Stat"] = "stat";
    MedicationRequestPriority["Urgent"] = "urgent";
})(MedicationRequestPriority = exports.MedicationRequestPriority || (exports.MedicationRequestPriority = {}));
/** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
var MedicationRequestStatus;
(function (MedicationRequestStatus) {
    MedicationRequestStatus["Active"] = "active";
    MedicationRequestStatus["Cancelled"] = "cancelled";
    MedicationRequestStatus["Completed"] = "completed";
    MedicationRequestStatus["Draft"] = "draft";
    MedicationRequestStatus["EnteredInError"] = "entered-in-error";
    MedicationRequestStatus["OnHold"] = "on-hold";
    MedicationRequestStatus["Stopped"] = "stopped";
    MedicationRequestStatus["Unknown"] = "unknown";
})(MedicationRequestStatus = exports.MedicationRequestStatus || (exports.MedicationRequestStatus = {}));
/** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
var MedicationRequestIntent;
(function (MedicationRequestIntent) {
    MedicationRequestIntent["FillerOrder"] = "filler-order";
    MedicationRequestIntent["InstanceOrder"] = "instance-order";
    MedicationRequestIntent["Option"] = "option";
    MedicationRequestIntent["Order"] = "order";
    MedicationRequestIntent["OriginalOrder"] = "original-order";
    MedicationRequestIntent["Plan"] = "plan";
    MedicationRequestIntent["Proposal"] = "proposal";
    MedicationRequestIntent["ReflexOrder"] = "reflex-order";
})(MedicationRequestIntent = exports.MedicationRequestIntent || (exports.MedicationRequestIntent = {}));
