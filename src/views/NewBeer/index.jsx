import React, { Component } from 'react';
import NavBar from './../../components/NavBar';
import './style.scss';
import { saveBeer } from './../../services/beer';

export class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveBeer = this.saveBeer.bind(this);
  }
  saveBeer(event) {
    event.preventDefault();
    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    };
    saveBeer(newBeer)
      .then(() => this.props.history.push('/beers'))
      .catch(error => console.log(error));
  }
  handleInputChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({ [inputName]: value });
  }

  render() {
    return (
      <div>
        <NavBar />
        <form action="/beers" onSubmit={this.saveBeer}>
          <input
            onChange={this.handleInputChange}
            name="name"
            id="name"
            value={this.state.name}
            type="text"
            placeholder="Beer Name"
          />
          <input
            onChange={this.handleInputChange}
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            type="text"
            placeholder="Tagline"
          />
          <input
            onChange={this.handleInputChange}
            name="description"
            id="description"
            value={this.state.description}
            type="text"
            placeholder="Description"
          />
          <input
            onChange={this.handleInputChange}
            name="first_brewed"
            id="first_brewed"
            value={this.state.first_brewed}
            type="text"
            placeholder="First Brewed"
          />
          <input
            onChange={this.handleInputChange}
            name="brewers_tips"
            id="brewers_tips"
            value={this.state.brewers_tips}
            type="text"
            placeholder="Brewers Tips"
          />
          <input
            onChange={this.handleInputChange}
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.attenuation_level}
            type="number"
            placeholder="Attenuation Level"
          />
          <input
            onChange={this.handleInputChange}
            name="contributed_by"
            id="contributed_by"
            value={this.state.contributed_by}
            type="text"
            placeholder="Contributed by"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
