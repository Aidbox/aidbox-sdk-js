"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureReportImprovementnotation = exports.MeasureReportStatus = exports.MeasureReportType = void 0;
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
var MeasureReportImprovementnotation;
(function (MeasureReportImprovementnotation) {
    MeasureReportImprovementnotation["Decrease"] = "decrease";
    MeasureReportImprovementnotation["Increase"] = "increase";
})(MeasureReportImprovementnotation = exports.MeasureReportImprovementnotation || (exports.MeasureReportImprovementnotation = {}));
