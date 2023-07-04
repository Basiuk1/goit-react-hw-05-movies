import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, title, name }) => {
        return (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <h3>{title || name}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
