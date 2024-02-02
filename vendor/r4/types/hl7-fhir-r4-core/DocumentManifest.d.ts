/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A collection of documents compiled for a purpose together with metadata that applies to the collection. */
export interface DocumentManifest extends DomainResource {
    resourceType: 'DocumentManifest';
    _created?: Element;
    /** Human-readable description (title) */
    description?: string;
    /** Items in manifest */
    content: Array<Reference>;
    _status?: Element;
    /** Intended to get notified about this set of documents */
    recipient?: Array<Reference>;
    /** Kind of document set */
    type?: CodeableConcept;
    /** When this document manifest created */
    created?: dateTime;
    /** Related things */
    related?: Array<DocumentManifestRelated>;
    /** The source system/application/software */
    source?: uri;
    _description?: Element;
    /** Who and/or what authored the DocumentManifest */
    author?: Array<Reference>;
    /** Unique Identifier for the set of documents */
    masterIdentifier?: Identifier;
    /** current | superseded | entered-in-error */
    status: `${DocumentManifestStatus}`;
    /** Other identifiers for the manifest */
    identifier?: Array<Identifier>;
    _source?: Element;
    /** The subject of the set of documents */
    subject?: Reference<'Patient' | 'Device' | 'Practitioner' | 'Group'>;
}
/** Related things */
export interface DocumentManifestRelated extends BackboneElement {
    /** Identifiers of things that are related */
    identifier?: Identifier;
    /** Related Resource */
    ref?: Reference;
}
/** current | superseded | entered-in-error */
export declare enum DocumentManifestStatus {
    Current = "current",
    EnteredInError = "entered-in-error",
    Superseded = "superseded"
}
