import MovieDescription from 'components/MovieDescription/MovieDescription';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { fetchMovieDetails } from 'helpers/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(res => setDetails(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <button>
        <Link to={backLinkLocationRef.current}>Go back</Link>
      </button>
      <MovieDescription details={details} />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MovieDetails;
