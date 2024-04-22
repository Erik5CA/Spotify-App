import { options } from "./api";

const toMinuteSecond = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  let seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export const searchTracks = async ({ albumId }) => {
  // console.log('searchAlbums')
  try {
    const urlTracks = `https://spotify-web2.p.rapidapi.com/album_tracks/?id=${albumId}&offset=0&limit=300`;
    const resonse = await fetch(urlTracks, options);
    const data = await resonse.json();
    console.log(data);
    const tracks = data.data.album.tracks.items;
    const newTracks = tracks.map((track) => ({
      idTrack: track.track.uri.split(":")[2],
      numberTrack: track.track.trackNumber,
      nameTrack: track.track.name,
      duration: toMinuteSecond(track.track.duration.totalMilliseconds),
      playcount: track.track.playcount,
      explicit: track.track.contentRating.label,
      artists: track.track.artists.items?.map((artist) => artist.profile.name),
    }));
    console.log(newTracks);
    return newTracks;
  } catch (error) {
    throw new Error("Error al buscar los albumes.");
  }
};
