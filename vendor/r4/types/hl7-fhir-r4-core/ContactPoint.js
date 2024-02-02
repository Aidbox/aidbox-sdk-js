"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPointUse = exports.ContactPointSystem = void 0;
/** phone | fax | email | pager | url | sms | other */
var ContactPointSystem;
(function (ContactPointSystem) {
    ContactPointSystem["Email"] = "email";
    ContactPointSystem["Fax"] = "fax";
    ContactPointSystem["Other"] = "other";
    ContactPointSystem["Pager"] = "pager";
    ContactPointSystem["Phone"] = "phone";
    ContactPointSystem["Sms"] = "sms";
    ContactPointSystem["Url"] = "url";
})(ContactPointSystem = exports.ContactPointSystem || (exports.ContactPointSystem = {}));
/** home | work | temp | old | mobile - purpose of this contact point */
var ContactPointUse;
(function (ContactPointUse) {
    ContactPointUse["Home"] = "home";
    ContactPointUse["Mobile"] = "mobile";
    ContactPointUse["Old"] = "old";
    ContactPointUse["Temp"] = "temp";
    ContactPointUse["Work"] = "work";
})(ContactPointUse = exports.ContactPointUse || (exports.ContactPointUse = {}));
