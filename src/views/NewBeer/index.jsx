import React, { Component } from 'react';
import NavBar from './../../components/NavBar';
import './style.scss';

export class NewBeer extends Component {
  saveBeer(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <NavBar />
        <form method="POST" onSubmit={this.saveBeer}>
          <input name="name" id="name" type="text" placeholder="Beer Name" />
          <input name="tagline" id="tagline" type="text" placeholder="Tagline" />
          <input name="description" id="description" type="text" placeholder="Description" />
          <input name="first_brewed" id="first_brewed" type="text" placeholder="First Brewed" />
          <input name="brewers_tips" id="brewers_tips" type="text" placeholder="Brewers Tips" />
          <input
            name="attenuation_level"
            id="attenuation_level"
            type="number"
            placeholder="Attenuation Level"
          />
          <input
            name="contributed_by"
            id="contributed_by"
            type="text"
            placeholder="Contributed by"
          />
        </form>
      </div>
    );
  }
}

export default NewBeer;
