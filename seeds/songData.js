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
  {
    title: 'Can We Forget',
    artist: 'ALEXSUCKS',
    album: 'Can We Forget',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/07yilZPUJuVK5HpqObUhWG?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Guillotine',
    artist: 'Stray from the Path',
    album: 'Euthanasia',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0Qv6SQFLzg3KGBlOgOEBJK?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Writing on the Walls',
    artist: 'Underoath',
    album: 'Define the Great Line',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/313yF0VXTCmFFoYEJF7nBQ?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Dead of Night',
    artist: 'Orville Peck',
    album: 'Pony',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/08unC8N1V1dEcqiyi06g6W?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Ring of Fire',
    artist: 'Johnny Cash',
    album: 'Ring of Fire: The Best of Johnny Cash',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6YffUZJ2R06kyxyK6onezL?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'I Think I ll Just Stay Here and Drink',
    artist: 'Merle Haggard',
    album: 'Okie From Muskogee',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6DmyknyzXRbIKZe3ySDA6Y?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Line of Sight',
    artist: 'Plains, Waxahatchee, Jess Williamson',
    album: 'I Walked With You A Ways',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3UfL31RXO1IWc2MGrpAmsc?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Way of the Triune God - Hallelujah Version',
    artist: 'Tyler Childers',
    album: 'Can I Take My Hounds to Heaven?',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/2BJy4svtrGACqRB5BFLOK6?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Magpie to the Morning',
    artist: 'Neko Case',
    album: 'Middle Cyclone',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6cQ7VLo6BKW5JhhzhkiKkB?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'All the Good Times',
    artist: 'Angel Olsen',
    album: 'Big Time',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/6Tv21RLLA1Dt6OtPNz8QDq?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'I Am Not Afraid',
    artist: 'Charley Crockett',
    album: 'In the Night',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5pD6DyYeglUby2x5CXrqfA?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 3,
  },
  {
    title: 'Cicatriz Esp',
    artist: 'The Mars Volta',
    album: 'Deloused in the Comatorium',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3I7gJOfTamHWpDfbwQUO6T?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'The Fever (Aye Aye)',
    artist: 'Death Grips',
    album: 'The Money Store',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5lq6hpsabgw22xRYPHVV5c?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 1,
  },
  {
    title: 'Much More',
    artist: 'De La Soul',
    album: 'The Grind Date',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/5zEP0MRnDe5qwL361xBz0B?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: '4EVA (feat Pharrell Williams',
    artist: 'KAYTRAMINE, Amine, Kaytranada, Pharrell Williams',
    album: 'KAYTRAMINE',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/3CblJq8QQQ0bb7vwJu8c3v?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Ready When You Are',
    artist: 'Planet Giza, Mick Jenkins',
    album: 'Ready When You Are',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0965uWewv2fb21pL7dt3oR?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Poland',
    artist: 'Lil Yachty',
    album: 'Poland',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/74loibzxXRL875X20kenvk?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Rammellzee & Shockdell at the Amphitheater',
    artist: 'Rammellzee & Shockdell',
    album: 'Wild Style (Original Motion Picture Soundtrack - 25th Anniversary Edition)',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/789WfeOhEMTUFlobwMTRKo?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
  {
    title: 'Lightworks',
    artist: 'J Dilla',
    album: 'Donuts',
    embed: `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/0TIItu69NmCbgvJUD0Zbnb?utm_source=generator" 
    width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
    encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    genre_id: 2,
  },
];


const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
