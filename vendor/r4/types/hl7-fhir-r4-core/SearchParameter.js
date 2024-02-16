"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParameterStatus = exports.SearchParameterType = exports.SearchParameterXpathusage = void 0;
/** normal | phonetic | nearby | distance | other */
var SearchParameterXpathusage;
(function (SearchParameterXpathusage) {
    SearchParameterXpathusage["Distance"] = "distance";
    SearchParameterXpathusage["Nearby"] = "nearby";
    SearchParameterXpathusage["Normal"] = "normal";
    SearchParameterXpathusage["Other"] = "other";
    SearchParameterXpathusage["Phonetic"] = "phonetic";
})(SearchParameterXpathusage = exports.SearchParameterXpathusage || (exports.SearchParameterXpathusage = {}));
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
