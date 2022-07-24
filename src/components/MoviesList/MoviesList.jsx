import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieImage, MovieName } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
            {movies.map(movie => (
                <CardWrapper key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location}}>
                        <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="200" />
                        <MovieName>{movie.title}</MovieName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    );
};