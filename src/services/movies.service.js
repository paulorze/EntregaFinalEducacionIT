import { createMovieFromIMDBRepository, getMovieByIDRepository, getMoviesPaginatedRepository, getMoviesRepository } from "../repository/movies.repository";
import { getMoviesFromIMDB } from "./imdb.service";

export const createDatabase = async () => {
    const res1 = await getMoviesFromIMDB(1);
    res1.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res2 = await getMoviesFromIMDB(2);
    res2.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res3 = await getMoviesFromIMDB(3);
    res3.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res4 = await getMoviesFromIMDB(4);
    res4.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res5 = await getMoviesFromIMDB(5);
    res5.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res6 = await getMoviesFromIMDB(6);
    res6.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res7 = await getMoviesFromIMDB(7);
    res7.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res8 = await getMoviesFromIMDB(8);
    res8.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res9 = await getMoviesFromIMDB(9);
    res9.forEach(movie => {
        createMovieFromIMDB(movie);
    });
    const res10 = await getMoviesFromIMDB(10);
    res10.forEach(movie => {
        createMovieFromIMDB(movie);
    });
};

export const createMovieFromIMDB = async (movie) => {
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
        await createMovieFromIMDBRepository(movieDTO)
    } catch (e) {
        console.log(e);
        throw e;
    };
};

export const getMovies = async () => {
    try {
        const res = await getMoviesRepository();
        return res;
    } catch (e) {
        console.log(e)
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

const template = async () => {
    try {

    } catch (e) {
        throw e;
    };
};