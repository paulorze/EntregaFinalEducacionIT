import { createMovieFromIMDBRepository, createMovieRepository, getMovieByIDRepository, getMoviesPaginatedRepository, getMoviesRepository, getMoviesSearchRepository, updateMovieRepository } from "../repository/movies.repository";

export const createMovieFromIMDB = async (token, movie) => {
    const movieDTO = {
        id : movie.id,
        adult: movie.adult,
        backdropPath: movie.backdrop_path,
        genreIds: movie.genre_ids,
        originalLanguage: movie.original_language,
        originalTitle: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        title: movie.title,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count
    }
    try {
        await createMovieFromIMDBRepository(token, movieDTO)
    } catch (e) {
        throw e;
    };
};

export const getMoviesSearch = async (param, page) => {
    try {
        const res = await getMoviesSearchRepository(param, page);
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const getMovies = async () => {
    try {
        const res = await getMoviesRepository();
        return res;
    } catch (e) {
        throw e;
    };
};

export const getMoviesPaginated = async (page)=> {
    try {
        const res = await getMoviesPaginatedRepository(page)
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const getMovieByID = async (id) => {
    try {
        const res = await getMovieByIDRepository(id);
        return res;
    } catch (e) {
        throw e;
    };
};

export const createMovie = async (movie, token) => {
    try {
        await createMovieRepository(movie, token);
    } catch (e) {
        throw e;
    };
};

export const updateMovie = async (movie, id, token) => {
    try {
        await updateMovieRepository(movie, id, token);
    } catch (e) {
        throw e;
    };
};


const template = async () => {
    try {

    } catch (e) {
        throw e;
    };
};