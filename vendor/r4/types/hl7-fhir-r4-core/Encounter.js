"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterStatus = exports.EncounterStatushistoryStatus = exports.EncounterLocationStatus = void 0;
/** planned | active | reserved | completed */
var EncounterLocationStatus;
(function (EncounterLocationStatus) {
    EncounterLocationStatus["Active"] = "active";
    EncounterLocationStatus["Completed"] = "completed";
    EncounterLocationStatus["Planned"] = "planned";
    EncounterLocationStatus["Reserved"] = "reserved";
})(EncounterLocationStatus = exports.EncounterLocationStatus || (exports.EncounterLocationStatus = {}));
/** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
var EncounterStatushistoryStatus;
(function (EncounterStatushistoryStatus) {
    EncounterStatushistoryStatus["Cancelled"] = "cancelled";
    EncounterStatushistoryStatus["Arrived"] = "arrived";
    EncounterStatushistoryStatus["Onleave"] = "onleave";
    EncounterStatushistoryStatus["Triaged"] = "triaged";
    EncounterStatushistoryStatus["Planned"] = "planned";
    EncounterStatushistoryStatus["Unknown"] = "unknown";
    EncounterStatushistoryStatus["InProgress"] = "in-progress";
    EncounterStatushistoryStatus["EnteredInError"] = "entered-in-error";
    EncounterStatushistoryStatus["Finished"] = "finished";
})(EncounterStatushistoryStatus = exports.EncounterStatushistoryStatus || (exports.EncounterStatushistoryStatus = {}));
/** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
var EncounterStatus;
(function (EncounterStatus) {
    EncounterStatus["Cancelled"] = "cancelled";
    EncounterStatus["Arrived"] = "arrived";
    EncounterStatus["Onleave"] = "onleave";
    EncounterStatus["Triaged"] = "triaged";
    EncounterStatus["Planned"] = "planned";
    EncounterStatus["Unknown"] = "unknown";
    EncounterStatus["InProgress"] = "in-progress";
    EncounterStatus["EnteredInError"] = "entered-in-error";
    EncounterStatus["Finished"] = "finished";
})(EncounterStatus = exports.EncounterStatus || (exports.EncounterStatus = {}));
