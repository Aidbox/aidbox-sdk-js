"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDefinitionActionRequiredBehavior = exports.PlanDefinitionActionPriority = exports.PlanDefinitionActionCardinalityBehavior = exports.PlanDefinitionActionPrecheckBehavior = exports.PlanDefinitionActionSelectionBehavior = exports.PlanDefinitionStatus = exports.PlanDefinitionActionKind = exports.PlanDefinitionActionGroupingBehavior = exports.PlanDefinitionActionRelationship = exports.PlanDefinitionActionType = void 0;
/** patient | practitioner | related-person | device */
var PlanDefinitionActionType;
(function (PlanDefinitionActionType) {
    PlanDefinitionActionType["Device"] = "device";
    PlanDefinitionActionType["Patient"] = "patient";
    PlanDefinitionActionType["Practitioner"] = "practitioner";
    PlanDefinitionActionType["RelatedPerson"] = "related-person";
})(PlanDefinitionActionType = exports.PlanDefinitionActionType || (exports.PlanDefinitionActionType = {}));
/** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
var PlanDefinitionActionRelationship;
(function (PlanDefinitionActionRelationship) {
    PlanDefinitionActionRelationship["BeforeStart"] = "before-start";
    PlanDefinitionActionRelationship["Concurrent"] = "concurrent";
    PlanDefinitionActionRelationship["After"] = "after";
    PlanDefinitionActionRelationship["ConcurrentWithStart"] = "concurrent-with-start";
    PlanDefinitionActionRelationship["BeforeEnd"] = "before-end";
    PlanDefinitionActionRelationship["AfterEnd"] = "after-end";
    PlanDefinitionActionRelationship["AfterStart"] = "after-start";
    PlanDefinitionActionRelationship["Before"] = "before";
    PlanDefinitionActionRelationship["ConcurrentWithEnd"] = "concurrent-with-end";
})(PlanDefinitionActionRelationship = exports.PlanDefinitionActionRelationship || (exports.PlanDefinitionActionRelationship = {}));
/** visual-group | logical-group | sentence-group */
var PlanDefinitionActionGroupingBehavior;
(function (PlanDefinitionActionGroupingBehavior) {
    PlanDefinitionActionGroupingBehavior["LogicalGroup"] = "logical-group";
    PlanDefinitionActionGroupingBehavior["SentenceGroup"] = "sentence-group";
    PlanDefinitionActionGroupingBehavior["VisualGroup"] = "visual-group";
})(PlanDefinitionActionGroupingBehavior = exports.PlanDefinitionActionGroupingBehavior || (exports.PlanDefinitionActionGroupingBehavior = {}));
/** applicability | start | stop */
var PlanDefinitionActionKind;
(function (PlanDefinitionActionKind) {
    PlanDefinitionActionKind["Applicability"] = "applicability";
    PlanDefinitionActionKind["Start"] = "start";
    PlanDefinitionActionKind["Stop"] = "stop";
})(PlanDefinitionActionKind = exports.PlanDefinitionActionKind || (exports.PlanDefinitionActionKind = {}));
/** draft | active | retired | unknown */
var PlanDefinitionStatus;
(function (PlanDefinitionStatus) {
    PlanDefinitionStatus["Active"] = "active";
    PlanDefinitionStatus["Draft"] = "draft";
    PlanDefinitionStatus["Retired"] = "retired";
    PlanDefinitionStatus["Unknown"] = "unknown";
})(PlanDefinitionStatus = exports.PlanDefinitionStatus || (exports.PlanDefinitionStatus = {}));
/** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
var PlanDefinitionActionSelectionBehavior;
(function (PlanDefinitionActionSelectionBehavior) {
    PlanDefinitionActionSelectionBehavior["All"] = "all";
    PlanDefinitionActionSelectionBehavior["AllOrNone"] = "all-or-none";
    PlanDefinitionActionSelectionBehavior["Any"] = "any";
    PlanDefinitionActionSelectionBehavior["AtMostOne"] = "at-most-one";
    PlanDefinitionActionSelectionBehavior["ExactlyOne"] = "exactly-one";
    PlanDefinitionActionSelectionBehavior["OneOrMore"] = "one-or-more";
})(PlanDefinitionActionSelectionBehavior = exports.PlanDefinitionActionSelectionBehavior || (exports.PlanDefinitionActionSelectionBehavior = {}));
/** yes | no */
var PlanDefinitionActionPrecheckBehavior;
(function (PlanDefinitionActionPrecheckBehavior) {
    PlanDefinitionActionPrecheckBehavior["No"] = "no";
    PlanDefinitionActionPrecheckBehavior["Yes"] = "yes";
})(PlanDefinitionActionPrecheckBehavior = exports.PlanDefinitionActionPrecheckBehavior || (exports.PlanDefinitionActionPrecheckBehavior = {}));
/** single | multiple */
var PlanDefinitionActionCardinalityBehavior;
(function (PlanDefinitionActionCardinalityBehavior) {
    PlanDefinitionActionCardinalityBehavior["Multiple"] = "multiple";
    PlanDefinitionActionCardinalityBehavior["Single"] = "single";
})(PlanDefinitionActionCardinalityBehavior = exports.PlanDefinitionActionCardinalityBehavior || (exports.PlanDefinitionActionCardinalityBehavior = {}));
/** routine | urgent | asap | stat */
var PlanDefinitionActionPriority;
(function (PlanDefinitionActionPriority) {
    PlanDefinitionActionPriority["Asap"] = "asap";
    PlanDefinitionActionPriority["Routine"] = "routine";
    PlanDefinitionActionPriority["Stat"] = "stat";
    PlanDefinitionActionPriority["Urgent"] = "urgent";
})(PlanDefinitionActionPriority = exports.PlanDefinitionActionPriority || (exports.PlanDefinitionActionPriority = {}));
/** must | could | must-unless-documented */
var PlanDefinitionActionRequiredBehavior;
(function (PlanDefinitionActionRequiredBehavior) {
    PlanDefinitionActionRequiredBehavior["Could"] = "could";
    PlanDefinitionActionRequiredBehavior["Must"] = "must";
    PlanDefinitionActionRequiredBehavior["MustUnlessDocumented"] = "must-unless-documented";
})(PlanDefinitionActionRequiredBehavior = exports.PlanDefinitionActionRequiredBehavior || (exports.PlanDefinitionActionRequiredBehavior = {}));
