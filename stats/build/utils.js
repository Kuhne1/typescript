"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParse = dateString
        .split("/")
        .map((val) => {
        return parseInt(val);
    });
    return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
exports.dateStringToDate = dateStringToDate;
