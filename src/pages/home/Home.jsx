import { Box, Typography } from "@mui/material";
import InfiniteLoaderComponentContainer from "../../components/InfiniteLoaderComponent/InfiniteLoaderComponentContainer";
import styles from './Home.module.css';

const Home = ({theme}) => {
    return (
        <Box
            component={'main'}
            className={styles.main}
            sx={{
                backgroundColor: theme.palette.background.default
            }}
        >   
            <Typography
                variant="h3"
                color={theme.palette.font.main}
            >
                Movies
            </Typography>
            <Box
                component={'section'}
                className={styles.section}
            >
                <InfiniteLoaderComponentContainer/>
            </Box>
        </Box>
    );
};

export default Home;