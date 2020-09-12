import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    //apply css style to a pad depending on active status
    getStyle = () => this.props.pad.active ? activeStyle : inactiveStyle; 
    

    render() {
        return (
            <div style={this.getStyle()} id={this.props.padId} className="drum-pad" onClick={this.props.handleClick}>
            <audio src={this.props.audioSrc} id={this.props.audioId} className="clip"></audio>
            {this.props.audioId}</div>
        )
    }
}

const activeStyle = {
    backgroundColor: 'aqua',
    borderLeft: '2px solid aqua',
    borderTop: '2px solid aqua',
    boxShadow: '7px 7px 19px -8px rgba(0,0,0,0.5)'
};

const inactiveStyle = {
    backgroundColor: 'white',
    border: 'none',
    boxShadow: '7px 7px 19px -3px rgba(0,0,0,0.5)'
};

Pad.propTypes = {
    pad: PropTypes.object.isRequired,
    padId: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
    audioId: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Pad;
