import React, { Component } from 'react';


class CreateSuperhero extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            createSuperhero: {
                name: '',
                primaryAbility: '',
                secondaryAbility: ''
            }
         }
    }

    handleChange = (event) => {
        this.setState({
            createSuperhero: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
       this.props.addNewSuperhero(this.state.createSuperhero);
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <h1>Create Superhero</h1>
                <label>Name: </label>
                <input onChange={this.handleChange} value={this.state.createSuperhero.name} />
                <label>Primary Ability: </label>
                <input onChange={this.handleChange} value={this.state.createSuperhero.primaryAbility} />
                <label>Secondary Ability: </label>
                <input onChange={this.handleChange} value={this.state.createSuperhero.secondaryAbility} />
                <button type='submit'>Create Superhero</button>
            </form>
         );
    }
}
 
export default CreateSuperhero;