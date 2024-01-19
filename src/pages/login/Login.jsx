import { Box, Paper, Typography } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';

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
                    <GoogleLogin
                        onSuccess={res => {
                            loginGoogle(res);
                        }}
                        onError={e => {
                            console.log(e)
                        }}
                    />
                </Box>
            </Paper>
        </main>
    );
};

export default Login;