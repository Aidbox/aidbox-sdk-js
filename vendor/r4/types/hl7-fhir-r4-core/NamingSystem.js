"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingSystemType = exports.NamingSystemKind = exports.NamingSystemStatus = void 0;
/** draft | active | retired | unknown */
var NamingSystemStatus;
(function (NamingSystemStatus) {
    NamingSystemStatus["Active"] = "active";
    NamingSystemStatus["Draft"] = "draft";
    NamingSystemStatus["Retired"] = "retired";
    NamingSystemStatus["Unknown"] = "unknown";
})(NamingSystemStatus = exports.NamingSystemStatus || (exports.NamingSystemStatus = {}));
/** codesystem | identifier | root */
var NamingSystemKind;
(function (NamingSystemKind) {
    NamingSystemKind["Codesystem"] = "codesystem";
    NamingSystemKind["Identifier"] = "identifier";
    NamingSystemKind["Root"] = "root";
})(NamingSystemKind = exports.NamingSystemKind || (exports.NamingSystemKind = {}));
/** oid | uuid | uri | other */
var NamingSystemType;
(function (NamingSystemType) {
    NamingSystemType["Oid"] = "oid";
    NamingSystemType["Other"] = "other";
    NamingSystemType["Uri"] = "uri";
    NamingSystemType["Uuid"] = "uuid";
})(NamingSystemType = exports.NamingSystemType || (exports.NamingSystemType = {}));
