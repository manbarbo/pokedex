import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactTooltip from 'react-tooltip'

class ControlButtons extends Component {

    constructor(props) {
        super(props);

        this.onClickControl = props.onClickControl;

        this.handleNextButton = this.handleNextButton.bind(this);
        this.handlePrevButton = this.handlePrevButton.bind(this);
    }

    handleNextButton(event) {
        this.onClickControl('next');
    }

    handlePrevButton(event) {
        this.onClickControl('prev');
    }

    render() {
        return (
            <div className="controlButtons">
                <button data-tip="Previous" onClick={this.handlePrevButton}></button>
                <button data-tip="Next" onClick={this.handleNextButton}></button>
                <ReactTooltip />
            </div>
        );
    }
}

ControlButtons.propTypes = {
    onClickControl: PropTypes.func.isRequired,
}

export default ControlButtons;