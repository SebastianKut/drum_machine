import React, { Component } from 'react';
import Display from './components/Display';
import Pads from './components/Pads';
import './App.css';

const bankOne = [
  {padId: 'heater1',
  padName: 'HEATER 1',
  audioId: 'Q',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  active: false
  },
  {padId: 'heater2',
  padName: 'HEATER 2',
  audioId: 'W',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  active: false
  },
  {padId: 'heater3',
  padName: 'HEATER 3',
  audioId: 'E',
  audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  active: false
  },
  {padId: 'heater4',
  padName: 'HEATER 4',
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
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      pads: bankOne
    };  
  }
  
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('keyup', this.handleKeyRelease);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyRelease);
  }

  handleKeyPress = (e) => {
   
    const audioId = String.fromCharCode(e.keyCode);
    if (document.getElementById(audioId) === null) {
    return
    } else {
      const buttonId = document.getElementById(audioId).parentElement.id;
      this.playSound(audioId);
      this.displaySampleName(buttonId);
      this.toggleActive(audioId);
      console.log('keydown');
      }
  }

  handleKeyRelease = (e) => {
   
    const audioId = String.fromCharCode(e.keyCode);
    if (document.getElementById(audioId) === null) {
      return
      } else {
      this.toggleActive(audioId);
      console.log('keyup');
      }
  }

  handleClick = (e) => {
    this.playSound(this.getAudioId(e.target.id));
    this.displaySampleName(e.target.id);
  }
 
  getAudioId = (buttonId) => document.getElementById(buttonId).firstElementChild.id;

  playSound = (audioId) => {
    const sample = document.getElementById(audioId)
    if (!sample.paused) {sample.currentTime = 0}
    sample.play();  
  }

  displaySampleName = (id) => {
    const currentPad = this.state.pads.filter((pad) => pad.padId === id)[0];
    const name = currentPad.padName;
    this.setState({
      name: name
    })
  };

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


  render() {
    return (
      <div id="drum-machine">
       <Display name={this.state.name}/>
       <Pads handleClick={this.handleClick} pads={this.state.pads}/>
      </div>
    )
  }
}

export default App
