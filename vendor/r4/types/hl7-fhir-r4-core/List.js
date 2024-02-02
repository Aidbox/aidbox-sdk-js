"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStatus = exports.ListMode = void 0;
/** working | snapshot | changes */
var ListMode;
(function (ListMode) {
    ListMode["Changes"] = "changes";
    ListMode["Snapshot"] = "snapshot";
    ListMode["Working"] = "working";
})(ListMode = exports.ListMode || (exports.ListMode = {}));
/** current | retired | entered-in-error */
var ListStatus;
(function (ListStatus) {
    ListStatus["Current"] = "current";
    ListStatus["EnteredInError"] = "entered-in-error";
    ListStatus["Retired"] = "retired";
})(ListStatus = exports.ListStatus || (exports.ListStatus = {}));
