import React, { Component } from 'react';
import Pad from '../components/Pad';
import PropTypes from 'prop-types';

class Pads extends Component {

    render() {
        return ( 
        <div id="pads">
          {this.props.pads.map((pad) => {
              return <Pad pad={pad} key={pad.padId} padId={pad.padId} handleClick={this.props.handleClick}
              audioSrc={pad.audioSrc} audioId={pad.audioId}/>
          })}
        </div>        
        )
    }
}

Pads.propTypes = {
    pads: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Pads
