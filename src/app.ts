// const { getUuid, getAge } = require('./plugins');
// const { emailTemplate } = require('./js-fundation/01-template');
// require('./js-fundation/02-destructuring');
// const { getUserById } = require('./js-fundation/03-callbacks');
// const { getUserById } = require('./js-fundation/04-arrow-functions');
// const { buildMakePerson } = require('./js-fundation/05-factory');
// const getPokemonById = require('./js-fundation/06-promises');
// const { buildLogger } = require('./plugins');

import { buildLogger } from "./plugins/logger.plugin";

// console.log(emailTemplate);

// const id = 2;

// getUserById(id, ( error, user ) => {
//     if ( error ) {
//         throw new Error( error );
//     }

//     console.log({ user });
// });

/******* Referencia a las funciones factory y uso */
// const makePerson = buildMakePerson({ getUuid, getAge });

// const obj = { name: 'John', birthdate: '1999-10-22' };

// const john = makePerson(obj);

// console.log(john);

// getPokemonById(4)
// .then((pokemon) => console.log({ pokemon }))

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Ocurrio un error');