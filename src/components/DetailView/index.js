import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';

import './styles.css';

class DetailView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="detailViewCont">
                DetailView 
            </div>
        );
    }
}

DetailView.propTypes = {
    pokemonSelected : PropTypes.object,
}

export default DetailView;