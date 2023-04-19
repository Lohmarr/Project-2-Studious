const { Song } = require('../models');

const songData = [
  {
    title: 'Music to Clean the House to',
    artist: 'Nick Leng',
    album: 'LEMONS',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/18HzHlxWPLoJjEXJdzNf4V?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Young Folks',
    artist: 'Peter Bjorn and John',
    album: `Writer's Block`,
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/4dyx5SzxPPaD8xQIid5Wjj?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; 
    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 5,
  },
  {
    title: 'Playing God',
    artist: 'Polyphia',
    album: 'Remember That You Will Die',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/3nBGFgfRQ8ujSmu5cGlZIU?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay;
    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Paranoid Android',
    artist: 'Radiohead',
    album: 'OK Computer',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/6LgJvl0Xdtc73RJ1mmpotq?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay;
    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Never Fight a Man with a Perm',
    artist: 'IDLES',
    album: 'Joy as an Act of Resistance',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/7BmWDAlFk1DCL60I435oaE?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'The Owl Song',
    artist: 'Of the Trees',
    album: 'The Owl Song',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/7CdcnX9m1wI8sIlQGLd0Un?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 7,
  },
  {
    title: 'Solo',
    artist: 'Samsa',
    album: 'Solo',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/0oinJU5psqs6JSRT1k9Wfz?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Mask Off',
    artist: 'Future',
    album: 'Future',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/0VgkVdmE4gld66l8iyGjgx?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Voodoo Child',
    artist: 'Jimi Hendrix',
    album: 'Electric Ladyland',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/2AxCeJ6PSsBYiTckM0HLY7?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: '1612',
    artist: 'Vulfpeck',
    album: 'Fugue State',
    embed: `<iframe style="border-radius:12px"
    src="https://open.spotify.com/embed/track/39rHfrVqCX6A55GF7uOZSC?utm_source=generator"
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 6,
  },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
