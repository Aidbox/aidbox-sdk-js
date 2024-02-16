"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReferenceRelatestoCode = exports.DocumentReferenceStatus = exports.DocumentReferenceDocstatus = void 0;
/** preliminary | final | amended | entered-in-error */
var DocumentReferenceDocstatus;
(function (DocumentReferenceDocstatus) {
    DocumentReferenceDocstatus["Amended"] = "amended";
    DocumentReferenceDocstatus["EnteredInError"] = "entered-in-error";
    DocumentReferenceDocstatus["Final"] = "final";
    DocumentReferenceDocstatus["Preliminary"] = "preliminary";
})(DocumentReferenceDocstatus = exports.DocumentReferenceDocstatus || (exports.DocumentReferenceDocstatus = {}));
/** current | superseded | entered-in-error */
var DocumentReferenceStatus;
(function (DocumentReferenceStatus) {
    DocumentReferenceStatus["Current"] = "current";
    DocumentReferenceStatus["EnteredInError"] = "entered-in-error";
    DocumentReferenceStatus["Superseded"] = "superseded";
})(DocumentReferenceStatus = exports.DocumentReferenceStatus || (exports.DocumentReferenceStatus = {}));
/** replaces | transforms | signs | appends */
var DocumentReferenceRelatestoCode;
(function (DocumentReferenceRelatestoCode) {
    DocumentReferenceRelatestoCode["Appends"] = "appends";
    DocumentReferenceRelatestoCode["Replaces"] = "replaces";
    DocumentReferenceRelatestoCode["Signs"] = "signs";
    DocumentReferenceRelatestoCode["Transforms"] = "transforms";
})(DocumentReferenceRelatestoCode = exports.DocumentReferenceRelatestoCode || (exports.DocumentReferenceRelatestoCode = {}));
