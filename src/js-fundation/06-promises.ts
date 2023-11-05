const { httpClientPlugin } = require('../plugins');

export const getPokemonById = async ( id: string | number ):Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        // const resp = await fetch(url);
        // const pokemon = await resp.json();
        const pokemon = await httpClientPlugin.get( url );

        return pokemon.name
    } catch (error) {
        throw `Pokemon not found with id: ${id}`;
    }
    
}