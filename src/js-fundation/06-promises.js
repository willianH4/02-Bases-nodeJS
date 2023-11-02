const { httpClientPlugin } = require('../plugins');

const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // const resp = await fetch(url);
    // const pokemon = await resp.json();
    const pokemon = await httpClientPlugin.get( url );

    return pokemon.name
}

module.exports = getPokemonById;