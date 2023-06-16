/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Coding } from "./Coding";
import { base64Binary } from "./base64Binary";
import { instant } from "./instant";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
/** Base StructureDefinition for Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities. */
export interface Signature extends Element {
    /** Who signed */
    who: Reference<"Patient" | "PractitionerRole" | "Organization" | "Device" | "Practitioner" | "RelatedPerson">;
    _data?: Element;
    /** When the signature was created */
    when: instant;
    /** The party represented */
    onBehalfOf?: Reference<"Patient" | "PractitionerRole" | "Organization" | "Device" | "Practitioner" | "RelatedPerson">;
    _sigFormat?: Element;
    _targetFormat?: Element;
    /** The technical format of the signature */
    sigFormat?: code;
    /** Indication of the reason the entity signed the object(s) */
    type: Array<Coding>;
    /** The technical format of the signed resources */
    targetFormat?: code;
    _when?: Element;
    /** The actual signature content (XML DigSig. JWS, picture, etc.) */
    data?: base64Binary;
}
