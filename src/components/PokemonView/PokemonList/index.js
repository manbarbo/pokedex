import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PokemonPreview from './PokemonPreview'

class PokemonList extends Component {

    constructor(props) {
        super(props);
        
        this.onPokemonSelect = props.onPokemonSelect;

        this.state = {
            pokemonList: [],
        };        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonList != this.props.pokemonList)
        {
            this.setState({
                pokemonList: this.props.pokemonList
            });

        }
    }

    handlePokemonClick = pokemon => {
        this.onPokemonSelect(pokemon)
    };

    strToComponents = pokemonList => {
        return (
            pokemonList.map( pokemon => (
                <PokemonPreview 
                    key={pokemon.name} 
                    pokemon={pokemon}
                    onPokemonClick = { () => this.handlePokemonClick(pokemon) }>
                </PokemonPreview>)
            )
        );
    }

    render() {
        if (this.state.pokemonList != 0) {
            return(
                <Grid container spacing={1} className="pokemonListCont">
                    {this.strToComponents(this.state.pokemonList)}
                </Grid>
            );
        }
        else {
            return(
                <div className="notFound">
                    Error 404: Pokemon Not Found.
                </div>
            );
        }
    }
};

PokemonList.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    onPokemonSelect: PropTypes.func.isRequired,
}

export default PokemonList;