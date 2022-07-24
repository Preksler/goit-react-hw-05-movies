import { useState, useEffect } from "react";
import { getCredits } from "../../services/moviesApi";
import { Container, CastWrapper, CastImage, CastName, CastCharacter } from "./Cast.styled";
import NoPhoto from "../../images/no-photo.jpg";

const Cast = ({ movieId }) => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        try {
            getCredits(movieId).then(movie => setMovie(movie));
        } catch (error) {
            console.log(error);
        }
    }, [movieId]);

    if (!movie) {
        return;
    }

    return (
        <Container>
            {movie && (
                <>
                    {movie.cast.map(cast => (
                        <CastWrapper key={cast.id}>
                            {cast.profile_path ? <CastImage src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} /> : <CastImage src={NoPhoto} alt={cast.name} />}
                            <CastName>{cast.name}</CastName>
                            {cast.character ? <CastCharacter>{cast.character}</CastCharacter> : <CastCharacter>No character</CastCharacter>}
                        </CastWrapper>
                    ))}
                </>
            )}
        </Container>
    );
}
export default Cast;