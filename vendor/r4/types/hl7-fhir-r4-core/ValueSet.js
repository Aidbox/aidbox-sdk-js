"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSetComposeIncludeFilterOp = exports.ValueSetStatus = void 0;
/** draft | active | retired | unknown */
var ValueSetStatus;
(function (ValueSetStatus) {
    ValueSetStatus["Active"] = "active";
    ValueSetStatus["Draft"] = "draft";
    ValueSetStatus["Retired"] = "retired";
    ValueSetStatus["Unknown"] = "unknown";
})(ValueSetStatus = exports.ValueSetStatus || (exports.ValueSetStatus = {}));
/** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
var ValueSetComposeIncludeFilterOp;
(function (ValueSetComposeIncludeFilterOp) {
    ValueSetComposeIncludeFilterOp["Exists"] = "exists";
    ValueSetComposeIncludeFilterOp["In"] = "in";
    ValueSetComposeIncludeFilterOp["IsNotA"] = "is-not-a";
    ValueSetComposeIncludeFilterOp["="] = "=";
    ValueSetComposeIncludeFilterOp["Generalizes"] = "generalizes";
    ValueSetComposeIncludeFilterOp["DescendentOf"] = "descendent-of";
    ValueSetComposeIncludeFilterOp["Regex"] = "regex";
    ValueSetComposeIncludeFilterOp["IsA"] = "is-a";
    ValueSetComposeIncludeFilterOp["NotIn"] = "not-in";
})(ValueSetComposeIncludeFilterOp = exports.ValueSetComposeIncludeFilterOp || (exports.ValueSetComposeIncludeFilterOp = {}));
