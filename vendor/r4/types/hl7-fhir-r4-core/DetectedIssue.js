"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedIssueSeverity = exports.DetectedIssueStatus = void 0;
/** registered | preliminary | final | amended + */
var DetectedIssueStatus;
(function (DetectedIssueStatus) {
    DetectedIssueStatus["Amended"] = "amended";
    DetectedIssueStatus["Cancelled"] = "cancelled";
    DetectedIssueStatus["Corrected"] = "corrected";
    DetectedIssueStatus["EnteredInError"] = "entered-in-error";
    DetectedIssueStatus["Final"] = "final";
    DetectedIssueStatus["Preliminary"] = "preliminary";
    DetectedIssueStatus["Registered"] = "registered";
    DetectedIssueStatus["Unknown"] = "unknown";
})(DetectedIssueStatus = exports.DetectedIssueStatus || (exports.DetectedIssueStatus = {}));
/** high | moderate | low */
var DetectedIssueSeverity;
(function (DetectedIssueSeverity) {
    DetectedIssueSeverity["High"] = "high";
    DetectedIssueSeverity["Low"] = "low";
    DetectedIssueSeverity["Moderate"] = "moderate";
})(DetectedIssueSeverity = exports.DetectedIssueSeverity || (exports.DetectedIssueSeverity = {}));
