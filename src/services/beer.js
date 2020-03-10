import axios from 'axios';

const instance = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' });

const listAll = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/')
      .then(result => {
        const beers = result;
        resolve(beers.data);
      })
      .catch(reject);
  });

const findOne = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then(result => {
        const beer = result;
        resolve(beer.data);
      })
      .catch(reject);
  });

export { listAll, findOne };
