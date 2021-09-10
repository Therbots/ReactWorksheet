import reactDom from 'react-dom';
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertOnClick from './AlertOnClick/AlertOnClick';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    alertOnClick = () => {
        return (
            alert('DevCodeCamp')
        );
    }


    render() {
        return (
            <React.Fragment>
                <NamesList listName={this.state.names} />
                <AlertOnClick click={this.alertOnClick} />
            </React.Fragment>
        );
    }
}

export default App;