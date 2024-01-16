import { getMoviesFromIMDBRepository } from "../repository/imdb.repository";

export const getMoviesFromIMDB = async (page) => {
    try {
        const res = await getMoviesFromIMDBRepository(page);
        return res;
    } catch (e) {
        throw e;
    };
};