"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationStatus = exports.LocationMode = void 0;
/** instance | kind */
var LocationMode;
(function (LocationMode) {
    LocationMode["Instance"] = "instance";
    LocationMode["Kind"] = "kind";
})(LocationMode = exports.LocationMode || (exports.LocationMode = {}));
/** active | suspended | inactive */
var LocationStatus;
(function (LocationStatus) {
    LocationStatus["Active"] = "active";
    LocationStatus["Inactive"] = "inactive";
    LocationStatus["Suspended"] = "suspended";
})(LocationStatus = exports.LocationStatus || (exports.LocationStatus = {}));
