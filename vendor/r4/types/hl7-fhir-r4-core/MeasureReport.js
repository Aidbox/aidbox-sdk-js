"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureReportImprovementNotation = exports.MeasureReportStatus = exports.MeasureReportType = void 0;
/** individual | subject-list | summary | data-collection */
var MeasureReportType;
(function (MeasureReportType) {
    MeasureReportType["DataCollection"] = "data-collection";
    MeasureReportType["Individual"] = "individual";
    MeasureReportType["SubjectList"] = "subject-list";
    MeasureReportType["Summary"] = "summary";
})(MeasureReportType = exports.MeasureReportType || (exports.MeasureReportType = {}));
/** complete | pending | error */
var MeasureReportStatus;
(function (MeasureReportStatus) {
    MeasureReportStatus["Complete"] = "complete";
    MeasureReportStatus["Error"] = "error";
    MeasureReportStatus["Pending"] = "pending";
})(MeasureReportStatus = exports.MeasureReportStatus || (exports.MeasureReportStatus = {}));
/** increase | decrease */
var MeasureReportImprovementNotation;
(function (MeasureReportImprovementNotation) {
    MeasureReportImprovementNotation["Decrease"] = "decrease";
    MeasureReportImprovementNotation["Increase"] = "increase";
})(MeasureReportImprovementNotation = exports.MeasureReportImprovementNotation || (exports.MeasureReportImprovementNotation = {}));
