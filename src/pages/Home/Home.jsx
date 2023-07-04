import MovieList from 'components/MovieList/MovieList';
import { fetchMovies } from 'helpers/api';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(res => setMovies(res));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
