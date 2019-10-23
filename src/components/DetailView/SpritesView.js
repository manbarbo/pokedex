import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class SpritesView extends Component {

    constructor(props) {
        super(props);
        this.state= {
            pokemonSelected: {},
            spriteItems:[]
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemon != this.props.pokemon)
        {   
            let spriteList = [];

            for(let sprite in this.props.pokemon.sprites){
                if (this.props.pokemon.sprites[sprite]) {
                    spriteList.push({key:sprite, src:this.props.pokemon.sprites[sprite]});
                }
            }

            const imgSprites = spriteList.map( x => ( 
                <img key={x.key} src={x.src} className="PokemonSprite" />
            ));

            this.setState({
                spriteItems: imgSprites,
                pokemonSelected: this.props.pokemon
            });
        }
    }

    render() {
        return (
            <div className="SpritesViewCont">
               <AliceCarousel mouseDragEnabled buttonsDisabled={true} items={this.state.spriteItems} autoPlay={true} fadeOutAnimation={true} autoPlayInterval={2000}/>
            </div>
        );
    }
}

export default SpritesView;