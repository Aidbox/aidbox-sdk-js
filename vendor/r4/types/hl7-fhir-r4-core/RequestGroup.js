"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGroupActionCardinalitybehavior = exports.RequestGroupPriority = exports.RequestGroupActionRelatedactionRelationship = exports.RequestGroupActionRequiredbehavior = exports.RequestGroupActionConditionKind = exports.RequestGroupActionGroupingbehavior = exports.RequestGroupActionSelectionbehavior = exports.RequestGroupActionPrecheckbehavior = exports.RequestGroupStatus = exports.RequestGroupIntent = exports.RequestGroupActionPriority = void 0;
/** routine | urgent | asap | stat */
var RequestGroupActionPriority;
(function (RequestGroupActionPriority) {
    RequestGroupActionPriority["Asap"] = "asap";
    RequestGroupActionPriority["Routine"] = "routine";
    RequestGroupActionPriority["Stat"] = "stat";
    RequestGroupActionPriority["Urgent"] = "urgent";
})(RequestGroupActionPriority = exports.RequestGroupActionPriority || (exports.RequestGroupActionPriority = {}));
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
var RequestGroupIntent;
(function (RequestGroupIntent) {
    RequestGroupIntent["Order"] = "order";
    RequestGroupIntent["FillerOrder"] = "filler-order";
    RequestGroupIntent["Option"] = "option";
    RequestGroupIntent["Directive"] = "directive";
    RequestGroupIntent["Proposal"] = "proposal";
    RequestGroupIntent["ReflexOrder"] = "reflex-order";
    RequestGroupIntent["Plan"] = "plan";
    RequestGroupIntent["InstanceOrder"] = "instance-order";
    RequestGroupIntent["OriginalOrder"] = "original-order";
})(RequestGroupIntent = exports.RequestGroupIntent || (exports.RequestGroupIntent = {}));
/** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
var RequestGroupStatus;
(function (RequestGroupStatus) {
    RequestGroupStatus["Active"] = "active";
    RequestGroupStatus["Completed"] = "completed";
    RequestGroupStatus["Draft"] = "draft";
    RequestGroupStatus["EnteredInError"] = "entered-in-error";
    RequestGroupStatus["OnHold"] = "on-hold";
    RequestGroupStatus["Revoked"] = "revoked";
    RequestGroupStatus["Unknown"] = "unknown";
})(RequestGroupStatus = exports.RequestGroupStatus || (exports.RequestGroupStatus = {}));
/** yes | no */
var RequestGroupActionPrecheckbehavior;
(function (RequestGroupActionPrecheckbehavior) {
    RequestGroupActionPrecheckbehavior["No"] = "no";
    RequestGroupActionPrecheckbehavior["Yes"] = "yes";
})(RequestGroupActionPrecheckbehavior = exports.RequestGroupActionPrecheckbehavior || (exports.RequestGroupActionPrecheckbehavior = {}));
/** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
var RequestGroupActionSelectionbehavior;
(function (RequestGroupActionSelectionbehavior) {
    RequestGroupActionSelectionbehavior["All"] = "all";
    RequestGroupActionSelectionbehavior["AllOrNone"] = "all-or-none";
    RequestGroupActionSelectionbehavior["Any"] = "any";
    RequestGroupActionSelectionbehavior["AtMostOne"] = "at-most-one";
    RequestGroupActionSelectionbehavior["ExactlyOne"] = "exactly-one";
    RequestGroupActionSelectionbehavior["OneOrMore"] = "one-or-more";
})(RequestGroupActionSelectionbehavior = exports.RequestGroupActionSelectionbehavior || (exports.RequestGroupActionSelectionbehavior = {}));
/** visual-group | logical-group | sentence-group */
var RequestGroupActionGroupingbehavior;
(function (RequestGroupActionGroupingbehavior) {
    RequestGroupActionGroupingbehavior["LogicalGroup"] = "logical-group";
    RequestGroupActionGroupingbehavior["SentenceGroup"] = "sentence-group";
    RequestGroupActionGroupingbehavior["VisualGroup"] = "visual-group";
})(RequestGroupActionGroupingbehavior = exports.RequestGroupActionGroupingbehavior || (exports.RequestGroupActionGroupingbehavior = {}));
/** applicability | start | stop */
var RequestGroupActionConditionKind;
(function (RequestGroupActionConditionKind) {
    RequestGroupActionConditionKind["Applicability"] = "applicability";
    RequestGroupActionConditionKind["Start"] = "start";
    RequestGroupActionConditionKind["Stop"] = "stop";
})(RequestGroupActionConditionKind = exports.RequestGroupActionConditionKind || (exports.RequestGroupActionConditionKind = {}));
/** must | could | must-unless-documented */
var RequestGroupActionRequiredbehavior;
(function (RequestGroupActionRequiredbehavior) {
    RequestGroupActionRequiredbehavior["Could"] = "could";
    RequestGroupActionRequiredbehavior["Must"] = "must";
    RequestGroupActionRequiredbehavior["MustUnlessDocumented"] = "must-unless-documented";
})(RequestGroupActionRequiredbehavior = exports.RequestGroupActionRequiredbehavior || (exports.RequestGroupActionRequiredbehavior = {}));
/** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
var RequestGroupActionRelatedactionRelationship;
(function (RequestGroupActionRelatedactionRelationship) {
    RequestGroupActionRelatedactionRelationship["BeforeStart"] = "before-start";
    RequestGroupActionRelatedactionRelationship["Concurrent"] = "concurrent";
    RequestGroupActionRelatedactionRelationship["After"] = "after";
    RequestGroupActionRelatedactionRelationship["ConcurrentWithStart"] = "concurrent-with-start";
    RequestGroupActionRelatedactionRelationship["BeforeEnd"] = "before-end";
    RequestGroupActionRelatedactionRelationship["AfterEnd"] = "after-end";
    RequestGroupActionRelatedactionRelationship["AfterStart"] = "after-start";
    RequestGroupActionRelatedactionRelationship["Before"] = "before";
    RequestGroupActionRelatedactionRelationship["ConcurrentWithEnd"] = "concurrent-with-end";
})(RequestGroupActionRelatedactionRelationship = exports.RequestGroupActionRelatedactionRelationship || (exports.RequestGroupActionRelatedactionRelationship = {}));
/** routine | urgent | asap | stat */
var RequestGroupPriority;
(function (RequestGroupPriority) {
    RequestGroupPriority["Asap"] = "asap";
    RequestGroupPriority["Routine"] = "routine";
    RequestGroupPriority["Stat"] = "stat";
    RequestGroupPriority["Urgent"] = "urgent";
})(RequestGroupPriority = exports.RequestGroupPriority || (exports.RequestGroupPriority = {}));
/** single | multiple */
var RequestGroupActionCardinalitybehavior;
(function (RequestGroupActionCardinalitybehavior) {
    RequestGroupActionCardinalitybehavior["Multiple"] = "multiple";
    RequestGroupActionCardinalitybehavior["Single"] = "single";
})(RequestGroupActionCardinalitybehavior = exports.RequestGroupActionCardinalitybehavior || (exports.RequestGroupActionCardinalitybehavior = {}));
