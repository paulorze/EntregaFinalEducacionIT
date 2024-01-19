import axios from "axios";

const url = import.meta.env.VITE_ENDPOINTURL_PROD

export const createMovieFromIMDBRepository = async (token, movie) => {
    try {
        await axios.post(
            `${url}/movies`,
            movie, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    } catch (e) {
        console.log(e)
        throw e;
    };
};

export const getMoviesSearchRepository = async (param, page) => {
    try {
        const res = await axios.get(`${url}/movies/search?title=${param}&page=${page}`);
        return res;
    } catch (e) {
        throw e;
    };
};

export const getMoviesRepository = async () => {
    try {
        const res = await axios.get(`${url}/movies/all`);
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const getMoviesPaginatedRepository = async (page) => {
    try {
        const res = await axios.get(`${url}/movies/paginated?page=${page}`);
        return res;
    } catch (e) {
        throw e;
    };
};

export const getMovieByIDRepository = async (id) => {
    try {
        const res = await axios.get(`${url}/movies/${id}`);
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const createMovieRepository = async (movie, token) => {
    try {
        await axios.post(
            `${url}/movies`,
            movie,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    } catch (e) {
        throw e;
    };
};

export const updateMovieRepository = async (movie, id, token) => {
    try {
        await axios.put(
            `${url}/movies/${id}`,
            movie,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    } catch (e) {
        throw e;
    };
};