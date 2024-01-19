import { Alert, Button, CircularProgress, Dialog, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Snackbar, TextField } from '@mui/material';
import Radio from "@mui/material/Radio";


const CreateMovie = ({openModal, handleCloseModal, loading, handleSubmit, handleChange, errors, openAlert, handleCloseAlert}) => {
    return (
        <>
            <Dialog
                open={openModal}
            >
                <DialogTitle>Crear Nueva Película</DialogTitle>
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
                            <FormControl>
                                <FormLabel>
                                    Película para Adultos
                                </FormLabel>
                                <RadioGroup
                                    label="Película para Adultos"
                                    color="secondary"
                                    name="adult"
                                    defaultValue={false}
                                    required
                                    onChange={handleChange}
                                    style={{
                                        paddingLeft: 40
                                    }}
                                >
                                    <FormControlLabel value={false} control={<Radio />} label={"No"}/>
                                    <FormControlLabel value={true} control={<Radio />} label={"Si"}/>
                                </RadioGroup>
                            </FormControl>
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
                                label="BackdropPath de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.backdropPath ? true : false}
                                helperText = {errors.backdropPath}
                                type= {'text'}
                                name= 'backdropPath'
                                placeholder= {'Ingrese el BackdropPath de la Película'} 
                                required
                                onChange={handleChange}
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
                                label="Géneros de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.genreIds ? true : false}
                                helperText = {errors.genreIds}
                                type= {'text'}
                                name= 'genreIds'
                                placeholder= {'Ingrese el Géneros de la Película'} 
                                required
                                onChange={handleChange}
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
                                label="Idioma Original de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.originalLanguage ? true : false}
                                helperText = {errors.originalLanguage}
                                type= {'text'}
                                name= 'originalLanguage'
                                placeholder= {'Ingrese el Idioma Original de la Película'} 
                                required
                                onChange={handleChange}
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
                                label="ReleaseDate de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.releaseDate ? true : false}
                                helperText = {errors.releaseDate}
                                type= {'text'}
                                name= 'releaseDate'
                                placeholder= {'Ingrese el ReleaseDate de la Película'} 
                                required
                                onChange={handleChange}
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
                                label="Título de la Película"
                                variant="standard"
                                fullWidth
                                sx={{my: 3, maxWidth: '30rem'}}
                                color="secondary"
                                error={errors.title ? true : false}
                                helperText = {errors.title}
                                type= {'text'}
                                name= 'title'
                                placeholder= {'Ingrese el Título de la Película'} 
                                required
                                onChange={handleChange}
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
                            <FormControl>
                                <FormLabel>
                                    Video de la Película
                                </FormLabel>
                                <RadioGroup
                                    label="Video de la Película"
                                    color="secondary"
                                    name="video"
                                    required
                                    onChange={handleChange}
                                    style={{
                                        paddingLeft: 40
                                    }}
                                >
                                    <FormControlLabel value={false} control={<Radio />} label={"No"}/>
                                    <FormControlLabel value={true} control={<Radio />} label={"Si"}/>
                                </RadioGroup>
                            </FormControl>
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
                                    Agregar Pelicula
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
                    ¡La pelicula fue agregada exitosamente!
                </Alert>
            </Snackbar>
        </>
    );
};

export default CreateMovie;