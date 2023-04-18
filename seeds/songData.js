const { Song } = require('../models');

const songData = [
  {
    title: 'Music to Clean the House to',
    artist: 'Nick Leng',
    album: 'LEMONS',
    link: '',
    genre_id: 5,
  },
  {
    title: 'Young Folks',
    artist: 'Peter Bjorn and John',
    album: `Writer's Block`,
    link: '',
    genre_id: 5,
  },
  {
    title: 'Playing God',
    artist: 'Polyphia',
    album: 'Remember That You Will Die',
    link: '',
    genre_id: 1,
  },
  {
    title: 'Paranoid Android',
    artist: 'Radiohead',
    album: 'OK Computer',
    link: '',
    genre_id: 1,
  },
  {
    title: 'Never Fight a Man with a Perm',
    artist: 'IDLES',
    album: 'Joy as an Act of Resistance',
    link: '',
    genre_id: 1,
  },
  {
    title: 'The Owl Song',
    artist: 'Of the Trees',
    album: 'The Owl Song',
    link: '',
    genre_id: 7,
  },
  {
    title: 'Solo',
    artist: 'Samsa',
    album: 'Solo',
    link: '',
    genre_id: 2,
  },
  {
    title: 'Mask Off',
    artist: 'Future',
    album: 'Future',
    link: '',
    genre_id: 2,
  },
  {
    title: 'Voodoo Child',
    artist: 'Jimi Hendrix',
    album: 'Electric Ladyland',
    link: '',
    genre_id: 1,
  },
  {
    title: '1612',
    artist: 'Vulfpeck',
    album: 'Fugue State',
    link: '',
    genre_id: 6,
  },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
