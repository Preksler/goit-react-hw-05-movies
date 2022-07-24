import { useState, useEffect } from "react";
import { getReviews } from "../../services/moviesApi";
import { Container, AutorName, AutorContent, NoReviews } from "./Reviews.styled";

const Reviews = ({ movieId }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        try {
            getReviews(movieId).then(movie => setMovie(movie));
        } catch (error) {
            console.log(error);
        }
    }, [movieId]);

    if (!movie) {
        return;
    }

    return (
        <Container>
            {movie.results.length > 0 ? (
            <>
                {movie.results.map(review => (
                    <div key={review.id}>
                        <AutorName>{review.author}</AutorName>
                        <AutorContent>{review.content}</AutorContent>
                    </div>
                ))}
            </>
            ) : (
                    <NoReviews>No reviews :(</NoReviews>
            )}
        </Container>
    );
}
export default Reviews;