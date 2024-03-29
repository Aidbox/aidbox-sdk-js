/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { BackboneElement } from "./BackboneElement";
/** A collection of error, warning, or information messages that result from a system action. */
export interface OperationOutcome extends DomainResource {
    resourceType: 'OperationOutcome';
    /** A single issue associated with the action */
    issue: Array<OperationOutcomeIssue>;
}
/** fatal | error | warning | information */
export declare enum OperationOutcomeSeverity {
    Error = "error",
    Fatal = "fatal",
    Information = "information",
    Warning = "warning"
}
/** Error or warning code */
export declare enum OperationOutcomeCode {
    Transient = "transient",
    Suppressed = "suppressed",
    NotFound = "not-found",
    NotSupported = "not-supported",
    Timeout = "timeout",
    Invalid = "invalid",
    TooCostly = "too-costly",
    Login = "login",
    Throttled = "throttled",
    Conflict = "conflict",
    MultipleMatches = "multiple-matches",
    Unknown = "unknown",
    Expired = "expired",
    Incomplete = "incomplete",
    Security = "security",
    Value = "value",
    NoStore = "no-store",
    TooLong = "too-long",
    Required = "required",
    BusinessRule = "business-rule",
    Deleted = "deleted",
    Processing = "processing",
    CodeInvalid = "code-invalid",
    Invariant = "invariant",
    Duplicate = "duplicate",
    Extension = "extension",
    Forbidden = "forbidden",
    Structure = "structure",
    Informational = "informational",
    Exception = "exception",
    LockError = "lock-error"
}
/** A single issue associated with the action */
export interface OperationOutcomeIssue extends BackboneElement {
    _code?: Element;
    /** Additional diagnostic information about the issue */
    diagnostics?: string;
    /** FHIRPath of element(s) related to issue */
    expression?: Array<string>;
    _location?: Array<Element>;
    _expression?: Array<Element>;
    /** Additional details about the error */
    details?: CodeableConcept;
    /** fatal | error | warning | information */
    severity: `${OperationOutcomeSeverity}`;
    /** Error or warning code */
    code: `${OperationOutcomeCode}`;
    _severity?: Element;
    /** Deprecated: Path of element(s) related to issue */
    location?: Array<string>;
    _diagnostics?: Element;
}
