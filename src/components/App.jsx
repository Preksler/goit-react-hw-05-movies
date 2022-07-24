import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieInfo from '../pages/MovieInfo';
import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
