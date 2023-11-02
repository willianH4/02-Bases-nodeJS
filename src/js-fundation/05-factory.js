// Es una funcion que crea y regresa otra funcion
// Se implementa el patron adaptador

// const { getUuid, getAge } = require('../plugins');

const buildMakePerson = ({ getUuid, getAge }) => {

    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }

}

// const obj = { name: 'John', birthdate: '1999-10-22' };

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
    buildMakePerson,
}