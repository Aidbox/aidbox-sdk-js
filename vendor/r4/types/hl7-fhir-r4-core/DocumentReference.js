"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReferenceCode = exports.DocumentReferenceStatus = exports.DocumentReferenceDocStatus = void 0;
/** preliminary | final | amended | entered-in-error */
var DocumentReferenceDocStatus;
(function (DocumentReferenceDocStatus) {
    DocumentReferenceDocStatus["Amended"] = "amended";
    DocumentReferenceDocStatus["EnteredInError"] = "entered-in-error";
    DocumentReferenceDocStatus["Final"] = "final";
    DocumentReferenceDocStatus["Preliminary"] = "preliminary";
})(DocumentReferenceDocStatus = exports.DocumentReferenceDocStatus || (exports.DocumentReferenceDocStatus = {}));
/** current | superseded | entered-in-error */
var DocumentReferenceStatus;
(function (DocumentReferenceStatus) {
    DocumentReferenceStatus["Current"] = "current";
    DocumentReferenceStatus["EnteredInError"] = "entered-in-error";
    DocumentReferenceStatus["Superseded"] = "superseded";
})(DocumentReferenceStatus = exports.DocumentReferenceStatus || (exports.DocumentReferenceStatus = {}));
/** replaces | transforms | signs | appends */
var DocumentReferenceCode;
(function (DocumentReferenceCode) {
    DocumentReferenceCode["Appends"] = "appends";
    DocumentReferenceCode["Replaces"] = "replaces";
    DocumentReferenceCode["Signs"] = "signs";
    DocumentReferenceCode["Transforms"] = "transforms";
})(DocumentReferenceCode = exports.DocumentReferenceCode || (exports.DocumentReferenceCode = {}));
