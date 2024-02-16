"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogEntryRelatedentryRelationtype = exports.CatalogEntryStatus = void 0;
/** draft | active | retired | unknown */
var CatalogEntryStatus;
(function (CatalogEntryStatus) {
    CatalogEntryStatus["Active"] = "active";
    CatalogEntryStatus["Draft"] = "draft";
    CatalogEntryStatus["Retired"] = "retired";
    CatalogEntryStatus["Unknown"] = "unknown";
})(CatalogEntryStatus = exports.CatalogEntryStatus || (exports.CatalogEntryStatus = {}));
/** triggers | is-replaced-by */
var CatalogEntryRelatedentryRelationtype;
(function (CatalogEntryRelatedentryRelationtype) {
    CatalogEntryRelatedentryRelationtype["IsReplacedBy"] = "is-replaced-by";
    CatalogEntryRelatedentryRelationtype["Triggers"] = "triggers";
})(CatalogEntryRelatedentryRelationtype = exports.CatalogEntryRelatedentryRelationtype || (exports.CatalogEntryRelatedentryRelationtype = {}));
