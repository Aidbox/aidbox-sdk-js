/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** A summary of information based on the results of executing a TestScript. */
export interface TestReport extends DomainResource {
    resourceType: 'TestReport';
    _issued?: Element;
    /** Name of the tester producing this report (Organization or individual) */
    tester?: string;
    /** Informal name of the executed TestScript */
    name?: string;
    _status?: Element;
    _score?: Element;
    /** Reference to the  version-specific TestScript that was executed to produce this TestReport */
    testScript: Reference<'TestScript'>;
    /** A participant in the test execution, either the execution engine, a client, or a server */
    participant?: Array<TestReportParticipant>;
    _result?: Element;
    /** The results of the series of required setup operations before the tests were executed */
    setup?: TestReportSetup;
    /** completed | in-progress | waiting | stopped | entered-in-error */
    status: `${TestReportStatus}`;
    /** pass | fail | pending */
    result: `${TestReportResult}`;
    /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
    score?: decimal;
    _name?: Element;
    /** External identifier */
    identifier?: Identifier;
    _tester?: Element;
    /** When the TestScript was executed and this TestReport was generated */
    issued?: dateTime;
    /** The results of running the series of required clean up steps */
    teardown?: TestReportTeardown;
    /** A test executed from the test script */
    test?: Array<TestReportTest>;
}
/** A test executed from the test script */
export interface TestReportTest extends BackboneElement {
    /** Tracking/logging name of this test */
    name?: string;
    _name?: Element;
    /** Tracking/reporting short description of the test */
    description?: string;
    _description?: Element;
    /** A test operation or assert that was performed */
    action: Array<TestReportAction>;
}
/** pass | skip | fail | warning | error */
export declare enum TestReportSetupActionAssertResult {
    Error = "error",
    Fail = "fail",
    Pass = "pass",
    Skip = "skip",
    Warning = "warning"
}
/** The results of the series of required setup operations before the tests were executed */
export interface TestReportSetup extends BackboneElement {
    /** A setup operation or assert that was executed */
    action: Array<TestReportAction>;
}
/** pass | skip | fail | warning | error */
export declare enum TestReportSetupActionOperationResult {
    Error = "error",
    Fail = "fail",
    Pass = "pass",
    Skip = "skip",
    Warning = "warning"
}
/** test-engine | client | server */
export declare enum TestReportParticipantType {
    Client = "client",
    Server = "server",
    TestEngine = "test-engine"
}
/** The assertion to perform */
export interface TestReportSetupActionAssert extends BackboneElement {
    /** pass | skip | fail | warning | error */
    result: `${TestReportSetupActionAssertResult}`;
    _result?: Element;
    /** A message associated with the result */
    message?: markdown;
    _message?: Element;
    /** A link to further details on the result */
    detail?: string;
    _detail?: Element;
}
/** A participant in the test execution, either the execution engine, a client, or a server */
export interface TestReportParticipant extends BackboneElement {
    /** test-engine | client | server */
    type: `${TestReportParticipantType}`;
    _type?: Element;
    /** The uri of the participant. An absolute URL is preferred */
    uri: uri;
    _uri?: Element;
    /** The display name of the participant */
    display?: string;
    _display?: Element;
}
/** A setup operation or assert that was executed */
export interface TestReportAction extends BackboneElement {
    operation?: TestReportSetupActionOperation;
    assert?: TestReportSetupActionAssert;
}
/** The results of running the series of required clean up steps */
export interface TestReportTeardown extends BackboneElement {
    /** One or more teardown operations performed */
    action: Array<TestReportAction>;
}
/** pass | fail | pending */
export declare enum TestReportResult {
    Fail = "fail",
    Pass = "pass",
    Pending = "pending"
}
/** The operation to perform */
export interface TestReportSetupActionOperation extends BackboneElement {
    /** pass | skip | fail | warning | error */
    result: `${TestReportSetupActionOperationResult}`;
    _result?: Element;
    /** A message associated with the result */
    message?: markdown;
    _message?: Element;
    /** A link to further details on the result */
    detail?: uri;
    _detail?: Element;
}
/** completed | in-progress | waiting | stopped | entered-in-error */
export declare enum TestReportStatus {
    Completed = "completed",
    EnteredInError = "entered-in-error",
    InProgress = "in-progress",
    Stopped = "stopped",
    Waiting = "waiting"
}
