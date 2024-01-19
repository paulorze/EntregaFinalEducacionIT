import { getAuthenticationRepository } from "../repository/authentication.repository";

export const getAuthentication = async (user) => {
    const userDTO = {
        username : user.email, 
        password : user.password
    }
    try {
        const res = await getAuthenticationRepository(userDTO);
        return res.data;
    } catch (e) {
        throw e;
    };
};