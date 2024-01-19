import { useTheme } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { getAuthentication } from '../../services/authentication.service';
import { createUser } from '../../services/user.services';
import Login from './Login';
import { setAdmin } from '../../redux/adminSlice';

const LoginContainer = () => {
    const theme = useTheme();
    const dispatcher = useDispatch();

    const loginGoogle = async (res) => {
        try {
            const data = jwtDecode(res.credential);
            let newUserData = {email: data.email, img: data.picture, password: data.sub}
            await createUser(newUserData);
            const jwt = await getAuthentication(newUserData);
            const decodedJwt = jwtDecode(jwt);
            newUserData = {...newUserData, jwt: jwt, role: decodedJwt.authorities};
            dispatcher(setUser(newUserData));
            if (newUserData.role.includes("ROLE_ADMIN")) {
                dispatcher(setAdmin());
            };
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Login
            theme = {theme}
            loginGoogle = {loginGoogle}
        />
    );
};

export default LoginContainer;