import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello, Tevvin!'
        };
    }

    handleClick = () => {
        this.setState({
            name: 'It Works!!!!'
        });
    }



    render() {
        return (
            <div className="btn">
                <button onClick={this.handleClick}>
                    Click me
                </button>

              <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Button;
