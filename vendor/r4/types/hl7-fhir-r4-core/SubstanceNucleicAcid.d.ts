/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface SubstanceNucleicAcid extends DomainResource {
    resourceType: 'SubstanceNucleicAcid';
    /** The type of the sequence shall be specified based on a controlled vocabulary */
    sequenceType?: CodeableConcept;
    /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
    numberOfSubunits?: integer;
    _numberOfSubunits?: Element;
    /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
    areaOfHybridisation?: string;
    _areaOfHybridisation?: Element;
    /** (TBC) */
    oligoNucleotideType?: CodeableConcept;
    /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times */
    subunit?: Array<SubstanceNucleicAcidSubunit>;
}
/** The linkages between sugar residues will also be captured */
export interface SubstanceNucleicAcidLinkage extends BackboneElement {
    /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
    connectivity?: string;
    _connectivity?: Element;
    /** Each linkage will be registered as a fragment and have an ID */
    identifier?: Identifier;
    /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
    name?: string;
    _name?: Element;
    /** Residues shall be captured as described in 5.3.6.8.3 */
    residueSite?: string;
    _residueSite?: Element;
}
/** 5.3.6.8.1 Sugar ID (Mandatory) */
export interface SubstanceNucleicAcidSugar extends BackboneElement {
    /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
    identifier?: Identifier;
    /** The name of the sugar or sugar-like component that make up the nucleotide */
    name?: string;
    _name?: Element;
    /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
    residueSite?: string;
    _residueSite?: Element;
}
/** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times */
export interface SubstanceNucleicAcidSubunit extends BackboneElement {
    _sequence?: Element;
    _subunit?: Element;
    /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
    fivePrime?: CodeableConcept;
    /** The linkages between sugar residues will also be captured */
    linkage?: Array<SubstanceNucleicAcidLinkage>;
    /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
    sequence?: string;
    /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
    threePrime?: CodeableConcept;
    /** The length of the sequence shall be captured */
    length?: integer;
    /** 5.3.6.8.1 Sugar ID (Mandatory) */
    sugar?: Array<SubstanceNucleicAcidSugar>;
    _length?: Element;
    /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
    subunit?: integer;
    /** (TBC) */
    sequenceAttachment?: Attachment;
}
