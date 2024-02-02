"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeOfCareStatus = void 0;
/** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
var EpisodeOfCareStatus;
(function (EpisodeOfCareStatus) {
    EpisodeOfCareStatus["Active"] = "active";
    EpisodeOfCareStatus["Cancelled"] = "cancelled";
    EpisodeOfCareStatus["EnteredInError"] = "entered-in-error";
    EpisodeOfCareStatus["Finished"] = "finished";
    EpisodeOfCareStatus["Onhold"] = "onhold";
    EpisodeOfCareStatus["Planned"] = "planned";
    EpisodeOfCareStatus["Waitlist"] = "waitlist";
})(EpisodeOfCareStatus = exports.EpisodeOfCareStatus || (exports.EpisodeOfCareStatus = {}));
