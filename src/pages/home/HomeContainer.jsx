import { useTheme } from '@mui/material';
import Home from './Home';

const HomeContainer = () => {
    const theme = useTheme();

    return (
        <Home
            theme={theme}
        />
    );
};

export default HomeContainer;