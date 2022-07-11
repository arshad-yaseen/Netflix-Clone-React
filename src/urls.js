import { API_KEY } from "./components/constants/constants";
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const MostPopular = `https://api.themoviedb.org/3/discover/movie?${API_KEY}sort_by=popularity.desc`;
