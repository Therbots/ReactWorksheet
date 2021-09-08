import reactDom from 'react-dom';
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White'
        }
    }


    render() {
        return (
            <DisplayName name={this.state}/>
        )
    }
}

export default App;