/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { BackboneElement } from "./BackboneElement";
/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface VerificationResult extends DomainResource {
    resourceType: 'VerificationResult';
    /** fatal | warn | rec-only | none */
    failureAction?: CodeableConcept;
    /** nothing | primary | multiple */
    validationType?: CodeableConcept;
    /** The fhirpath location(s) within the resource that was validated */
    targetLocation?: Array<string>;
    _targetLocation?: Array<Element>;
    /** Information about the entity validating information */
    validator?: Array<VerificationResultValidator>;
    /** none | initial | periodic */
    need?: CodeableConcept;
    /** Frequency of revalidation */
    frequency?: Timing;
    _status?: Element;
    /** The date when target is next validated, if appropriate */
    nextScheduled?: date;
    /** Information about the primary source(s) involved in validation */
    primarySource?: Array<VerificationResultPrimarySource>;
    /** Information about the entity attesting to information */
    attestation?: VerificationResultAttestation;
    /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
    status: `${VerificationResultStatus}`;
    /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
    validationProcess?: Array<CodeableConcept>;
    /** When the validation status was updated */
    statusDate?: dateTime;
    /** A resource that was validated */
    target?: Array<Reference>;
    _lastPerformed?: Element;
    _nextScheduled?: Element;
    /** The date/time validation was last completed (including failed validations) */
    lastPerformed?: dateTime;
    _statusDate?: Element;
}
/** Information about the entity validating information */
export interface VerificationResultValidator extends BackboneElement {
    /** Reference to the organization validating information */
    organization: Reference<'Organization'>;
    /** A digital identity certificate associated with the validator */
    identityCertificate?: string;
    _identityCertificate?: Element;
    /** Validator signature */
    attestationSignature?: Signature;
}
/** Information about the primary source(s) involved in validation */
export interface VerificationResultPrimarySource extends BackboneElement {
    /** Reference to the primary source */
    who?: Reference<'PractitionerRole' | 'Organization' | 'Practitioner'>;
    /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) */
    type?: Array<CodeableConcept>;
    /** Method for exchanging information with the primary source */
    communicationMethod?: Array<CodeableConcept>;
    /** successful | failed | unknown */
    validationStatus?: CodeableConcept;
    /** When the target was validated against the primary source */
    validationDate?: dateTime;
    _validationDate?: Element;
    /** yes | no | undetermined */
    canPushUpdates?: CodeableConcept;
    /** specific | any | source */
    pushTypeAvailable?: Array<CodeableConcept>;
}
/** Information about the entity attesting to information */
export interface VerificationResultAttestation extends BackboneElement {
    /** The individual or organization attesting to information */
    who?: Reference<'PractitionerRole' | 'Organization' | 'Practitioner'>;
    /** The date the information was attested to */
    date?: date;
    /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
    proxyIdentityCertificate?: string;
    /** Attester signature */
    sourceSignature?: Signature;
    /** When the who is asserting on behalf of another (organization or individual) */
    onBehalfOf?: Reference<'PractitionerRole' | 'Organization' | 'Practitioner'>;
    _proxyIdentityCertificate?: Element;
    _date?: Element;
    /** Proxy signature */
    proxySignature?: Signature;
    /** The method by which attested information was submitted/retrieved */
    communicationMethod?: CodeableConcept;
    _sourceIdentityCertificate?: Element;
    /** A digital identity certificate associated with the attestation source */
    sourceIdentityCertificate?: string;
}
/** attested | validated | in-process | req-revalid | val-fail | reval-fail */
export declare enum VerificationResultStatus {
    Attested = "attested",
    InProcess = "in-process",
    ReqRevalid = "req-revalid",
    RevalFail = "reval-fail",
    ValFail = "val-fail",
    Validated = "validated"
}
