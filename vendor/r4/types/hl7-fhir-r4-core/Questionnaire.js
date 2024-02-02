"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireItemOperator = exports.QuestionnaireItemType = exports.QuestionnaireItemEnableBehavior = exports.QuestionnaireStatus = void 0;
/** draft | active | retired | unknown */
var QuestionnaireStatus;
(function (QuestionnaireStatus) {
    QuestionnaireStatus["Active"] = "active";
    QuestionnaireStatus["Draft"] = "draft";
    QuestionnaireStatus["Retired"] = "retired";
    QuestionnaireStatus["Unknown"] = "unknown";
})(QuestionnaireStatus = exports.QuestionnaireStatus || (exports.QuestionnaireStatus = {}));
/** all | any */
var QuestionnaireItemEnableBehavior;
(function (QuestionnaireItemEnableBehavior) {
    QuestionnaireItemEnableBehavior["All"] = "all";
    QuestionnaireItemEnableBehavior["Any"] = "any";
})(QuestionnaireItemEnableBehavior = exports.QuestionnaireItemEnableBehavior || (exports.QuestionnaireItemEnableBehavior = {}));
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
var QuestionnaireItemOperator;
(function (QuestionnaireItemOperator) {
    QuestionnaireItemOperator["!="] = "!=";
    QuestionnaireItemOperator["<"] = "<";
    QuestionnaireItemOperator["<="] = "<=";
    QuestionnaireItemOperator["="] = "=";
    QuestionnaireItemOperator[">"] = ">";
    QuestionnaireItemOperator[">="] = ">=";
    QuestionnaireItemOperator["Exists"] = "exists";
})(QuestionnaireItemOperator = exports.QuestionnaireItemOperator || (exports.QuestionnaireItemOperator = {}));
