"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireItemEnablewhenOperator = exports.QuestionnaireItemType = exports.QuestionnaireItemEnablebehavior = exports.QuestionnaireStatus = void 0;
/** draft | active | retired | unknown */
var QuestionnaireStatus;
(function (QuestionnaireStatus) {
    QuestionnaireStatus["Active"] = "active";
    QuestionnaireStatus["Draft"] = "draft";
    QuestionnaireStatus["Retired"] = "retired";
    QuestionnaireStatus["Unknown"] = "unknown";
})(QuestionnaireStatus = exports.QuestionnaireStatus || (exports.QuestionnaireStatus = {}));
/** all | any */
var QuestionnaireItemEnablebehavior;
(function (QuestionnaireItemEnablebehavior) {
    QuestionnaireItemEnablebehavior["All"] = "all";
    QuestionnaireItemEnablebehavior["Any"] = "any";
})(QuestionnaireItemEnablebehavior = exports.QuestionnaireItemEnablebehavior || (exports.QuestionnaireItemEnablebehavior = {}));
/** group | display | boolean | decimal | integer | date | dateTime + */
var QuestionnaireItemType;
(function (QuestionnaireItemType) {
    QuestionnaireItemType["Display"] = "display";
    QuestionnaireItemType["Attachment"] = "attachment";
    QuestionnaireItemType["Question"] = "question";
    QuestionnaireItemType["Date"] = "date";
    QuestionnaireItemType["Decimal"] = "decimal";
    QuestionnaireItemType["Url"] = "url";
    QuestionnaireItemType["Quantity"] = "quantity";
    QuestionnaireItemType["Choice"] = "choice";
    QuestionnaireItemType["Integer"] = "integer";
    QuestionnaireItemType["String"] = "string";
    QuestionnaireItemType["Text"] = "text";
    QuestionnaireItemType["Group"] = "group";
    QuestionnaireItemType["Reference"] = "reference";
    QuestionnaireItemType["OpenChoice"] = "open-choice";
    QuestionnaireItemType["Time"] = "time";
    QuestionnaireItemType["DateTime"] = "dateTime";
    QuestionnaireItemType["Boolean"] = "boolean";
})(QuestionnaireItemType = exports.QuestionnaireItemType || (exports.QuestionnaireItemType = {}));
/** exists | = | != | > | < | >= | <= */
var QuestionnaireItemEnablewhenOperator;
(function (QuestionnaireItemEnablewhenOperator) {
    QuestionnaireItemEnablewhenOperator["!="] = "!=";
    QuestionnaireItemEnablewhenOperator["<"] = "<";
    QuestionnaireItemEnablewhenOperator["<="] = "<=";
    QuestionnaireItemEnablewhenOperator["="] = "=";
    QuestionnaireItemEnablewhenOperator[">"] = ">";
    QuestionnaireItemEnablewhenOperator[">="] = ">=";
    QuestionnaireItemEnablewhenOperator["Exists"] = "exists";
})(QuestionnaireItemEnablewhenOperator = exports.QuestionnaireItemEnablewhenOperator || (exports.QuestionnaireItemEnablewhenOperator = {}));
