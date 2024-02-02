/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Range } from "./Range";
import { Quantity } from "./Quantity";
import { Duration } from "./Duration";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { Ratio } from "./Ratio";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface Goal extends DomainResource {
    resourceType: 'Goal';
    /** Code or text describing goal */
    description: CodeableConcept;
    /** E.g. Treatment, dietary, behavioral, etc. */
    category?: Array<CodeableConcept>;
    /** Issues addressed by this goal */
    addresses?: Array<Reference>;
    /** Who's responsible for creating Goal? */
    expressedBy?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    startDate?: date;
    /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable */
    achievementStatus?: CodeableConcept;
    /** Reason for current status */
    statusReason?: string;
    _startDate?: Element;
    _lifecycleStatus?: Element;
    /** Comments about the goal */
    note?: Array<Annotation>;
    startCodeableConcept?: CodeableConcept;
    /** high-priority | medium-priority | low-priority */
    priority?: CodeableConcept;
    /** What result was achieved regarding the goal? */
    outcomeCode?: Array<CodeableConcept>;
    /** External Ids for this goal */
    identifier?: Array<Identifier>;
    /** When goal status took effect */
    statusDate?: date;
    /** Target outcome for the goal */
    target?: Array<GoalTarget>;
    /** Observation that resulted from goal */
    outcomeReference?: Array<Reference>;
    /** Who this goal is intended for */
    subject: Reference<'Patient' | 'Organization' | 'Group'>;
    _statusReason?: Element;
    /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
    lifecycleStatus: `${GoalLifecycleStatus}`;
    _statusDate?: Element;
}
/** Target outcome for the goal */
export interface GoalTarget extends BackboneElement {
    _detailInteger?: Element;
    detailRange?: Range;
    _detailBoolean?: Element;
    detailQuantity?: Quantity;
    detailInteger?: integer;
    detailString?: string;
    /** The parameter whose value is being tracked */
    measure?: CodeableConcept;
    _detailString?: Element;
    detailRatio?: Ratio;
    detailCodeableConcept?: CodeableConcept;
    dueDate?: date;
    detailBoolean?: boolean;
    _dueDate?: Element;
    dueDuration?: Duration;
}
/** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
export declare enum GoalLifecycleStatus {
    Active = "active",
    Proposed = "proposed",
    Cancelled = "cancelled",
    Rejected = "rejected",
    Planned = "planned",
    EnteredInError = "entered-in-error",
    Completed = "completed",
    Accepted = "accepted",
    OnHold = "on-hold"
}
