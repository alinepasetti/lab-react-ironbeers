import React, { Component } from 'react';
import NavBar from './../../components/NavBar';
import { listAll } from './../../services/beer';
import { Link } from 'react-router-dom';

import './style.scss';

export class List extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    listAll()
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const input = event.target.name;
    this.setState({ [input]: value });
  }
  get filteredBeers() {
    let filteredBeers = this.state.beers.filter(beer =>
      beer.name.toLowerCase().includes(this.state.query)
    );

    return filteredBeers;
  }
  render() {
    return (
      <div>
        <NavBar />
        <input
          onChange={this.handleChange}
          name="query"
          id="search"
          placeholder="Search for a beer"
          value={this.state.query}
        />
        {this.filteredBeers.map(beer => {
          return (
            <Link to={`/beers/${beer._id}`} className="product__card" key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <p>
                  <strong>{beer.name}</strong>
                </p>
                <p>{beer.tagline}</p>
                <small>Created by: {beer.contributed_by}</small>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default List;
