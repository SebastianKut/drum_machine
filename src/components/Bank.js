import React, { Component } from 'react'

class Bank extends Component {
    getStyle = () => {
        return {
            justifyContent: this.props.currentBank==='bankOne' ? 'flex-start' : 'flex-end'
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

export default Bank
