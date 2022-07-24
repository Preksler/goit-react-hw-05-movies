import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import { BackLink } from '../components/BackLink';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    getMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);
  
  return (
    <div>
      {movie && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>
            <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
            <span>User Score: {Math.round((movie.vote_average) * 10)}% </span>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Ganres</p>
            <p>{movie.genres.map(genre => (genre.name + ' '))}</p>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
        </div>
        </>
      )}
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}
export default MovieInfo;