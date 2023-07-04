import MovieList from 'components/MovieList/MovieList';
import Search from 'components/Search/Search';
import { fetchSearchMovie } from 'helpers/api';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    fetchSearchMovie(query)
      .then(res => setMovies(res))
      .catch(err => console.log(err));
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <Search onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
