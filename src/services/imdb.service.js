import { getGenresFromIMDBRepository, getMoviesFromIMDBRepository } from "../repository/imdb.repository";

export const getMoviesFromIMDB = async (page) => {
    try {
        const res = await getMoviesFromIMDBRepository(page);
        return res;
    } catch (e) {
        throw e;
    };
};

export const getGenresFromIMDB = async () => {
    try {
        const res = await getGenresFromIMDBRepository();
        return res;
    } catch (e) {
        throw e;
    };
};