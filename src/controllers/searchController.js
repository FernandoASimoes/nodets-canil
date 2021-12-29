"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Pet_1 = require("../models/Pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    let list = Pet_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.creacteMenuObject)(''),
        list
    });
};
exports.search = search;
