/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Range } from "./Range";
import { Quantity } from "./Quantity";
import { Element } from "./Element";
import { Reference } from "./Reference";
/** Base StructureDefinition for UsageContext Type: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care). */
export interface UsageContext extends Element {
    /** Type of context being specified */
    code: Coding;
    valueCodeableConcept: CodeableConcept;
    valueQuantity: Quantity;
    valueRange: Range;
    valueReference: Reference<"InsurancePlan" | "HealthcareService" | "Organization" | "ResearchStudy" | "Location" | "PlanDefinition" | "Group">;
}
