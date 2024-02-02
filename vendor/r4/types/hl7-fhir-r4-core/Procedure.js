"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureStatus = void 0;
/** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
var ProcedureStatus;
(function (ProcedureStatus) {
    ProcedureStatus["Completed"] = "completed";
    ProcedureStatus["EnteredInError"] = "entered-in-error";
    ProcedureStatus["InProgress"] = "in-progress";
    ProcedureStatus["NotDone"] = "not-done";
    ProcedureStatus["OnHold"] = "on-hold";
    ProcedureStatus["Preparation"] = "preparation";
    ProcedureStatus["Stopped"] = "stopped";
    ProcedureStatus["Unknown"] = "unknown";
})(ProcedureStatus = exports.ProcedureStatus || (exports.ProcedureStatus = {}));
