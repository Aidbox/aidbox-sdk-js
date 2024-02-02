"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptMapStatus = exports.ConceptMapEquivalence = exports.ConceptMapMode = void 0;
/** provided | fixed | other-map */
var ConceptMapMode;
(function (ConceptMapMode) {
    ConceptMapMode["Fixed"] = "fixed";
    ConceptMapMode["OtherMap"] = "other-map";
    ConceptMapMode["Provided"] = "provided";
})(ConceptMapMode = exports.ConceptMapMode || (exports.ConceptMapMode = {}));
/** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
var ConceptMapEquivalence;
(function (ConceptMapEquivalence) {
    ConceptMapEquivalence["Disjoint"] = "disjoint";
    ConceptMapEquivalence["Equal"] = "equal";
    ConceptMapEquivalence["Specializes"] = "specializes";
    ConceptMapEquivalence["Subsumes"] = "subsumes";
    ConceptMapEquivalence["Inexact"] = "inexact";
    ConceptMapEquivalence["Relatedto"] = "relatedto";
    ConceptMapEquivalence["Wider"] = "wider";
    ConceptMapEquivalence["Equivalent"] = "equivalent";
    ConceptMapEquivalence["Unmatched"] = "unmatched";
    ConceptMapEquivalence["Narrower"] = "narrower";
})(ConceptMapEquivalence = exports.ConceptMapEquivalence || (exports.ConceptMapEquivalence = {}));
/** draft | active | retired | unknown */
var ConceptMapStatus;
(function (ConceptMapStatus) {
    ConceptMapStatus["Active"] = "active";
    ConceptMapStatus["Draft"] = "draft";
    ConceptMapStatus["Retired"] = "retired";
    ConceptMapStatus["Unknown"] = "unknown";
})(ConceptMapStatus = exports.ConceptMapStatus || (exports.ConceptMapStatus = {}));
