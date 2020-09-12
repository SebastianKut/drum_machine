import React, { Component } from 'react';
import Display from './components/Display';
import Pads from './components/Pads';
import Bank from './components/Bank';
import './App.css';

const bankOne = [
  {padId: 'heater1',
  padName: 'D CHORD',
  audioId: 'Q',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  active: false
  },
  {padId: 'heater2',
  padName: 'D# CHORD',
  audioId: 'W',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  active: false
  },
  {padId: 'heater3',
  padName: 'C CHORD',
  audioId: 'E',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  active: false
  },
  {padId: 'heater4',
  padName: 'GUITAR',
  audioId: 'A',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  active: false
  },
  {padId: 'clap',
  padName: 'CLAP',
  audioId: 'S',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  active: false
  },
  {padId: 'open-hat',
  padName: 'OPEN HI-HAT',
  audioId: 'D',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  active: false
  },
  {padId: 'kick-n-hat',
  padName: 'KICK & HI-HAT',
  audioId: 'Z',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  active: false
  },
  {padId: 'kick',
  padName: 'KICK',
  audioId: 'X',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  active: false
  },
  {padId: 'closed-hat',
  padName: 'CLOSED HI-HAT',
  audioId: 'C',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  active: false
  }
];

const bankTwo = [
  {padId: 'chord1',
  padName: 'CHORD 1',
  audioId: 'Q',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  active: false
  },
  {padId: 'chord2',
  padName: 'CHORD 2',
  audioId: 'W',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  active: false
  },
  {padId: 'chord3',
  padName: 'CHORD 3',
  audioId: 'E',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  active: false
  },
  {padId: 'shaker',
  padName: 'SHAKER',
  audioId: 'A',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  active: false
  },
  {padId: 'open-hh',
  padName: 'OPEN HI-HAT',
  audioId: 'S',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  active: false
  },
  {padId: 'closed-hh',
  padName: 'CLOSED HI-HAT',
  audioId: 'D',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  active: false
  },
  {padId: 'punchy-kick',
  padName: 'PUNCHY-KICK',
  audioId: 'Z',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  active: false
  },
  {padId: 'side-stick',
  padName: 'SIDE STICK',
  audioId: 'X',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  active: false
  },
  {padId: 'snare',
  padName: 'SNARE',
  audioId: 'C',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  active: false
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'PRESS KEY OR CLICK PAD',
      pads: bankOne,
      currentBank: 'bankOne'
    };  
  }

  //play sound, display audio sample name and change pad status to active on key press 
  handleKeyPress = (e) => {
    const audioId = String.fromCharCode(e.keyCode);
    if (document.getElementById(audioId) === null) {
    return
    } else {
      const buttonId = document.getElementById(audioId).parentElement.id;
      this.playSound(audioId);
      this.displaySampleName(buttonId);
      this.toggleActive(audioId);
      }
  }

  //change (toggle) pad state to inactive on key release
  handleKeyRelease = (e) => {
    const audioId = String.fromCharCode(e.keyCode);
    //return if pressed key is not relevant
    if (document.getElementById(audioId) === null) {
      return
      } else {
      this.toggleActive(audioId);
      }
  }

  //play sample when pad is clicked
  handleClick = (e) => {
    this.playSound(this.getAudioId(e.target.id));
    this.displaySampleName(e.target.id);
  }
 
  //set pad to active when mouse is pressed down
  handleMousePress = (e) => {
    this.toggleActive(this.getAudioId(e.target.id));
  }

  //set pad to inactive when mouse button is released
  handleMouseRelease = (e) => {
    this.toggleActive(this.getAudioId(e.target.id));
  }

  //get id of an audio sample from the relevant pad
  getAudioId = (buttonId) => document.getElementById(buttonId).firstElementChild.id;

  //play sound method
  playSound = (audioId) => {
    const sample = document.getElementById(audioId);
    // do not wait for sample to finish if playSound() fires again (reset to beging and play again)
    if (!sample.paused) {sample.currentTime = 0}
    sample.play();  
  }

  //get an array with the relevant pad object by filtering all pads and update state with relevant pads name
  displaySampleName = (id) => {
    const currentPad = this.state.pads.filter((pad) => pad.padId === id)[0];
    const name = currentPad.padName;
    this.setState({
      name: name
    })
  };

  //toggle active pad status by going through pads array of objects and changing active status of the relevant pad object
  toggleActive = (audioId) => {
    this.setState({
      pads: this.state.pads.map((pad) => {
        if (pad.audioId === audioId) {
          pad.active = !pad.active;
        }
        return pad;
      })
    })
  };

  //change bank by checking currentBank state
  changeBank = () => {
    if (this.state.currentBank==='bankOne') this.setState({
      pads: bankTwo,
      currentBank: 'bankTwo'
    });
    if (this.state.currentBank==='bankTwo') this.setState({
      pads: bankOne,
      currentBank: 'bankOne'
    });
  }

  //event listeners for keys and mouse button up and down 
  //these update active pad state 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyRelease);
    document.getElementById('pads').addEventListener('mousedown', this.handleMousePress);
    document.getElementById('pads').addEventListener('mouseup', this.handleMouseRelease);
  }

  //garbage collection
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyRelease);
    document.getElementById('pads').removeEventListener('mousedown', this.handleMousePress);
    document.getElementById('pads').removeEventListener('mouseup', this.handleMouseRelease);
  }

  render() {
    return (
      <div id="drum-machine">
       <Display name={this.state.name}/>
       <Bank currentBank={this.state.currentBank} changeBank={this.changeBank}/>
       <Pads handleClick={this.handleClick} pads={this.state.pads}/>
      </div>
    )
  }
}

export default App
