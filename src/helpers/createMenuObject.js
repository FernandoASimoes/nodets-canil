"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creacteMenuObject = void 0;
const creacteMenuObject = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.creacteMenuObject = creacteMenuObject;
