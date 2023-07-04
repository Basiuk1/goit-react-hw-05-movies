import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjIxZmE3ZjQyN2Y0ZTQ5MzIyNjYyZjYzNDE1YmZiYiIsInN1YiI6IjY0OWIwOTJmMjk3NWNhMDE0NGNkMjg1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUsAPv7g2_7qGtsu8oHdaiiaYd4oXVaKZLPYQa1UBFU',
  },
};

async function fetchMovies() {
  const response = await axios.get(`/trending/all/day?language=en-US`, options);
  return response.data.results;
}

async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function fetchSearchMovie(query) {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data.results;
}

async function fetchCast(id, params) {
  const response = await axios.get(
    `/movie/${id}/credits?language=en-US`,
    options
  );
  return response.data;
}

async function fetchReviews(id, params) {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US`,
    options
  );
  return response.data;
}

export {
  fetchMovieDetails,
  fetchSearchMovie,
  fetchMovies,
  fetchCast,
  fetchReviews,
};
