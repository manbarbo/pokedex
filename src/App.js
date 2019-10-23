import React, { Component } from 'react';
import PokemonView from "./components/PokemonView";
import DetailView from "./components/DetailView";
import "./App.css";
import { MuiThemeProvider } from '@material-ui/core';

class App extends Component {

  constructor(props) {
    super (props);
    this.state = {
      pokemonSelected: {}
    }
  }

  handlePokemonSelection = pokemon => {
    alert(pokemon);
    this.state.pokemonSelected = pokemon;
  };
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <PokemonView 
            onPokemonSelect={this.handlePokemonSelection}>
          </PokemonView>
          <DetailView 
            pokemonSelected={this.state.pokemonSelected}>
          </DetailView>
        </div>
      </MuiThemeProvider>
    );
  };
};

export default App;
