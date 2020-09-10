import React, { Component } from 'react'

class Pads extends Component {

    render() {
        return ( 
        <div id="pads">
          <div id="heater1" style={this.props.padStyle} className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className="clip"></audio>
          Q</div>
          <div id="heater2" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className="clip"></audio>
          W</div>
          <div id="heater3" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className="clip"></audio>
          E</div>
          <div id="heater4" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className="clip"></audio>
          A</div>
          <div id="clap" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className="clip"></audio>
          S</div>
          <div id="open-hat" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className="clip"></audio>
          D</div>
          <div id="kick-n-hat" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className="clip"></audio>
          Z</div>
          <div id="kick" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className="clip"></audio>
          X</div>
          <div id="closed-hat" className="drum-pad" onClick={this.props.handleClick}>
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className="clip"></audio>
          C</div>
        </div>        
        )
    }
}

export default Pads
