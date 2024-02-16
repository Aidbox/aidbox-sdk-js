"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReportStatus = exports.TestReportResult = exports.TestReportParticipantType = exports.TestReportSetupActionOperationResult = exports.TestReportSetupActionAssertResult = void 0;
/** pass | skip | fail | warning | error */
var TestReportSetupActionAssertResult;
(function (TestReportSetupActionAssertResult) {
    TestReportSetupActionAssertResult["Error"] = "error";
    TestReportSetupActionAssertResult["Fail"] = "fail";
    TestReportSetupActionAssertResult["Pass"] = "pass";
    TestReportSetupActionAssertResult["Skip"] = "skip";
    TestReportSetupActionAssertResult["Warning"] = "warning";
})(TestReportSetupActionAssertResult = exports.TestReportSetupActionAssertResult || (exports.TestReportSetupActionAssertResult = {}));
/** pass | skip | fail | warning | error */
var TestReportSetupActionOperationResult;
(function (TestReportSetupActionOperationResult) {
    TestReportSetupActionOperationResult["Error"] = "error";
    TestReportSetupActionOperationResult["Fail"] = "fail";
    TestReportSetupActionOperationResult["Pass"] = "pass";
    TestReportSetupActionOperationResult["Skip"] = "skip";
    TestReportSetupActionOperationResult["Warning"] = "warning";
})(TestReportSetupActionOperationResult = exports.TestReportSetupActionOperationResult || (exports.TestReportSetupActionOperationResult = {}));
/** test-engine | client | server */
var TestReportParticipantType;
(function (TestReportParticipantType) {
    TestReportParticipantType["Client"] = "client";
    TestReportParticipantType["Server"] = "server";
    TestReportParticipantType["TestEngine"] = "test-engine";
})(TestReportParticipantType = exports.TestReportParticipantType || (exports.TestReportParticipantType = {}));
/** pass | fail | pending */
var TestReportResult;
(function (TestReportResult) {
    TestReportResult["Fail"] = "fail";
    TestReportResult["Pass"] = "pass";
    TestReportResult["Pending"] = "pending";
})(TestReportResult = exports.TestReportResult || (exports.TestReportResult = {}));
/** completed | in-progress | waiting | stopped | entered-in-error */
var TestReportStatus;
(function (TestReportStatus) {
    TestReportStatus["Completed"] = "completed";
    TestReportStatus["EnteredInError"] = "entered-in-error";
    TestReportStatus["InProgress"] = "in-progress";
    TestReportStatus["Stopped"] = "stopped";
    TestReportStatus["Waiting"] = "waiting";
})(TestReportStatus = exports.TestReportStatus || (exports.TestReportStatus = {}));
