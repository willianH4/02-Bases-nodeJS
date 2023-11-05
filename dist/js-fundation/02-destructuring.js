"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { TERM_PROGRAM, USERDOMAIN, USERPROFILE } = process.env;
// console.table({ TERM_PROGRAM, USERDOMAIN, USERPROFILE });
exports.characters = ['Flash', 'Superman', 'Batman'];
const [, , batman] = exports.characters;
// console.log(batman);
