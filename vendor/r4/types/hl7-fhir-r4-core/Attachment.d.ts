/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { unsignedInt } from "./unsignedInt";
import { url } from "./url";
import { dateTime } from "./dateTime";
import { base64Binary } from "./base64Binary";
import { Element } from "./Element";
import { code } from "./code";
/** Base StructureDefinition for Attachment Type: For referring to data content defined in other formats. */
export interface Attachment extends Element {
    /** Date attachment was first created */
    creation?: dateTime;
    _data?: Element;
    /** Hash of the data (sha-1, base64ed) */
    hash?: base64Binary;
    _contentType?: Element;
    _language?: Element;
    _size?: Element;
    /** Number of bytes of content (if url provided) */
    size?: unsignedInt;
    /** Label to display in place of the data */
    title?: string;
    _hash?: Element;
    /** Human language of the content (BCP-47) */
    language?: code;
    _creation?: Element;
    /** Uri where the data can be found */
    url?: url;
    _title?: Element;
    /** Mime type of the content, with charset etc. */
    contentType?: `${AttachmentContentType}`;
    _url?: Element;
    /** Data inline, base64ed */
    data?: base64Binary;
}
/** Mime type of the content, with charset etc. */
export declare enum AttachmentContentType {
    "Application/hl7Cda+xml" = "application/hl7-cda+xml",
    "Application/sparqlResults+xml" = "application/sparql-results+xml",
    "Application/sql" = "application/sql",
    "Application/xquery" = "application/xquery"
}
