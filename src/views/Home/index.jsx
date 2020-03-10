import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <header className="home__header">
      <Link to="/beers">All beers</Link>
      <Link to="/random-beer">Random beer</Link>
      <Link to="/new-beer">Add new beer</Link>
    </header>
  );
}

export default Home;
