import axios from "axios";

const url = import.meta.env.VITE_ENDPOINTURL_PROD

export const getAuthenticationRepository = async (user) => {
    try {
        const res = await axios.post(`${url}/api/v1/auth`, user);
        return res;
    } catch (e) {
        throw e;
    };
};