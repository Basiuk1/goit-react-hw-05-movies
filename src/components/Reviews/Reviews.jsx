import { fetchReviews } from 'helpers/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    fetchReviews(movieId)
      .then(res => {
        const reviewsArr = res.results;
        setReview([...reviewsArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <div>Wie don't have any reviews for this movie</div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
