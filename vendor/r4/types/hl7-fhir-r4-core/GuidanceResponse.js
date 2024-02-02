"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidanceResponseStatus = void 0;
/** success | data-requested | data-required | in-progress | failure | entered-in-error */
var GuidanceResponseStatus;
(function (GuidanceResponseStatus) {
    GuidanceResponseStatus["DataRequested"] = "data-requested";
    GuidanceResponseStatus["DataRequired"] = "data-required";
    GuidanceResponseStatus["EnteredInError"] = "entered-in-error";
    GuidanceResponseStatus["Failure"] = "failure";
    GuidanceResponseStatus["InProgress"] = "in-progress";
    GuidanceResponseStatus["Success"] = "success";
})(GuidanceResponseStatus = exports.GuidanceResponseStatus || (exports.GuidanceResponseStatus = {}));
