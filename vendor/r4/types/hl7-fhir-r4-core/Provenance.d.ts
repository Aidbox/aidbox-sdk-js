/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { Signature } from "./Signature";
import { DomainResource } from "./DomainResource";
import { instant } from "./instant";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { BackboneElement } from "./BackboneElement";
/** Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies. */
export interface Provenance extends DomainResource {
    resourceType: 'Provenance';
    _occurredDateTime?: Element;
    /** Signature on target */
    signature?: Array<Signature>;
    occurredDateTime?: dateTime;
    /** When the activity was recorded / updated */
    recorded: instant;
    agent: Array<ProvenanceAgent>;
    /** Policy or plan the activity was defined by */
    policy?: Array<uri>;
    /** Reason the activity is occurring */
    reason?: Array<CodeableConcept>;
    /** Activity that occurred */
    activity?: CodeableConcept;
    _policy?: Array<Element>;
    /** Target Reference(s) (usually version specific) */
    target: Array<Reference>;
    _recorded?: Element;
    /** Where the activity occurred, if relevant */
    location?: Reference<'Location'>;
    /** An entity used in this activity */
    entity?: Array<ProvenanceEntity>;
    occurredPeriod?: Period;
}
/** derivation | revision | quotation | source | removal */
export declare enum ProvenanceRole {
    Derivation = "derivation",
    Quotation = "quotation",
    Removal = "removal",
    Revision = "revision",
    Source = "source"
}
/** An entity used in this activity */
export interface ProvenanceEntity extends BackboneElement {
    /** derivation | revision | quotation | source | removal */
    role: `${ProvenanceRole}`;
    _role?: Element;
    /** Identity of entity */
    what: Reference;
    /** Entity is attributed to this agent */
    agent?: Array<ProvenanceAgent>;
}
/** Actor involved */
export interface ProvenanceAgent extends BackboneElement {
    /** How the agent participated */
    type?: CodeableConcept;
    /** What the agents role was */
    role?: Array<CodeableConcept>;
    /** Who participated */
    who: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner' | 'RelatedPerson'>;
    /** Who the agent is representing */
    onBehalfOf?: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner' | 'RelatedPerson'>;
}
