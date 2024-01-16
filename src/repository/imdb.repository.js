import axios from "axios";

export const getMoviesFromIMDBRepository = async (page) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_IMDBKEY}&page=${page}`);
        return res.data.results;
    } catch (e) {
        throw e;
    };
};