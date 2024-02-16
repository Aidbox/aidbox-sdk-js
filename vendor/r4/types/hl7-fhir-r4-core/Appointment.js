"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatus = exports.AppointmentParticipantStatus = exports.AppointmentParticipantRequired = void 0;
/** required | optional | information-only */
var AppointmentParticipantRequired;
(function (AppointmentParticipantRequired) {
    AppointmentParticipantRequired["InformationOnly"] = "information-only";
    AppointmentParticipantRequired["Optional"] = "optional";
    AppointmentParticipantRequired["Required"] = "required";
})(AppointmentParticipantRequired = exports.AppointmentParticipantRequired || (exports.AppointmentParticipantRequired = {}));
/** accepted | declined | tentative | needs-action */
var AppointmentParticipantStatus;
(function (AppointmentParticipantStatus) {
    AppointmentParticipantStatus["Accepted"] = "accepted";
    AppointmentParticipantStatus["Declined"] = "declined";
    AppointmentParticipantStatus["NeedsAction"] = "needs-action";
    AppointmentParticipantStatus["Tentative"] = "tentative";
})(AppointmentParticipantStatus = exports.AppointmentParticipantStatus || (exports.AppointmentParticipantStatus = {}));
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
