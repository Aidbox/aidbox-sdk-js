/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { UsageContext } from "./UsageContext";
import { Attachment } from "./Attachment";
import { Period } from "./Period";
import { ContactDetail } from "./ContactDetail";
import { DataRequirement } from "./DataRequirement";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { RelatedArtifact } from "./RelatedArtifact";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { markdown } from "./markdown";
import { ParameterDefinition } from "./ParameterDefinition";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
/** The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets. */
export interface Library extends DomainResource {
    /** Natural language description of the library */
    description?: markdown;
    _usage?: Element;
    /** Date last changed */
    date?: dateTime;
    /** What data is referenced by this library */
    dataRequirement?: Array<DataRequirement>;
    /** Who endorsed the content */
    endorser?: Array<ContactDetail>;
    /** Name of the publisher (organization or individual) */
    publisher?: string;
    /** When the library was approved by publisher */
    approvalDate?: date;
    /** Intended jurisdiction for library (if applicable) */
    jurisdiction?: Array<CodeableConcept>;
    _publisher?: Element;
    /** Why this library is defined */
    purpose?: markdown;
    /** Contents of the library, either embedded or referenced */
    content?: Array<Attachment>;
    _date?: Element;
    subjectCodeableConcept?: CodeableConcept;
    /** Name for this library (computer friendly) */
    name?: string;
    _status?: Element;
    _experimental?: Element;
    /** The context that the content is intended to support */
    useContext?: Array<UsageContext>;
    /** Use and/or publishing restrictions */
    copyright?: markdown;
    _approvalDate?: Element;
    /** logic-library | model-definition | asset-collection | module-definition */
    type: CodeableConcept;
    /** For testing purposes, not real usage */
    experimental?: boolean;
    /** E.g. Education, Treatment, Assessment, etc. */
    topic?: Array<CodeableConcept>;
    /** Name for this library (human friendly) */
    title?: string;
    _description?: Element;
    /** Who authored the content */
    author?: Array<ContactDetail>;
    _purpose?: Element;
    /** Describes the clinical usage of the library */
    usage?: string;
    _lastReviewDate?: Element;
    /** draft | active | retired | unknown */
    status: code;
    /** Subordinate title of the library */
    subtitle?: string;
    _name?: Element;
    /** Canonical identifier for this library, represented as a URI (globally unique) */
    url?: uri;
    /** Additional identifier for the library */
    identifier?: Array<Identifier>;
    /** When the library was last reviewed */
    lastReviewDate?: date;
    /** Who edited the content */
    editor?: Array<ContactDetail>;
    _subtitle?: Element;
    _copyright?: Element;
    _title?: Element;
    /** Who reviewed the content */
    reviewer?: Array<ContactDetail>;
    /** Business version of the library */
    version?: string;
    _version?: Element;
    /** Additional documentation, citations, etc. */
    relatedArtifact?: Array<RelatedArtifact>;
    /** Contact details for the publisher */
    contact?: Array<ContactDetail>;
    subjectReference?: Reference<"Group">;
    /** Parameters defined by the library */
    parameter?: Array<ParameterDefinition>;
    _url?: Element;
    /** When the library is expected to be used */
    effectivePeriod?: Period;
}