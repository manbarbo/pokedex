import React, { Component } from 'react';

class SpritesView extends Component {

    constructor(props) {
        super(props);
        this.state= {
            pokemonSelected: props.pokemonSelected
        }
    }

    render() {
        const { pokemon } = this.props;
        return (
            <div className="SpritesViewCont">
                Sprites View
            </div>
        );
    }
}

export default SpritesView;