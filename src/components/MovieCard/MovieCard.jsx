import { Box, Typography } from "@mui/material";
import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";

const MovieCard = ({movie, theme}) => {
    return (
        <Box
            className={styles.card}
            sx={{
                borderColor: theme.palette.primary.main
            }}
        >
            <Link
                to={`/movie/${movie.id}`}
            >        
                <div
                    className={styles.imgContainer}
                >
                    <img src={'https://image.tmdb.org/t/p/w500'+movie.posterPath} alt={movie.title} className={styles.img}/>
                </div>
                <div
                    className={styles.titleContainer}
                >
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        color={theme.palette.font.main}
                    >
                        {movie.title}
                    </Typography>
                </div>
            </Link>
        </Box>
    );
};

export default MovieCard;