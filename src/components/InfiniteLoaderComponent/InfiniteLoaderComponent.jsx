import MovieCardContainer from "../MovieCard/MovieCardContainer";
import MoviesSkeletonContainer from "../MoviesSkeleton/MoviesSkeletonContainer";



const InfiniteLoaderComponent = ({moviesList, loading, lastBookElementRef}) => {
    return (
        <>
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