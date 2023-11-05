"use strict";
// Es una funcion que crea y regresa otra funcion
// Se implementa el patron adaptador
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUuid, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'John', birthdate: '1999-10-22' };
// const john = buildPerson(obj);
// console.log(john);
