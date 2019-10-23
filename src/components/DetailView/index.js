import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import SpritesView from "./SpritesView";
import PokemonDetail from "./PokemonDetail";

import './styles.css';

class DetailView extends Component {

    constructor(props) {
        super(props);
        this.state= {
            pokemonSelected: props.pokemonSelected
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonSelected != this.props.pokemonSelected)
        {
            this.setState({
                pokemonSelected: this.props.pokemonSelected
            });
        }
    }

    render() {
        console.log(this.state.pokemonSelected);
        return (
            <div className="detailViewCont">
                <div className="content">
                    <SpritesView pokemon={this.state.pokemonSelected}></SpritesView> 
                    <PokemonDetail pokemon={this.state.pokemonSelected}></PokemonDetail>
                </div>
            </div>
        );
    }
}

DetailView.propTypes = {
    pokemonSelected : PropTypes.object,
}

export default DetailView;