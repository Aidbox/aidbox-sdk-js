"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MolecularSequenceOrientation = exports.MolecularSequenceStrand = exports.MolecularSequenceType = void 0;
/** indel | snp | unknown */
var MolecularSequenceType;
(function (MolecularSequenceType) {
    MolecularSequenceType["Indel"] = "indel";
    MolecularSequenceType["Snp"] = "snp";
    MolecularSequenceType["Unknown"] = "unknown";
})(MolecularSequenceType = exports.MolecularSequenceType || (exports.MolecularSequenceType = {}));
/** watson | crick */
var MolecularSequenceStrand;
(function (MolecularSequenceStrand) {
    MolecularSequenceStrand["Crick"] = "crick";
    MolecularSequenceStrand["Watson"] = "watson";
})(MolecularSequenceStrand = exports.MolecularSequenceStrand || (exports.MolecularSequenceStrand = {}));
/** sense | antisense */
var MolecularSequenceOrientation;
(function (MolecularSequenceOrientation) {
    MolecularSequenceOrientation["Antisense"] = "antisense";
    MolecularSequenceOrientation["Sense"] = "sense";
})(MolecularSequenceOrientation = exports.MolecularSequenceOrientation || (exports.MolecularSequenceOrientation = {}));
