"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleMethod = exports.BundleMode = exports.BundleType = void 0;
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
var BundleMode;
(function (BundleMode) {
    BundleMode["Include"] = "include";
    BundleMode["Match"] = "match";
    BundleMode["Outcome"] = "outcome";
})(BundleMode = exports.BundleMode || (exports.BundleMode = {}));
/** GET | HEAD | POST | PUT | DELETE | PATCH */
var BundleMethod;
(function (BundleMethod) {
    BundleMethod["DELETE"] = "DELETE";
    BundleMethod["GET"] = "GET";
    BundleMethod["HEAD"] = "HEAD";
    BundleMethod["PATCH"] = "PATCH";
    BundleMethod["POST"] = "POST";
    BundleMethod["PUT"] = "PUT";
})(BundleMethod = exports.BundleMethod || (exports.BundleMethod = {}));
