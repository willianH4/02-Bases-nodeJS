// Es una funcion que crea y regresa otra funcion
// Se implementa el patron adaptador

// const { getUuid, getAge } = require('../plugins');

interface BuildMakerPersonOptions {
    getUuid: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

const buildMakePerson = ({ getUuid, getAge }: BuildMakerPersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {
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