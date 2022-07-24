import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";
import { Container, CardWrapper, MovieImage, MovieName } from './Home.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTrendingMovies().then(movies => setMovies(movies));
    }, []);
    
    return (
        <Container>
            {movies.map(movie => (
                <CardWrapper key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }} >
                        <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="200" />
                        <MovieName>{movie.title}</MovieName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    );
}
export default Home;