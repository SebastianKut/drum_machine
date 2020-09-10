import React, { Component } from 'react';
import Display from './components/Display';
import Pads from './components/Pads';
import './App.css';


const sampleNames = {
  'heater1': 'HEATER 1',
  'heater2': 'HEATER 2',
  'heater3': 'HEATER 3',
  'heater4': 'HEATER 4',
  'clap': 'CLAP',
  'open-hat': 'OPEN HI-HAT',
  'kick-n-hat': 'KICK & HI-HAT',
  'kick': 'KICK',
  'closed-hat': 'CLOSED HI-HAT'
};

const inactive = {
  backgroundColor: 'blue'
}

const active = {
  backgroundColor: 'green'
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      padActive: false,
    };  
  }
  
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    const audioId = String.fromCharCode(e.keyCode);
    if (document.getElementById(audioId) == null) {
    return
    } else {
      const buttonId = document.getElementById(audioId).parentElement.id;
      this.playSound(audioId);
      this.displaySampleName(buttonId);
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
    const name = sampleNames[`${id}`];
    this.setState({
      name: name
    })
  };

  changePadStyle = () => {
    this.setState({
      padActive: !this.state.padActive
    })
  }

  render() {
    return (
      <div id="drum-machine">
       <Display name={this.state.name}/>
       <Pads padStyle={this.state.padStyle} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App
