import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LightModeIcon from '@mui/icons-material/LightMode';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Container, FormControlLabel, Grid, IconButton, Switch, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = ({theme, darkTheme, handleChange}) => {
    return (
        <Box 
            sx={{flexGrow: 1, backgroundColor: theme.palette.primary.main, color:theme.palette.font.light, py: 2, mt:'auto'}} 
            component='footer'
        >
            <Container maxWidth='xl'>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        md={9}
                        sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent:'space-around', my:2}}
                    >
                        <ul
                            className="footer__ul"
                        >
                            <li>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            color='secondary'
                                            checked={darkTheme}
                                            onChange={handleChange}
                                        />
                                    }
                                    label={
                                        darkTheme
                                            ? <LightModeIcon
                                                sx={{
                                                    color: theme.palette.font.light
                                                }}
                                            />
                                            : <DarkModeIcon
                                                sx={{
                                                    color: theme.palette.font.light
                                                }}
                                            />
                                    }
                                />
                            </li>
                        </ul>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{display: 'flex', alignItems: 'center', justifyContent:'space-around', my:2}}
                    >
                        <img src="https://placehold.co/100x120" alt="" />
                    </Grid>
                </Grid>
                <hr/>
                <Box
                    sx={{display: 'flex', alignItems: 'center', justifyContent:'center', my:2}}
                >
                    <Typography
                        component={'a'}
                        variant="caption"
                        href="mailto:rzeszutagustin@gmail.com"
                        color= {theme.palette.font.light}
                    >
                        rzeszutagustin@gmail.com
                    </Typography>
                    <Typography
                        sx={{mx:2}}
                    >
                        |
                    </Typography>
                    <Typography
                        component={'a'}
                        variant="caption"
                        href="http://paulo.ar"
                        target="_blank"
                        color= {theme.palette.font.light}
                    >
                        http://paulo.ar
                    </Typography>
                </Box>
                <Box
                    sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}
                >
                    <Typography
                        component={'a'}
                        variant="caption"
                        href="http://paulo.ar"
                        target="_blank"
                        color= {theme.palette.font.light}
                    >
                        Creado por Paulo Rzeszut
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;