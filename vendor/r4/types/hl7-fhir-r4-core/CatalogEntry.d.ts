/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Catalog entries are wrappers that contextualize items included in a catalog. */
export interface CatalogEntry extends DomainResource {
    /** Additional characteristics of the catalog entry */
    additionalCharacteristic?: Array<CodeableConcept>;
    /** Additional classification of the catalog entry */
    additionalClassification?: Array<CodeableConcept>;
    /** The item that is being defined */
    referencedItem: Reference<"PractitionerRole" | "HealthcareService" | "Medication" | "Organization" | "Device" | "Practitioner" | "PlanDefinition" | "SpecimenDefinition" | "ActivityDefinition" | "Binary" | "ObservationDefinition">;
    _validTo?: Element;
    _status?: Element;
    /** The type of item - medication, device, service, protocol or other */
    type?: CodeableConcept;
    /** Classification (category or class) of the item entry */
    classification?: Array<CodeableConcept>;
    /** The time period in which this catalog entry is expected to be active */
    validityPeriod?: Period;
    /** Whether the entry represents an orderable item */
    orderable: boolean;
    /** draft | active | retired | unknown */
    status?: code;
    /** The date until which this catalog entry is expected to be active */
    validTo?: dateTime;
    /** Unique identifier of the catalog item */
    identifier?: Array<Identifier>;
    /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
    additionalIdentifier?: Array<Identifier>;
    /** When was this catalog last updated */
    lastUpdated?: dateTime;
    _lastUpdated?: Element;
    _orderable?: Element;
    /** An item that this catalog entry is related to */
    relatedEntry?: Array<CatalogEntryRelatedEntry>;
}
/** An item that this catalog entry is related to */
export interface CatalogEntryRelatedEntry extends BackboneElement {
    /** triggers | is-replaced-by */
    relationtype: code;
    _relationtype?: Element;
    /** The reference to the related item */
    item: Reference<"CatalogEntry">;
}