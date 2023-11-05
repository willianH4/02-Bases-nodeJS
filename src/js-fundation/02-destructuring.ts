// console.log(process.env);

const { TERM_PROGRAM, USERDOMAIN, USERPROFILE } = process.env;

// console.table({ TERM_PROGRAM, USERDOMAIN, USERPROFILE });

export const characters = ['Flash', 'Superman', 'Batman'];

const [ , , batman ] = characters;

// console.log(batman);