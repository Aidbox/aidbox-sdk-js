"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyRequestStatus = exports.SupplyRequestPriority = void 0;
/** routine | urgent | asap | stat */
var SupplyRequestPriority;
(function (SupplyRequestPriority) {
    SupplyRequestPriority["Asap"] = "asap";
    SupplyRequestPriority["Routine"] = "routine";
    SupplyRequestPriority["Stat"] = "stat";
    SupplyRequestPriority["Urgent"] = "urgent";
})(SupplyRequestPriority = exports.SupplyRequestPriority || (exports.SupplyRequestPriority = {}));
/** draft | active | suspended + */
var SupplyRequestStatus;
(function (SupplyRequestStatus) {
    SupplyRequestStatus["Active"] = "active";
    SupplyRequestStatus["Cancelled"] = "cancelled";
    SupplyRequestStatus["Completed"] = "completed";
    SupplyRequestStatus["Draft"] = "draft";
    SupplyRequestStatus["EnteredInError"] = "entered-in-error";
    SupplyRequestStatus["Suspended"] = "suspended";
    SupplyRequestStatus["Unknown"] = "unknown";
})(SupplyRequestStatus = exports.SupplyRequestStatus || (exports.SupplyRequestStatus = {}));
