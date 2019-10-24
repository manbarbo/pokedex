import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class PokemonDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
            pokemonSelected: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemon != this.props.pokemon)
        {   
            this.setState({
                pokemonSelected: this.props.pokemon
            });
        }
    }

    getTypes = (types) => {
        if(types)
            return types.map( x => ( 
                <div key={x.type.name} className={`${x.type.name}Type PokemonType`}>
                    {x.type.name}
                </div> 
            ));
    }

    getAbilities = (abilities) => {
        if(abilities)
            return abilities.map( x => ( 
                <Grid key={x.ability.name} item xs={12}> 
                    {x.ability.name}  
                </Grid>
            ));
    }

    render() {
        const { pokemon } = this.props;
        return (
            <div className="PokemonDetailsCont">
                <Grid container spacing={1}>
                    <Grid item xs={3} className="Bold">
                        ID:
                    </Grid>
                    <Grid item xs={9}>
                        { this.state.pokemonSelected.id }
                    </Grid>

                    <Grid item xs={3} className="Bold">
                        Name:
                    </Grid>
                    <Grid item xs={9} className="Capital">
                        { this.state.pokemonSelected.name }
                    </Grid>
                    
                    <Grid item xs={3} className="Bold">
                        Type:
                    </Grid>
                    <Grid item xs={9}>
                        { this.getTypes(this.state.pokemonSelected.types) }
                    </Grid>

                    <Grid item xs={3} className="Bold">
                        Ability:
                    </Grid>
                    <Grid item xs={9} container className="Capital">
                        { this.getAbilities(this.state.pokemonSelected.abilities) }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default PokemonDetail;