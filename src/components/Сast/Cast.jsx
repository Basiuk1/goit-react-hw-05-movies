import { fetchCast } from 'helpers/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import photo from './poster.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    fetchCast(movieId)
      .then(res => {
        const castArr = res.cast;
        setCast([...castArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w300' + profile_path
                    : photo
                }
                width="80"
                height="120"
                alt={name}
              />
              <div>
                <p>{name}</p>
                {character && <p>Character: {character}</p>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
