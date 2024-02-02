"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterStatus = void 0;
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
