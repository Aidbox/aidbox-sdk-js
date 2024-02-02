"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdverseEventSeverity = exports.AdverseEventOutcome = exports.AdverseEventActuality = void 0;
/** actual | potential */
var AdverseEventActuality;
(function (AdverseEventActuality) {
    AdverseEventActuality["Actual"] = "actual";
    AdverseEventActuality["Potential"] = "potential";
})(AdverseEventActuality = exports.AdverseEventActuality || (exports.AdverseEventActuality = {}));
/** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
var AdverseEventOutcome;
(function (AdverseEventOutcome) {
    AdverseEventOutcome["Fatal"] = "fatal";
    AdverseEventOutcome["Ongoing"] = "ongoing";
    AdverseEventOutcome["Recovering"] = "recovering";
    AdverseEventOutcome["Resolved"] = "resolved";
    AdverseEventOutcome["ResolvedWithSequelae"] = "resolvedWithSequelae";
    AdverseEventOutcome["Unknown"] = "unknown";
})(AdverseEventOutcome = exports.AdverseEventOutcome || (exports.AdverseEventOutcome = {}));
/** mild | moderate | severe */
var AdverseEventSeverity;
(function (AdverseEventSeverity) {
    AdverseEventSeverity["Mild"] = "mild";
    AdverseEventSeverity["Moderate"] = "moderate";
    AdverseEventSeverity["Severe"] = "severe";
})(AdverseEventSeverity = exports.AdverseEventSeverity || (exports.AdverseEventSeverity = {}));
