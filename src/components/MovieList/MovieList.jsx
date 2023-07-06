import { Link, useLocation } from 'react-router-dom';
import {
  MoviesList,
  MoviesItem,
  Poster,
  MoviesTitle,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(({ id, title, name, original_title, poster_path }) => {
        return (
          <MoviesItem>
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <MoviesTitle>{title || name}</MoviesTitle>
              <Poster
                src={'https://image.tmdb.org/t/p/w500' + poster_path}
                alt={original_title}
                width={250}
                height={300}
              />
            </Link>
          </MoviesItem>
        );
      })}
    </MoviesList>
  );
};

export default MovieList;
