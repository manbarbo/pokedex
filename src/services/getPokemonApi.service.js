import {url_base_pokemon} from './../constants/api_url';

const offset = 0;
const limit = 15;

export const getUrlPokemonList = () => {
    return  `${url_base_pokemon}pokemon?offset=${offset}&limit=${limit}`;
}

export const getUrlSearchPokemon = (pokemonName) => {
    return  `${url_base_pokemon}pokemon/${pokemonName}`;
}

export const getPokemonIDFormated = (pokemonID) => {
    if(pokemonID)
        return pokemonIDFormater(pokemonID, 3, '0');
}

const pokemonIDFormater = (pokemonID, length, padding) => { 
    var str = pokemonID + "";
    return (length <= str.length) ? str : getPokemonIDFormated(padding+str, length, padding);
}

export default getUrlPokemonList;