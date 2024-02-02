"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservationStatus = void 0;
/** registered | preliminary | final | amended + */
var ObservationStatus;
(function (ObservationStatus) {
    ObservationStatus["Amended"] = "amended";
    ObservationStatus["Cancelled"] = "cancelled";
    ObservationStatus["Corrected"] = "corrected";
    ObservationStatus["EnteredInError"] = "entered-in-error";
    ObservationStatus["Final"] = "final";
    ObservationStatus["Preliminary"] = "preliminary";
    ObservationStatus["Registered"] = "registered";
    ObservationStatus["Unknown"] = "unknown";
})(ObservationStatus = exports.ObservationStatus || (exports.ObservationStatus = {}));
