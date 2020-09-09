import React, { Component } from 'react';
import Display from './components/Display';
import Pads from './components/Pads';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
       <Display />
       <Pads />
      </div>
    )
  }
}

export default App
