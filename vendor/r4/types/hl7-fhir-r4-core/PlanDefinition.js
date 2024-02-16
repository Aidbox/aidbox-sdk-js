"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionActionPrecheckbehavior = exports.PlanDefinitionActionPriority = exports.PlanDefinitionActionRelatedactionRelationship = exports.PlanDefinitionStatus = exports.PlanDefinitionActionSelectionbehavior = exports.PlanDefinitionActionGroupingbehavior = exports.PlanDefinitionActionConditionKind = exports.PlanDefinitionActionCardinalitybehavior = exports.PlanDefinitionActionRequiredbehavior = exports.PlanDefinitionActionParticipantType = void 0;
/** patient | practitioner | related-person | device */
var PlanDefinitionActionParticipantType;
(function (PlanDefinitionActionParticipantType) {
    PlanDefinitionActionParticipantType["Device"] = "device";
    PlanDefinitionActionParticipantType["Patient"] = "patient";
    PlanDefinitionActionParticipantType["Practitioner"] = "practitioner";
    PlanDefinitionActionParticipantType["RelatedPerson"] = "related-person";
})(PlanDefinitionActionParticipantType = exports.PlanDefinitionActionParticipantType || (exports.PlanDefinitionActionParticipantType = {}));
/** must | could | must-unless-documented */
var PlanDefinitionActionRequiredbehavior;
(function (PlanDefinitionActionRequiredbehavior) {
    PlanDefinitionActionRequiredbehavior["Could"] = "could";
    PlanDefinitionActionRequiredbehavior["Must"] = "must";
    PlanDefinitionActionRequiredbehavior["MustUnlessDocumented"] = "must-unless-documented";
})(PlanDefinitionActionRequiredbehavior = exports.PlanDefinitionActionRequiredbehavior || (exports.PlanDefinitionActionRequiredbehavior = {}));
/** single | multiple */
var PlanDefinitionActionCardinalitybehavior;
(function (PlanDefinitionActionCardinalitybehavior) {
    PlanDefinitionActionCardinalitybehavior["Multiple"] = "multiple";
    PlanDefinitionActionCardinalitybehavior["Single"] = "single";
})(PlanDefinitionActionCardinalitybehavior = exports.PlanDefinitionActionCardinalitybehavior || (exports.PlanDefinitionActionCardinalitybehavior = {}));
/** applicability | start | stop */
var PlanDefinitionActionConditionKind;
(function (PlanDefinitionActionConditionKind) {
    PlanDefinitionActionConditionKind["Applicability"] = "applicability";
    PlanDefinitionActionConditionKind["Start"] = "start";
    PlanDefinitionActionConditionKind["Stop"] = "stop";
})(PlanDefinitionActionConditionKind = exports.PlanDefinitionActionConditionKind || (exports.PlanDefinitionActionConditionKind = {}));
/** visual-group | logical-group | sentence-group */
var PlanDefinitionActionGroupingbehavior;
(function (PlanDefinitionActionGroupingbehavior) {
    PlanDefinitionActionGroupingbehavior["LogicalGroup"] = "logical-group";
    PlanDefinitionActionGroupingbehavior["SentenceGroup"] = "sentence-group";
    PlanDefinitionActionGroupingbehavior["VisualGroup"] = "visual-group";
})(PlanDefinitionActionGroupingbehavior = exports.PlanDefinitionActionGroupingbehavior || (exports.PlanDefinitionActionGroupingbehavior = {}));
/** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
var PlanDefinitionActionSelectionbehavior;
(function (PlanDefinitionActionSelectionbehavior) {
    PlanDefinitionActionSelectionbehavior["All"] = "all";
    PlanDefinitionActionSelectionbehavior["AllOrNone"] = "all-or-none";
    PlanDefinitionActionSelectionbehavior["Any"] = "any";
    PlanDefinitionActionSelectionbehavior["AtMostOne"] = "at-most-one";
    PlanDefinitionActionSelectionbehavior["ExactlyOne"] = "exactly-one";
    PlanDefinitionActionSelectionbehavior["OneOrMore"] = "one-or-more";
})(PlanDefinitionActionSelectionbehavior = exports.PlanDefinitionActionSelectionbehavior || (exports.PlanDefinitionActionSelectionbehavior = {}));
/** draft | active | retired | unknown */
var PlanDefinitionStatus;
(function (PlanDefinitionStatus) {
    PlanDefinitionStatus["Active"] = "active";
    PlanDefinitionStatus["Draft"] = "draft";
    PlanDefinitionStatus["Retired"] = "retired";
    PlanDefinitionStatus["Unknown"] = "unknown";
})(PlanDefinitionStatus = exports.PlanDefinitionStatus || (exports.PlanDefinitionStatus = {}));
/** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
var PlanDefinitionActionRelatedactionRelationship;
(function (PlanDefinitionActionRelatedactionRelationship) {
    PlanDefinitionActionRelatedactionRelationship["BeforeStart"] = "before-start";
    PlanDefinitionActionRelatedactionRelationship["Concurrent"] = "concurrent";
    PlanDefinitionActionRelatedactionRelationship["After"] = "after";
    PlanDefinitionActionRelatedactionRelationship["ConcurrentWithStart"] = "concurrent-with-start";
    PlanDefinitionActionRelatedactionRelationship["BeforeEnd"] = "before-end";
    PlanDefinitionActionRelatedactionRelationship["AfterEnd"] = "after-end";
    PlanDefinitionActionRelatedactionRelationship["AfterStart"] = "after-start";
    PlanDefinitionActionRelatedactionRelationship["Before"] = "before";
    PlanDefinitionActionRelatedactionRelationship["ConcurrentWithEnd"] = "concurrent-with-end";
})(PlanDefinitionActionRelatedactionRelationship = exports.PlanDefinitionActionRelatedactionRelationship || (exports.PlanDefinitionActionRelatedactionRelationship = {}));
/** routine | urgent | asap | stat */
var PlanDefinitionActionPriority;
(function (PlanDefinitionActionPriority) {
    PlanDefinitionActionPriority["Asap"] = "asap";
    PlanDefinitionActionPriority["Routine"] = "routine";
    PlanDefinitionActionPriority["Stat"] = "stat";
    PlanDefinitionActionPriority["Urgent"] = "urgent";
})(PlanDefinitionActionPriority = exports.PlanDefinitionActionPriority || (exports.PlanDefinitionActionPriority = {}));
/** yes | no */
var PlanDefinitionActionPrecheckbehavior;
(function (PlanDefinitionActionPrecheckbehavior) {
    PlanDefinitionActionPrecheckbehavior["No"] = "no";
    PlanDefinitionActionPrecheckbehavior["Yes"] = "yes";
})(PlanDefinitionActionPrecheckbehavior = exports.PlanDefinitionActionPrecheckbehavior || (exports.PlanDefinitionActionPrecheckbehavior = {}));
