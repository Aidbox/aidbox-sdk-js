"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyDeliveryStatus = exports.SupplyDeliveryType = void 0;
/** Category of dispense event */
var SupplyDeliveryType;
(function (SupplyDeliveryType) {
    SupplyDeliveryType["Device"] = "device";
    SupplyDeliveryType["Medication"] = "medication";
})(SupplyDeliveryType = exports.SupplyDeliveryType || (exports.SupplyDeliveryType = {}));
/** in-progress | completed | abandoned | entered-in-error */
var SupplyDeliveryStatus;
(function (SupplyDeliveryStatus) {
    SupplyDeliveryStatus["Abandoned"] = "abandoned";
    SupplyDeliveryStatus["Completed"] = "completed";
    SupplyDeliveryStatus["EnteredInError"] = "entered-in-error";
    SupplyDeliveryStatus["InProgress"] = "in-progress";
})(SupplyDeliveryStatus = exports.SupplyDeliveryStatus || (exports.SupplyDeliveryStatus = {}));
