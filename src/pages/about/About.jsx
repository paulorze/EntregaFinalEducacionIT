import { Box, Paper, Typography } from '@mui/material';
import styles from './About.module.css';

const About = ({theme}) => {
    return (
        <Box
            className={styles.main}
            component={'main'}
            sx={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <Typography
                variant="h3"
                color={theme.palette.font.main}
            >
                Sobre Esta Página
            </Typography>
            <Paper
                className={styles.section}
                component={'section'}
                sx={{
                    backgroundColor: theme.palette.primary.light,
                    marginY: 4
                }}
            >
                <Typography
                    variant='body1'
                    className={styles.texto}
                >
                    Esta página fue creada por Paulo Rzeszut como Proyecto Final para el Bootcamp Java de EducaciónIT - Centro Universitario Vicente López. La cátedra fue dictada por el docente <a href='https://github.com/krloss86z' target='_blank'>Carlos López</a>.
                </Typography>
                <Typography
                    variant='body1'
                    className={styles.texto}
                >
                    Los datos fueron obtenidos originalmente de la base de datos de <a href='https://www.imdb.com/' target='_blank' >la api de IMDB</a>. Todos los derechos sobre los mismos les corresponden a ellos.
                </Typography>
                <Typography
                    variant='body1'
                    className={styles.texto}
                >
                    El proyecto posee un FrontEnd creado con Vite + ReactJS, utilizando la librería <a href='https://mui.com/' target='_blank'>MUI</a> y hosteado en <a href='https://vercel.com/' target='_blank'>Vercel</a>. El backend está hecho con Java Spring y hosteado en <a href='' target='_blank'>aunnose</a>. La base de datos es de MySQL y se encuentra subida a <a href='https://www.freesqldatabase.com/' target='_blank'>FreeSQLdatabase</a>.
                </Typography>
                <Typography
                    variant='body1'
                    className={styles.texto}
                >
                    También cuenta con servicio de autenticación provisto por Google ^-^
                </Typography>
                <Typography
                    variant='body1'
                    className={styles.texto}
                >
                    Gracias por leerme :D
                </Typography>
            </Paper>
        </Box>
    );
};

export default About;