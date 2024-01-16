import React from 'react'
import MenuWidgetContainer from '../menuWidget/MenuWidgetContainer';
import { Drawer, MenuItem, Typography } from '@mui/material';
import SearchWidgetContainer from '../searchNavWidget/SearchWidgetContainer';
import { Link } from 'react-router-dom';
import ProfileWidgetContainer from '../profileWidget/ProfileWidgetContainer';

const NavbarDrawer = ({theme, anchorElNav, handleOpenNavMenu, handleCloseNavMenu, handleOpenUserMenu}) => {
    return (
        <>
            <MenuWidgetContainer
                handleOpen={handleOpenNavMenu}
            />
            <Drawer
            id="menu-appbar"
            anchorel={anchorElNav}
            anchororigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformorigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
                color: theme.palette.font.main
            }}
            >
                
                <SearchWidgetContainer/>
                <MenuItem onClick={handleCloseNavMenu} >
                    <Link
                        to={'/'}
                    >
                        <Typography textAlign="center"  color={theme.palette.font.main}>Inicio</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                        to={'/about'}
                    >
                        <Typography textAlign="center" color={theme.palette.font.main}>Conocenos</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <ProfileWidgetContainer handleOpen={handleOpenUserMenu} tag={true}/>
                </MenuItem>
            </Drawer>
        </>
    );
};

export default NavbarDrawer;