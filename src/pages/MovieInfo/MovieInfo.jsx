import { useEffect, useState } from 'react';
import { useParams, Routes, Route, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews';
import { BackLink } from '../../components/BackLink';
import {
  Container,
  MovieImage,
  MovieName,
  MovieDescription,
  MovieText,
  Wrapper,
  AdditionalList,
  AdditionalText,
  AdditionalLink
} from '../MovieInfo/MovieInfo.styled';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    getMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);
  
  return (
    <main>
      {movie && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <div>
            <Container>
              <div>
                <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="300" />
              </div>
              <div>
                <MovieName>{movie.title} ({new Date(movie.release_date).getFullYear()})</MovieName>
                <MovieText>User Score: {Math.round((movie.vote_average) * 10)}% </MovieText>
                <MovieText>Overview</MovieText>
                <MovieDescription>{movie.overview}</MovieDescription>
                <MovieText>Ganres</MovieText>
                <MovieDescription>{movie.genres.map(genre => (genre.name + ' '))}</MovieDescription>
              </div>
            </Container>
            <Wrapper>
              <AdditionalText>Additional information</AdditionalText>
              <AdditionalList>
                <li>
                  <AdditionalLink to="cast">Cast</AdditionalLink>
                </li>
                <li>
                  <AdditionalLink to="reviews">Reviews</AdditionalLink>
                </li>
              </AdditionalList>
            </Wrapper>
        </div>
        </>
      )}
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </main>
  );
}
export default MovieInfo;