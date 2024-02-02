"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequestIntent = exports.ServiceRequestStatus = exports.ServiceRequestPriority = void 0;
/** routine | urgent | asap | stat */
var ServiceRequestPriority;
(function (ServiceRequestPriority) {
    ServiceRequestPriority["Asap"] = "asap";
    ServiceRequestPriority["Routine"] = "routine";
    ServiceRequestPriority["Stat"] = "stat";
    ServiceRequestPriority["Urgent"] = "urgent";
})(ServiceRequestPriority = exports.ServiceRequestPriority || (exports.ServiceRequestPriority = {}));
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
var ServiceRequestStatus;
(function (ServiceRequestStatus) {
    ServiceRequestStatus["Active"] = "active";
    ServiceRequestStatus["Completed"] = "completed";
    ServiceRequestStatus["Draft"] = "draft";
    ServiceRequestStatus["EnteredInError"] = "entered-in-error";
    ServiceRequestStatus["OnHold"] = "on-hold";
    ServiceRequestStatus["Revoked"] = "revoked";
    ServiceRequestStatus["Unknown"] = "unknown";
})(ServiceRequestStatus = exports.ServiceRequestStatus || (exports.ServiceRequestStatus = {}));
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
var ServiceRequestIntent;
(function (ServiceRequestIntent) {
    ServiceRequestIntent["Order"] = "order";
    ServiceRequestIntent["FillerOrder"] = "filler-order";
    ServiceRequestIntent["Option"] = "option";
    ServiceRequestIntent["Directive"] = "directive";
    ServiceRequestIntent["Proposal"] = "proposal";
    ServiceRequestIntent["ReflexOrder"] = "reflex-order";
    ServiceRequestIntent["Plan"] = "plan";
    ServiceRequestIntent["InstanceOrder"] = "instance-order";
    ServiceRequestIntent["OriginalOrder"] = "original-order";
})(ServiceRequestIntent = exports.ServiceRequestIntent || (exports.ServiceRequestIntent = {}));
