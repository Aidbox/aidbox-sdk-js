/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { Timing } from "./Timing";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
/** A record of a device being used by a patient where the record is the result of a report from the patient or another clinician. */
export interface DeviceUseStatement extends DomainResource {
    resourceType: 'DeviceUseStatement';
    _recordedOn?: Element;
    /** Supporting information */
    derivedFrom?: Array<Reference>;
    timingPeriod?: Period;
    _status?: Element;
    /** Why device was used */
    reasonCode?: Array<CodeableConcept>;
    /** Who made the statement */
    source?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    /** Addition details (comments, instructions) */
    note?: Array<Annotation>;
    timingDateTime?: dateTime;
    timingTiming?: Timing;
    /** active | completed | entered-in-error + */
    status: `${DeviceUseStatementStatus}`;
    /** When statement was recorded */
    recordedOn?: dateTime;
    /** External identifier for this record */
    identifier?: Array<Identifier>;
    /** Target body site */
    bodySite?: CodeableConcept;
    _timingDateTime?: Element;
    /** Reference to device used */
    device: Reference<'Device'>;
    /** Fulfills plan, proposal or order */
    basedOn?: Array<Reference>;
    /** Patient using device */
    subject: Reference<'Patient' | 'Group'>;
    /** Why was DeviceUseStatement performed? */
    reasonReference?: Array<Reference>;
}
/** active | completed | entered-in-error + */
export declare enum DeviceUseStatementStatus {
    Active = "active",
    Completed = "completed",
    EnteredInError = "entered-in-error",
    Intended = "intended",
    OnHold = "on-hold",
    Stopped = "stopped"
}
