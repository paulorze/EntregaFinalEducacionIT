import MovieIcon from '@mui/icons-material/Movie';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavbarDrawerContainer from './navbarDrawer/NavbarDrawerContainer';
import ProfileWidgetContainer from './profileWidget/ProfileWidgetContainer';
import SearchWidgetContainer from './searchNavWidget/SearchWidgetContainer';

const Navbar = ({anchorElNav, handleOpenNavMenu, handleCloseNavMenu, anchorElUser, handleOpenUserMenu, handleCloseUserMenu, theme, role, logout}) => {

    return (
        <AppBar position="sticky" maxwidth='xl' sx={{flexGrow: 1, backgroundColor: theme.palette.primary.main, color:theme.palette.font.light}}>
            <Toolbar>
                <Link
                    to={'/'}
                    >
                    <Box 
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-around', alignItems:'center'}}
                        color={theme.palette.font.light}
                    >
                        <MovieIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            className={styles.brandname}
                            fontFamily={'monospace'}
                        >
                            MOVIES
                        </Typography>
                    </Box>
                </Link>
                <Box 
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <NavbarDrawerContainer
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        handleOpenUserMenu={handleOpenUserMenu}
                    />
                </Box>
                <Box 
                    color={theme.palette.font.light}
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'flex', md: 'none' }, 
                        justifyContent:'space-around', 
                        alignItems:'center'
                    }}
                >
                    <Link
                        to={'/'}
                        id='logoHeader'
                        >
                            <Box 
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent:'space-around', alignItems:'center'}}
                                color={theme.palette.font.light}
                            >
                                <MovieIcon sx={{ mr: 1 }} />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    className={styles.brandname}
                                    fontFamily={'monospace'}
                                >
                                    MOVIES
                                </Typography>
                            </Box>
                    </Link>
                </Box>
                <Box 
                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around' }}
                >
                    <Link
                        to={'/'}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: theme.palette.font.light, display: 'block' }}
                        >
                            Inicio
                        </Button>
                    </Link>
                    <Link
                        to={'/about'}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: theme.palette.font.light, display: 'block' }}
                        >
                            Conocenos
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around', mr: 1 }}>
                    <SearchWidgetContainer/>
                </Box>
                <Box 
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                    <ProfileWidgetContainer handleOpen={handleOpenUserMenu}/>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                            {
                                (role !== undefined)
                                    ?
                                    <MenuItem onClick={()=>{
                                        handleCloseUserMenu();
                                        handleCloseNavMenu();
                                        logout();
                                    }}>
                                        <Typography 
                                            textAlign="center"
                                        >
                                            Cerrar Sesión
                                        </Typography>
                                    </MenuItem>  
                                    : <Link
                                        to='login'
                                    >
                                        <MenuItem onClick={()=>{
                                            handleCloseUserMenu();
                                            handleCloseNavMenu();
                                        }}>
                                            <Typography textAlign="center" color={theme.palette.font.main}>Iniciar Sesión</Typography>
                                        </MenuItem>
                                    </Link>
                            }
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;