"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskIntent = exports.TaskStatus = exports.TaskPriority = void 0;
/** routine | urgent | asap | stat */
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["Asap"] = "asap";
    TaskPriority["Routine"] = "routine";
    TaskPriority["Stat"] = "stat";
    TaskPriority["Urgent"] = "urgent";
})(TaskPriority = exports.TaskPriority || (exports.TaskPriority = {}));
/** draft | requested | received | accepted | + */
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Draft"] = "draft";
    TaskStatus["Failed"] = "failed";
    TaskStatus["Cancelled"] = "cancelled";
    TaskStatus["Rejected"] = "rejected";
    TaskStatus["Ready"] = "ready";
    TaskStatus["InProgress"] = "in-progress";
    TaskStatus["EnteredInError"] = "entered-in-error";
    TaskStatus["Completed"] = "completed";
    TaskStatus["Received"] = "received";
    TaskStatus["Requested"] = "requested";
    TaskStatus["Accepted"] = "accepted";
    TaskStatus["OnHold"] = "on-hold";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
/** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
var TaskIntent;
(function (TaskIntent) {
    TaskIntent["Order"] = "order";
    TaskIntent["FillerOrder"] = "filler-order";
    TaskIntent["Option"] = "option";
    TaskIntent["Unknown"] = "unknown";
    TaskIntent["Proposal"] = "proposal";
    TaskIntent["ReflexOrder"] = "reflex-order";
    TaskIntent["Plan"] = "plan";
    TaskIntent["InstanceOrder"] = "instance-order";
    TaskIntent["OriginalOrder"] = "original-order";
})(TaskIntent = exports.TaskIntent || (exports.TaskIntent = {}));
