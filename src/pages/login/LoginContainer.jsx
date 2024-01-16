import { useTheme } from '@mui/material';
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import Login from './Login';

const LoginContainer = () => {
    const theme = useTheme();
    const [ googleAuth, setGoogleAuth ] = useState(undefined);
    const userData = useSelector(store=>store.userData);
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    console.log(userData)

    const loginGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => {setGoogleAuth(data => codeResponse)},
        onError: (error) => console.log('Login Failed:', error)
    });
    
    // useEffect(()=> {
    //     if (userData !== null)  {
    //         navigate('/')
    //     };
    // }, [userData]);

    return (
        <Login
            theme = {theme}
            loginGoogle = {loginGoogle}
        />
    );
};

export default LoginContainer;