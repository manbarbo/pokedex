import {url_base_pokemon} from './../constants/api_url';


/*
*   getUrlPokemonList
*   Inputs:
*   Output: string
*   This function returns the url for the pokemon api
*/

export const getUrlPokemonList = () => {
    const offset = 0;
    const limit = 15;
    return  `${url_base_pokemon}pokemon?offset=${offset}&limit=${limit}`;
}

/*
*   getUrlSearchPokemon
*   Inputs: pokemonName:string
*   Output: string
*   This function returns the url for the pokemon api for an specific pokemon
*/
export const getUrlSearchPokemon = (pokemonName) => {
    return  `${url_base_pokemon}pokemon/${pokemonName}`;
}

/*
*   getPokemonIDFormated
*   Inputs: pokemonID:number
*   Output: string
*   This function returns the pokemon id formated with 3 digits 0 as padding
*/
export const getPokemonIDFormated = (pokemonID) => {
    if(pokemonID)
        return pokemonIDFormater(pokemonID, 3, '0');
}

/*
*   pokemonIDFormater
*   Inputs: pokemonID:number, length:number, padding:numer
*   Output: string
*   This function formats the pokemon id
*/
const pokemonIDFormater = (pokemonID, length, padding) => { 
    var str = pokemonID + "";
    return (length <= str.length) ? str : getPokemonIDFormated(padding+str, length, padding);
}

export default getUrlPokemonList;