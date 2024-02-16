"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationOutcomeIssueCode = exports.OperationOutcomeIssueSeverity = void 0;
/** fatal | error | warning | information */
var OperationOutcomeIssueSeverity;
(function (OperationOutcomeIssueSeverity) {
    OperationOutcomeIssueSeverity["Error"] = "error";
    OperationOutcomeIssueSeverity["Fatal"] = "fatal";
    OperationOutcomeIssueSeverity["Information"] = "information";
    OperationOutcomeIssueSeverity["Warning"] = "warning";
})(OperationOutcomeIssueSeverity = exports.OperationOutcomeIssueSeverity || (exports.OperationOutcomeIssueSeverity = {}));
/** Error or warning code */
var OperationOutcomeIssueCode;
(function (OperationOutcomeIssueCode) {
    OperationOutcomeIssueCode["Transient"] = "transient";
    OperationOutcomeIssueCode["Suppressed"] = "suppressed";
    OperationOutcomeIssueCode["NotFound"] = "not-found";
    OperationOutcomeIssueCode["NotSupported"] = "not-supported";
    OperationOutcomeIssueCode["Timeout"] = "timeout";
    OperationOutcomeIssueCode["Invalid"] = "invalid";
    OperationOutcomeIssueCode["TooCostly"] = "too-costly";
    OperationOutcomeIssueCode["Login"] = "login";
    OperationOutcomeIssueCode["Throttled"] = "throttled";
    OperationOutcomeIssueCode["Conflict"] = "conflict";
    OperationOutcomeIssueCode["MultipleMatches"] = "multiple-matches";
    OperationOutcomeIssueCode["Unknown"] = "unknown";
    OperationOutcomeIssueCode["Expired"] = "expired";
    OperationOutcomeIssueCode["Incomplete"] = "incomplete";
    OperationOutcomeIssueCode["Security"] = "security";
    OperationOutcomeIssueCode["Value"] = "value";
    OperationOutcomeIssueCode["NoStore"] = "no-store";
    OperationOutcomeIssueCode["TooLong"] = "too-long";
    OperationOutcomeIssueCode["Required"] = "required";
    OperationOutcomeIssueCode["BusinessRule"] = "business-rule";
    OperationOutcomeIssueCode["Deleted"] = "deleted";
    OperationOutcomeIssueCode["Processing"] = "processing";
    OperationOutcomeIssueCode["CodeInvalid"] = "code-invalid";
    OperationOutcomeIssueCode["Invariant"] = "invariant";
    OperationOutcomeIssueCode["Duplicate"] = "duplicate";
    OperationOutcomeIssueCode["Extension"] = "extension";
    OperationOutcomeIssueCode["Forbidden"] = "forbidden";
    OperationOutcomeIssueCode["Structure"] = "structure";
    OperationOutcomeIssueCode["Informational"] = "informational";
    OperationOutcomeIssueCode["Exception"] = "exception";
    OperationOutcomeIssueCode["LockError"] = "lock-error";
})(OperationOutcomeIssueCode = exports.OperationOutcomeIssueCode || (exports.OperationOutcomeIssueCode = {}));
