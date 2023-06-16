/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Attachment } from "./Attachment";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { DomainResource } from "./DomainResource";
import { instant } from "./instant";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text. */
export interface DocumentReference extends DomainResource {
    /** Human-readable description */
    description?: string;
    /** Categorization of document */
    category?: Array<CodeableConcept>;
    /** When this document reference was created */
    date?: instant;
    /** preliminary | final | amended | entered-in-error */
    docStatus?: code;
    /** Document referenced */
    content: Array<DocumentReferenceContent>;
    _date?: Element;
    _status?: Element;
    /** Kind of document (LOINC if possible) */
    type?: CodeableConcept;
    _description?: Element;
    /** Who and/or what authored the document */
    author?: Array<Reference>;
    /** Master Version Specific Identifier */
    masterIdentifier?: Identifier;
    /** Organization which maintains the document */
    custodian?: Reference<"Organization">;
    /** current | superseded | entered-in-error */
    status: code;
    /** Other identifiers for the document */
    identifier?: Array<Identifier>;
    /** Relationships to other documents */
    relatesTo?: Array<DocumentReferenceRelatesTo>;
    /** Clinical context of document */
    context?: DocumentReferenceContext;
    /** Document security-tags */
    securityLabel?: Array<CodeableConcept>;
    _docStatus?: Element;
    /** Who/what is the subject of the document */
    subject?: Reference<"Patient" | "Device" | "Practitioner" | "Group">;
    /** Who/what authenticated the document */
    authenticator?: Reference<"PractitionerRole" | "Organization" | "Practitioner">;
}
/** Document referenced */
export interface DocumentReferenceContent extends BackboneElement {
    /** Where to access the document */
    attachment: Attachment;
    /** Format/content rules for the document */
    format?: Coding;
}
/** Relationships to other documents */
export interface DocumentReferenceRelatesTo extends BackboneElement {
    /** replaces | transforms | signs | appends */
    code: code;
    _code?: Element;
    /** Target of the relationship */
    target: Reference<"DocumentReference">;
}
/** Clinical context of document */
export interface DocumentReferenceContext extends BackboneElement {
    /** Context of the document  content */
    encounter?: Array<Reference>;
    /** Main clinical acts documented */
    event?: Array<CodeableConcept>;
    /** Time of service that is being documented */
    period?: Period;
    /** Kind of facility where patient was seen */
    facilityType?: CodeableConcept;
    /** Additional details about where the content was created (e.g. clinical specialty) */
    practiceSetting?: CodeableConcept;
    /** Patient demographics from source */
    sourcePatientInfo?: Reference<"Patient">;
    /** Related identifiers or resources */
    related?: Array<Reference>;
}
