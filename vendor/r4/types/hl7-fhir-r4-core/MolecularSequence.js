"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MolecularSequenceReferenceseqOrientation = exports.MolecularSequenceRepositoryType = exports.MolecularSequenceQualityType = exports.MolecularSequenceReferenceseqStrand = exports.MolecularSequenceType = void 0;
/** aa | dna | rna */
var MolecularSequenceType;
(function (MolecularSequenceType) {
    MolecularSequenceType["Aa"] = "aa";
    MolecularSequenceType["Dna"] = "dna";
    MolecularSequenceType["Rna"] = "rna";
})(MolecularSequenceType = exports.MolecularSequenceType || (exports.MolecularSequenceType = {}));
/** watson | crick */
var MolecularSequenceReferenceseqStrand;
(function (MolecularSequenceReferenceseqStrand) {
    MolecularSequenceReferenceseqStrand["Crick"] = "crick";
    MolecularSequenceReferenceseqStrand["Watson"] = "watson";
})(MolecularSequenceReferenceseqStrand = exports.MolecularSequenceReferenceseqStrand || (exports.MolecularSequenceReferenceseqStrand = {}));
/** indel | snp | unknown */
var MolecularSequenceQualityType;
(function (MolecularSequenceQualityType) {
    MolecularSequenceQualityType["Indel"] = "indel";
    MolecularSequenceQualityType["Snp"] = "snp";
    MolecularSequenceQualityType["Unknown"] = "unknown";
})(MolecularSequenceQualityType = exports.MolecularSequenceQualityType || (exports.MolecularSequenceQualityType = {}));
/** directlink | openapi | login | oauth | other */
var MolecularSequenceRepositoryType;
(function (MolecularSequenceRepositoryType) {
    MolecularSequenceRepositoryType["Directlink"] = "directlink";
    MolecularSequenceRepositoryType["Login"] = "login";
    MolecularSequenceRepositoryType["Oauth"] = "oauth";
    MolecularSequenceRepositoryType["Openapi"] = "openapi";
    MolecularSequenceRepositoryType["Other"] = "other";
})(MolecularSequenceRepositoryType = exports.MolecularSequenceRepositoryType || (exports.MolecularSequenceRepositoryType = {}));
/** sense | antisense */
var MolecularSequenceReferenceseqOrientation;
(function (MolecularSequenceReferenceseqOrientation) {
    MolecularSequenceReferenceseqOrientation["Antisense"] = "antisense";
    MolecularSequenceReferenceseqOrientation["Sense"] = "sense";
})(MolecularSequenceReferenceseqOrientation = exports.MolecularSequenceReferenceseqOrientation || (exports.MolecularSequenceReferenceseqOrientation = {}));
