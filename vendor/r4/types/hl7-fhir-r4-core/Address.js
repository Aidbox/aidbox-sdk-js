"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressType = exports.AddressUse = void 0;
/** home | work | temp | old | billing - purpose of this address */
var AddressUse;
(function (AddressUse) {
    AddressUse["Billing"] = "billing";
    AddressUse["Home"] = "home";
    AddressUse["Old"] = "old";
    AddressUse["Temp"] = "temp";
    AddressUse["Work"] = "work";
})(AddressUse = exports.AddressUse || (exports.AddressUse = {}));
/** postal | physical | both */
var AddressType;
(function (AddressType) {
    AddressType["Both"] = "both";
    AddressType["Physical"] = "physical";
    AddressType["Postal"] = "postal";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
