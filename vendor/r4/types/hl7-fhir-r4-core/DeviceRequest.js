"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRequestIntent = exports.DeviceRequestStatus = exports.DeviceRequestPriority = void 0;
/** routine | urgent | asap | stat */
var DeviceRequestPriority;
(function (DeviceRequestPriority) {
    DeviceRequestPriority["Asap"] = "asap";
    DeviceRequestPriority["Routine"] = "routine";
    DeviceRequestPriority["Stat"] = "stat";
    DeviceRequestPriority["Urgent"] = "urgent";
})(DeviceRequestPriority = exports.DeviceRequestPriority || (exports.DeviceRequestPriority = {}));
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
var DeviceRequestStatus;
(function (DeviceRequestStatus) {
    DeviceRequestStatus["Active"] = "active";
    DeviceRequestStatus["Completed"] = "completed";
    DeviceRequestStatus["Draft"] = "draft";
    DeviceRequestStatus["EnteredInError"] = "entered-in-error";
    DeviceRequestStatus["OnHold"] = "on-hold";
    DeviceRequestStatus["Revoked"] = "revoked";
    DeviceRequestStatus["Unknown"] = "unknown";
})(DeviceRequestStatus = exports.DeviceRequestStatus || (exports.DeviceRequestStatus = {}));
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
var DeviceRequestIntent;
(function (DeviceRequestIntent) {
    DeviceRequestIntent["Order"] = "order";
    DeviceRequestIntent["FillerOrder"] = "filler-order";
    DeviceRequestIntent["Option"] = "option";
    DeviceRequestIntent["Directive"] = "directive";
    DeviceRequestIntent["Proposal"] = "proposal";
    DeviceRequestIntent["ReflexOrder"] = "reflex-order";
    DeviceRequestIntent["Plan"] = "plan";
    DeviceRequestIntent["InstanceOrder"] = "instance-order";
    DeviceRequestIntent["OriginalOrder"] = "original-order";
})(DeviceRequestIntent = exports.DeviceRequestIntent || (exports.DeviceRequestIntent = {}));
