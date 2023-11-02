"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spider Man',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Super man',
        owner: 'DC'
    }
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(1);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Not hero found');
