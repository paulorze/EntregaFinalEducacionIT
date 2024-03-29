import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import MovieDetailSkeletonContainer from '../../components/MovieDetailSkeleton/MovieDetailSkeletonContainer';
import UpdateMovieContainer from '../../components/updateMovie/UpdateMovieContainer';
import styles from './MovieDetail.module.css';
const MovieDetail = ({theme, loading, movie, label, admin, openModal, handleOpenModal, handleCloseModal}) => {
    return (
        <>
            {
                loading
                    ? <MovieDetailSkeletonContainer
                        theme={theme}
                    />
                    : <Box
                        component={'main'}
                        className={styles.main}
                        sx={{
                            backgroundColor: theme.palette.background.default
                        }}
                    >
                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                md={10}
                            >
                                <Typography
                                    variant="h3"
                                    color={theme.palette.font.main}
                                >
                                    {movie.title}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                md={2}
                            >
                                {
                                    admin
                                        && <Button
                                            color='secondary'
                                            variant='contained'
                                            onClick={handleOpenModal}
                                        >
                                            Actualizar Datos
                                        </Button>
                                }
                            </Grid>
                        </Grid>
                        <Box
                            className={styles.rating}
                        >
                            <Rating 
                                readOnly 
                                value={movie.voteAverage} 
                                max={10}
                            />
                            <Box 
                                sx={{ 
                                    ml: 2
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color= {theme.palette.font.main}
                                >
                                    {label}
                                </Typography>
                            </Box>
                        </Box>
                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs={12}
                                md={4}
                                className={styles.grid}
                            >
                                <Box
                                    className={styles.imgContainer}
                                    component={'a'}
                                    href={movie.homepage}
                                >
                                    <img src={'https://image.tmdb.org/t/p/w500'+movie.posterPath} alt={movie.title} />
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={8}
                            >
                                <Grid
                                    container
                                    p={1}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                    >
                                        <Typography
                                            variant='h6'
                                            color={theme.palette.font.main}
                                        >
                                            Géneros:
                                        </Typography>
                                        <ul>
                                            {
                                                movie.genres.map(genre=> (
                                                    <li
                                                        key={genre.id}
                                                        className={styles.li}
                                                    >
                                                        <Typography
                                                            variant='body1'
                                                            color={theme.palette.font.main}
                                                        >
                                                            {genre.name}
                                                        </Typography>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <Typography
                                            variant='h6'
                                            color={theme.palette.font.main}
                                            className={styles.datos}
                                        >
                                            Idioma Original:&nbsp;&nbsp;
                                            &nbsp;&nbsp;
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            color={theme.palette.font.main}
                                            className={styles.datos}
                                        >
                                            {movie.originalLanguage}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                    >
                                        <Grid
                                            container
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <Typography
                                                    variant='h6'
                                                    color={theme.palette.font.main}
                                                    className={styles.datos}
                                                >
                                                    Fecha de Salida:&nbsp;&nbsp;
                                                    &nbsp;&nbsp;
                                                </Typography>
                                                <Typography
                                                    variant='body1'
                                                    color={theme.palette.font.main}
                                                    className={styles.datos}
                                                >
                                                    {movie.releaseDate}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <Typography
                                                    variant='h6'
                                                    color={theme.palette.font.main}
                                                    className={styles.datos}
                                                >
                                                    Popularidad:&nbsp;&nbsp;
                                                    &nbsp;&nbsp;
                                                </Typography>
                                                <Typography
                                                    variant='body1'
                                                    color={theme.palette.font.main}
                                                    className={styles.datos}
                                                >
                                                    {movie.popularity}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <Typography
                                                    variant='h6'
                                                    color={theme.palette.font.main}
                                                    className={styles.datos}
                                                >
                                                    Cantidad de Votos:&nbsp;&nbsp;
                                                    &nbsp;&nbsp;
                                                </Typography>
                                                <Typography
                                                    variant='body1'
                                                    color={theme.palette.font.main}
                                                    className={styles.datos}
                                                >
                                                    {movie.voteCount}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    p={1}
                                    my={3}
                                >
                                    <Typography
                                        variant='h6'
                                        color={theme.palette.font.main}
                                    >
                                        Descripción:
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        color={theme.palette.font.main}
                                    >
                                        {movie.overview}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <UpdateMovieContainer
                            openModal={openModal}
                            handleCloseModal={handleCloseModal}
                            movie={movie}
                        />
                    </Box>
            }
        </>
    );
};

export default MovieDetail;