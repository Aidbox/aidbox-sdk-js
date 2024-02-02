"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalLifecycleStatus = void 0;
/** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
var GoalLifecycleStatus;
(function (GoalLifecycleStatus) {
    GoalLifecycleStatus["Active"] = "active";
    GoalLifecycleStatus["Proposed"] = "proposed";
    GoalLifecycleStatus["Cancelled"] = "cancelled";
    GoalLifecycleStatus["Rejected"] = "rejected";
    GoalLifecycleStatus["Planned"] = "planned";
    GoalLifecycleStatus["EnteredInError"] = "entered-in-error";
    GoalLifecycleStatus["Completed"] = "completed";
    GoalLifecycleStatus["Accepted"] = "accepted";
    GoalLifecycleStatus["OnHold"] = "on-hold";
})(GoalLifecycleStatus = exports.GoalLifecycleStatus || (exports.GoalLifecycleStatus = {}));
