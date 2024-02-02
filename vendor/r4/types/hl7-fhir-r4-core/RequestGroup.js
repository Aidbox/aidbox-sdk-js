"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGroupActionRequiredBehavior = exports.RequestGroupPriority = exports.RequestGroupActionGroupingBehavior = exports.RequestGroupActionKind = exports.RequestGroupStatus = exports.RequestGroupActionRelationship = exports.RequestGroupActionSelectionBehavior = exports.RequestGroupActionCardinalityBehavior = exports.RequestGroupIntent = exports.RequestGroupActionPrecheckBehavior = exports.RequestGroupActionPriority = void 0;
/** routine | urgent | asap | stat */
var RequestGroupActionPriority;
(function (RequestGroupActionPriority) {
    RequestGroupActionPriority["Asap"] = "asap";
    RequestGroupActionPriority["Routine"] = "routine";
    RequestGroupActionPriority["Stat"] = "stat";
    RequestGroupActionPriority["Urgent"] = "urgent";
})(RequestGroupActionPriority = exports.RequestGroupActionPriority || (exports.RequestGroupActionPriority = {}));
/** yes | no */
var RequestGroupActionPrecheckBehavior;
(function (RequestGroupActionPrecheckBehavior) {
    RequestGroupActionPrecheckBehavior["No"] = "no";
    RequestGroupActionPrecheckBehavior["Yes"] = "yes";
})(RequestGroupActionPrecheckBehavior = exports.RequestGroupActionPrecheckBehavior || (exports.RequestGroupActionPrecheckBehavior = {}));
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
/** single | multiple */
var RequestGroupActionCardinalityBehavior;
(function (RequestGroupActionCardinalityBehavior) {
    RequestGroupActionCardinalityBehavior["Multiple"] = "multiple";
    RequestGroupActionCardinalityBehavior["Single"] = "single";
})(RequestGroupActionCardinalityBehavior = exports.RequestGroupActionCardinalityBehavior || (exports.RequestGroupActionCardinalityBehavior = {}));
/** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
var RequestGroupActionSelectionBehavior;
(function (RequestGroupActionSelectionBehavior) {
    RequestGroupActionSelectionBehavior["All"] = "all";
    RequestGroupActionSelectionBehavior["AllOrNone"] = "all-or-none";
    RequestGroupActionSelectionBehavior["Any"] = "any";
    RequestGroupActionSelectionBehavior["AtMostOne"] = "at-most-one";
    RequestGroupActionSelectionBehavior["ExactlyOne"] = "exactly-one";
    RequestGroupActionSelectionBehavior["OneOrMore"] = "one-or-more";
})(RequestGroupActionSelectionBehavior = exports.RequestGroupActionSelectionBehavior || (exports.RequestGroupActionSelectionBehavior = {}));
/** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
var RequestGroupActionRelationship;
(function (RequestGroupActionRelationship) {
    RequestGroupActionRelationship["BeforeStart"] = "before-start";
    RequestGroupActionRelationship["Concurrent"] = "concurrent";
    RequestGroupActionRelationship["After"] = "after";
    RequestGroupActionRelationship["ConcurrentWithStart"] = "concurrent-with-start";
    RequestGroupActionRelationship["BeforeEnd"] = "before-end";
    RequestGroupActionRelationship["AfterEnd"] = "after-end";
    RequestGroupActionRelationship["AfterStart"] = "after-start";
    RequestGroupActionRelationship["Before"] = "before";
    RequestGroupActionRelationship["ConcurrentWithEnd"] = "concurrent-with-end";
})(RequestGroupActionRelationship = exports.RequestGroupActionRelationship || (exports.RequestGroupActionRelationship = {}));
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
/** applicability | start | stop */
var RequestGroupActionKind;
(function (RequestGroupActionKind) {
    RequestGroupActionKind["Applicability"] = "applicability";
    RequestGroupActionKind["Start"] = "start";
    RequestGroupActionKind["Stop"] = "stop";
})(RequestGroupActionKind = exports.RequestGroupActionKind || (exports.RequestGroupActionKind = {}));
/** visual-group | logical-group | sentence-group */
var RequestGroupActionGroupingBehavior;
(function (RequestGroupActionGroupingBehavior) {
    RequestGroupActionGroupingBehavior["LogicalGroup"] = "logical-group";
    RequestGroupActionGroupingBehavior["SentenceGroup"] = "sentence-group";
    RequestGroupActionGroupingBehavior["VisualGroup"] = "visual-group";
})(RequestGroupActionGroupingBehavior = exports.RequestGroupActionGroupingBehavior || (exports.RequestGroupActionGroupingBehavior = {}));
/** routine | urgent | asap | stat */
var RequestGroupPriority;
(function (RequestGroupPriority) {
    RequestGroupPriority["Asap"] = "asap";
    RequestGroupPriority["Routine"] = "routine";
    RequestGroupPriority["Stat"] = "stat";
    RequestGroupPriority["Urgent"] = "urgent";
})(RequestGroupPriority = exports.RequestGroupPriority || (exports.RequestGroupPriority = {}));
/** must | could | must-unless-documented */
var RequestGroupActionRequiredBehavior;
(function (RequestGroupActionRequiredBehavior) {
    RequestGroupActionRequiredBehavior["Could"] = "could";
    RequestGroupActionRequiredBehavior["Must"] = "must";
    RequestGroupActionRequiredBehavior["MustUnlessDocumented"] = "must-unless-documented";
})(RequestGroupActionRequiredBehavior = exports.RequestGroupActionRequiredBehavior || (exports.RequestGroupActionRequiredBehavior = {}));
