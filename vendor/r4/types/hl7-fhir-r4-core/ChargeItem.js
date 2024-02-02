"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeItemStatus = void 0;
/** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
var ChargeItemStatus;
(function (ChargeItemStatus) {
    ChargeItemStatus["Aborted"] = "aborted";
    ChargeItemStatus["Billable"] = "billable";
    ChargeItemStatus["Billed"] = "billed";
    ChargeItemStatus["EnteredInError"] = "entered-in-error";
    ChargeItemStatus["NotBillable"] = "not-billable";
    ChargeItemStatus["Planned"] = "planned";
    ChargeItemStatus["Unknown"] = "unknown";
})(ChargeItemStatus = exports.ChargeItemStatus || (exports.ChargeItemStatus = {}));
