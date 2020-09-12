import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    render() {
        return (
                <div id="display">{this.props.name}</div>
        )
    }
}

Display.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Display;
