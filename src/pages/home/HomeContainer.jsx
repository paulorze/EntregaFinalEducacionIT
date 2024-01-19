import { useTheme } from '@mui/material';
import Home from './Home';
import { useEffect } from 'react';

const HomeContainer = () => {
    const theme = useTheme();
    useEffect(()=> {

    }, [])
    return (
        <Home
            theme={theme}
        />
    );
};

export default HomeContainer;