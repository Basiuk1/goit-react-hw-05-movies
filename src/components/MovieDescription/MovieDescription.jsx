import photo from './ops.jpg';
const MovieDescription = ({ details }) => {
  console.log(details);
  const releaseDate = new Date(details.release_date);
  return (
    <div>
      <div>
        <img
          src={
            details.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + details.poster_path
              : photo
          }
          alt={details.original_title}
          width={250}
          height={400}
        />
        <h2>
          {details.title}({releaseDate.getFullYear()})
        </h2>
        <h3>User score: {Math.round(details.vote_average * 10)}%</h3>
        <p>{details.overview}</p>
        <h3>Genres</h3>
        {details.genres
          ? details.genres.map(genre => genre.name + ' ')
          : 'Not information'}
      </div>
    </div>
  );
};

export default MovieDescription;
