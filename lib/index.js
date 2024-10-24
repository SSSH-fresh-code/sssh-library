/**
 * removeUnderbar true - str내 언더바를 공백으로 치환합니다.
 *                false - str내 공백을 언더라인으로 치환합니다.
 */
export const convertUnderbar = (str, removeUnderbar = false) => {
    return removeUnderbar ? str.replace(/_/g, " ") : str.replace(/ /g, "_");
};
export var MessengerType;
(function (MessengerType) {
    MessengerType["TELEGRAM"] = "TELEGRAM";
    MessengerType["SLACK"] = "SLACK";
    MessengerType["DISCORD"] = "DISCORD";
})(MessengerType || (MessengerType = {}));
export var BusinessType;
(function (BusinessType) {
    BusinessType["CHAT"] = "CHAT";
    BusinessType["ERROR"] = "ERROR";
})(BusinessType || (BusinessType = {}));
export var DataType;
(function (DataType) {
    DataType["JSON"] = "JSON";
})(DataType || (DataType = {}));
