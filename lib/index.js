/**
 * removeUnderbar true - str내 언더바를 공백으로 치환합니다.
 *                false - str내 공백을 언더라인으로 치환합니다.
 */
export const convertUnderbar = (str, removeUnderbar = false) => {
    return removeUnderbar ? str.replace(/_/g, " ") : str.replace(/ /g, "_");
};
