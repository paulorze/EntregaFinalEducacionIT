import { Alert, Button, CircularProgress, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Snackbar, TextField } from '@mui/material';
import Radio from "@mui/material/Radio";

const UpdateMovie = ({openModal, handleCloseModal, movie, loading, handleSubmit, handleChange, errors, openAlert, handleCloseAlert}) => {
    return (
        <>
            <Dialog
                open={openModal}
            >
                <DialogTitle>{movie ? `Actualizar ${movie.title}` : 'Crear Nueva Película'}</DialogTitle>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        maxWidth: '500px',
                        margin: 20,
                        padding: 8
                    }}
                >
                    <Grid
                        container
                    >
                        <Grid
                            item
                            xs={12}
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <TextField
                                label="Overview de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.overview ? true : false}
                                helperText = {errors.overview}
                                type= {'text'}
                                name= 'overview'
                                placeholder= {'Ingrese el Overview de la Película'} 
                                required
                                onChange={handleChange}
                                defaultValue={movie ? movie.overview : null}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <TextField
                                label="Popularidad de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.popularity ? true : false}
                                helperText = {errors.popularity}
                                type= {'text'}
                                name= 'popularity'
                                placeholder= {'Ingrese la Popularidad de la Película'} 
                                required
                                onChange={handleChange}
                                defaultValue={movie ? movie.popularity : null}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <TextField
                                label="PosterPath de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.posterPath ? true : false}
                                helperText = {errors.posterPath}
                                type= {'text'}
                                name= 'posterPath'
                                placeholder= {'Ingrese el PosterPath de la Película'} 
                                required
                                onChange={handleChange}
                                defaultValue={movie ? movie.posterPath : null}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <TextField
                                label="VoteAverage de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.voteAverage ? true : false}
                                helperText = {errors.voteAverage}
                                type= {'text'}
                                name= 'voteAverage'
                                placeholder= {'Ingrese el VoteAverage de la Película'} 
                                required
                                onChange={handleChange}
                                defaultValue={movie ? movie.voteAverage : null}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            <TextField
                                label="VoteCount de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.voteCount ? true : false}
                                helperText = {errors.voteCount}
                                type= {'text'}
                                name= 'voteCount'
                                placeholder= {'Ingrese el VoteCount de la Película'} 
                                required
                                onChange={handleChange}
                                defaultValue={movie ? movie.voteCount : null}
                            />
                        </Grid>
                        <Grid
                                item
                                xs={12}
                                style={{
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'space-around',
                                    flexWrap:'wrap'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="success"
                                    type="submit"
                                    sx={{
                                        my:1
                                    }}
                                    endIcon={loading ? <CircularProgress size={24} color='inherit'/> : null}
                                >
                                    {movie !== null ? "Actualizar Pelicula" : "Agregar Pelicula"}
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    color="secondary"
                                    type="button"
                                    onClick={handleCloseModal}
                                    sx={{
                                        my:1
                                    }}
                                >
                                    Cancelar
                                </Button>
                            </Grid>
                    </Grid>
                </form>
            </Dialog>
            <Snackbar
                open={openAlert}
                autoHideDuration={2000}
                onClose={handleCloseAlert}
            >
                <Alert
                    severity='success'
                >
                    {movie !== null ? "¡La pelicula fue actualizada exitosamente!" : "¡La pelicula fue agregada exitosamente!" }
                </Alert>
            </Snackbar>
        </>
    );
}

export default UpdateMovie