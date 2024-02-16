"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureMapStructureMode = exports.StructureMapGroupRuleTargetTransform = exports.StructureMapGroupInputMode = exports.StructureMapStatus = exports.StructureMapGroupRuleTargetContexttype = exports.StructureMapGroupRuleSourceListmode = exports.StructureMapGroupTypemode = void 0;
/** none | types | type-and-types */
var StructureMapGroupTypemode;
(function (StructureMapGroupTypemode) {
    StructureMapGroupTypemode["None"] = "none";
    StructureMapGroupTypemode["TypeAndTypes"] = "type-and-types";
    StructureMapGroupTypemode["Types"] = "types";
})(StructureMapGroupTypemode = exports.StructureMapGroupTypemode || (exports.StructureMapGroupTypemode = {}));
/** first | not_first | last | not_last | only_one */
var StructureMapGroupRuleSourceListmode;
(function (StructureMapGroupRuleSourceListmode) {
    StructureMapGroupRuleSourceListmode["First"] = "first";
    StructureMapGroupRuleSourceListmode["Last"] = "last";
    StructureMapGroupRuleSourceListmode["Not_first"] = "not_first";
    StructureMapGroupRuleSourceListmode["Not_last"] = "not_last";
    StructureMapGroupRuleSourceListmode["Only_one"] = "only_one";
})(StructureMapGroupRuleSourceListmode = exports.StructureMapGroupRuleSourceListmode || (exports.StructureMapGroupRuleSourceListmode = {}));
/** type | variable */
var StructureMapGroupRuleTargetContexttype;
(function (StructureMapGroupRuleTargetContexttype) {
    StructureMapGroupRuleTargetContexttype["Type"] = "type";
    StructureMapGroupRuleTargetContexttype["Variable"] = "variable";
})(StructureMapGroupRuleTargetContexttype = exports.StructureMapGroupRuleTargetContexttype || (exports.StructureMapGroupRuleTargetContexttype = {}));
/** draft | active | retired | unknown */
var StructureMapStatus;
(function (StructureMapStatus) {
    StructureMapStatus["Active"] = "active";
    StructureMapStatus["Draft"] = "draft";
    StructureMapStatus["Retired"] = "retired";
    StructureMapStatus["Unknown"] = "unknown";
})(StructureMapStatus = exports.StructureMapStatus || (exports.StructureMapStatus = {}));
/** source | target */
var StructureMapGroupInputMode;
(function (StructureMapGroupInputMode) {
    StructureMapGroupInputMode["Source"] = "source";
    StructureMapGroupInputMode["Target"] = "target";
})(StructureMapGroupInputMode = exports.StructureMapGroupInputMode || (exports.StructureMapGroupInputMode = {}));
/** create | copy + */
var StructureMapGroupRuleTargetTransform;
(function (StructureMapGroupRuleTargetTransform) {
    StructureMapGroupRuleTargetTransform["Copy"] = "copy";
    StructureMapGroupRuleTargetTransform["Cast"] = "cast";
    StructureMapGroupRuleTargetTransform["Cp"] = "cp";
    StructureMapGroupRuleTargetTransform["Append"] = "append";
    StructureMapGroupRuleTargetTransform["Uuid"] = "uuid";
    StructureMapGroupRuleTargetTransform["Pointer"] = "pointer";
    StructureMapGroupRuleTargetTransform["Evaluate"] = "evaluate";
    StructureMapGroupRuleTargetTransform["Qty"] = "qty";
    StructureMapGroupRuleTargetTransform["Cc"] = "cc";
    StructureMapGroupRuleTargetTransform["C"] = "c";
    StructureMapGroupRuleTargetTransform["Escape"] = "escape";
    StructureMapGroupRuleTargetTransform["Truncate"] = "truncate";
    StructureMapGroupRuleTargetTransform["Translate"] = "translate";
    StructureMapGroupRuleTargetTransform["Create"] = "create";
    StructureMapGroupRuleTargetTransform["DateOp"] = "dateOp";
    StructureMapGroupRuleTargetTransform["Reference"] = "reference";
    StructureMapGroupRuleTargetTransform["Id"] = "id";
})(StructureMapGroupRuleTargetTransform = exports.StructureMapGroupRuleTargetTransform || (exports.StructureMapGroupRuleTargetTransform = {}));
/** source | queried | target | produced */
var StructureMapStructureMode;
(function (StructureMapStructureMode) {
    StructureMapStructureMode["Produced"] = "produced";
    StructureMapStructureMode["Queried"] = "queried";
    StructureMapStructureMode["Source"] = "source";
    StructureMapStructureMode["Target"] = "target";
})(StructureMapStructureMode = exports.StructureMapStructureMode || (exports.StructureMapStructureMode = {}));
