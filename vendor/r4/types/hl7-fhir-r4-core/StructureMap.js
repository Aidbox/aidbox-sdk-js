"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureMapMode = exports.StructureMapGroupRuleContextType = exports.StructureMapGroupRuleListMode = exports.StructureMapStatus = exports.StructureMapGroupRuleTransform = exports.StructureMapTypeMode = void 0;
/** none | types | type-and-types */
var StructureMapTypeMode;
(function (StructureMapTypeMode) {
    StructureMapTypeMode["None"] = "none";
    StructureMapTypeMode["TypeAndTypes"] = "type-and-types";
    StructureMapTypeMode["Types"] = "types";
})(StructureMapTypeMode = exports.StructureMapTypeMode || (exports.StructureMapTypeMode = {}));
/** create | copy + */
var StructureMapGroupRuleTransform;
(function (StructureMapGroupRuleTransform) {
    StructureMapGroupRuleTransform["Copy"] = "copy";
    StructureMapGroupRuleTransform["Cast"] = "cast";
    StructureMapGroupRuleTransform["Cp"] = "cp";
    StructureMapGroupRuleTransform["Append"] = "append";
    StructureMapGroupRuleTransform["Uuid"] = "uuid";
    StructureMapGroupRuleTransform["Pointer"] = "pointer";
    StructureMapGroupRuleTransform["Evaluate"] = "evaluate";
    StructureMapGroupRuleTransform["Qty"] = "qty";
    StructureMapGroupRuleTransform["Cc"] = "cc";
    StructureMapGroupRuleTransform["C"] = "c";
    StructureMapGroupRuleTransform["Escape"] = "escape";
    StructureMapGroupRuleTransform["Truncate"] = "truncate";
    StructureMapGroupRuleTransform["Translate"] = "translate";
    StructureMapGroupRuleTransform["Create"] = "create";
    StructureMapGroupRuleTransform["DateOp"] = "dateOp";
    StructureMapGroupRuleTransform["Reference"] = "reference";
    StructureMapGroupRuleTransform["Id"] = "id";
})(StructureMapGroupRuleTransform = exports.StructureMapGroupRuleTransform || (exports.StructureMapGroupRuleTransform = {}));
/** draft | active | retired | unknown */
var StructureMapStatus;
(function (StructureMapStatus) {
    StructureMapStatus["Active"] = "active";
    StructureMapStatus["Draft"] = "draft";
    StructureMapStatus["Retired"] = "retired";
    StructureMapStatus["Unknown"] = "unknown";
})(StructureMapStatus = exports.StructureMapStatus || (exports.StructureMapStatus = {}));
/** first | not_first | last | not_last | only_one */
var StructureMapGroupRuleListMode;
(function (StructureMapGroupRuleListMode) {
    StructureMapGroupRuleListMode["First"] = "first";
    StructureMapGroupRuleListMode["Last"] = "last";
    StructureMapGroupRuleListMode["Not_first"] = "not_first";
    StructureMapGroupRuleListMode["Not_last"] = "not_last";
    StructureMapGroupRuleListMode["Only_one"] = "only_one";
})(StructureMapGroupRuleListMode = exports.StructureMapGroupRuleListMode || (exports.StructureMapGroupRuleListMode = {}));
/** type | variable */
var StructureMapGroupRuleContextType;
(function (StructureMapGroupRuleContextType) {
    StructureMapGroupRuleContextType["Type"] = "type";
    StructureMapGroupRuleContextType["Variable"] = "variable";
})(StructureMapGroupRuleContextType = exports.StructureMapGroupRuleContextType || (exports.StructureMapGroupRuleContextType = {}));
/** source | queried | target | produced */
var StructureMapMode;
(function (StructureMapMode) {
    StructureMapMode["Produced"] = "produced";
    StructureMapMode["Queried"] = "queried";
    StructureMapMode["Source"] = "source";
    StructureMapMode["Target"] = "target";
})(StructureMapMode = exports.StructureMapMode || (exports.StructureMapMode = {}));
