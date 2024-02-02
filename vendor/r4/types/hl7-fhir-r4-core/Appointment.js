"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatus = exports.AppointmentRequired = void 0;
/** required | optional | information-only */
var AppointmentRequired;
(function (AppointmentRequired) {
    AppointmentRequired["InformationOnly"] = "information-only";
    AppointmentRequired["Optional"] = "optional";
    AppointmentRequired["Required"] = "required";
})(AppointmentRequired = exports.AppointmentRequired || (exports.AppointmentRequired = {}));
/** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["Fulfilled"] = "fulfilled";
    AppointmentStatus["Proposed"] = "proposed";
    AppointmentStatus["Cancelled"] = "cancelled";
    AppointmentStatus["Arrived"] = "arrived";
    AppointmentStatus["CheckedIn"] = "checked-in";
    AppointmentStatus["Noshow"] = "noshow";
    AppointmentStatus["EnteredInError"] = "entered-in-error";
    AppointmentStatus["Booked"] = "booked";
    AppointmentStatus["Pending"] = "pending";
    AppointmentStatus["Waitlist"] = "waitlist";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));
