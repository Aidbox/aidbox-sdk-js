"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerDefinitionType = void 0;
/** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
var TriggerDefinitionType;
(function (TriggerDefinitionType) {
    TriggerDefinitionType["DataAccessEnded"] = "data-access-ended";
    TriggerDefinitionType["DataAccessed"] = "data-accessed";
    TriggerDefinitionType["DataAdded"] = "data-added";
    TriggerDefinitionType["DataChanged"] = "data-changed";
    TriggerDefinitionType["DataModified"] = "data-modified";
    TriggerDefinitionType["DataRemoved"] = "data-removed";
    TriggerDefinitionType["NamedEvent"] = "named-event";
    TriggerDefinitionType["Periodic"] = "periodic";
})(TriggerDefinitionType = exports.TriggerDefinitionType || (exports.TriggerDefinitionType = {}));
