import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class PokemonView extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.onSearch = props.onSearch;

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSearch(event) {
        this.onSearch(this.state.value)
    }
    

    render() {
        return (
            <div className="searchBar">
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
                <button onClick={this.handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        );
    }
}

PokemonView.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default PokemonView;