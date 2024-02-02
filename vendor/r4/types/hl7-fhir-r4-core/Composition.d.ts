/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { Narrative } from "./Narrative";
/** A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). */
export interface Composition extends DomainResource {
    resourceType: 'Composition';
    /** Categorization of Composition */
    category?: Array<CodeableConcept>;
    /** Composition editing time */
    date: dateTime;
    /** Context of the Composition */
    encounter?: Reference<'Encounter'>;
    _date?: Element;
    section?: Array<CompositionSection>;
    _status?: Element;
    /** Attests to accuracy of composition */
    attester?: Array<CompositionAttester>;
    /** Kind of composition (LOINC if possible) */
    type: CodeableConcept;
    /** Human Readable name/title */
    title: string;
    /** Who and/or what authored the composition */
    author: Array<Reference>;
    _confidentiality?: Element;
    /** The clinical service(s) being documented */
    event?: Array<CompositionEvent>;
    /** Organization which maintains the composition */
    custodian?: Reference<'Organization'>;
    /** preliminary | final | amended | entered-in-error */
    status: `${CompositionStatus}`;
    /** Version-independent identifier for the Composition */
    identifier?: Identifier;
    /** Relationships to other compositions/documents */
    relatesTo?: Array<CompositionRelatesTo>;
    _title?: Element;
    /** Who and/or what the composition is about */
    subject?: Reference;
    /** As defined by affinity domain */
    confidentiality?: `${CompositionConfidentiality}`;
}
/** working | snapshot | changes */
export declare enum CompositionSectionMode {
    Changes = "changes",
    Snapshot = "snapshot",
    Working = "working"
}
/** The clinical service(s) being documented */
export interface CompositionEvent extends BackboneElement {
    /** Code(s) that apply to the event being documented */
    code?: Array<CodeableConcept>;
    /** The period covered by the documentation */
    period?: Period;
    /** The event(s) being documented */
    detail?: Array<Reference>;
}
/** Attests to accuracy of composition */
export interface CompositionAttester extends BackboneElement {
    /** personal | professional | legal | official */
    mode: `${CompositionMode}`;
    _mode?: Element;
    /** When the composition was attested */
    time?: dateTime;
    _time?: Element;
    /** Who attested the composition */
    party?: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Practitioner' | 'RelatedPerson'>;
}
/** As defined by affinity domain */
export declare enum CompositionConfidentiality {
    L = "L",
    M = "M",
    R = "R",
    V = "V",
    U = "U",
    N = "N"
}
/** personal | professional | legal | official */
export declare enum CompositionMode {
    Legal = "legal",
    Official = "official",
    Personal = "personal",
    Professional = "professional"
}
/** Relationships to other compositions/documents */
export interface CompositionRelatesTo extends BackboneElement {
    /** replaces | transforms | signs | appends */
    code: `${CompositionCode}`;
    _code?: Element;
    targetIdentifier: Identifier;
    targetReference: Reference<'Composition'>;
}
/** replaces | transforms | signs | appends */
export declare enum CompositionCode {
    Appends = "appends",
    Replaces = "replaces",
    Signs = "signs",
    Transforms = "transforms"
}
/** preliminary | final | amended | entered-in-error */
export declare enum CompositionStatus {
    Amended = "amended",
    EnteredInError = "entered-in-error",
    Final = "final",
    Preliminary = "preliminary"
}
/** Composition is broken into sections */
export interface CompositionSection extends BackboneElement {
    /** Order of section entries */
    orderedBy?: CodeableConcept;
    /** Nested Section */
    section?: Array<CompositionSection>;
    /** working | snapshot | changes */
    mode?: `${CompositionSectionMode}`;
    /** Label for section (e.g. for ToC) */
    title?: string;
    /** Why the section is empty */
    emptyReason?: CodeableConcept;
    /** Who and/or what authored the section */
    author?: Array<Reference>;
    /** Classification of section (recommended) */
    code?: CodeableConcept;
    /** Who/what the section is about, when it is not about the subject of composition */
    focus?: Reference;
    /** A reference to data that supports this section */
    entry?: Array<Reference>;
    _title?: Element;
    _mode?: Element;
    /** Text summary of the section, for human interpretation */
    text?: Narrative;
}
