import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getTrendingMovies().then(movies => setMovies(movies));
    }, []);
    
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location}} >
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Home;