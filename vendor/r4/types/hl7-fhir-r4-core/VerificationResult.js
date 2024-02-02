"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationResultStatus = void 0;
/** attested | validated | in-process | req-revalid | val-fail | reval-fail */
var VerificationResultStatus;
(function (VerificationResultStatus) {
    VerificationResultStatus["Attested"] = "attested";
    VerificationResultStatus["InProcess"] = "in-process";
    VerificationResultStatus["ReqRevalid"] = "req-revalid";
    VerificationResultStatus["RevalFail"] = "reval-fail";
    VerificationResultStatus["ValFail"] = "val-fail";
    VerificationResultStatus["Validated"] = "validated";
})(VerificationResultStatus = exports.VerificationResultStatus || (exports.VerificationResultStatus = {}));
