import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from '@material-ui/core';
import { getPokemonIDFormated } from './../../../services/getPokemonApi.service';

class PokemonPreview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onPokemonClick, pokemon } = this.props;
        
        return (
            <Grid item xs={4}>
                <div className="pokemonPreviewCont" onClick={onPokemonClick}>
                    <div className="pokemonName">
                        { pokemon.name }
                    </div>
                    <div className="pokemonFrame">
                        <img src={ pokemon.sprites.front_default } />
                    </div>
                    <div className="pokemonID">
                        { getPokemonIDFormated(pokemon.id) }
                    </div>
                </div>
            </Grid>
        );
    }
}

PokemonPreview.propTypes = {
    pokemon: PropTypes.object.isRequired,
    onPokemonClick: PropTypes.func.isRequired,
}

export default PokemonPreview;