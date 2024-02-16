"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSystemStatus = exports.CodeSystemContent = exports.CodeSystemPropertyType = exports.CodeSystemHierarchymeaning = void 0;
/** grouped-by | is-a | part-of | classified-with */
var CodeSystemHierarchymeaning;
(function (CodeSystemHierarchymeaning) {
    CodeSystemHierarchymeaning["ClassifiedWith"] = "classified-with";
    CodeSystemHierarchymeaning["GroupedBy"] = "grouped-by";
    CodeSystemHierarchymeaning["IsA"] = "is-a";
    CodeSystemHierarchymeaning["PartOf"] = "part-of";
})(CodeSystemHierarchymeaning = exports.CodeSystemHierarchymeaning || (exports.CodeSystemHierarchymeaning = {}));
/** code | Coding | string | integer | boolean | dateTime | decimal */
var CodeSystemPropertyType;
(function (CodeSystemPropertyType) {
    CodeSystemPropertyType["Coding"] = "Coding";
    CodeSystemPropertyType["Boolean"] = "boolean";
    CodeSystemPropertyType["Code"] = "code";
    CodeSystemPropertyType["DateTime"] = "dateTime";
    CodeSystemPropertyType["Decimal"] = "decimal";
    CodeSystemPropertyType["Integer"] = "integer";
    CodeSystemPropertyType["String"] = "string";
})(CodeSystemPropertyType = exports.CodeSystemPropertyType || (exports.CodeSystemPropertyType = {}));
/** not-present | example | fragment | complete | supplement */
var CodeSystemContent;
(function (CodeSystemContent) {
    CodeSystemContent["Complete"] = "complete";
    CodeSystemContent["Example"] = "example";
    CodeSystemContent["Fragment"] = "fragment";
    CodeSystemContent["NotPresent"] = "not-present";
    CodeSystemContent["Supplement"] = "supplement";
})(CodeSystemContent = exports.CodeSystemContent || (exports.CodeSystemContent = {}));
/** draft | active | retired | unknown */
var CodeSystemStatus;
(function (CodeSystemStatus) {
    CodeSystemStatus["Active"] = "active";
    CodeSystemStatus["Draft"] = "draft";
    CodeSystemStatus["Retired"] = "retired";
    CodeSystemStatus["Unknown"] = "unknown";
})(CodeSystemStatus = exports.CodeSystemStatus || (exports.CodeSystemStatus = {}));
