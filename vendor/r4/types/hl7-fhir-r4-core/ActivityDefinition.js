"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDefinitionIntent = exports.ActivityDefinitionKind = exports.ActivityDefinitionStatus = exports.ActivityDefinitionPriority = exports.ActivityDefinitionType = void 0;
/** patient | practitioner | related-person | device */
var ActivityDefinitionType;
(function (ActivityDefinitionType) {
    ActivityDefinitionType["Device"] = "device";
    ActivityDefinitionType["Patient"] = "patient";
    ActivityDefinitionType["Practitioner"] = "practitioner";
    ActivityDefinitionType["RelatedPerson"] = "related-person";
})(ActivityDefinitionType = exports.ActivityDefinitionType || (exports.ActivityDefinitionType = {}));
/** routine | urgent | asap | stat */
var ActivityDefinitionPriority;
(function (ActivityDefinitionPriority) {
    ActivityDefinitionPriority["Asap"] = "asap";
    ActivityDefinitionPriority["Routine"] = "routine";
    ActivityDefinitionPriority["Stat"] = "stat";
    ActivityDefinitionPriority["Urgent"] = "urgent";
})(ActivityDefinitionPriority = exports.ActivityDefinitionPriority || (exports.ActivityDefinitionPriority = {}));
/** draft | active | retired | unknown */
var ActivityDefinitionStatus;
(function (ActivityDefinitionStatus) {
    ActivityDefinitionStatus["Active"] = "active";
    ActivityDefinitionStatus["Draft"] = "draft";
    ActivityDefinitionStatus["Retired"] = "retired";
    ActivityDefinitionStatus["Unknown"] = "unknown";
})(ActivityDefinitionStatus = exports.ActivityDefinitionStatus || (exports.ActivityDefinitionStatus = {}));
/** Kind of resource */
var ActivityDefinitionKind;
(function (ActivityDefinitionKind) {
    ActivityDefinitionKind["Appointment"] = "Appointment";
    ActivityDefinitionKind["NutritionOrder"] = "NutritionOrder";
    ActivityDefinitionKind["Contract"] = "Contract";
    ActivityDefinitionKind["Claim"] = "Claim";
    ActivityDefinitionKind["AppointmentResponse"] = "AppointmentResponse";
    ActivityDefinitionKind["VisionPrescription"] = "VisionPrescription";
    ActivityDefinitionKind["MedicationRequest"] = "MedicationRequest";
    ActivityDefinitionKind["ImmunizationRecommendation"] = "ImmunizationRecommendation";
    ActivityDefinitionKind["DeviceRequest"] = "DeviceRequest";
    ActivityDefinitionKind["ServiceRequest"] = "ServiceRequest";
    ActivityDefinitionKind["SupplyRequest"] = "SupplyRequest";
    ActivityDefinitionKind["Task"] = "Task";
    ActivityDefinitionKind["CommunicationRequest"] = "CommunicationRequest";
    ActivityDefinitionKind["EnrollmentRequest"] = "EnrollmentRequest";
    ActivityDefinitionKind["CarePlan"] = "CarePlan";
})(ActivityDefinitionKind = exports.ActivityDefinitionKind || (exports.ActivityDefinitionKind = {}));
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
var ActivityDefinitionIntent;
(function (ActivityDefinitionIntent) {
    ActivityDefinitionIntent["Order"] = "order";
    ActivityDefinitionIntent["FillerOrder"] = "filler-order";
    ActivityDefinitionIntent["Option"] = "option";
    ActivityDefinitionIntent["Directive"] = "directive";
    ActivityDefinitionIntent["Proposal"] = "proposal";
    ActivityDefinitionIntent["ReflexOrder"] = "reflex-order";
    ActivityDefinitionIntent["Plan"] = "plan";
    ActivityDefinitionIntent["InstanceOrder"] = "instance-order";
    ActivityDefinitionIntent["OriginalOrder"] = "original-order";
})(ActivityDefinitionIntent = exports.ActivityDefinitionIntent || (exports.ActivityDefinitionIntent = {}));
