/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { ContactPoint } from "./ContactPoint";
import { ProdCharacteristic } from "./ProdCharacteristic";
import { Quantity } from "./Quantity";
import { DomainResource } from "./DomainResource";
import { ProductShelfLife } from "./ProductShelfLife";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinition extends DomainResource {
    resourceType: 'DeviceDefinition';
    /** A name given to the device to identify it */
    deviceName?: Array<DeviceDefinitionDeviceName>;
    /** Shelf Life and storage information */
    shelfLifeStorage?: Array<ProductShelfLife>;
    /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
    property?: Array<DeviceDefinitionProperty>;
    _onlineInformation?: Element;
    _modelNumber?: Element;
    manufacturerString?: string;
    /** The model number for the device */
    modelNumber?: string;
    /** Unique Device Identifier (UDI) Barcode string */
    udiDeviceIdentifier?: Array<DeviceDefinitionUdiDeviceIdentifier>;
    /** What kind of device or device system this is */
    type?: CodeableConcept;
    manufacturerReference?: Reference<'Organization'>;
    /** Device capabilities */
    capability?: Array<DeviceDefinitionCapability>;
    /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
    specialization?: Array<DeviceDefinitionSpecialization>;
    /** The parent device it can be part of */
    parentDevice?: Reference<'DeviceDefinition'>;
    /** Device notes and comments */
    note?: Array<Annotation>;
    /** Language code for the human-readable text strings produced by the device (all supported) */
    languageCode?: Array<CodeableConcept>;
    /** Safety characteristics of the device */
    safety?: Array<CodeableConcept>;
    /** A substance used to create the material(s) of which the device is made */
    material?: Array<DeviceDefinitionMaterial>;
    /** Network address to contact device */
    url?: uri;
    /** Instance identifier */
    identifier?: Array<Identifier>;
    /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
    quantity?: Quantity;
    /** Available versions */
    version?: Array<string>;
    _version?: Array<Element>;
    /** Details for human/organization for support */
    contact?: Array<ContactPoint>;
    /** Organization responsible for device */
    owner?: Reference<'Organization'>;
    _url?: Element;
    /** Access to on-line information */
    onlineInformation?: uri;
    /** Dimensions, color etc. */
    physicalCharacteristics?: ProdCharacteristic;
    _manufacturerString?: Element;
}
/** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
export declare enum DeviceDefinitionDevicenameType {
    ManufacturerName = "manufacturer-name",
    ModelName = "model-name",
    Other = "other",
    PatientReportedName = "patient-reported-name",
    UdiLabelName = "udi-label-name",
    UserFriendlyName = "user-friendly-name"
}
/** A name given to the device to identify it */
export interface DeviceDefinitionDeviceName extends BackboneElement {
    /** The name of the device */
    name: string;
    _name?: Element;
    /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
    type: `${DeviceDefinitionDevicenameType}`;
    _type?: Element;
}
/** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
export interface DeviceDefinitionProperty extends BackboneElement {
    /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) */
    type: CodeableConcept;
    /** Property value as a quantity */
    valueQuantity?: Array<Quantity>;
    /** Property value as a code, e.g., NTP4 (synced to NTP) */
    valueCode?: Array<CodeableConcept>;
}
/** Unique Device Identifier (UDI) Barcode string */
export interface DeviceDefinitionUdiDeviceIdentifier extends BackboneElement {
    /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier */
    deviceIdentifier: string;
    _deviceIdentifier?: Element;
    /** The organization that assigns the identifier algorithm */
    issuer: uri;
    _issuer?: Element;
    /** The jurisdiction to which the deviceIdentifier applies */
    jurisdiction: uri;
    _jurisdiction?: Element;
}
/** Device capabilities */
export interface DeviceDefinitionCapability extends BackboneElement {
    /** Type of capability */
    type: CodeableConcept;
    /** Description of capability */
    description?: Array<CodeableConcept>;
}
/** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
export interface DeviceDefinitionSpecialization extends BackboneElement {
    /** The standard that is used to operate and communicate */
    systemType: string;
    _systemType?: Element;
    /** The version of the standard that is used to operate and communicate */
    version?: string;
    _version?: Element;
}
/** A substance used to create the material(s) of which the device is made */
export interface DeviceDefinitionMaterial extends BackboneElement {
    /** The substance */
    substance: CodeableConcept;
    /** Indicates an alternative material of the device */
    alternate?: boolean;
    _alternate?: Element;
    /** Whether the substance is a known or suspected allergen */
    allergenicIndicator?: boolean;
    _allergenicIndicator?: Element;
}
