/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { UsageContext } from "./UsageContext";
import { Age } from "./Age";
import { Period } from "./Period";
import { ContactDetail } from "./ContactDetail";
import { DataRequirement } from "./DataRequirement";
import { CodeableConcept } from "./CodeableConcept";
import { TriggerDefinition } from "./TriggerDefinition";
import { uri } from "./uri";
import { Expression } from "./Expression";
import { id } from "./id";
import { dateTime } from "./dateTime";
import { Range } from "./Range";
import { RelatedArtifact } from "./RelatedArtifact";
import { Timing } from "./Timing";
import { Quantity } from "./Quantity";
import { canonical } from "./canonical";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface PlanDefinition extends DomainResource {
    /** Natural language description of the plan definition */
    description?: markdown;
    _usage?: Element;
    /** Date last changed */
    date?: dateTime;
    /** Who endorsed the content */
    endorser?: Array<ContactDetail>;
    /** Name of the publisher (organization or individual) */
    publisher?: string;
    /** When the plan definition was approved by publisher */
    approvalDate?: date;
    /** Intended jurisdiction for plan definition (if applicable) */
    jurisdiction?: Array<CodeableConcept>;
    _publisher?: Element;
    /** Why this plan definition is defined */
    purpose?: markdown;
    _date?: Element;
    subjectCodeableConcept?: CodeableConcept;
    /** Name for this plan definition (computer friendly) */
    name?: string;
    _status?: Element;
    _experimental?: Element;
    /** The context that the content is intended to support */
    useContext?: Array<UsageContext>;
    /** What the plan is trying to accomplish */
    goal?: Array<PlanDefinitionGoal>;
    /** Use and/or publishing restrictions */
    copyright?: markdown;
    _approvalDate?: Element;
    /** order-set | clinical-protocol | eca-rule | workflow-definition */
    type?: CodeableConcept;
    /** For testing purposes, not real usage */
    experimental?: boolean;
    /** E.g. Education, Treatment, Assessment */
    topic?: Array<CodeableConcept>;
    /** Name for this plan definition (human friendly) */
    title?: string;
    _description?: Element;
    /** Logic used by the plan definition */
    library?: Array<canonical>;
    /** Who authored the content */
    author?: Array<ContactDetail>;
    _purpose?: Element;
    /** Describes the clinical usage of the plan */
    usage?: string;
    _lastReviewDate?: Element;
    /** draft | active | retired | unknown */
    status: code;
    /** Subordinate title of the plan definition */
    subtitle?: string;
    _name?: Element;
    /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
    url?: uri;
    /** Additional identifier for the plan definition */
    identifier?: Array<Identifier>;
    /** When the plan definition was last reviewed */
    lastReviewDate?: date;
    /** Who edited the content */
    editor?: Array<ContactDetail>;
    _subtitle?: Element;
    _library?: Array<Element>;
    _copyright?: Element;
    action?: Array<PlanDefinitionAction>;
    _title?: Element;
    /** Who reviewed the content */
    reviewer?: Array<ContactDetail>;
    /** Business version of the plan definition */
    version?: string;
    _version?: Element;
    /** Additional documentation, citations */
    relatedArtifact?: Array<RelatedArtifact>;
    /** Contact details for the publisher */
    contact?: Array<ContactDetail>;
    subjectReference?: Reference<"Group">;
    _url?: Element;
    /** When the plan definition is expected to be used */
    effectivePeriod?: Period;
}
/** Target outcome for the goal */
export interface PlanDefinitionTarget extends BackboneElement {
    /** The parameter whose value is to be tracked */
    measure?: CodeableConcept;
    detailQuantity?: Quantity;
    detailRange?: Range;
    detailCodeableConcept?: CodeableConcept;
    /** Reach goal within */
    due?: Duration;
}
/** What the plan is trying to accomplish */
export interface PlanDefinitionGoal extends BackboneElement {
    /** E.g. Treatment, dietary, behavioral */
    category?: CodeableConcept;
    /** Code or text describing the goal */
    description: CodeableConcept;
    /** high-priority | medium-priority | low-priority */
    priority?: CodeableConcept;
    /** When goal pursuit begins */
    start?: CodeableConcept;
    /** What does the goal address */
    addresses?: Array<CodeableConcept>;
    /** Supporting documentation for the goal */
    documentation?: Array<RelatedArtifact>;
    /** Target outcome for the goal */
    target?: Array<PlanDefinitionTarget>;
}
/** Relationship to another action */
export interface PlanDefinitionActionRelatedAction extends BackboneElement {
    /** What action is this related to */
    actionId: id;
    _actionId?: Element;
    /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
    relationship: code;
    _relationship?: Element;
    offsetDuration?: Duration;
    offsetRange?: Range;
}
/** Who should participate in the action */
export interface PlanDefinitionActionParticipant extends BackboneElement {
    /** patient | practitioner | related-person | device */
    type: code;
    _type?: Element;
    /** E.g. Nurse, Surgeon, Parent */
    role?: CodeableConcept;
}
/** Whether or not the action is applicable */
export interface PlanDefinitionActionCondition extends BackboneElement {
    /** applicability | start | stop */
    kind: code;
    _kind?: Element;
    /** Boolean-valued expression */
    expression?: Expression;
}
/** Dynamic aspects of the definition */
export interface PlanDefinitionActionDynamicValue extends BackboneElement {
    /** The path to the element to be set dynamically */
    path?: string;
    _path?: Element;
    /** An expression that provides the dynamic value for the customization */
    expression?: Expression;
}
/** Action defined by the plan */
export interface PlanDefinitionAction extends BackboneElement {
    _groupingBehavior?: Element;
    timingRange?: Range;
    /** Brief description of the action */
    description?: string;
    _precheckBehavior?: Element;
    /** Transform to apply the template */
    transform?: canonical;
    /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
    textEquivalent?: string;
    definitionUri?: uri;
    _prefix?: Element;
    /** What goals this action supports */
    goalId?: Array<id>;
    _requiredBehavior?: Element;
    subjectCodeableConcept?: CodeableConcept;
    timingPeriod?: Period;
    definitionCanonical?: canonical;
    /** Relationship to another action */
    relatedAction?: Array<PlanDefinitionActionRelatedAction>;
    _priority?: Element;
    /** create | update | remove | fire-event */
    type?: CodeableConcept;
    _definitionUri?: Element;
    /** Who should participate in the action */
    participant?: Array<PlanDefinitionActionParticipant>;
    /** Output data definition */
    output?: Array<DataRequirement>;
    /** User-visible title */
    title?: string;
    _description?: Element;
    /** Supporting documentation for the intended performer of the action */
    documentation?: Array<RelatedArtifact>;
    /** User-visible prefix for the action (e.g. 1. or A.) */
    prefix?: string;
    /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
    selectionBehavior?: code;
    _definitionCanonical?: Element;
    /** Why the action should be performed */
    reason?: Array<CodeableConcept>;
    timingDateTime?: dateTime;
    timingTiming?: Timing;
    timingDuration?: Duration;
    /** routine | urgent | asap | stat */
    priority?: code;
    _transform?: Element;
    /** must | could | must-unless-documented */
    requiredBehavior?: code;
    _goalId?: Array<Element>;
    /** Whether or not the action is applicable */
    condition?: Array<PlanDefinitionActionCondition>;
    /** visual-group | logical-group | sentence-group */
    groupingBehavior?: code;
    /** Dynamic aspects of the definition */
    dynamicValue?: Array<PlanDefinitionActionDynamicValue>;
    /** Code representing the meaning of the action or sub-actions */
    code?: Array<CodeableConcept>;
    timingAge?: Age;
    _timingDateTime?: Element;
    /** A sub-action */
    action?: Array<PlanDefinitionAction>;
    _selectionBehavior?: Element;
    /** yes | no */
    precheckBehavior?: code;
    _title?: Element;
    /** Input data requirements */
    input?: Array<DataRequirement>;
    _cardinalityBehavior?: Element;
    /** When the action should be triggered */
    trigger?: Array<TriggerDefinition>;
    subjectReference?: Reference<"Group">;
    _textEquivalent?: Element;
    /** single | multiple */
    cardinalityBehavior?: code;
}
