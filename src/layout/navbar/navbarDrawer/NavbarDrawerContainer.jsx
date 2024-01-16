import { useTheme } from '@mui/material';
import NavbarDrawer from './NavbarDrawer';

const NavbarDrawerContainer = ({anchorElNav, handleOpenNavMenu, handleCloseNavMenu, handleOpenUserMenu}) => {
    const theme = useTheme();

    return (
        <NavbarDrawer
            theme={theme}
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenUserMenu={handleOpenUserMenu}
        />
    );
};

export default NavbarDrawerContainer;