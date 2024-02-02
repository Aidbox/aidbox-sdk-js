"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStatus = void 0;
/** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
var MediaStatus;
(function (MediaStatus) {
    MediaStatus["Completed"] = "completed";
    MediaStatus["EnteredInError"] = "entered-in-error";
    MediaStatus["InProgress"] = "in-progress";
    MediaStatus["NotDone"] = "not-done";
    MediaStatus["OnHold"] = "on-hold";
    MediaStatus["Preparation"] = "preparation";
    MediaStatus["Stopped"] = "stopped";
    MediaStatus["Unknown"] = "unknown";
})(MediaStatus = exports.MediaStatus || (exports.MediaStatus = {}));
