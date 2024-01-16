import MovieCard from './MovieCard';
import { useTheme } from '@mui/material';

const MovieCardContainer = ({movie}) => {
    const theme = useTheme();
    return (
        <MovieCard
            movie={movie}
            theme={theme}
        />
    );
};

export default MovieCardContainer;