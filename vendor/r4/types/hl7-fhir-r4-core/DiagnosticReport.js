"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticReportStatus = void 0;
/** registered | partial | preliminary | final + */
var DiagnosticReportStatus;
(function (DiagnosticReportStatus) {
    DiagnosticReportStatus["Cancelled"] = "cancelled";
    DiagnosticReportStatus["Partial"] = "partial";
    DiagnosticReportStatus["Amended"] = "amended";
    DiagnosticReportStatus["Registered"] = "registered";
    DiagnosticReportStatus["Corrected"] = "corrected";
    DiagnosticReportStatus["Final"] = "final";
    DiagnosticReportStatus["Preliminary"] = "preliminary";
    DiagnosticReportStatus["Unknown"] = "unknown";
    DiagnosticReportStatus["Appended"] = "appended";
    DiagnosticReportStatus["EnteredInError"] = "entered-in-error";
})(DiagnosticReportStatus = exports.DiagnosticReportStatus || (exports.DiagnosticReportStatus = {}));
