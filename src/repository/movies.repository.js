import axios from "axios";

const user = import.meta.env.VITE_JAVAUSER;
const pass = import.meta.env.VITE_JAVAPASS;


export const createMovieFromIMDBRepository = async (movie) => {
    try {
        await axios.post(
            'https://movies-java.rj.r.appspot.com/movies',
            movie, 
            {
                auth: {
                    username: user,
                    password: pass
                }
            }
        )
    } catch (e) {
        console.log(e)
        throw e;
    };
};

export const getMoviesRepository = async () => {
    try {
        const res = await axios.get('https://movies-java.rj.r.appspot.com//movies/all', {
            auth: {
                username: user,
                password: pass
            }
        });
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const getMoviesPaginatedRepository = async (page) => {
    try {
        const res = await axios.get(`https://movies-java.rj.r.appspot.com/movies/paginated?page=${page}`, {
            auth: {
                username: user,
                password: pass
            }
        });
        return res;
    } catch (e) {
        throw e;
    };
};

export const getMovieByIDRepository = async (id) => {
    try {
        const res = await axios.get(`https://movies-java.rj.r.appspot.com/movies/${id}`, {
            auth: {
                username: user,
                password: pass
            }
        });
        return res.data;
    } catch (e) {
        throw e;
    };
};