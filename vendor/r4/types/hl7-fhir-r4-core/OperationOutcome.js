"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationOutcomeCode = exports.OperationOutcomeSeverity = void 0;
/** fatal | error | warning | information */
var OperationOutcomeSeverity;
(function (OperationOutcomeSeverity) {
    OperationOutcomeSeverity["Error"] = "error";
    OperationOutcomeSeverity["Fatal"] = "fatal";
    OperationOutcomeSeverity["Information"] = "information";
    OperationOutcomeSeverity["Warning"] = "warning";
})(OperationOutcomeSeverity = exports.OperationOutcomeSeverity || (exports.OperationOutcomeSeverity = {}));
/** Error or warning code */
var OperationOutcomeCode;
(function (OperationOutcomeCode) {
    OperationOutcomeCode["Transient"] = "transient";
    OperationOutcomeCode["Suppressed"] = "suppressed";
    OperationOutcomeCode["NotFound"] = "not-found";
    OperationOutcomeCode["NotSupported"] = "not-supported";
    OperationOutcomeCode["Timeout"] = "timeout";
    OperationOutcomeCode["Invalid"] = "invalid";
    OperationOutcomeCode["TooCostly"] = "too-costly";
    OperationOutcomeCode["Login"] = "login";
    OperationOutcomeCode["Throttled"] = "throttled";
    OperationOutcomeCode["Conflict"] = "conflict";
    OperationOutcomeCode["MultipleMatches"] = "multiple-matches";
    OperationOutcomeCode["Unknown"] = "unknown";
    OperationOutcomeCode["Expired"] = "expired";
    OperationOutcomeCode["Incomplete"] = "incomplete";
    OperationOutcomeCode["Security"] = "security";
    OperationOutcomeCode["Value"] = "value";
    OperationOutcomeCode["NoStore"] = "no-store";
    OperationOutcomeCode["TooLong"] = "too-long";
    OperationOutcomeCode["Required"] = "required";
    OperationOutcomeCode["BusinessRule"] = "business-rule";
    OperationOutcomeCode["Deleted"] = "deleted";
    OperationOutcomeCode["Processing"] = "processing";
    OperationOutcomeCode["CodeInvalid"] = "code-invalid";
    OperationOutcomeCode["Invariant"] = "invariant";
    OperationOutcomeCode["Duplicate"] = "duplicate";
    OperationOutcomeCode["Extension"] = "extension";
    OperationOutcomeCode["Forbidden"] = "forbidden";
    OperationOutcomeCode["Structure"] = "structure";
    OperationOutcomeCode["Informational"] = "informational";
    OperationOutcomeCode["Exception"] = "exception";
    OperationOutcomeCode["LockError"] = "lock-error";
})(OperationOutcomeCode = exports.OperationOutcomeCode || (exports.OperationOutcomeCode = {}));
