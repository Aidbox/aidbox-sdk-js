/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { url } from "./url";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { Coding } from "./Coding";
import { id } from "./id";
import { ContactPoint } from "./ContactPoint";
import { canonical } from "./canonical";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { BackboneElement } from "./BackboneElement";
/** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. */
export interface MessageHeader extends DomainResource {
    /** If this is a reply to prior message */
    response?: MessageHeaderResponse;
    /** Link to the definition for this message */
    definition?: canonical;
    /** The source of the data entry */
    enterer?: Reference<"PractitionerRole" | "Practitioner">;
    _definition?: Element;
    /** Message source application */
    source: MessageHeaderSource;
    /** The source of the decision */
    author?: Reference<"PractitionerRole" | "Practitioner">;
    /** Cause of event */
    reason?: CodeableConcept;
    /** Final responsibility for event */
    responsible?: Reference<"PractitionerRole" | "Organization" | "Practitioner">;
    /** Real world sender of the message */
    sender?: Reference<"PractitionerRole" | "Organization" | "Practitioner">;
    /** The actual content of the message */
    focus?: Array<Reference>;
    _eventUri: Element;
    eventUri: uri;
    /** Message destination application(s) */
    destination?: Array<MessageHeaderDestination>;
    eventCoding: Coding;
}
/** If this is a reply to prior message */
export interface MessageHeaderResponse extends BackboneElement {
    /** Id of original message */
    identifier: id;
    _identifier?: Element;
    /** ok | transient-error | fatal-error */
    code: code;
    _code?: Element;
    /** Specific list of hints/warnings/errors */
    details?: Reference<"OperationOutcome">;
}
/** Message source application */
export interface MessageHeaderSource extends BackboneElement {
    /** Name of system */
    name?: string;
    _endpoint?: Element;
    _name?: Element;
    _software?: Element;
    /** Name of software running the system */
    software?: string;
    /** Version of software running */
    version?: string;
    _version?: Element;
    /** Actual message source address or id */
    endpoint: url;
    /** Human contact for problems */
    contact?: ContactPoint;
}
/** Message destination application(s) */
export interface MessageHeaderDestination extends BackboneElement {
    /** Name of system */
    name?: string;
    _name?: Element;
    /** Particular delivery destination within the destination */
    target?: Reference<"Device">;
    /** Actual destination address or id */
    endpoint: url;
    _endpoint?: Element;
    /** Intended "real-world" recipient for the data */
    receiver?: Reference<"PractitionerRole" | "Organization" | "Practitioner">;
}
