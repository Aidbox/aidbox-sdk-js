"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureTargetFormat = exports.SignatureSigFormat = void 0;
/** The technical format of the signature */
var SignatureSigFormat;
(function (SignatureSigFormat) {
    SignatureSigFormat["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    SignatureSigFormat["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    SignatureSigFormat["Application/sql"] = "application/sql";
    SignatureSigFormat["Application/xquery"] = "application/xquery";
})(SignatureSigFormat = exports.SignatureSigFormat || (exports.SignatureSigFormat = {}));
/** The technical format of the signed resources */
var SignatureTargetFormat;
(function (SignatureTargetFormat) {
    SignatureTargetFormat["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    SignatureTargetFormat["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    SignatureTargetFormat["Application/sql"] = "application/sql";
    SignatureTargetFormat["Application/xquery"] = "application/xquery";
})(SignatureTargetFormat = exports.SignatureTargetFormat || (exports.SignatureTargetFormat = {}));
