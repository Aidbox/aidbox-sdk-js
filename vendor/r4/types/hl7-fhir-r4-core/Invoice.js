"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineItemPriceComponentType = exports.InvoiceStatus = void 0;
/** draft | issued | balanced | cancelled | entered-in-error */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["Balanced"] = "balanced";
    InvoiceStatus["Cancelled"] = "cancelled";
    InvoiceStatus["Draft"] = "draft";
    InvoiceStatus["EnteredInError"] = "entered-in-error";
    InvoiceStatus["Issued"] = "issued";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
/** base | surcharge | deduction | discount | tax | informational */
var InvoiceLineItemPriceComponentType;
(function (InvoiceLineItemPriceComponentType) {
    InvoiceLineItemPriceComponentType["Base"] = "base";
    InvoiceLineItemPriceComponentType["Deduction"] = "deduction";
    InvoiceLineItemPriceComponentType["Discount"] = "discount";
    InvoiceLineItemPriceComponentType["Informational"] = "informational";
    InvoiceLineItemPriceComponentType["Surcharge"] = "surcharge";
    InvoiceLineItemPriceComponentType["Tax"] = "tax";
})(InvoiceLineItemPriceComponentType = exports.InvoiceLineItemPriceComponentType || (exports.InvoiceLineItemPriceComponentType = {}));
