import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searcMovie } from '../services/moviesApi';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [searcParams, setSearchParams] = useSearchParams();
    const SearchName = searcParams.get('query') ?? "";

    useEffect(() => {
        if (!search) {
            return;
        }
        try {
            searcMovie(search).then(movies => setMovies(movies));
        } catch (error) {
            console.log(error);
        } finally {
            setSearch(search);
        }
    }, [search]);

     if (!movies) {
        return;
    }

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(SearchName);
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <SearchBox value={SearchName} onChange={updateQueryString} />
            </form>
            <MoviesList movies={movies} />
        </main>
    );
}
export default Movies;