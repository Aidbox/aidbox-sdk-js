"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatus = exports.SubscriptionChannelPayload = exports.SubscriptionChannelType = void 0;
/** rest-hook | websocket | email | sms | message */
var SubscriptionChannelType;
(function (SubscriptionChannelType) {
    SubscriptionChannelType["Email"] = "email";
    SubscriptionChannelType["Message"] = "message";
    SubscriptionChannelType["RestHook"] = "rest-hook";
    SubscriptionChannelType["Sms"] = "sms";
    SubscriptionChannelType["Websocket"] = "websocket";
})(SubscriptionChannelType = exports.SubscriptionChannelType || (exports.SubscriptionChannelType = {}));
/** MIME type to send, or omit for no payload */
var SubscriptionChannelPayload;
(function (SubscriptionChannelPayload) {
    SubscriptionChannelPayload["Application/hl7Cda+xml"] = "application/hl7-cda+xml";
    SubscriptionChannelPayload["Application/sparqlResults+xml"] = "application/sparql-results+xml";
    SubscriptionChannelPayload["Application/sql"] = "application/sql";
    SubscriptionChannelPayload["Application/xquery"] = "application/xquery";
})(SubscriptionChannelPayload = exports.SubscriptionChannelPayload || (exports.SubscriptionChannelPayload = {}));
/** requested | active | error | off */
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["Active"] = "active";
    SubscriptionStatus["Error"] = "error";
    SubscriptionStatus["Off"] = "off";
    SubscriptionStatus["Requested"] = "requested";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
