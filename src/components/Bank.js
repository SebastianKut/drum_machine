import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bank extends Component {
    //move bank selector from left to right
    getStyle = () => {
        return {
            justifyContent: this.props.currentBank === 'bankOne' ? 'flex-start' : 'flex-end'
        }
    }
    render() {
        return (
            <div className="bank-container"> 
                <div>
                    <p>BANK</p>
                </div>
                <div style={this.getStyle()} onClick={this.props.changeBank} className="switch-container">
                    <div className="switch"></div>
                </div>
            </div>
        )
    }
}

Bank.propTypes = {
    currentBank: PropTypes.string.isRequired,
    changeBank: PropTypes.func.isRequired
}

export default Bank
