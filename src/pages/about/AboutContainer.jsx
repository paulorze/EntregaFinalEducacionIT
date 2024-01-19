import { useTheme } from '@mui/material';
import About from './About';
import { useEffect } from 'react';
import { createDatabase } from '../../utils/utils';
import { useSelector } from 'react-redux';

const AboutContainer = () => {
    const theme = useTheme();
    // const userData = useSelector(store=> store.userData);
    // const jwt = userData.jwt;

    // useEffect(()=> {
    //     createDatabase(jwt);
    // },[])
    
    return (
        <About
            theme={theme}
        />
    );
};

export default AboutContainer;