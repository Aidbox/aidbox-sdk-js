/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { UsageContext } from "./UsageContext";
import { url } from "./url";
import { ContactDetail } from "./ContactDetail";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { id } from "./id";
import { dateTime } from "./dateTime";
import { canonical } from "./canonical";
import { DomainResource } from "./DomainResource";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { BackboneElement } from "./BackboneElement";
/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuide extends DomainResource {
    resourceType: 'ImplementationGuide';
    /** Natural language description of the implementation guide */
    description?: markdown;
    /** Information needed to build the IG */
    definition?: ImplementationGuideDefinition;
    _license?: Element;
    /** Date last changed */
    date?: dateTime;
    /** Name of the publisher (organization or individual) */
    publisher?: string;
    /** FHIR Version(s) this Implementation Guide targets */
    fhirVersion: Array<code>;
    /** SPDX license code for this IG (or not-open-source) */
    license?: `${ImplementationGuideLicense}`;
    /** Intended jurisdiction for implementation guide (if applicable) */
    jurisdiction?: Array<CodeableConcept>;
    _publisher?: Element;
    /** Profiles that apply globally */
    global?: Array<ImplementationGuideGlobal>;
    /** Another Implementation guide this depends on */
    dependsOn?: Array<ImplementationGuideDependsOn>;
    _date?: Element;
    /** Name for this implementation guide (computer friendly) */
    name: string;
    _status?: Element;
    _fhirVersion?: Array<Element>;
    _experimental?: Element;
    /** The context that the content is intended to support */
    useContext?: Array<UsageContext>;
    /** Use and/or publishing restrictions */
    copyright?: markdown;
    /** For testing purposes, not real usage */
    experimental?: boolean;
    /** Information about an assembled IG */
    manifest?: ImplementationGuideManifest;
    /** Name for this implementation guide (human friendly) */
    title?: string;
    _description?: Element;
    /** draft | active | retired | unknown */
    status: `${ImplementationGuideStatus}`;
    _name?: Element;
    /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
    url: uri;
    _copyright?: Element;
    _packageId?: Element;
    _title?: Element;
    /** Business version of the implementation guide */
    version?: string;
    _version?: Element;
    /** NPM Package name for IG */
    packageId: id;
    /** Contact details for the publisher */
    contact?: Array<ContactDetail>;
    _url?: Element;
}
/** draft | active | retired | unknown */
export declare enum ImplementationGuideStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
/** Grouping used to present related resources in the IG */
export interface ImplementationGuideGrouping extends BackboneElement {
    /** Descriptive name for the package */
    name: string;
    _name?: Element;
    /** Human readable text describing the package */
    description?: string;
    _description?: Element;
}
/** Page/Section in the Guide */
export interface ImplementationGuideDefinitionPage extends BackboneElement {
    _nameUrl: Element;
    /** html | markdown | xml | generated */
    generation: `${ImplementationGuideDefinitionPageGeneration}`;
    nameReference: Reference<'Binary'>;
    nameUrl: url;
    /** Nested Pages / Sections */
    page?: Array<ImplementationGuideDefinitionPage>;
    /** Short title shown for navigational assistance */
    title: string;
    _generation?: Element;
    _title?: Element;
}
/** Resource in the implementation guide */
export interface ImplementationGuideResource extends BackboneElement {
    _exampleCanonical?: Element;
    /** Reason why included in guide */
    description?: string;
    /** Versions this applies to (if different to IG) */
    fhirVersion?: Array<code>;
    /** Grouping this is part of */
    groupingId?: id;
    /** Human Name for the resource */
    name?: string;
    _exampleBoolean?: Element;
    _fhirVersion?: Array<Element>;
    exampleCanonical?: canonical;
    _description?: Element;
    _groupingId?: Element;
    /** Location of the resource */
    reference: Reference;
    exampleBoolean?: boolean;
    _name?: Element;
}
/** Information about an assembled IG */
export interface ImplementationGuideManifest extends BackboneElement {
    /** Location of rendered implementation guide */
    rendering?: url;
    _rendering?: Element;
    /** Resource in the implementation guide */
    resource: Array<ImplementationGuideResource>;
    /** HTML page within the parent IG */
    page?: Array<ImplementationGuidePage>;
    /** Image within the IG */
    image?: Array<string>;
    _image?: Array<Element>;
    /** Additional linkable file in IG */
    other?: Array<string>;
    _other?: Array<Element>;
}
/** html | markdown | xml | generated */
export declare enum ImplementationGuideDefinitionPageGeneration {
    Generated = "generated",
    Html = "html",
    Markdown = "markdown",
    Xml = "xml"
}
/** Profiles that apply globally */
export interface ImplementationGuideGlobal extends BackboneElement {
    /** Type this profile applies to */
    type: `${ImplementationGuideType}`;
    _type?: Element;
    /** Profile that all resources must conform to */
    profile: canonical;
    _profile?: Element;
}
/** A template for building resources */
export interface ImplementationGuideTemplate extends BackboneElement {
    /** Type of template specified */
    code: code;
    _code?: Element;
    /** The source location for the template */
    source: string;
    _source?: Element;
    /** The scope in which the template applies */
    scope?: string;
    _scope?: Element;
}
/** Type this profile applies to */
export declare enum ImplementationGuideType {
    ImmunizationEvaluation = "ImmunizationEvaluation",
    Appointment = "Appointment",
    StructureMap = "StructureMap",
    CareTeam = "CareTeam",
    Linkage = "Linkage",
    Communication = "Communication",
    MedicationDispense = "MedicationDispense",
    ImagingStudy = "ImagingStudy",
    ChargeItem = "ChargeItem",
    AdverseEvent = "AdverseEvent",
    Media = "Media",
    SubstancePolymer = "SubstancePolymer",
    QuestionnaireResponse = "QuestionnaireResponse",
    Coverage = "Coverage",
    Procedure = "Procedure",
    AuditEvent = "AuditEvent",
    PaymentReconciliation = "PaymentReconciliation",
    MedicinalProductManufactured = "MedicinalProductManufactured",
    CompartmentDefinition = "CompartmentDefinition",
    Organization = "Organization",
    ExplanationOfBenefit = "ExplanationOfBenefit",
    Composition = "Composition",
    CoverageEligibilityResponse = "CoverageEligibilityResponse",
    DocumentReference = "DocumentReference",
    EventDefinition = "EventDefinition",
    SubstanceProtein = "SubstanceProtein",
    TerminologyCapabilities = "TerminologyCapabilities",
    Encounter = "Encounter",
    ImplementationGuide = "ImplementationGuide",
    EvidenceVariable = "EvidenceVariable",
    ObservationDefinition = "ObservationDefinition",
    DiagnosticReport = "DiagnosticReport",
    ExampleScenario = "ExampleScenario",
    ResearchDefinition = "ResearchDefinition",
    Parameters = "Parameters",
    SearchParameter = "SearchParameter",
    MedicinalProductInteraction = "MedicinalProductInteraction",
    CodeSystem = "CodeSystem",
    MessageDefinition = "MessageDefinition",
    NutritionOrder = "NutritionOrder",
    VerificationResult = "VerificationResult",
    MedicationAdministration = "MedicationAdministration",
    CatalogEntry = "CatalogEntry",
    Flag = "Flag",
    DeviceUseStatement = "DeviceUseStatement",
    Contract = "Contract",
    Invoice = "Invoice",
    PaymentNotice = "PaymentNotice",
    Location = "Location",
    Claim = "Claim",
    Specimen = "Specimen",
    MedicationStatement = "MedicationStatement",
    EnrollmentResponse = "EnrollmentResponse",
    Evidence = "Evidence",
    Bundle = "Bundle",
    ResearchElementDefinition = "ResearchElementDefinition",
    BodyStructure = "BodyStructure",
    MedicinalProduct = "MedicinalProduct",
    ResearchStudy = "ResearchStudy",
    AppointmentResponse = "AppointmentResponse",
    MedicinalProductIndication = "MedicinalProductIndication",
    Measure = "Measure",
    Person = "Person",
    InsurancePlan = "InsurancePlan",
    Patient = "Patient",
    EffectEvidenceSynthesis = "EffectEvidenceSynthesis",
    ResearchSubject = "ResearchSubject",
    Medication = "Medication",
    ConceptMap = "ConceptMap",
    CoverageEligibilityRequest = "CoverageEligibilityRequest",
    SubstanceSourceMaterial = "SubstanceSourceMaterial",
    VisionPrescription = "VisionPrescription",
    MolecularSequence = "MolecularSequence",
    MedicinalProductUndesirableEffect = "MedicinalProductUndesirableEffect",
    OperationOutcome = "OperationOutcome",
    MessageHeader = "MessageHeader",
    AllergyIntolerance = "AllergyIntolerance",
    SubstanceReferenceInformation = "SubstanceReferenceInformation",
    SupplyDelivery = "SupplyDelivery",
    EpisodeOfCare = "EpisodeOfCare",
    PractitionerRole = "PractitionerRole",
    Library = "Library",
    Practitioner = "Practitioner",
    MedicationRequest = "MedicationRequest",
    ImmunizationRecommendation = "ImmunizationRecommendation",
    Immunization = "Immunization",
    GraphDefinition = "GraphDefinition",
    Account = "Account",
    MedicinalProductIngredient = "MedicinalProductIngredient",
    MeasureReport = "MeasureReport",
    DeviceMetric = "DeviceMetric",
    Goal = "Goal",
    MedicationKnowledge = "MedicationKnowledge",
    ClaimResponse = "ClaimResponse",
    DeviceDefinition = "DeviceDefinition",
    Slot = "Slot",
    ValueSet = "ValueSet",
    MedicinalProductAuthorization = "MedicinalProductAuthorization",
    StructureDefinition = "StructureDefinition",
    MedicinalProductContraindication = "MedicinalProductContraindication",
    DeviceRequest = "DeviceRequest",
    List = "List",
    Questionnaire = "Questionnaire",
    DomainResource = "DomainResource",
    Endpoint = "Endpoint",
    NamingSystem = "NamingSystem",
    MedicinalProductPackaged = "MedicinalProductPackaged",
    Basic = "Basic",
    Binary = "Binary",
    PlanDefinition = "PlanDefinition",
    Subscription = "Subscription",
    RelatedPerson = "RelatedPerson",
    SubstanceSpecification = "SubstanceSpecification",
    SubstanceNucleicAcid = "SubstanceNucleicAcid",
    GuidanceResponse = "GuidanceResponse",
    ClinicalImpression = "ClinicalImpression",
    OrganizationAffiliation = "OrganizationAffiliation",
    Resource = "Resource",
    Condition = "Condition",
    CapabilityStatement = "CapabilityStatement",
    HealthcareService = "HealthcareService",
    SpecimenDefinition = "SpecimenDefinition",
    RiskAssessment = "RiskAssessment",
    OperationDefinition = "OperationDefinition",
    ActivityDefinition = "ActivityDefinition",
    Schedule = "Schedule",
    BiologicallyDerivedProduct = "BiologicallyDerivedProduct",
    Group = "Group",
    MedicinalProductPharmaceutical = "MedicinalProductPharmaceutical",
    FamilyMemberHistory = "FamilyMemberHistory",
    ServiceRequest = "ServiceRequest",
    DetectedIssue = "DetectedIssue",
    Device = "Device",
    RequestGroup = "RequestGroup",
    TestScript = "TestScript",
    RiskEvidenceSynthesis = "RiskEvidenceSynthesis",
    SupplyRequest = "SupplyRequest",
    Task = "Task",
    CommunicationRequest = "CommunicationRequest",
    EnrollmentRequest = "EnrollmentRequest",
    ChargeItemDefinition = "ChargeItemDefinition",
    Substance = "Substance",
    Provenance = "Provenance",
    Consent = "Consent",
    CarePlan = "CarePlan",
    TestReport = "TestReport",
    Observation = "Observation",
    DocumentManifest = "DocumentManifest"
}
/** Information needed to build the IG */
export interface ImplementationGuideDefinition extends BackboneElement {
    /** Grouping used to present related resources in the IG */
    grouping?: Array<ImplementationGuideGrouping>;
    /** Resource in the implementation guide */
    resource: Array<ImplementationGuideResource>;
    page?: ImplementationGuideDefinitionPage;
    /** Defines how IG is built by tools */
    parameter?: Array<ImplementationGuideParameter>;
    /** A template for building resources */
    template?: Array<ImplementationGuideTemplate>;
}
/** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
export declare enum ImplementationGuideCode {
    RuleBrokenLinks = "rule-broken-links",
    GenerateJson = "generate-json",
    GenerateTurtle = "generate-turtle",
    PathResource = "path-resource",
    PathPages = "path-pages",
    GenerateXml = "generate-xml",
    PathTxCache = "path-tx-cache",
    ExpansionParameter = "expansion-parameter",
    Apply = "apply",
    HtmlTemplate = "html-template"
}
/** Defines how IG is built by tools */
export interface ImplementationGuideParameter extends BackboneElement {
    /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
    code: `${ImplementationGuideCode}`;
    _code?: Element;
    /** Value for named type */
    value: string;
    _value?: Element;
}
/** SPDX license code for this IG (or not-open-source) */
export declare enum ImplementationGuideLicense {
    "CCBYNCSANum1.0" = "CC-BY-NC-SA-1.0",
    "QPLNum1.0" = "QPL-1.0",
    "WatcomNum1.0" = "Watcom-1.0",
    Noweb = "Noweb",
    Multics = "Multics",
    "NPLNum1.0" = "NPL-1.0",
    "PDDLNum1.0" = "PDDL-1.0",
    CNRIJython = "CNRI-Jython",
    "GFDLNum1.3Only" = "GFDL-1.3-only",
    Zlib = "Zlib",
    SAXPD = "SAX-PD",
    Afmparse = "Afmparse",
    "LGPLNum2.0Only" = "LGPL-2.0-only",
    HaskellReport = "HaskellReport",
    "CCBYNCNDNum3.0" = "CC-BY-NC-ND-3.0",
    ICU = "ICU",
    "CCBYNCSANum2.5" = "CC-BY-NC-SA-2.5",
    CECILLC = "CECILL-C",
    "BSLNum1.0" = "BSL-1.0",
    AdobeNum2006 = "Adobe-2006",
    "OLDAPNum1.1" = "OLDAP-1.1",
    Curl = "curl",
    "GPLNum2.0OrLater" = "GPL-2.0-or-later",
    "OLDAPNum2.4" = "OLDAP-2.4",
    "MPLNum1.0" = "MPL-1.0",
    Num0BSD = "0BSD",
    SISSL = "SISSL",
    Plexus = "Plexus",
    Barr = "Barr",
    "OFLNum1.0" = "OFL-1.0",
    Caldera = "Caldera",
    "NPOSLNum3.0" = "NPOSL-3.0",
    Xinetd = "xinetd",
    "OLDAPNum2.1" = "OLDAP-2.1",
    Xpp = "xpp",
    "CDDLNum1.1" = "CDDL-1.1",
    "CCBYNDNum2.0" = "CC-BY-ND-2.0",
    "OCLCNum2.0" = "OCLC-2.0",
    MITAdvertising = "MIT-advertising",
    "EUPLNum1.2" = "EUPL-1.2",
    "SimPLNum2.0" = "SimPL-2.0",
    "InterbaseNum1.0" = "Interbase-1.0",
    APAFML = "APAFML",
    Qhull = "Qhull",
    "CCBYNCNum2.0" = "CC-BY-NC-2.0",
    Psutils = "psutils",
    BSDNum3ClauseClear = "BSD-3-Clause-Clear",
    CECILLB = "CECILL-B",
    "OFLNum1.1" = "OFL-1.1",
    OGTSL = "OGTSL",
    "OLDAPNum2.2" = "OLDAP-2.2",
    "ErlPLNum1.1" = "ErlPL-1.1",
    "SISSLNum1.2" = "SISSL-1.2",
    BSDNum2ClausePatent = "BSD-2-Clause-Patent",
    MTLL = "MTLL",
    "NPLNum1.1" = "NPL-1.1",
    BSDNum3ClauseAttribution = "BSD-3-Clause-Attribution",
    NCSA = "NCSA",
    OpenSSL = "OpenSSL",
    Giftware = "Giftware",
    "NLODNum1.0" = "NLOD-1.0",
    "GSOAPNum1.3b" = "gSOAP-1.3b",
    TCL = "TCL",
    XSkat = "XSkat",
    AMDPLPA = "AMDPLPA",
    "CCBYNDNum1.0" = "CC-BY-ND-1.0",
    NLPL = "NLPL",
    DOC = "DOC",
    AML = "AML",
    "CPLNum1.0" = "CPL-1.0",
    ANTLRPD = "ANTLR-PD",
    "CCBYSANum2.5" = "CC-BY-SA-2.5",
    "AFLNum2.1" = "AFL-2.1",
    "RHeCosNum1.1" = "RHeCos-1.1",
    "CCBYNCSANum3.0" = "CC-BY-NC-SA-3.0",
    "APSLNum2.0" = "APSL-2.0",
    AAL = "AAL",
    "CCBYNCSANum2.0" = "CC-BY-NC-SA-2.0",
    SMLNJ = "SMLNJ",
    CNRIPython = "CNRI-Python",
    "VSLNum1.0" = "VSL-1.0",
    "OLDAPNum2.2.2" = "OLDAP-2.2.2",
    Beerware = "Beerware",
    "Bzip2Num1.0.6" = "bzip2-1.0.6",
    "LGPLNum3.0OrLater" = "LGPL-3.0-or-later",
    "YPLNum1.0" = "YPL-1.0",
    "APLNum1.0" = "APL-1.0",
    "GFDLNum1.2OrLater" = "GFDL-1.2-or-later",
    "LiLiQPNum1.1" = "LiLiQ-P-1.1",
    FreeImage = "FreeImage",
    "CPOLNum1.02" = "CPOL-1.02",
    "BitTorrentNum1.0" = "BitTorrent-1.0",
    BSDNum3ClauseNoNuclearWarranty = "BSD-3-Clause-No-Nuclear-Warranty",
    Dotseqn = "Dotseqn",
    "ArtisticNum2.0" = "Artistic-2.0",
    NTP = "NTP",
    Newsletr = "Newsletr",
    "RPLNum1.5" = "RPL-1.5",
    NRL = "NRL",
    MSRL = "MS-RL",
    "CCBYNum2.5" = "CC-BY-2.5",
    "AGPLNum3.0Only" = "AGPL-3.0-only",
    "GFDLNum1.2Only" = "GFDL-1.2-only",
    MITNFA = "MITNFA",
    BSDNum2ClauseNetBSD = "BSD-2-Clause-NetBSD",
    FSFUL = "FSFUL",
    "CCBYNCNDNum4.0" = "CC-BY-NC-ND-4.0",
    Saxpath = "Saxpath",
    "RPLNum1.1" = "RPL-1.1",
    "FrameworxNum1.0" = "Frameworx-1.0",
    "OLDAPNum2.0" = "OLDAP-2.0",
    FSFAP = "FSFAP",
    Leptonica = "Leptonica",
    "CATOSLNum1.1" = "CATOSL-1.1",
    "Bzip2Num1.0.5" = "bzip2-1.0.5",
    BSDProtection = "BSD-Protection",
    Xerox = "Xerox",
    Imlib2 = "Imlib2",
    "CCBYNDNum4.0" = "CC-BY-ND-4.0",
    Psfrag = "psfrag",
    W3CNum20150513 = "W3C-20150513",
    EGenix = "eGenix",
    "LALNum1.3" = "LAL-1.3",
    "EUPLNum1.0" = "EUPL-1.0",
    "CCBYNCNum2.5" = "CC-BY-NC-2.5",
    "GPLNum2.0Only" = "GPL-2.0-only",
    Fair = "Fair",
    MITEnna = "MIT-enna",
    BSDNum4Clause = "BSD-4-Clause",
    RSCPL = "RSCPL",
    "ZendNum2.0" = "Zend-2.0",
    InfoZIP = "Info-ZIP",
    "CCBYNCNum1.0" = "CC-BY-NC-1.0",
    BSDNum2Clause = "BSD-2-Clause",
    "OLDAPNum2.7" = "OLDAP-2.7",
    "ODbLNum1.0" = "ODbL-1.0",
    "APSLNum1.0" = "APSL-1.0",
    "ECLNum1.0" = "ECL-1.0",
    "ApacheNum1.0" = "Apache-1.0",
    "AGPLNum3.0OrLater" = "AGPL-3.0-or-later",
    Intel = "Intel",
    "ArtisticNum1.0Perl" = "Artistic-1.0-Perl",
    "GFDLNum1.3OrLater" = "GFDL-1.3-or-later",
    "GPLNum1.0Only" = "GPL-1.0-only",
    AMPAS = "AMPAS",
    BSDNum4ClauseUC = "BSD-4-Clause-UC",
    "SGIBNum1.1" = "SGI-B-1.1",
    IntelACPI = "Intel-ACPI",
    "EPLNum2.0" = "EPL-2.0",
    Ruby = "Ruby",
    Glulxe = "Glulxe",
    Aladdin = "Aladdin",
    Sendmail = "Sendmail",
    "LPLNum1.0" = "LPL-1.0",
    "CPALNum1.0" = "CPAL-1.0",
    "CECILLNum2.1" = "CECILL-2.1",
    "ZPLNum2.1" = "ZPL-2.1",
    "UPLNum1.0" = "UPL-1.0",
    "LGPLNum2.1OrLater" = "LGPL-2.1-or-later",
    "OLDAPNum2.8" = "OLDAP-2.8",
    "OSETPLNum2.1" = "OSET-PL-2.1",
    EUDatagrid = "EUDatagrid",
    "RPSLNum1.0" = "RPSL-1.0",
    SpencerNum99 = "Spencer-99",
    "OSLNum2.0" = "OSL-2.0",
    "YPLNum1.1" = "YPL-1.1",
    MITCMU = "MIT-CMU",
    TMate = "TMate",
    IBMPibs = "IBM-pibs",
    "AFLNum2.0" = "AFL-2.0",
    UnicodeDFSNum2015 = "Unicode-DFS-2015",
    CNRIPythonGPLCompatible = "CNRI-Python-GPL-Compatible",
    DSDP = "DSDP",
    "MPLNum2.0NoCopyleftException" = "MPL-2.0-no-copyleft-exception",
    W3C = "W3C",
    "OLDAPNum1.2" = "OLDAP-1.2",
    "CDLASharingNum1.0" = "CDLA-Sharing-1.0",
    "LiLiQRNum1.1" = "LiLiQ-R-1.1",
    "ZPLNum1.1" = "ZPL-1.1",
    "CC0Num1.0" = "CC0-1.0",
    SWL = "SWL",
    "PythonNum2.0" = "Python-2.0",
    "OLDAPNum1.4" = "OLDAP-1.4",
    "LPPLNum1.1" = "LPPL-1.1",
    "LPPLNum1.3c" = "LPPL-1.3c",
    Unlicense = "Unlicense",
    SpencerNum94 = "Spencer-94",
    Cube = "Cube",
    ZlibAcknowledgement = "zlib-acknowledgement",
    "CondorNum1.1" = "Condor-1.1",
    SMPPL = "SMPPL",
    Libtiff = "libtiff",
    OML = "OML",
    "SugarCRMNum1.1.3" = "SugarCRM-1.1.3",
    "CCBYSANum1.0" = "CC-BY-SA-1.0",
    BSDNum3ClauseNoNuclearLicenseNum2014 = "BSD-3-Clause-No-Nuclear-License-2014",
    VOSTROM = "VOSTROM",
    "CCBYSANum4.0" = "CC-BY-SA-4.0",
    "AGPLNum1.0OrLater" = "AGPL-1.0-or-later",
    "CCBYNDNum3.0" = "CC-BY-ND-3.0",
    "ZimbraNum1.3" = "Zimbra-1.3",
    "LGPLNum3.0Only" = "LGPL-3.0-only",
    "JasPerNum2.0" = "JasPer-2.0",
    "OLDAPNum2.5" = "OLDAP-2.5",
    "CCBYNum4.0" = "CC-BY-4.0",
    ISC = "ISC",
    ImageMagick = "ImageMagick",
    MakeIndex = "MakeIndex",
    JSON = "JSON",
    CrystalStacker = "CrystalStacker",
    IMatix = "iMatix",
    "AGPLNum1.0Only" = "AGPL-1.0-only",
    "GPLNum3.0OrLater" = "GPL-3.0-or-later",
    Naumen = "Naumen",
    "NASANum1.3" = "NASA-1.3",
    GL2PS = "GL2PS",
    "CCBYNum1.0" = "CC-BY-1.0",
    "CCBYNCNum4.0" = "CC-BY-NC-4.0",
    "LPPLNum1.0" = "LPPL-1.0",
    "OLDAPNum2.2.1" = "OLDAP-2.2.1",
    "ArtisticNum1.0Cl8" = "Artistic-1.0-cl8",
    "OLDAPNum2.0.1" = "OLDAP-2.0.1",
    SCEA = "SCEA",
    MITFeh = "MIT-feh",
    NetSNMP = "Net-SNMP",
    LGPLLR = "LGPLLR",
    BSDNum3ClauseNoNuclearLicense = "BSD-3-Clause-No-Nuclear-License",
    "CCBYSANum2.0" = "CC-BY-SA-2.0",
    Nokia = "Nokia",
    "SGIBNum2.0" = "SGI-B-2.0",
    UnicodeTOU = "Unicode-TOU",
    RSAMD = "RSA-MD",
    "CCBYNDNum2.5" = "CC-BY-ND-2.5",
    "GPLNum3.0Only" = "GPL-3.0-only",
    "LGPLNum2.0OrLater" = "LGPL-2.0-or-later",
    IPA = "IPA",
    "GFDLNum1.1OrLater" = "GFDL-1.1-or-later",
    "OLDAPNum2.3" = "OLDAP-2.3",
    Libpng = "Libpng",
    BSDSourceCode = "BSD-Source-Code",
    SNIA = "SNIA",
    "CCBYNCNum3.0" = "CC-BY-NC-3.0",
    Entessa = "Entessa",
    "NBPLNum1.0" = "NBPL-1.0",
    MITNum0 = "MIT-0",
    "PHPNum3.0" = "PHP-3.0",
    "DFSLNum1.0" = "D-FSL-1.0",
    "GFDLNum1.1Only" = "GFDL-1.1-only",
    "PHPNum3.01" = "PHP-3.01",
    "ZimbraNum1.4" = "Zimbra-1.4",
    BSDNum2ClauseFreeBSD = "BSD-2-Clause-FreeBSD",
    Motosoto = "Motosoto",
    "CDLAPermissiveNum1.0" = "CDLA-Permissive-1.0",
    Diffmark = "diffmark",
    "MPLNum1.1" = "MPL-1.1",
    "CECILLNum2.0" = "CECILL-2.0",
    "ApacheNum2.0" = "Apache-2.0",
    Dvipdfm = "dvipdfm",
    "CCBYNCSANum4.0" = "CC-BY-NC-SA-4.0",
    PostgreSQL = "PostgreSQL",
    "CCBYNCNDNum2.5" = "CC-BY-NC-ND-2.5",
    MSPL = "MS-PL",
    BSDNum1Clause = "BSD-1-Clause",
    "OSLNum1.0" = "OSL-1.0",
    "CUAOPLNum1.0" = "CUA-OPL-1.0",
    TCPWrappers = "TCP-wrappers",
    Mup = "Mup",
    "APSLNum1.2" = "APSL-1.2",
    "SGIBNum1.0" = "SGI-B-1.0",
    "AFLNum1.1" = "AFL-1.1",
    "OSLNum1.1" = "OSL-1.1",
    IJG = "IJG",
    OCCTPL = "OCCT-PL",
    "MPLNum2.0" = "MPL-2.0",
    Mpich2 = "mpich2",
    "CECILLNum1.1" = "CECILL-1.1",
    "ECLNum2.0" = "ECL-2.0",
    BSDNum3ClauseLBNL = "BSD-3-Clause-LBNL",
    TOSL = "TOSL",
    Crossword = "Crossword",
    "CCBYNum2.0" = "CC-BY-2.0",
    AdobeGlyph = "Adobe-Glyph",
    "OSLNum3.0" = "OSL-3.0",
    Xnet = "Xnet",
    "ZPLNum2.0" = "ZPL-2.0",
    Eurosym = "Eurosym",
    "TORQUENum1.1" = "TORQUE-1.1",
    ClArtistic = "ClArtistic",
    "EUPLNum1.1" = "EUPL-1.1",
    MIT = "MIT",
    "LPLNum1.02" = "LPL-1.02",
    "AFLNum1.2" = "AFL-1.2",
    NotOpenSource = "not-open-source",
    UnicodeDFSNum2016 = "Unicode-DFS-2016",
    Latex2e = "Latex2e",
    "CCBYNCNDNum2.0" = "CC-BY-NC-ND-2.0",
    WTFPL = "WTFPL",
    NetCDF = "NetCDF",
    "ApacheNum1.1" = "Apache-1.1",
    "OSLNum2.1" = "OSL-2.1",
    "EPLNum1.0" = "EPL-1.0",
    "LPPLNum1.3a" = "LPPL-1.3a",
    Vim = "Vim",
    X11 = "X11",
    W3CNum19980720 = "W3C-19980720",
    "EFLNum2.0" = "EFL-2.0",
    "LALNum1.2" = "LAL-1.2",
    "OLDAPNum1.3" = "OLDAP-1.3",
    "XFree86Num1.1" = "XFree86-1.1",
    "CCBYNum3.0" = "CC-BY-3.0",
    "LGPLNum2.1Only" = "LGPL-2.1-only",
    Wsuipa = "Wsuipa",
    "CCBYSANum3.0" = "CC-BY-SA-3.0",
    BSDNum3Clause = "BSD-3-Clause",
    Borceux = "Borceux",
    "ArtisticNum1.0" = "Artistic-1.0",
    LinuxOpenIB = "Linux-OpenIB",
    FSFULLR = "FSFULLR",
    Abstyles = "Abstyles",
    "SPLNum1.0" = "SPL-1.0",
    "CECILLNum1.0" = "CECILL-1.0",
    FTL = "FTL",
    "CDDLNum1.0" = "CDDL-1.0",
    "OLDAPNum2.6" = "OLDAP-2.6",
    Glide = "Glide",
    "AFLNum3.0" = "AFL-3.0",
    Rdisc = "Rdisc",
    "CCBYNCNDNum1.0" = "CC-BY-NC-ND-1.0",
    NGPL = "NGPL",
    "EFLNum1.0" = "EFL-1.0",
    Bahyph = "Bahyph",
    "LiLiQRplusNum1.1" = "LiLiQ-Rplus-1.1",
    NOSL = "NOSL",
    "GPLNum1.0OrLater" = "GPL-1.0-or-later",
    ADSL = "ADSL",
    "APSLNum1.1" = "APSL-1.1",
    HPND = "HPND",
    Zed = "Zed",
    SpencerNum86 = "Spencer-86",
    "BitTorrentNum1.1" = "BitTorrent-1.1",
    MirOS = "MirOS",
    "IPLNum1.0" = "IPL-1.0",
    "OPLNum1.0" = "OPL-1.0",
    Gnuplot = "gnuplot",
    Sleepycat = "Sleepycat",
    "LPPLNum1.2" = "LPPL-1.2"
}
/** Another Implementation guide this depends on */
export interface ImplementationGuideDependsOn extends BackboneElement {
    /** Identity of the IG that this depends on */
    uri: canonical;
    _uri?: Element;
    /** NPM Package name for IG this depends on */
    packageId?: id;
    _packageId?: Element;
    /** Version of the IG */
    version?: string;
    _version?: Element;
}
/** HTML page within the parent IG */
export interface ImplementationGuidePage extends BackboneElement {
    /** HTML page name */
    name: string;
    _name?: Element;
    /** Title of the page, for references */
    title?: string;
    _title?: Element;
    /** Anchor available on the page */
    anchor?: Array<string>;
    _anchor?: Array<Element>;
}
