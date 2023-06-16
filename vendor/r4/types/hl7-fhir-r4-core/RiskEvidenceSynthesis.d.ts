/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { UsageContext } from "./UsageContext";
import { Annotation } from "./Annotation";
import { Period } from "./Period";
import { ContactDetail } from "./ContactDetail";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { RelatedArtifact } from "./RelatedArtifact";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface RiskEvidenceSynthesis extends DomainResource {
    /** Natural language description of the risk evidence synthesis */
    description?: markdown;
    /** Date last changed */
    date?: dateTime;
    /** Who endorsed the content */
    endorser?: Array<ContactDetail>;
    /** Name of the publisher (organization or individual) */
    publisher?: string;
    /** When the risk evidence synthesis was approved by publisher */
    approvalDate?: date;
    /** Intended jurisdiction for risk evidence synthesis (if applicable) */
    jurisdiction?: Array<CodeableConcept>;
    _publisher?: Element;
    _date?: Element;
    /** What sample size was involved? */
    sampleSize?: RiskEvidenceSynthesisSampleSize;
    /** Name for this risk evidence synthesis (computer friendly) */
    name?: string;
    _status?: Element;
    /** The context that the content is intended to support */
    useContext?: Array<UsageContext>;
    /** Use and/or publishing restrictions */
    copyright?: markdown;
    /** Type of study */
    studyType?: CodeableConcept;
    _approvalDate?: Element;
    /** What outcome? */
    outcome: Reference<"EvidenceVariable">;
    /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
    topic?: Array<CodeableConcept>;
    /** Name for this risk evidence synthesis (human friendly) */
    title?: string;
    _description?: Element;
    /** Used for footnotes or explanatory notes */
    note?: Array<Annotation>;
    /** Who authored the content */
    author?: Array<ContactDetail>;
    /** Type of synthesis */
    synthesisType?: CodeableConcept;
    _lastReviewDate?: Element;
    /** draft | active | retired | unknown */
    status: code;
    /** What population? */
    population: Reference<"EvidenceVariable">;
    _name?: Element;
    /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
    url?: uri;
    /** Additional identifier for the risk evidence synthesis */
    identifier?: Array<Identifier>;
    /** When the risk evidence synthesis was last reviewed */
    lastReviewDate?: date;
    /** Who edited the content */
    editor?: Array<ContactDetail>;
    _copyright?: Element;
    _title?: Element;
    /** How certain is the risk */
    certainty?: Array<RiskEvidenceSynthesisCertainty>;
    /** Who reviewed the content */
    reviewer?: Array<ContactDetail>;
    /** What exposure? */
    exposure?: Reference<"EvidenceVariable">;
    /** Business version of the risk evidence synthesis */
    version?: string;
    _version?: Element;
    /** Additional documentation, citations, etc. */
    relatedArtifact?: Array<RelatedArtifact>;
    /** Contact details for the publisher */
    contact?: Array<ContactDetail>;
    /** What was the estimated risk */
    riskEstimate?: RiskEvidenceSynthesisRiskEstimate;
    _url?: Element;
    /** When the risk evidence synthesis is expected to be used */
    effectivePeriod?: Period;
}
/** What sample size was involved? */
export interface RiskEvidenceSynthesisSampleSize extends BackboneElement {
    /** Description of sample size */
    description?: string;
    _description?: Element;
    /** How many studies? */
    numberOfStudies?: integer;
    _numberOfStudies?: Element;
    /** How many participants? */
    numberOfParticipants?: integer;
    _numberOfParticipants?: Element;
}
/** A component that contributes to the overall certainty */
export interface RiskEvidenceSynthesisCertaintySubcomponent extends BackboneElement {
    /** Type of subcomponent of certainty rating */
    type?: CodeableConcept;
    /** Subcomponent certainty rating */
    rating?: Array<CodeableConcept>;
    /** Used for footnotes or explanatory notes */
    note?: Array<Annotation>;
}
/** How certain is the risk */
export interface RiskEvidenceSynthesisCertainty extends BackboneElement {
    /** Certainty rating */
    rating?: Array<CodeableConcept>;
    /** Used for footnotes or explanatory notes */
    note?: Array<Annotation>;
    /** A component that contributes to the overall certainty */
    certaintySubcomponent?: Array<RiskEvidenceSynthesisCertaintySubcomponent>;
}
/** How precise the estimate is */
export interface RiskEvidenceSynthesisPrecisionEstimate extends BackboneElement {
    /** Type of precision estimate */
    type?: CodeableConcept;
    /** Level of confidence interval */
    level?: decimal;
    _level?: Element;
    /** Lower bound */
    from?: decimal;
    _from?: Element;
    /** Upper bound */
    to?: decimal;
    _to?: Element;
}
/** What was the estimated risk */
export interface RiskEvidenceSynthesisRiskEstimate extends BackboneElement {
    /** Description of risk estimate */
    description?: string;
    /** How precise the estimate is */
    precisionEstimate?: Array<RiskEvidenceSynthesisPrecisionEstimate>;
    /** Point estimate */
    value?: decimal;
    /** Number with the outcome */
    numeratorCount?: integer;
    /** Type of risk estimate */
    type?: CodeableConcept;
    _value?: Element;
    /** Sample size for group measured */
    denominatorCount?: integer;
    _description?: Element;
    /** What unit is the outcome described in? */
    unitOfMeasure?: CodeableConcept;
    _numeratorCount?: Element;
    _denominatorCount?: Element;
}
