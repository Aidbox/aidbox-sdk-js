/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
/** Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification. */
export interface Basic extends DomainResource {
    resourceType: 'Basic';
    /** Business identifier */
    identifier?: Array<Identifier>;
    /** Kind of Resource */
    code: CodeableConcept;
    /** Identifies the focus of this resource */
    subject?: Reference;
    /** When created */
    created?: date;
    _created?: Element;
    /** Who created */
    author?: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Practitioner' | 'RelatedPerson'>;
}
