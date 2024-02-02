"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotStatus = void 0;
/** busy | free | busy-unavailable | busy-tentative | entered-in-error */
var SlotStatus;
(function (SlotStatus) {
    SlotStatus["Busy"] = "busy";
    SlotStatus["BusyTentative"] = "busy-tentative";
    SlotStatus["BusyUnavailable"] = "busy-unavailable";
    SlotStatus["EnteredInError"] = "entered-in-error";
    SlotStatus["Free"] = "free";
})(SlotStatus = exports.SlotStatus || (exports.SlotStatus = {}));
