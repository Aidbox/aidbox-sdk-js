/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Attachment } from "./Attachment";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { instant } from "./instant";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. */
export interface DiagnosticReport extends DomainResource {
    resourceType: 'DiagnosticReport';
    /** Service category */
    category?: Array<CodeableConcept>;
    /** Codes for the clinical conclusion of test results */
    conclusionCode?: Array<CodeableConcept>;
    _issued?: Element;
    /** Clinical conclusion (interpretation) of test results */
    conclusion?: string;
    _effectiveDateTime?: Element;
    /** Health care event when test ordered */
    encounter?: Reference<'Encounter'>;
    /** Specimens this report is based on */
    specimen?: Array<Reference>;
    _status?: Element;
    effectiveDateTime?: dateTime;
    /** Primary result interpreter */
    resultsInterpreter?: Array<Reference>;
    /** registered | partial | preliminary | final + */
    status: `${DiagnosticReportStatus}`;
    /** Observations */
    result?: Array<Reference>;
    /** Name/Code for this diagnostic report */
    code: CodeableConcept;
    /** Business identifier for report */
    identifier?: Array<Identifier>;
    /** DateTime this version was made */
    issued?: instant;
    /** Entire report as issued */
    presentedForm?: Array<Attachment>;
    /** What was requested */
    basedOn?: Array<Reference>;
    /** Reference to full details of imaging associated with the diagnostic report */
    imagingStudy?: Array<Reference>;
    /** Key images associated with this report */
    media?: Array<DiagnosticReportMedia>;
    /** The subject of the report - usually, but not always, the patient */
    subject?: Reference<'Patient' | 'Device' | 'Location' | 'Group'>;
    _conclusion?: Element;
    /** Responsible Diagnostic Service */
    performer?: Array<Reference>;
    effectivePeriod?: Period;
}
/** registered | partial | preliminary | final + */
export declare enum DiagnosticReportStatus {
    Cancelled = "cancelled",
    Partial = "partial",
    Amended = "amended",
    Registered = "registered",
    Corrected = "corrected",
    Final = "final",
    Preliminary = "preliminary",
    Unknown = "unknown",
    Appended = "appended",
    EnteredInError = "entered-in-error"
}
/** Key images associated with this report */
export interface DiagnosticReportMedia extends BackboneElement {
    /** Comment about the image (e.g. explanation) */
    comment?: string;
    _comment?: Element;
    /** Reference to the image source */
    link: Reference<'Media'>;
}
