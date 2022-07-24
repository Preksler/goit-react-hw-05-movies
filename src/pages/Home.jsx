import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from "services/moviesApi";

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendingMovies().then(movies => setMovies(movies));
    }
        , []);
    
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Home;