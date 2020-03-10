import React, { Component } from 'react';
import NavBar from './../../components/NavBar';
import { listAll } from './../../services/beer';
import { Link } from 'react-router-dom';

import './style.scss';

export class List extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
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
  render() {
    return (
      <div>
        <NavBar />
        {this.state.beers.map(beer => {
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
