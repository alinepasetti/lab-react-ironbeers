import React, { Component } from 'react';
import NavBar from './../../components/NavBar';
import { findOne } from './../../services/beer';
import './style.scss';

export class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }
  componentDidMount() {
    let id;
    if (this.props.location.pathname === '/beers/random') {
      id = 'random';
    } else {
      id = this.props.match.params.id;
    }
    this.fetchData(id);
  }

  fetchData(id) {
    findOne(id)
      .then(beer => {
        this.setState({ beer });
        console.log(this.state.beer);
      })
      .catch(error => console.log(error));
  }
  render() {
    const beer = this.state.beer;
    return (
      <div>
        <NavBar />
        {beer && (
          <div className="beer__single">
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <small>{beer.first_brewed}</small>
            <br />
            <small>{beer.attenuation_level}</small>
            <p>{beer.description}</p>
            <small>{beer.contributed_by}</small>
          </div>
        )}
      </div>
    );
  }
}

export default Single;
