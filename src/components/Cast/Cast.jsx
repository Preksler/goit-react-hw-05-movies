import { useState, useEffect } from "react";
import { getCredits } from "../../services/moviesApi";
import { Container, CastWrapper, CastImage, CastName, CastCharacter } from "./Cast.styled";

const Cast = ({ movieId }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getCredits(movieId).then(movie => setMovie(movie));
    }, [movieId]);

    return (
        <Container>
            {movie && (
                <>
                    {movie.cast.map(cast => (
                        <CastWrapper key={cast.id}>
                            <CastImage src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} />
                            <CastName>{cast.name}</CastName>
                            {cast.character ? <CastCharacter>{cast.character}</CastCharacter> : <CastCharacter>"No character"</CastCharacter>}
                        </CastWrapper>
                    ))}
                </>
            )}
        </Container>
    );
}
export default Cast;