"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchSubjectStatus = void 0;
/** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
var ResearchSubjectStatus;
(function (ResearchSubjectStatus) {
    ResearchSubjectStatus["Candidate"] = "candidate";
    ResearchSubjectStatus["NotRegistered"] = "not-registered";
    ResearchSubjectStatus["Screening"] = "screening";
    ResearchSubjectStatus["FollowUp"] = "follow-up";
    ResearchSubjectStatus["OnStudyIntervention"] = "on-study-intervention";
    ResearchSubjectStatus["Eligible"] = "eligible";
    ResearchSubjectStatus["OffStudy"] = "off-study";
    ResearchSubjectStatus["Withdrawn"] = "withdrawn";
    ResearchSubjectStatus["OnStudyObservation"] = "on-study-observation";
    ResearchSubjectStatus["PotentialCandidate"] = "potential-candidate";
    ResearchSubjectStatus["PendingOnStudy"] = "pending-on-study";
    ResearchSubjectStatus["OnStudy"] = "on-study";
    ResearchSubjectStatus["Ineligible"] = "ineligible";
})(ResearchSubjectStatus = exports.ResearchSubjectStatus || (exports.ResearchSubjectStatus = {}));
