import API_KEY from "../env";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
  },
};

export const searchTracks = async ({ albumId }) => {
  // console.log('searchAlbums')
  try {
    const urlTracks = `https://spotify-web2.p.rapidapi.com/album_tracks/?id=${albumId}&offset=0&limit=300`;
    const resonse = await fetch(urlTracks, options);
    const data = await resonse.json();
    const tracks = data.data.album.tracks.items;
    const newTracks = tracks.map((track) => ({
      idTrack: track.track.uri.split(":")[2],
      numberTrack: track.track.trackNumber,
      nameTrack: track.track.name,
    }));
    // console.log(newTracks);
    return newTracks;
  } catch (error) {
    throw new Error("Error al buscar los albumes.");
  }
};
