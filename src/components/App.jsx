import reactDom from 'react-dom';
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertOnClick from './AlertOnClick/AlertOnClick';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import CreateSuperhero from './CreateSuperhero/CreateSuperhero';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }

        this.state = {
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        }
    }

    addSuperheroToSuperheroes(superheroToAdd) {
        let tempSuperhero = this.state.superheroes;
        tempSuperhero.push(superheroToAdd);
        this.setState({
            superheroes: tempSuperhero
        });
    }

    alertOnClick = () => {
        return (
            alert('DevCodeCamp')
        );
    }

    


    render() {
        return (
            <React.Fragment>
                
                <SuperheroTable superhero={this.state.superheroes} />
                {/* <NamesList listName={this.state.names} /> */}
                <AlertOnClick click={this.alertOnClick} />
                <CreateSuperhero addNewSuperhero={this.addSuperheroToSuperheroes} />
                
                
            </React.Fragment>
        );
    }
}

export default App;