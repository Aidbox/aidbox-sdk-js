"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureTargetformat = exports.SignatureSigformat = void 0;
/** The technical format of the signature */
var SignatureSigformat;
(function (SignatureSigformat) {
    SignatureSigformat["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    SignatureSigformat["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    SignatureSigformat["Application/sql"] = "application/sql";
    SignatureSigformat["Application/xquery"] = "application/xquery";
})(SignatureSigformat = exports.SignatureSigformat || (exports.SignatureSigformat = {}));
/** The technical format of the signed resources */
var SignatureTargetformat;
(function (SignatureTargetformat) {
    SignatureTargetformat["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    SignatureTargetformat["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    SignatureTargetformat["Application/sql"] = "application/sql";
    SignatureTargetformat["Application/xquery"] = "application/xquery";
})(SignatureTargetformat = exports.SignatureTargetformat || (exports.SignatureTargetformat = {}));
