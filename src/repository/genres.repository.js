import axios from "axios";

const url = import.meta.env.VITE_ENDPOINTURL_PROD

export const createGenreFromIMDBRepository = async (token, genre) => {
    try {
        await axios.post(
            `${url}/genres`,
            genre, 
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