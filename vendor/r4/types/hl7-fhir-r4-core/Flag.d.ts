/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
/** Prospective warnings of potential issues when providing care to the patient. */
export interface Flag extends DomainResource {
    resourceType: 'Flag';
    /** Clinical, administrative, etc. */
    category?: Array<CodeableConcept>;
    /** Alert relevant during encounter */
    encounter?: Reference<'Encounter'>;
    _status?: Element;
    /** Flag creator */
    author?: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner'>;
    /** active | inactive | entered-in-error */
    status: `${FlagStatus}`;
    /** Coded or textual message to display to user */
    code: CodeableConcept;
    /** Business identifier */
    identifier?: Array<Identifier>;
    /** Time period when flag is active */
    period?: Period;
    /** Who/What is flag about? */
    subject: Reference<'Patient' | 'Medication' | 'Organization' | 'Location' | 'Practitioner' | 'PlanDefinition' | 'Procedure' | 'Group'>;
}
/** active | inactive | entered-in-error */
export declare enum FlagStatus {
    Active = "active",
    EnteredInError = "entered-in-error",
    Inactive = "inactive"
}
