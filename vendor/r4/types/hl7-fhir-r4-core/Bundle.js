"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleEntryRequestMethod = exports.BundleEntrySearchMode = exports.BundleType = void 0;
/** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection */
var BundleType;
(function (BundleType) {
    BundleType["History"] = "history";
    BundleType["Batch"] = "batch";
    BundleType["TransactionResponse"] = "transaction-response";
    BundleType["Message"] = "message";
    BundleType["BatchResponse"] = "batch-response";
    BundleType["Searchset"] = "searchset";
    BundleType["Document"] = "document";
    BundleType["Transaction"] = "transaction";
    BundleType["Collection"] = "collection";
})(BundleType = exports.BundleType || (exports.BundleType = {}));
/** match | include | outcome - why this is in the result set */
var BundleEntrySearchMode;
(function (BundleEntrySearchMode) {
    BundleEntrySearchMode["Include"] = "include";
    BundleEntrySearchMode["Match"] = "match";
    BundleEntrySearchMode["Outcome"] = "outcome";
})(BundleEntrySearchMode = exports.BundleEntrySearchMode || (exports.BundleEntrySearchMode = {}));
/** GET | HEAD | POST | PUT | DELETE | PATCH */
var BundleEntryRequestMethod;
(function (BundleEntryRequestMethod) {
    BundleEntryRequestMethod["DELETE"] = "DELETE";
    BundleEntryRequestMethod["GET"] = "GET";
    BundleEntryRequestMethod["HEAD"] = "HEAD";
    BundleEntryRequestMethod["PATCH"] = "PATCH";
    BundleEntryRequestMethod["POST"] = "POST";
    BundleEntryRequestMethod["PUT"] = "PUT";
})(BundleEntryRequestMethod = exports.BundleEntryRequestMethod || (exports.BundleEntryRequestMethod = {}));
