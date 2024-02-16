"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptMapStatus = exports.ConceptMapGroupElementTargetEquivalence = exports.ConceptMapGroupUnmappedMode = void 0;
/** provided | fixed | other-map */
var ConceptMapGroupUnmappedMode;
(function (ConceptMapGroupUnmappedMode) {
    ConceptMapGroupUnmappedMode["Fixed"] = "fixed";
    ConceptMapGroupUnmappedMode["OtherMap"] = "other-map";
    ConceptMapGroupUnmappedMode["Provided"] = "provided";
})(ConceptMapGroupUnmappedMode = exports.ConceptMapGroupUnmappedMode || (exports.ConceptMapGroupUnmappedMode = {}));
/** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
var ConceptMapGroupElementTargetEquivalence;
(function (ConceptMapGroupElementTargetEquivalence) {
    ConceptMapGroupElementTargetEquivalence["Disjoint"] = "disjoint";
    ConceptMapGroupElementTargetEquivalence["Equal"] = "equal";
    ConceptMapGroupElementTargetEquivalence["Specializes"] = "specializes";
    ConceptMapGroupElementTargetEquivalence["Subsumes"] = "subsumes";
    ConceptMapGroupElementTargetEquivalence["Inexact"] = "inexact";
    ConceptMapGroupElementTargetEquivalence["Relatedto"] = "relatedto";
    ConceptMapGroupElementTargetEquivalence["Wider"] = "wider";
    ConceptMapGroupElementTargetEquivalence["Equivalent"] = "equivalent";
    ConceptMapGroupElementTargetEquivalence["Unmatched"] = "unmatched";
    ConceptMapGroupElementTargetEquivalence["Narrower"] = "narrower";
})(ConceptMapGroupElementTargetEquivalence = exports.ConceptMapGroupElementTargetEquivalence || (exports.ConceptMapGroupElementTargetEquivalence = {}));
/** draft | active | retired | unknown */
var ConceptMapStatus;
(function (ConceptMapStatus) {
    ConceptMapStatus["Active"] = "active";
    ConceptMapStatus["Draft"] = "draft";
    ConceptMapStatus["Retired"] = "retired";
    ConceptMapStatus["Unknown"] = "unknown";
})(ConceptMapStatus = exports.ConceptMapStatus || (exports.ConceptMapStatus = {}));
