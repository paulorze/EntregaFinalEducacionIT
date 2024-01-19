import { Typography } from "@mui/material";
import MovieCardContainer from "../MovieCard/MovieCardContainer";
import MoviesSkeletonContainer from "../MoviesSkeleton/MoviesSkeletonContainer";



const InfiniteLoaderComponent = ({theme, search, moviesList, loading, lastBookElementRef}) => {
    return (
        <>
            {
                (search && moviesList.length === 0)
                    && <Typography
                        variant="h6"
                        color={theme.palette.font.main}
                    >
                        No hay resultados para tu búsqueda :(
                    </Typography>
            }
            {moviesList.map((movie, index) => (
                (moviesList.length === index + 1)
                    ? <div
                        ref={lastBookElementRef}
                        key={movie.id}
                    >
                        <MovieCardContainer
                            movie={movie}
                        />
                    </div>
                    : <MovieCardContainer
                        key={movie.id}
                        movie={movie}
                    />
            ))}
            {
                loading
                    && <MoviesSkeletonContainer/>
            }
        </>
    );
};

export default InfiniteLoaderComponent;