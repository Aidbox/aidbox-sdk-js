"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointStatus = void 0;
/** active | suspended | error | off | entered-in-error | test */
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["Active"] = "active";
    EndpointStatus["EnteredInError"] = "entered-in-error";
    EndpointStatus["Error"] = "error";
    EndpointStatus["Off"] = "off";
    EndpointStatus["Suspended"] = "suspended";
    EndpointStatus["Test"] = "test";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
