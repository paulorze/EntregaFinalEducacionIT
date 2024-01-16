import { useTheme } from '@mui/material';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';

const FooterContainer = () => {
    const theme = useTheme();
    const darkTheme = useSelector(store=>store.theme);
    const dispatcher = useDispatch();
    const handleChange = () => {
        dispatcher(toggleTheme());
    };

    return (
        <Footer
            theme={theme}
            darkTheme={darkTheme}
            handleChange={handleChange}
        />
    );
};

export default FooterContainer;