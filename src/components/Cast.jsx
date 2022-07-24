import { useState, useEffect } from "react";
import { getCredits } from "../services/moviesApi";

const Cast = ({ movieId }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getCredits(movieId).then(movie => setMovie(movie));
    }, [movieId]);

    return (
        <div>
            {movie && (
                <div>
                    {movie.cast.map(cast => (
                        <div key={cast.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} />
                            <h3>{cast.name}</h3>
                            <p>{cast.character}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Cast;