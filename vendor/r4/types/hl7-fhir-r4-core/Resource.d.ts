/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { uri } from "./uri";
import { Meta } from "./Meta";
import { Element } from "./Element";
import { code } from "./code";
/** This is the base resource type for everything. */
export interface Resource {
    /** Logical id of this artifact */
    id?: string;
    _id?: Element;
    /** Metadata about the resource */
    meta?: Meta;
    /** A set of rules under which this content was created */
    implicitRules?: uri;
    _implicitRules?: Element;
    /** Language of the resource content */
    language?: code;
    _language?: Element;
}