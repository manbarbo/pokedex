import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
/* Components */
import SearchBar from './SearchBar'
import ControlButtons from './ControlButtons'
import PokemonList from './PokemonList'
/* Services */
import { getUrlPokemonList, getUrlSearchPokemon} from "./../../services/getPokemonApi.service";
/* Styles */
import './styles.css';

class PokemonView extends Component  {

    constructor(props) {
        super(props);
        
        this.onPokemonSelect = props.onPokemonSelect;

        this.state = {
            next: "",
            previous: "",
            pokemonList: [],
        };        
    }

    componentDidMount() {
        const url = getUrlPokemonList();
        this.handleUpdateList(url);
    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleUpdateList = (url) => {
        fetch(url)
        .then( 
            resolve => {
                return resolve.json();
            }
        )
        .then( 
            data => {
                let pokemonPromises = [];
                for (let result of data.results) {
                    const newPokemonPromise = this.handleViewPokemon(result.url);
                    pokemonPromises.push(newPokemonPromise);
                }
                Promise.all(pokemonPromises)
                .then(values => {
                    this.setState({
                        pokemonList: values
                    });
                })
                .catch(
                    error => {
                        console.log('Fetch error:' + error.message);
                    }
                );
                
                this.setState({
                    next: data.next,
                    previous: data.previous,
                });
            }
        );
    }
    
    handleViewPokemon = (url) => {
        return fetch(url)
        .then( 
            resolve => {
                return resolve.json();
            }
        )
        .then( 
            data => {
                return data;
            }
        ).catch(
            error => {
                console.log('Fetch error:' + error.message);
            }
        );
    }

    handleSearch = pokemonName => {
        if (pokemonName)
        {
            const url = getUrlSearchPokemon(pokemonName);
            fetch(url)
            .then( 
                resolve => {
                    return resolve.json();
                }
            )
            .then( 
                data => {
                    this.setState({
                        pokemonList: [data]
                    });
                }
            ).catch(
                error => {
                    this.setState({
                        pokemonList: []
                    });
                }
            );
        }
        else
        {
            const url = getUrlPokemonList();
            this.handleUpdateList(url);
        }
    }

    handleSelect = pokemon => {
        this.onPokemonSelect(pokemon);
    }

    handleControlButtons = button => {
        if(this.state.pokemonList.length != 0) {
            if (button == "next" && this.state.next) {
                this.handleUpdateList(this.state.next);
            }
            else if (button == "prev" && this.state.previous) {
                this.handleUpdateList(this.state.previous);
            }
        }
        else {
            const url = getUrlPokemonList();
            this.handleUpdateList(url);
        }
    }

    render () {

        const { onPokemonSelect } = this.props;
        const { pokemonList } = this.state;

        return(
            <div className="pokemonViewCont">
                <SearchBar onSearch={this.handleSearch}></SearchBar>
                <PokemonList pokemonList={pokemonList} onPokemonSelect={onPokemonSelect}></PokemonList>
                <ControlButtons onClickControl={this.handleControlButtons}></ControlButtons>
            </div>
        );
    }
}

PokemonView.propTypes = {
    onPokemonSelect: PropTypes.func.isRequired,
}

export default PokemonView;