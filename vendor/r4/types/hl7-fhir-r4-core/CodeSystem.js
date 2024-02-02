"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSystemStatus = exports.CodeSystemContent = exports.CodeSystemType = exports.CodeSystemHierarchyMeaning = void 0;
/** grouped-by | is-a | part-of | classified-with */
var CodeSystemHierarchyMeaning;
(function (CodeSystemHierarchyMeaning) {
    CodeSystemHierarchyMeaning["ClassifiedWith"] = "classified-with";
    CodeSystemHierarchyMeaning["GroupedBy"] = "grouped-by";
    CodeSystemHierarchyMeaning["IsA"] = "is-a";
    CodeSystemHierarchyMeaning["PartOf"] = "part-of";
})(CodeSystemHierarchyMeaning = exports.CodeSystemHierarchyMeaning || (exports.CodeSystemHierarchyMeaning = {}));
/** code | Coding | string | integer | boolean | dateTime | decimal */
var CodeSystemType;
(function (CodeSystemType) {
    CodeSystemType["Coding"] = "Coding";
    CodeSystemType["Boolean"] = "boolean";
    CodeSystemType["Code"] = "code";
    CodeSystemType["DateTime"] = "dateTime";
    CodeSystemType["Decimal"] = "decimal";
    CodeSystemType["Integer"] = "integer";
    CodeSystemType["String"] = "string";
})(CodeSystemType = exports.CodeSystemType || (exports.CodeSystemType = {}));
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
