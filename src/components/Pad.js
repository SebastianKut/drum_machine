import React, { Component } from 'react'

class Pad extends Component {

    getStyle = () => {
        return {
            backgroundColor: this.props.pad.active ? 'red' : 'lightgray'
        }
    }

    render() {
        return (
            <div style={this.getStyle()} id={this.props.padId} className="drum-pad" onClick={this.props.handleClick}>
            <audio src={this.props.audioSrc} id={this.props.audioId} className="clip"></audio>
            {this.props.audioId}</div>
        )
    }
}

export default Pad;
