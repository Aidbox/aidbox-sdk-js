"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSetStatus = exports.ValueSetComposeIncludeOp = void 0;
/** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
var ValueSetComposeIncludeOp;
(function (ValueSetComposeIncludeOp) {
    ValueSetComposeIncludeOp["Exists"] = "exists";
    ValueSetComposeIncludeOp["In"] = "in";
    ValueSetComposeIncludeOp["IsNotA"] = "is-not-a";
    ValueSetComposeIncludeOp["="] = "=";
    ValueSetComposeIncludeOp["Generalizes"] = "generalizes";
    ValueSetComposeIncludeOp["DescendentOf"] = "descendent-of";
    ValueSetComposeIncludeOp["Regex"] = "regex";
    ValueSetComposeIncludeOp["IsA"] = "is-a";
    ValueSetComposeIncludeOp["NotIn"] = "not-in";
})(ValueSetComposeIncludeOp = exports.ValueSetComposeIncludeOp || (exports.ValueSetComposeIncludeOp = {}));
/** draft | active | retired | unknown */
var ValueSetStatus;
(function (ValueSetStatus) {
    ValueSetStatus["Active"] = "active";
    ValueSetStatus["Draft"] = "draft";
    ValueSetStatus["Retired"] = "retired";
    ValueSetStatus["Unknown"] = "unknown";
})(ValueSetStatus = exports.ValueSetStatus || (exports.ValueSetStatus = {}));
