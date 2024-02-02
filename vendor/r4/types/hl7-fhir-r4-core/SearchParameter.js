"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParameterStatus = exports.SearchParameterType = exports.SearchParameterXpathUsage = void 0;
/** normal | phonetic | nearby | distance | other */
var SearchParameterXpathUsage;
(function (SearchParameterXpathUsage) {
    SearchParameterXpathUsage["Distance"] = "distance";
    SearchParameterXpathUsage["Nearby"] = "nearby";
    SearchParameterXpathUsage["Normal"] = "normal";
    SearchParameterXpathUsage["Other"] = "other";
    SearchParameterXpathUsage["Phonetic"] = "phonetic";
})(SearchParameterXpathUsage = exports.SearchParameterXpathUsage || (exports.SearchParameterXpathUsage = {}));
/** number | date | string | token | reference | composite | quantity | uri | special */
var SearchParameterType;
(function (SearchParameterType) {
    SearchParameterType["Uri"] = "uri";
    SearchParameterType["Number"] = "number";
    SearchParameterType["Date"] = "date";
    SearchParameterType["Special"] = "special";
    SearchParameterType["Quantity"] = "quantity";
    SearchParameterType["String"] = "string";
    SearchParameterType["Composite"] = "composite";
    SearchParameterType["Token"] = "token";
    SearchParameterType["Reference"] = "reference";
})(SearchParameterType = exports.SearchParameterType || (exports.SearchParameterType = {}));
/** draft | active | retired | unknown */
var SearchParameterStatus;
(function (SearchParameterStatus) {
    SearchParameterStatus["Active"] = "active";
    SearchParameterStatus["Draft"] = "draft";
    SearchParameterStatus["Retired"] = "retired";
    SearchParameterStatus["Unknown"] = "unknown";
})(SearchParameterStatus = exports.SearchParameterStatus || (exports.SearchParameterStatus = {}));
