"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEventAction = exports.AuditEventAgentNetworkType = exports.AuditEventOutcome = void 0;
/** Whether the event succeeded or failed */
var AuditEventOutcome;
(function (AuditEventOutcome) {
    AuditEventOutcome["Num0"] = "0";
    AuditEventOutcome["Num12"] = "12";
    AuditEventOutcome["Num4"] = "4";
    AuditEventOutcome["Num8"] = "8";
})(AuditEventOutcome = exports.AuditEventOutcome || (exports.AuditEventOutcome = {}));
/** The type of network access point */
var AuditEventAgentNetworkType;
(function (AuditEventAgentNetworkType) {
    AuditEventAgentNetworkType["Num1"] = "1";
    AuditEventAgentNetworkType["Num2"] = "2";
    AuditEventAgentNetworkType["Num3"] = "3";
    AuditEventAgentNetworkType["Num4"] = "4";
    AuditEventAgentNetworkType["Num5"] = "5";
})(AuditEventAgentNetworkType = exports.AuditEventAgentNetworkType || (exports.AuditEventAgentNetworkType = {}));
/** Type of action performed during the event */
var AuditEventAction;
(function (AuditEventAction) {
    AuditEventAction["C"] = "C";
    AuditEventAction["D"] = "D";
    AuditEventAction["E"] = "E";
    AuditEventAction["R"] = "R";
    AuditEventAction["U"] = "U";
})(AuditEventAction = exports.AuditEventAction || (exports.AuditEventAction = {}));
