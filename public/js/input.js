    const addSongFormHandler = async (event) => {
    event.preventDefault();
  
    const songTitle = document.querySelector('#title-input').value.trim();
    const songArtist = document.querySelector('#artist-input').value.trim();
    const songAlbum = document.querySelector('#album-input').value.trim();
    const songLink = document.querySelector('#link-input').value.trim();
    const genreNames = document.querySelector('#genre-names').value.trim();
  
    if (songTitle && songArtist && songAlbum && songLink) {
      const response = await fetch('/api/addSong', {
        method: 'POST',
        body: JSON.stringify({ title: songTitle, artist: songArtist, album: songAlbum, link: songLink, genre_id: genreNames }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add song.');
      }
    }
  };
  
  document
    .querySelector('.input-form')
    .addEventListener('submit', addSongFormHandler);