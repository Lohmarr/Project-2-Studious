const { Genre } = require('../models');

const genreData = [
  {
    name: 'Rock',
  },
  {
    name: 'Rap',
  },
  {
    name: 'Country',
  },
  {
    name: 'Pop',
  },
  {
    name: 'Indie'
  }
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
