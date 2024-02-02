"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogEntryRelationtype = exports.CatalogEntryStatus = void 0;
/** draft | active | retired | unknown */
var CatalogEntryStatus;
(function (CatalogEntryStatus) {
    CatalogEntryStatus["Active"] = "active";
    CatalogEntryStatus["Draft"] = "draft";
    CatalogEntryStatus["Retired"] = "retired";
    CatalogEntryStatus["Unknown"] = "unknown";
})(CatalogEntryStatus = exports.CatalogEntryStatus || (exports.CatalogEntryStatus = {}));
/** triggers | is-replaced-by */
var CatalogEntryRelationtype;
(function (CatalogEntryRelationtype) {
    CatalogEntryRelationtype["IsReplacedBy"] = "is-replaced-by";
    CatalogEntryRelationtype["Triggers"] = "triggers";
})(CatalogEntryRelationtype = exports.CatalogEntryRelationtype || (exports.CatalogEntryRelationtype = {}));
