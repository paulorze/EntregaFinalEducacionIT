import { createGenreFromIMDBRepository } from "../repository/genres.repository";

export const createGenreFromIMDB = async (jwt, genre) => {
    const genreDTO = {
        id: genre.id,
        name: genre.name
    }
    try {
        await createGenreFromIMDBRepository(jwt, genreDTO);
    } catch (e) {
        throw e;
    };
};