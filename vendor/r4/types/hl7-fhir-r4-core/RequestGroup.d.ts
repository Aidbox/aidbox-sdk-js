/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { Age } from "./Age";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { Expression } from "./Expression";
import { id } from "./id";
import { dateTime } from "./dateTime";
import { Range } from "./Range";
import { RelatedArtifact } from "./RelatedArtifact";
import { Timing } from "./Timing";
import { canonical } from "./canonical";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestGroup extends DomainResource {
    resourceType: 'RequestGroup';
    /** Instantiates FHIR protocol or definition */
    instantiatesCanonical?: Array<canonical>;
    /** Instantiates external protocol or definition */
    instantiatesUri?: Array<uri>;
    _authoredOn?: Element;
    /** Created as part of */
    encounter?: Reference<'Encounter'>;
    _priority?: Element;
    _status?: Element;
    /** Why the request group is needed */
    reasonCode?: Array<CodeableConcept>;
    /** When the request group was authored */
    authoredOn?: dateTime;
    /** Additional notes about the response */
    note?: Array<Annotation>;
    /** Device or practitioner that authored the request group */
    author?: Reference<'PractitionerRole' | 'Device' | 'Practitioner'>;
    _intent?: Element;
    /** routine | urgent | asap | stat */
    priority?: `${RequestGroupPriority}`;
    /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
    status: `${RequestGroupStatus}`;
    /** Composite request this is part of */
    groupIdentifier?: Identifier;
    /** What's being requested/ordered */
    code?: CodeableConcept;
    /** Business identifier */
    identifier?: Array<Identifier>;
    /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
    intent: `${RequestGroupIntent}`;
    action?: Array<RequestGroupAction>;
    /** Request(s) replaced by this request */
    replaces?: Array<Reference>;
    /** Fulfills plan, proposal, or order */
    basedOn?: Array<Reference>;
    _instantiatesCanonical?: Array<Element>;
    /** Who the request group is about */
    subject?: Reference<'Patient' | 'Group'>;
    /** Why the request group is needed */
    reasonReference?: Array<Reference>;
    _instantiatesUri?: Array<Element>;
}
/** routine | urgent | asap | stat */
export declare enum RequestGroupActionPriority {
    Asap = "asap",
    Routine = "routine",
    Stat = "stat",
    Urgent = "urgent"
}
/** yes | no */
export declare enum RequestGroupActionPrecheckBehavior {
    No = "no",
    Yes = "yes"
}
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
export declare enum RequestGroupIntent {
    Order = "order",
    FillerOrder = "filler-order",
    Option = "option",
    Directive = "directive",
    Proposal = "proposal",
    ReflexOrder = "reflex-order",
    Plan = "plan",
    InstanceOrder = "instance-order",
    OriginalOrder = "original-order"
}
/** single | multiple */
export declare enum RequestGroupActionCardinalityBehavior {
    Multiple = "multiple",
    Single = "single"
}
/** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
export declare enum RequestGroupActionSelectionBehavior {
    All = "all",
    AllOrNone = "all-or-none",
    Any = "any",
    AtMostOne = "at-most-one",
    ExactlyOne = "exactly-one",
    OneOrMore = "one-or-more"
}
/** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
export declare enum RequestGroupActionRelationship {
    BeforeStart = "before-start",
    Concurrent = "concurrent",
    After = "after",
    ConcurrentWithStart = "concurrent-with-start",
    BeforeEnd = "before-end",
    AfterEnd = "after-end",
    AfterStart = "after-start",
    Before = "before",
    ConcurrentWithEnd = "concurrent-with-end"
}
/** Whether or not the action is applicable */
export interface RequestGroupActionCondition extends BackboneElement {
    /** applicability | start | stop */
    kind: `${RequestGroupActionKind}`;
    _kind?: Element;
    /** Boolean-valued expression */
    expression?: Expression;
}
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
export declare enum RequestGroupStatus {
    Active = "active",
    Completed = "completed",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    OnHold = "on-hold",
    Revoked = "revoked",
    Unknown = "unknown"
}
/** Relationship to another action */
export interface RequestGroupActionRelatedAction extends BackboneElement {
    /** What action this is related to */
    actionId: id;
    _actionId?: Element;
    /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
    relationship: `${RequestGroupActionRelationship}`;
    _relationship?: Element;
    offsetDuration?: Duration;
    offsetRange?: Range;
}
/** Proposed actions, if any */
export interface RequestGroupAction extends BackboneElement {
    _groupingBehavior?: Element;
    timingRange?: Range;
    /** Short description of the action */
    description?: string;
    _precheckBehavior?: Element;
    /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
    textEquivalent?: string;
    _prefix?: Element;
    _requiredBehavior?: Element;
    timingPeriod?: Period;
    /** Relationship to another action */
    relatedAction?: Array<RequestGroupActionRelatedAction>;
    _priority?: Element;
    /** create | update | remove | fire-event */
    type?: CodeableConcept;
    /** Who should perform the action */
    participant?: Array<Reference>;
    /** User-visible title */
    title?: string;
    _description?: Element;
    /** Supporting documentation for the intended performer of the action */
    documentation?: Array<RelatedArtifact>;
    /** User-visible prefix for the action (e.g. 1. or A.) */
    prefix?: string;
    /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
    selectionBehavior?: `${RequestGroupActionSelectionBehavior}`;
    timingDateTime?: dateTime;
    timingTiming?: Timing;
    timingDuration?: Duration;
    /** routine | urgent | asap | stat */
    priority?: `${RequestGroupActionPriority}`;
    /** must | could | must-unless-documented */
    requiredBehavior?: `${RequestGroupActionRequiredBehavior}`;
    /** Whether or not the action is applicable */
    condition?: Array<RequestGroupActionCondition>;
    /** The target of the action */
    resource?: Reference;
    /** visual-group | logical-group | sentence-group */
    groupingBehavior?: `${RequestGroupActionGroupingBehavior}`;
    /** Code representing the meaning of the action or sub-actions */
    code?: Array<CodeableConcept>;
    timingAge?: Age;
    _timingDateTime?: Element;
    /** Sub action */
    action?: Array<RequestGroupAction>;
    _selectionBehavior?: Element;
    /** yes | no */
    precheckBehavior?: `${RequestGroupActionPrecheckBehavior}`;
    _title?: Element;
    _cardinalityBehavior?: Element;
    _textEquivalent?: Element;
    /** single | multiple */
    cardinalityBehavior?: `${RequestGroupActionCardinalityBehavior}`;
}
/** applicability | start | stop */
export declare enum RequestGroupActionKind {
    Applicability = "applicability",
    Start = "start",
    Stop = "stop"
}
/** visual-group | logical-group | sentence-group */
export declare enum RequestGroupActionGroupingBehavior {
    LogicalGroup = "logical-group",
    SentenceGroup = "sentence-group",
    VisualGroup = "visual-group"
}
/** routine | urgent | asap | stat */
export declare enum RequestGroupPriority {
    Asap = "asap",
    Routine = "routine",
    Stat = "stat",
    Urgent = "urgent"
}
/** must | could | must-unless-documented */
export declare enum RequestGroupActionRequiredBehavior {
    Could = "could",
    Must = "must",
    MustUnlessDocumented = "must-unless-documented"
}
