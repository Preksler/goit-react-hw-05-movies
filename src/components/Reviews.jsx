import { useState, useEffect } from "react";
import { getReviews } from "../services/moviesApi";

const Reviews = ({ movieId }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getReviews(movieId).then(movie => setMovie(movie));
    }, [movieId]);

    if (!movie) {
        return;
    }

    return (
        <div>
            {movie.results.length > 0 ? (
                <ul>
                    {movie.results.map(review => (
                        <li key={review.id}>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                    <p>No reviews</p>
            )}
        </div>
    );
}
export default Reviews;