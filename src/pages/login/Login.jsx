import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, Paper, Typography } from "@mui/material";

const Login = ({theme, loginGoogle}) => {
    return (
        <main
            style={{
                padding: "2rem", backgroundColor: theme.palette.primary.light
            }}
        >
            <Paper
                sx={{p:4, backgroundColor: theme.palette.grey.main}}
            >
                <Typography
                    variant="h3"
                >
                    Iniciar Sesión
                </Typography>
                <Box
                    maxWidth={'400px'}
                    margin={'0 auto'}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{my:2}}
                        endIcon={<GoogleIcon/>}
                        onClick={loginGoogle}
                        fullWidth
                    >
                        Iniciar Sesión con Google
                    </Button>
                </Box>
            </Paper>
        </main>
    );
};

export default Login;