/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { ContactPoint } from "./ContactPoint";
import { HumanName } from "./HumanName";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */
export interface Patient extends DomainResource {
    resourceType: 'Patient';
    multipleBirthBoolean?: boolean;
    _active?: Element;
    /** An address for the individual */
    address?: Array<Address>;
    deceasedDateTime?: dateTime;
    _deceasedDateTime?: Element;
    /** Organization that is the custodian of the patient record */
    managingOrganization?: Reference<'Organization'>;
    deceasedBoolean?: boolean;
    /** A name associated with the patient */
    name?: Array<HumanName>;
    _gender?: Element;
    /** The date of birth for the individual */
    birthDate?: date;
    _deceasedBoolean?: Element;
    multipleBirthInteger?: integer;
    _birthDate?: Element;
    /** Image of the patient */
    photo?: Array<Attachment>;
    _multipleBirthInteger?: Element;
    /** Link to another patient resource that concerns the same actual person */
    link?: Array<PatientLink>;
    /** Whether this patient's record is in active use */
    active?: boolean;
    /** A language which may be used to communicate with the patient about his or her health */
    communication?: Array<PatientCommunication>;
    /** An identifier for this patient */
    identifier?: Array<Identifier>;
    /** A contact detail for the individual */
    telecom?: Array<ContactPoint>;
    /** Patient's nominated primary care provider */
    generalPractitioner?: Array<Reference>;
    /** male | female | other | unknown */
    gender?: `${PatientGender}`;
    /** Marital (civil) status of a patient */
    maritalStatus?: CodeableConcept;
    /** A contact party (e.g. guardian, partner, friend) for the patient */
    contact?: Array<PatientContact>;
    _multipleBirthBoolean?: Element;
}
/** replaced-by | replaces | refer | seealso */
export declare enum PatientLinkType {
    Refer = "refer",
    ReplacedBy = "replaced-by",
    Replaces = "replaces",
    Seealso = "seealso"
}
/** Link to another patient resource that concerns the same actual person */
export interface PatientLink extends BackboneElement {
    /** The other patient or related person resource that the link refers to */
    other: Reference<'Patient' | 'RelatedPerson'>;
    /** replaced-by | replaces | refer | seealso */
    type: `${PatientLinkType}`;
    _type?: Element;
}
/** A language which may be used to communicate with the patient about his or her health */
export interface PatientCommunication extends BackboneElement {
    /** The language which can be used to communicate with the patient about his or her health */
    language: CodeableConcept;
    /** Language preference indicator */
    preferred?: boolean;
    _preferred?: Element;
}
/** male | female | other | unknown */
export declare enum PatientGender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown"
}
/** male | female | other | unknown */
export declare enum PatientContactGender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown"
}
/** A contact party (e.g. guardian, partner, friend) for the patient */
export interface PatientContact extends BackboneElement {
    /** The kind of relationship */
    relationship?: Array<CodeableConcept>;
    /** A name associated with the contact person */
    name?: HumanName;
    /** A contact detail for the person */
    telecom?: Array<ContactPoint>;
    /** Address for the contact person */
    address?: Address;
    /** male | female | other | unknown */
    gender?: `${PatientContactGender}`;
    _gender?: Element;
    /** Organization that is associated with the contact */
    organization?: Reference<'Organization'>;
    /** The period during which this contact person or organization is valid to be contacted relating to this patient */
    period?: Period;
}
