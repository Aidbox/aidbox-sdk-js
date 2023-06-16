/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
export * from "./workflow";
export * from "./task";
import { ResourceType } from "./hl7-fhir-r4-core";
export * from "./hl7-fhir-r4-core";
export interface SubsSubscription {
    id?: string;
    resourceType: "SubsSubscription";
    status: "active" | "off";
    trigger: Partial<Record<ResourceType, {
        event: Array<"all" | "create" | "update" | "delete">;
        filter?: unknown;
    }>>;
    channel: {
        type: "rest-hook";
        endpoint: string;
        payload?: {
            content: string;
            contentType: string;
            context: unknown;
        };
        headers?: Record<string, string>;
        timeout?: number;
    };
}
