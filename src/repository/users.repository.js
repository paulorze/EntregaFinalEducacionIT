import axios from "axios";

const url = import.meta.env.VITE_ENDPOINTURL_PROD

export const createUserRepository = async (user) => {
    try {
        await axios.post(`${url}/user/createUser`, user);
    } catch (e) {
        throw e;
    };
};;