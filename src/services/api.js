const API_KEY = import.meta.env.VITE_API_KEY;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
  },
};
