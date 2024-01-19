import { createGenreFromIMDB } from "../services/genres.service";
import { getGenresFromIMDB, getMoviesFromIMDB } from "../services/imdb.service";
import { createMovieFromIMDB } from "../services/movies.service";

export const createDatabase = async (jwt) => {
    const genresList = await getGenresFromIMDB();
    genresList.forEach(async (genre) => {
        await createGenreFromIMDB(jwt, genre);
    });

    for (let index = 1; index < 11; index++) {
        const res = await getMoviesFromIMDB(index);
        res.forEach(movie => {
            createMovieFromIMDB(jwt, movie);
        });
    }
};