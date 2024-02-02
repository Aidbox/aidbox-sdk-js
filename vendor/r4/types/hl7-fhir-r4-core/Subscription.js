"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatus = exports.SubscriptionPayload = exports.SubscriptionType = void 0;
/** rest-hook | websocket | email | sms | message */
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["Email"] = "email";
    SubscriptionType["Message"] = "message";
    SubscriptionType["RestHook"] = "rest-hook";
    SubscriptionType["Sms"] = "sms";
    SubscriptionType["Websocket"] = "websocket";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
/** MIME type to send, or omit for no payload */
var SubscriptionPayload;
(function (SubscriptionPayload) {
    SubscriptionPayload["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    SubscriptionPayload["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    SubscriptionPayload["Application/sql"] = "application/sql";
    SubscriptionPayload["Application/xquery"] = "application/xquery";
})(SubscriptionPayload = exports.SubscriptionPayload || (exports.SubscriptionPayload = {}));
/** requested | active | error | off */
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["Active"] = "active";
    SubscriptionStatus["Error"] = "error";
    SubscriptionStatus["Off"] = "off";
    SubscriptionStatus["Requested"] = "requested";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
