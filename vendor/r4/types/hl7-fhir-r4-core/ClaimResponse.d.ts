/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { positiveInt } from "./positiveInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Money } from "./Money";
import { date } from "./date";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponse extends DomainResource {
    resourceType: 'ClaimResponse';
    _created?: Element;
    /** The recipient of the products and services */
    patient: Reference<'Patient'>;
    /** Party responsible for the claim */
    requestor?: Reference<'PractitionerRole' | 'Organization' | 'Practitioner'>;
    /** Party to be paid any benefits payable */
    payeeType?: CodeableConcept;
    /** Patient insurance information */
    insurance?: Array<ClaimResponseInsurance>;
    /** Id of resource triggering adjudication */
    request?: Reference<'Claim'>;
    /** Note concerning adjudication */
    processNote?: Array<ClaimResponseProcessNote>;
    /** Preauthorization reference */
    preAuthRef?: string;
    /** Header-level adjudication */
    adjudication?: Array<ClaimResponseItemAdjudication>;
    _disposition?: Element;
    /** claim | preauthorization | predetermination */
    use: `${ClaimResponseUse}`;
    /** Payment Details */
    payment?: ClaimResponsePayment;
    /** Adjudication for claim line items */
    item?: Array<ClaimResponseItem>;
    _status?: Element;
    /** More granular claim type */
    type: CodeableConcept;
    /** Response creation date */
    created: dateTime;
    /** Preauthorization reference effective period */
    preAuthPeriod?: Period;
    /** queued | complete | error | partial */
    outcome: `${ClaimResponseOutcome}`;
    _outcome?: Element;
    /** Disposition Message */
    disposition?: string;
    /** Request for additional information */
    communicationRequest?: Array<Reference>;
    /** Adjudication totals */
    total?: Array<ClaimResponseTotal>;
    /** Party responsible for reimbursement */
    insurer: Reference<'Organization'>;
    /** Funds reserved status */
    fundsReserve?: CodeableConcept;
    /** active | cancelled | draft | entered-in-error */
    status: `${ClaimResponseStatus}`;
    /** Business Identifier for a claim response */
    identifier?: Array<Identifier>;
    /** Processing errors */
    error?: Array<ClaimResponseError>;
    /** Printed reference or actual form */
    form?: Attachment;
    _preAuthRef?: Element;
    /** More granular claim type */
    subType?: CodeableConcept;
    /** Printed form identifier */
    formCode?: CodeableConcept;
    /** Insurer added line items */
    addItem?: Array<ClaimResponseAddItem>;
    _use?: Element;
}
/** claim | preauthorization | predetermination */
export declare enum ClaimResponseUse {
    Claim = "claim",
    Preauthorization = "preauthorization",
    Predetermination = "predetermination"
}
/** Adjudication for claim line items */
export interface ClaimResponseItem extends BackboneElement {
    /** Claim item instance identifier */
    itemSequence: positiveInt;
    _itemSequence?: Element;
    /** Applicable note numbers */
    noteNumber?: Array<positiveInt>;
    _noteNumber?: Array<Element>;
    adjudication: Array<ClaimResponseItemAdjudication>;
    /** Adjudication for claim details */
    detail?: Array<ClaimResponseDetail>;
}
/** Adjudication totals */
export interface ClaimResponseTotal extends BackboneElement {
    /** Type of adjudication information */
    category: CodeableConcept;
    /** Financial total for the category */
    amount: Money;
}
/** Payment Details */
export interface ClaimResponsePayment extends BackboneElement {
    /** Partial or complete payment */
    type: CodeableConcept;
    /** Payment adjustment for non-claim issues */
    adjustment?: Money;
    /** Explanation for the adjustment */
    adjustmentReason?: CodeableConcept;
    /** Expected date of payment */
    date?: date;
    _date?: Element;
    /** Payable amount after adjustment */
    amount: Money;
    /** Business identifier for the payment */
    identifier?: Identifier;
}
/** Processing errors */
export interface ClaimResponseError extends BackboneElement {
    /** Item sequence number */
    itemSequence?: positiveInt;
    _itemSequence?: Element;
    /** Detail sequence number */
    detailSequence?: positiveInt;
    _detailSequence?: Element;
    /** Subdetail sequence number */
    subDetailSequence?: positiveInt;
    _subDetailSequence?: Element;
    /** Error code detailing processing issues */
    code: CodeableConcept;
}
/** active | cancelled | draft | entered-in-error */
export declare enum ClaimResponseStatus {
    Active = "active",
    Cancelled = "cancelled",
    Draft = "draft",
    EnteredInError = "entered-in-error"
}
/** Adjudication for claim details */
export interface ClaimResponseDetail extends BackboneElement {
    /** Claim detail instance identifier */
    detailSequence: positiveInt;
    _detailSequence?: Element;
    /** Applicable note numbers */
    noteNumber?: Array<positiveInt>;
    _noteNumber?: Array<Element>;
    /** Detail level adjudication details */
    adjudication: Array<ClaimResponseItemAdjudication>;
    /** Adjudication for claim sub-details */
    subDetail?: Array<ClaimResponseSubDetail>;
}
/** queued | complete | error | partial */
export declare enum ClaimResponseOutcome {
    Complete = "complete",
    Error = "error",
    Partial = "partial",
    Queued = "queued"
}
/** display | print | printoper */
export declare enum ClaimResponseProcessnoteType {
    Display = "display",
    Print = "print",
    Printoper = "printoper"
}
/** Note concerning adjudication */
export interface ClaimResponseProcessNote extends BackboneElement {
    /** Note instance identifier */
    number?: positiveInt;
    _number?: Element;
    /** display | print | printoper */
    type?: `${ClaimResponseProcessnoteType}`;
    _type?: Element;
    /** Note explanatory text */
    text: string;
    _text?: Element;
    /** Language of the text */
    language?: CodeableConcept;
}
/** Insurer added line items */
export interface ClaimResponseAddItem extends BackboneElement {
    _subdetailSequence?: Array<Element>;
    locationAddress?: Address;
    _noteNumber?: Array<Element>;
    /** Service/Product billing modifiers */
    modifier?: Array<CodeableConcept>;
    /** Added items adjudication */
    adjudication: Array<ClaimResponseItemAdjudication>;
    /** Subdetail sequence number */
    subdetailSequence?: Array<positiveInt>;
    locationCodeableConcept?: CodeableConcept;
    _factor?: Element;
    /** Item sequence number */
    itemSequence?: Array<positiveInt>;
    /** Total item cost */
    net?: Money;
    /** Detail sequence number */
    detailSequence?: Array<positiveInt>;
    /** Anatomical sub-location */
    subSite?: Array<CodeableConcept>;
    /** Billing, service, product, or drug code */
    productOrService: CodeableConcept;
    locationReference?: Reference<'Location'>;
    _detailSequence?: Array<Element>;
    _itemSequence?: Array<Element>;
    /** Program the product or service is provided under */
    programCode?: Array<CodeableConcept>;
    /** Price scaling factor */
    factor?: decimal;
    servicedDate?: date;
    /** Anatomical location */
    bodySite?: CodeableConcept;
    /** Count of products or services */
    quantity?: SimpleQuantity;
    _servicedDate?: Element;
    /** Authorized providers */
    provider?: Array<Reference>;
    /** Applicable note numbers */
    noteNumber?: Array<positiveInt>;
    /** Fee, charge or cost per item */
    unitPrice?: Money;
    servicedPeriod?: Period;
    /** Insurer added line details */
    detail?: Array<ClaimResponseDetail>;
}
/** Patient insurance information */
export interface ClaimResponseInsurance extends BackboneElement {
    /** Insurance instance identifier */
    sequence: positiveInt;
    _sequence?: Element;
    /** Coverage to be used for adjudication */
    focal: boolean;
    _focal?: Element;
    /** Insurance information */
    coverage: Reference<'Coverage'>;
    /** Additional provider contract number */
    businessArrangement?: string;
    _businessArrangement?: Element;
    /** Adjudication results */
    claimResponse?: Reference<'ClaimResponse'>;
}
/** Adjudication for claim sub-details */
export interface ClaimResponseSubDetail extends BackboneElement {
    /** Claim sub-detail instance identifier */
    subDetailSequence: positiveInt;
    _subDetailSequence?: Element;
    /** Applicable note numbers */
    noteNumber?: Array<positiveInt>;
    _noteNumber?: Array<Element>;
    /** Subdetail level adjudication details */
    adjudication?: Array<ClaimResponseItemAdjudication>;
}
/** Adjudication details */
export interface ClaimResponseItemAdjudication extends BackboneElement {
    /** Type of adjudication information */
    category: CodeableConcept;
    /** Explanation of adjudication outcome */
    reason?: CodeableConcept;
    /** Monetary amount */
    amount?: Money;
    /** Non-monetary value */
    value?: decimal;
    _value?: Element;
}
