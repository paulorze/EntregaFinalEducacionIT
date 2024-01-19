import { hashSync } from "bcryptjs";
import { createUserRepository } from "../repository/users.repository";

export const createUser = async (user) => {
    const encriptedPass = hashSync(user.password, 10);
    const userDTO = {
        username : user.email, 
        password : encriptedPass
    }
    try {
        await createUserRepository(userDTO);
    } catch (e) {
        throw e;
    };
};